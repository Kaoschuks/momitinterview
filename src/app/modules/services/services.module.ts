import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from './subject/subject.service';
import { HttpClientModule } from '@angular/common/http';

export const services = [
  SubjectService
]

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: services,
})
export class ServicesModule { }
