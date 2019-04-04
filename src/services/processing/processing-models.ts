import { IContentItemModel, IContentTypeModel, ITaxonomyModel, ISlimContentItemModel } from '../shared/shared.models';

export type ImportItemStatus = 'imported' | 'published' | 'deleted';

export type ImportProcessedItemType = IContentItemModel | IContentTypeModel | ITaxonomyModel | ISlimContentItemModel | string;

export interface IImportItem {
    item: ImportProcessedItemType;
    status: ImportItemStatus;
    action: 'Add content type' | 'Add content item' | 'Add taxonomy' | 'Add language variant' | 'Publish' |
    'Upload binary file' | 'Add asset' | 'Delete content type' | 'Delete content item' | 'Delete taxonomy' | 'Delete asset';
    name: string;
}
