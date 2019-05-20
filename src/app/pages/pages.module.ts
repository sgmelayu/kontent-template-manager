import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from '../components/components.module';
import { CoreModule } from '../core/core.module';
import { ExportComponent } from './export/export.component';
import { LimitationsComponent } from './faq/limitations.component';
import { ImportFromFileComponent } from './import/import-from-file.component';
import { ImportFromProjectComponent } from './import/import-from-project.component';
import { MigrateContentItemsComponent } from './import/migrate-content-items.component';
import { CleanupConfirmComponent } from './shared/cleanup/cleanup-confirm.component';
import { CleanupComponent } from './shared/cleanup/cleanup.component';
import { TemplateListComponent } from './templates/template-list.component';

@NgModule({
  declarations: [
    ImportFromProjectComponent,
    ExportComponent,
    ImportFromFileComponent,
    MigrateContentItemsComponent,
    ExportComponent,
    CleanupComponent,
    CleanupConfirmComponent,
    MigrateContentItemsComponent,
    TemplateListComponent,
    LimitationsComponent
  ],
  entryComponents: [
    CleanupConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ComponentsModule
  ],
})
export class PagesModule { }
