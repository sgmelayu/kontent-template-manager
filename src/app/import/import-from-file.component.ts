import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List } from 'immutable';
import { CloudError } from 'kentico-cloud-core';
import { FileSystemFileEntry, UploadEvent } from 'ngx-file-drop';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ComponentDependencies } from 'src/di';
import { IImportItem, IImportResult } from 'src/services';

import { BaseComponent } from '../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-from-file.component.html',
})
export class ImportFromFileComponent extends BaseComponent {

  public importCompleted: boolean = false;
  public formGroup: FormGroup;
  public error?: string;
  public importTriggered: boolean = false;
  private _processedItems: List<IImportItem> = List<IImportItem>([]);
  public file?: File;

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
      projectId: ['ede994d8-bb05-01b5-9c33-8b65e7372306', Validators.required],
      cmApiKey: ['eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Yjg1NmJmMTEyYTA0ODcwYjRiMDBjNGQ3OTZkZGUxNyIsImlhdCI6IjE1NTI2NDk3NjUiLCJleHAiOiIxODk4MjQ5NzY1IiwicHJvamVjdF9pZCI6ImVkZTk5NGQ4YmIwNTAxYjU5YzMzOGI2NWU3MzcyMzA2IiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.d5ynvZh06reXR2JRSR86Vp9jhFFqmX1mJlD_jzuHG84', Validators.required],
    });
  }

  handleImport(): void {
    const config = this.getConfig();

    if (config) {
      this.importTriggered = true;
      super.startLoading();
      super.detectChanges();

      super.subscribeToObservable(
        this.dependencies.importService.importFromFile({
          apiKey: config.apiKey,
          projectId: config.projectId,
          processItem: (item => {
            this._processedItems = this._processedItems.push(item);
            super.detectChanges();
          })
        }, config.file).pipe(
          map((importResult) => {
            super.stopLoading();
            this.importCompleted = true;
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
    for (const droppedFile of event.files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.file = file;
          super.detectChanges();
        });
      }
    }

  }


  private getConfig(): {
    projectId: string,
    apiKey: string,
    file: File
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

    if (!this.file) {
      this.error = 'File is not uploaded';
      return;
    }

    return {
      apiKey: cmApiKey,
      projectId: projectId,
      file: this.file
    };
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
