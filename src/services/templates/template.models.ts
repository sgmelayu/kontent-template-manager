export interface ITemplate {
    name: string;
    description: string;
    repoUrl: string;
    exportPackageUrl: string;
    imageUrl: string;
    author: {
        name: string;
        email: string;
    };
    forVersion: string;
    technology: string;

    lastUpdate?: Date;
}
