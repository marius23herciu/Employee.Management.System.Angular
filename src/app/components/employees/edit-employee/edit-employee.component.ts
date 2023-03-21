import { EmployeeToEdit } from './../../../models/employee-to-edit.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Address } from 'src/app/models/address.model';
import { DayMonthYear } from 'src/app/models/day-month-year.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

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

constructor (private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) {}

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

editEmployee(){

  this.employeesService.editEmployee(this.employeeToEdit.id, this.employeeToEdit).subscribe({
    next: (response)=>{
      this.router.navigate(['employees'])
    }
  });
}
deleteEmployee(id:string){
 this.employeesService.deleteEmployee(id).subscribe({
  next: (response)=>{
    this.router.navigate(['employees'])
  }
});
}
}
