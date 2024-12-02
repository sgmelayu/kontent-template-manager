import { Injectable } from '@angular/core';
import { ManagementClient } from '@kentico/kontent-management';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface IProjectCheck {
    projectName?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    constructor() {}

    validateProject(data: { projectId?: string; apiKey?: string }): Observable<IProjectCheck | undefined> {
        if (!data.projectId || !data.apiKey) {
            return of(undefined);
        }

        const client = new ManagementClient({
            projectId: data.projectId,
            apiKey: data.apiKey,
            retryStrategy: {
                addJitter: false,
                canRetryError: (err) => false,
                deltaBackoffMs: 0,
                maxAttempts: 0,
                maxCumulativeWaitTimeMs: 0
            }
        });

        return client
            .projectInformation()
            .toObservable()
            .pipe(
                map((response) => {
                    const projectCheck: IProjectCheck = {
                        projectName: response.data.project.name
                    };

                    return projectCheck;
                }),
                catchError((error) => {
                    return of(undefined);
                })
            );
    }
}
