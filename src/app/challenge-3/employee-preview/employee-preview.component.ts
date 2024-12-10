import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Employee } from '../../services/employee.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-employee-preview',
  standalone: true,
  imports: [
    MatIcon,
    CurrencyPipe
  ],
  templateUrl: './employee-preview.component.html',
  styleUrl: './employee-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EmployeePreviewComponent {
  @Input()
  employee: Partial<Employee> | null = null;
}
