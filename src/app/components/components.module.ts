import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../core/core.module';
import { MessageComponent } from './messages/message.component';
import { ImportDataPreview } from './preview/import-data-preview.component';
import { ProcessedItemsComponent } from './processed-items/processed-items.component';

@NgModule({
  declarations: [
    MessageComponent,
    ProcessedItemsComponent,
    ImportDataPreview
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  exports: [
    MessageComponent,
    ProcessedItemsComponent,
    ImportDataPreview
  ]
})
export class ComponentsModule { }
