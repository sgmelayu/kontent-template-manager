import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../../di';
import { environment } from '../../../../environments/environment';
import { ICleanupData } from '../../../../services';
import { previewHelper } from '../../../components/preview/preview-helper';
import { IDataPreviewWrapper } from '../../../components/preview/preview-models';
import { BasePageComponent } from '../../../core/base-page.component';
import { CleanupConfirmComponent } from './cleanup-confirm.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cleanup.component.html',
})
export class CleanupComponent extends BasePageComponent {

  public formGroup: FormGroup;
  public error?: string;
  public cleanupData?: ICleanupData;
  public step: 'initial' | 'cleaning' | 'completed' | 'preview' = 'initial';

  public get previewData(): IDataPreviewWrapper | undefined {
    if (!this.cleanupData) {
      return undefined;
    }
    return previewHelper.convertFromCleanupData(this.cleanupData);
  }

  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }

  public projectContainsSomeData(): boolean {
    if (!this.cleanupData) {
      return false;
    }

    if (this.cleanupData.assets.length > 0) {
      return true;
    }

    if (this.cleanupData.contentItems.length > 0) {
      return true;
    }
    if (this.cleanupData.contentTypes.length > 0) {
      return true;
    }
    if (this.cleanupData.taxonomies.length > 0) {
      return true;
    }

    return false;
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.targetProjectId, Validators.required],
      cmApiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
    });
  }

  prepareCleanup(): void {
    const config = this.getConfig();
    if (config) {
      this.step = 'preview';

      super.startLoading();
      super.detectChanges();

      super.subscribeToObservable(
        this.dependencies.cleanupService.prepareCleanup(config.projectId, config.apiKey).pipe(
          map((cleanupData) => {
            this.cleanupData = cleanupData;
            super.stopLoading();
            super.detectChanges();
          }),
          catchError((error) => {
            super.stopLoading();
            if (error instanceof CloudError) {
              this.error = error.message;
            } else {
              this.error = 'Preparing cleanup data failed. See console for full error.';
            }

            // cleanup data because something might have been deleted already and same item
            // cannot be deleted twice
            this.cleanupData = undefined;

            super.detectChanges();
            return throwError(error);
          })
        )
      );
    }
  }

  cleanup(): void {
    const config = this.getConfig();

    if (config && this.cleanupData) {
      this.step = 'cleaning';
      super.startLoading();
      super.detectChanges();

      super.subscribeToObservable(
        this.dependencies.cleanupService.cleanupProject(config.projectId, config.apiKey, this.cleanupData).pipe(
          map((cleanupData) => {
            super.stopLoading();
            this.step = 'completed';
            super.detectChanges();
          }),
          catchError((error) => {
            super.stopLoading();
            if (error instanceof CloudError) {
              this.error = error.message;
            } else {
              this.error = 'Cleaning project data failed. See console for full error.';
            }

            super.detectChanges();
            return throwError(error);
          })
        )
      );
    }
  }

  openConfirmation(): void {
    this.resetErrors();

    const config = this.getConfig();

    if (config) {
      const dialogRef = this.dialog.open(CleanupConfirmComponent, {
        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (dialogRef.componentInstance.confirmed) {

          if (!this.cleanupData) {
            throw Error(`Invalid cleanup data`);
          }

          this.cleanup();
        }
      });
    }
  }

  private getConfig(): {
    projectId: string,
    apiKey: string
  } | undefined {
    const projectId = this.formGroup.controls['projectId'].value;
    const cmApiKey = this.formGroup.controls['cmApiKey'].value;

    if (!projectId) {
      this.error = 'Invalid project id';
      return;
    }

    if (!cmApiKey) {
      this.error = 'Invalid api key';
      return;
    }

    return {
      apiKey: cmApiKey,
      projectId: projectId
    };
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
