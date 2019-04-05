import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CloudError } from 'kentico-cloud-core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ComponentDependencies } from '../../../../di';
import { environment } from '../../../../environments/environment';
import { ICleanupData } from '../../../../services';
import { BaseComponent } from '../../../core/base.component';
import { CleanupConfirmComponent } from './cleanup-confirm.component';

interface ICleanupItem {
  type: 'Content type' | 'Content item' | 'Asset' | 'Taxonomy',
  name: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cleanup.component.html',
})
export class CleanupComponent extends BaseComponent {

  public cleanupCompleted: boolean = false;
  public cleanupPrepared: boolean = false;
  public formGroup: FormGroup;
  public error?: string;
  public cleanupData?: ICleanupData;

  public cleanupItems?: ICleanupItem[];

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
      projectId: [environment.defaultProjects.targetProjectId, Validators.required],
      cmApiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
    });
  }

  prepareCleanup(): void {
    const config = this.getConfig();
    if (config) {
      this.prepareCleanupData(config.projectId, config.apiKey);
    }
  }

  openConfirmation(): void {
    this.resetErrors();

    const config = this.getConfig();

    if (config) {
      const dialogRef = this.dialog.open(CleanupConfirmComponent, {
        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (dialogRef.componentInstance.confirmed) {

          if (!this.cleanupData) {
            throw Error(`Invalid cleanup data`);
          }

          this.cleanupProject(config.projectId, config.apiKey, this.cleanupData);
        }
      });
    }
  }

  private getCleanupItems(cleanupData: ICleanupData): ICleanupItem[] {
    const items: ICleanupItem[] = [];

    items.push(...cleanupData.contentItems.map(m => {
      return <ICleanupItem>{
        type: "Content item",
        name: m.codename
      }
    }));

    items.push(...cleanupData.contentTypes.map(m => {
      return <ICleanupItem>{
        type: "Content type",
        name: m.system.codename
      }
    }));

    items.push(...cleanupData.taxonomies.map(m => {
      return <ICleanupItem>{
        type: "Taxonomy",
        name: m.system.codename
      }
    }));

    items.push(...cleanupData.assets.map(m => {
      return <ICleanupItem>{
        type: "Asset",
        name: m.fileName
      }
    }));

    return items;
  }

  private getConfig(): {
    projectId: string,
    apiKey: string
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

    return {
      apiKey: cmApiKey,
      projectId: projectId
    };
  }

  private prepareCleanupData(projectId: string, apiKey: string): void {
    super.startLoading();
    super.detectChanges();

    super.subscribeToObservable(
      this.dependencies.cleanupService.prepareCleanup(projectId, apiKey).pipe(
        map((cleanupData) => {
          this.cleanupData = cleanupData;
          this.cleanupPrepared = true;
          this.cleanupItems = this.getCleanupItems(cleanupData);
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

          // cleanup data because something might have been deleted already and same item
          // cannot be deleted twice
          this.cleanupData = undefined;
          this.cleanupItems = undefined;

          return throwError(error);
        })
      )
    );
  }

  private cleanupProject(projectId: string, apiKey: string, cleanupData: ICleanupData): void {
    super.startLoading();
    super.detectChanges();

    super.subscribeToObservable(
      this.dependencies.cleanupService.cleanupProject(projectId, apiKey, cleanupData).pipe(
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

          // cleanup data because something might have been deleted already and same item
          // cannot be deleted twice
          this.cleanupData = undefined;
          this.cleanupItems = undefined;

          return throwError(error);
        })
      )
    );
  }

  private resetErrors(): void {
    this.error = undefined;
  }
}
