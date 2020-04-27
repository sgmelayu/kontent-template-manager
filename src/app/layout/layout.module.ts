import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypographyModule } from 'src/typography/typography.module';

import { ExternalModule } from '../external';
import { MasterLayoutComponent } from './master-layout.component';

@NgModule({
  declarations: [
    MasterLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExternalModule,
    TypographyModule
  ],
  providers: [
  ],
})
export class LayoutModule { }
