import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs'
//import IUser from '../models/user.model';///replace this with LoginModel
import { LoginRegisterModel } from '../models/login-register.model';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Token } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { AuthenticatedResponse } from '../models/authenticated-response-model';
import { map } from 'rxjs';
//cauta cum se face refresh token dupa o perioada de timp

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 /// private usersColection: AngularFirestoreCollection<IUser>
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
   // private auth: AngularFireAuth,
 // private db: AngularFirestore, 
  private http: HttpClient,
  private router: Router,
  private route: ActivatedRoute
  ) { 
   // this.usersColection = db.collection('users')
    this.isAuthenticated$ = this.isAuthenticated(this.getToken())
   // )
    //this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(  
     // delay(2500)
   // )
    //this.router.events.pipe(
     // filter (e=> e instanceof NavigationEnd),
      //map (e => this.route.firstChild),
      //switchMap ( route => route?.data ?? of ({}))
    ///).subscribe(data => {
     // this.redirect = data.authOnly ?? false
    //})
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

 // public async createUser(userData:LoginModel) {
  //  if (!userData.password){
   //   throw  new Error('Password not provided.')
    //}

    //const userCred = await this.auth.createUserWithEmailAndPassword (
    //  userData.email, userData.password
    //)

     //if(!userCred.user){
      // throw new Error("User can't be found")
     //}

    //await this.usersColection.doc(userCred.user.uid).set({
      //name: userData.name,
      //email: userData.email,
      //age: userData.age,
      //phoneNumber: userData.phoneNumber
    //})

    //userCred.user.updateProfile({
      //displayName: userData.name
    //})
  //}
  
  //public async logout($event?:Event){
    //if($event){
      //$event.preventDefault()
    //}
    
    //await this.auth.signOut()
    
    //if( this.redirect )
    //{
     // await this.router.navigateByUrl('/')
  //}
   // }
    
}

//this goes in the empty space from  nav.html
//<li>
//<a class="px-2" (click)="auth.logout($event)">Logout</a>
//</li>