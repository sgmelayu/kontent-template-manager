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
    ILanguageVariantModel,
    ISlimContentItemModel,
    ITaxonomyModel,
} from '../shared/shared.models';

export interface IImportFromFileConfig extends IImportConfig {
    projectId: string;
    apiKey: string;
    file: File;
}

export interface IImportFromProjectWithCMConfig extends IImportConfig {
    languages: string[];
    targetProjectId: string;
    targetProjectCmApiKey: string;
    sourceProjectId: string;
    sourceProjectCmApiKey: string;
}

export interface IImportFromProjectWithDeliveryConfig extends IImportConfig {
    languages: string[];
    targetProjectId: string;
    targetProjectCmApiKey: string;
    sourceProjectId: string;
}

// tslint:disable-next-line:no-empty-interface
export interface IImportConfig {
    publishAllItems: boolean;
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
    originalItem: IAssetModel;
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
    asset: IAssetModel;
}

export interface IImportData {
    targetProjectId: string;
    targetClient: IContentManagementClient;
    contentTypes: IContentTypeModel[];
    contentItems: ISlimContentItemModel[];
    languageVariants: ILanguageVariantModel[];
    taxonomies: ITaxonomyModel[];
    assets: IAssetModel[];
    assetsFromFile: IAssetFromFile[];
}

export interface IMigrateContentItemsData {
    contentItemsToMigrate: IContentItemModel[];
    targetTaxonomies: ITaxonomyModel[];
    targetContentTypes: IContentTypeModel[];
}

export interface IGetAssetData {
    blob: Blob;
    asset: IAssetModel;
}
