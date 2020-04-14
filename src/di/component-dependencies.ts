import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

import {
    GoogleAnalyticsService,
    ImportDataStorageService,
    TemplatesService,
    ProcessingService,
} from '../services';

@Injectable({
    providedIn: 'root'
})
export class ComponentDependencies {

    constructor(
        public processingService: ProcessingService,
        public media: MediaObserver,
        public router: Router,
        public templatesService: TemplatesService,
        public googleAnalyticsService: GoogleAnalyticsService,
        public importDataStorageService: ImportDataStorageService,
    ) { }
}
