export interface ITaxonomyTermModel {
    name: string;
    codename: string;
    terms: ITaxonomyTermModel[];
}

export interface ITaxonomyModel {
    system: {
        id: string,
        name: string,
        codename: string
    };
    terms: ITaxonomyTermModel[];
}

export interface IContentTypeModel {
    system: {
        id: string,
        name: string,
        codename: string
    };
    elements: IContentTypeElementModel[];
}

export interface ICMAssetModel {
    id: string;
    fileName: string;
    title: string | null;
    type: string;
    externalId?: string;
}

export interface IContentTypeElementModel {
    [key: string]: any;
    codename: string;
    type: string;
    name?: string;
    taxonomyGroup?: string;
    options: IElementOptionModel[];
}

export interface IElementOptionModel {
    name: string;
    codename: string;
}

export interface IContentItemFieldModel {
    name: string;
    type: string;
    value: any;
    taxonomy_group?: string;
}

export interface IContentItemElementModel {
    [key: string]: IContentItemFieldModel;
}

export interface ISlimContentItemModel {
    id: string;
    name: string;
    codename: string;
    type: {
        id: string;
    };
    sitemapLocations: [{
        id: string;
    }];
    externalId?: string;
}

export interface IContentItemModel {
    [key: string]: any;
    system: {
        id: string,
        name: string,
        codename: string,
        type: string,
        language?: string,
        sitemapLocations: string[]
    };
    elements: IContentItemElementModel;
}

export interface IAssetFieldModel extends IFieldModel {
    value: IAssetModel[];
}

export interface IMultipleChoiceOptionModel {
    name: string;
    codename: string;
}

export interface IReferenceModel {
    id?: string;
    codename?: string;
    externalId?: string;
}

export interface ILanguageVariantModel {
    item: IReferenceModel;
    language: IReferenceModel
}

export interface IFieldModel {
    name: string;
    type: string;
    value: any;
}

export interface IAssetModel {
    name: string;
    type: string;
    size: number;
    description: string;
    url: string;
}