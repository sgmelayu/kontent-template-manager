import { ICMAssetModel, IContentTypeModel, ISlimContentItemModel, ITaxonomyModel } from '../shared/shared.models';

export interface ICleanupData {
    contentItems: ISlimContentItemModel[];
    contentTypes: IContentTypeModel[];
    assets: ICMAssetModel[];
    taxonomies: ITaxonomyModel[];
}