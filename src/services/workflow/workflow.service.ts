import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableHelper } from 'src/utilities';
import { IContentManagementClientConfig, IContentManagementClient, ContentManagementClient } from 'kentico-cloud-content-management';

@Injectable()
export class WorkflowService {

    constructor(
    ) { }

    publishContentItems(itemCodenames: string[], projectId: string, apiKey: string): Observable<void> {
        const obs: Observable<void>[] = [];
        const client = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        });

        for(const itemCodename of itemCodenames) {
            obs.push(
               // client.
            );
        }

        return observableHelper.zipObservables(obs);
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}