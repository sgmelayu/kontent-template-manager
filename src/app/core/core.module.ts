import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DependenciesModule } from 'src/di';
import { ServicesModule } from 'src/services';
import { TypographyModule } from 'src/typography';

import { ExternalModule } from '../external';
import { LayoutModule } from '../layout';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        ServicesModule,
        DependenciesModule,
        LayoutModule,
        ExternalModule,
        TypographyModule
    ],
})
export class CoreModule { }
