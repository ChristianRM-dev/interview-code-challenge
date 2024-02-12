import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Employee, EmployeeService } from '../employee.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    MatProgressSpinner,
    JsonPipe,
    CurrencyPipe
  ],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  loading = true;
  employeeDetails: Employee | null = null;

  private destroyed = new Subject<void>();

  private activatedRoute = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);

  ngOnInit() {
    this.activatedRoute.params.pipe(
      takeUntil(this.destroyed)
    ).subscribe(params => {
      if (params['id'] !== undefined) {
        this.fetchEmployee(params['id']);
      }
    });
  }

  private fetchEmployee(id: number): void {
    this.loading = true;
    this.employeeService.findOne(+id)
      .subscribe({
      next: (employee) => {
        this.employeeDetails = employee;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
