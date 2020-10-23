import { Peer } from './user.model';
export class PeersService
{
  private peers: Peer[]=[]; //this will give the reference to array

  getPeers(){
      return[...this.peers]; // important to derefernce the array here as the arrays in JS are retruned by referece so derefrencein and returng the array.
  }

}