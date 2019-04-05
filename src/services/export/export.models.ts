import { IEmbeddedAsset, ICMAssetModel, IContentTypeModel, IContentItemModel, ITaxonomyModel, ILanguageVariantModel, ISlimContentItemModel } from '../shared/shared.models';

export interface IExportJsonResult {
    contentTypes: IContentTypeModel[];
    contentItems: ISlimContentItemModel[];
    taxonomies: ITaxonomyModel[];
    assets: ICMAssetModel[];
    languageVariants: ILanguageVariantModel[];
}


