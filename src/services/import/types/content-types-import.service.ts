import { Injectable } from '@angular/core';
import { ContentTypeModels, ElementModels, IContentManagementClient } from 'kentico-cloud-content-management';
import { ContentType, Element, FieldType } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { IImportConfig, IImportData } from '../import.models';
import { BaseService } from '../../base-service';

@Injectable()
export class ContentTypesImportService extends BaseService{

    constructor() {
        super();
    }
    
    importContentTypes(data: IImportData, config: IImportConfig): Observable<ContentTypeModels.ContentType[]> {
        const obs: Observable<void>[] = [];
        const importedTypes: ContentTypeModels.ContentType[] = [];

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

    private mapElementType(element: Element): ElementModels.ElementType | undefined {
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

    private getElementMultipleChoiceOptions(element: Element): ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData[] {
        return element.options.map(m => {
            return <ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData>{
                name: m.name
            };
        });
    }

    private getElementData(element: Element): ContentTypeModels.IAddContentTypeElementData | undefined{
        const elementType = this.mapElementType(element);

        if (elementType) {
            let mode: ElementModels.ElementMode;
            let options: ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData[];

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

    private createType(contentType: ContentType, targetClient: IContentManagementClient, data: IImportConfig): Observable<ContentTypeModels.ContentType> {
        return targetClient.addContentType()
            .withData({
                name: contentType.system.name,
                elements: contentType.elements.map(m => {
                    const element = this.getElementData(m);
                    return element;
                })
            })
            .toObservable()
            .pipe(
                delay(this.cmRequestDelay),
                map((response) => {
                    data.processItem({
                        item: contentType,
                        status: 'imported',
                        action: 'Content type',
                        name: response.data.codename
                    })
                    return response.data;
                })
            );
    }


}