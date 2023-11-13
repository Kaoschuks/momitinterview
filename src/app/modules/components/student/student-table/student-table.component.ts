import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from 'src/app/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentTableComponent {

  @Input() studentData$!: Observable<IStudent[]>
  @Output() ondelete = new EventEmitter();
  @Output() onedit = new EventEmitter();
}
