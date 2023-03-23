
import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
   
  baseApiUrl = 'https://localhost:7188'

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
     return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }
  addEmployee(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', newEmployee)
 }
 getEmployee(id: string): Observable<Employee> {
  return this.http.get<Employee>(this.baseApiUrl + '/api/employees/'+ id)
 }
 editEmployee(id: string, editEmployee: Employee): Observable<Employee> {
  return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, editEmployee)
 }
 deleteEmployee(id: string): Observable<Employee> { 
  return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id)
 }
}
