import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    private readonly componentConfigSource = new Subject<string | undefined>();
    public readonly componentConfigChanged$ = this.componentConfigSource.asObservable();

    constructor(
    ) {
    }

    setTitle(title?: string): void {
        this.componentConfigSource.next(title);
    }

}