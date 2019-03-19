import { Injectable } from '@angular/core';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { BaseService } from '../base-service';
import { IImportConfig, IPublishItemRequest } from '../import/import.models';

@Injectable()
export class WorkflowService extends BaseService {

    constructor(
    ) {
        super();
    }

    publishContentItems(items: IPublishItemRequest[], config: IImportConfig): Observable<IPublishItemRequest[]> {
        const obs: Observable<void>[] = [];
        const client = this.getContentManagementClient({
            projectId: config.targetProjectId,
            apiKey: config.targetProjectCmApiKey
        });

        for (const item of items) {
            obs.push(
                client.publishOrScheduleLanguageVariant()
                    .byItemCodename(item.itemCodename)
                    .byLanguageCodename(item.languageCodename)
                    .toObservable()
                    .pipe(
                        delay(this.cmRequestDelay),
                        map(() => {
                            config.processItem({
                                item: item.itemCodename,
                                status: 'published',
                                action: 'Publish',
                                name: `${item.itemCodename} [${item.languageCodename}]`
                            });
                        })
                    )
            );
        }

        return observableHelper.zipObservables(obs).pipe(
            map(() => {
                return items;
            })
        );
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}