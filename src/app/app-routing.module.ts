import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasterLayoutComponent } from './layout';
import { ExportComponent } from './pages/export/export.component';
import { LimitationsComponent } from './pages/faq/limitations.component';
import { CleanupComponent } from './pages/cleanup/cleanup.component';
import { TemplateListComponent } from './pages/templates/template-list.component';
import { ImportFromFileComponent } from './pages/import/import-from-file.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: MasterLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'export', component: ExportComponent },
      { path: 'import', component: ImportFromFileComponent },
      { path: 'cleanup', component: CleanupComponent },
      { path: 'templates', component: TemplateListComponent },
      { path: 'faq', component: LimitationsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
