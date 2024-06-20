import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BasePageComponent } from '../../core/base-page.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html'
})
export class HomeComponent extends BasePageComponent implements OnInit {
    constructor(dependencies: ComponentDependencies, cdr: ChangeDetectorRef) {
        super(dependencies, cdr);
    }

    ngOnInit(): void {
        super.setConfig({
            title: 'Welcome',
            showDevMode: false
        });
    }
}
