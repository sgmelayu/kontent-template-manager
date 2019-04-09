export type ProcessingItemAction = 'publish' | 'add' | 'delete' | 'upload' | 'get';
export type ProcessingItemType = 'binary file' | 'content type' | 'content item' | 'taxonomy' | 'language variant' | 'asset'

export interface IProcessingItem {
    data: any;
    type: ProcessingItemType;
    action: ProcessingItemAction;
    name: string;
}
