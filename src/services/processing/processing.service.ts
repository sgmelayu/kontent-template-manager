import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseService } from '../base-service';
import { IProcessedItem } from '@kentico/kontent-backup-manager';

@Injectable({
    providedIn: 'root'
})
export class ProcessingService extends BaseService {

    private readonly processedItemsSource = new Subject<IProcessedItem[]>();
    private readonly clearProcessedItemsSource = new Subject<void>();

    public readonly processedItemsChanged$ = this.processedItemsSource.asObservable();
    public readonly clearProcessedItemsChanged$ = this.clearProcessedItemsSource.asObservable();

    addProcessedItem(item: IProcessedItem): void {
        this.processedItemsSource.next([item]);
    }

    addProcessedItems(items: IProcessedItem[]): void {
        this.processedItemsSource.next(items);
    }

    clearProcessedItems(): void {
        this.clearProcessedItemsSource.next();
    }
}
