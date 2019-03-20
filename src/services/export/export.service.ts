import { Injectable } from '@angular/core';
import { saveAs } from 'filesaver.js';
import * as JSZip from 'jszip';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { DeliveryFetchService } from '../fetch/delivery-fetch.service';
import { IExportJsonResult } from './export.models';
import { environment } from 'src/environments/environment';

@Injectable()
export class ExportService extends BaseService {

    constructor(
        private deliveryFetchService: DeliveryFetchService
    ) {
        super();
    }

    prepareAndDownloadPackage(projectId: string): Observable<void> {
        const result: IExportJsonResult = {
            contentItems: '',
            contentTypes: '',
            taxonomies: ''
        };

        return this.deliveryFetchService.getAllTypes(projectId, []).pipe(
            flatMap(types => {
                result.contentTypes = JSON.stringify(types);

                return this.deliveryFetchService.getAllContentItems(projectId, []);
            }),
            flatMap(contentItems => {
                result.contentItems = JSON.stringify(contentItems);
                return this.deliveryFetchService.getAllTaxonomies(projectId, []);
            }),
            map(taxonomies => {
                result.taxonomies = JSON.stringify(taxonomies);

                this.createAndDownloadZipFile(projectId, result);
            })
        )
    }

    private createAndDownloadZipFile(projectId: string, data: IExportJsonResult): void {
        var zip = new JSZip();

        zip.file(environment.export.filenames.contentTypes, data.contentTypes);
        zip.file(environment.export.filenames.contentItems, data.contentItems);
        zip.file(environment.export.filenames.taxonomies, data.taxonomies);

        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, `${environment.export.filenames.packagePrefix}${projectId}.zip`);
        });
    }

}