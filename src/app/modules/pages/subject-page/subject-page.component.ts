import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ISubject } from 'src/app/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubjectState, addSubject, deleteSubject, loadSubjects, updateSubject } from 'src/app/shared';

export const getSubjectState = createFeatureSelector<SubjectState>('subject');
export const getSubjects = createSelector(getSubjectState, (state) => state.subjects);


@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectPageComponent implements OnInit {

  subjectData!: ISubject
  subjects$!: Observable<ISubject[]>;
  store: Store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(loadSubjects());
    this.subjects$ = this.store.select(getSubjects);
  }
  
  updateSubjectData(subject: ISubject) {
    this.store.dispatch(updateSubject({
      subject: subject,
    }))
  }
  
  addSubjectData(subject: ISubject) {
    this.store.dispatch(addSubject({
      subject: subject,
    }))
  }
  
  deleteSubject(subject: ISubject) {
    this.store.dispatch(deleteSubject({ id: subject.id }));
  }
}
