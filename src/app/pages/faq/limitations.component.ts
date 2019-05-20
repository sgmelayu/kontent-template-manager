import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BaseComponent } from '../../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './limitations.component.html',
})
export class LimitationsComponent extends BaseComponent {

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef
   ) {
    super(dependencies, cdr);
  }
}
