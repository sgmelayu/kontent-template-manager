import { IImportData, IImportResult } from '../../../services';
import { IDataPreviewWrapper, IItemPreview } from './preview-models';

export class PreviewHelper {

    convertFromImportData(importData: IImportData): IDataPreviewWrapper {
        const files: IItemPreview[] = [];
        files.push(...importData.assets.map(m => <IItemPreview>{
            title: m.fileName,
            data: m
        }));
        files.push(...importData.assetsFromFile.map(m => <IItemPreview>{
            title: m.embeddedAsset.fileName,
            data: m
        }));

        return {
            assets: files,
            taxonomies: importData.taxonomies.map(m => <IItemPreview>{
                title: m.system.name,
                data: m
            }),
            contentItems: importData.contentItems.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
            contentTypes: importData.contentTypes.map(m => <IItemPreview>{
                title: m.system.name,
                data: m
            }),
            languageVariants: importData.languageVariants.map(m => <IItemPreview>{
                title: `${m.itemCodename} [${m.languageCodename}]`,
                data: m
            })
        };
    }

    convertFromImportResult(importResult: IImportResult): IDataPreviewWrapper {
        return {
            assets: importResult.importedAssets.map(m => <IItemPreview>{
                title: m.importedItem.fileName,
                data: m.importedItem
            }),
            taxonomies: importResult.importedTaxonomies.map(m => <IItemPreview>{
                title: m.importedItem.system.name,
                data: m.importedItem
            }),
            contentItems: importResult.importedContentItems.map(m => <IItemPreview>{
                title: m.importedItem.name,
                data: m.importedItem
            }),
            contentTypes: importResult.importedContentTypes.map(m => <IItemPreview>{
                title: m.importedItem.system.name,
                data: m.importedItem
            }),
            languageVariants: importResult.importedLanguageVariants.map(m => <IItemPreview>{
                title: `${m.importedItem.item.id} [${m.originalItem.languageCodename}]`,
                data: m.importedItem
            })
        };
    }
}

export const previewHelper = new PreviewHelper();