import { Injectable } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { IContentManagementClient, LanguageVariantModels, SharedContracts } from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ProcessingService } from '../../processing/processing.service';
import {
    ElementType,
    IAssetElementValue,
    IContentItemElement,
    ILanguageVariantModel,
    IMultipleChoiceElementValue,
    ITaxonomyTermModel,
    ITaxonomyTermsFieldValueModel,
} from '../../shared/shared.models';
import {
    IImportConfig,
    IImportContentItemResult,
    IImportContentTypeResult,
    IImportLanguageVariantsResult,
    ILanguageVariantsImportPrerequisities,
} from '../import.models';

@Injectable({
    providedIn: 'root'
})
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
        const candidateContentItemForLanguageVariant = data.prerequisities.contentItems.find(m => m.originalItem.codename === data.languageVariant.itemCodename);

        if (!candidateContentItemForLanguageVariant) {
            throw Error(`Cannot find candidate content item (parent) for language variant with id '${data.languageVariant.itemCodename}' `);
        }

        const languageCodename = data.languageVariant.languageCodename

        if (!languageCodename) {
            throw Error(`Invalid language for language variant '${data.languageVariant.itemCodename}'`);
        }

        return data.targetClient.upsertLanguageVariant()
            .byItemId(candidateContentItemForLanguageVariant.importedItem.id)
            .byLanguageCodename(languageCodename)
            .withElementCodenames(this.getElements(candidateContentItemForLanguageVariant, data.languageVariant, data.prerequisities))
            .toObservable().pipe(
                map(response => {
                    this.processingService.addProcessedItem({
                        data: data.languageVariant,
                        type: 'language variant',
                        action: 'add',
                        name: `${data.languageVariant.itemCodename} [${data.languageVariant.languageCodename}]`
                    });

                    return <IImportLanguageVariantsResult>{
                        importedItem: response.data,
                        originalItem: data.languageVariant
                    }
                })
            )
    }

    private processRichTextItems(htmlCollection: HTMLCollection, prerequisities: ILanguageVariantsImportPrerequisities): void {
        if (!htmlCollection || htmlCollection.length === 0) {
            // there are no more nodes
        } else {
            for (let i = 0; i < htmlCollection.length; i++) {
                const element = htmlCollection[i];

                // process links 
                if (element.nodeName.toLowerCase() === 'a'.toLowerCase()) {
                    const linkAttributes = element.attributes;
                    // remove attributes not allowed by CM API
                    if (linkAttributes.getNamedItem('rel')) {
                        linkAttributes.removeNamedItem('rel');
                    }

                    if (linkAttributes.getNamedItem('target')) {
                        linkAttributes.removeNamedItem('target');
                    }
                }

                // process assets
                if (element.nodeName.toLowerCase() === 'figure'.toLowerCase()) {
                    const assetAttributes = element.getAttributeNames();
                    // remove attributes not allowed by CM API
                    const allowedAttributes: string[] = ['data-asset-id', 'data-asset-external-id'];

                    for (const assetAttribute of assetAttributes) {
                        if (!allowedAttributes.includes(assetAttribute)) {
                            element.attributes.removeNamedItem(assetAttribute);
                        }
                    }

                    const dataAssetId = element.attributes.getNamedItem('data-asset-id');
                    const dataImageExternalId = element.attributes.getNamedItem('data-asset-external-id');

                    if (dataAssetId) {
                        // get imported asset
                        const asset = prerequisities.assets.find(m => m.originalItem.id === dataAssetId.value);


                        if (!asset) {
                            throw Error(`Asset with id '${dataAssetId.value}' could not be found in source data`);
                        }
                        element.attributes.removeNamedItem('data-asset-id')
                        element.setAttribute('data-asset-id', asset.importedItem.id);
                    }

                    if (dataImageExternalId) {
                        // get imported asset
                        const asset = prerequisities.assets.find(m => m.originalItem.externalId === dataImageExternalId.value);

                        if (!asset) {
                            throw Error(`Asset with external id '${dataImageExternalId.value}' could not be found in source data`);
                        }

                        const externalIdOfImportedAsset = asset.importedItem.externalId;

                        if (!externalIdOfImportedAsset) {
                            throw Error(`ExternalId of asset is not set`);
                        }
                        element.attributes.removeNamedItem('data-asset-exgternal-id')
                        element.setAttribute('data-asset-external-id', externalIdOfImportedAsset);
                    }
                }

                // process images
                if (element.nodeName.toLowerCase() === 'img'.toLowerCase()) {
                    const dataImageId = element.attributes.getNamedItem('data-image-id');
                    const dataImageExternalId = element.attributes.getNamedItem('data-image-external-id');

                    if (dataImageId) {
                        // get imported asset
                        const asset = prerequisities.assets.find(m => m.originalItem.id === dataImageId.value);

                        if (!asset) {
                            throw Error(`Asset with id '${dataImageId.value}' could not be found in source data`);
                        }
                        element.setAttribute('data-asset-id', asset.importedItem.id);
                        element.attributes.removeNamedItem('data-image-id')
                    }

                    if (dataImageExternalId) {
                        // get imported asset
                        const asset = prerequisities.assets.find(m => m.originalItem.externalId === dataImageExternalId.value);

                        if (!asset) {
                            throw Error(`Asset with external id '${dataImageExternalId.value}' could not be found in source data`);
                        }

                        const externalIdOfImportedAsset = asset.importedItem.externalId;

                        if (!externalIdOfImportedAsset) {
                            throw Error(`ExternalId of asset is not set`);
                        }
                        element.setAttribute('data-asset-external-id', externalIdOfImportedAsset);
                        element.attributes.removeNamedItem('data-image-externa-id')
                    }

                    const allowedAttributes: string[] = ['data-asset-id', 'data-asset-external-id'];
                    const assetAttributes = element.getAttributeNames();

                    for (const assetAttribute of assetAttributes) {
                        if (!allowedAttributes.includes(assetAttribute)) {
                            element.attributes.removeNamedItem(assetAttribute);
                        }
                    }
                }

                const typeAttribute = element.attributes ? element.attributes.getNamedItem('type') : undefined;

                // process linked items (modular items)
                if (element.attributes && typeAttribute && typeAttribute.value && typeAttribute.value.toLowerCase() === 'application/kenticocloud'.toLowerCase()) {
                    const dataCodenameAttribute = element.attributes.getNamedItem('data-codename');
                    const dataTypeAttribute = element.attributes.getNamedItem('data-type');

                    if (!dataCodenameAttribute) {
                        throw Error('Missing data codename attribute. This is likely an error caused by invalid response.');
                    }

                    if (!dataTypeAttribute) {
                        throw Error('Missing data type attribute. This is likely an error caused by invalid response.');
                    }

                    // find linked item
                    const importedLinkedItem = prerequisities.contentItems.find(m => m.originalItem.codename === dataCodenameAttribute.value);

                    if (!importedLinkedItem) {
                        throw Error(`Linked item in rich text field with codename '${dataCodenameAttribute.value}' could not be found`);
                    }

                    // see https://developer.kenticocloud.com/reference#section-rich-text-content-items for syntax details

                    // remove data-codename attribute 
                    element.attributes.removeNamedItem('data-codename')
                    element.attributes.removeNamedItem('data-rel')

                    // add data-id attribute with imported item id
                    element.setAttribute('data-id', importedLinkedItem.importedItem.id);
                }

                if (element.children && element.children.length > 0) {
                    this.processRichTextItems(element.children, prerequisities);
                }
            }
        }
    }

    private getRichTextHtmlElement(html: string): HTMLElement {
        const element = document.createElement('p');
        element.innerHTML = html;
        return element;
    }

    private fixInvalidHtmlInRichTextField(html: string): string {
        // because sample project contains invalid html
        return html.replace(new RegExp('<br>', 'g'), '');
    }

    private mapElementValue(contentType: IImportContentTypeResult, languageVariant: ILanguageVariantModel, field: IContentItemElement, prerequisities: ILanguageVariantsImportPrerequisities): any {
        if (field.elementModel.type === ElementType.modularContent) {
            const linkedItemCodenames = field.value as string[];
            const newLinkedItems: SharedContracts.IReferenceObjectContract[] = [];
            for (const currentLinkedItem of linkedItemCodenames) {
                const candidateLinkedItem = prerequisities.contentItems.find(m => m.originalItem.codename === currentLinkedItem);

                if (!candidateLinkedItem) {
                    throw Error(`Cannot find linked item '${currentLinkedItem}'. This was requested by '${languageVariant.itemCodename}'`);
                }

                newLinkedItems.push({
                    codename: candidateLinkedItem.importedItem.codename
                });
            }

            return newLinkedItems;
        }

        const value = field.value;

        if (field.elementModel.type === ElementType.richText) {
            const richTextValueWithFixedHtml = this.fixInvalidHtmlInRichTextField(field.value as string);
            const doc = this.getRichTextHtmlElement(richTextValueWithFixedHtml);
            this.processRichTextItems(doc.children, prerequisities);
            return doc.innerHTML;
        }

        if (field.elementModel.type === ElementType.taxonomy) {
            const currentTaxonomyTerms = field.value as ITaxonomyTermsFieldValueModel[];
            const newTaxonomyTerms: SharedContracts.IReferenceObjectContract[] = [];

            if (!field.taxonomyGroup) {
                throw Error(`Taxonomy is not set for field '${field.elementCodename}' referenced by '${contentType.originalItem.system.codename}' content type 
                and used by '${languageVariant.itemCodename}' language variant with language '${languageVariant.languageCodename}'`);
            }

            const candidateTaxonomy = prerequisities.taxonomies.find(m => m.originalItem.system.codename === field.taxonomyGroup);

            if (!candidateTaxonomy) {
                throw Error(`Could not find candidate taxonomy group '${field.taxonomyGroup}' for field '${field.elementCodename}' referenced by '${contentType.originalItem.system.codename}' content type 
                and used by '${languageVariant.itemCodename}' language variant with language '${languageVariant.languageCodename}'`);
            }

            for (const currentTaxonomyTerm of currentTaxonomyTerms) {
                const candidateTaxonomyTerm = this.findTaxonomyTermRecursively(currentTaxonomyTerm.codename, candidateTaxonomy.originalItem.terms);
                if (!candidateTaxonomyTerm) {
                    throw Error(`Cannot find taxonomy term '${currentTaxonomyTerm.codename}' for taxonomy group '${candidateTaxonomy.originalItem.system.codename}' referenced by field '${field.elementCodename}' in '${contentType.originalItem.system.codename}' content type 
                    and used by '${languageVariant.itemCodename}' language variant with language '${languageVariant.languageCodename}'`);
                }

                newTaxonomyTerms.push({
                    codename: candidateTaxonomyTerm.codename
                });
            }

            return newTaxonomyTerms;
        }

        if (field.elementModel.type === ElementType.multipleChoice) {
            const currentOptions = field.value as IMultipleChoiceElementValue[];
            const newOptions: SharedContracts.IReferenceObjectContract[] = [];

            const originalElement = contentType.originalItem.elements.find(m => m.codename === field.elementModel.codename);
            if (!originalElement) {
                throw Error(`Invalid original element`);
            }

            for (const currentOption of currentOptions) {
                newOptions.push({
                    codename: currentOption.codename
                });
            }

            return newOptions;
        }

        if (field.elementModel.type === ElementType.asset) {
            const currentAssets = field.value as IAssetElementValue[];
            const newAssets: SharedContracts.IReferenceObjectContract[] = [];

            for (const currentAsset of currentAssets) {
                const candidateAsset = prerequisities.assets.find(m => m.originalItem.deliveryUrl === currentAsset.url);

                if (!candidateAsset) {
                    throw Error(`Cannot find asset with url '${currentAsset.url}'`);
                }

                newAssets.push({
                    id: candidateAsset.importedItem.id
                });
            }

            return newAssets;
        }

        return value;
    }

    private findTaxonomyTermRecursively(taxonomyTermToFind: string, originalTerms: ITaxonomyTermModel[]): ITaxonomyTermModel | undefined {
        for (const taxonomyTerm of originalTerms) {
            if (taxonomyTerm.codename === taxonomyTermToFind) {
                return taxonomyTerm;
            }
            return this.findTaxonomyTermRecursively(taxonomyTermToFind, taxonomyTerm.terms);
        }
        return undefined;
    }

    private getElements(contentItem: IImportContentItemResult, languageVariant: ILanguageVariantModel, prerequisities: ILanguageVariantsImportPrerequisities): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const contentItemElements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];

        const candidateContentType = prerequisities.contentTypes.find(m => m.originalItem.system.codename === contentItem.originalItem.typeCodename);

        if (!candidateContentType) {
            throw Error(`Could not find candidate content type '${contentItem.originalItem.typeCodename}'. This type is required by content item '${languageVariant.itemCodename}'`);
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
