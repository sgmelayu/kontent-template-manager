import { Injectable } from '@angular/core';
import { saveAs } from 'filesaver.js';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BaseService } from '../base-service';
import { CmFetchService } from '../fetch/cm-fetch.service';
import { IContentTypeModel } from '../shared/shared.models';
import { IExportJsonResult } from './export.models';

@Injectable()
export class ExportService extends BaseService {

    constructor(
        private cmFetchService: CmFetchService
    ) {
        super();
    }

    prepareAndDownloadPackage(projectId: string, projectApiKey: string, languageCodenames: string[]): Observable<IExportJsonResult> {
        const contentTypes: IContentTypeModel[] = [];
        const result: IExportJsonResult = {
            contentItems: '',
            contentTypes: '',
            taxonomies: '',
            assets: '',
            languageVariants: '',
            assetModels: []
        };

        return this.cmFetchService.getAllTypes(projectId, projectApiKey, []).pipe(
            flatMap(types => {
                result.contentTypes = JSON.stringify(types);
                contentTypes.push(...types);

                return this.cmFetchService.getAllContentItems(projectId, projectApiKey, []);
            }),
            flatMap(contentItems => {
                result.contentItems = JSON.stringify(contentItems);

                return this.cmFetchService.getLanguageVariantsForContentItems(projectId, projectApiKey, {
                    contentItems: contentItems,
                    contentTypes: contentTypes
                });
            }),
            flatMap(languageVariants => {
                result.languageVariants = JSON.stringify(languageVariants);

                return this.cmFetchService.getAllTaxonomies(projectId, projectApiKey, []);
            }),
            flatMap(taxonomies => {
                result.taxonomies = JSON.stringify(taxonomies);

                return this.cmFetchService.getAllAssets(projectId, projectApiKey, []);
            }),
            map(assets => {
                result.assets = JSON.stringify(assets);
                result.assetModels.push(...assets);

                return result;
            })
        );
    }

    createAndDownloadZipFile(projectId: string, data: IExportJsonResult, callback: (() => void)): void {
        const zip = new JSZip();

        zip.file(environment.export.filenames.contentTypes, data.contentTypes);
        zip.file(environment.export.filenames.contentItems, data.contentItems);
        zip.file(environment.export.filenames.taxonomies, data.taxonomies);
        zip.file(environment.export.filenames.assets, data.assets);
        zip.file(environment.export.filenames.languageVariants, data.languageVariants);

        const assetsFolder = zip.folder(environment.export.filenames.assetsFolder);

        for (const asset of data.assetModels) {
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
