import { ChangeDetectorRef, OnDestroy, Directive } from '@angular/core';
import { SharedModels } from '@kentico/kontent-management';

import { ComponentDependencies } from '../../di';
import { environment } from '../../environments/environment';
import { BaseComponent } from './base.component';
import { ILayoutConfig } from 'src/services';

type eventCategory = 'button';
type eventAction =
    | 'download-template'
    | 'export'
    | 'prepare-import-from-project'
    | 'prepare-import-from-file'
    | 'import-from-file'
    | 'import-from-project'
    | 'prepare-cleanup'
    | 'cleanup'
    | 'prepare-migrate-from-project'
    | 'migrate-from-project';

@Directive()
export abstract class BasePageComponent extends BaseComponent implements OnDestroy {
    public processsing: boolean = false;

    constructor(protected dependencies: ComponentDependencies, protected cdr: ChangeDetectorRef) {
        super(dependencies, cdr);

        dependencies.googleAnalyticsService.trackPageview({
            pageTitle: `${environment.google.trackingPrefix}${dependencies.router.url}`,
            pagePath: `${environment.google.trackingPrefix}${dependencies.router.url}`
        });
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.resetErrors();
    }

    protected async runWithErrorHandlerAsync(func: () => Promise<void>): Promise<void> {
        try {
            await func();
        } catch (error) {
            console.error(error);
            this.processsing = false;
            if (error instanceof SharedModels.ContentManagementBaseKontentError) {
                this.setError(`${error.message} ${error.validationErrors.map(m => m.message).join(', ')}`);
            } else {
                this.setError(`Unhandled error. ${error}`);
            }
            super.markForCheck();
        }
    }

    protected trackEvent(data: {
        eventCategory: eventCategory;
        eventAction: eventAction;
        eventLabel?: string;
        eventValue?: number;
    }): void {
        this.dependencies.googleAnalyticsService.logEvent(data);
    }

    protected setConfig(config: ILayoutConfig): void {
        this.dependencies.layoutService.setLayoutConfig(config);
    }

    protected setIsDevMode(show: boolean): void {
        this.dependencies.layoutService.setIsDevMode(show);
    }

    protected setError(error: string): void {
        this.dependencies.layoutService.setError(error);
    }

    protected resetErrors(): void {
        this.dependencies.layoutService.setError(undefined);
    }

    protected isDevMode(): boolean {
        return this.dependencies.layoutService.isDevModeSource.getValue();
    }
}
