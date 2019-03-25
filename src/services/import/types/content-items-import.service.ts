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
    IContentItemImportPrerequisities,
    ICreateContentItemWithAssetsResult as IContentItemWithAssetsResult,
    ICreateLanguageVariantResult,
    IGetAssetData,
    IImportAssetResult,
    IImportConfig,
    IImportContentItemResult,
    IImportContentItemsResult,
    IImportData,
} from '../import.models';

@Injectable()
export class ContentItemsImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    importContentItems(data: IImportData, prerequisities: IContentItemImportPrerequisities, config: IImportConfig): Observable<IImportContentItemsResult> {
        const obs: Observable<void>[] = [];
        const importedContentItems: IImportContentItemResult[] = [];
        const importedLanguageVariants: ICreateLanguageVariantResult[] = [];
        const assets: IImportAssetResult[] = [];
        const processedAssetsUrls: string[] = [];

        return this.prepareAllContentItemsWithoutLanguageVariants(data.targetClient, data, prerequisities).pipe(
            flatMap((createdContentItems) => {
                importedContentItems.push(...createdContentItems);

                data.contentItems.forEach(contentItem => {
                    obs.push(this.createLanguageVariants({
                        assetsFromFile: data.assetsFromFile,
                        contentItem: contentItem,
                        targetClient: data.targetClient,
                        config: config,
                        contentItems: createdContentItems,
                        processedAssetUrls: processedAssetsUrls,
                        prerequisities: prerequisities
                    }).pipe(
                        map((importResult) => {
                            importedLanguageVariants.push(importResult);
                            assets.push(...importResult.assets);
                        })
                    ));
                });

                return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
                    map(() => {
                        console.log(importedLanguageVariants);
                        return <IImportContentItemsResult>{
                            contentItems: importedContentItems,
                            languageVariants: importedLanguageVariants,
                            assets: assets,
                        }
                    })
                );
            })
        );
    }

    private prepareAllContentItemsWithoutLanguageVariants(targetClient: IContentManagementClient, data: IImportData, prerequisities: IContentItemImportPrerequisities): Observable<IImportContentItemResult[]> {
        const createdContentItems: IImportContentItemResult[] = [];
        const obs: Observable<void>[] = [];

        // because multiple language variants share the same content item
        // and it's fine to just create 'parent' content item once
        const processedContentItemCodenames: string[] = [];

        for (const item of data.contentItems) {
            if (!processedContentItemCodenames.includes(item.system.codename)) {
                obs.push(this.addContentItem(targetClient, item, prerequisities).pipe(
                    map(response => {
                        createdContentItems.push({
                            importedItem: response.data,
                            originalItem: item
                        });
                    })
                ));
                processedContentItemCodenames.push(item.system.codename);
            }
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return createdContentItems;
            })
        )
    }

    private addContentItem(targetClient: IContentManagementClient, contentItem: IContentItemModel, prerequisities: IContentItemImportPrerequisities): Observable<ContentItemResponses.AddContentItemResponse> {
        const candidateContentType = prerequisities.contentTypes.find(m => m.originalItem.system.codename === contentItem.system.type);

        if (!candidateContentType) {
            throw Error(`Could not find candidate content type '${contentItem.system.type}'. This was required by '${contentItem.system.codename}' content item.`);
        }

        return targetClient.addContentItem()
            .withData({
                name: contentItem.system.name,
                type: {
                    codename: candidateContentType.importedItem.system.codename
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
        data: {
            assetsFromFile: IAssetFromFile[],
            contentItem: IContentItemModel,
            targetClient: IContentManagementClient,
            config: IImportConfig,
            processedAssetUrls: string[],
            contentItems: IImportContentItemResult[],
            prerequisities: IContentItemImportPrerequisities
        }

    ): Observable<ICreateLanguageVariantResult> {
        const tempResult = {
            assets: <IImportAssetResult[]>[],
            languageVariant: <LanguageVariantModels.ContentItemLanguageVariant | undefined> undefined
        };

        const candidateContentItemForLanguageVariant = data.contentItems.find(m => m.originalItem.system.codename === data.contentItem.system.codename);

        if (!candidateContentItemForLanguageVariant) {
            throw Error(`Cannot find candidate content item for langugage variant '${data.contentItem.system.codename}' `);
        }
        const contentItemWithAssetsResult: IContentItemWithAssetsResult = {
            assetImportResult: [],
            importedContentItem: candidateContentItemForLanguageVariant.importedItem
        }

        const obs: Observable<any>[] = [];
        const elementKeys = Object.keys(data.contentItem.elements);
        for (const elementCodename of elementKeys) {
            const element = data.contentItem.elements[elementCodename];
            if (element.type) {
                if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                    obs.push(...this.createAssets(data.assetsFromFile, data.contentItem, element as IAssetFieldModel, data.targetClient, data.config, data.processedAssetUrls).map(
                        m => m.pipe(map((assetResponse) => {
                            contentItemWithAssetsResult.assetImportResult.push({
                                importedItem: assetResponse.data
                            });
                        })
                        ))
                    )
                };
            }
        }

        let finalObs: Observable<IContentItemWithAssetsResult>;

        if (obs.length === 0) {
            finalObs = of(contentItemWithAssetsResult)
        }

        finalObs = observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(map(() => {
            tempResult.assets.push(...contentItemWithAssetsResult.assetImportResult.map(m => {
                return <IImportAssetResult>{
                    importedItem: m.importedItem
                }
            }));
            return contentItemWithAssetsResult;
        }))

        return finalObs.pipe(
            flatMap((response) => {
                const createdContentItem = response.importedContentItem;
                const assets = response.assetImportResult.map(m => {
                    return <IImportAssetResult>{
                        importedItem: m.importedItem
                    }
                });

                if (!data.contentItem.system.language) {
                    throw Error(`Invalid language for item '${data.contentItem.system.language}'`);
                }

                return data.targetClient.upsertLanguageVariant()
                    .byItemCodename(createdContentItem.codename)
                    .byLanguageCodename(data.contentItem.system.language)
                    .withElementCodenames(this.getElements(data.contentItem, assets, data.prerequisities))
                    .toObservable();
            }),
            map(response => {
                this.processingService.addProcessedItem({
                    item: data.contentItem,
                    status: 'imported',
                    action: 'Add language variant',
                    name: `${response.data.item.codename} [${data.contentItem.system.language}] | ${response.data.item.id}`
                });

                tempResult.languageVariant = response.data;

                return <ICreateLanguageVariantResult>{
                    assets: tempResult.assets,
                    languageVariant: tempResult.languageVariant,
                    languageCodename: data.contentItem.system.language
                };
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
                if (!processedAssetsUrls.includes(assetFromFile.embeddedAsset.asset.url)) {
                    assetsToCreateObs.push(of(<IGetAssetData>{
                        asset: assetFromFile.embeddedAsset.asset,
                        blob: assetFromFile.data
                    }));
                    processedAssetsUrls.push(assetFromFile.embeddedAsset.asset.url);
                }
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

    private getElements(contentItem: IContentItemModel, assets: IImportAssetResult[], prerequisities: IContentItemImportPrerequisities): LanguageVariantModels.ILanguageVariantElementCodename[] {
        const contentItemElements: LanguageVariantModels.ILanguageVariantElementCodename[] = [];
        const contentItemElementCodenames = Object.keys(contentItem.elements);

        const candidateContentType = prerequisities.contentTypes.find(m => m.originalItem.system.codename === contentItem.system.type);

        if (!candidateContentType) {
            throw Error(`Could not find candidate content type '${contentItem.system.type}'. This type is required by content item '${contentItem.system.codename}'`);
        }

        const originalElements = candidateContentType.originalItem.elements;
        const importedElements = candidateContentType.importedItem.elements;

        for (const elementCodename of contentItemElementCodenames) {
            const originalElement = originalElements.find(m => m.codename === elementCodename);

            if (!originalElement) {
                throw Error(`Cannot find element '${elementCodename}' in original elements`);
            }

            const originalElementIndex = originalElements.findIndex(m => m.codename === elementCodename);

            if (originalElementIndex === -1) {
                throw Error(`Cannot find element with index '${originalElementIndex}' in original elements`);
            }

            // This is very dangerous because we are mapping elements based on their index
            // and if KC API changes order of elements, this will be broken.
            const importedElement = importedElements[originalElementIndex];

            if (!importedElement) {
                console.log(elementCodename, originalElement, candidateContentType);
                throw Error(`Could not find candidate import element for element with codename '${originalElement.codename}'`);
            }

            contentItemElements.push({
                codename: importedElement.codename,
                value: this.mapElementValue(contentItem.elements[elementCodename], assets)
            });
        }

        return contentItemElements;
    }
}