import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExternalModule } from '../app/external';
import { ServicesModule } from '../services';
import { ComponentDependencies } from './component-dependencies';

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
