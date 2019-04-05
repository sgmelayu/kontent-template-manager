import { Injectable } from '@angular/core';
import {
    ContentItem,
    DeliveryClient,
    FieldType,
    IDeliveryClient,
    IDeliveryClientConfig,
    ItemResponses,
} from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper } from '../../utilities';
import { IAssetModel, IContentItemModel, IContentTypeModel, IEmbeddedAsset, ITaxonomyModel } from '../shared/shared.models';

@Injectable()
export class DeliveryFetchService {

    getAllTypes(projectId: string, allTypes: IContentTypeModel[], nextPageUrl?: string): Observable<IContentTypeModel[]> {
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
                                codename: m.system.id,
                                id: m.system.id,
                                name: m.system.name
                            }

                        }
                    }));

                    if (response.pagination.nextPage) {
                        this.getAllTypes(projectId, allTypes, response.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(projectId: string, taxonomies: ITaxonomyModel[], nextPageUrl?: string): Observable<ITaxonomyModel[]> {
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

                    if (response.pagination.nextPage) {
                        this.getAllTaxonomies(projectId, taxonomies, response.pagination.nextPage);
                    }
                    return taxonomies;
                })
            );
    }

    getAllContentItems(projectId: string, languageCodenames: string[]): Observable<IContentItemModel[]> {
        const contentItems: IContentItemModel[] = [];
        const obs: Observable<void>[] = [];

        if (languageCodenames.length === 0) {
            // get content items in default language withous specifying any language param
            return this.getContentItemsForLanguage(projectId, contentItems, undefined, undefined);
        }

        for (const languageCodename of languageCodenames) {
            obs.push(
                this.getContentItemsForLanguage(projectId, [], languageCodename, undefined).pipe(
                    map(response => {
                        contentItems.push(...response);
                    })
                )
            );
        }

        return observableHelper.flatMapObservables(obs, 50).pipe(
            map(() => {
                return this.filterIdenticalContentItems(contentItems);
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

    private filterIdenticalContentItems(contentItems: IContentItemModel[]): IContentItemModel[] {
        return contentItems.reduce((unique: IContentItemModel[], item) => {
            const existingItem = unique.find(m => m.system.codename === item.system.codename && m.system.language === item.system.language);
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

    private getContentItemsForLanguage(projectId: string, contentItems: IContentItemModel[], languageCodename?: string, nextPageUrl?: string): Observable<IContentItemModel[]> {
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

                            // make sure that components are added to result as well - needed because of components in rich text elements
                            this.addLinkedItemsToResponse(contentItem.linkedItemCodenames, response, contentItems);

                        }
                    }

                    if (response.pagination.nextPage) {
                        this.getContentItemsForLanguage(projectId, contentItems, languageCodename, response.pagination.nextPage);
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
                const fieldAssets = element.value as IAssetModel[];
                for (const asset of fieldAssets) {
                    assets.push({
                        languageCodename: contentItem.system.language,
                        asset: asset,
                        contentItemCodename: contentItem.system.codename,
                        contentItemId: contentItem.system.id,
                        fieldCodename: elementCodename
                    });
                }
            }
        }

        return assets;
    }
}
