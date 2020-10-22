import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Peer } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  @Output() peerCreated =new EventEmitter<Peer>();

  firstName ='';
  lastName='';
  relation='Father';
  amount='';
 
  onEnterAmount(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    const peer:Peer = 
    {firstName:form.value.firstName,
        lastName:form.value.lastName,
        relation:this.relation,
        amount:form.value.amount};
        this.peerCreated.emit(peer);

    }
  
  ngOnInit(): void {
  }

 
}
