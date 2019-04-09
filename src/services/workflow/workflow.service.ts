import { Injectable } from '@angular/core';
import { IContentManagementClient } from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper } from '../../utilities';
import { BaseService } from '../base-service';
import { IImportConfig, IPublishItemRequest } from '../import/import.models';
import { ProcessingService } from '../processing/processing.service';

@Injectable()
export class WorkflowService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    publishContentItems(items: IPublishItemRequest[], client: IContentManagementClient, config: IImportConfig): Observable<IPublishItemRequest[]> {
        const obs: Observable<void>[] = [];
        for (const item of items) {
            obs.push(
                client.publishOrScheduleLanguageVariant()
                    .byItemId(item.itemId)
                    .byLanguageId(item.languageId)
                    .toObservable()
                    .pipe(
                        map(() => {
                            this.processingService.addProcessedItem({
                                data: item.itemId,
                                type: 'content item',
                                action: 'publish',
                                name: `${item.itemId} [${item.languageId}]`
                            });
                        })
                    )
            );
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return items;
            })
        );
    }
}
