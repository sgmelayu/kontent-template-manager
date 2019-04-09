import { environment } from '../environments/environment';

export class ZipHelper {

    getFullAssetPath(assetId: string, filename: string): string {
        return `${environment.export.filenames.assetsFolder}/${assetId.substr(0, 3)}/${assetId}/${filename}`;
    }
}

export const zipHelper = new ZipHelper();