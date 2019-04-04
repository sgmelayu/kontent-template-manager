import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComponentDependencies } from '../../di';
import { environment } from '../../environments/environment';
import { IImportResult } from '../../services';
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

  public get languagesWarningMessage(): string | undefined {
    if (this.parsedLanguages.length === 0) {
      return undefined;
    }

    const languagesListHtml = `<ul>${this.parsedLanguages.map(m => `<li>${m}</li>`).join('')}</ul>`;
    return `In order for import to work, make sure that your target project contains languages with following codenames: ${languagesListHtml}`;
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
      languages: [environment.defaultProjects.languages],
      targetProjectCmApiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
      sourceProjectCmApiKey: [environment.defaultProjects.sourceProjectApiKey, Validators.required],
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
    const sourceProjectCmApiKey = this.formGroup.controls['sourceProjectCmApiKey'].value;
    const languages = this.parsedLanguages;

    super.startLoading();

    super.subscribeToObservable(this.dependencies.importService.importFromProject({
      languages: languages,
      sourceProjectId: sourceProjectId,
      targetProjectId: targetProjectId,
      targetProjectCmApiKey: targetProjectCmApiKey,
      sourceProjectCmApiKey: sourceProjectCmApiKey
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
