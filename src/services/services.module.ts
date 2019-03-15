import { NgModule } from '@angular/core';

import { ImportService } from './import/import.service';
import { ContentTypesImportService } from './import/types/content-types-import.service';

@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [
        ImportService,
        ContentTypesImportService
    ],
})
export class ServicesModule { }
