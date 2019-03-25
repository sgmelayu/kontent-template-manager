import {
    AssetModels,
    ContentItemModels,
    IContentManagementClient,
    LanguageVariantModels,
} from 'kentico-cloud-content-management';

import {
    IAssetModel,
    IContentItemModel,
    IContentTypeModel,
    IEmbeddedAsset,
    ILanguageVariantModel,
    ITaxonomyModel,
} from '../shared/shared.models';

export interface IImportFromFileConfig {
    projectId: string;
    apiKey: string;
}

export interface IImportFromProjectConfig {
    languages: string[],
    targetProjectId: string;
    targetProjectCmApiKey: string;
    sourceProjectId: string;
}

export interface IImportConfig {
}

export interface IContentTypeImportPrerequisities {
    taxonomies: IImportTaxonomyResult[];
}

export interface IContentItemImportPrerequisities {
    taxonomies: IImportTaxonomyResult[];
    contentTypes: IImportContentTypeResult[];
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
    languageVariants: ICreateLanguageVariantResult[];
    assets: IImportAssetResult[];
}

export interface IImportResult {
    importedContentTypes: IImportContentTypeResult[];
    importedContentItems: IImportContentItemResult[];
    importedLanguageVariants: ICreateLanguageVariantResult[],
    importedTaxonomies: IImportTaxonomyResult[];
    publishedItems: IPublishItemRequest[];
    assets: IImportAssetResult[];
}

export interface ICreateLanguageVariantResult {
    languageVariant: ILanguageVariantModel;
    assets: IImportAssetResult[];
    languageCodename: string;
}

export interface ICreateContentItemWithAssetsResult {
    importedContentItem: ContentItemModels.ContentItem;
    assetImportResult: IImportAssetResult[];
}

export interface IPublishItemRequest {
    itemId: string;
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