import { ChangeDetectorRef } from '@angular/core';

import { ComponentDependencies } from '../../di';
import { BaseComponent } from './base.component';

export abstract class BasePageComponent extends BaseComponent {

    constructor(
        protected dependencies: ComponentDependencies,
        protected cdr: ChangeDetectorRef,
    ) {
        super(dependencies, cdr);

        dependencies.googleAnalyticsService.trackPageview({
            pageTitle: dependencies.router.url,
            pagePath: dependencies.router.url,
        });
    }
}
