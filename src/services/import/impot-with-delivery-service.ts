import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { from, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { observableHelper } from '../../utilities';
import { CmFetchService } from '../fetch/cm-fetch.service';
import { DeliveryFetchService } from '../fetch/delivery-fetch.service';
import {
    ICMAssetModel,
    IContentTypeModel,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';
import { WorkflowService } from '../workflow/workflow.service';
import {
    IAssetFromFile,
    IImportConfig,
    IImportContentTypeResult,
    IImportData,
    IImportFromFileConfig,
    IImportFromProjectConfig,
    IImportResult,
    IImportTaxonomyResult,
    IPublishItemRequest,
} from './import.models';
import { AssetsImportService } from './types/assets-import.service';
import { ContentItemsImportService } from './types/content-items-import.service';
import { ContentTypesImportService } from './types/content-types-import.service';
import { LanguageVariantsImportService } from './types/language-variants-import.service';
import { TaxonomiesImportService } from './types/taxonomies-import.service';

@Injectable()
export class ImportWithDeliveryService {

    constructor(
        private contentTypesImportService: ContentTypesImportService,
        private contentItemsImportService: ContentItemsImportService,
        private taxonomiesImportService: TaxonomiesImportService,
        private deliveryFetchService: DeliveryFetchService,
        private cmFetchService: CmFetchService,
        private workflowService: WorkflowService,
        private languageVariantsImportService: LanguageVariantsImportService,
        private assetsImportService: AssetsImportService
    ) {
    }

    importFromFile(config: IImportFromFileConfig, exportZipFile: File): Observable<IImportResult> {
        const targetClient = this.getContentManagementClient({
            apiKey: config.apiKey,
            projectId: config.projectId
        });

        return from(JSZip.loadAsync(exportZipFile)).pipe(
            flatMap((response: any) => {
                const obs: Observable<void>[] = [];

                const importData: IImportData = {
                    contentItems: [],
                    contentTypes: [],
                    taxonomies: [],
                    targetClient,
                    assetsFromFile: [],
                    languageVariants: [],
                    assets: [],
                    targetProjectId: config.projectId
                };

                // taxonomies
                obs.push(
                    this.readJsonFile(response, environment.export.filenames.taxonomies).pipe(
                        map(taxonomiesString => {
                            const taxonomies = JSON.parse(taxonomiesString) as ITaxonomyModel[];
                            importData.taxonomies = taxonomies;
                        })
                    )
                );

                // content types
                obs.push(
                    this.readJsonFile(response, environment.export.filenames.contentTypes).pipe(
                        map(contentTypesString => {
                            const contentTypes = JSON.parse(contentTypesString) as IContentTypeModel[];
                            importData.contentTypes = contentTypes;
                        })
                    )
                );

                // content items
                obs.push(
                    this.readJsonFile(response, environment.export.filenames.contentItems).pipe(
                        map(contentItemsString => {
                            const contentItems = JSON.parse(contentItemsString) as ISlimContentItemModel[];
                            importData.contentItems = contentItems;
                        }),

                    )
                );

                // assets
                obs.push(
                    this.readJsonFile(response, environment.export.filenames.assets).pipe(
                        map(assetsString => {
                            const assets = JSON.parse(assetsString) as ICMAssetModel[];
                            importData.assets = assets;
                        }),

                    )
                );

                // language variants
                obs.push(
                    this.readJsonFile(response, environment.export.filenames.languageVariants).pipe(
                        map(languageVariantsString => {
                            const languageVariants = JSON.parse(languageVariantsString) as ILanguageVariantModel[];
                            importData.languageVariants = languageVariants;
                        }),

                    )
                );

                return observableHelper.zipObservables(obs).pipe(
                    map(() => {
                        return importData;
                    })
                );
            }),
            flatMap((importData) => {
                return this.import(importData, {});
            }),
            map(result => {
                return result;
            })
        );
    }

    importFromProject(config: IImportFromProjectConfig): Observable<IImportResult> {
        return this.getImportDataFromProject(config).pipe(
            flatMap(data => {
                return this.import(data, config);
            }),
            map((response) => {
                return response;
            })
        );
    }

    importContentItems(config: IImportFromProjectConfig): Observable<IImportResult> {
        const result: IImportResult = {
            importedContentItems: [],
            importedContentTypes: [],
            importedLanguageVariants: [],
            importedTaxonomies: [],
            publishedItems: [],
            importedAssets: []
        };

        return this.getImportDataFromProject(config).pipe(
            flatMap(data => {
                return this.contentItemsImportService.importContentItems(
                    data.targetClient,
                    data.contentItems,
                    {
                        contentTypes: data.contentTypes.map(m => <IImportContentTypeResult> {
                            importedItem: m,
                            originalItem: m
                        }),
                        taxonomies: data.taxonomies.map(m => <IImportTaxonomyResult> {
                            importedItem: m,
                            originalItem: m
                        })
                    }, config).pipe(
                        map(response => {
                            result.importedContentItems = response;
                            return response;
                        })
                    );
            }),
            map((response) => {
                return result;
            })
        );
    }

    import(data: IImportData, config: IImportConfig): Observable<IImportResult> {
        const result: IImportResult = {
            importedContentItems: [],
            importedContentTypes: [],
            importedLanguageVariants: [],
            importedTaxonomies: [],
            publishedItems: [],
            importedAssets: []
        };
        return this.taxonomiesImportService.importTaxonomies(data.targetClient, data.taxonomies, config).pipe(
            flatMap((response) => {
                result.importedTaxonomies = response;

                return this.contentTypesImportService.importContentTypes(data.targetClient, data.contentTypes, {
                    taxonomies: response
                }, config).pipe(
                    map((contentTypes) => {
                        result.importedContentTypes = contentTypes;
                    })
                );
            }),
            flatMap(() => {
                return this.assetsImportService.importAssets(data.targetProjectId, data.targetClient, data.assets, config).pipe(
                    map((response) => {
                        result.importedAssets = response;
                    })
                );
            }),
            flatMap(() => {
                return this.contentItemsImportService.importContentItems(data.targetClient, data.contentItems, {
                    contentTypes: result.importedContentTypes,
                    taxonomies: result.importedTaxonomies
                }, config).pipe(
                    map((response) => {
                        result.importedContentItems = response;
                    })
                );
            }),
            flatMap(() => {
                return this.languageVariantsImportService.importLanguageVariants(data.targetClient, data.languageVariants, {
                    contentTypes: result.importedContentTypes,
                    taxonomies: result.importedTaxonomies,
                    contentItems: result.importedContentItems,
                    assets: result.importedAssets
                }, config).pipe(
                    map((response) => {
                        result.importedLanguageVariants = response;
                    })
                )
            }),
            flatMap(() => {
                return this.workflowService.publishContentItems(result.importedLanguageVariants.map(languageVariantResult => {
                    if (!languageVariantResult.importedItem.item.id) {
                        throw Error(`Cannot publish item because item id is missing`);
                    }
                    if (!languageVariantResult.importedItem.language.id) {
                        throw Error(`Cannot publish item because language id is missing for item '${languageVariantResult.importedItem.item.id}'`);
                    }
                    return <IPublishItemRequest> {
                        itemId: languageVariantResult.importedItem.item.id,
                        languageId: languageVariantResult.importedItem.language.id
                    };
                }), data.targetClient, config).pipe(
                    map((response) => {
                        result.publishedItems = response;
                    })
                );
            }),
            map(() => {
                // all finished
                return result;
            })
        );
    }

    private getAssetFile(response: any, asset: ICMAssetModel): Observable<IAssetFromFile> {
        const files = response.files;
        const assetsFolderName = environment.export.filenames.assetsFolder;

        const fullFilePath = `${assetsFolderName}/${asset.id}/${asset.fileName}`;
        const assetFile = files[fullFilePath];

        if (!assetFile) {
            throw Error(`Invalid file '${fullFilePath}'`);
        }

        return from(assetFile.async('blob')).pipe(
            map(data => {
                return <IAssetFromFile> {
                    data: data as Blob,
                    embeddedAsset: asset
                };
            })
        );
    }

    private readJsonFile(response: any, filename: string): Observable<string> {
        const files = response.files;
        const file = files[filename];

        if (!file) {
            throw Error(`Invalid file '${filename}'`);
        }

        return from(file.async('text')).pipe(
            map(data => data as string)
        );
    }

    private getImportDataFromProject(config: IImportFromProjectConfig): Observable<IImportData> {
        const sourceContentManagementClient = this.getContentManagementClient({
            projectId: config.sourceProjectId,
            apiKey: config.sourceProjectCmApiKey
        });

        const targetContentManagementClient = this.getContentManagementClient({
            projectId: config.targetProjectId,
            apiKey: config.targetProjectCmApiKey
        });

        const data: IImportData = {
            targetClient: targetContentManagementClient,
            contentTypes: [],
            contentItems: [],
            taxonomies: [],
            assetsFromFile: [],
            languageVariants: [],
            assets: [],
            targetProjectId: config.targetProjectId
        };

        const obs: Observable<void>[] = [
            this.cmFetchService.getAllAssets(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(
                map((response) => {
                    data.assets = response;
                })
            ),
            this.cmFetchService.getAllTypes(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(
                map((response) => {
                    data.contentTypes = response;
                })
            ),
            this.cmFetchService.getAllContentItems(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(
                map((response) => {
                    data.contentItems = response;
                })
            ),
            this.cmFetchService.getAllTaxonomies(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(
                map((response) => {
                    data.taxonomies = response;
                })
            ),
        ];

        return observableHelper.zipObservables(obs).pipe(
            flatMap(() => {
                return this.cmFetchService.getLanguageVariantsForContentItems(config.sourceProjectId, config.sourceProjectCmApiKey, {
                    contentItems: data.contentItems,
                    contentTypes: data.contentTypes
                });
            }),
            map(response => {
                data.languageVariants = response;
                return data;
            })
        );
    }

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}
