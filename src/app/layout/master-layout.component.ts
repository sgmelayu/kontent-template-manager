import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComponentDependencies } from 'src/di';
import { environment } from 'src/environments/environment';
import { stringHelper } from 'src/utilities';

import { BaseComponent } from '../core/base.component';

interface INavigationItem {
  routerLink: string;
  title: string;
  icon: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './master-layout.component.html',
  styleUrls: [
    './master-layout.component.scss'
  ]
})
export class MasterLayoutComponent extends BaseComponent implements OnInit {

  public appName: string = environment.appName;

  public navigationItems: INavigationItem[] = [
    {
      title: 'Import',
      routerLink: '/',
      icon: 'settings_backup_restore'
    },
    {
      title: 'Export',
      routerLink: '/export',
      icon: 'cloud_download'
    }
  ];

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
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
