import { Injectable } from '@angular/core';
import { IContentManagementClient } from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ITaxonomyModel } from '../../shared/shared.models';
import { IImportConfig, IImportData } from '../import.models';

@Injectable()
export class TaxonomiesImportService extends BaseService {

    constructor() {
        super();
    }

    importTaxonomies(data: IImportData, config: IImportConfig): Observable<ITaxonomyModel[]> {
        const obs: Observable<void>[] = [];
        const taxonomies: ITaxonomyModel[] = [];

        data.taxonomies.forEach(taxonomy => {
            obs.push(this.createTaxonomy(taxonomy, data.targetClient, config).pipe(
                map((importedTaxonomy) => {
                    taxonomies.push(importedTaxonomy);
                })
            ));
        });

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return taxonomies;
            })
        );
    }

    private createTaxonomy(taxonomy: ITaxonomyModel, targetClient: IContentManagementClient, data: IImportConfig): Observable<ITaxonomyModel> {
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
                    return <ITaxonomyModel>{
                        system: {
                            codename: response.data.codename,
                            id: response.data.id,
                            name: response.data.name
                        },
                        terms: response.data.terms
                    };
                })
            );
    }


}