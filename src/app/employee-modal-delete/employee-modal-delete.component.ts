import { Employee, EmployeeService } from '../employee.service';
import { EventEmitter } from '@angular/core';
import { ElementRef, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare const $

@Component({
  selector: 'employee-modal-delete',
  templateUrl: './employee-modal-delete.component.html',
  styleUrls: ['./employee-modal-delete.component.scss']
})
export class EmployeeModalDeleteComponent implements OnInit {

  @Input()
  employee: Employee

  @Output()
  onRemove: EventEmitter<Employee> = new EventEmitter<Employee>();

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

  removeEmployee(): void{
    this.employeeService.removeEmployee(this.employee)
    this.onRemove.emit(this.employee)
    this.hide()
  }

}
