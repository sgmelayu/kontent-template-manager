import { IContentManagementClient, ContentTypeModels, ContentItemModels, TaxonomyModels, LanguageVariantModels, AssetModels } from 'kentico-cloud-content-management';
import { ContentItem, ContentType, TaxonomyGroup } from 'kentico-cloud-delivery';

export type ImportItemStatus = 'imported' | 'published';

export type ImportProcessedItemType = ContentItem | ContentType | TaxonomyGroup | string;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    action: 'Add content type' | 'Add content item' | 'Add taxonomy' | 'Add language variant' | 'Publish' | 
        'Upload binary file' | 'Add asset';
    name: string;
}

export interface IImportConfig {
    sourceProjectId: string;
    targetProjectId: string;
    targetProjectCmApiKey: string;
    processItem: (item: IImportItem) => void;
}

export interface IImportContentItemsResult {
    contentItems: ContentItemModels.ContentItem[];
    languageVariants: LanguageVariantModels.ContentItemLanguageVariant[];
    assets: AssetModels.Asset[];
}

export interface IImportResult {
    importedContentTypes: ContentTypeModels.ContentType[];
    importedContentItems: ContentItemModels.ContentItem[];
    importedLanguageVariants: LanguageVariantModels.ContentItemLanguageVariant[],
    importedTaxonomies: TaxonomyModels.Taxonomy[];
    publishedItems: IPublishItemRequest[];
    assets: AssetModels.Asset[];
}

export interface IPublishItemRequest {
    itemCodename: string;
    languageCodename: string;
}

export interface IImportData {
    targetClient: IContentManagementClient;
    contentTypes: ContentType[];
    contentItems: ContentItem[];
    taxonomies: TaxonomyGroup[];
}