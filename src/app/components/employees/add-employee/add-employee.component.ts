import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from './../../../models/department.model';
import { DayMonthYear } from './../../../models/day-month-year.model';
import { Address } from './../../../models/address.model';
import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


newAddress: Address = {
  city: '',
  street: '',
  number: 1
}
newDOB: DayMonthYear = {
  day: 1,
  month: 1,
  year: 1
}
newEmployee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    dob: this.newDOB,
    email: '',
    phone: 0,
    address: this.newAddress,
    salary: 0,
    department: ''
}
departments: Department[] = []
inputSwitch = true

constructor (private employeesService: EmployeesService, private router: Router, private departmentsService: DepartmentsService) {
}

ngOnInit(): void {
  this.departmentsService.getAllDepartments().subscribe({
    next: (response) => {
      this.departments = response
    }
  })
}

addEmployee() {
this.newEmployee.id = '00000000-0000-0000-0000-000000000000'

  this.employeesService.addEmployee(this.newEmployee).subscribe({
    next: (employee: Employee)=>{
      this.router.navigate(['employees'])
    }
  });
}
toggle = () => this.inputSwitch = !this.inputSwitch

}
