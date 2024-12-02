import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ILayoutConfig {
    title: string;
    showDevMode: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {

    public readonly isDevModeSource = new BehaviorSubject<boolean>(false);
    public readonly isDevModeChanged$ = this.isDevModeSource.asObservable();

    public readonly layoutConfigSource = new BehaviorSubject<ILayoutConfig | undefined>(undefined);
    public readonly layoutConfigChanged = this.layoutConfigSource.asObservable();

    public readonly errorSource = new BehaviorSubject<string | undefined>(undefined);
    public readonly errorChanged$ = this.errorSource.asObservable();

    constructor(
    ) {
    }

    setLayoutConfig(config?: ILayoutConfig): void {
        this.layoutConfigSource.next(config);
    }

    setError(error?: string): void {
        this.errorSource.next(error);
    }

    setIsDevMode(show: boolean): void {
        this.isDevModeSource.next(show);
    }
}
