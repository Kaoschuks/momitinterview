import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectPageComponent } from './subject-page/subject-page.component';

const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subjects',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
