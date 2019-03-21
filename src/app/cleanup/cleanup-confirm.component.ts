import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ComponentDependencies } from '../../di';
import { BaseComponent } from '../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cleanup-confirm.component.html',
})
export class CleanupConfirmComponent extends BaseComponent {

  public confirmed: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CleanupConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
  }

  close(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.confirmed = true;
    this.close();
  }
}
