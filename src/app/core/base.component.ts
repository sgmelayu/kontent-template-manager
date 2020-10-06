import { ChangeDetectorRef, OnDestroy, Directive } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { ComponentDependencies } from '../../di';
import { observableHelper } from '../../utilities';
import { versionInfo } from '../../version';
import { environment } from 'src/environments/environment';
import { NavigationExtras } from '@angular/router';
import { DateTimeFormat } from 'src/services';

@Directive()
export abstract class BaseComponent implements OnDestroy {
    protected readonly ngUnsubscribe: Subject<void> = new Subject<void>();

    public get backupManagerName(): string {
        return environment.backupManagerName;
    }

    public get backupManagerUrl(): string {
        return environment.backupManagerUrl;
    }

    public get version(): string {
        return versionInfo.version;
    }

    public get kbmVersion(): string {
        return versionInfo.kbmVersion;
    }

    public get isSmallScreen(): boolean {
        if (!this.dependencies) {
            return false;
        }

        return this.dependencies.media.isActive('lt-lg');
    }

    public get isLargeScreen(): boolean {
        return !this.isSmallScreen;
    }

    constructor(protected dependencies: ComponentDependencies, protected cdr: ChangeDetectorRef) {}

    ngOnDestroy(): void {
        this.destroy();
    }

    protected destroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    protected detectChanges(): void {
        this.cdr.detectChanges();
    }

    protected markForCheck(): void {
        this.cdr.markForCheck();
    }

    protected subscribeToObservables(observables: Observable<any>[]): void {
        this.subscribeToObservable(observableHelper.zipObservables(observables));
    }

    protected subscribeToObservable(observable: Observable<any>): void {
        observable
            .pipe(
                catchError((error) => {
                    return throwError(error);
                }),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(() => {
                this.markForCheck();
            });
    }

    protected navigateToAction(action: string, extras?: NavigationExtras): void {
        this.dependencies.router.navigate([action], extras);
    }

    protected formatDateVerbose(date: DateTimeFormat): string {
        return this.dependencies.timeService.formatDateVerbose(date);
    }
}
