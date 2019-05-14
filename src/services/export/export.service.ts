import { Injectable } from '@angular/core';
import { saveAs } from 'filesaver.js';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import {
    ContentManagementClient,
    IContentManagementClient,
    IContentManagementClientConfig,
} from 'kentico-cloud-content-management';
import { from, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { observableHelper, zipHelper } from '../../utilities';
import { versionInfo } from '../../version';
import { BaseService } from '../base-service';
import { CmFetchService } from '../fetch/cm-fetch.service';
import { DeliveryFetchService } from '../fetch/delivery-fetch.service';
import {
    IAssetFromFile,
    IImportData,
    IImportFromFileConfig,
    IImportFromProjectWithCMConfig,
    IImportFromProjectWithDeliveryConfig,
} from '../import/import.models';
import {
    IAssetModel,
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
        zip.file(environment.export.filenames.metadata, JSON.stringify(data.metadata));

        const assetsFolder = zip.folder(environment.export.filenames.assetsFolder);

        for (const asset of data.assets) {
            const assetIdShortFolder = assetsFolder.folder(asset.id.substr(0, 3));
            const assetIdFolder = assetIdShortFolder.folder(asset.id);
            const assetFilename = asset.fileName;
            assetIdFolder.file(
                assetFilename,
                this.urlToPromise(asset.deliveryUrl),
                {
                    binary: true
                }
            );
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
            languageVariants: [],
            assets: [],
            targetProjectId: config.targetProjectId,
            assetsFromFile: [],
            metadata: {
                version: versionInfo.version,
            }
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
            flatMap((fileContents: any) => {
                const obs: Observable<void>[] = [];

                const importData: IImportData = {
                    contentItems: [],
                    contentTypes: [],
                    taxonomies: [],
                    targetClient,
                    languageVariants: [],
                    assets: [],
                    targetProjectId: config.projectId,
                    assetsFromFile: [],
                    metadata: {
                        version: versionInfo.version,
                    }
                };

                // taxonomies
                obs.push(
                    this.readJsonFile(fileContents, environment.export.filenames.taxonomies).pipe(
                        map(taxonomiesString => {
                            const taxonomies = JSON.parse(taxonomiesString) as ITaxonomyModel[];
                            importData.taxonomies = taxonomies;
                        })
                    )
                );

                // content types
                obs.push(
                    this.readJsonFile(fileContents, environment.export.filenames.contentTypes).pipe(
                        map(contentTypesString => {
                            const contentTypes = JSON.parse(contentTypesString) as IContentTypeModel[];
                            importData.contentTypes = contentTypes;
                        })
                    )
                );

                // content items
                obs.push(
                    this.readJsonFile(fileContents, environment.export.filenames.contentItems).pipe(
                        map(contentItemsString => {
                            const contentItems = JSON.parse(contentItemsString) as ISlimContentItemModel[];
                            importData.contentItems = contentItems;
                        })
                    )
                );

                // assets
                obs.push(
                    this.readJsonFile(fileContents, environment.export.filenames.assets).pipe(
                        flatMap(assetsString => {
                            const assets = JSON.parse(assetsString) as IAssetModel[];

                            return this.getAssetBinariesFromFile(fileContents, assets);
                        }),
                        map((assetsFromFile) => {
                            importData.assetsFromFile = assetsFromFile;

                        })
                    )
                );

                // language variants
                obs.push(
                    this.readJsonFile(fileContents, environment.export.filenames.languageVariants).pipe(
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
        const targetContentManagementClient = this.getContentManagementClient({
            projectId: config.targetProjectId,
            apiKey: config.targetProjectCmApiKey
        });

        const data: IImportData = {
            targetClient: targetContentManagementClient,
            contentTypes: [],
            contentItems: [],
            taxonomies: [],
            languageVariants: [],
            assets: [],
            targetProjectId: config.targetProjectId,
            assetsFromFile: [],
            metadata: {
                version: versionInfo.version,
            }
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

    private getAssetBinariesFromFile(fileContents: any, assets: IAssetModel[]): Observable<IAssetFromFile[]> {
        const obs: Observable<void>[] = [];
        const assetsFromFile: IAssetFromFile[] = [];

        if (!fileContents) {
            throw Error(`Invalid zip file'`);
        }

        const files = fileContents.files;

        for (const asset of assets) {
            const assetFile = files[zipHelper.getFullAssetPath(asset.id, asset.fileName)];
            obs.push(
                from(assetFile.async('blob')).pipe(
                    map(data => {
                        assetsFromFile.push({
                            asset: asset,
                            data: data as Blob
                        })
                    })
                ))
        }

        return observableHelper.zipObservables(obs).pipe(
            map(() => assetsFromFile)
        )
    }


    private readJsonFile(fileContents: any, filename: string): Observable<string> {
        const files = fileContents.files;
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
