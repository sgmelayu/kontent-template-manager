import { Injectable } from '@angular/core';
import {
    AssetModels,
    ContentItemModels,
    ContentManagementClient,
    ContentTypeModels,
    IContentManagementClient,
    IContentManagementClientConfig,
    TaxonomyModels,
} from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { BaseService } from '../base-service';
import { CmFetchService } from '../fetch/cm-fetch.service';
import { ICleanupData } from './cleanup.models';

@Injectable()
export class CleanupService extends BaseService {

    constructor(
        private cmFetchService: CmFetchService
    ) {
        super();
    }

    cleanupProject(projectId: string, apiKey: string, cleanupData: ICleanupData): Observable<void> {
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

    private deleteAssets(client: IContentManagementClient, assets: AssetModels.Asset[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const asset of assets) {
            obs.push(
                client.deleteAsset().byAssetId(asset.id).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                        })
                    ));
        }

        return observableHelper.zipObservables(obs);
    }

    private deleteContentTypes(client: IContentManagementClient, contentTypes: ContentTypeModels.ContentType[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const type of contentTypes) {
            obs.push(
                client.deleteContentType().byItemCodename(type.codename).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                        })
                    ));
        }

        return observableHelper.zipObservables(obs);
    }

    private deleteTaxonomies(client: IContentManagementClient, taxonomies: TaxonomyModels.Taxonomy[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const taxonomy of taxonomies) {
            obs.push(
                client.deleteTaxonomy().byTaxonomyCodename(taxonomy.codename).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                        })
                    ));
        }

        return observableHelper.zipObservables(obs);
    }


    private deleteContentItems(client: IContentManagementClient, contentItems: ContentItemModels.ContentItem[]): Observable<void> {
        const obs: Observable<void>[] = [];

        for (const item of contentItems) {
            obs.push(
                client.deleteContentItem().byItemCodename(item.codename).toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map((response) => {
                        })
                    ));
        }

        return observableHelper.zipObservables(obs);
    }

}