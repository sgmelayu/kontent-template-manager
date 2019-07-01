import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { IImportData, IImportFromProjectWithDeliveryConfig, IImportResult } from '../../../services';
import { previewHelper } from '../../components/preview/preview-helper';
import { IDataPreviewWrapper } from '../../components/preview/preview-models';
import { BasePageComponent } from '../../core/base-page.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-from-project.component.html',
})
export class ImportFromProjectComponent extends BasePageComponent {

  public formGroup: FormGroup;
  public error?: string;
  public importData?: IImportData;
  public step: 'initial' | 'preview' | 'importing' | 'completed' = 'initial'

  public get importPreviewData(): IDataPreviewWrapper | undefined {
    if (!this.importData) {
      return undefined;
    }
    return previewHelper.convertFromImportData(this.importData);
  }

  public get resultPreviewData(): IDataPreviewWrapper | undefined {
    if (!this.importResult) {
      return undefined;
    }
    return previewHelper.convertFromImportResult(this.importResult);
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
      publishAllItems: [true],
      depth: [environment.defaultProjects.depth, Validators.required],
      sourceProjectSecureApiKey: [''],
    });

    // init stored values
    if (environment.production) {
      const storedData = dependencies.importDataStorageService.getImportData();
      if (storedData) {
        this.formGroup.controls['targetProjectId'].setValue(storedData.targetProjectId);
        this.formGroup.controls['targetProjectCmApiKey'].setValue(storedData.targetProjectApiKey);
        this.formGroup.controls['publishAllItems'].setValue(storedData.publishContentItems);
        this.formGroup.controls['sourceProjectId'].setValue(storedData.sourceProjectId);
        this.formGroup.controls['languages'].setValue(storedData.sourceProjectLanguages);
        this.formGroup.controls['depth'].setValue(storedData.depth || environment.defaultProjects.depth);
        this.formGroup.controls['sourceProjectSecureApiKey'].setValue(storedData.sourceProjectSecureApiKey);
      }
    }
  }

  handlePreview(): void {
    const config = this.getConfig();

    if (config) {
      // track gEvent
      super.trackEvent({
        eventCategory: 'button',
        eventAction: 'prepare-import-from-project',
      });

      this.resetErrors();
      this.step = "preview";
      super.startLoading();
      super.detectChanges();

      super.subscribeToObservable(
        this.dependencies.exportService.getImportDataWithDeliveryApi(config)
          .pipe(
            map((importData) => {
              this.importData = importData;
              super.stopLoading();
              super.detectChanges();
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
          )
      )
    }
  }

  handleImport(): void {
    this.resetErrors();

    if (!this.formGroup.valid) {
      this.error = 'Form is not valid';
      return;
    }

    const config = this.getConfig();

    if (config && this.importData) {
      // track gEvent
      super.trackEvent({
        eventCategory: 'button',
        eventAction: 'import-from-project',
      });

      this.step = 'importing';

      super.startLoading();

      super.subscribeToObservable(this.dependencies.importService.import(this.importData, config).pipe(

        map((importResult) => {
          super.stopLoading();
          this.step = 'completed';
          this.importResult = importResult;
          super.detectChanges();
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
      ));
    }
  }

  private getConfig(): IImportFromProjectWithDeliveryConfig | undefined {
    const sourceProjectId = this.formGroup.controls['sourceProjectId'].value;
    const targetProjectId = this.formGroup.controls['targetProjectId'].value;
    const targetProjectCmApiKey = this.formGroup.controls['targetProjectCmApiKey'].value;
    const publishAllItems = this.formGroup.controls['publishAllItems'].value;
    const languages = this.parsedLanguages;
    const depth = +this.formGroup.controls['depth'].value;
    const sourceProjectSecureApiKey = this.formGroup.controls['sourceProjectSecureApiKey'].value;

    if (!sourceProjectId) {
      this.error = 'Invalid source project id';
      return;
    }

    if (!targetProjectId) {
      this.error = 'Invalid target project id';
      return;
    }

    if (!targetProjectCmApiKey) {
      this.error = 'Invalid api key';
      return;
    }
    
    if (!depth) {
      this.error = 'Invalid depth';
      return;
    }

    // store values
    this.dependencies.importDataStorageService.updateImportData({
      targetProjectApiKey: targetProjectCmApiKey,
      publishContentItems: publishAllItems,
      targetProjectId: targetProjectId,
      sourceProjectId: sourceProjectId,
      sourceProjectLanguages: languages,
      depth: depth,
      sourceProjectSecureApiKey: sourceProjectSecureApiKey
    });

    return <IImportFromProjectWithDeliveryConfig>{
      languages: languages,
      publishAllItems: publishAllItems,
      sourceProjectId: sourceProjectId,
      targetProjectCmApiKey: targetProjectCmApiKey,
      targetProjectId: targetProjectId,
      depth: depth,
      sourceProjectSecureApiKey: sourceProjectSecureApiKey
    };
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
