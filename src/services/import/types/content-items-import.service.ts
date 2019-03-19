import { Injectable } from '@angular/core';
import {
    ContentItemModels,
    IContentManagementClient,
    LanguageVariantModels,
    SharedContracts,
} from 'kentico-cloud-content-management';
import { ContentItem, FieldModels, Fields, FieldType } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { BaseService } from '../../base-service';
import { IImportConfig, IImportContentItemsResult, IImportData } from '../import.models';

interface ICreateContentItemResult {
    contentItem?: ContentItemModels.ContentItem,
    languageVariant?: LanguageVariantModels.ContentItemLanguageVariant
}

@Injectable()
export class ContentItemsImportService extends BaseService {

    constructor() {
        super();
    }

    importContentItems(data: IImportData, config: IImportConfig): Observable<IImportContentItemsResult> {
        const obs: Observable<void>[] = [];
        const importedContentItems: ContentItemModels.ContentItem[] = [];
        const importedLanguageVariants: LanguageVariantModels.ContentItemLanguageVariant[] = [];

        data.contentItems.forEach(contentItem => {
            obs.push(this.createContentItem(contentItem, data.targetClient, config).pipe(
                map((importResult) => {
                    importedContentItems.push(importResult.contentItem);
                    importedLanguageVariants.push(importResult.languageVariant);
                })
            ));
        });

        return observableHelper.zipObservables(obs).pipe(
            map(() => {
                return <IImportContentItemsResult>{
                    contentItems: importedContentItems,
                    languageVariants: importedLanguageVariants
                }
            })
        );
    }


    private createContentItem(contentItem: ContentItem, targetClient: IContentManagementClient, data: IImportConfig): Observable<ICreateContentItemResult> {
        let result: ICreateContentItemResult = {};

        return targetClient.addContentItem()
            .withData({
                name: contentItem.system.name,
                type: {
                    codename: contentItem.system.type
                },
            })
            .toObservable()
            .pipe(
                delay(this.cmRequestDelay),
                flatMap((response) => {
                    data.processItem({
                        item: contentItem,
                        status: 'imported',
                        action: 'Content item',
                        name: response.data.codename
                    });

                    result.contentItem = response.data;

                    return targetClient.upsertLanguageVariant()
                        .byItemCodename(response.data.codename)
                        .byLanguageCodename(contentItem.system.language)
                        .withElementCodenames(this.getElements(contentItem))
                        .toObservable();
                }),
                map(response => {
                    data.processItem({
                        item: contentItem,
                        status: 'imported',
                        action: 'Language variant',
                        name: `${result.contentItem.codename} [${contentItem.system.language}] | ${response.data.item.id}`
                    });

                    result.languageVariant = response.data;

                    return result;
                })
            );
    }

    private mapElementValue(field: FieldModels.IField | ContentItem[]): any {
        if (Array.isArray(field)) {
            const linkedItems = field as ContentItem[];
            return linkedItems.map(m => <SharedContracts.IReferenceObjectContract>{
                codename: m.system.codename
            });
        }

        const value = field.value;

        if (field.type.toLowerCase() === FieldType.MultipleChoice.toLowerCase()) {
            const multipleChoiceField = field as Fields.MultipleChoiceField;

            return multipleChoiceField.options.map(multipleChoice => <SharedContracts.IReferenceObjectContract>{
                codename: multipleChoice.codename
            });
        }

        if (field.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
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