import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseService } from '../base-service';

export interface IProcessedItemTransformed {
    title: string;
    type: string;
  }

@Injectable({
    providedIn: 'root'
})
export class ProcessingService extends BaseService {

    private readonly processedItemsSource = new Subject<IProcessedItemTransformed[]>();
    private readonly clearProcessedItemsSource = new Subject<void>();

    public readonly processedItemsChanged$ = this.processedItemsSource.asObservable();
    public readonly clearProcessedItemsChanged$ = this.clearProcessedItemsSource.asObservable();

    addProcessedItem(item: IProcessedItemTransformed): void {
        this.processedItemsSource.next([item]);
    }

    addProcessedItems(items: IProcessedItemTransformed[]): void {
        this.processedItemsSource.next(items);
    }

    clearProcessedItems(): void {
        this.clearProcessedItemsSource.next();
    }
}
