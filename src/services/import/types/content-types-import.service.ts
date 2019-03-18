import { Injectable } from '@angular/core';
import { ContentTypeModels, ElementModels, IContentManagementClient } from 'kentico-cloud-content-management';
import { ContentType, Element } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { IImportConfig, IImportData } from '../import.models';

@Injectable()
export class ContentTypesImportService {

    importContentTypes(data: IImportData, config: IImportConfig): Observable<void> {
        const obs: Observable<ContentTypeModels.ContentType>[] = [];

        data.contentTypes.forEach(contentType => {
            obs.push(this.createType(contentType, data.targetClient, config));
        });

        return observableHelper.zipObservables(obs);
    }

    private mapElementType(element: Element): ElementModels.ElementType | undefined {
        const type = element.type;
        if (type === 'text') {
            return ElementModels.ElementType.text;
        }
        if (type === 'number') {
            return ElementModels.ElementType.number;
        }
        if (type === 'asset') {
            return ElementModels.ElementType.asset;
        }
        if (type === 'date_time') {
            return ElementModels.ElementType.dateTime;
        }
        if (type === 'rich_text') {
            return ElementModels.ElementType.richText;
        }
        if (type === 'urlSlug') {
            return ElementModels.ElementType.urlSlug;
        }
        if (type === 'multiple_choice') {
            return ElementModels.ElementType.multipleChoice;
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

    private createType(contentType: ContentType, targetClient: IContentManagementClient, data: IImportConfig): Observable<ContentTypeModels.ContentType> {
        return targetClient.addContentType()
            .withData({
                name: contentType.system.name,
                elements: contentType.elements.map(m => {
                    const elementType = this.mapElementType(m);
                    if (elementType) {

                        let mode: ElementModels.ElementMode;
                        let options: ContentTypeModels.IAddContentTypeElementMultipleChoiceElementOptionsData[];

                        if (elementType === ElementModels.ElementType.multipleChoice) {
                            mode = ElementModels.ElementMode.single;
                            options = this.getElementMultipleChoiceOptions(m);
                        }

                        return <ContentTypeModels.IAddContentTypeElementData>{
                            name: m.name,
                            mode: mode,
                            guidelines: '',
                            options: options,
                            type: this.mapElementType(m)
                        }
                    }
                })
            })
            .toObservable()
            .pipe(
                map((response) => {
                    data.processItem({
                        item: contentType,
                        status: 'imported',
                        type: 'Content type',
                        name: response.data.codename
                    })
                    return response.data;
                })
            );
    }


}