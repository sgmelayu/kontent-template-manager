import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../di';
import { ITemplate } from '../../../services/templates/template.models';
import { BaseComponent } from '../../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './template-list.component.html',
})
export class TemplateListComponent extends BaseComponent implements OnInit {

  public templates?: ITemplate[];

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
    super.subscribeToObservable(
      this.dependencies.templatesService.getTemplates().pipe(
        map(templates => {
          this.templates = templates;
        })
      )
    )
  }
}
