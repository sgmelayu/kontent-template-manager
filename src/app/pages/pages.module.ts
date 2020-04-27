import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from '../components/components.module';
import { CoreModule } from '../core/core.module';
import { ExportComponent } from './export/export.component';
import { LimitationsComponent } from './faq/limitations.component';
import { ImportFromFileComponent } from './import/import-from-file.component';
import { CleanupComponent } from './shared/cleanup/cleanup.component';
import { TemplateListComponent } from './templates/template-list.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog.component';

@NgModule({
  declarations: [
    ExportComponent,
    ImportFromFileComponent,
    ExportComponent,
    CleanupComponent,
    ConfirmationDialogComponent,
    TemplateListComponent,
    LimitationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ComponentsModule,
    NgxFileDropModule
  ],
})
export class PagesModule { }
