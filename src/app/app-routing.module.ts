import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterLayoutComponent } from './layout';
import { ExportComponent } from './pages/export/export.component';
import { ImportFromFileComponent } from './pages/import/import-from-file.component';
import { ImportFromProjectComponent } from './pages/import/import-from-project.component';
import { MigrateContentItemsComponent } from './pages/import/migrate-content-items.component';
import { CleanupComponent } from './pages/shared/cleanup/cleanup.component';
import { TemplateListComponent } from './pages/templates/template-list.component';

const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent, children: [
      { path: '', component: ImportFromProjectComponent },
      { path: 'export', component: ExportComponent },
      { path: 'cleanup', component: CleanupComponent },
      { path: 'import-from-project', component: ImportFromProjectComponent },
      { path: 'import-from-file', component: ImportFromFileComponent },
      { path: 'migrate-content-items', component: MigrateContentItemsComponent },
      { path: 'templates', component: TemplateListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
