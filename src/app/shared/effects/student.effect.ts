import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { StudentService } from 'src/app/modules';
import * as studentActions from 'src/app/shared/actions/student.action';

@Injectable()
export class StudentEffects {
  private studentService: StudentService = inject(StudentService);
  private actions$: Actions = inject(Actions);

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentActions.loadStudents),
      mergeMap(() =>
        this.studentService.getStudents().pipe(
          map((students) => studentActions.loadStudentsSuccess({ students })),
          catchError(() => of({ type: 'Error loading students' }))
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentActions.addStudent),
      mergeMap(({ student }) =>
        this.studentService.addStudent(student).pipe(
          map(() => studentActions.loadStudents()),
          catchError(() => of({ type: 'Error adding student' }))
        )
      )
    )
  );

  updateStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentActions.updateStudent),
      mergeMap(({ student }) =>
        this.studentService.updateStudent(student).pipe(
          map(() => studentActions.loadStudents()),
          catchError(() => of({ type: 'Error updating student' }))
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentActions.deleteStudent),
      mergeMap(({ id }) =>
        this.studentService.deleteStudent(id).pipe(
          map(() => studentActions.loadStudents()),
          catchError(() => of({ type: 'Error deleting student' }))
        )
      )
    )
  );

}
