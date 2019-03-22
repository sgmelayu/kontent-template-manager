import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { BaseService } from '../base-service';
import { IImportItem } from './processing-models';

@Injectable()
export class ProcessingService extends BaseService {

    private readonly processedItemsSource = new Subject<IImportItem>();
    private readonly clearProcessedItemsSource = new Subject<void>();

    public readonly processedItemsChanged$ = this.processedItemsSource.asObservable();
    public readonly clearProcessedItemsChanged$ = this.clearProcessedItemsSource.asObservable();

    addProcessedItem(item: IImportItem): void {
        this.processedItemsSource.next(item);
    }

    clearProcessedItems(): void {
        this.clearProcessedItemsSource.next();
    }
}