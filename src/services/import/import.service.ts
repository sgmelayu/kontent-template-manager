import { Injectable } from '@angular/core';
import { IContentManagementClient } from 'kentico-cloud-content-management';
import { Observable, of } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { WorkflowService } from '../workflow/workflow.service';
import {
    IImportConfig,
    IImportContentTypeResult,
    IImportData,
    IImportLanguageVariantsResult,
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
        private languageVariantsImportService: LanguageVariantsImportService,
        private assetsImportService: AssetsImportService
    ) {
    }

    importContentItemsOnly(data: IImportData, config: IImportConfig): Observable<IImportResult> {
        const result: IImportResult = {
            importedContentItems: [],
            importedContentTypes: [],
            importedLanguageVariants: [],
            importedTaxonomies: [],
            publishedItems: [],
            importedAssets: []
        };

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
                flatMap(response => {
                    result.importedContentItems = response;

                    return this.assetsImportService.importAssetsByUrl(data.targetClient, data.assets, data.assetsFromFile, config);

                }),
                flatMap(response => {
                    result.importedAssets = response;

                    return this.languageVariantsImportService.importLanguageVariants(data.targetClient, data.languageVariants, {
                        assets: result.importedAssets,
                        contentItems: result.importedContentItems,
                        contentTypes: data.contentTypes.map(m => <IImportContentTypeResult>{
                            importedItem: m,
                            originalItem: m
                        }),
                        taxonomies: data.taxonomies.map(m => <IImportTaxonomyResult>{
                            importedItem: m,
                            originalItem: m
                        })
                    }, config)
                }),
                flatMap((response) => {
                    result.importedLanguageVariants = response;

                    if (config.publishAllItems) {
                        return this.getPublishObservable(data.targetClient, config, result.importedLanguageVariants);
                    }
                    return of(undefined);
                }),
                map((response) => {
                    if (response) {
                        result.publishedItems = response;
                    }
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
                return this.assetsImportService.importAssetsByUrl(data.targetClient, data.assets, data.assetsFromFile, config).pipe(
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
                    return this.getPublishObservable(data.targetClient, config, result.importedLanguageVariants);
                }
                return of(undefined);
            }),
            map((response) => {
                if (response) {
                    result.publishedItems = response;
                }

                // all finished
                return result;
            })
        );
    }

    private getPublishObservable(client: IContentManagementClient, config: IImportConfig, importedLanguageVariants: IImportLanguageVariantsResult[]): Observable<IPublishItemRequest[]> {
        return this.workflowService.publishContentItems(importedLanguageVariants.map(languageVariantResult => {
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
        }), client, config);
    }
}
