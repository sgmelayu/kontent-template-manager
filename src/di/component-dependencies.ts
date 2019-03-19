import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { ImportService, CleanupService } from 'src/services';

@Injectable()
export class ComponentDependencies {

    constructor(
        public importService: ImportService,
        public cleanupService: CleanupService,
        public media: MediaObserver,
        public router: Router
    ) { }
}
