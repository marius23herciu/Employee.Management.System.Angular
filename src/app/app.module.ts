import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav-bar/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { EmployeesByDepartmentComponent } from './components/departments/employees-by-department/employees-by-department.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { ChangeNameComponent } from './components/departments/change-name/change-name.component';
import { DetailsEmployeeComponent } from './components/employees/details-employee/details-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    DepartmentsListComponent,
    EmployeesByDepartmentComponent,
    AddDepartmentComponent,
    ChangeNameComponent,
    DetailsEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
