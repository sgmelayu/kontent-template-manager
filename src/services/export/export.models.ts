import { IEmbeddedAsset, ICMAssetModel } from '../shared/shared.models';

export interface IExportJsonResult {
    contentTypes: string;
    contentItems: string;
    taxonomies: string;
    assets: string;
    languageVariants: string;

    assetModels: ICMAssetModel[];
}


