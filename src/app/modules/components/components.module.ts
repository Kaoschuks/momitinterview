import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentTableComponent } from './student/student-table/student-table.component';
import { SubjectFormComponent } from './school/subject-form/subject-form.component';
import { SubjectTableComponent } from './school/subject-table/subject-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const components: any = [
  SubjectFormComponent, SubjectTableComponent,

  StudentFormComponent, StudentTableComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsModule { }
