import { delay } from 'rxjs';
import { LoginDetails } from './../../models/login-details.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthenticatedResponse } from 'src/app/models/authenticated-response-model'; 
import { LoginRegisterModel } from 'src/app/models/login-register.model';
import { NgForm } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
credentials: LoginRegisterModel = {username:'', password:''}
loginDetails: LoginDetails = {invalidLogin:false, inSubmision:false}

constructor(private router: Router, private http: HttpClient, private auth: AuthService) { }

register = ( form: NgForm) => {
  this.loginDetails= {invalidLogin:false, inSubmision:true}
  if (form.valid) {
    this.http.post<AuthenticatedResponse>("https://localhost:7188/api/auth/register", this.credentials, {
      headers: new HttpHeaders({ "Content-Type": "application/json"})
    })
    .subscribe({
      next: () => {
        this.auth.succesfullRegister=true
        this.router.navigate(["/login"]);
      },
      error: (err: HttpErrorResponse) => this.loginDetails= {invalidLogin:true, inSubmision:false}
    })
    if (this.auth.succesfullRegister)
    {
      setTimeout(() => {
        this.auth.succesfullRegister=false
      }, 3000);
    }
  }
}
}
