import { AssetModels, ContentItemModels, ContentTypeModels, TaxonomyModels } from 'kentico-cloud-content-management';

export interface ICleanupData {
    contentItems: ContentItemModels.ContentItem[];
    contentTypes: ContentTypeModels.ContentType[];
    assets: AssetModels.Asset[];
    taxonomies: TaxonomyModels.Taxonomy[];
}