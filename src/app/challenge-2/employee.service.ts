import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  department: 'payments' | 'customer-service' | 'sales',
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly employeesMock: Employee[] = [
    { id: 1, name: 'John Doe', department: 'payments', salary: this.getRandomSalary() },
    { id: 2, name: 'Jane Doe', department: 'customer-service', salary: this.getRandomSalary() },
    { id: 3, name: 'John Smith', department: 'sales', salary: this.getRandomSalary() },
    { id: 4, name: 'Jane Smith', department: 'sales', salary: this.getRandomSalary() },
    { id: 5, name: 'John Johnson', department: 'customer-service', salary: this.getRandomSalary() },
    { id: 6, name: 'Jane Johnson', department: 'payments', salary: this.getRandomSalary() },
    ];

  constructor() { }

  getAllEmployees(): Observable<Employee[]> {
    return of(this.employeesMock);
  }

  findOne(id: number): Observable<Employee | null> {
    return of(this.employeesMock.find(employee => employee.id === id) || null).
    pipe(delay(750));
  }

  private getRandomSalary(): number {
    return Math.floor(Math.random() * 10000) + 1000;
  }
}
