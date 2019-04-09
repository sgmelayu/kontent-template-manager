import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseService } from '../base-service';
import { IProcessingItem } from './processing-models';

@Injectable()
export class ProcessingService extends BaseService {

    private readonly processedItemsSource = new Subject<IProcessingItem[]>();
    private readonly clearProcessedItemsSource = new Subject<void>();

    public readonly processedItemsChanged$ = this.processedItemsSource.asObservable();
    public readonly clearProcessedItemsChanged$ = this.clearProcessedItemsSource.asObservable();

    addProcessedItem(item: IProcessingItem): void {
        this.processedItemsSource.next([item]);
    }

    addProcessedItems(items: IProcessingItem[]): void {
        this.processedItemsSource.next(items);
    }


    clearProcessedItems(): void {
        this.clearProcessedItemsSource.next();
    }
}