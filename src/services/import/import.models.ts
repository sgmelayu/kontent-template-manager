import { IContentManagementClient } from 'kentico-cloud-content-management';

import {
    ICMAssetModel,
    IContentItemModel,
    IContentTypeModel,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

export type ImportItemStatus = 'imported' | 'published';

export type ProcessItemEvent = (item: IImportItem) => void;

export type ImportProcessedItemType = IContentItemModel | IContentTypeModel | ITaxonomyModel | string;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    action: 'Add content type' | 'Add content item' | 'Add taxonomy' | 'Add language variant' | 'Publish' |
    'Upload binary file' | 'Add asset';
    name: string;
}

export interface IImportFromFileConfig {
    projectId: string;
    apiKey: string;
    processItem: ProcessItemEvent;
}

export interface IImportFromProjectConfig {
    targetProjectId: string;
    targetProjectCmApiKey: string;
    sourceProjectId: string;
    processItem: ProcessItemEvent;
}

export interface IImportConfig {
    processItem: ProcessItemEvent;
}

export interface IImportContentItemsResult {
    contentItems: ISlimContentItemModel[];
    languageVariants: ILanguageVariantModel[];
    assets: ICMAssetModel[];
}

export interface IImportResult {
    importedContentTypes: IContentTypeModel[];
    importedContentItems: ISlimContentItemModel[];
    importedLanguageVariants: ILanguageVariantModel[],
    importedTaxonomies: ITaxonomyModel[];
    publishedItems: IPublishItemRequest[];
    assets: ICMAssetModel[];
}

export interface IPublishItemRequest {
    itemCodename: string;
    languageCodename: string;
}

export interface IImportData {
    targetClient: IContentManagementClient;
    contentTypes: IContentTypeModel[];
    contentItems: IContentItemModel[];
    taxonomies: ITaxonomyModel[];
}