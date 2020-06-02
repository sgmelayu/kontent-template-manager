import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ComponentDependencies } from '../../di';
import { environment } from '../../environments/environment';
import { stringHelper } from '../../utilities';
import { BaseComponent } from '../core/base.component';
import { ILayoutConfig } from 'src/services';
import { MatCheckboxChange } from '@angular/material/checkbox';

interface INavigationItem {
    routerLink?: string;
    title: string;
    icon?: string;
    type: 'link' | 'section';
}

interface ILayoutOptions {
    fixed: boolean;
    topGap: number;
    bottomGap: number;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './master-layout.component.html'
})
export class MasterLayoutComponent extends BaseComponent implements OnInit {
    public appName: string = environment.appName;
    public config?: ILayoutConfig;
    public error?: string;
    public showDevMode: boolean = false;
    public isDevMode: boolean;
    public year: number = new Date().getFullYear();

    private readonly isDevModeStorage: string = 'isDevMode';
    private readonly isDevModeStorageSource: string = 'master';

    public navigationItems: INavigationItem[] = [
        {
            title: 'Home',
            routerLink: '/',
            icon: 'home',
            type: 'link'
        },
        {
            title: 'Export',
            routerLink: '/export',
            icon: 'cloud_download',
            type: 'link'
        },
        {
            title: 'Import',
            routerLink: '/import',
            icon: 'settings_backup_restore',
            type: 'link'
        },
        {
            title: 'Cleanup',
            routerLink: '/cleanup',
            icon: 'delete',
            type: 'link'
        },
        {
            title: 'Templates',
            routerLink: '/templates',
            icon: 'dashboard',
            type: 'link'
        },
        {
            title: 'FAQ',
            routerLink: '/faq',
            icon: 'help',
            type: 'link'
        }
    ];

    public readonly layoutOptions: ILayoutOptions = {
        fixed: true,
        topGap: 64,
        bottomGap: 0
    };

    constructor(dependencies: ComponentDependencies, cdr: ChangeDetectorRef) {
        super(dependencies, cdr);

        this.isDevMode = this.getStoredIsDevMode();
    }

    ngOnInit(): void {
        super.subscribeToObservable(
            this.dependencies.layoutService.layoutConfigChanged.pipe(
                map((config) => {
                    this.config = config;
                    super.detectChanges();
                })
            )
        );

        super.subscribeToObservable(
            this.dependencies.layoutService.errorChanged$.pipe(
                map((error) => {
                    this.error = error;
                    super.detectChanges();
                })
            )
        );
    }

    handleIsDevModechange(event: MatCheckboxChange): void {
        this.dependencies.layoutService.setIsDevMode(event.checked);
        this.storeIsDevMode(event.checked);
    }

    menuItemIsActive(path: string, exactMatch: boolean = true): boolean {
        const currentUrlWithoutQueryString = this.removeQueryStringFromUrl(this.dependencies.router.url);

        // get urls to compare
        const processedCurrentUrl = this.getActionUrl(currentUrlWithoutQueryString);
        const processedItemUrl = this.getActionUrl(path);

        if (exactMatch) {
            return processedCurrentUrl.toLowerCase() === processedItemUrl.toLowerCase();
        }

        return processedCurrentUrl.startsWith(processedItemUrl);
    }

    getActionUrl(action: string | undefined): string {
        if (!action) {
            return '';
        }

        // prepare route url
        let routeUrl = action;

        // add starting '/'
        if (!routeUrl.startsWith('/')) {
            routeUrl = '/' + routeUrl;
        }

        // remove '/' from end
        if (routeUrl.endsWith('/')) {
            routeUrl = routeUrl.substring(0, routeUrl.length - 1);
        }

        return routeUrl;
    }

    protected removeQueryStringFromUrl(url: string): string {
        if (!url) {
            return '';
        }

        return stringHelper.removeEverythingAfterIncludingSeparator(url, '?');
    }

    private storeIsDevMode(isDevMode: boolean): void {
        this.dependencies.storageService.set(this.isDevModeStorageSource, this.isDevModeStorage, isDevMode);
    }

    private getStoredIsDevMode(): boolean {
        return this.dependencies.storageService.get(this.isDevModeStorageSource, this.isDevModeStorage) ?? false;
    }
}
