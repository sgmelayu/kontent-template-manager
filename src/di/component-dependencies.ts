import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';

import {
    CleanupService,
    ExportService,
    ImportwithCMService,
    ImportWithDeliveryService,
    ProcessingService,
} from '../services';

@Injectable()
export class ComponentDependencies {

    constructor(
        public importWithCMService: ImportwithCMService,
        public importWithDeliveryService: ImportWithDeliveryService,
        public cleanupService: CleanupService,
        public exportService: ExportService,
        public processingService: ProcessingService,
        public media: MediaObserver,
        public router: Router
    ) { }
}
