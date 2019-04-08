
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
        codename: string,
    };
    elements: IContentTypeElementModel[];
}

export interface ICMAssetModel {
    id: string;
    fileName: string;
    title?: string;
    type: string;
    externalId?: string;
    binaryData: Blob;

    deliveryUrl: string;
}

export interface IContentTypeElementModel {
    [key: string]: any;
    codename: string;
    type: ElementType;
    name?: string;
    taxonomyGroup?: string;
    options: IElementOptionModel[];
    mode?: ElementMode;
}

export enum ElementMode {
    single = 'single',
    multiple = 'multiple'
}
export enum ElementType {
    text = 'text',
    richText = 'rich_text',
    number = 'number',
    multipleChoice = 'multiple_choice',
    dateTime = 'date_time',
    asset = 'asset',
    modularContent = 'modular_content',
    taxonomy = 'taxonomy',
    urlSlug = 'url_slug',
    guidelines = 'guidelines',
    snippet = 'snippet'
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
    typeId?: string;
    typeCodename: string;
    externalId?: string;
}

export interface IDeliveryContentItemsResult {
    contentItems: ISlimContentItemModel[];
    assets: ICMAssetModel[];
    languageVariants: ILanguageVariantModel[];
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
    assets: IEmbeddedAsset[];
    linkedItemCodenames: string[];
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
    itemId: string;
    itemCodename: string;
    languageCodename: string;
    elements: IContentItemElement[];
}

export interface IAssetElementValue {
    name: string;
    type: string;
    size: number;
    description: string;
    url: string;
}

export interface IMultipleChoiceElementValue {
    codename: string;
    name: string;
}

export type IElementValue = undefined | string | number | string[] | IMultipleChoiceElementValue[] | IAssetElementValue[];

export interface IContentItemElement {
    elementCodename: string;
    value: IElementValue;
    elementModel: IContentTypeElementModel;
}

export interface IFieldModel {
    name: string;
    type: string;
    value: any;
}

export interface IEmbeddedAsset {
    languageCodename: string;
    asset: IAssetModel;
    fieldCodename: string;
    contentItemCodename: string;
    contentItemId: string;
}

export interface IAssetModel {
    name: string;
    type: string;
    size: number;
    description: string;
    url: string;
}
