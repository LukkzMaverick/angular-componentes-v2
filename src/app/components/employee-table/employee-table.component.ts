import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { Employee, EmployeeService } from '../../services/employee.service';
import {
    EmployeeModalDeleteComponent
} from '../employee-modal-delete/employee-modal-delete.component';
import { EmployeeModalEditComponent } from '../employee-modal-edit/employee-modal-edit.component';
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

  @ViewChild(EmployeeModalEditComponent)
  employeeModalEdit: EmployeeModalEditComponent

  employeeToDelete: Employee

  employeeToEdit: Employee

  messageAlert: String

  showAlert: Boolean = false

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  showModalAdd(): void {
    this.employeeModalAdd.modal.show();
  }

  showModalRemove(employee: Employee): void{
    this.employeeToDelete = employee
    this.employeeModalDelete.show()
  }

  showModalEdit(employee: Employee): void{
    this.employeeToEdit = employee
    this.employeeModalEdit.show()
  }

  removeEmployee(): void{
    this.employeeModalDelete.show()
  }

  modalAddSubmit(employee: Employee):void{
    this.showAlert = true
    this.messageAlert = `O empregado ${employee.name} foi adicionado com sucesso!`
  }

  print(){
    console.log('escondeu')
  }

  modalEditSubmit(employee: Employee):void{
    this.showAlert = true
    this.messageAlert = `O empregado ${employee.name} foi editado com sucesso!`
    console.log(this.messageAlert)
  }

  onRemoveHandler(employee: Employee):void{
    this.showAlert = true;
    this.messageAlert = `O empregado ${employee.name} foi deletado com sucesso!`
  }

}
