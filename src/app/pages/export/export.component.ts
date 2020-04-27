import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { BasePageComponent } from '../../core/base-page.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './export.component.html',
})
export class ExportComponent extends BasePageComponent implements OnInit {

  public formGroup: FormGroup;
  public error?: string;
  
  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.sourceProjectId, Validators.required],
      apiKey: [environment.defaultProjects.sourceProjectApiKey, Validators.required],
    });

  }

  ngOnInit(): void {
    super.setTitle('Export project data');
  }

  handleDownloadFile(): void  {
  }

  handleExport(): void {
    if (this.formGroup.invalid) {
      return;
    }

   
  }


}
