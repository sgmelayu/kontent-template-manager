import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List } from 'immutable';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ComponentDependencies } from 'src/di';
import { IImportItem, IImportResult } from 'src/services';

import { BaseComponent } from '../core/base.component';
import { environment } from 'src/environments/environment';

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
      sourceProjectId: [environment.defaultProjects.sourceProjectId, Validators.required],
      targetProjectId: [environment.defaultProjects.targetProjectId, Validators.required],
      targetProjectCmApiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
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

    super.subscribeToObservable(this.dependencies.importService.importFromProject({
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
        super.detectChanges();
        return throwError(error);
      })
    ))
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
