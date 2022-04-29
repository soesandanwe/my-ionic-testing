import {Component,  OnInit, ViewChild} from "@angular/core";
import {ModalController,  Select,PopoverController,NavController} from "ionic-angular";
import {RequestItemSelectorComponent} from "./request-item-selector-component";

@Component({
  selector: 'request-item-selector',
  templateUrl: 'request-item-selector.html'
})
export class RequestItemSelector implements OnInit{
  selectedItem = [];
  itemName: string = '';
  selectOptions: any;

  @ViewChild('itemSelector') itemSelector: Select;
  constructor(public modalCtrl: ModalController,public popoverCtrl: PopoverController,public navController: NavController) {

  }
  async openModal(characterNum) {
    this.itemSelector.close();

    let modal = this.modalCtrl.create(RequestItemSelectorComponent, characterNum);
    modal.onDidDismiss(dataReturned => {
      if(dataReturned!=null) {
        if(this.selectedItem.length>0) {
          this.selectedItem.forEach(item=> {
            this.selectedItem.pop();
            this.selectedItem.push(dataReturned);
          });
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
    console.log($event.target.value);
  }

}
