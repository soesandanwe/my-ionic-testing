import {Component, OnInit} from "@angular/core";
import { NavParams, ViewController,NavController } from "ionic-angular";
import {
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms'; // 1) Import missing classes from Angular

@Component({
  selector: 'request-item-selector-component',
  templateUrl: 'request-item-selector-component.html'
})
export class RequestItemSelectorComponent implements OnInit{

  requestItems: any;
  itemListForm: FormGroup; // 2) Define the interface of our form

  constructor(public viewCtrl: ViewController,public params: NavParams,private navCtrl: NavController,private formBuilder: FormBuilder) {
   this.initializeItems();
    this.itemListForm = this.formBuilder.group({ // 4) Initialize our form
      itemList: ['', Validators.required], // 5) Define 'formControlName' inside form
    })
  }
  ngOnInit() {
  }
  initializeItems()
  {
    this.requestItems = [
      {
        "itemID":1,
        "itemName": "A",
        "itemImage": "R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="
      }, {
        "itemID":2,
        "itemName": "B",
        "itemImage": ""
      }, {
        "itemID":3,
        "itemName": "C",
        "itemImage": ""
      }, {
        "itemID":4,
        "itemName": "D",
        "itemImage": ""
      }, {
        "itemID":5,
        "itemName": "E",
        "itemImage": ""
      }, {
        "itemID":6,
        "itemName": "F",
        "itemImage": ""
      }
    ];
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.requestItems = this.requestItems.filter((item) => {
        return (item.itemName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onChangeHandler(event: any) {
    this.viewCtrl.dismiss(event);
  }
}
