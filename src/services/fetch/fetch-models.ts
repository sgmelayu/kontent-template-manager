export interface IDeliveryFetchConfig {
    projectId: string;
    useProcessingService: boolean,
    securedApiKey?: string;
}

export interface IDeliveryContentItemsFetchConfig extends IDeliveryFetchConfig {
    depth: number;
}
