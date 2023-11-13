import { createAction, props } from '@ngrx/store';
import { ISubject } from 'src/app/core';

export const loadSubjects = createAction('[Subject] Load Subjects');
export const loadSubjectsSuccess = createAction('[Subject] Load Subjects Success', props<{ subjects: ISubject[] }>());
export const addSubject = createAction('[Subject] Add Subject', props<{ subject: ISubject }>());
export const updateSubject = createAction('[Subject] Update Subject', props<{ subject: ISubject }>());
export const deleteSubject = createAction('[Subject] Delete Subject', props<{ id: number }>());
