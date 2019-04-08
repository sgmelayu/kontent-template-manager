import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { from, Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { observableHelper } from '../../utilities';
import { ExportService } from '../export/export.service';
import {
    ICMAssetModel,
    IContentTypeModel,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';
import { WorkflowService } from '../workflow/workflow.service';
import {
    IImportConfig,
    IImportContentTypeResult,
    IImportData,
    IImportFromFileConfig,
    IImportFromProjectWithDeliveryConfig,
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
export class ImportService {

    constructor(
        private contentTypesImportService: ContentTypesImportService,
        private contentItemsImportService: ContentItemsImportService,
        private taxonomiesImportService: TaxonomiesImportService,
        private workflowService: WorkflowService,
        private exportService: ExportService,
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
                return this.import(importData, config);
            }),
            map(result => {
                return result;
            })
        );
    }

    importFromProjectWithDeliveryApi(config: IImportFromProjectWithDeliveryConfig): Observable<IImportResult> {
        return this.exportService.exportDataFromProjectUsingDeliveryApi(config).pipe(
            flatMap(data => {
                return this.import(data, config);
            }),
            map((response) => {
                return response;
            })
        );
    }

    importContentItemsWithDeliveryApi(config: IImportFromProjectWithDeliveryConfig): Observable<IImportResult> {
        const result: IImportResult = {
            importedContentItems: [],
            importedContentTypes: [],
            importedLanguageVariants: [],
            importedTaxonomies: [],
            publishedItems: [],
            importedAssets: []
        };

        return this.exportService.exportDataFromProjectUsingDeliveryApi(config).pipe(
            flatMap(data => {
                return this.contentItemsImportService.importContentItems(
                    data.targetClient,
                    data.contentItems,
                    {
                        contentTypes: data.contentTypes.map(m => <IImportContentTypeResult>{
                            importedItem: m,
                            originalItem: m
                        }),
                        taxonomies: data.taxonomies.map(m => <IImportTaxonomyResult>{
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
                if (config.publishAllItems) {
                    return this.workflowService.publishContentItems(result.importedLanguageVariants.map(languageVariantResult => {
                        if (!languageVariantResult.importedItem.item.id) {
                            throw Error(`Cannot publish item because item id is missing`);
                        }
                        if (!languageVariantResult.importedItem.language.id) {
                            throw Error(`Cannot publish item because language id is missing for item '${languageVariantResult.importedItem.item.id}'`);
                        }
                        return <IPublishItemRequest>{
                            itemId: languageVariantResult.importedItem.item.id,
                            languageId: languageVariantResult.importedItem.language.id
                        };
                    }), data.targetClient, config).pipe(
                        map((response) => {
                            result.publishedItems = response;
                        })
                    );
                } else {
                    result.publishedItems = [];
                }
                return of(undefined);
            }),
            map(() => {
                // all finished
                return result;
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

    private getContentManagementClient(config: IContentManagementClientConfig): IContentManagementClient {
        return new ContentManagementClient(config);
    }
}
