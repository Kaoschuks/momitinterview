import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubject } from 'src/app/core';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectTableComponent {

  @Input() subjectData: Observable<ISubject[]> | undefined
  @Output() ondelete = new EventEmitter();
  @Output() onedit = new EventEmitter();
}
