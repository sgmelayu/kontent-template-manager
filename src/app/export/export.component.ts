import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentDependencies } from 'src/di';

import { BaseComponent } from '../core/base.component';

@Component({
  templateUrl: './export.component.html',
})
export class ExportComponent extends BaseComponent {

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }
}
