import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStudent, dummystudents } from 'src/app/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: IStudent[] = dummystudents

  private studentList$: BehaviorSubject<IStudent[]> = new BehaviorSubject<IStudent[]>(this.students);

  getStudents(): Observable<IStudent[]> {
    return this.studentList$.asObservable();
  }

  addStudent(student: IStudent): Observable<void> {
    this.students.push(student);
    this.updateStudentList();
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  updateStudent(updatedStudent: IStudent): Observable<void> {
    const index = this.students.findIndex((s) => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
      this.updateStudentList();
    }
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  deleteStudent(studentId: number): Observable<void> {
    this.students = this.students.filter((s) => s.id !== studentId);
    this.updateStudentList();
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }

  private updateStudentList(): void {
    this.studentList$.next([...this.students]);
  }
}
