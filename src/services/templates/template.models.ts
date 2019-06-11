export interface ITemplate {
    name: string;
    description: string;
    repoUrl: string;
    exportPackageUrl: string;
    imageUrl: string;
    author: {
        name: string;
        email: String;
    };
    forVersion: string;
    technology: string;

    lastUpdate?: Date;
}
