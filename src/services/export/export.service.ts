import { Injectable } from '@angular/core';
import { saveAs } from 'filesaver.js';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { config, from, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { observableHelper } from '../../utilities';
import { BaseService } from '../base-service';
import { CmFetchService } from '../fetch/cm-fetch.service';
import { DeliveryFetchService } from '../fetch/delivery-fetch.service';
import {
    IImportData,
    IImportFromFileConfig,
    IImportFromProjectWithCMConfig,
    IImportFromProjectWithDeliveryConfig,
} from '../import/import.models';
import {
    ICMAssetModel,
    IContentTypeModel,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

@Injectable()
export class ExportService extends BaseService {

    constructor(
        private cmFetchService: CmFetchService,
        private deliveryFetchService: DeliveryFetchService
    ) {
        super();
    }

    createAndDownloadZipFile(projectId: string, data: IImportData, callback: (() => void)): void {
        const zip = new JSZip();

        zip.file(environment.export.filenames.contentTypes, JSON.stringify(data.contentTypes));
        zip.file(environment.export.filenames.contentItems, JSON.stringify(data.contentItems));
        zip.file(environment.export.filenames.taxonomies, JSON.stringify(data.taxonomies));
        zip.file(environment.export.filenames.assets, JSON.stringify(data.assets));
        zip.file(environment.export.filenames.languageVariants, JSON.stringify(data.languageVariants));

        const assetsFolder = zip.folder(environment.export.filenames.assetsFolder);

        for (const asset of data.assets) {
            const assetSubFolder = assetsFolder.folder(asset.id);
            const assetFilename = asset.fileName;
            assetSubFolder.file(
                assetFilename,
                this.urlToPromise(asset.deliveryUrl),
                {
                    binary: true
                });
        }

        zip.generateAsync({ type: 'blob' }).then((content: any) => {
            saveAs(content, `${environment.export.filenames.packagePrefix}${projectId}.zip`);
            callback();
        });
    }

    getImportDataWithDeliveryApi(config: IImportFromProjectWithDeliveryConfig): Observable<IImportData> {
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

        return this.deliveryFetchService.getAllTypes(config.sourceProjectId, [], {
            useProcessingService: true
        }).pipe(
            flatMap(types => {
                data.contentTypes.push(...types);
                return this.deliveryFetchService.getAllContentItems(config.sourceProjectId, config.languages, {
                    useProcessingService: true
                });
            }),
            flatMap(contentItemsResult => {
                data.assets.push(...contentItemsResult.assets);
                data.contentItems.push(...contentItemsResult.contentItems);
                data.languageVariants.push(...contentItemsResult.languageVariants);

                return this.deliveryFetchService.getAllTaxonomies(config.sourceProjectId, [], {
                    useProcessingService: true
                });
            }),
            map(taxonomies => {
                data.taxonomies.push(...taxonomies);

                return data;
            })
        );
    }

    getImportDataFromFile(config: IImportFromFileConfig): Observable<IImportData> {
        const targetClient = this.getContentManagementClient({
            apiKey: config.apiKey,
            projectId: config.projectId
        });

        return from(JSZip.loadAsync(config.file)).pipe(
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
            map(result => {
                return result;
            })
        );
    }

    getImportDataWithCMApi(config: IImportFromProjectWithCMConfig): Observable<IImportData> {
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

    private urlToPromise(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            JSZipUtils.getBinaryContent(url, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
