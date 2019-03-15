import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { DeliveryClient, IDeliveryClient, IDeliveryClientConfig } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';

import { IImportData } from './import.models';
import { ContentTypesImportService } from './types/content-types-import.service';

@Injectable()
export class ImportService {

    constructor(
        private contentTypesImportService: ContentTypesImportService
    ) { }

    import(data: IImportData): Observable<void> {
        const sourceDeliveryClient = this.getDeliveryClient({
            projectId: data.sourceProjectId
        });

        const targetContentManagementClient = this.getContentManagementClient({
            projectId: data.targetProjectId,
            apiKey: data.targetProjectCmApiKey
        })

        return this.contentTypesImportService.importContentTypes(sourceDeliveryClient, targetContentManagementClient, data);
    }

    private getDeliveryClient(config: IDeliveryClientConfig): IDeliveryClient {
        return new DeliveryClient(config);
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}
