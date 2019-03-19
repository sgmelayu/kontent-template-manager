import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CleanupConfirmComponent } from './cleanup/cleanup-confirm.component';
import { CleanupComponent } from './cleanup/cleanup.component';
import { CoreModule } from './core/core.module';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
    ExportComponent,
    CleanupComponent,
    CleanupConfirmComponent
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
