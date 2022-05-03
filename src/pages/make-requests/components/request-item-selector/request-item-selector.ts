import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ModalController,  Select} from "ionic-angular";
import {RequestItemSelectorComponent} from "./request-item-selector-component";

@Component({
  selector: 'request-item-selector',
  templateUrl: 'request-item-selector.html'
})
export class RequestItemSelector implements OnInit{
  selectedItem = [];
  itemName: string = '';

  @ViewChild('itemSelector') itemSelector: Select;

  constructor(public modalCtrl: ModalController) {
  }
  async openModal(characterNum) {
    this.itemSelector.close();

    let modal = this.modalCtrl.create(RequestItemSelectorComponent, characterNum);
    modal.onDidDismiss(dataReturned => {
      if(dataReturned!=null) {
          if(this.selectedItem.length>0) {
              this.selectedItem.pop();
              this.selectedItem.push(dataReturned);
          }
          else {
            this.selectedItem.push(dataReturned);
          }
      }
    });
    return await modal.present();
  }
  ngOnInit() {
  }
  optionsFn($event) {
    console.log($event.tag.value)
  }
}
