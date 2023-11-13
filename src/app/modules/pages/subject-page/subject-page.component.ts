import { Component, OnInit, inject } from '@angular/core';
import { SubjectService } from 'src/app/modules';
import { ISubject } from 'src/app/core';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit {

  public subjects: ISubject[] = [];
  public subjectService: SubjectService = inject(SubjectService);

  ngOnInit(): void {
    this.getSubjects();
  }
  
  getSubjects() {
    this.subjects = this.subjectService.getSubjects();
  }
  
  deleteSubject(subject: ISubject) {
    this.subjectService.deleteSubject(subject.id);
    this.getSubjects()
  }
}
