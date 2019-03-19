import { Injectable } from '@angular/core';
import { ContentItem, ContentType, IDeliveryClient, TaxonomyGroup } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DeliveryFetchService {

    getAllTypes(deliveryClient: IDeliveryClient, allTypes: ContentType[], nextPageUrl?: string): Observable<ContentType[]> {
        const query = deliveryClient.types();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    allTypes.push(...response.types);

                    if (response.pagination.nextPage) {
                        this.getAllTypes(deliveryClient, allTypes, response.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(deliveryClient: IDeliveryClient, taxonomies: TaxonomyGroup[], nextPageUrl?: string): Observable<TaxonomyGroup[]> {
        const query = deliveryClient.taxonomies();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    taxonomies.push(...response.taxonomies);

                    if (response.pagination.nextPage) {
                        this.getAllTaxonomies(deliveryClient, taxonomies, response.pagination.nextPage);
                    }
                    return taxonomies;
                })
            );
    }

    getAllContentItems(deliveryClient: IDeliveryClient, contentItems: ContentItem[], nextPageUrl?: string): Observable<ContentItem[]> {
        const query = deliveryClient.items();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    contentItems.push(...response.items);

                    if (response.pagination.nextPage) {
                        this.getAllContentItems(deliveryClient, contentItems, response.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }
}