import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IStudent, ISubject } from 'src/app/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFormComponent {

  private fb: FormBuilder = inject(FormBuilder);

  @Output() saveStudent = new EventEmitter();
  @Output() editStudent = new EventEmitter();
  @Input() subjectData!: Observable<ISubject[]>
  @Input() set student(value: IStudent | null) {
    if (value) {
      this.editMode = true;
      this.studentForm.setValue({
        id: value.id,
        firstName: value.firstName,
        lastName: value.lastName,
        enrolledSubjects: value.enrolledSubjects,
      });
    } else {
      this.editMode = false;
      this.studentForm.reset();
    }
  }

  studentForm!: FormGroup;
  editMode = false;

  constructor() {
    this.studentForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      enrolledSubjects: [[]],
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formData = this.studentForm.value;
      const student: IStudent = {
        id: formData.id || 0,
        firstName: formData.firstName,
        lastName: formData.lastName,
        enrolledSubjects: formData.enrolledSubjects,
      };

      if (this.editMode) this.editStudent.emit(student)
      if (!this.editMode) this.saveStudent.emit(student)
      this.studentForm.reset();
    }
  }
}
