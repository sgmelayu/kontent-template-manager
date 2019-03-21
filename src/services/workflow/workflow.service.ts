import { Injectable } from '@angular/core';
import { IContentManagementClient } from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { observableHelper } from '../../utilities';
import { BaseService } from '../base-service';
import { IImportConfig, IPublishItemRequest } from '../import/import.models';

@Injectable()
export class WorkflowService extends BaseService {

    constructor(
    ) {
        super();
    }

    publishContentItems(items: IPublishItemRequest[], client: IContentManagementClient, config: IImportConfig): Observable<IPublishItemRequest[]> {
        const obs: Observable<void>[] = [];
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
}