import { Injectable } from '@angular/core';
import {
    AssetResponses,
    ContentItemResponses,
    IContentManagementClient,
    LanguageVariantModels,
    SharedContracts,
} from 'kentico-cloud-content-management';
import { FieldModels, FieldType } from 'kentico-cloud-delivery';
import { from, Observable, of } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import {
    IAssetFieldModel,
    ICMAssetModel,
    IContentItemFieldModel,
    IContentItemModel,
    IMultipleChoiceOptionModel,
    ISlimContentItemModel,
} from '../../shared/shared.models';
import { IImportConfig, IImportContentItemsResult, IImportData } from '../import.models';

interface ICreateContentItemResult {
    contentItem?: ISlimContentItemModel,
    languageVariant?: LanguageVariantModels.ContentItemLanguageVariant;
    assets?: ICMAssetModel[];
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
        const importedContentItems: ISlimContentItemModel[] = [];
        const importedLanguageVariants: LanguageVariantModels.ContentItemLanguageVariant[] = [];
        const assets: ICMAssetModel[] = [];

        data.contentItems.forEach(contentItem => {
            obs.push(this.createContentItem(contentItem, data.targetClient, config).pipe(
                map((importResult) => {

                    if (!importResult.assets) {
                        throw Error(`Missing assets`);
                    }
                    if (!importResult.contentItem) {
                        throw Error(`Missing content item`);
                    }
                    if (!importResult.languageVariant) {
                        throw Error(`Missing language variant`);
                    }

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


    private createContentItem(contentItem: IContentItemModel, targetClient: IContentManagementClient, data: IImportConfig): Observable<ICreateContentItemResult> {
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
                        const element = contentItem.elements[elementCodename];
                        if (element.type) {
                            if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                                obs.push(...this.createAssets(contentItem, element as IAssetFieldModel, targetClient, data).map(
                                    m => m.pipe(map((assetResponse) => {
                                        createContentItemWithAssetsResult.assetResponses.push(assetResponse);
                                    })
                                    ))
                                )
                            };
                        }
                    }

                    if (obs.length === 0) {
                        return of(createContentItemWithAssetsResult)
                    }

                    return observableHelper.zipObservables(obs).pipe(map(() => {
                        if (!result.assets) {
                            throw Error(`Cannot assign assets`);
                        }
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

                    result.contentItem = {
                        codename: createdContentItem.codename,
                        externalId: createdContentItem.externalId,
                        id: createdContentItem.id,
                        name: createdContentItem.name,
                        sitemapLocations: createdContentItem.sitemapLocations,
                        type: createdContentItem.type,
                    };

                    if (!contentItem.system.language) {
                        throw Error(`Invalid language for item '${contentItem.system.language}'`);
                    }

                    return targetClient.upsertLanguageVariant()
                        .byItemCodename(createdContentItem.codename)
                        .byLanguageCodename(contentItem.system.language)
                        .withElementCodenames(this.getElements(contentItem, assets))
                        .toObservable();
                }),
                map(response => {
                    if (!result.contentItem) {
                        throw Error(`Content item was not assigned`);
                    }

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

    private createAssets(contentItem: IContentItemModel, assetField: IAssetFieldModel, targetClient: IContentManagementClient, config: IImportConfig): Observable<AssetResponses.AddAssetResponse>[] {
        const obs: Observable<AssetResponses.AddAssetResponse>[] = [];
        const loadImagesObs: Observable<any>[] = [];

        for (const asset of assetField.value) {
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

    private mapElementValue(field: IContentItemFieldModel, assets: ICMAssetModel[]): any {
        if (field.type.toLowerCase() === FieldType.ModularContent.toLowerCase()) {
            const linkedItems = field.value as string[];
            return linkedItems.map(m => <SharedContracts.IReferenceObjectContract>{
                codename: m
            });
        }

        const value = field.value;

        if (field.type.toLowerCase() === FieldType.MultipleChoice.toLowerCase()) {
            const multipleChoiceField = field.value as IMultipleChoiceOptionModel[];

            return multipleChoiceField.map(option => <SharedContracts.IReferenceObjectContract>{
                codename: option.codename
            });
        }

        if (field.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
            const assetIds: SharedContracts.IReferenceObjectContract[] = [];
            const assetField = field as IAssetFieldModel;

            for (const asset of assetField.value) {
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

    private getElements(contentItem: IContentItemModel, assets: ICMAssetModel[]): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const elements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];

        const elementCodenames = Object.keys(contentItem.elements);

        for (const elementCodename of elementCodenames) {
            elements.push({
                codename: elementCodename,
                value: this.mapElementValue(contentItem.elements[elementCodename], assets)
            });
        }

        return elements;
    }


}