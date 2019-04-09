import { IAssetModel, IContentTypeModel, ISlimContentItemModel, ITaxonomyModel } from '../shared/shared.models';

export interface ICleanupData {
    contentItems: ISlimContentItemModel[];
    contentTypes: IContentTypeModel[];
    assets: IAssetModel[];
    taxonomies: ITaxonomyModel[];
}