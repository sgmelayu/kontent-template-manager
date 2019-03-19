import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ComponentDependencies } from 'src/di';

import { BaseComponent } from '../core/base.component';
import { CleanupConfirmComponent } from './cleanup-confirm.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cleanup.component.html',
})
export class CleanupComponent extends BaseComponent {

  public cleanupCompleted: boolean = false;
  public formGroup: FormGroup;
  public error?: string;

  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: ['ede994d8-bb05-01b5-9c33-8b65e7372306', Validators.required],
      cmApiKey: ['eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Yjg1NmJmMTEyYTA0ODcwYjRiMDBjNGQ3OTZkZGUxNyIsImlhdCI6IjE1NTI2NDk3NjUiLCJleHAiOiIxODk4MjQ5NzY1IiwicHJvamVjdF9pZCI6ImVkZTk5NGQ4YmIwNTAxYjU5YzMzOGI2NWU3MzcyMzA2IiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.d5ynvZh06reXR2JRSR86Vp9jhFFqmX1mJlD_jzuHG84', Validators.required],
    });
  }

  openConfirmation(): void {
    this.resetErrors();

    const dialogRef = this.dialog.open(CleanupConfirmComponent, {
      width: '400px',
      data: {}
    });

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

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.confirmed) {
        this.cleanupProject(projectId, cmApiKey);
      }
    });
  }

  private cleanupProject(projectId: string, apiKey: string): void {
    super.startLoading();
    super.detectChanges();

    super.subscribeToObservable(
      this.dependencies.cleanupService.cleanupProject(projectId, apiKey).pipe(
        map(() => {
          super.stopLoading();
          this.cleanupCompleted = true;
          super.detectChanges();
        }),
        catchError((error) => {
          super.stopLoading();
          if (error instanceof CloudError) {
            this.error = error.message;
          } else {
            this.error = 'Import failed. See console for error details.';
          }
          return throwError(error);
        })
      )
    );
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
