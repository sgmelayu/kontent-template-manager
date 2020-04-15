import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ComponentDependencies } from '../../di';
import { environment } from '../../environments/environment';
import { stringHelper } from '../../utilities';
import { BaseComponent } from '../core/base.component';
import { map } from 'rxjs/operators';

interface INavigationItem {
  routerLink?: string;
  title: string;
  icon?: string;
  type: 'link' | 'section'
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
  public title?: string;

  public navigationItems: INavigationItem[] = [
    {
      title: 'Import & export',
      type: 'section'
    },
    {
      title: 'Import',
      routerLink: '/',
      icon: 'settings_backup_restore',
      type: 'link'
    },
    {
      title: 'Export',
      routerLink: '/export',
      icon: 'cloud_download',
      type: 'link'
    },
    {
      title: 'Common',
      type: 'section'
    },
    {
      title: 'Cleanup',
      routerLink: '/cleanup',
      icon: 'delete',
      type: 'link'
    },
    {
      title: 'Gallery',
      type: 'section'
    },
    {
      title: 'Templates',
      routerLink: '/templates',
      icon: 'list',
      type: 'link'
    },
    {
      title: 'FAQ',
      type: 'section'
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

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
    super.subscribeToObservable(this.dependencies.layoutService.componentConfigChanged$.pipe(
      map(title => {
        this.title = title;
        super.detectChanges();
      })
    ))
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
}
