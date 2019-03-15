import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DependenciesModule } from 'src/di';

import { ExternalModule } from '../external';
import { MasterLayoutComponent } from './master-layout.component';

@NgModule({
  declarations: [
    MasterLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DependenciesModule,
    ExternalModule
  ],
  providers: [

  ],
})
export class LayoutModule { }
