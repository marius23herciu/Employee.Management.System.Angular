import { Department } from './../../../models/department.model';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { DayMonthYear } from 'src/app/models/day-month-year.model';

@Component({
  selector: 'app-employees-by-department',
  templateUrl: './employees-by-department.component.html',
  styleUrls: ['./employees-by-department.component.css']
})
export class EmployeesByDepartmentComponent implements OnInit {
employees: Employee[] = [];

  constructor (private route: ActivatedRoute, private departmentsService: DepartmentsService) {} 

  //ngOnInit(): void {
   // this.departmentsService.getEmployeesByDepartment().subscribe({
    //  next: (employees:Department[])=>{
      //  this.departments = employees 
      //},
      //error: (response:string)=> {
      //  console.log(response);
     // }
    //})
 // }
 ngOnInit(): void {
  this.route.paramMap.subscribe({
    next: (params) => {
      const name = params.get('name')

      if(name){
        this.departmentsService.getEmployeesByDepartment(name).subscribe({
          next: (response) => {
            this.employees = response
          },
          error: (response:string)=> {
            console.log(response);
          }
        })
      }
    }
  })
}
}
