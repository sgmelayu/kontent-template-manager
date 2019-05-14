import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExternalModule } from '../app/external';
import { ServicesModule } from '../services';

@NgModule({
    imports: [
        RouterModule,
        ServicesModule,
        ExternalModule
    ],
    providers: [

    ],
})
export class DependenciesModule { }
