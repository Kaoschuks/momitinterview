import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISubject } from 'src/app/core';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectFormComponent {

  @Output() onsubmit = new EventEmitter();

  @Input() set subject(value: ISubject | null) {
    if (value) {
      this.editMode = true;
      this.subjectForm.setValue({
        id: value.id,
        name: value.name,
        teacher: value.teacher,
      });
    } else {
      this.editMode = false;
      this.subjectForm.reset();
    }
  }

  subjectForm: FormGroup;
  editMode = false;

  constructor(private fb: FormBuilder) {
    this.subjectForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      teacher: ['', Validators.required],
    });
  }

  // onSubmit(): void {
  //   if (this.subjectForm.valid) {
  //     const formData = this.subjectForm.value;
  //     const newSubject: Subject = {
  //       id: formData.id || 0,
  //       name: formData.name,
  //       teacher: formData.teacher,
  //     };

  //     if (this.editMode) {
  //       this.subjectService.updateSubject(newSubject);
  //     } else {
  //       this.subjectService.addSubject(newSubject);
  //     }

  //     this.subjectForm.reset();
  //   }
  // }
}
