import { createReducer, on } from '@ngrx/store';
import { ISubject } from 'src/app/core';
import * as subjectActions from 'src/app/shared/actions/subject.action';

export interface SubjectState {
  subjects: ISubject[];
}

export const initialState: SubjectState = {
  subjects: [],
};

export const subjectReducer = createReducer(
  initialState,
  on(subjectActions.loadSubjectsSuccess, (state, { subjects }) => ({ ...state, subjects })),
);
