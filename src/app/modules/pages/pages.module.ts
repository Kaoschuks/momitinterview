import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { StudentPageComponent } from './student-page/student-page.component';

export const pages: any = [
  SubjectPageComponent, StudentPageComponent
]

@NgModule({
  declarations: pages,
  exports: pages,
  imports: [CommonModule, ComponentsModule, PagesRoutingModule],
})
export class PagesModule { }
