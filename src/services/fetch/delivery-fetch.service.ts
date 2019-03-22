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
                            system: m.system
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

    getAllContentItems(projectId: string, contentItems: IContentItemModel[], nextPageUrl?: string): Observable<IContentItemModel[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).items();

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

                            contentItems.push(contentItem)

                            // make sure that components are added to result as well - needed because of components in rich text elements
                            this.addLinkedItemsToResponse(contentItem.linkedItemCodenames, response, contentItems);

                        }
                    }


                    if (response.pagination.nextPage) {
                        this.getAllContentItems(projectId, contentItems, response.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    getDeliveryClient(config: IDeliveryClientConfig): IDeliveryClient {
        return new DeliveryClient(config);
    }

    /**
     * This is required because if rich text of item contains components, they are not fetched by standard delivery and need to be added from given response
     */
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