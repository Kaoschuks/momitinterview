import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentTableComponent {

  @Input() studentData: Array<any> = []
}
