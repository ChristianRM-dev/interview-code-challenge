import { Component, Signal } from '@angular/core';
import { Employee, EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [
    EmployeeListComponent,
    AsyncPipe,
    RouterOutlet
  ],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.scss'
})
export class EmployeeViewComponent {
  constructor(
    private employeeService: EmployeeService
  ) {
  }
  readonly employees$: Observable<Employee[]> = this.employeeService.getAllEmployees();
}
