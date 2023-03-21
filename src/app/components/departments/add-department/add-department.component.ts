import { Department } from './../../../models/department.model';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  
  newDepartment: string = ''

  constructor (private departmentService: DepartmentsService, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  addDepartment() {
    this.departmentService.addDepartment(this.newDepartment).subscribe({
      next: (department: Department)=>{
        this.router.navigate(['departments'])
      }
    });
  }
}
