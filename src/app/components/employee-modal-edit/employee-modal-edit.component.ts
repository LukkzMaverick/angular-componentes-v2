import { Employee, EmployeeService } from '../../services/employee.service';
import { Modalable } from '../modal/modalable';
import { EventEmitter } from '@angular/core';
import { ElementRef, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare const $

@Component({
  selector: 'employee-modal-edit',
  templateUrl: './employee-modal-edit.component.html',
  styleUrls: ['./employee-modal-edit.component.scss']
})
export class EmployeeModalEditComponent extends Modalable implements OnInit {

  employeeEditing: Employee
  employeeReference: Employee

  @Input()
  set employee(emp: Employee){
    this.employeeReference = emp
    this.employeeEditing = {...emp}
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>()
  
  constructor() {
    super()
   }

  ngOnInit(): void {
    super.ngOnInit()
  }

  editEmployee(): void{
    this.employeeReference.name = this.employeeEditing.name
    this.employeeReference.salary = this.employeeEditing.salary
    this.employeeReference.bonus = this.employeeEditing.bonus
    this.onSubmit.emit(this.employeeReference)
    this.hide()
  }

  handleCloseModal(){
    this.employeeEditing = {...this.employeeReference}
  }

}
