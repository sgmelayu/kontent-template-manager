import { IBinaryFile, IExportAllResult, IImportSource, IZipServiceConfig } from '@kentico/kontent-backup-manager';
import { AssetContracts } from '@kentico/kontent-management';
import * as fs from 'fs';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TemplateManagerZipService {
    private readonly zipExtension: string = '.zip';

    private readonly contentTypesName: string = 'contentTypes.json';
    private readonly contentItemsName: string = 'contentItems.json';
    private readonly taxonomiesName: string = 'taxonomies.json';
    private readonly assetsName: string = 'assets.json';
    private readonly languageVariantsName: string = 'languageVariants.json';
    private readonly contentTypeSnippetsName: string = 'contentTypesSnippets.json';
    private readonly metadataName: string = 'metadata.json';
    private readonly languages: string = 'languages.json';
    private readonly filesName: string = 'files';
    private readonly assetFoldersName: string = 'assetFolders.json';
    private readonly validationName: string = 'validation.json';

    constructor() {
    }

     getDefaultBackupFilename(): string {
        const date = new Date();
        return `kontent-backup-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
     }

    async extractZipAsync(zipFile: any, enableLog: boolean): Promise<IImportSource> {
        if (enableLog) {
            console.log(`Unzipping file`);
        }
        const unzippedFile = await JSZip.loadAsync(zipFile);

        if (enableLog) {
            console.log(`Parsing zip contents`);
        }
        const assets = await this.readAndParseJsonFile(unzippedFile, this.assetsName);

        const result = {
            importData: {
                assets,
                contentTypes: await this.readAndParseJsonFile(unzippedFile, this.contentTypesName),
                languageVariants: await this.readAndParseJsonFile(unzippedFile, this.languageVariantsName),
                languages: await this.readAndParseJsonFile(unzippedFile, this.languages),
                contentItems: await this.readAndParseJsonFile(unzippedFile, this.contentItemsName),
                contentTypeSnippets: await this.readAndParseJsonFile(unzippedFile, this.contentTypeSnippetsName),
                taxonomies: await this.readAndParseJsonFile(unzippedFile, this.taxonomiesName),
            },
            assetFolders: await this.readAndParseJsonFile(unzippedFile, this.assetFoldersName),
            binaryFiles: await this.extractBinaryFilesAsync(unzippedFile, assets),
            validation: await this.readAndParseJsonFile(unzippedFile, this.validationName),
            metadata: await this.readAndParseJsonFile(unzippedFile, this.metadataName),
        };

        if (enableLog) {
            console.log(`Pasing zip completed`);
        }

        return result;
    }

    async createZipAsync(exportData: IExportAllResult, filenameWithExtension: string, config: IZipServiceConfig): Promise<any> {
        const zip = new JSZip();

        if (config.enableLog) {
            console.log(`Parsing json`);
        }

        zip.file(this.contentTypesName, JSON.stringify(exportData.data.contentTypes));
        zip.file(this.validationName, JSON.stringify(exportData.validation));
        zip.file(this.contentItemsName, JSON.stringify(exportData.data.contentItems));
        zip.file(this.taxonomiesName, JSON.stringify(exportData.data.taxonomies));
        zip.file(this.assetsName, JSON.stringify(exportData.data.assets));
        zip.file(this.languageVariantsName, JSON.stringify(exportData.data.languageVariants));
        zip.file(this.metadataName, JSON.stringify(exportData.metadata));
        zip.file(this.languages, JSON.stringify(exportData.data.languages));
        zip.file(this.contentTypeSnippetsName, JSON.stringify(exportData.data.contentTypeSnippets));
        zip.file(this.assetFoldersName, JSON.stringify(exportData.data.assetFolders));

        const assetsFolder = zip.folder(this.filesName);

        if (config.enableLog) {
            console.log(`Adding assets to zip`);
        }

        for (const asset of exportData.data.assets) {
            const assetIdShortFolder = assetsFolder.folder(asset.id.substr(0, 3));
            const assetIdFolder = assetIdShortFolder.folder(asset.id);
            const assetFilename = asset.file_name;
            assetIdFolder.file(
                assetFilename,
                this.urlToPromise(asset.url),
                {
                    binary: true
                }
            );
        }

        const filePath = './' + filenameWithExtension;

        if (config.enableLog) {
            console.log(`Generating zip file '${filePath}'`);
        }
        const content = await zip.generateAsync({ type: 'blob' });

        if (config.enableLog) {
            console.log(`Blob created`, content);
        }
        return content;
    }

    private async extractBinaryFilesAsync(
        zip: any,
        assets: AssetContracts.IAssetModelContract[]
    ): Promise<IBinaryFile[]> {
        const binaryFiles: IBinaryFile[] = [];

        const files = zip.files;

        for (const asset of assets) {
            const assetFile = files[this.getFullAssetPath(asset.id, asset.file_name)];

            const binaryData = await assetFile.async('blob');
            binaryFiles.push({
                asset,
                binaryData
            });
        }

        return binaryFiles;
    }

    /**
     * Gets path to asset within zip folder. Uses tree format using asset ids such as:
     * "files/3b4/3b42f36c-2e67-4605-a8d3-fee2498e5224/image.jpg"
     */
    private getFullAssetPath(assetId: string, filename: string): string {
        return `${this.filesName}/${assetId.substr(0, 3)}/${assetId}/${filename}`;
    }

    private async readAndParseJsonFile(fileContents: any, filename: string): Promise<any> {
        const files = fileContents.files;
        const file = files[filename];

        if (!file) {
            throw Error(`Invalid file '${filename}'`);
        }

        const text = await file.async('text');

        return JSON.parse(text);
    }

    private urlToPromise(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            JSZipUtils.getBinaryContent(url, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
