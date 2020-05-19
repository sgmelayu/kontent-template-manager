import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TypographyModule } from '../../typography';
import { CardModule } from '../directives/directives.module';
import { ExternalModule } from '../external';
import { RouterModule } from '@angular/router';

@NgModule({
    exports: [
        RouterModule,
        CommonModule,
        BrowserAnimationsModule,
        ExternalModule,
        TypographyModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule
    ],
})
export class CoreModule { }
