import { DayMonthYear } from './../../../models/day-month-year.model';
import { Address } from './../../../models/address.model';
import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

constructor (private employeesService: EmployeesService, private router: Router) {}

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

addEmployee() {
this.newEmployee.id = '00000000-0000-0000-0000-000000000000'

  this.employeesService.addEmployee(this.newEmployee).subscribe({
    next: (employee: Employee)=>{
      this.router.navigate(['employees'])
    }
  });
}
}
