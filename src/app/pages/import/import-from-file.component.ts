import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IImportSource, ImportService } from '@kentico/kontent-backup-manager';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { previewHelper } from 'src/app/components/preview/preview-helper';
import { IDataPreviewWrapper } from 'src/app/components/preview/preview-models';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { BasePageComponent } from '../../core/base-page.component';
import { ConfirmationDialogComponent } from '../dialogs/confirmation-dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './import-from-file.component.html',
})
export class ImportFromFileComponent extends BasePageComponent implements OnInit {

  public formGroup: FormGroup;
  public success: boolean = false;
  public file?: File;
  public importData?: IImportSource;

  public get importPreviewData(): IDataPreviewWrapper | undefined {
    if (!this.importData) {
      return undefined;
    }
    return previewHelper.convertFromImportData(this.importData);
  }

  public get displayInconsistenciesNotice(): boolean {
    if (!this.importData) {
      return false;
    }
    if (this.importData.validation.type_issues.length || this.importData.validation.variant_issues.length) {
      return true;
    }
    return false;
  }

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private fb: FormBuilder) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.targetProjectId, Validators.required],
      apiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
    });

  }

  ngOnInit(): void {
    super.setTitle('Import project data');
  }

  importWithConfirm(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        text: 'Are you sure to import selected data? This action is not reversible.'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.confirmed) {
        // confirmed
        this.handleImport();
    }
  })
}

  dropped(files: NgxFileDropEntry[]) {
    if (files.length !== 1) {
      super.setError('Exactly 1 file can be uploaded at a time');
      return;
    }

    const file = files[0];
    
    if (!file) {
      super.setError('Invalid file')
      return;
    }

    if (!file.fileEntry.isFile) {
      super.setError('Dropped item is not a file');
      return;
    }

    if (!file.relativePath.endsWith('.zip')) {
      super.setError('File has to be zip package');
      return;
    }

    (file.fileEntry as FileSystemFileEntry).file(file => {
      this.file = file;
      super.markForCheck();
  });
  }

  handleManualInputOnChange(change: Event): void {
    this.file = undefined;
    if (change.target) {
      const fileList = (change.target as any)['files'] as FileList;

      if (fileList.length > 0) {
        this.file = fileList[0];
      }
      super.markForCheck();
    }
  }

  async handleImport(): Promise<void> {
    if (this.formGroup.invalid || this.processsing || !this.importData) {
      return;
    }

    this.processsing = true;
    super.markForCheck();

    const importService = new ImportService({
      enableLog: true,
      fixLanguages: true,
      projectId: this.formGroup.controls['projectId'].value,
      apiKey:  this.formGroup.controls['apiKey'].value,
      onImport: item => {
          this.dependencies.processingService.addProcessedItem(item);
        }
      });

      await super.runWithErrorHandlerAsync(async () => {
        if (!this.importData) {
          return;
        }
        const data = await importService.importAsync(this.importData);
        this.success = true;
        this.processsing = false;

        this.dependencies.processingService.addProcessedItem({
          data: {},
          title: 'Finished',
          type: 'status'
        });
        super.markForCheck();
      });
  }

  async handlePreview(): Promise<void> {
      // track gEvent
      super.trackEvent({
        eventCategory: 'button',
        eventAction: 'prepare-import-from-file',
      });

      this.processsing = true;
      super.markForCheck();

      const data = await this.dependencies.templateManagerZipService.extractZipAsync(this.file, true);
      this.importData = data;

      this.processsing = false;
      super.markForCheck();
    }
  }

