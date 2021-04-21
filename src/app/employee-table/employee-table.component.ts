import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  @ViewChild(EmployeeModalComponent)
  employeeModalAdd: EmployeeModalComponent

  constructor() { }

  ngOnInit(): void {
  }

  showModalAdd(): void {
    this.employeeModalAdd.show();
  }

}
