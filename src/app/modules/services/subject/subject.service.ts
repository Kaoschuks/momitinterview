import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISubject } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjects: ISubject[] = [
    { id: 1, name: 'Math', teacher: 'Mr. Smith' },
    { id: 2, name: 'Science', teacher: 'Ms. Johnson' },
    { id: 3, name: 'History', teacher: 'Mr. Davis' },
  ];

  private subjectList$: BehaviorSubject<ISubject[]> = new BehaviorSubject<ISubject[]>(this.subjects);

  getSubjects(): Observable<ISubject[]> {
    return this.subjectList$.asObservable();
  }

  addSubject(subject: ISubject): Observable<void> {
    this.subjects.push(subject);
    this.updateSubjectList();
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  updateSubject(updatedSubject: ISubject): Observable<void> {
    const index = this.subjects.findIndex((s) => s.id === updatedSubject.id);
    if (index !== -1) {
      this.subjects[index] = updatedSubject;
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