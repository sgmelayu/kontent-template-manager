import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ComponentDependencies } from '../../../di';
import { BaseComponent } from '../../core/base.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent extends BaseComponent {

  public confirmed: boolean = false;
  public text: string = 'Are you sure to continue?';

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef) {
    super(dependencies, cdr);
    if (data.text) {
      this.text = data.text;
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.confirmed = true;
    this.close();
  }
}
