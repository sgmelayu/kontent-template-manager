import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterLayoutComponent } from './layout';
import { ExportComponent } from './pages/cm/export/export.component';
import { ImportFromFileComponent } from './pages/cm/import/import-from-file.component';
import { ImportFromProjectComponent } from './pages/cm/import/import-from-project.component';
import { MigrateContentItemsComponent } from './pages/cm/import/migrate-content-items.component';
import { CleanupComponent } from './pages/shared/cleanup/cleanup.component';

const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent, children: [
      { path: '', component: ImportFromProjectComponent },
      { path: 'export', component: ExportComponent },
      { path: 'cleanup', component: CleanupComponent },
      { path: 'import-from-project', component: ImportFromProjectComponent },
      { path: 'import-from-file', component: ImportFromFileComponent },
      { path: 'migrate-content-items', component: MigrateContentItemsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
