import { IContentManagementClient, ContentTypeModels, ContentItemModels, TaxonomyModels } from 'kentico-cloud-content-management';
import { ContentItem, ContentType, TaxonomyGroup } from 'kentico-cloud-delivery';

export type ImportItemStatus = 'imported';

export type ImportProcessedItemType = ContentItem | ContentType | TaxonomyGroup;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    type: 'Content type' | 'Content item' | 'Taxonomy';
    name: string;
}

export interface IImportConfig {
    sourceProjectId: string;
    targetProjectId: string;
    targetProjectCmApiKey: string;
    processItem: (item: IImportItem) => void;
}

export interface IImportData {
   targetClient: IContentManagementClient;
    contentTypes: ContentType[];
    contentItems: ContentItem[];
    taxonomies: TaxonomyGroup[]; 
}