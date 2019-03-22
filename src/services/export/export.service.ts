import { Injectable } from '@angular/core';
import { saveAs } from 'filesaver.js';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BaseService } from '../base-service';
import { DeliveryFetchService } from '../fetch/delivery-fetch.service';
import { IExportJsonResult } from './export.models';

@Injectable()
export class ExportService extends BaseService {

    constructor(
        private deliveryFetchService: DeliveryFetchService
    ) {
        super();
    }

    prepareAndDownloadPackage(projectId: string): Observable<IExportJsonResult> {
        const result: IExportJsonResult = {
            contentItems: '',
            contentTypes: '',
            taxonomies: '',
            assets: []
        };

        return this.deliveryFetchService.getAllTypes(projectId, []).pipe(
            flatMap(types => {
                result.contentTypes = JSON.stringify(types);

                return this.deliveryFetchService.getAllContentItems(projectId, []);
            }),
            flatMap(contentItems => {
                result.contentItems = JSON.stringify(contentItems);

                for (const contentItem of contentItems) {
                    result.assets.push(...contentItem.assets);
                }
                return this.deliveryFetchService.getAllTaxonomies(projectId, []);
            }),
            map(taxonomies => {
                result.taxonomies = JSON.stringify(taxonomies);

                return result;
            })
        )
    }

    createAndDownloadZipFile(projectId: string, data: IExportJsonResult, callback: (() => void)): void {
        var zip = new JSZip();

        zip.file(environment.export.filenames.contentTypes, data.contentTypes);
        zip.file(environment.export.filenames.contentItems, data.contentItems);
        zip.file(environment.export.filenames.taxonomies, data.taxonomies);

        const assetsFolder = zip.folder(environment.export.filenames.assetsFolder);

        for (const embeddedAsset of data.assets) {
            const assetItemSubfolder = assetsFolder.folder(embeddedAsset.contentItemCodename);
            const assetFieldSubfolder = assetItemSubfolder.folder(embeddedAsset.fieldCodename);
            assetFieldSubfolder.file(
                embeddedAsset.asset.name,
                this.urlToPromise(embeddedAsset.asset.url),
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
        return new Promise(function (resolve, reject) {
            JSZipUtils.getBinaryContent(url, function (err: any, data: any) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}