import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as subjectActions from 'src/app/shared/actions/subject.action';
import { SubjectService } from 'src/app/modules';

@Injectable()
export class SubjectEffects {

    private subjectService: SubjectService = inject(SubjectService);
    private actions$: Actions = inject(Actions);

  loadSubjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(subjectActions.loadSubjects),
      mergeMap(() =>
        this.subjectService.getSubjects().pipe(
          map((subjects) => subjectActions.loadSubjectsSuccess({ subjects })),
          catchError(() => of({ type: 'Error loading subjects' }))
        )
      )
    )
  );

  addSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(subjectActions.addSubject),
      mergeMap(({ subject }) =>
        this.subjectService.addSubject(subject).pipe(
          map(() => subjectActions.loadSubjects()),
          catchError(() => of({ type: 'Error adding subject' }))
        )
      )
    )
  );

  updateSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(subjectActions.updateSubject),
      mergeMap(({ subject }) =>
        this.subjectService.updateSubject(subject).pipe(
          map(() => subjectActions.loadSubjects()),
          catchError(() => of({ type: 'Error updating subject' }))
        )
      )
    )
  );

  deleteSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(subjectActions.deleteSubject),
      mergeMap(({ id }) =>
        this.subjectService.deleteSubject(id).pipe(
          map(() => subjectActions.loadSubjects()),
          catchError(() => of({ type: 'Error deleting subject' }))
        )
      )
    )
  );
}
