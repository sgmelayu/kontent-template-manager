import { Injectable } from '@angular/core';
import { ContentTypeModels, ElementModels, IContentManagementClient } from 'kentico-cloud-content-management';
import { FieldType } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { IContentTypeElementModel, IContentTypeModel } from '../../shared/shared.models';
import { IImportConfig, IImportData } from '../import.models';

@Injectable()
export class ContentTypesImportService extends BaseService {

    constructor() {
        super();
    }

    importContentTypes(data: IImportData, config: IImportConfig): Observable<IContentTypeModel[]> {
        const obs: Observable<void>[] = [];
        const importedTypes: IContentTypeModel[] = [];

        data.contentTypes.forEach(contentType => {
            obs.push(this.createType(contentType, data.targetClient, config).pipe(
                map(importedType => {
                    importedTypes.push(importedType)
                })
            ));
        });

        return observableHelper.zipObservables(obs).pipe(
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

    private getElementData(element: IContentTypeElementModel): ContentTypeModels.IAddContentTypeElementData | undefined {
        const elementType = this.mapElementType(element);

        if (elementType) {
            let mode: ElementModels.ElementMode | undefined = undefined;
            let options: ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData[] | undefined;

            if (elementType === ElementModels.ElementType.multipleChoice) {
                mode = ElementModels.ElementMode.single;
                options = this.getElementMultipleChoiceOptions(element);
            }

            if (elementType === ElementModels.ElementType.modularContent) {
                mode = ElementModels.ElementMode.single;
            }

            return <ContentTypeModels.IAddContentTypeElementData>{
                name: element.name,
                mode: mode,
                guidelines: '',
                options: options,
                type: elementType
            }
        }

        return undefined;
    }

    private createType(contentType: IContentTypeModel, targetClient: IContentManagementClient, data: IImportConfig): Observable<IContentTypeModel> {
        const mappedElements: ContentTypeModels.IAddContentTypeElementData[] = [];
        contentType.elements.forEach(sourceElement => {
            const mappedElementData = this.getElementData(sourceElement);
            if (mappedElementData) {
                mappedElements.push(mappedElementData);
            }
        });

        return targetClient.addContentType()
            .withData({
                name: contentType.system.name,
                elements: mappedElements
            })
            .toObservable()
            .pipe(
                delay(this.cmRequestDelay),
                map((response) => {
                    data.processItem({
                        item: contentType,
                        status: 'imported',
                        action: 'Add content type',
                        name: response.data.codename
                    })
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