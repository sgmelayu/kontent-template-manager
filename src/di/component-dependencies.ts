import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { CleanupService, ExportService, ImportService } from 'src/services';

@Injectable()
export class ComponentDependencies {

    constructor(
        public importService: ImportService,
        public cleanupService: CleanupService,
        public exportService: ExportService,
        public media: MediaObserver,
        public router: Router
    ) { }
}
