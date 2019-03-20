import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List } from 'immutable';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ComponentDependencies } from 'src/di';
import { IImportItem, IImportResult } from 'src/services';

import { BaseComponent } from '../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-from-project.component.html',
})
export class ImportFromProjectComponent extends BaseComponent {

  public importCompleted: boolean = false;
  public formGroup: FormGroup;
  public error?: string;
  public importTriggered: boolean = false;
  private _processedItems: List<IImportItem> = List<IImportItem>([]);

  public get processedItems(): IImportItem[] {
    return this._processedItems.toArray();
  }

  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }

  public importResult?: IImportResult | undefined = undefined;

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      sourceProjectId: ['f249eb83-18fd-01b8-2db7-c561bcb1ed1e', Validators.required],
      targetProjectId: ['ede994d8-bb05-01b5-9c33-8b65e7372306', Validators.required],
      targetProjectCmApiKey: ['eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Yjg1NmJmMTEyYTA0ODcwYjRiMDBjNGQ3OTZkZGUxNyIsImlhdCI6IjE1NTI2NDk3NjUiLCJleHAiOiIxODk4MjQ5NzY1IiwicHJvamVjdF9pZCI6ImVkZTk5NGQ4YmIwNTAxYjU5YzMzOGI2NWU3MzcyMzA2IiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.d5ynvZh06reXR2JRSR86Vp9jhFFqmX1mJlD_jzuHG84', Validators.required],
    });
  }

  handleImport(): void {
    this.resetErrors();

    this.importTriggered = true;

    if (!this.formGroup.valid) {
      this.error = 'Form is not valid';
      return;
    }

    const sourceProjectId = this.formGroup.controls['sourceProjectId'].value;
    const targetProjectId = this.formGroup.controls['targetProjectId'].value;
    const targetProjectCmApiKey = this.formGroup.controls['targetProjectCmApiKey'].value;

    super.startLoading();

    super.subscribeToObservable(this.dependencies.importService.import({
      sourceProjectId: sourceProjectId,
      targetProjectId: targetProjectId,
      targetProjectCmApiKey: targetProjectCmApiKey,
      processItem: (item) => {
        this._processedItems = this._processedItems.push(item);
        super.detectChanges();
      }
    }).pipe(

      map((importResult) => {
        super.stopLoading();
        this.importCompleted = true;
        this.importResult = importResult;
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
    ))
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
