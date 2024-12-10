import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { EmployeePreviewComponent } from '../employee-preview/employee-preview.component';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    EmployeePreviewComponent
  ],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CreateEmployeeComponent {
  submitting = false;
  private employeeService = inject(EmployeeService);

  protected previewableEmployee: Partial<Employee> = {
    name: undefined,
    department: undefined,
    salary: undefined
  };

  handleSubmit(): void {
    this.submitting = true;
    this.employeeService.addEmployee(this.previewableEmployee as Employee).subscribe({
      next: (newEmployee) => {
        this.submitting = false;
        alert('New employee added!');
        this.resetForm()
      }
    });
  }

  resetForm(): void {
    console.log("Reseting form")
    this.previewableEmployee = {
      name: undefined,
      department: undefined,
      salary: undefined
    };
  }
}
