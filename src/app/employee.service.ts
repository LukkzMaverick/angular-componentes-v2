import { Injectable } from '@angular/core';

export interface Employee{
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor() { }

  addEmployee(employee: Employee){
    console.log(employee)
    if(employee.name !== ''){
      employee.bonus = employee.salary > 1000 ? 0 : employee.bonus 
      this.employees.push(employee)
    }
  }
  removeEmployee(employee: Employee){
    this.employees = this.employees.filter(item => item !== employee)
  }

  
}
