import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { DayMonthYear } from 'src/app/models/day-month-year.model';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  constructor (private employeesService: EmployeesService) {} 

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees:Employee[])=>{
        this.employees = employees 
      },
      error: (response:string)=> {
        console.log(response);
      }
    })
  }

}
