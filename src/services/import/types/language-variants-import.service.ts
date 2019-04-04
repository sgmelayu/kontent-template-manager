import { Injectable } from '@angular/core';
import {
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
    IContentItemFieldModel,
    IContentItemModel,
    IMultipleChoiceOptionModel,
    ILanguageVariantModel,
} from '../../shared/shared.models';
import {
    IAssetFromFile,
    IContentItemImportPrerequisities,
    ICreateContentItemWithAssetsResult as IContentItemWithAssetsResult,
    IGetAssetData,
    IImportAssetResult,
    IImportConfig,
    IImportContentItemResult,
    IImportLanguageVariantsResult,
    IImportData,
    ILanguageVariantsImportPrerequisities,
} from '../import.models';

@Injectable()
export class LanguageVariantsImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    /*
    importLanguageVariants(targetClient: IContentManagementClient, languageVariants: ILanguageVariantModel[], prerequisities: ILanguageVariantsImportPrerequisities, config: IImportConfig): Observable<IImportLanguageVariantsResult[]> {
        const obs: Observable<void>[] = [];
        const importedLanguageVariants: ICreateLanguageVariantResult[] = [];
        const assets: IImportAssetResult[] = [];

        return this.createLanguageVariants(targetClient, languageVariants, prerequisities).pipe(
            flatMap((createdContentItems) => {
                importedContentItems.push(...createdContentItems);

                languageVariants.forEach(contentItem => {
                    obs.push(this.createLanguageVariants({
                        assetsFromFile: assetsFromFile,
                        contentItem: contentItem,
                        targetClient: targetClient,
                        config: config,
                        contentItems: createdContentItems,
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
                        return <IImportLanguageVariantsResult>{
                            contentItems: importedContentItems,
                            languageVariants: importedLanguageVariants,
                            assets: assets,
                        }
                    })
                );
            })
        );
    }

    private createLanguageVariants(
        data: {
            assetsFromFile: IAssetFromFile[],
            contentItem: IContentItemModel,
            targetClient: IContentManagementClient,
            config: IImportConfig,
            contentItems: IImportContentItemResult[],
            prerequisities: IContentItemImportPrerequisities
        }

    ): Observable<ICreateLanguageVariantResult> {
        const tempResult = {
            assets: <IImportAssetResult[]>[],
            languageVariant: <LanguageVariantModels.ContentItemLanguageVariant | undefined>undefined
        };

        const candidateContentItemForLanguageVariant = data.contentItems.find(m => m.originalItem.system.codename === data.contentItem.system.codename);

        if (!candidateContentItemForLanguageVariant) {
            throw Error(`Cannot find candidate content item for langugage variant '${data.contentItem.system.codename}' `);
        }
        const contentItemWithAssetsResult: IContentItemWithAssetsResult = {
            assetImportResult: [],
            importedContentItem: candidateContentItemForLanguageVariant.importedItem
        };

        const obs: Observable<any>[] = [];
        const elementKeys = Object.keys(data.contentItem.elements);
        for (const elementCodename of elementKeys) {
            const element = data.contentItem.elements[elementCodename];
            if (element.type) {
                if (element.type.toLowerCase() === FieldType.Asset.toLowerCase()) {
                    obs.push(...this.createAssets(data.assetsFromFile, data.contentItem, element as IAssetFieldModel, data.targetClient, data.config).map(
                        m => m.pipe(map((assetResponse) => {
                            contentItemWithAssetsResult.assetImportResult.push({
                                importedItem: assetResponse.importedItem,
                                originalItem: assetResponse.originalItem
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

                if (!data.contentItem.system.language) {
                    throw Error(`Invalid language for item '${data.contentItem.system.language}'`);
                }

                return data.targetClient.upsertLanguageVariant()
                    .byItemCodename(createdContentItem.codename)
                    .byLanguageCodename(data.contentItem.system.language)
                    .withElementCodenames(this.getElements(data.contentItem, response.assetImportResult, data.prerequisities))
                    .toObservable();
            }),
            map(response => {
                this.processingService.addProcessedItem({
                    item: data.contentItem,
                    status: 'imported',
                    action: 'Add language variant',
                    name: `${data.contentItem.system.codename} [${data.contentItem.system.language}]`
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

    private getAssetBlobFromUrl(url: string): Observable<IGetAssetData> {
        return from(new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.onload = () => {
                resolve({
                    blob: xhr.response,
                });
            }
            xhr.send();
        })) as Observable<IGetAssetData>;
    }

    private createAssets(assetsFromFile: IAssetFromFile[], contentItem: IContentItemModel, assetField: IAssetFieldModel, targetClient: IContentManagementClient, config: IImportConfig): Observable<IImportAssetResult>[] {
        const obs: Observable<IImportAssetResult>[] = [];
        const assetsToCreateObs: Observable<IGetAssetData>[] = [];

        if (assetsFromFile.length > 0) {
            // create assets from file
            const assetsForContentItem = assetsFromFile.filter(m => m.embeddedAsset.contentItemCodename === contentItem.system.codename && m.embeddedAsset.languageCodename === contentItem.system.language);
            for (const assetFromFile of assetsForContentItem) {
                assetsToCreateObs.push(of(<IGetAssetData>{
                    embeddedAsset: assetFromFile.embeddedAsset,
                    blob: assetFromFile.data
                }));

            }
        } else {
            // create assets from urls from projects directly
            for (const asset of assetField.value) {
                // filter already processed urls to avoid duplicates   
                assetsToCreateObs.push(this.getAssetBlobFromUrl(asset.url).pipe(
                    map(response => {
                        return <IGetAssetData>{
                            blob: response.blob,
                            embeddedAsset: {
                                asset: asset,
                                contentItemCodename: contentItem.system.codename,
                                contentItemId: contentItem.system.id,
                                fieldCodename: assetField.name,
                                languageCodename: contentItem.system.language
                            }
                        }
                    })
                ));
            }
        }

        for (const assetObs of assetsToCreateObs) {
            obs.push(
                assetObs.pipe(
                    delay(this.cmRequestDelay),
                    flatMap(data => {
                        const asset: FieldModels.AssetModel = data.embeddedAsset.asset;
                        const contentLength = asset.size;
                        const contentType = asset.type;
                        const fileBinary = data.blob;

                        return targetClient.uploadBinaryFile()
                            .withData({
                                binaryData: fileBinary,
                                contentType: contentType,
                                contentLength: contentLength,
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
                                        descriptions: [],
                                        fileReference: {
                                            id: response.data.id,
                                            type: response.data.type
                                        },
                                        // externalId: asset.url,
                                    }).toObservable()
                                }),
                                map((response) => {
                                    this.processingService.addProcessedItem({
                                        item: contentItem,
                                        status: 'imported',
                                        action: 'Add asset',
                                        name: `[${response.data.type}] - ${response.data.id}`
                                    });
                                    return <IImportAssetResult>{
                                        importedItem: response.data,
                                        originalItem: data.embeddedAsset
                                    };
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

    private mapElementValue(contentItem: IContentItemModel, field: IContentItemFieldModel, importedAssets: IImportAssetResult[]): any {
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
            const fieldAssets = importedAssets.filter(m =>
                m.originalItem.fieldCodename === field.name);

            for (const fieldAsset of fieldAssets) {
                assetIds.push({
                    id: fieldAsset.importedItem.id
                });
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
                throw Error(`Could not find candidate import element for element with codename '${originalElement.codename}'`);
            }

            contentItemElements.push({
                codename: importedElement.codename,
                value: this.mapElementValue(contentItem, contentItem.elements[elementCodename], assets)
            });
        }

        return contentItemElements;
    }
    */
}
