import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IImportSource, ImportService, ZipService } from '@kentico/kontent-backup-manager';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { previewHelper } from 'src/app/components/preview/preview-helper';
import { IDataPreviewWrapper } from 'src/app/components/preview/preview-models';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { BasePageComponent } from '../../core/base-page.component';
import { ConfirmationDialogComponent } from '../dialogs/confirmation-dialog.component';
import { LanguageVariantModels } from '@kentico/kontent-management';
import { IProjectCheck, ITemplate } from 'src/services';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

interface IVariantWithTitle {
    variant: LanguageVariantModels.ContentItemLanguageVariant;
    title: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './import-from-file.component.html'
})
export class ImportFromFileComponent extends BasePageComponent implements OnInit {
    public templateToImport?: ITemplate;
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

    public get importDataVersion(): string {
        return this.importData?.metadata.version ?? '';
    }

    public get mismatchVersionImport(): boolean {
        if (!this.importData) {
            return false;
        }

        if (this.importData.metadata.version !== this.kbmVersion) {
            return true;
        }

        return false;
    }

    public project?: IProjectCheck;

    public get canPrepareImport(): boolean {
        if (this.formGroup.invalid || !this.file) {
            return false;
        }

        if (!this.project) {
            return false;
        }

        return true;
    }

    public publishVariants: boolean = false;

    constructor(
        dependencies: ComponentDependencies,
        cdr: ChangeDetectorRef,
        private dialog: MatDialog,
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute
    ) {
        super(dependencies, cdr);

        this.formGroup = this.fb.group({
            projectId: ['', Validators.required],
            apiKey: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        super.setConfig({
            title: 'Import data',
            showDevMode: true
        });

        const packageUrl = this.activatedRoute.snapshot.queryParams.packageUrl;

        if (packageUrl) {
            this.initFromPackageUrl(packageUrl);
        }

        this.initForm();
    }

    importWithConfirm(): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '400px',
            data: {
                text: 'Are you sure to import selected data? This action is not reversible.'
            }
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (dialogRef.componentInstance.confirmed) {
                // confirmed
                this.handleImport();
            }
        });
    }

    clearFile(): void {
        super.resetErrors();
        this.file = undefined;
    }

    dropped(files: NgxFileDropEntry[]) {
        super.resetErrors();
        if (files.length !== 1) {
            super.setError('Exactly 1 file can be uploaded at a time');
            return;
        }

        const file = files[0];
        if (!file) {
            super.setError('Invalid file');
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

        (file.fileEntry as FileSystemFileEntry).file((xFile) => {
            this.file = xFile;
            super.markForCheck();
        });
    }

    handleManualInputOnChange(change: Event): void {
        this.file = undefined;
        super.resetErrors();
        if (change.target) {
            const fileList = (change.target as any)['files'] as FileList;

            if (fileList.length > 0) {
                this.file = fileList[0];
            }
            super.markForCheck();
        }
    }

    async handleImport(): Promise<void> {
        super.resetErrors();
        if (this.formGroup.invalid || this.processsing || !this.importData) {
            return;
        }

        const projectId = this.formGroup.controls['projectId'].value;
        const apiKey = this.formGroup.controls['apiKey'].value;

        const importedVariants: IVariantWithTitle[] = [];

        this.processsing = true;
        super.markForCheck();

        const importService = new ImportService({
            enableLog: this.isDevMode(),
            fixLanguages: true,
            projectId: projectId,
            enablePublish: this.publishVariants,
            apiKey: apiKey,
            onImport: (item) => {
                this.dependencies.processingService.addProcessedItem(item);

                if (
                    item.type === 'languageVariant' &&
                    item.data instanceof LanguageVariantModels.ContentItemLanguageVariant
                ) {
                    importedVariants.push({
                        title: item.title,
                        variant: item.data
                    });
                }
            }
        });

        await super.runWithErrorHandlerAsync(async () => {
            if (!this.importData) {
                return;
            }

            await importService.importAsync(this.importData);

            this.success = true;
            this.processsing = false;

            super.markForCheck();
        });
    }

    async handlePreview(): Promise<void> {
        if (!this.canPrepareImport) {
            return;
        }

        // track gEvent
        super.trackEvent({
            eventCategory: 'button',
            eventAction: 'prepare-import-from-file'
        });

        this.processsing = true;
        super.markForCheck();

        const zipService = new ZipService({
            context: 'browser',
            enableLog: this.isDevMode()
        });

        const data = await zipService.extractZipAsync(this.file);
        this.importData = data;

        this.processsing = false;
        super.markForCheck();
    }

    private initFromPackageUrl(packageUrl: string): void {
        this.processsing = true;
        super.subscribeToObservable(
            this.dependencies.templatesService.getTemplates().pipe(
                switchMap((templates) => {
                    const templateToPrefill = templates.find((m) => m.exportPackageUrl === packageUrl);

                    if (templateToPrefill) {
                        this.templateToImport = templateToPrefill;

                        return this.dependencies.templatesService
                            .getTemplateFile(templateToPrefill.exportPackageUrl)
                            .pipe(
                                map((file) => {
                                    this.file = file;
                                    super.markForCheck();
                                })
                            );
                    }

                    return of(undefined);
                }),
                map((result) => {
                    this.processsing = false;
                    super.markForCheck();
                })
            )
        );
    }

    private initForm(): void {
        super.subscribeToObservable(
            this.formGroup.valueChanges.pipe(
                switchMap((form) => {
                    const projectId = form.projectId;
                    const apiKey = form.apiKey;

                    return this.dependencies.projectService.validateProject({
                        projectId: projectId,
                        apiKey: apiKey
                    });
                }),
                map((result) => {
                    this.project = result;
                    super.markForCheck();
                })
            )
        );

        const defaultProjectId = environment.defaultProjects.targetProjectId;
        const defaultApiKey = environment.defaultProjects.targetProjectApiKey;

        this.formGroup.setValue({ projectId: defaultProjectId, apiKey: defaultApiKey });
    }
}
