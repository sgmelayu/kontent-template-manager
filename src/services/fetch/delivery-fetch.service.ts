import { Injectable } from '@angular/core';
import {
    ContentItem,
    DeliveryClient,
    FieldContracts,
    FieldType,
    IDeliveryClient,
    IDeliveryClientConfig,
    ItemResponses,
} from 'kentico-cloud-delivery';
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
import { IFetchConfig } from './fetch-models';

@Injectable()
export class DeliveryFetchService {

    constructor(
        private processingService: ProcessingService
    ) {}

    getAllTypes(projectId: string, allTypes: IContentTypeModel[], config: IFetchConfig, nextPageUrl?: string): Observable<IContentTypeModel[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).types();

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
                            return <IProcessingItem> {
                                type: 'content type',
                                action: 'get',
                                data: m,
                                name: m.system.name
                            }
                        }))
                    }

                    if (response.pagination.nextPage) {
                        this.getAllTypes(projectId, allTypes, config, response.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(projectId: string, taxonomies: ITaxonomyModel[], config: IFetchConfig, nextPageUrl?: string): Observable<ITaxonomyModel[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).taxonomies();

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
                            return <IProcessingItem> {
                                type: 'taxonomy',
                                action: 'get',
                                data: m,
                                name: m.system.name
                            }
                        }))
                    }

                    if (response.pagination.nextPage) {
                        this.getAllTaxonomies(projectId, taxonomies, config, response.pagination.nextPage);
                    }
                    return taxonomies;
                })
            );
    }

    getAllContentItems(projectId: string, languageCodenames: string[], config: IFetchConfig): Observable<IDeliveryContentItemsResult> {
        const contentItems: IContentItemModel[] = [];
        const obs: Observable<void>[] = [];

        if (languageCodenames.length === 0) {
            // get content items in default language withous specifying any language param
            return this.getContentItemsForLanguage(projectId, contentItems, config, undefined, undefined).pipe(
                map(result => {
                    return this.processContentItemsResult(result);
                })
            );
        }

        for (const languageCodename of languageCodenames) {
            obs.push(
                this.getContentItemsForLanguage(projectId, [], config, languageCodename, undefined).pipe(
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

    getContentItemByCodename(projectId: string, codename: string): Observable<IContentItemModel> {
        return this.getDeliveryClient({
            projectId: projectId
        })
            .item(codename)
            .toObservable().pipe(
                map(response => {
                    const item = response.item;

                    return <IContentItemModel>{
                        elements: item.elements,
                        system: item.system,
                        assets: this.extractAssets(item),
                        linkedItemCodenames: this.extractLinkedItemCodenames(item)
                    };
                })
            )
    }

    getDeliveryClient(config: IDeliveryClientConfig): IDeliveryClient {
        return new DeliveryClient(config);
    }

    private processContentItemsResult(contentItems: IContentItemModel[]): IDeliveryContentItemsResult {
        const assets: IAssetModel[] = [];
        const slimContentItems: ISlimContentItemModel[] = [];
        const languageVariants: ILanguageVariantModel[] = [];

        for (const contentItem of contentItems) {
            const fakeAssetId = stringHelper.newGuid(); // delivery API does not return asset/file id = generate new one

            assets.push(...contentItem.assets.map(m => <IAssetModel>{
                deliveryUrl: m.asset.url,
                fileName: m.asset.name,
                id: fakeAssetId,
                type: m.asset.type,
                description: m.asset.description,
                size: m.size,
                zipFilePath: zipHelper.getFullAssetPath(fakeAssetId, m.asset.name),
                externalId: undefined, // N/A Delivery API
                title: m.name // N/A Delivery API
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
                elementCodename: field.name,
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

    private addLinkedItemsToResponse(linkedItemCodenames: string[], response: ItemResponses.DeliveryItemListingResponse<ContentItem>, contentItems: IContentItemModel[]): void {
        for (const linkedItemCodename of linkedItemCodenames) {
            const existingItem = contentItems.find(m => m.system.codename === linkedItemCodename);

            if (!existingItem) {
                // item is component, add it from response
                const linkedItem = response.linkedItems[linkedItemCodename];

                if (!linkedItem) {
                    throw Error(`Could not find linked item with codename '${linkedItemCodename}' in response`);
                }

                contentItems.push({
                    elements: linkedItem.elements,
                    system: linkedItem.system,
                    assets: this.extractAssets(linkedItem),
                    linkedItemCodenames: this.extractLinkedItemCodenames(linkedItem)
                });
            }
        }
    }

    private getContentItemsForLanguage(projectId: string, contentItems: IContentItemModel[], config: IFetchConfig, languageCodename?: string, nextPageUrl?: string): Observable<IContentItemModel[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).items();

        if (languageCodename) {
            query.languageParameter(languageCodename);
        }

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    for (const item of response.items) {
                        if (!contentItems.find(m => m.system.codename === item.system.codename)) {
                            const contentItem = <IContentItemModel>{
                                elements: item.elements,
                                system: item.system,
                                assets: this.extractAssets(item),
                                linkedItemCodenames: this.extractLinkedItemCodenames(item)
                            };

                            contentItems.push(contentItem);

                            if (config.useProcessingService) {
                                this.processingService.addProcessedItems(response.items.map(m => {
                                    return <IProcessingItem> {
                                        type: 'content item',
                                        action: 'get',
                                        data: m,
                                        name: `[${m.system.language}] ${m.system.name}`
                                    }
                                }))
                            }

                            // make sure that components are added to result as well - needed because of components in rich text elements
                            this.addLinkedItemsToResponse(contentItem.linkedItemCodenames, response, contentItems);
                        }
                    }

                    if (response.pagination.nextPage) {
                        this.getContentItemsForLanguage(projectId, contentItems, config, languageCodename, response.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    private extractLinkedItemCodenames(contentItem: ContentItem): string[] {
        const linkedItems: string[] = [];

        for (const elementCodename of Object.keys(contentItem.elements)) {
            const element = contentItem.elements[elementCodename];
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

    private extractAssets(contentItem: ContentItem): IEmbeddedAsset[] {
        const assets: IEmbeddedAsset[] = [];

        for (const elementCodename of Object.keys(contentItem.elements)) {
            const element = contentItem.elements[elementCodename];
            if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                const fieldAssets = element.value as IRawAssetModel[];
                for (const asset of fieldAssets) {
                    assets.push({
                        languageCodename: contentItem.system.language,
                        asset: asset,
                        contentItemCodename: contentItem.system.codename,
                        contentItemId: contentItem.system.id,
                        fieldCodename: elementCodename,
                        description: asset.description,
                        size: asset.size,
                        type: asset.type,
                        name: asset.name
                    });
                }
            }
        }

        return assets;
    }
}
