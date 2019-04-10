import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudError } from 'kentico-cloud-core';
import { FileSystemFileEntry, UploadEvent } from 'ngx-file-drop';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { IImportData, IImportFromFileConfig, IImportResult } from '../../../services';
import { previewHelper } from '../../components/preview/preview-helper';
import { IDataPreviewWrapper } from '../../components/preview/preview-models';
import { BaseComponent } from '../../core/base.component';
import { zipHelper } from '../../../utilities';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-from-file.component.html',
})
export class ImportFromFileComponent extends BaseComponent {

  public formGroup: FormGroup;
  public error?: string;
  public file?: File;
  public importData?: IImportData;

  public step: 'initial' | 'preview' | 'importing' | 'completed' = 'initial';

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
    return this.formGroup.valid && (this.file ? true : false);
  }

  public importResult?: IImportResult | undefined = undefined;

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.targetProjectId, Validators.required],
      cmApiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
      publishAllItems: [true],
    });
  }

  handlePreview(): void {
    const config = this.getConfig();

    if (config) {
      this.resetErrors();
      this.step = "preview";
      super.startLoading();
      super.detectChanges();

      super.subscribeToObservable(
        this.dependencies.exportService.getImportDataFromFile(config)
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
    const config = this.getConfig();

    if (config && this.importData) {
      this.resetErrors();
      this.step = 'importing';
      super.startLoading();
      super.detectChanges();

      super.subscribeToObservable(
        this.dependencies.importService.import(this.importData, config).pipe(
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
        )
      )
    }
  }

  public dropped(event: UploadEvent) {
    if (!event.files) {
      this.error = 'Invalid file'
      super.detectChanges();
      return;
    }

    if (event.files.length > 1) {
      this.error = 'Only 1 file can be uploaded at a time';
      super.detectChanges();
      return;
    }

    for (const droppedFile of event.files) {
      // Is it a file?
      if (!droppedFile.fileEntry.isFile) {
        this.error = 'Dropped item is not a file';
        super.detectChanges();
        return;
      }

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (!zipHelper.getZipFileTypes().map(m => m.toLowerCase()).includes(file.type.toLowerCase())) {
            this.error = 'File has to be zip package';
            super.detectChanges();
            return;
          }
          this.file = file;
          super.detectChanges();
        });
      }
    }

  }


  private getConfig(): IImportFromFileConfig | undefined {
    const projectId = this.formGroup.controls['projectId'].value;
    const cmApiKey = this.formGroup.controls['cmApiKey'].value;
    const publishAllItems = this.formGroup.controls['publishAllItems'].value;

    if (!projectId) {
      this.error = 'Invalid project id';
      return;
    }

    if (!cmApiKey) {
      this.error = 'Invalid api key';
      return;
    }

    if (!this.file) {
      this.error = 'File is not uploaded';
      return;
    }

    return <IImportFromFileConfig> {
      apiKey: cmApiKey,
      projectId: projectId,
      file: this.file,
      publishAllItems: publishAllItems,
    };
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
