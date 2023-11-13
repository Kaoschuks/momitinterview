import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subjects',
  },
  {
    path: 'subjects',
    component: SubjectPageComponent,
  },
  {
    path: 'students',
    component: StudentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
