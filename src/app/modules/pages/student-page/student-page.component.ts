import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { IStudent, ISubject } from 'src/app/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState, addStudent, deleteStudent, loadStudents, loadSubjects, updateStudent } from 'src/app/shared';
import { getSubjects } from '../subject-page/subject-page.component';

export const getStudentState = createFeatureSelector<StudentState>('student');
export const getStudents = createSelector(getStudentState, (state) => state.students);


@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentPageComponent implements OnInit{

  studentData!: IStudent
  students$!: Observable<IStudent[]>;
  subjects$!: Observable<ISubject[]>;
  store: Store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.students$ = this.store.select(getStudents);

    this.store.dispatch(loadSubjects());
    this.subjects$ = this.store.select(getSubjects);
  }
  
  updateStudentData(student: IStudent) {
    this.store.dispatch(updateStudent({
      student: student,
    }))
  }
  
  addStudentData(student: IStudent) {
    this.store.dispatch(addStudent({
      student: student,
    }))
  }

  
  deleteStudentData(subject: ISubject) {
    this.store.dispatch(deleteStudent({ id: subject.id }));
  }
}
