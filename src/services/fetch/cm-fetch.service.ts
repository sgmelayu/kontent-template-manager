import { Injectable } from '@angular/core';
import {
    ContentItemModels,
    ContentTypeModels,
    IContentManagementClient,
    LanguageVariantModels,
    TaxonomyModels,
    AssetModels,
} from 'kentico-cloud-content-management';
import { ContentItem } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CmFetchService {

    getAllContentItems(cmClient: IContentManagementClient, contentItems: ContentItemModels.ContentItem[], nextPageUrl?: string): Observable<ContentItemModels.ContentItem[]> {
        const query = cmClient.listContentItems();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    contentItems.push(...response.data.items);

                    if (response.data.pagination.nextPage) {
                        this.getAllContentItems(cmClient, contentItems, response.data.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    getLanguageVariants(cmClient: IContentManagementClient, itemCodename: string): Observable<LanguageVariantModels.ContentItemLanguageVariant[]> {
        const query = cmClient.listLanguageVariants().byItemCodename(itemCodename);

        return query
            .toObservable()
            .pipe(
                map(response => {
                    return response.data.variants;
                })
            );
    }

    getAllAssets(cmClient: IContentManagementClient, assets: AssetModels.Asset[], nextPageUrl?: string): Observable<AssetModels.Asset[]> {
        const query = cmClient.listAssets();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    assets.push(...response.data.items);

                    if (response.data.pagination.nextPage) {
                        this.getAllAssets(cmClient, assets, response.data.pagination.nextPage);
                    }
                    return assets;
                })
            );
    }

    getAllTypes(cmClient: IContentManagementClient, allTypes: ContentTypeModels.ContentType[], nextPageUrl?: string): Observable<ContentTypeModels.ContentType[]> {
        const query = cmClient.listContentTypes();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    allTypes.push(...response.data.types);

                    if (response.data.pagination.nextPage) {
                        this.getAllTypes(cmClient, allTypes, response.data.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(cmClient: IContentManagementClient, taxonomies: TaxonomyModels.Taxonomy[]): Observable<TaxonomyModels.Taxonomy[]> {
        const query = cmClient.listTaxonomies();

        return query
            .toObservable()
            .pipe(
                map(response => {
                    taxonomies.push(...response.data);


                    return taxonomies;
                })
            );
    }
}