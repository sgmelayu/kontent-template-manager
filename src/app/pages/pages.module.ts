import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from '../components/components.module';
import { CoreModule } from '../core/core.module';
import { ExportComponent } from './cm/export/export.component';
import { ImportFromFileComponent } from './cm/import/import-from-file.component';
import { ImportFromProjectComponent } from './cm/import/import-from-project.component';
import { MigrateContentItemsComponent } from './cm/import/migrate-content-items.component';
import { CleanupConfirmComponent } from './shared/cleanup/cleanup-confirm.component';
import { CleanupComponent } from './shared/cleanup/cleanup.component';

@NgModule({
  declarations: [
    ImportFromProjectComponent,
    ExportComponent,
    ImportFromFileComponent,
    MigrateContentItemsComponent,
    ExportComponent,
    CleanupComponent,
    CleanupConfirmComponent,
    MigrateContentItemsComponent
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
