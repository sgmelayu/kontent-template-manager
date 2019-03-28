import { Injectable } from '@angular/core';
import { IContentManagementClient } from 'kentico-cloud-content-management';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { observableHelper } from '../../../utilities';
import { BaseService } from '../../base-service';
import { ProcessingService } from '../../processing/processing.service';
import { ITaxonomyModel } from '../../shared/shared.models';
import { IImportConfig, IImportTaxonomyResult } from '../import.models';

@Injectable()
export class TaxonomiesImportService extends BaseService {

    constructor(
        private processingService: ProcessingService
    ) {
        super();
    }

    importTaxonomies(targetClient: IContentManagementClient, taxonomies: ITaxonomyModel[], config: IImportConfig): Observable<IImportTaxonomyResult[]> {
        const obs: Observable<void>[] = [];
        const importedTaxonomies: IImportTaxonomyResult[] = [];

        taxonomies.forEach(taxonomy => {
            obs.push(this.createTaxonomy(taxonomy, targetClient, config).pipe(
                map((importedTaxonomy) => {
                    importedTaxonomies.push({
                        importedItem: importedTaxonomy,
                        originalItem: taxonomy
                    });
                })
            ));
        });

        return observableHelper.flatMapObservables(obs, this.cmRequestDelay).pipe(
            map(() => {
                return importedTaxonomies;
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
                    this.processingService.addProcessedItem({
                        item: taxonomy,
                        status: 'imported',
                        action: 'Add taxonomy',
                        name: response.data.codename
                    });
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