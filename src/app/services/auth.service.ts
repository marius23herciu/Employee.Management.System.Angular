import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { LoginRegisterModel } from '../models/login-register.model';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl = 'https://localhost:7188'
  public isAuthenticated$: Observable<boolean> | undefined
  public isAuthenticatedWithDelay$: Observable<boolean> | undefined 
  private redirect = false
  private token: string = ""
  invalidLogin: boolean = false; 
  credentials: LoginRegisterModel = {username:'', password:''};
  public currentUsername?: string;  
  succesfullRegister: boolean=false

  constructor(
  private http: HttpClient,
  private router: Router,
  private route: ActivatedRoute
  ) { 
    this.isAuthenticated$ = this.isAuthenticated(this.getToken())
  }

  isAuthenticated(token: string):Observable<boolean> {
    return this.http.get<boolean>(this.baseApiUrl + '/api/auth/token-valid-or-not-' + token)
 }

 getName():Observable<string> {
  return this.http.get<string>(this.baseApiUrl + '/api/auth/get-name').pipe(map((data: string) => {
    this.currentUsername = data;
    return data;
}));    
}
  getToken():string {
    const token = localStorage.getItem("jwt");
    if (token!=null){
      return token
    }
    return ""
  }

  logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    this.isAuthenticated$ = this.isAuthenticated(this.getToken()) 
    this.router.navigate(["/"]);
  }

}
