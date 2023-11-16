import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from './subject/subject.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './students/students.service';

export const services = [
  SubjectService, StudentService
]

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: services,
})
export class ServicesModule { }
