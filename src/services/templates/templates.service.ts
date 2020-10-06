import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BaseService } from '../base-service';
import { ITemplate } from './template.models';

@Injectable({
    providedIn: 'root'
})
export class TemplatesService extends BaseService {

    constructor(
        private httpClient: HttpClient
    ) {
        super();
    }

    getTemplates(): Observable<ITemplate[]> {
        return this.httpClient.get(environment.templatesSourceUrl + '?t=' + new Date().valueOf()).pipe(
            map((response) => {
                return response as ITemplate[];
            })
        );
    }

    getTemplateFile(exportPackageUrl: string): Observable<File> {
        return this.httpClient.get(exportPackageUrl, {
            responseType: 'blob'
        }).pipe(
            map((response) => {
                return this.blobToFile(response, 'import.zip');
            })
        );
    }

    private blobToFile(theBlob: Blob, fileName: string): File {
        const b: any = theBlob;
        b.lastModifiedDate = new Date();
        b.name = fileName;
        return <File>theBlob;
    }
}
