import { NgModule } from '@angular/core';

import { CleanupService } from './cleanup/cleanup.service';
import { ExportService } from './export/export.service';
import { CmFetchService } from './fetch/cm-fetch.service';
import { DeliveryFetchService } from './fetch/delivery-fetch.service';
import { ImportService } from './import/import.service';
import { ContentItemsImportService } from './import/types/content-items-import.service';
import { ContentTypesImportService } from './import/types/content-types-import.service';
import { TaxonomiesImportService } from './import/types/taxonomies-import.service';
import { WorkflowService } from './workflow/workflow.service';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        DeliveryFetchService,
        CmFetchService,
        ImportService,
        ContentTypesImportService,
        ContentItemsImportService,
        TaxonomiesImportService,
        WorkflowService,
        CleanupService,
        ExportService
    ],
})
export class ServicesModule { }
