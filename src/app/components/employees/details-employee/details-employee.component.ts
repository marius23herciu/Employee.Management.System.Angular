import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { DayMonthYear } from 'src/app/models/day-month-year.model';
import { Employee } from 'src/app/models/employee.model';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent {
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
  employeeToEdit: Employee = {
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

constructor (private route: ActivatedRoute, private employeesService: EmployeesService,
  private router: Router) {}

 ngOnInit(): void {
   this.route.paramMap.subscribe({
     next: (params) => {
       const id = params.get('id')

       if(id){
         this.employeesService.getEmployee(id).subscribe({
           next: (response) => {
             this.employeeToEdit = response
           }
         })
       }
     }
   })
 }
}
