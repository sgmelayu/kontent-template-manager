import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { ComponentDependencies } from '../../di';
import { observableHelper } from '../../utilities';
import { versionInfo } from '../../version';

export abstract class BaseComponent implements OnDestroy {

    protected readonly ngUnsubscribe: Subject<void> = new Subject<void>();

    public get version(): string {
        return versionInfo.version;
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

    public isLoading: boolean = false;

    constructor(
        protected dependencies: ComponentDependencies,
        protected cdr: ChangeDetectorRef
    ) {
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    protected destroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    protected startLoading(): void {
        this.isLoading = true;
    }

    protected stopLoading(): void {
        this.isLoading = false;
    }

    protected detectChanges(): void {
        throw Error(`Change detection should not be used`);
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
                takeUntil(this.ngUnsubscribe),
                catchError(error => {
                    return throwError(error);
                })
            )
            .subscribe(() => {
                this.markForCheck();
            });
    }


}
