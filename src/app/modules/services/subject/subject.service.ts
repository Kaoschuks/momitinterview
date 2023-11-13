import { Injectable } from '@angular/core';
import { ISubject } from 'src/app/core';

const SUBJECTS_KEY = 'subjects';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjects: ISubject[] = [];

  constructor() {
    this.loadSubjectsFromStorage();
  }

  private loadSubjectsFromStorage(): void {
    const storedSubjects = localStorage.getItem(SUBJECTS_KEY);
    if (storedSubjects) {
      this.subjects = JSON.parse(storedSubjects);
    }
  }

  getSubjects(): ISubject[] {
    return this.subjects;
  }

  addSubject(subject: ISubject): void {
    subject.id = this.generateId();
    this.subjects.push(subject);
    this.saveSubjectsToStorage();
  }

  updateSubject(updatedSubject: ISubject): void {
    const index = this.subjects.findIndex((s) => s.id === updatedSubject.id);
    if (index !== -1) {
      this.subjects[index] = updatedSubject;
      this.saveSubjectsToStorage();
    }
  }

  deleteSubject(subjectId: number): void {
    this.subjects = this.subjects.filter((s) => s.id !== subjectId);
    this.saveSubjectsToStorage();
  }

  private generateId(): number {
    return this.subjects.length > 0 ? Math.max(...this.subjects.map((s) => s.id)) + 1 : 1;
  }

  private saveSubjectsToStorage(): void {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(this.subjects));
  }
}