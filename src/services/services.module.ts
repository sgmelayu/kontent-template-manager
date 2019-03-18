import { NgModule } from '@angular/core';

import { FetchService } from './fetch/fetch.service';
import { ImportService } from './import/import.service';
import { ContentTypesImportService } from './import/types/content-types-import.service';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        FetchService,
        ImportService,
        ContentTypesImportService
    ],
})
export class ServicesModule { }
