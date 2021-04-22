import { Employee, EmployeeService } from '../employee.service';
import { ElementRef, Input } from '@angular/core';
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
    console.log(this.employee)
    this.employeeService.removeEmployee(this.employee)
    this.hide()
  }

}
