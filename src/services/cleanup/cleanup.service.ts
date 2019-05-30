import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
    SharedModels,
} from 'kentico-cloud-content-management';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, flatMap, map } from 'rxjs/operators';

import { observableHelper } from '../../utilities';
import { BaseService } from '../base-service';
import { CmFetchService } from '../fetch/cm-fetch.service';
import { ProcessingService } from '../processing/processing.service';
import { IAssetModel, IContentTypeModel, ISlimContentItemModel, ITaxonomyModel } from '../shared/shared.models';
import { ICleanupData } from './cleanup.models';

@Injectable({
    providedIn: 'root'
})
export class CleanupService extends BaseService {

    private readonly maxNumberOfRetries = 50;

    constructor(
        private cmFetchService: CmFetchService,
        private processingService: ProcessingService
    ) {
        super();
    }

    cleanupProject(projectId: string, apiKey: string, cleanupData: ICleanupData, numberOfRetries = 0): Observable<void> {
        const client = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        });

        return this.deleteContentItems(client, cleanupData.contentItems)
            .pipe(
                delay(this.cmRequestDelay),
                flatMap(() => {
                    return this.deleteAssets(client, cleanupData.assets);
                }),
                delay(this.cmRequestDelay),
                flatMap(() => {
                    return this.deleteTaxonomies(client, cleanupData.taxonomies)
                }),
                delay(this.cmRequestDelay),
                flatMap(() => {
                    return this.deleteContentTypes(client, cleanupData.contentTypes)
                }),
                catchError(error => {
                    if (error instanceof SharedModels.ContentManagementCloudError) {
                        // errorCode = item / object is used and cannot be deleted = try again
                        if (error.errorCode === 0) {
                            numberOfRetries++;
                            console.warn(`Deleting item failed with message '${error.message}'. Retrying for the '${numberOfRetries}' time with ${this.maxNumberOfRetries - numberOfRetries} retries remaining.`);
                            return this.prepareCleanup(projectId, apiKey).pipe(
                                flatMap(cleanupData => {
                                    return this.cleanupProject(projectId, apiKey, cleanupData)
                                })
                            )
                        }
                    }
                    return throwError(error);
                })
            );
    }

    prepareCleanup(projectId: string, apiKey: string): Observable<ICleanupData> {
        const result: ICleanupData = {
            assets: [],
            contentItems: [],
            contentTypes: [],
            taxonomies: []
        }

        return this.cmFetchService.getAllAssets(projectId, apiKey, []).pipe(
            flatMap(assets => {
                result.assets = assets;

                return this.cmFetchService.getAllContentItems(projectId, apiKey, [])
            }),
            flatMap(contentItems => {
                result.contentItems = contentItems;

                return this.cmFetchService.getAllTaxonomies(projectId, apiKey, []);
            }),
            flatMap(taxonomies => {
                result.taxonomies = taxonomies;

                return this.cmFetchService.getAllTypes(projectId, apiKey, []);
            }),
            map(contentTypes => {
                result.contentTypes = contentTypes;

                return result;
            })
        );
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }

    private deleteAssets(client: IContentManagementClient, assets: IAssetModel[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const asset of assets) {
            obs.push(
                client.deleteAsset().byAssetId(asset.id).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                            this.processingService.addProcessedItem(
                                {
                                    data: asset.fileName,
                                    type: 'asset',
                                    action: 'delete',
                                    name: asset.fileName
                                }
                            );
                        })
                    ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay);
    }

    private deleteContentTypes(client: IContentManagementClient, contentTypes: IContentTypeModel[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const type of contentTypes) {
            obs.push(
                client.deleteContentType().byTypeCodename(type.system.codename).toObservable()
                    .pipe(
                        map((response) => {
                            this.processingService.addProcessedItem(
                                {
                                    data: type.system.codename,
                                    type: 'content type',
                                    action: 'delete',
                                    name: type.system.codename
                                }
                            );
                        })
                    ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay);
    }

    private deleteTaxonomies(client: IContentManagementClient, taxonomies: ITaxonomyModel[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const taxonomy of taxonomies) {
            obs.push(
                client.deleteTaxonomy().byTaxonomyCodename(taxonomy.system.codename).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                            this.processingService.addProcessedItem(
                                {
                                    data: taxonomy.system.codename,
                                    type: 'taxonomy',
                                    action: 'delete',
                                    name: taxonomy.system.codename
                                }
                            );
                        })
                    ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay);
    }


    private deleteContentItems(client: IContentManagementClient, contentItems: ISlimContentItemModel[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const item of contentItems) {
            obs.push(
                client.deleteContentItem().byItemCodename(item.codename).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                            this.processingService.addProcessedItem(
                                {
                                    data: item.codename,
                                    type: 'content item',
                                    action: 'delete',
                                    name: item.codename
                                }
                            );
                        })
                    ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay);
    }

}