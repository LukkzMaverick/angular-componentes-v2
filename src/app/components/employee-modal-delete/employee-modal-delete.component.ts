import { Employee, EmployeeService } from '../../services/employee.service';
import { Modalable } from '../modal/modalable';
import { EventEmitter } from '@angular/core';
import { ElementRef, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare const $

@Component({
  selector: 'employee-modal-delete',
  templateUrl: './employee-modal-delete.component.html',
  styleUrls: ['./employee-modal-delete.component.scss']
})
export class EmployeeModalDeleteComponent extends Modalable implements OnInit {

  @Input()
  employee: Employee

  @Output()
  onRemove: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor( private employeeService: EmployeeService) { 
    super()
  }

  ngOnInit(): void {
    super.ngOnInit()
  }

  removeEmployee(): void{
    this.employeeService.removeEmployee(this.employee)
    this.onRemove.emit(this.employee)
    this.hide()
  }

}
