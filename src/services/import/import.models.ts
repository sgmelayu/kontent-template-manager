import { IContentManagementClient } from 'kentico-cloud-content-management';
import { ContentItem, ContentType } from 'kentico-cloud-delivery';

export type ImportItemStatus = 'imported';

export type ImportProcessedItemType = ContentItem | ContentType;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    type: 'Content type' | 'Content item';
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
}