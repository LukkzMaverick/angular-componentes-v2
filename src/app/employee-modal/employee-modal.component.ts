import { Employee, EmployeeService } from '../employee.service';
import { EventEmitter, Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare const $

@Component({
  selector: 'employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent implements OnInit {

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter()

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

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
