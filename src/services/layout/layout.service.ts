import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    private readonly titleSource = new BehaviorSubject<string | undefined>(undefined);
    public readonly titleChanged$ = this.titleSource.asObservable();

    private readonly errorSource = new BehaviorSubject<string | undefined>(undefined);
    public readonly errorChanged$ = this.errorSource.asObservable();

    constructor(
    ) {
    }

    setTitle(title?: string): void {
        this.titleSource.next(title);
    }

    setError(error?: string): void {
        this.errorSource.next(error);
    }

}