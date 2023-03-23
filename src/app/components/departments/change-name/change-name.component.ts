import { Department } from './../../../models/department.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.component.html',
  styleUrls: ['./change-name.component.css']
})
export class ChangeNameComponent {

  newNameDepartment: Department ={
    name: '',
    noOfEmployees : 0
  }
  oldDepName: string = ''
  
  constructor (private route: ActivatedRoute, private departmentService: DepartmentsService, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const oldName = params.get('name')

        if(oldName){
          this.departmentService.getDepartment(oldName).subscribe({
            next: (response) => {
              this.newNameDepartment = response
              this.oldDepName=this.newNameDepartment.name
            }
          })
        }
      }
    })
  }


  changeName(){
  this.departmentService.changeName(this.oldDepName, this.newNameDepartment).subscribe({
    next: (response) => {
      this.newNameDepartment = response
      this.router.navigate(['departments'])
    },
    error: (response:string)=> {
      console.log(response);
    }
  })
}

}
