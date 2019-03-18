import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { DeliveryClient, IDeliveryClient, IDeliveryClientConfig } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { FetchService } from '../fetch/fetch.service';
import { IImportConfig, IImportData } from './import.models';
import { ContentTypesImportService } from './types/content-types-import.service';

@Injectable()
export class ImportService {

    constructor(
        private contentTypesImportService: ContentTypesImportService,
        private fetchService: FetchService
    ) { }

    import(config: IImportConfig): Observable<void> {
        return this.getImportDataFromProject(config).pipe(
            flatMap(data => {
                return this.contentTypesImportService.importContentTypes(data, config);
            })
        );
    }

    private getImportDataFromProject(config: IImportConfig): Observable<IImportData> {
        const sourceDeliveryClient = this.getDeliveryClient({
            projectId: config.sourceProjectId
        });

        const targetContentManagementClient = this.getContentManagementClient({
            projectId: config.targetProjectId,
            apiKey: config.targetProjectCmApiKey
        })

        const data: IImportData = {
            targetClient: targetContentManagementClient,
            contentTypes: [],
            contentItems: [],
            taxonomies: []
        };

        const obs: Observable<void>[] = [
            this.fetchService.getAllTypes(sourceDeliveryClient, []).pipe(
                map((response) => {
                    data.contentTypes = response;
                })
            ),
            this.fetchService.getAllContentItems(sourceDeliveryClient, []).pipe(
                map((response) => {
                    data.contentItems = response;
                })
            ),
            this.fetchService.getAllTaxonomies(sourceDeliveryClient, []).pipe(
                map((response) => {
                    data.taxonomies = response;
                })
            ),
        ];

        return observableHelper.zipObservables(obs).pipe(
            map(() => data)
        );
    }

    private getDeliveryClient(config: IDeliveryClientConfig): IDeliveryClient {
        return new DeliveryClient(config);
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}
