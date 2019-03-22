import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { ComponentDependencies } from '../../di';
import { environment } from '../../environments/environment';
import { BaseComponent } from '../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './export.component.html',
})
export class ExportComponent extends BaseComponent {

  public formGroup: FormGroup;
  public error?: string;
  public success: boolean = false;

  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.sourceProjectId, Validators.required],
    });
  }

  handleExport(): void {
    const config = this.getConfig();
    this.resetErrors();

    if (config) {
      super.startLoading();
      super.detectChanges();
      super.subscribeToObservable(
        this.dependencies.exportService.prepareAndDownloadPackage(config.projectId).pipe(
          map((result) => {
            this.dependencies.exportService.createAndDownloadZipFile(config.projectId, result, () => {
              super.stopLoading();
              this.success = true;
              super.detectChanges();
            });
          })
        )
      )
    }
  }

  private getConfig(): {
    projectId: string,
  } | undefined {
    const projectId = this.formGroup.controls['projectId'].value;

    if (!projectId) {
      this.error = 'Invalid project id';
      return;
    }

    return {
      projectId: projectId
    };
  }

  private resetErrors(): void {
    this.error = undefined;
    this.success = false;
  }
}
