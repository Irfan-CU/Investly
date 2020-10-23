import { Component, OnInit } from '@angular/core';
import { Peer } from '../user.model';
import{UserService} from'../user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  peers:Peer[]=[];
  
  constructor(public peerService:UserService) { }

  ngOnInit(): void {
   
  this.peers=this.peerService.getPeers();
   

  }

}
