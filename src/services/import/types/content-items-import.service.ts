import { Injectable } from '@angular/core';
import {
    AssetResponses,
    ContentItemModels,
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
import { ProcessingService } from '../../processing/processing.service';
import {
    IAssetFieldModel,
    IAssetModel,
    IContentItemFieldModel,
    IContentItemModel,
    IMultipleChoiceOptionModel,
} from '../../shared/shared.models';
import {
    IAssetFromFile,
    IGetAssetData,
    IImportAssetResult,
    IImportConfig,
    IImportContentItemResult,
    IImportContentItemsResult,
    IImportData,
} from '../import.models';

interface ICreateContentItemResult {
    contentItemImportResult?: IImportContentItemResult,
    languageVariant?: LanguageVariantModels.ContentItemLanguageVariant;
    assets?: IImportAssetResult[];
}
interface ICreateContentItemWithAssetsResult {
    importedContentItem: ContentItemModels.ContentItem;
    assetImportResult: IImportAssetResult[];
}

@Injectable()
export class ContentItemsImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    importContentItems(data: IImportData, config: IImportConfig): Observable<IImportContentItemsResult> {
        const obs: Observable<void>[] = [];
        const importedContentItems: IImportContentItemResult[] = [];
        const importedLanguageVariants: LanguageVariantModels.ContentItemLanguageVariant[] = [];
        const assets: IImportAssetResult[] = [];
        const processedAssetsUrls: string[] = [];

        return this.prepareAllContentItemsWithoutLanguageVariants(data.targetClient, data).pipe(
            flatMap((createdContentItems) => {
                data.contentItems.forEach(contentItem => {
                    obs.push(this.createLanguageVariants(data, data.assetsFromFile, contentItem, data.targetClient, config, processedAssetsUrls, createdContentItems).pipe(
                        map((importResult) => {
                            if (!importResult.assets) {
                                throw Error(`Missing assets`);
                            }
                            if (!importResult.contentItemImportResult) {
                                throw Error(`Missing content item`);
                            }
                            if (!importResult.languageVariant) {
                                throw Error(`Missing language variant`);
                            }

                            importedContentItems.push(importResult.contentItemImportResult);
                            importedLanguageVariants.push(importResult.languageVariant);
                            assets.push(...importResult.assets);
                        })
                    ));
                });

                return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
                    map(() => {
                        return <IImportContentItemsResult>{
                            contentItems: importedContentItems,
                            languageVariants: importedLanguageVariants,
                            assets: assets
                        }
                    })
                );
            })
        );
    }

    private prepareAllContentItemsWithoutLanguageVariants(targetClient: IContentManagementClient, data: IImportData): Observable<IImportContentItemResult[]> {
        const createdContentItems: IImportContentItemResult[] = [];
        const obs: Observable<void>[] = [];

        for (const item of data.contentItems) {
            obs.push(this.addContentItem(targetClient, item).pipe(
                map(response => {
                    createdContentItems.push({
                        importedItem: response.data,
                        originalItem: item
                    });
                })
            ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return createdContentItems;
            })
        )
    }

    private addContentItem(targetClient: IContentManagementClient, contentItem: IContentItemModel): Observable<ContentItemResponses.AddContentItemResponse> {
        return targetClient.addContentItem()
            .withData({
                name: contentItem.system.name,
                type: {
                    codename: contentItem.system.type
                },
            })
            .toObservable()
            .pipe(
                map(response => {
                    this.processingService.addProcessedItem({
                        item: contentItem,
                        status: 'imported',
                        action: 'Add content item',
                        name: response.data.codename
                    });

                    return response;
                })
            );
    }

    private createLanguageVariants(
        data: IImportData,
        assetsFromFile: IAssetFromFile[],
        contentItem: IContentItemModel,
        targetClient: IContentManagementClient,
        config: IImportConfig,
        processedAssetUrls: string[],
        contentItems: IImportContentItemResult[]): Observable<ICreateContentItemResult> {
        let result: ICreateContentItemResult = {
            assets: []
        };

        const contentItemOfLanguageVariant = contentItems.find(m => m.originalItem.system.codename === contentItem.system.codename);

        if (!contentItemOfLanguageVariant) {
            throw Error(`Invalid parent item for '${contentItem.system.codename}' `);
        }
        const createContentItemWithAssetsResult: ICreateContentItemWithAssetsResult = {
            assetImportResult: [],
            importedContentItem: contentItemOfLanguageVariant.importedItem
        }

        const obs: Observable<any>[] = [];
        const elementKeys = Object.keys(contentItem.elements);
        for (const elementCodename of elementKeys) {
            const element = contentItem.elements[elementCodename];
            if (element.type) {
                if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                    obs.push(...this.createAssets(assetsFromFile, contentItem, element as IAssetFieldModel, targetClient, config, processedAssetUrls).map(
                        m => m.pipe(map((assetResponse) => {
                            createContentItemWithAssetsResult.assetImportResult.push({
                                importedItem: assetResponse.data
                            });
                        })
                        ))
                    )
                };
            }
        }

        let finalObs: Observable<ICreateContentItemWithAssetsResult>;

        if (obs.length === 0) {
            finalObs = of(createContentItemWithAssetsResult)
        }

        finalObs = observableHelper.zipObservables(obs).pipe(map(() => {
            if (!result.assets) {
                throw Error(`Cannot assign assets`);
            }
            result.assets.push(...createContentItemWithAssetsResult.assetImportResult.map(m => {
                return <IImportAssetResult>{
                    importedItem: m.importedItem
                }
            }));
            return createContentItemWithAssetsResult;
        }))

        return finalObs.pipe(
            flatMap((response) => {
                const createdContentItem = response.importedContentItem;
                const assets = response.assetImportResult.map(m => {
                    return <IImportAssetResult>{
                        importedItem: m.importedItem
                    }
                });

                result.contentItemImportResult = {
                    importedItem: response.importedContentItem,
                    originalItem: contentItem
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
                if (!result.contentItemImportResult) {
                    throw Error(`Content item was not assigned`);
                }

                this.processingService.addProcessedItem({
                    item: contentItem,
                    status: 'imported',
                    action: 'Add language variant',
                    name: `${result.contentItemImportResult} [${contentItem.system.language}] | ${response.data.item.id}`
                });

                result.languageVariant = response.data;
                return result;
            })
        );
    }

    private getAssetBlobFromUrl(asset: IAssetModel): Observable<IGetAssetData> {
        return from(new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', asset.url);
            xhr.responseType = 'blob';
            xhr.onload = () => {
                resolve({
                    blob: xhr.response,
                    asset: asset
                });
            }
            xhr.send();
        })) as Observable<IGetAssetData>;
    }

    private createAssets(assetsFromFile: IAssetFromFile[], contentItem: IContentItemModel, assetField: IAssetFieldModel, targetClient: IContentManagementClient, config: IImportConfig, processedAssetsUrls: string[]): Observable<AssetResponses.AddAssetResponse>[] {
        const obs: Observable<AssetResponses.AddAssetResponse>[] = [];
        const assetsToCreateObs: Observable<IGetAssetData>[] = [];

        if (assetsFromFile.length > 0) {
            // create assets only from file
            const assetsForContentItem = assetsFromFile.filter(m => m.embeddedAsset.contentItemCodename === contentItem.system.codename);
            for (const assetFromFile of assetsForContentItem) {

                assetsToCreateObs.push(of(<IGetAssetData>{
                    asset: assetFromFile.embeddedAsset.asset,
                    blob: assetFromFile.data
                }));
            }
        } else {
            // create assets from urls from projects directly
            for (const asset of assetField.value) {
                // filter already processed urls to avoid duplicates   
                if (!processedAssetsUrls.includes(asset.url)) {
                    assetsToCreateObs.push(this.getAssetBlobFromUrl(asset));
                    processedAssetsUrls.push(asset.url);
                }
            }
        }

        for (const assetObs of assetsToCreateObs) {
            obs.push(
                assetObs.pipe(
                    delay(this.cmRequestDelay),
                    flatMap(data => {
                        const asset: FieldModels.AssetModel = data.asset;
                        const contentLength = data.asset.size;
                        const contentType = data.asset.type;
                        const fileBinary = data.blob;

                        return targetClient.uploadBinaryFile()
                            .withData({
                                binaryData: fileBinary,
                                contentLength: contentLength,
                                contentType: contentType,
                                filename: asset.name
                            }).toObservable().pipe(
                                delay(this.cmRequestDelay),
                                flatMap(response => {

                                    this.processingService.addProcessedItem({
                                        item: contentItem,
                                        status: 'imported',
                                        action: 'Upload binary file',
                                        name: `[${response.data.type}] - ${response.data.id}`
                                    });

                                    return targetClient.addAsset().withData({
                                        title: asset.name,
                                        descriptions: [], // we don't know the language of description
                                        fileReference: {
                                            id: response.data.id,
                                            type: response.data.type
                                        },
                                        externalId: asset.url,
                                    }).toObservable()
                                }),
                                map((response) => {
                                    this.processingService.addProcessedItem({
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

    private fixInvalidHtmlInRichTextField(html: string): string {
        // because Kentico's sample project contains invalid values... 
        return html.replace(new RegExp('<br>', 'g'), '');
    }

    private mapElementValue(field: IContentItemFieldModel, assets: IImportAssetResult[]): any {
        if (field.type.toLowerCase() === FieldType.ModularContent.toLowerCase()) {
            const linkedItems = field.value as string[];
            return linkedItems.map(m => <SharedContracts.IReferenceObjectContract>{
                codename: m
            });
        }

        const value = field.value;


        if (field.type.toLowerCase() === FieldType.RichText.toLowerCase()) {
            return this.fixInvalidHtmlInRichTextField(field.value);
        }

        if (field.type.toLowerCase() === FieldType.Taxonomy.toLowerCase()) {

            const taxonomyField = field.value as IMultipleChoiceOptionModel[];
            return taxonomyField.map(option => <SharedContracts.IReferenceObjectContract>{
                codename: option.codename
            });
        }

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
                const newAssetResult = assets.find(m => m.importedItem.externalId === asset.url);

                if (newAssetResult) {
                    assetIds.push({
                        id: newAssetResult.importedItem.id
                    });
                }
            }
            return assetIds;
        }

        return value;
    }

    private getElements(contentItem: IContentItemModel, assets: IImportAssetResult[]): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const elements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];

        const elementCodenames = Object.keys(contentItem.elements);

        for (const elementCodename of elementCodenames) {
            elements.push({
                codename: this.removeSnippetFromElementCodename(elementCodename),
                value: this.mapElementValue(contentItem.elements[elementCodename], assets)
            });
        }

        return elements;
    }

    private removeSnippetFromElementCodename(codename: string): string {
        const metadataIdentifier = '__';
        if (codename.includes(metadataIdentifier)) {
            //   return codename.toString().substring(codename.indexOf(metadataIdentifier) + 2);
        }
        return codename;
    }
}