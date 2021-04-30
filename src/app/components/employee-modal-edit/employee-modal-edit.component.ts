import { Employee, EmployeeService } from '../../services/employee.service';
import { EventEmitter } from '@angular/core';
import { ElementRef, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare const $

@Component({
  selector: 'employee-modal-edit',
  templateUrl: './employee-modal-edit.component.html',
  styleUrls: ['./employee-modal-edit.component.scss']
})
export class EmployeeModalEditComponent implements OnInit {

  employeeEditing: Employee
  employeeReference: Employee

  @Input()
  set employee(emp: Employee){
    this.employeeReference = emp
    this.employeeEditing = {...emp}
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>()
  
  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  show(): void {
    const divModal = this.getDivModal()
    $(divModal).modal('show')
  }

  hide() {
    const divModal = this.getDivModal()
    $(divModal).modal('hide')
  }

  getDivModal(): HTMLElement {
    return this.element.nativeElement.firstChild;
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
