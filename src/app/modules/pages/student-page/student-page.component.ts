import { Component } from '@angular/core';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from 'src/app/shared';

export const getStudentState = createFeatureSelector<StudentState>('student');
export const getStudents = createSelector(getStudentState, (state) => state.students);



@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {

}
