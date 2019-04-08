export type ActiveType = 'taxonomies' | 'contentTypes' | 'assets' | 'contentItems' | 'languageVariants'

export interface IDataPreviewWrapper {
    contentTypes: IItemPreview[];
    contentItems: IItemPreview[];
    languageVariants: IItemPreview[];
    taxonomies: IItemPreview[];
    assets: IItemPreview[];
}

export interface IItemPreview {
    title: string;
    data: any;
}

export interface IItemPreviewWithIndex extends IItemPreview {
    index: number;
}
