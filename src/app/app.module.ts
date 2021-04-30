import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';  
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeModalComponent } from './components/employee-modal/employee-modal.component';
import { SalaryDirective } from './directives/salary.directive';
import { ReaisPipe } from './pipes/reais.pipe';
import { EmployeeModalDeleteComponent } from './components/employee-modal-delete/employee-modal-delete.component';
import { EmployeeModalEditComponent } from './components/employee-modal-edit/employee-modal-edit.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmployeeModalComponent,
    SalaryDirective,
    ReaisPipe,
    EmployeeModalDeleteComponent,
    EmployeeModalEditComponent,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
