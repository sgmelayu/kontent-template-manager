import { IContentManagementClient, ContentTypeModels, ContentItemModels, TaxonomyModels, LanguageVariantModels } from 'kentico-cloud-content-management';
import { ContentItem, ContentType, TaxonomyGroup } from 'kentico-cloud-delivery';

export type ImportItemStatus = 'imported' | 'published';

export type ImportProcessedItemType = ContentItem | ContentType | TaxonomyGroup | string;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    action: 'Content type' | 'Content item' | 'Taxonomy' | 'Language variant' | 'Publish';
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
}

export interface IImportResult {
    importedContentTypes: ContentTypeModels.ContentType[];
    importedContentItems: ContentItemModels.ContentItem[];
    importedLanguageVariants: LanguageVariantModels.ContentItemLanguageVariant[],
    importedTaxonomies: TaxonomyModels.Taxonomy[];
    publishedItems: IPublishItemRequest[];
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