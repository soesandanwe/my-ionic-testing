import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ModalController, NavController, Select} from "ionic-angular";
import {RequestItemSelectorComponent} from "./request-item-selector-component";
@Component({
  selector: 'request-item-selector',
  templateUrl: 'request-item-selector.html'
})
export class RequestItemSelector implements OnInit{
  selectedItem: any;
  itemName: string = '';
  @ViewChild('itemSelector') itemSelector: Select;
  constructor(public modalCtrl: ModalController) {
  }
  async openModal(characterNum) {
    this.itemSelector.close();
    let modal = this.modalCtrl.create(RequestItemSelectorComponent, characterNum);
    modal.onDidDismiss(dataReturned => {
    //  console.log(dataReturned);
      this.itemSelector.selectedText = dataReturned.itemName;
     // this.optionsFn(dataReturned);
    });
    return await modal.present();
  }
  ngOnInit() {

  }
  optionsFn(q) {
    console.log(q);
  }
}
