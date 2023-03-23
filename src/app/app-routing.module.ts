import { DetailsEmployeeComponent } from './components/employees/details-employee/details-employee.component';
import { ChangeNameComponent } from './components/departments/change-name/change-name.component';
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
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'departments',
    component: DepartmentsListComponent,
  },
  {
    path: 'departments/add',
    component: AddDepartmentComponent,
  },
  {
    path: 'departments/change/:name',
    component: ChangeNameComponent,
  },
  {
    path: 'employees-by-departments/:name',
    component: EmployeesByDepartmentComponent,
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'employees/view/:id',
    component: DetailsEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
