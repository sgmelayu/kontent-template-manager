import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { BaseService } from '../base-service';
import { CmFetchService } from '../fetch/cm-fetch.service';

@Injectable()
export class CleanupService extends BaseService {

    constructor(
        private cmFetchService: CmFetchService
    ) {
        super();
    }

    cleanupProject(projectId: string, apiKey: string): Observable<void> {
        const client = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        });

        return this.deleteContentItems(client)
            .pipe(
                flatMap(() => {
                    return this.deleteAssets(client);
                }),
                flatMap(() => {
                    return this.deleteTaxonomies(client)
                }),
                flatMap(() => {
                    return this.deleteContentTypes(client)
                })
            );
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }

    private deleteAssets(client: IContentManagementClient): Observable<void> {
        return this.cmFetchService.getAllAssets(client, []).pipe(
            flatMap(assets => {
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
            }),
            map(() => {

            })
        )
    }

    private deleteContentTypes(client: IContentManagementClient): Observable<void> {
        return this.cmFetchService.getAllTypes(client, []).pipe(
            flatMap(types => {
                const obs: Observable<void>[] = [];

                for (const type of types) {
                    obs.push(
                        client.deleteContentType().byItemCodename(type.codename).toObservable()
                            .pipe(
                                delay(this.cmRequestDelay),
                                map((response) => {
                                })
                            ));
                }

                return observableHelper.zipObservables(obs);
            }),
            map(() => {

            })
        )
    }

    private deleteTaxonomies(client: IContentManagementClient): Observable<void> {
        return this.cmFetchService.getAllTaxonomies(client, []).pipe(
            flatMap(taxonomies => {
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
            }),
            map(() => {

            })
        )
    }


    private deleteContentItems(client: IContentManagementClient): Observable<void> {
        return this.cmFetchService.getAllContentItems(client, []).pipe(
            flatMap((items) => {
                const obs: Observable<void>[] = [];

                for (const item of items) {
                    obs.push(
                        client.deleteContentItem().byItemCodename(item.codename).toObservable()
                            .pipe(
                                delay(this.cmRequestDelay),
                                map((response) => {
                                })
                            ));
                }

                return observableHelper.zipObservables(obs);
            }),
            map(() => {

            })
        )
    }

}