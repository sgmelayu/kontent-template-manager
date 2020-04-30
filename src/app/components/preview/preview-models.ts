export type ActiveType = 'taxonomies' | 
'contentTypes' | 'assets' | 'contentItems' | 'languageVariants' | 'languages' | 'dataInconsistencies' | 'contentTypeSnippets' | 'assetFolders'

export interface IDataPreviewWrapper {
    contentTypes: IItemPreview[];
    contentItems: IItemPreview[];
    languageVariants: IItemPreview[];
    taxonomies: IItemPreview[];
    contentTypeSnippets: IItemPreview[];
    languages: IItemPreview[];
    dataInconsistencies: IItemPreview[];
    assets: IItemPreview[];
    assetFolders: IItemPreview[];
}

export interface IItemPreview {
    title: string;
    data: any;
}

export interface IItemPreviewWithIndex extends IItemPreview {
    index: number;
}
