import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleanupConfirmComponent } from './cleanup/cleanup-confirm.component';
import { CleanupComponent } from './cleanup/cleanup.component';
import { CoreModule } from './core/core.module';
import { ExportComponent } from './export/export.component';
import { ImportFromFileComponent } from './import/import-from-file.component';
import { ImportFromProjectComponent } from './import/import-from-project.component';
import { MessageComponent } from './messages/message.component';
import { ProcessedItemsComponents } from './processed-items/processed-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportFromProjectComponent,
    ExportComponent,
    CleanupComponent,
    CleanupConfirmComponent,
    MessageComponent,
    ImportFromFileComponent,
    ProcessedItemsComponents
  ],
  entryComponents: [
    CleanupConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
