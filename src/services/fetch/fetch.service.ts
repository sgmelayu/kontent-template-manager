import { Injectable } from '@angular/core';
import { ContentType, IDeliveryClient } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FetchService {

    getAllTypes(sourceDeliveryClient: IDeliveryClient, allTypes: ContentType[], nextPageUrl?: string): Observable<ContentType[]> {
        const query = sourceDeliveryClient.types();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .getObservable()
            .pipe(
                map(response => {
                    allTypes.push(...response.types);

                    if (response.pagination.nextPage) {
                        this.getAllTypes(sourceDeliveryClient, allTypes, response.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }
}