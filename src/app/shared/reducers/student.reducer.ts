import { createReducer, on } from '@ngrx/store';
import { IStudent } from 'src/app/core';
import * as studentActions from 'src/app/shared/actions/student.action';

export interface StudentState {
  students: IStudent[];
}

export const initState: StudentState = {
  students: [],
};

export const studentReducer = createReducer(
  initState,
  on(studentActions.loadStudentsSuccess, (state, { students }) => ({ ...state, students })),
);
