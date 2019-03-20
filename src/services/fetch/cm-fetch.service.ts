import { Injectable } from '@angular/core';
import {
    AssetModels,
    ContentItemModels,
    ContentManagementClient,
    ContentTypeModels,
    IContentManagementClient,
    IContentManagementClientConfig,
    LanguageVariantModels,
    TaxonomyModels,
} from 'kentico-cloud-content-management';
import { ContentItem } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CmFetchService {

    getAllContentItems(projectId: string, apiKey: string, contentItems: ContentItemModels.ContentItem[], nextPageUrl?: string): Observable<ContentItemModels.ContentItem[]> {
        const query = this.getContentManagementClient(
            {
                projectId: projectId,
                apiKey: apiKey
            }
        ).listContentItems();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    contentItems.push(...response.data.items);

                    if (response.data.pagination.nextPage) {
                        this.getAllContentItems(projectId, apiKey, contentItems, response.data.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    getLanguageVariants(projectId: string, apiKey: string, itemCodename: string): Observable<LanguageVariantModels.ContentItemLanguageVariant[]> {
        const query = this.getContentManagementClient(
            {
                projectId: projectId,
                apiKey: apiKey
            }
        ).listLanguageVariants().byItemCodename(itemCodename);

        return query
            .toObservable()
            .pipe(
                map(response => {
                    return response.data.variants;
                })
            );
    }

    getAllAssets(projectId: string, apiKey: string, assets: AssetModels.Asset[], nextPageUrl?: string): Observable<AssetModels.Asset[]> {
        const query = this.getContentManagementClient(
            {
                projectId: projectId,
                apiKey: apiKey
            }
        ).listAssets();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    assets.push(...response.data.items);

                    if (response.data.pagination.nextPage) {
                        this.getAllAssets(projectId, apiKey, assets, response.data.pagination.nextPage);
                    }
                    return assets;
                })
            );
    }

    getAllTypes(projectId: string, apiKey: string, allTypes: ContentTypeModels.ContentType[], nextPageUrl?: string): Observable<ContentTypeModels.ContentType[]> {
        const query = this.getContentManagementClient(
            {
                projectId: projectId,
                apiKey: apiKey
            }
        ).listContentTypes();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    allTypes.push(...response.data.types);

                    if (response.data.pagination.nextPage) {
                        this.getAllTypes(projectId, apiKey, allTypes, response.data.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(projectId: string, apiKey: string, taxonomies: TaxonomyModels.Taxonomy[]): Observable<TaxonomyModels.Taxonomy[]> {
        const query = this.getContentManagementClient(
            {
                projectId: projectId,
                apiKey: apiKey
            }
        ).listTaxonomies();

        return query
            .toObservable()
            .pipe(
                map(response => {
                    taxonomies.push(...response.data);

                    return taxonomies;
                })
            );
    }

    getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}