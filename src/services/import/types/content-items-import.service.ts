import { Injectable } from '@angular/core';
import { ContentItemResponses, IContentManagementClient } from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ProcessingService } from '../../processing/processing.service';
import { ISlimContentItemModel } from '../../shared/shared.models';
import { IContentItemImportPrerequisities, IImportConfig, IImportContentItemResult } from '../import.models';

@Injectable()
export class ContentItemsImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    importContentItems(
        targetClient: IContentManagementClient,
        contentItems: ISlimContentItemModel[],
        prerequisities: IContentItemImportPrerequisities,
        config: IImportConfig): Observable<IImportContentItemResult[]> {
        return this.prepareAllContentItemsWithoutLanguageVariants(targetClient, contentItems, prerequisities).pipe(
            map((createdContentItems) => {
                return createdContentItems;
            })
        );
    }

    private prepareAllContentItemsWithoutLanguageVariants(
        targetClient: IContentManagementClient,
        contentItems: ISlimContentItemModel[],
        prerequisities: IContentItemImportPrerequisities): Observable<IImportContentItemResult[]> {
        const createdContentItems: IImportContentItemResult[] = [];
        const obs: Observable<void>[] = [];

        for (const item of contentItems) {
            obs.push(this.addContentItem(targetClient, item, prerequisities).pipe(
                map(response => {
                    createdContentItems.push({
                        importedItem: response.data,
                        originalItem: item
                    });
                })
            ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return createdContentItems;
            })
        );
    }

    private addContentItem(
        targetClient: IContentManagementClient,
        contentItem: ISlimContentItemModel,
        prerequisities: IContentItemImportPrerequisities): Observable<ContentItemResponses.AddContentItemResponse> {
        const candidateContentType = prerequisities.contentTypes.find(m => m.originalItem.system.id === contentItem.type.id);

        if (!candidateContentType) {
            throw Error(`Could not find candidate content type with id '${contentItem.type.id}'. This was required by '${contentItem.codename}' content item.`);
        }

        return targetClient.addContentItem()
            .withData({
                name: contentItem.name,
                type: {
                    codename: candidateContentType.importedItem.system.codename
                },
            })
            .toObservable()
            .pipe(
                map(response => {
                    this.processingService.addProcessedItem({
                        item: contentItem,
                        status: 'imported',
                        action: 'Add content item',
                        name: response.data.codename
                    });

                    return response;
                })
            );
    }
}
