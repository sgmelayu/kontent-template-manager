import { Injectable } from '@angular/core';
import { ContentItem, ContentType, IDeliveryClient, TaxonomyGroup, IDeliveryClientConfig, DeliveryClient } from 'kentico-cloud-delivery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DeliveryFetchService {


    getAllTypes(projectId: string, allTypes: ContentType[], nextPageUrl?: string): Observable<ContentType[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).types();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    allTypes.push(...response.types);

                    if (response.pagination.nextPage) {
                        this.getAllTypes(projectId, allTypes, response.pagination.nextPage);
                    }
                    return allTypes;
                })
            );
    }

    getAllTaxonomies(projectId: string, taxonomies: TaxonomyGroup[], nextPageUrl?: string): Observable<TaxonomyGroup[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).taxonomies();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    taxonomies.push(...response.taxonomies);

                    if (response.pagination.nextPage) {
                        this.getAllTaxonomies(projectId, taxonomies, response.pagination.nextPage);
                    }
                    return taxonomies;
                })
            );
    }

    getAllContentItems(projectId: string, contentItems: ContentItem[], nextPageUrl?: string): Observable<ContentItem[]> {
        const query = this.getDeliveryClient({
            projectId: projectId
        }).items();

        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }

        return query
            .toObservable()
            .pipe(
                map(response => {
                    contentItems.push(...response.items);

                    if (response.pagination.nextPage) {
                        this.getAllContentItems(projectId, contentItems, response.pagination.nextPage);
                    }
                    return contentItems;
                })
            );
    }

    getDeliveryClient(config: IDeliveryClientConfig): IDeliveryClient {
        return new DeliveryClient(config);
    }
}