import { Injectable } from '@angular/core';
import { ManagementClient } from '@kentico/kontent-management';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, delay } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

export interface IPublishItemRequest {
    itemId: string;
    languageId: string;
    title: string;
}

@Injectable({
    providedIn: 'root'
})
export class PublishService {
    constructor() {}

    tryPublishItems(
        config: { projectId: string; apiKey: string },
        items: IPublishItemRequest[],
        callbacks: {
            onSuccess: (item: IPublishItemRequest) => void;
            onFailed: (item: IPublishItemRequest) => void;
        }
    ): Observable<void> {
        const client = new ManagementClient({
            projectId: config.projectId,
            apiKey: config.apiKey,
            retryStrategy: {
                addJitter: true,
                canRetryError: (err) => true,
                deltaBackoffMs: 500,
                maxAttempts: 5,
                maxCumulativeWaitTimeMs: 30
            }
        });
        const obs: Observable<void>[] = [];

        // get unique array of requested items in case the same item would be published multiple times
        const uniqueItems: {[key: string]:  true} = {};
        const getUniqueKey: (item: IPublishItemRequest) => string = (item) => `${item.itemId}_${item.languageId}`;

        for (const item of items) {
            const uniqueKey = getUniqueKey(item);
            if (uniqueItems[uniqueKey]) {
                // item was already processed
                continue;
            }

            // mark item as processed
            uniqueItems[uniqueKey] = true;

            obs.push(
                client
                    .publishOrScheduleLanguageVariant()
                    .byItemId(item.itemId)
                    .byLanguageId(item.languageId)
                    .withoutData()
                    .toObservable()
                    .pipe(
                        map((response) => {
                            callbacks.onSuccess(item);
                        }),
                        catchError((error) => {
                            callbacks.onFailed(item);

                            // ignore error & continue
                            return of(undefined);
                        })
                    )
            );
        }

        return observableHelper.flatMapObservables(obs, 250);
    }
}
