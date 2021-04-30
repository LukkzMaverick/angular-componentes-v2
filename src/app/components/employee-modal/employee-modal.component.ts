import { Employee, EmployeeService } from '../../services/employee.service';
import { ModalComponent } from '../modal/modal.component';
import { Modalable } from '../modal/modalable';
import { EventEmitter, Output, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare const $

@Component({
  selector: 'employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent extends Modalable implements OnInit {

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter()

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  constructor(private element: ElementRef, private employeeService: EmployeeService) { 
    super()
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

  addEmployee(): void{
    this.employeeService.addEmployee(this.employee)
    this.onSubmit.emit(this.employee)
    this.resetEmployee()
    this.hide()
  }

  private resetEmployee(){
    this.employee = {
      name: '',
      salary: 0,
      bonus: 0
    }
  }

}
