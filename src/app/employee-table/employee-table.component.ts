import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { EmployeeService, Employee } from '../employee.service';
import {
    EmployeeModalDeleteComponent
} from '../employee-modal-delete/employee-modal-delete.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  @ViewChild(EmployeeModalComponent)
  employeeModalAdd: EmployeeModalComponent

  @ViewChild(EmployeeModalDeleteComponent)
  employeeModalDelete: EmployeeModalDeleteComponent

  employeeToDelete: Employee

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  showModalAdd(): void {
    this.employeeModalAdd.show();
  }

  showModalRemove(employee: Employee): void{
    this.employeeToDelete = employee
    console.log(employee)
    console.log(this.employeeToDelete)
    this.employeeModalDelete.show()
  }

  removeEmployee(){
    this.employeeModalDelete.show()
  }

}
