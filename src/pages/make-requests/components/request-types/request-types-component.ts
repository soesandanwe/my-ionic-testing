import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {NavController} from "ionic-angular";


@Component({
  selector: 'request-types',
  templateUrl: 'request-types-component.html'
})
export class RequestTypesComponent implements OnInit{

  requestsInfo: any;
  requestTitle: any;
  requestItem: boolean = false;
  typeOfRequests: boolean = true;

  @ViewChild('requestscontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(public navCtrl: NavController) {
      this.requestsInfo = [{"requestTitle": "Requests"}];

  }
  ngOnInit() {
  }
  goToNextPage(requestInfo) {
    if(requestInfo.requestTitle === "Requests") {
      this.requestItem = true;
      this.typeOfRequests = false;
    }
  }
}
