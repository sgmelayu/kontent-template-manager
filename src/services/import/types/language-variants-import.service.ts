import { Injectable } from '@angular/core';
import { IContentManagementClient, LanguageVariantModels, SharedContracts } from 'kentico-cloud-content-management';
import { FieldType } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ProcessingService } from '../../processing/processing.service';
import {
    IContentItemFieldModel,
    IContentItemModel,
    ILanguageVariantModel,
    IMultipleChoiceOptionModel,
    ElementType,
    IContentItemElement,
} from '../../shared/shared.models';
import {
    IImportAssetResult,
    IImportConfig,
    IImportLanguageVariantsResult,
    ILanguageVariantsImportPrerequisities,
    IImportContentItemResult,
    IImportContentTypeResult,
} from '../import.models';

@Injectable()
export class LanguageVariantsImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }


    importLanguageVariants(
        targetClient: IContentManagementClient,
        languageVariants: ILanguageVariantModel[],
        prerequisities: ILanguageVariantsImportPrerequisities,
        config: IImportConfig): Observable<IImportLanguageVariantsResult[]> {

        const obs: Observable<void>[] = [];
        const importedLanguageVariants: IImportLanguageVariantsResult[] = [];

        for (const languageVariant of languageVariants) {
            obs.push(this.createLanguageVariants({
                languageVariant: languageVariant,
                targetClient: targetClient,
                config: config,
                prerequisities: prerequisities
            }).pipe(
                map((importResult) => {
                    importedLanguageVariants.push(importResult);
                })
            ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return importedLanguageVariants;
            })
        );
    }

    private createLanguageVariants(
        data: {
            languageVariant: ILanguageVariantModel,
            targetClient: IContentManagementClient,
            config: IImportConfig,
            prerequisities: ILanguageVariantsImportPrerequisities
        }

    ): Observable<IImportLanguageVariantsResult> {
        const candidateContentItemForLanguageVariant = data.prerequisities.contentItems.find(m => m.originalItem.id === data.languageVariant.item.id);

        if (!candidateContentItemForLanguageVariant) {
            throw Error(`Cannot find candidate content item (parent) for language variant with id '${data.languageVariant.item.id}' `);
        }

        const languageId = data.languageVariant.language.id;

        if (!languageId) {
            throw Error(`Invalid language id for language variant '${data.languageVariant.item.id}'`);
        }

        return data.targetClient.upsertLanguageVariant()
            .byItemId(candidateContentItemForLanguageVariant.importedItem.id)
            .byLanguageCodename(languageId)
            .withElementCodenames(this.getElements(candidateContentItemForLanguageVariant, data.languageVariant, data.prerequisities))
            .toObservable().pipe(
                map(response => {
                    this.processingService.addProcessedItem({
                        item: data.languageVariant,
                        status: 'imported',
                        action: 'Add language variant',
                        name: `${response.data.item.codename} [${response.data.language.codename}]`
                    });

                    return <IImportLanguageVariantsResult>{
                        importedItem: response.data,
                        originalItem: data.languageVariant
                    }
                })
            )
    }

    private fixInvalidHtmlInRichTextField(html: string): string {
        // because sample project contains invalid html
        return html.replace(new RegExp('<br>', 'g'), '');
    }

    private mapElementValue(contentType: IImportContentTypeResult, languageVariant: ILanguageVariantModel, field: IContentItemElement, prerequisities: ILanguageVariantsImportPrerequisities): any {
        if (field.elementModel.type === ElementType.modularContent) {
            const currentLinkedItems = field.value as SharedContracts.IReferenceObjectContract[];
            const newLinkedItems: SharedContracts.IReferenceObjectContract[] = [];

            for (const currentLinkedItem of currentLinkedItems) {
                const candidateLinkedItem = prerequisities.contentItems.find(m => m.originalItem.id === currentLinkedItem.id);

                if (!candidateLinkedItem) {
                    throw Error(`Cannot find linked item with id '${currentLinkedItem.id}'`);
                }

                newLinkedItems.push({
                    id: candidateLinkedItem.importedItem.id
                });
            }

           return newLinkedItems;
        }

        const value = field.value;

        if (field.elementModel.type === ElementType.richText) {
            return this.fixInvalidHtmlInRichTextField(field.value as string);
        }

        if (field.elementModel.type === ElementType.taxonomy) {
            const currentTaxonomies = field.value as SharedContracts.IReferenceObjectContract[];
            const newTaxonomies: SharedContracts.IReferenceObjectContract[] = [];

            for (const currentTaxonomy of currentTaxonomies) {
                const candidateTaxonomy = prerequisities.taxonomies.find(m => m.originalItem.system.id === currentTaxonomy.id);

                if (!candidateTaxonomy) {
                    throw Error(`Cannot find taxonomy with id '${currentTaxonomy.id}'`);
                }

                newTaxonomies.push({
                    id: candidateTaxonomy.importedItem.system.id
                });
            }

           return newTaxonomies;
        }

        if (field.elementModel.type === ElementType.multipleChoice) {
            const currentOptions = field.value as SharedContracts.IReferenceObjectContract[];
            const newOptions: SharedContracts.IReferenceObjectContract[] = [];

            const originalElement = contentType.originalItem.elements.find(m => m.codename === field.elementModel.codename);
            if (!originalElement) {
                throw Error(`Invalid original element`);
            }
            console.log(field);
            console.log(originalElement);

            for (const currentOption of currentOptions) {
                newOptions.push({
                    id: currentOption.id
                });
            }

           return newOptions;
        }

        if (field.elementModel.type === ElementType.asset) {
            const currentAssets = field.value as SharedContracts.IReferenceObjectContract[];
            const newAssets: SharedContracts.IReferenceObjectContract[] = [];

            for (const currentAsset of currentAssets) {
                const candidateAsset = prerequisities.assets.find(m => m.originalItem.id === currentAsset.id);

                if (!candidateAsset) {
                    throw Error(`Cannot find asset with id '${currentAsset}'`);
                }

                newAssets.push({
                    id: candidateAsset.importedItem.id
                });
            }

           return newAssets;
        }

        return value;
    }

    private getElements(contentItem: IImportContentItemResult, languageVariant: ILanguageVariantModel, prerequisities: ILanguageVariantsImportPrerequisities): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const contentItemElements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];

        const candidateContentType = prerequisities.contentTypes.find(m => m.originalItem.system.id === contentItem.originalItem.type.id);

        if (!candidateContentType) {
            throw Error(`Could not find candidate content type '${contentItem.originalItem.type.id}'. This type is required by content item '${languageVariant.item.id}'`);
        }

        const originalElements = candidateContentType.originalItem.elements;
        const importedElements = candidateContentType.importedItem.elements;

        for (const elementData of languageVariant.elements) {
            const originalElement = originalElements.find(m => m.codename === elementData.elementModel.codename);

            if (!originalElement) {
                throw Error(`Cannot find element '${elementData.elementModel.codename}' in original elements`);
            }

            const originalElementIndex = originalElements.findIndex(m => m.codename === elementData.elementModel.codename);

            if (originalElementIndex === -1) {
                throw Error(`Cannot find element with index '${originalElementIndex}' in original elements`);
            }

            // This is very dangerous because we are mapping elements based on their index
            // and if KC API changes order of elements, this will be broken.
            const importedElement = importedElements[originalElementIndex];

            if (!importedElement) {
                throw Error(`Could not find candidate import element for element with codename '${originalElement.codename}'`);
            }

            contentItemElements.push({
                codename: importedElement.codename,
                value: this.mapElementValue(candidateContentType, languageVariant, elementData, prerequisities)
            });
        }

        return contentItemElements;
    }

}
