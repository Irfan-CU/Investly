import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



import { UserService } from '../user.service';
import { logIn} from '../user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public peerService:UserService) { }




  ngOnInit(): void {
//

  }
  onSubmit(form:NgForm):void{
    const logInUser:logIn = {
      email:form.value.email,
      password:form.value.password
    }; 
    this.peerService.loginPeers(logInUser);
  }


}
