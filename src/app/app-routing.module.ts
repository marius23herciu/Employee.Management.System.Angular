import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { EmployeesByDepartmentComponent } from './components/departments/employees-by-department/employees-by-department.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '',
   component: HomeComponent 
  },
  {path: 'login',
   component: LoginComponent
  },
  {path: 'register',
   component: RegisterComponent
  },
  //{
   // path: '',
    //component: EmployeesListComponent
  //},
  {
    path: 'employees',
    component: EmployeesListComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'departments',
    component: DepartmentsListComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'departments/add',
    component: AddDepartmentComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'employees-by-departments/:name',
    component: EmployeesByDepartmentComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
    //canActivate: [AuthGuard]
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
