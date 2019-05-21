import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

export interface IImporDataStorage {
    sourceProjectId?: string;
    sourceProjectLanguages?: string[];
    targetProjectId?: string;
    targetProjectApiKey?: string;
    publishContentItems?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ImportDataStorageService {

    private readonly storageSource: string = 'importDataStorageService';
    private readonly dataName: string = 'data';

    constructor(
        private storageService: StorageService
    ) {
    }

    updateImportData(data: IImporDataStorage): void {
        this.storageService.set<IImporDataStorage>(this.storageSource, this.dataName, data);
    }

    getImportData(): IImporDataStorage | undefined {
        return this.storageService.get<IImporDataStorage>(this.storageSource, this.dataName);
    }
}