import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BaseComponent } from '../../core/base.component';
import { BasePageComponent } from '../../core/base-page.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './limitations.component.html',
})
export class LimitationsComponent extends BasePageComponent implements OnInit {

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef
   ) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
    super.setTitle('FQA');
  }
}
