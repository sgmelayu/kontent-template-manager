import { ContentItem, ContentType } from 'kentico-cloud-delivery';

export type ImportItemStatus = 'imported';

export type ImportProcessedItemType = ContentItem | ContentType;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    type: 'Content type' | 'Content item';
    name: string;
}

export interface IImportData {
    sourceProjectId: string;
    targetProjectId: string;
    targetProjectCmApiKey: string;
    processItem: (item: IImportItem) => void;
}