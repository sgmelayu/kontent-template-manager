import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { IImportData } from '../../../services';
import { previewHelper } from '../../components/preview/preview-helper';
import { IDataPreviewWrapper } from '../../components/preview/preview-models';
import { BaseComponent } from '../../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './export.component.html',
})
export class ExportComponent extends BaseComponent {

  public formGroup: FormGroup;
  public error?: string;
  public importData?: IImportData;
  public step: 'initial' | 'exporting' | 'completed' = 'initial';

  public get importPreviewData(): IDataPreviewWrapper | undefined {
    if (!this.importData) {
      return undefined;
    }
    return previewHelper.convertFromImportData(this.importData);
  }

  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }

  public get parsedLanguages(): string[] {
    const languagesValue = this.formGroup.controls['languages'].value as string | undefined;
    if (!languagesValue) {
      return [];
    }
    return languagesValue.split(';').map(m => m.trim());
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.sourceProjectId, Validators.required],
      languages: [environment.defaultProjects.languages],
    });
  }

  handleExport(): void {
    const config = this.getConfig();
    this.resetErrors();

    if (config) {
      this.step = 'exporting';

      super.startLoading();
      super.detectChanges();
      super.subscribeToObservable(
        this.dependencies.exportService.getImportDataWithDeliveryApi({
          languages: this.parsedLanguages,
          publishAllItems: false,
          sourceProjectId: config.projectId,
          targetProjectCmApiKey: 'xxx',
          targetProjectId: 'xxx'
        }).pipe(
          map((result) => {
            this.dependencies.exportService.createAndDownloadZipFile(config.projectId, result, () => {
              super.stopLoading();
              this.importData = result;
              this.step = 'completed';
              super.detectChanges();
            });
          }),
          catchError((err) => {
            if (err instanceof CloudError) {
              this.error = err.message;
            } else {
              this.error = err;
            }
            super.stopLoading();
            return throwError(err);
          })
        ),
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
      projectId: projectId,
    };
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
