import { createAction, props } from '@ngrx/store';
import { IStudent } from 'src/app/core';

export const loadStudents = createAction('[Student] Load Students');
export const loadStudentsSuccess = createAction('[Student] Load Students Success', props<{ students: IStudent[] }>());
export const addStudent = createAction('[Student] Add Student', props<{ student: IStudent }>());
export const updateStudent = createAction('[Student] Update Student', props<{ student: IStudent }>());
export const deleteStudent = createAction('[Student] Delete Student', props<{ id: number }>());
