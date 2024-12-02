import { Injectable } from '@angular/core';
import storage from 'local-storage-fallback';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    private storageObj: any;
    private readonly storageName = environment.storage.storageName;

    constructor(
    ) {
        const storageObj = storage.getItem(this.storageName);
        if (!storageObj) {
            // init storage object
            storage.setItem(this.storageName, JSON.stringify({}));
        }

        const storageVal = storage.getItem(this.storageName);

        if (!storageVal) {
            throw Error(`Invalid storage value`);
        }

        this.storageObj = JSON.parse(storageVal);
    }

    set<T>(source: string, name: string, value: T): void {
        const existingObj = this.storageObj[source];
        let storeObj: any;

        if (!existingObj) {
            // create new obj
            storeObj = {};
            this.storageObj[source] = storeObj;
        } else {
            storeObj = existingObj;
        }

        // store property value
        storeObj[name] = value;
        this.saveCurrentObj();
    }

    get<T>(source: string, name: string): T | undefined {
        const sourceObj = this.storageObj[source];

        if (!sourceObj) {
            return undefined;
        }

        return sourceObj[name];
    }

    removeSource(source: string): void {
        delete this.storageObj[source];
    }

    remove(source: string, name: string): void {
        const sourceObj = this.storageObj[source];

        if (!sourceObj) {
            return undefined;
        }

        delete this.storageObj[source][name];
        this.saveCurrentObj();
    }

    private saveCurrentObj(): void {
        storage.setItem(this.storageName, JSON.stringify(this.storageObj));
    }
}
