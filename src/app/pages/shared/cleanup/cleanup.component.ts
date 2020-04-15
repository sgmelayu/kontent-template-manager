import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ComponentDependencies } from '../../../../di';
import { BasePageComponent } from '../../../core/base-page.component';
import { CleanupConfirmComponent } from './cleanup-confirm.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cleanup.component.html',
})
export class CleanupComponent extends BasePageComponent implements OnInit {

  constructor(
    dependencies: ComponentDependencies,
    cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog) {
    super(dependencies, cdr);
  }

  openConfirmation(): void {
      const dialogRef = this.dialog.open(CleanupConfirmComponent, {
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

}
