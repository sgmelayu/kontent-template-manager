import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExternalModule } from '../external';
import { MasterLayoutComponent } from './master-layout.component';

@NgModule({
  declarations: [
    MasterLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExternalModule
  ],
  providers: [
  ],
})
export class LayoutModule { }
