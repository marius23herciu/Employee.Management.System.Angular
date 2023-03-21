import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from "@auth0/angular-jwt";

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

//export function tokenGetter() { 
  //return localStorage.getItem("jwt"); 
//}

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
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    //JwtModule.forRoot({
     // config: {
     //   tokenGetter:()=>{
     //     return localStorage.getItem("jwt"); 
    //    },
    //    allowedDomains: ["localhost:7188"],
   //     disallowedRoutes: []
   //   }
   // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
