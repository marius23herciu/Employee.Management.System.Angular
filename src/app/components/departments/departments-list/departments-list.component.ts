import { DepartmentsService } from './../../../services/departments.service';
import { Department } from './../../../models/department.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  departments: Department[] = [];

  constructor (private departmentsService: DepartmentsService, private router: Router) {} 

  ngOnInit(): void {
    this.departmentsService.getAllDepartments().subscribe({
      next: (employees:Department[])=>{
        this.departments = employees 
      },
      error: (response:string)=> {
        console.log(response);
      }
    })
  }
  deleteDepartment(depName:string){
    this.departmentsService.deleteDepartment(depName).subscribe({
     next: (response)=>{
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['departments']));
     }
   });
   }
   redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['departments']));
 }
}
