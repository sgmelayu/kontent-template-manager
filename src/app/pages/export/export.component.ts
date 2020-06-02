import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExportService, ZipService } from '@kentico/kontent-backup-manager';
import { saveAs } from 'filesaver.js';

import { ComponentDependencies } from '../../../di';
import { environment } from '../../../environments/environment';
import { BasePageComponent } from '../../core/base-page.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './export.component.html'
})
export class ExportComponent extends BasePageComponent implements OnInit {
    public formGroup: FormGroup;
    public success: boolean = false;

    constructor(dependencies: ComponentDependencies, cdr: ChangeDetectorRef, private fb: FormBuilder) {
        super(dependencies, cdr);

        this.formGroup = this.fb.group({
            projectId: [environment.defaultProjects.sourceProjectId, Validators.required],
            apiKey: [environment.defaultProjects.sourceProjectApiKey, Validators.required]
        });
    }

    ngOnInit(): void {
        super.setConfig({
            title: 'Export project data',
            showDevMode: true
        });
    }

    handleDownloadFile(): void {}

    async handleExport(): Promise<void> {
        await super.runWithErrorHandlerAsync(async () => {
            if (this.formGroup.invalid || this.processsing) {
                return;
            }

            this.processsing = true;
            super.markForCheck();

            super.trackEvent({
                eventCategory: 'button',
                eventAction: 'export'
            });

            const exportService = new ExportService({
                projectId: this.formGroup.controls['projectId'].value,
                apiKey: this.formGroup.controls['apiKey'].value,
                onExport: (item) => {
                    this.dependencies.processingService.addProcessedItem(item);
                }
            });

            const exportData = await exportService.exportAllAsync();

            const zipService = new ZipService({
                context: 'browser',
                enableLog: this.isDevMode()
            });

            const fileName = this.getDefaultBackupFilename() + '.zip';

            // create zip file
            const zipFile = await zipService.createZipAsync(exportData);

            this.processsing = false;
            this.success = true;
            super.markForCheck();

            // download file
            saveAs(zipFile, fileName);
        });
    }

    private getDefaultBackupFilename(): string {
        const date = new Date();
        return `kontent-backup-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
     }
}
