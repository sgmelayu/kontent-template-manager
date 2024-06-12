
export class ZipHelper {

    getZipFileTypes(): string[] {
        return ['application/zip', 'application/x-zip-compressed'];
    }
}

export const zipHelper = new ZipHelper();