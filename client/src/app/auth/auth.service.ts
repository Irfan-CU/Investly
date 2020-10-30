import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data-model';


@Injectable({
    providedIn: 'root'
  })

export class AuthService
{
constructor(public http:HttpClient){}

  private token:string;

    getToken(){
        return this.token;
    }

  login(logInuser)
    {
      const authData:AuthData ={email:logInuser.email,password:logInuser.password};
      this.http.post<{token:string}>("http://localhost:3000/api/log-in",authData).subscribe(response=>{
      const token = response.token;
      console.log(token);
      this.token = token;
     
     });
   }

   createUser(signup)
   { 
     this.http.post<{message:string}>("http://localhost:3000/api/sign-up",signup).subscribe(SignUpdata=>{
     const message =SignUpdata.message; 
     console.log(message);
     
     });
   }




}


  
