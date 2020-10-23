import { Component } from '@angular/core';
import { Peer } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Investly';
  
  peers:Peer[]=[]
  
  onPeerCreated(peer)
  {
  this.peers.push(peer);
  
  alert(peer.firstName+peer.lastName+peer.relation+peer.amount);
  }
}
