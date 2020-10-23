import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

import { Peer } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private peers: Peer[]=[]; //this will give the reference to array
  private peerUpdated = new Subject<Peer[]>();


  getPeers(){
      return [...this.peers]; // important to derefernce the array here as the arrays in JS are retruned by referece so derefrencein and returng the array.
  }

  getpeerUpdatedListener(){
  return this.peerUpdated.asObservable();
  }
   
  addPeers(Peer){
      const peer: Peer ={firstName:Peer.firstName,lastName:Peer.lastName,relation:Peer.relation,amount:Peer.amount}
      this.peers.push(peer);
      this.peerUpdated.next([...this.peers]);
  }
}
