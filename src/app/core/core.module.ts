import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DependenciesModule } from '../../di';
import { ServicesModule } from '../../services';
import { TypographyModule } from '../../typography';
import { CardModule } from '../directives/directives.module';
import { ExternalModule } from '../external';
import { LayoutModule } from '../layout';

@NgModule({
    exports: [
        CommonModule,
        BrowserAnimationsModule,
        ServicesModule,
        DependenciesModule,
        LayoutModule,
        ExternalModule,
        TypographyModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule
    ],
})
export class CoreModule { }
