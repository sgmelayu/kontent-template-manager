import { Injectable } from '@angular/core';
import { ContentItemModels, IContentManagementClient, LanguageVariantModels, SharedContracts } from 'kentico-cloud-content-management';
import { ContentItem, FieldType } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { IImportConfig, IImportData } from '../import.models';

@Injectable()
export class ContentItemsImportService {

    importContentItems(data: IImportData, config: IImportConfig): Observable<void> {
        const obs: Observable<ContentItemModels.ContentItem>[] = [];

        data.contentItems.forEach(contentItem => {
            obs.push(this.createContentItem(contentItem, data.targetClient, config));
        });

        return observableHelper.zipObservables(obs);
    }

    private createContentItem(contentItem: ContentItem, targetClient: IContentManagementClient, data: IImportConfig): Observable<ContentItemModels.ContentItem> {
        return targetClient.addContentItem()
            .withData({
                name: contentItem.system.name,
                type: {
                    codename: contentItem.system.type
                },
            })
            .toObservable()
            .pipe(
                flatMap((response) => {
                    data.processItem({
                        item: contentItem,
                        status: 'imported',
                        type: 'Content item',
                        name: response.data.codename
                    })

                    return targetClient.upsertLanguageVariant()
                        .byCodename(response.data.codename)
                        .forLanguageCodename(contentItem.system.language)
                        .withElementCodenames(this.getElements(contentItem))
                        .toObservable();

                }),
                map(response => {
                    return response as any;
                })
            );
    }

    private mapElementValue(rawElement: any): any {
        const value = rawElement.value;

        if (!value) {
            return undefined;
        }

        if (rawElement.type.toLowerCase() === FieldType.MultipleChoice.toLowerCase()) {
            return value.map(multipleChoice => <SharedContracts.IReferenceObjectContract>{
                codename: multipleChoice.codename
            });
        }

        if (rawElement.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
            return [];
        }

        return value;
    }

    private getElements(contentItem: ContentItem): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const elements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];

        const elementCodenames = Object.keys(contentItem.elements);

        for (const elementCodename of elementCodenames) {
            elements.push({
                codename: elementCodename,
                value: this.mapElementValue(contentItem[elementCodename])
            });
        }

        return elements;
    }


}