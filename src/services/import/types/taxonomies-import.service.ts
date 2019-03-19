import { Injectable } from '@angular/core';
import { IContentManagementClient, TaxonomyModels } from 'kentico-cloud-content-management';
import { TaxonomyGroup } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { BaseService } from '../../base-service';
import { IImportConfig, IImportData } from '../import.models';

@Injectable()
export class TaxonomiesImportService extends BaseService {

    constructor() {
        super();
    }

    importTaxonomies(data: IImportData, config: IImportConfig): Observable<TaxonomyModels.Taxonomy[]> {
        const obs: Observable<void>[] = [];
        const taxonomies: TaxonomyModels.Taxonomy[] = [];

        data.taxonomies.forEach(taxonomy => {
            obs.push(this.createTaxonomy(taxonomy, data.targetClient, config).pipe(
                map((importedTaxonomy) => {
                    taxonomies.push(importedTaxonomy);
                })
            ));
        });

        return observableHelper.zipObservables(obs).pipe(
            map(() => {
                return taxonomies;
            })
        );
    }

    private createTaxonomy(taxonomy: TaxonomyGroup, targetClient: IContentManagementClient, data: IImportConfig): Observable<TaxonomyModels.Taxonomy> {
        return targetClient.addTaxonomy()
            .withData({
                name: taxonomy.system.name,
                terms: taxonomy.terms,
            })
            .toObservable()
            .pipe(
                delay(this.cmRequestDelay),
                map((response) => {
                    data.processItem({
                        item: taxonomy,
                        status: 'imported',
                        action: 'Add taxonomy',
                        name: response.data.codename
                    })
                    return response.data;
                })
            );
    }


}