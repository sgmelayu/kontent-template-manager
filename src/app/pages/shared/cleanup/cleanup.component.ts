import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CleanService } from '@kentico/kontent-backup-manager';
import { environment } from 'src/environments/environment';

import { ComponentDependencies } from '../../../../di';
import { BasePageComponent } from '../../../core/base-page.component';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cleanup.component.html',
})
export class CleanupComponent extends BasePageComponent implements OnInit {

  public formGroup: FormGroup;
  public success: boolean = false;

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    super(dependencies, cdr);

    this.formGroup = this.fb.group({
      projectId: [environment.defaultProjects.targetProjectId, Validators.required],
      apiKey: [environment.defaultProjects.targetProjectApiKey, Validators.required],
    });

  }

  openConfirmation(): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (dialogRef.componentInstance.confirmed) {
      }
    })
  }

  ngOnInit(): void {
    super.setTitle('Clean');
  }

  async deleteWithConfirm(): Promise<void> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        text: 'Are you sure to delete all data in given project? This action is not reversible.'
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (dialogRef.componentInstance.confirmed) {
        // confirmed
        await this.handleDelete();
    }
  });
}

  private async handleDelete(): Promise<void> {
    await super.runWithErrorHandlerAsync(async () => {
    if (this.formGroup.invalid || this.processsing) {
      return;
    }

    this.processsing = true;
    super.markForCheck();

    super.trackEvent({
      eventCategory: 'button',
      eventAction: 'export',
    });

    const cleanService = new CleanService({
      projectId: this.formGroup.controls['projectId'].value,
      apiKey:  this.formGroup.controls['apiKey'].value,
      onDelete: item => {
          this.dependencies.processingService.addProcessedItem(item);
      }
  });

   await cleanService.cleanAllAsync();

    this.dependencies.processingService.addProcessedItem({
      data: {},
      title: 'Finished',
      type: 'status'
    });

    this.processsing = false;
    this.success = true;
    super.markForCheck();
  });
  }
}
