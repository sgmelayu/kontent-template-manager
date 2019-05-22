import { ChangeDetectorRef } from '@angular/core';

import { ComponentDependencies } from '../../di';
import { BaseComponent } from './base.component';
import { environment } from '../../environments/environment';

export abstract class BasePageComponent extends BaseComponent {

    constructor(
        protected dependencies: ComponentDependencies,
        protected cdr: ChangeDetectorRef,
    ) {
        super(dependencies, cdr);

        dependencies.googleAnalyticsService.trackPageview({
            pageTitle: `${environment.google.trackingPrefix}${dependencies.router.url}`,
            pagePath: dependencies.router.url,
        });
    }
}
