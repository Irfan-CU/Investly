import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data-model';


@Injectable({
    providedIn: 'root'
  })

  export class AuthService{
constructor(public http:HttpClient){}
  
login(logInuser){
    const authData:AuthData ={email:logInuser.email,password:logInuser.password};
     this.http.post("http://localhost:3000/api/log-in",authData).subscribe(response=>{
       console.log(response);
     
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


  
