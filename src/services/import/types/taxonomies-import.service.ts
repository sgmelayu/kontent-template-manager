import { Injectable } from '@angular/core';
import { ContentTypeModels, ElementModels, IContentManagementClient, TaxonomyModels } from 'kentico-cloud-content-management';
import { ContentType, Element, TaxonomyGroup } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { observableHelper } from 'src/utilities';

import { IImportConfig, IImportData } from '../import.models';

@Injectable()
export class TaxonomiesImportService {

    importTaxonomies(data: IImportData, config: IImportConfig): Observable<void> {
        const obs: Observable<TaxonomyModels.Taxonomy>[] = [];

        data.taxonomies.forEach(taxonomy => {
            obs.push(this.createTaxonomy(taxonomy, data.targetClient, config));
        });

        return observableHelper.zipObservables(obs);
    }

    private createTaxonomy(taxonomy: TaxonomyGroup, targetClient: IContentManagementClient, data: IImportConfig): Observable<TaxonomyModels.Taxonomy> {
        return targetClient.addTaxonomy()
            .withData({
                name: taxonomy.system.name,
                terms: taxonomy.terms,
            })
            .toObservable()
            .pipe(
                map((response) => {
                    data.processItem({
                        item: taxonomy,
                        status: 'imported',
                        type: 'Taxonomy',
                        name: response.data.codename
                    })
                    return response.data;
                })
            );
    }


}