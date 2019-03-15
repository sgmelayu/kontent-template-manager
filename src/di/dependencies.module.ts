import { NgModule } from '@angular/core';
import { ExternalModule } from 'src/app/external';
import { ServicesModule } from 'src/services';

import { ComponentDependencies } from './component-dependencies';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        ServicesModule,
        ExternalModule
    ],
    providers: [
        ComponentDependencies
    ],
})
export class DependenciesModule { }
