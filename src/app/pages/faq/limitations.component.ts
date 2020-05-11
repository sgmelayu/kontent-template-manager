import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ComponentDependencies } from '../../../di';
import { BasePageComponent } from '../../core/base-page.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './limitations.component.html',
})
export class LimitationsComponent extends BasePageComponent implements OnInit {

  public limitations: string[] = [
    `CM API does not support deleting languages which is why 'clean' action does not delete any.`,
    `External id values will be overwritten for all imported & exported objets using this tool. The value of 'external_id' property will equal to original system id of the object. This is used to preserve references between objects.`,
    `This tool should primarily be used to import data into clean (empty) projects as to avoid issues with existing content`,
  ];

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef
   ) {
    super(dependencies, cdr);
  }

  ngOnInit(): void {
    super.setTitle('FAQ');
  }
}
