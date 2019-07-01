import { Injectable } from '@angular/core';
import {
    DeliveryClient,
    FieldContracts,
    FieldType,
    IContentItem,
    IDeliveryClient,
    ItemResponses,
} from 'kentico-cloud-delivery';
import { getType } from 'mime';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper, stringHelper, zipHelper } from '../../utilities';
import { IProcessingItem } from '../processing/processing-models';
import { ProcessingService } from '../processing/processing.service';
import {
    ElementType,
    IAssetElementValue,
    IAssetModel,
    IContentItemElement,
    IContentItemModel,
    IContentTypeModel,
    IDeliveryContentItemsResult,
    IElementValue,
    IEmbeddedAsset,
    ILanguageVariantModel,
    IMultipleChoiceElementValue,
    IRawAssetModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';
import { IDeliveryContentItemsFetchConfig, IDeliveryFetchConfig } from './fetch-models';

@Injectable({
    providedIn: 'root'
})
export class DeliveryFetchService {

    constructor(
        private processingService: ProcessingService
    ) { }

    getAllTypes(config: IDeliveryFetchConfig, allTypes: IContentTypeModel[], nextPageUrl?: string): Observable<IContentTypeModel[]> {
        const query = this.getDeliveryClient(config).types();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    allTypes.push(...response.types.map(m => {
                        return <IContentTypeModel>{
                            elements: m.elements,
                            system: {
                                codename: m.system.codename,
                                id: m.system.id,
                                name: m.system.name
                            }

                        }
                    }));

                    if (config.useProcessingService) {
                        this.processingService.addProcessedItems(response.types.map(m => {
                            return <IProcessingItem>{
                                type: 'content type',
                                action: 'get',
                                data: m,
                                name: m.system.name
                            }
                        }))
                    }

                    if (response.pagination.nextPage) {
                        this.getAllTypes(config, allTypes, response.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(config: IDeliveryFetchConfig, taxonomies: ITaxonomyModel[], nextPageUrl?: string): Observable<ITaxonomyModel[]> {
        const query = this.getDeliveryClient(config).taxonomies();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    taxonomies.push(...response.taxonomies.map(m => {
                        return <ITaxonomyModel>{
                            system: m.system,
                            terms: m.terms
                        }
                    }));

                    if (config.useProcessingService) {
                        this.processingService.addProcessedItems(response.taxonomies.map(m => {
                            return <IProcessingItem>{
                                type: 'taxonomy',
                                action: 'get',
                                data: m,
                                name: m.system.name
                            }
                        }))
                    }

                    if (response.pagination.nextPage) {
                        this.getAllTaxonomies(config, taxonomies, response.pagination.nextPage);
                    }
                    return taxonomies;
                })
            );
    }

    getAllContentItems(config: IDeliveryContentItemsFetchConfig, languageCodenames: string[]): Observable<IDeliveryContentItemsResult> {
        const contentItems: IContentItemModel[] = [];
        const obs: Observable<void>[] = [];

        if (languageCodenames.length === 0) {
            // get content items in default language withous specifying any language param
            return this.getContentItemsForLanguage(config, contentItems, undefined, undefined).pipe(
                map(result => {
                    return this.processContentItemsResult(result);
                })
            );
        }

        for (const languageCodename of languageCodenames) {
            obs.push(
                this.getContentItemsForLanguage(config, [], languageCodename, undefined).pipe(
                    map(response => {
                        contentItems.push(...response);
                    })
                )
            );
        }

        return observableHelper.flatMapObservables(obs, 50).pipe(
            map(() => {
                return this.processContentItemsResult(contentItems);
            })
        )
    }

    getContentItemByCodename(config: IDeliveryFetchConfig, codename: string): Observable<IContentItemModel> {
        return this.getDeliveryClient(config)
            .item(codename)
            .toObservable().pipe(
                map(response => {
                    const item = response.item;

                    return <IContentItemModel>{
                        elements: item.debug.rawElements,
                        system: item.system,
                        assets: this.extractAssets(item),
                        linkedItemCodenames: this.extractLinkedItemCodenames(item)
                    };
                })
            )
    }

    getDeliveryClient(config: IDeliveryFetchConfig): IDeliveryClient {
        return new DeliveryClient({
            projectId: config.projectId,
            enableSecuredMode: config.securedApiKey ? true : false,
            securedApiKey: config.securedApiKey
        });
    }

    private processContentItemsResult(contentItems: IContentItemModel[]): IDeliveryContentItemsResult {
        const assets: IAssetModel[] = [];
        const slimContentItems: ISlimContentItemModel[] = [];
        const languageVariants: ILanguageVariantModel[] = [];

        for (const contentItem of contentItems) {

            assets.push(...contentItem.assets.map(m => {
                // delivery API does not return asset/file in all cases - use custom generated one for such scenarios
                const assetId = !m.id ? stringHelper.newGuid() : m.id;

                return <IAssetModel>{
                    deliveryUrl: m.asset.url,
                    fileName: m.asset.name,
                    id: assetId,
                    type: m.asset.type,
                    description: m.asset.description,
                    size: m.size,
                    zipFilePath: zipHelper.getFullAssetPath(assetId, m.asset.name),
                    externalId: undefined, // N/A Delivery API
                    title: m.name // N/A Delivery API
                }
            }));

            slimContentItems.push(
                {
                    codename: contentItem.system.codename,
                    id: contentItem.system.id,
                    name: contentItem.system.name,
                    typeId: undefined,
                    typeCodename: contentItem.system.type
                }
            )

            languageVariants.push(this.extractLanguageVariant(contentItem));
        }

        return {
            assets: assets,
            contentItems: this.filterIdenticalContentItems(slimContentItems),
            languageVariants: languageVariants
        }
    }

    private extractLanguageVariant(contentItem: IContentItemModel): ILanguageVariantModel {
        if (!contentItem.system.language) {
            throw Error(`Invalid or missing language for content item '${contentItem.system.codename}'`);
        }

        const elements: IContentItemElement[] = [];
        for (const elementCodename of Object.keys(contentItem.elements)) {
            const field = contentItem.elements[elementCodename];
            let fieldValue: IElementValue = undefined;

            if (field.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                const assetFieldValue = field.value as FieldContracts.IAssetContract[];
                fieldValue = <IAssetElementValue[]>assetFieldValue;

            }
            if (field.type.toLowerCase() === FieldType.MultipleChoice.toLowerCase()) {
                const multipleFieldValue = field.value as FieldContracts.IMultipleChoiceOptionContract[];
                fieldValue = <IMultipleChoiceElementValue[]>multipleFieldValue;
            }
            else {
                fieldValue = field.value;
            }

            elements.push({
                value: fieldValue,
                elementCodename: elementCodename,
                elementModel: {
                    codename: elementCodename,
                    type: field.type as ElementType,
                    mode: undefined,
                    name: field.name,
                    options: [],
                    taxonomyGroup: field.taxonomy_group
                }
            })
        }

        return {
            itemCodename: contentItem.system.codename,
            itemId: contentItem.system.id,
            languageCodename: contentItem.system.language,
            elements: elements
        }
    }

    private filterIdenticalContentItems(contentItems: ISlimContentItemModel[]): ISlimContentItemModel[] {
        return contentItems.reduce((unique: ISlimContentItemModel[], item) => {
            const existingItem = unique.find(m => m.codename === item.codename);
            return existingItem ? unique : [...unique, item]
        }, []);
    }

    private addLinkedItemsToResponse(linkedItemCodenames: string[], response: ItemResponses.DeliveryItemListingResponse<IContentItem>, contentItems: IContentItemModel[]): void {
        for (const linkedItemCodename of linkedItemCodenames) {
            const existingItem = contentItems.find(m => m.system.codename === linkedItemCodename);

            if (!existingItem) {
                // item is component, add it from response
                const linkedItem = response.linkedItems[linkedItemCodename];

                if (!linkedItem) {
                    throw Error(`Could not find linked item with codename '${linkedItemCodename}' in response`);
                }

                contentItems.push({
                    elements: linkedItem.debug.rawElements,
                    system: linkedItem.system,
                    assets: this.extractAssets(linkedItem),
                    linkedItemCodenames: this.extractLinkedItemCodenames(linkedItem)
                });
            }
        }
    }

    private addContentItem(config: IDeliveryContentItemsFetchConfig, response: ItemResponses.DeliveryItemListingResponse<IContentItem>, sourceItem: IContentItem, contentItems: IContentItemModel[]): void {
        const contentItem = <IContentItemModel>{
            elements: sourceItem.debug.rawElements,
            system: sourceItem.system,
            assets: this.extractAssets(sourceItem),
            linkedItemCodenames: this.extractLinkedItemCodenames(sourceItem)
        };

        contentItems.push(contentItem);

        if (config.useProcessingService) {
            this.processingService.addProcessedItem(<IProcessingItem>{
                type: 'content item',
                action: 'get',
                data: sourceItem,
                name: `[${sourceItem.system.language}] ${sourceItem.system.name}`
            }
            );
        }

        // make sure that components are added to result as well - needed because of components in rich text elements
        this.addLinkedItemsToResponse(contentItem.linkedItemCodenames, response, contentItems);
    }

    private getContentItemsForLanguage(config: IDeliveryContentItemsFetchConfig, contentItems: IContentItemModel[], languageCodename?: string, nextPageUrl?: string): Observable<IContentItemModel[]> {
        const query = this.getDeliveryClient(config).items();

        if (languageCodename) {
            query.languageParameter(languageCodename);
        }

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .depthParameter(config.depth)
            .toObservable()
            .pipe(
                map(response => {
                    for (const item of response.items) {
                        // process main items
                        if (!contentItems.find(m => m.system.codename === item.system.codename)) {
                            this.addContentItem(config, response, item, contentItems);
                        }
                    }

                    // process linked items that are part of 'modular_items_ response
                    const linkedItemCodenames = Object.keys(response.linkedItems);
                    for (const linkedItemCodename of linkedItemCodenames) {
                        if (!contentItems.find(m => m.system.codename === linkedItemCodename)) {
                            const item = response.linkedItems[linkedItemCodename];
                            this.addContentItem(config, response, item, contentItems);
                        }
                    }

                    if (response.pagination.nextPage) {
                        this.getContentItemsForLanguage(config, contentItems, languageCodename, response.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    private extractLinkedItemCodenames(contentItem: IContentItem): string[] {
        const linkedItems: string[] = [];

        for (const elementCodename of Object.keys(contentItem.debug.rawElements)) {
            const element = contentItem.debug.rawElements[elementCodename];
            if (element.type.toLowerCase() === FieldType.ModularContent.toLowerCase()) {
                const modularContent = element.value as string[];
                for (const modularItem of modularContent) {
                    if (!linkedItems.includes(modularItem)) {
                        linkedItems.push(modularItem);
                    }
                }
            }

            if (element.type.toLowerCase() === FieldType.RichText.toLowerCase()) {
                const modularContent = (element as any)['modular_content'] as string[];
                for (const modularItem of modularContent) {
                    if (!linkedItems.includes(modularItem)) {
                        linkedItems.push(modularItem);
                    }
                }
            }
        }

        return linkedItems;
    }

    private extractAssets(contentItem: IContentItem): IEmbeddedAsset[] {
        const assets: IEmbeddedAsset[] = [];

        for (const elementCodename of Object.keys(contentItem.debug.rawElements)) {
            const element = contentItem.debug.rawElements[elementCodename];

            // process asset elements
            if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                const fieldAssets = element.value as IRawAssetModel[];
                for (const asset of fieldAssets) {
                    assets.push({
                        assetSource: 'assetElement',
                        languageCodename: contentItem.system.language,
                        asset: asset,
                        contentItemCodename: contentItem.system.codename,
                        contentItemId: contentItem.system.id,
                        fieldCodename: elementCodename,
                        description: asset.description,
                        size: asset.size || 0,
                        type: asset.type,
                        name: asset.name,
                        id: false,
                    });
                }
            }

            // process rich text elements
            if (element.type.toLowerCase() === FieldType.RichText.toLowerCase()) {
                const richTextElement = element as FieldContracts.IRichTextFieldContract;
                for (const imageKey of Object.keys(richTextElement.images)) {
                    const image = richTextElement.images[imageKey];

                    const fileType = this.extractMimeTypeFromUrl(image.url);

                    if (!fileType) {
                        throw Error(`Cannot determine type of asset from '${image.url}'. This is referenced by '${contentItem.system.codename}' content item in element '${element.name}'`);
                    }

                    assets.push({
                        assetSource: 'richTexElementtImages',
                        asset: {
                            description: image.description || '',
                            name: image.image_id,
                            size: 0, // not available
                            type: fileType,
                            url: image.url,
                        },
                        contentItemCodename: contentItem.system.codename,
                        contentItemId: contentItem.system.id,
                        fieldCodename: elementCodename,
                        description: image.description,
                        size: 0, // not available
                        type: fileType,
                        name: image.image_id,
                        languageCodename: contentItem.system.language,
                        id: image.image_id
                    });
                }
            }
        }

        return assets;
    }

    private extractMimeTypeFromUrl(url: string): string | null {
        return getType(url);
    }
}
