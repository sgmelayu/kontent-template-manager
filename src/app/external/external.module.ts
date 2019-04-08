import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { FileDropModule } from 'ngx-file-drop';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  imports: [
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    ScrollDispatchModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    FileDropModule,
    MatCheckboxModule,
    NgxJsonViewerModule
  ],
})
export class ExternalModule { }
