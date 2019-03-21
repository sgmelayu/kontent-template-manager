import { IEmbeddedAsset } from '../shared/shared.models';

export interface IExportJsonResult {
    contentTypes: string;
    contentItems: string;
    taxonomies: string;
    assets: IEmbeddedAsset[];
}


