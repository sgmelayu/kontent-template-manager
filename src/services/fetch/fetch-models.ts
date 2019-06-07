export interface IFetchConfig {
    useProcessingService: boolean,
}

export interface IContentItemsFetchConfig extends IFetchConfig {
    depth: number
}
