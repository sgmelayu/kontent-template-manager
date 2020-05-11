import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../di';
import { ITemplate } from '../../../services/templates/template.models';
import { BasePageComponent } from '../../core/base-page.component';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './template-list.component.html',
})
export class TemplateListComponent extends BasePageComponent implements OnInit {

  public templates?: ITemplate[];
  public searchControl = new FormControl();

  public filteredTemplates: ITemplate[] = [];

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
    super.setTitle('Templates');

    super.subscribeToObservable(
      this.dependencies.templatesService.getTemplates().pipe(
        map(templates => {
          this.templates = templates;
          this.filteredTemplates = templates;
        })
      )
    )

    super.subscribeToObservable(
      this.searchControl.valueChanges.pipe(
        map(search => {
          this.filteredTemplates = this.templates?.filter(m => {
            const lowercaseSearch = search?.toLowerCase();
            if (m.author.email?.toLowerCase().includes(lowercaseSearch)) {
              return m;
            }
            if (m.author.name?.toLowerCase().includes(lowercaseSearch)) {
              return m;
            }
            if (m.description?.toLowerCase().includes(lowercaseSearch)) {
              return m;
            }
            if (m.name?.toLowerCase().includes(lowercaseSearch)) {
              return m;
            }
            if (m.technology?.toLowerCase().includes(lowercaseSearch)) {
              return m;
            }
            return false;
          }) ?? []
        })
      )
    )
  }

  handleDownloadClick(template: ITemplate): void {
     // track gEvent
     super.trackEvent({
      eventCategory: 'button',
      eventAction: 'download-template',
      eventLabel: template.name,
    });
  }
}
