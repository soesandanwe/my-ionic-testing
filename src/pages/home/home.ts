import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  makeRequests: any;
  @ViewChild('makerequestscontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(public navCtrl: NavController) {
  this.makeRequests =true;
  }

}
