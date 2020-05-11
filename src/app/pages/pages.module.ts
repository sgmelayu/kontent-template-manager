import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileDropModule } from 'ngx-file-drop';

import { ComponentsModule } from '../components/components.module';
import { CoreModule } from '../core/core.module';
import { CleanupComponent } from './cleanup/cleanup.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog.component';
import { ExportComponent } from './export/export.component';
import { LimitationsComponent } from './faq/limitations.component';
import { HomeComponent } from './home/home.component';
import { ImportFromFileComponent } from './import/import-from-file.component';
import { TemplateListComponent } from './templates/template-list.component';

@NgModule({
    declarations: [
        ExportComponent,
        ImportFromFileComponent,
        ExportComponent,
        CleanupComponent,
        ConfirmationDialogComponent,
        TemplateListComponent,
        LimitationsComponent,
        HomeComponent
    ],
    imports: [BrowserModule, BrowserAnimationsModule, CoreModule, ComponentsModule, NgxFileDropModule]
})
export class PagesModule {}
