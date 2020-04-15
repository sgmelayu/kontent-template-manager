import { ChangeDetectorRef } from '@angular/core';

import { ComponentDependencies } from '../../di';
import { environment } from '../../environments/environment';
import { BaseComponent } from './base.component';

type eventCategory = 'button';
type eventAction = 'download-template' | 'export' | 'prepare-import-from-project' | 'prepare-import-from-file' | 'import-from-file' | 'import-from-project' | 'prepare-cleanup' | 'cleanup' | 'prepare-migrate-from-project' | 'migrate-from-project'

export abstract class BasePageComponent extends BaseComponent {

    constructor(
        protected dependencies: ComponentDependencies,
        protected cdr: ChangeDetectorRef,
    ) {
        super(dependencies, cdr);

        dependencies.googleAnalyticsService.trackPageview({
            pageTitle: `${environment.google.trackingPrefix}${dependencies.router.url}`,
            pagePath: `${environment.google.trackingPrefix}${dependencies.router.url}`,
        });
    }

    protected trackEvent(data: {
        eventCategory: eventCategory,
        eventAction: eventAction,
        eventLabel?: string,
        eventValue?: number
    }): void {
        this.dependencies.googleAnalyticsService.logEvent(data);
    }

    protected setTitle(title: string): void {
        this.dependencies.layoutService.setTitle(title);
    }
}
