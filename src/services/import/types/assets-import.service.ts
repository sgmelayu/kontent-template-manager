import { Injectable } from '@angular/core';
import { IContentManagementClient } from 'kentico-cloud-content-management';
import { from, Observable } from 'rxjs';
import { delay, flatMap, map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ProcessingService } from '../../processing/processing.service';
import { IAssetModel } from '../../shared/shared.models';
import { IAssetFromFile, IGetAssetData, IImportAssetResult, IImportConfig } from '../import.models';

@Injectable({
    providedIn: 'root'
})
export class AssetsImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    importAssetsByUrl(targetClient: IContentManagementClient, assets: IAssetModel[], assetsFromFile: IAssetFromFile[], config: IImportConfig): Observable<IImportAssetResult[]> {
        const importedAssets: IImportAssetResult[] = [];

        return observableHelper.flatMapObservables([
            this.importAssetsByUrlInternal(targetClient, assets).pipe(
                map((createdAssets) => {
                    importedAssets.push(...createdAssets);
                })
            ),
            this.importAssetsFromFileInternal(targetClient, assetsFromFile).pipe(
                map((createdAssets) => {
                    importedAssets.push(...createdAssets);
                })
            ),
        ], this.cmRequestDelay).pipe(
            map(() => {
                return importedAssets;
            })
        )
    }

    private importAssetsByUrlInternal(targetClient: IContentManagementClient, assets: IAssetModel[]): Observable<IImportAssetResult[]> {
        const createdAssets: IImportAssetResult[] = [];
        const assetsToCreateObs: Observable<IGetAssetData>[] = [];
        const obs: Observable<void>[] = [];

        for (const asset of assets) {
            assetsToCreateObs.push(this.getAssetBlobFromUrl(asset.deliveryUrl).pipe(
                map(response => {
                    return <IGetAssetData>{
                        blob: response.blob,
                        asset: asset
                    };
                })
            ));
        }

        for (const assetObs of assetsToCreateObs) {
            obs.push(
                assetObs.pipe(
                    delay(this.cmRequestDelay),
                    flatMap(data => {
                        const asset = data.asset;
                        const contentLength = data.blob.size;
                        const contentType = asset.type;
                        const fileBinary = data.blob;

                        return targetClient.uploadBinaryFile()
                            .withData({
                                binaryData: fileBinary,
                                contentType,
                                contentLength,
                                filename: asset.fileName
                            }).toObservable().pipe(
                                delay(this.cmRequestDelay),
                                flatMap(response => {
                                    this.processingService.addProcessedItem({
                                        data: response.data.id,
                                        type: 'binary file',
                                        action: 'upload',
                                        name: `[${response.data.type}] - ${asset.fileName}`
                                    });

                                    return targetClient.addAsset().withData({
                                        title: asset.title,
                                        descriptions: [],
                                        fileReference: {
                                            id: response.data.id,
                                            type: response.data.type
                                        },
                                        // externalId: asset.url,
                                    }).toObservable();
                                }),
                                map((response) => {
                                    this.processingService.addProcessedItem({
                                        data: response.data.fileName,
                                        type: 'asset',
                                        action: 'add',
                                        name: `[${response.data.type}] - ${response.data.fileName}`
                                    });

                                    createdAssets.push(
                                        <IImportAssetResult>{
                                            importedItem: response.data,
                                            originalItem: data.asset
                                        }
                                    );
                                })
                            );
                    }
                    )
                ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return createdAssets;
            })
        );
    }

    private getAssetBlobFromUrl(url: string): Observable<IGetAssetData> {
        return from(new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.onload = () => {
                resolve({
                    blob: xhr.response,
                });
            };
            xhr.send();
        })) as Observable<IGetAssetData>;
    }

    private importAssetsFromFileInternal(targetClient: IContentManagementClient, assets: IAssetFromFile[]): Observable<IImportAssetResult[]> {
        const createdAssets: IImportAssetResult[] = [];
        const obs: Observable<void>[] = [];

        for (const assetFromFile of assets) {
            const contentLength = assetFromFile.asset.size;
            const contentType = assetFromFile.asset.type;
            const fileBinary = assetFromFile.data;

            obs.push(targetClient.uploadBinaryFile()
                .withData({
                    binaryData: fileBinary,
                    contentType: contentType,
                    contentLength: contentLength,
                    filename: assetFromFile.asset.fileName
                }).toObservable().pipe(
                    delay(this.cmRequestDelay),
                    flatMap(response => {
                        this.processingService.addProcessedItem({
                            data: response.data.id,
                            type: 'binary file',
                            action: 'upload',
                            name: `${assetFromFile.asset.fileName} [${assetFromFile.asset.size}B]`
                        });

                        return targetClient.addAsset().withData({
                            title: assetFromFile.asset.fileName,
                            descriptions: [],
                            fileReference: {
                                id: response.data.id,
                                type: response.data.type
                            },
                        }).toObservable();
                    }),
                    map((response) => {
                        this.processingService.addProcessedItem({
                            data: response.data.fileName,
                            type: 'asset',
                            action: 'add',
                            name: `[${response.data.type}] - ${response.data.fileName}`
                        });

                        createdAssets.push(
                            <IImportAssetResult>{
                                importedItem: response.data,
                                originalItem: assetFromFile.asset
                            }
                        );
                    })
                ));
        }

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => createdAssets)
        );
    }

}
