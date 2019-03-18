import { NgModule } from '@angular/core';

import { FetchService } from './fetch/fetch.service';
import { ImportService } from './import/import.service';
import { ContentItemsImportService } from './import/types/content-items-import.service';
import { ContentTypesImportService } from './import/types/content-types-import.service';
import { TaxonomiesImportService } from './import/types/taxonomies-import.service';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        FetchService,
        ImportService,
        ContentTypesImportService,
        ContentItemsImportService,
        TaxonomiesImportService
    ],
})
export class ServicesModule { }
