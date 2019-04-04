import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    ElementModels,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper } from '../../utilities';
import { BaseService } from '../base-service';
import {
    ICMAssetModel,
    IContentItemElement,
    IContentTypeElementModel,
    IContentTypeModel,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

@Injectable()
export class CmFetchService extends BaseService {


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
                        return <ISlimContentItemModel> {
                            codename: m.codename,
                            externalId: m.externalId,
                            id: m.id,
                            name: m.name,
                            sitemapLocations: m.sitemapLocations,
                            type: m.type
                        };
                    }));

                    if (response.data.pagination.nextPage) {
                        this.getAllContentItems(projectId, apiKey, contentItems, response.data.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    getLanguageVariantsForContentItems(projectId: string, apiKey: string, prerequisities: {
        contentItems: ISlimContentItemModel[],
        contentTypes: IContentTypeModel[],
    }): Observable<ILanguageVariantModel[]> {
        const client = this.getContentManagementClient(
            {
                projectId: projectId,
                apiKey: apiKey
            }
        );

        const languageVariants: ILanguageVariantModel[] = [];
        const obs: Observable<void>[] = [];

        for (const contentItem of prerequisities.contentItems) {
            obs.push(client.listLanguageVariants()
                .byItemCodename(contentItem.codename)
                .toObservable()
                .pipe(
                    map(response => {
                        languageVariants.push(...response.data.variants.map(variant => {
                            return <ILanguageVariantModel> {
                                elements: variant.elements.map(element => {
                                    const contentType = prerequisities.contentTypes.find(s => s.system.id === contentItem.type.id);
                                    if (!contentType) {
                                        throw Error(`Could not find content type for content item '${contentItem.codename}'`);
                                    }

                                    const contentTypeElement = contentType.elements.find(s => s.id === element.element.id);

                                    if (!contentTypeElement) {
                                        throw Error(`Could not find content type element for content item '${contentItem.codename}' with id '${element.element.id}'`);
                                    }

                                    return <IContentItemElement> {
                                        element: element.element,
                                        value: element.value,
                                        elementModel: contentTypeElement
                                    };
                                }),
                                item: {
                                    codename: variant.item.codename,
                                    externalId: variant.item.externalId,
                                    id: variant.item.id
                                },
                                language: {
                                    codename: variant.language.codename,
                                    externalId: variant.language.externalId,
                                    id: variant.language.id
                                },
                                lastModified: variant.lastModified
                            };
                        }));
                    })
                ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(map(() => {
            return languageVariants;
        }));
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
                        return <ICMAssetModel> {
                            externalId: m.externalId,
                            fileName: m.fileName,
                            id: m.id,
                            title: m.title,
                            type: m.type,
                            deliveryUrl: this.constructDeliveryAssetUrl(projectId, m.fileReference.id, m.fileName)
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
                                    type: originalElement.type,
                                    id: originalElement.id,
                                    mode: undefined
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
                                    id: originalElement.id,
                                    mode: originalElement.mode
                                });
                                processed = true;
                            }

                            if (!processed) {
                                throw Error(`Unsupported element type for '${m.codename}' content type`);
                            }

                        });

                        return <IContentTypeModel> {
                            system: {
                                codename: m.codename,
                                id: m.id,
                                name: m.name,
                            },
                            elementsWithOriginalCodename: [],
                            elements: elements
                        };
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
                        return <ITaxonomyModel> {
                            system: m,
                            terms: m.terms
                        };
                    }));

                    return taxonomies;
                })
            );
    }

    getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }

    private getDataCenterFromProject(projectId: string): 'EU' | 'US' | 'AU' {
        const dataCenterIdentifier = projectId.substr(14, 2);

        if (dataCenterIdentifier === '00') {
            return 'US';
        }

        if (dataCenterIdentifier === '01') {
            return 'EU';
        }

        if (dataCenterIdentifier === '02') {
            return 'AU';
        }

        return 'US';
    }

    private constructDeliveryAssetUrl(projectId: string, fileId: string, assetFilename: string): string {
        const dataCenter = this.getDataCenterFromProject(projectId);
        let dataCenterIdentifier = 'us-01';

        if (dataCenter === 'EU') {
            dataCenterIdentifier = 'eu-01';
        }
        if (dataCenter === 'AU') {
            dataCenterIdentifier = 'au-01';
        }

        return `https://assets-${dataCenterIdentifier}.kc-usercontent.com/${projectId}/${fileId}/${assetFilename}`;
    }

}
