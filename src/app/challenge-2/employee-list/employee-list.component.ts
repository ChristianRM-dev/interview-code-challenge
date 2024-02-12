import { Component, Input} from '@angular/core';
import { Employee } from '../../services/employee.service';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatIconButton,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  @Input({ required: true })
  employees: Employee[] = [];
}
