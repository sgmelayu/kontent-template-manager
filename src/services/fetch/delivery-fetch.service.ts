import { Injectable } from '@angular/core';
import { ContentItem, DeliveryClient, FieldType, IDeliveryClient, IDeliveryClientConfig } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    IAssetModel,
    IContentItemModel,
    IContentTypeModel,
    ITaxonomyModel,
    IEmbeddedAsset,
} from '../shared/shared.models';

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
                    contentItems.push(...response.items.map(
                        m => {
                            return <IContentItemModel>{
                                elements: m.elements,
                                system: m.system,
                                assets: this.extractAssets(m)
                            };
                        }
                    ));

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