import { Department } from './../models/department.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  
  baseApiUrl = 'https://localhost:7188'

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department[]> {
     return this.http.get<Department[]>(this.baseApiUrl + '/api/department')
  }
  getEmployeesByDepartment(depName: string): Observable<Employee[]> {
    return  this.http.get<Employee[]>(this.baseApiUrl + '/api/department/get-employees-from-' + depName)
  }
  deleteDepartment(depName: string): Observable<Department> {
    return this.http.delete<Department>(this.baseApiUrl + '/api/department/' + depName)
  }
  addDepartment(depName: string): Observable<Department> {
    return this.http.post<Department>(this.baseApiUrl + '/api/department', depName)
 }
}
