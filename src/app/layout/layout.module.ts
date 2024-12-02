import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypographyModule } from 'src/typography/typography.module';

import { ExternalModule } from '../external';
import { MasterLayoutComponent } from './master-layout.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    MasterLayoutComponent
  ],
  imports: [
    ExternalModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ExternalModule,
    TypographyModule,
    ComponentsModule
  ],
  providers: [
  ],
})
export class LayoutModule { }
