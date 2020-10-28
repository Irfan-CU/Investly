import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class AuthService{
constructor(public http:HttpClient){}
  
login(logInuser){
    const email = logInuser.email;
    const password = logInuser.password; 
     this.http.post<{token:string}>("http://localhost:3000/api/log-in",{email,password}).subscribe(logindata=>{
     const token =logindata.token; 
     console.log(token);
     
     });
   }


   createUser(logInuser){
    const email = logInuser.email;
    const password = logInuser.password; 
     this.http.post<{message:string}>("http://localhost:3000/api/sign-up",{email,password}).subscribe(SignUpdata=>{
     
     const token =SignUpdata.message; 
     console.log(token);
     
     });
   }



}


  
