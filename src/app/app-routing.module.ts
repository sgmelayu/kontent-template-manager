import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CleanupComponent } from './cleanup/cleanup.component';
import { ExportComponent } from './export/export.component';
import { ImportComponent } from './import/import.component';
import { MasterLayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent, children: [
      { path: '', component: ImportComponent },
      { path: 'export', component: ExportComponent },
      { path: 'cleanup', component: CleanupComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
