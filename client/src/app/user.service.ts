import { Injectable } from '@angular/core';
import { Peer } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private peers: Peer[]=[]; //this will give the reference to array

  getPeers(){
      return[...this.peers]; // important to derefernce the array here as the arrays in JS are retruned by referece so derefrencein and returng the array.
  }
   
  addPeers(firstName:string,lastName:string,relation:string,amount:string){
      const peer: Peer ={firstName:firstName,lastName:lastName,relation:relation,amount:amount}
      this.peers.push(peer);
  }
}
