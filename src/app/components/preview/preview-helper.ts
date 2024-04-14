import { IDataPreviewWrapper, IItemPreview } from './preview-models';
import { IImportSource } from '@kentico/kontent-backup-manager';

export class PreviewHelper {

    convertFromImportData(importData: IImportSource): IDataPreviewWrapper {
        const files: IItemPreview[] = [];
        files.push(...importData.importData.assets.map(m => <IItemPreview>{
            title: m.file_name,
            data: m
        }));

        const dataInconsistencies: IItemPreview[] = [];
        for (const typeIssue of importData.validation.type_issues) {
            for (const issue of typeIssue.issues) {
                dataInconsistencies.push({
                    data: issue,
                    title: `${issue.element.codename}: ${issue.messages.join(', ')}`
                });
            }
        }
        for (const typeIssue of importData.validation.variant_issues) {
            for (const issue of typeIssue.issues) {
                dataInconsistencies.push({
                    data: issue,
                    title: `${issue.element.codename}: ${issue.messages.join(', ')}`
                });
            }
        }

        return {
            assets: files,
            taxonomies: importData.importData.taxonomies.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
            contentItems: importData.importData.contentItems.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
            contentTypes: importData.importData.contentTypes.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
            languageVariants: importData.importData.languageVariants.map(m => <IItemPreview>{
                title: `${m.item.id} [${m.language.id}]`,
                data: m
            }),
            contentTypeSnippets: importData.importData.contentTypeSnippets.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
            languages: importData.importData.languages.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
            dataInconsistencies: dataInconsistencies,
            assetFolders: importData.assetFolders.map(m => <IItemPreview>{
                title: m.name,
                data: m
            }),
        };
    }
}

export const previewHelper = new PreviewHelper();
