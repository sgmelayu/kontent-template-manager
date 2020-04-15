import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    private readonly componentConfigSource = new BehaviorSubject<string | undefined>(undefined);
    public readonly componentConfigChanged$ = this.componentConfigSource.asObservable();

    constructor(
    ) {
    }

    setTitle(title?: string): void {
        this.componentConfigSource.next(title);
    }

}