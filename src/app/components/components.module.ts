import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '../core/core.module';
import { MessageComponent } from './messages/message.component';
import { ProcessedItemsComponents } from './processed-items/processed-items.component';


@NgModule({
  declarations: [
    MessageComponent,
    ProcessedItemsComponents
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  exports: [
    MessageComponent,
    ProcessedItemsComponents
  ]
})
export class ComponentsModule { }
