import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    ElementModels,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    ICMAssetModel,
    IContentTypeElementModel,
    IContentTypeModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

@Injectable()
export class CmFetchService {

    getAllContentItems(projectId: string, apiKey: string, contentItems: ISlimContentItemModel[], nextPageUrl?: string): Observable<ISlimContentItemModel[]> {
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
                    contentItems.push(...response.data.items.map(m => {
                        return <ISlimContentItemModel>{
                            codename: m.codename,
                            externalId: m.externalId,
                            id: m.id,
                            name: m.name,
                            sitemapLocations: m.sitemapLocations,
                            type: m.type
                        }
                    }));

                    if (response.data.pagination.nextPage) {
                        this.getAllContentItems(projectId, apiKey, contentItems, response.data.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    getAllAssets(projectId: string, apiKey: string, assets: ICMAssetModel[], nextPageUrl?: string): Observable<ICMAssetModel[]> {
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
                    assets.push(...response.data.items.map(m => {
                        return <ICMAssetModel>{
                            externalId: m.externalId,
                            fileName: m.fileName,
                            id: m.id,
                            title: m.title,
                            type: m.type
                        };
                    }));

                    if (response.data.pagination.nextPage) {
                        this.getAllAssets(projectId, apiKey, assets, response.data.pagination.nextPage);
                    }
                    return assets;
                })
            );
    }

    getAllTypes(projectId: string, apiKey: string, allTypes: IContentTypeModel[], nextPageUrl?: string): Observable<IContentTypeModel[]> {
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
                    allTypes.push(...response.data.types.map(m => {
                        const elements: IContentTypeElementModel[] = [];

                        m.elements.forEach(originalElement => {
                            let processed = false;
                            if (originalElement instanceof ElementModels.ElementModel) {
                                elements.push({
                                    codename: originalElement.codename,
                                    name: originalElement.name,
                                    options: [],
                                    taxonomyGroup: undefined,
                                    type: originalElement.type
                                });
                                processed = true;
                            }
                            if (originalElement instanceof ElementModels.MultipleChoiceElementModel) {
                                elements.push({
                                    codename: originalElement.codename,
                                    name: originalElement.name,
                                    options: originalElement.options,
                                    taxonomyGroup: undefined,
                                    type: originalElement.type,
                                });
                                processed = true;
                            }

                            if (!processed) {
                                throw Error(`Unsupported element type for '${m.codename}' content type`);
                            }

                        });

                        return <IContentTypeModel>{
                            system: {
                                codename: m.codename,
                                id: m.id,
                                name: m.name,
                            },
                            elements: elements
                        }
                    }));

                    if (response.data.pagination.nextPage) {
                        this.getAllTypes(projectId, apiKey, allTypes, response.data.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(projectId: string, apiKey: string, taxonomies: ITaxonomyModel[]): Observable<ITaxonomyModel[]> {
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
                    taxonomies.push(...response.data.map(m => {
                        return <ITaxonomyModel>{
                            system: m,
                            terms: m.terms
                        }
                    }));

                    return taxonomies;
                })
            );
    }

    getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}