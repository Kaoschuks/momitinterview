import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISubject, dummysubjects } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjects: Array<ISubject> = dummysubjects

  private subjectList$: BehaviorSubject<ISubject[]> = new BehaviorSubject<ISubject[]>(this.subjects);

  getSubjects(): Observable<ISubject[]> {
    return this.subjectList$.asObservable();
  }

  addSubject(subject: ISubject): Observable<void> {
    const arr = [...this.subjects]
    arr.push(subject);
    this.subjects = arr;
    this.updateSubjectList();
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  updateSubject(updatedSubject: ISubject): Observable<void> {
    const index: any = this.subjects.findIndex((s) => s.id === updatedSubject.id);
    if (index !== -1) {
      const arr = [...this.subjects]
      arr[index] = updatedSubject;
      this.subjects = arr;
      this.updateSubjectList();
    }
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  deleteSubject(subjectId: number): Observable<void> {
    this.subjects = this.subjects.filter((s) => s.id !== subjectId);
    this.updateSubjectList();
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  private updateSubjectList(): void {
    this.subjectList$.next([...this.subjects]);
  }
}