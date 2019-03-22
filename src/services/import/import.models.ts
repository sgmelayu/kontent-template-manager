import { IContentManagementClient, ContentItemModels, ContentTypeModels, TaxonomyModels, AssetModels } from 'kentico-cloud-content-management';

import {
    IAssetModel,
    ICMAssetModel,
    IContentItemModel,
    IContentTypeModel,
    IEmbeddedAsset,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

export interface IImportFromFileConfig {
    projectId: string;
    apiKey: string;
}

export interface IImportFromProjectConfig {
    targetProjectId: string;
    targetProjectCmApiKey: string;
    sourceProjectId: string;
}

export interface IImportConfig {
}

export interface IImportContentItemResult {
    originalItem: IContentItemModel;
    importedItem: ContentItemModels.ContentItem;
}

export interface IImportContentTypeResult {
    originalItem: IContentTypeModel;
    importedItem: IContentTypeModel;
}

export interface IImportTaxonomyResult {
    originalItem: ITaxonomyModel;
    importedItem: ITaxonomyModel;
}

export interface IImportAssetResult {
    importedItem: AssetModels.Asset;
}

export interface IImportContentItemsResult {
    contentItems: IImportContentItemResult[];
    languageVariants: ILanguageVariantModel[];
    assets: IImportAssetResult[];
}

export interface IImportResult {
    importedContentTypes: IImportContentTypeResult[];
    importedContentItems: IImportContentItemResult[];
    importedLanguageVariants: ILanguageVariantModel[],
    importedTaxonomies: IImportTaxonomyResult[];
    publishedItems: IPublishItemRequest[];
    assets: IImportAssetResult[];
}

export interface IPublishItemRequest {
    itemCodename: string;
    languageCodename: string;
}

export interface IAssetFromFile {
    data: Blob;
    embeddedAsset: IEmbeddedAsset;
}

export interface IImportData {
    targetClient: IContentManagementClient;
    contentTypes: IContentTypeModel[];
    contentItems: IContentItemModel[];
    taxonomies: ITaxonomyModel[];
    assetsFromFile: IAssetFromFile[];
}

export interface IGetAssetData {
    blob: Blob;
    asset: IAssetModel;
}