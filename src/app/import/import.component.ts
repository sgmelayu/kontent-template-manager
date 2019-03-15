import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentDependencies } from 'src/di';

import { BaseComponent } from '../core/base.component';

@Component({
  templateUrl: './import.component.html',
})
export class ImportComponent extends BaseComponent {

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }
}
