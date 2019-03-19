import { Injectable } from '@angular/core';
import {
    ContentItemModels,
    IContentManagementClient,
    LanguageVariantModels,
    SharedContracts,
    AssetModels,
    AssetResponses,
    ContentItemResponses,
} from 'kentico-cloud-content-management';
import { ContentItem, FieldModels, Fields, FieldType } from 'kentico-cloud-delivery';
import { Observable, of, from } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { BaseService } from '../../base-service';
import { IImportConfig, IImportContentItemsResult, IImportData } from '../import.models';

interface ICreateContentItemResult {
    contentItem?: ContentItemModels.ContentItem;
    languageVariant?: LanguageVariantModels.ContentItemLanguageVariant;
    assets?: AssetModels.Asset[];
}
interface ICreateContentItemWithAssetsResult {
    contentItemResponse: ContentItemResponses.AddContentItemResponse;
    assetResponses: AssetResponses.AddAssetResponse[];
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
        const assets: AssetModels.Asset[] = [];

        data.contentItems.forEach(contentItem => {
            obs.push(this.createContentItem(contentItem, data.targetClient, config).pipe(
                map((importResult) => {
                    importedContentItems.push(importResult.contentItem);
                    importedLanguageVariants.push(importResult.languageVariant);
                    assets.push(...importResult.assets);
                })
            ));
        });

        return observableHelper.zipObservables(obs).pipe(
            map(() => {
                return <IImportContentItemsResult>{
                    contentItems: importedContentItems,
                    languageVariants: importedLanguageVariants,
                    assets: assets
                }
            })
        );
    }


    private createContentItem(contentItem: ContentItem, targetClient: IContentManagementClient, data: IImportConfig): Observable<ICreateContentItemResult> {
        let result: ICreateContentItemResult = {
            assets: []
        };

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
                flatMap(response => {
                    const createContentItemWithAssetsResult: ICreateContentItemWithAssetsResult = {
                        assetResponses: [],
                        contentItemResponse: response,
                    }
                    const obs: Observable<any>[] = [];
                    const elementKeys = Object.keys(contentItem.elements);
                    for (const elementCodename of elementKeys) {
                        const element = contentItem[elementCodename] as FieldModels.IField;
                        if (element.type) {
                            if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                                obs.push(...this.createAssets(contentItem, element as Fields.AssetsField, targetClient, data).map(
                                    m => m.pipe(map((assetResponse) => {
                                        createContentItemWithAssetsResult.assetResponses.push(assetResponse);
                                    })
                                ))
                            )};
                        }
                    }

                    if (obs.length === 0) {
                        return of(createContentItemWithAssetsResult)
                    }

                    return observableHelper.zipObservables(obs).pipe(map(() => {
                        result.assets.push(...createContentItemWithAssetsResult.assetResponses.map(m => m.data));
                        return createContentItemWithAssetsResult;
                    }))

                }),
                flatMap((response) => {
                    const createdContentItem = response.contentItemResponse.data;
                    const assets = response.assetResponses.map(m => m.data);

                    data.processItem({
                        item: contentItem,
                        status: 'imported',
                        action: 'Add content item',
                        name: createdContentItem.codename
                    });

                    result.contentItem = createdContentItem;

                    return targetClient.upsertLanguageVariant()
                        .byItemCodename(createdContentItem.codename)
                        .byLanguageCodename(contentItem.system.language)
                        .withElementCodenames(this.getElements(contentItem, assets))
                        .toObservable();
                }),
                map(response => {
                    data.processItem({
                        item: contentItem,
                        status: 'imported',
                        action: 'Add language variant',
                        name: `${result.contentItem.codename} [${contentItem.system.language}] | ${response.data.item.id}`
                    });

                    result.languageVariant = response.data;
                    return result;
                })
            );
    }

    private createAssets(contentItem: ContentItem, assetField: Fields.AssetsField, targetClient: IContentManagementClient, config: IImportConfig): Observable<AssetResponses.AddAssetResponse>[] {
        const obs: Observable<AssetResponses.AddAssetResponse>[] = [];

        const loadImagesObs: Observable<any>[] = [];

        for (const asset of assetField.assets) {
            const loadImageObs = from(new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', asset.url);
                xhr.responseType = 'blob';
                xhr.onload = () => {
                    resolve({
                        response: xhr.response,
                        asset: asset
                    });
                }
                xhr.send();
            }));

            loadImagesObs.push(loadImageObs);
        }

        for (const imageObs of loadImagesObs) {
            obs.push(
                imageObs.pipe(
                    flatMap(data => {
                        const response = data.response;
                        const asset: FieldModels.AssetModel = data.asset;

                        const contentLength = response.size;
                        const contentType = response.type;
                        const fileBinary = response;

                        return targetClient.uploadBinaryFile()
                            .withData({
                                binaryData: fileBinary,
                                contentLength: contentLength,
                                contentType: contentType,
                                filename: asset.name
                            }).toObservable().pipe(
                                flatMap(response => {

                                    config.processItem({
                                        item: contentItem,
                                        status: 'imported',
                                        action: 'Upload binary file',
                                        name: `[${response.data.type}] - ${response.data.id}`
                                    });

                                    return targetClient.addAsset().withData({
                                        title: asset.name,
                                        descriptions: [{
                                            description: asset.description,
                                            language: {
                                                codename: contentItem.system.language
                                            }
                                        }],
                                        fileReference: {
                                            id: response.data.id,
                                            type: response.data.type
                                        },
                                        externalId: asset.url,
                                    }).toObservable()
                                }),
                                map((response) => {
                                    config.processItem({
                                        item: contentItem,
                                        status: 'imported',
                                        action: 'Add asset',
                                        name: `[${response.data.type}] - ${response.data.id}`
                                    });
                                    return response;
                                })
                            )
                    }
                    )
                ))
        }

        return obs;
    }


    private mapElementValue(field: FieldModels.IField | ContentItem[], assets: AssetModels.Asset[]): any {
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
            const assetIds: SharedContracts.IReferenceObjectContract[] = [];
            const assetField = field as Fields.AssetsField;

            for(const asset of assetField.assets) {
                const newAssetId = assets.find(m => m.externalId === asset.url);

                if (newAssetId) {
                    assetIds.push({
                        id: newAssetId.id
                    });
                }
            }
            return assetIds;
        }

        return value;
    }

    private getElements(contentItem: ContentItem, assets: AssetModels.Asset[]): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const elements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];

        const elementCodenames = Object.keys(contentItem.elements);

        for (const elementCodename of elementCodenames) {
            elements.push({
                codename: elementCodename,
                value: this.mapElementValue(contentItem[elementCodename], assets)
            });
        }

        return elements;
    }


}