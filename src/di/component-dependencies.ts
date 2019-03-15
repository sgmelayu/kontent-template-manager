import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ImportService } from 'src/services';
import { Router } from '@angular/router';

@Injectable()
export class ComponentDependencies {

    constructor(
        public importService: ImportService,
        public media: MediaObserver,
        public router: Router
    ) { }
}
