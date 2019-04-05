import {
    AssetModels,
    ContentItemModels,
    IContentManagementClient,
    LanguageVariantModels,
} from 'kentico-cloud-content-management';

import {
    ICMAssetModel,
    IContentItemModel,
    IContentTypeModel,
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

export interface IImportFromFileConfig {
    projectId: string;
    apiKey: string;
}

export interface IImportFromProjectConfig {
    languages: string[];
    targetProjectId: string;
    targetProjectCmApiKey: string;
    sourceProjectId: string;
    sourceProjectCmApiKey: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IImportConfig {
}

export interface IContentTypeImportPrerequisities {
    taxonomies: IImportTaxonomyResult[];
}

export interface IContentItemImportPrerequisities {
    taxonomies: IImportTaxonomyResult[];
    contentTypes: IImportContentTypeResult[];
}

export interface ILanguageVariantsImportPrerequisities {
    assets: IImportAssetResult[];
    contentItems: IImportContentItemResult[];
    taxonomies: IImportTaxonomyResult[];
    contentTypes: IImportContentTypeResult[];
}

export interface IImportContentItemResult {
    originalItem: ISlimContentItemModel;
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
    originalItem: ICMAssetModel;
}

export interface IImportLanguageVariantsResult {
    importedItem: LanguageVariantModels.ContentItemLanguageVariant;
    originalItem: ILanguageVariantModel;
}

export interface IImportResult {
    importedContentTypes: IImportContentTypeResult[];
    importedContentItems: IImportContentItemResult[];
    importedLanguageVariants: IImportLanguageVariantsResult[];
    importedTaxonomies: IImportTaxonomyResult[];
    publishedItems: IPublishItemRequest[];
    importedAssets: IImportAssetResult[];
}

export interface IPublishItemRequest {
    itemId: string;
    languageId: string;
}

export interface IAssetFromFile {
    data: Blob;
    embeddedAsset: ICMAssetModel;
}

export interface IImportData {
    targetProjectId: string;
    targetClient: IContentManagementClient;
    contentTypes: IContentTypeModel[];
    contentItems: ISlimContentItemModel[];
    languageVariants: ILanguageVariantModel[];
    taxonomies: ITaxonomyModel[];
    assets: ICMAssetModel[];
    assetsFromFile: IAssetFromFile[];
}

export interface IMigrateContentItemsData {
    contentItemsToMigrate: IContentItemModel[];
    targetTaxonomies: ITaxonomyModel[];
    targetContentTypes: IContentTypeModel[];
}

export interface IGetAssetData {
    blob: Blob;
    asset: ICMAssetModel;
}
