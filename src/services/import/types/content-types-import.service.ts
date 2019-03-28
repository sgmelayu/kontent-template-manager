import { Injectable } from '@angular/core';
import {
    ContentTypeModels,
    ElementModels,
    IContentManagementClient,
    SharedContracts,
} from 'kentico-cloud-content-management';
import { FieldType } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { observableHelper, stringHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ProcessingService } from '../../processing/processing.service';
import { IContentTypeElementModel, IContentTypeModel } from '../../shared/shared.models';
import { IContentTypeImportPrerequisities, IImportConfig, IImportContentTypeResult } from '../import.models';

@Injectable()
export class ContentTypesImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    importContentTypes(targetClient: IContentManagementClient, contentTypes: IContentTypeModel[], prerequisities: IContentTypeImportPrerequisities, config: IImportConfig): Observable<IImportContentTypeResult[]> {
        const obs: Observable<void>[] = [];
        const importedTypes: IImportContentTypeResult[] = [];

        contentTypes.forEach(contentType => {
            obs.push(this.createType(contentType, targetClient, prerequisities, config).pipe(
                map(importedType => {
                    importedTypes.push({
                        importedItem: importedType,
                        originalItem: contentType
                    })
                })
            ));
        });

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => importedTypes)
        );
    }

    private mapElementType(element: IContentTypeElementModel): ElementModels.ElementType | undefined {
        const type = element.type.toLowerCase();

        if (type === FieldType.Text.toLowerCase()) {
            return ElementModels.ElementType.text;
        }
        if (type === FieldType.Number.toLowerCase()) {
            return ElementModels.ElementType.number;
        }
        if (type === FieldType.Asset.toLowerCase()) {
            return ElementModels.ElementType.asset;
        }
        if (type === FieldType.DateTime.toLowerCase()) {
            return ElementModels.ElementType.dateTime;
        }
        if (type === FieldType.RichText.toLowerCase()) {
            return ElementModels.ElementType.richText;
        }
        if (type === FieldType.UrlSlug.toLowerCase()) {
            return ElementModels.ElementType.urlSlug;
        }
        if (type === FieldType.MultipleChoice.toLowerCase()) {
            return ElementModels.ElementType.multipleChoice;
        }
        if (type === FieldType.ModularContent.toLowerCase()) {
            return ElementModels.ElementType.modularContent;
        }
        if (type === FieldType.Taxonomy.toLowerCase()) {
            return ElementModels.ElementType.taxonomy;
        }

        console.warn(`Mapping of element type '${element.type}' is not yet supported. Skipping element.`);
        return undefined;
    }

    private getElementMultipleChoiceOptions(element: IContentTypeElementModel): ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData[] {
        return element.options.map(m => {
            return <ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData>{
                name: m.name
            };
        });
    }

    private fixUrlSlugElem(elements: ContentTypeModels.IAddContentTypeElementData[]): void {
        for (const element of elements) {
            if (element.type.toLowerCase() === FieldType.UrlSlug.toLowerCase()) {
                const textElem = elements.find(m => m.type.toLowerCase() === FieldType.Text.toLowerCase());
                if (textElem) {
                    element.depends_on = {
                        element: {
                            external_id: textElem.external_id
                        }
                    }
                } else {
                    throw Error(`Could not get any depending element for url slug field`);
                }
            }
        }
    }

    private getElementData(element: IContentTypeElementModel, prerequisities: IContentTypeImportPrerequisities): ContentTypeModels.IAddContentTypeElementData | undefined {
        const elementType = this.mapElementType(element);

        if (elementType) {
            let mode: ElementModels.ElementMode | undefined = undefined;
            let options: ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData[] | undefined;
            let externalId = stringHelper.newGuid();
            let taxonomyGroup: SharedContracts.IReferenceObjectContract | undefined;

            if (elementType === ElementModels.ElementType.multipleChoice) {
                mode = ElementModels.ElementMode.single;
                options = this.getElementMultipleChoiceOptions(element);
            }

            if (elementType === ElementModels.ElementType.modularContent) {
                mode = ElementModels.ElementMode.multiple;
            }

            if (elementType === ElementModels.ElementType.taxonomy) {
                if (!element.taxonomyGroup) {
                    throw Error(`Element '${element.codename}' does not have taxonomy group assigned`);
                }

                const candidateTaxonomyGroup = prerequisities.taxonomies.find(m => m.originalItem.system.codename === element.taxonomyGroup);

                if (!candidateTaxonomyGroup) {
                    throw Error(`Cannto find candidate taxonomy group for element '${element.codename}' with taxonomy group set to '${element.taxonomyGroup}'`);
                }

                taxonomyGroup = {
                    codename: candidateTaxonomyGroup.importedItem.system.codename
                };
            }

            return <ContentTypeModels.IAddContentTypeElementData>{
                name: element.name,
                mode: mode,
                guidelines: '',
                options: options,
                type: elementType,
                external_id: externalId,
                taxonomy_group: taxonomyGroup
            }
        }

        return undefined;
    }

    private createType(contentType: IContentTypeModel, targetClient: IContentManagementClient, prerequisities: IContentTypeImportPrerequisities, data: IImportConfig): Observable<IContentTypeModel> {
        const mappedElements: ContentTypeModels.IAddContentTypeElementData[] = [];
        contentType.elements.forEach(sourceElement => {
            const mappedElementData = this.getElementData(sourceElement, prerequisities);
            if (mappedElementData) {
                mappedElements.push(mappedElementData);
            }
        });

        // fixes url slug elem
        this.fixUrlSlugElem(mappedElements);

        return targetClient.addContentType()
            .withData({
                name: contentType.system.name,
                elements: mappedElements
            })
            .toObservable()
            .pipe(
                delay(this.cmRequestDelay),
                map((response) => {
                    this.processingService.addProcessedItem(
                        {
                            item: contentType,
                            status: 'imported',
                            action: 'Add content type',
                            name: response.data.codename
                        }
                    );

                    return <IContentTypeModel>{
                        elements: response.data.elements,
                        system: {
                            codename: response.data.codename,
                            id: response.data.id,
                            name: response.data.name
                        }
                    };
                })
            );
    }


}