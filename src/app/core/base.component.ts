import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, of, Subject, zip } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ComponentDependencies } from 'src/di';

export abstract class BaseComponent implements OnDestroy {

    protected readonly ngUnsubscribe: Subject<void> = new Subject<void>();

    public get isSmallScreen(): boolean {
        if (!this.dependencies) {
            return false;
        }

        return this.dependencies.media.isActive('lt-lg');
    }

    public get isLargeScreen(): boolean {
        return !this.isSmallScreen;
    }

    constructor(
        protected dependencies: ComponentDependencies,
        protected cdr: ChangeDetectorRef
    ) {
    }

    protected destroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    protected detectChanges(): void {
        this.cdr.detectChanges();
    }

    protected markForCheck(): void {
        this.cdr.markForCheck();
    }

    protected subscribeToObservables(observables: Observable<any>[]): void {
        this.subscribeToObservable(this.zipObservables(observables));
    }

    protected subscribeToObservable(observable: Observable<any>): void {
        observable
            .pipe(
                takeUntil(this.ngUnsubscribe),
            )
            .subscribe(() => {
                this.markForCheck();
            },
                error => {
                    this.markForCheck();
                    throw error;
                }
            );
    }

    private zipObservables(observables: Observable<any>[]): Observable<any> {
        if (!observables) {
            throw Error(`Given observables are not valid`);
        }

        if (!Array.isArray(observables)) {
            throw Error(`Given observables are not in array`);
        }

        if (observables.length === 0) {
            // return empty/fake observable if there are none observables
            return of(undefined);
        }

        if (observables.length === 1) {
            return observables[0];
        }

        let zippedObservable: Observable<any> = observables[0];

        for (let i = 1; i < observables.length; i++) {
            const currentObservable = observables[i];
            zippedObservable = zip(zippedObservable, currentObservable);
        }

        return zippedObservable;
    }
}
