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
        "itemImage": "iVBORw0KGgoAAAANSUhEUgAAAEMAAABJCAIAAADpMwxCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAH2SURBVGhD7ZZhbqwwDIT3yD1LD7RXo1aYRcmQmEDssKL+NNJT8Rj8/aj6XstTCJPvI0y+D3uTn9+3BD9MxNhk1bhFxtIk11iDwRTCpAZpSDCYgpkJOWzB2J8w2UECWzD2x8aErqeg5EyYlNDpFJScMTChu6tB1RN7E+WhK2HygS6W6M/9MDbB04Qy8iBMEnSrBIMEjSQY+GBpgqcZhwVDwiRxeOhhwRAzEzzakXeU2jhhkug5Me8otXGumNBxazCrQc01mNlxwoROyYNGAypTUBpGM6FPKsFCAyorwcIl6ib0AT3YUaEVPdg5SWFCbzwM1rqh9cNgrY8XLXcG21eht3UGyw1OmGDDGvpKT7BZcmCC1hTo00qwUFI3wfAO6JJW0M54uskWtKZAn1aChZJ/8xtfDVbHoHf2BJsNHvSXEf+W0Bv1YEeFVvRg5yRP/x/kHvokBaUGVN4HvTF6TXLojjWY1aDmGszsuGKy0XNZ3lFq44RJoufEvKPUxjEzqV5JBQkGDkw1wVMfwiRBh0owSNBIgoEPQyaCcqsy8iBMPtC5Ev25H6MmQvXi6kNXwiSDjq4GVU8MTAS6m4KSM2FSQqdTUHLGxkSg67dg7E+Y7CCBLRj7Y2YikIMEgymESQ3SkGAwBUsT4S4NwdhEeI7JXTzFZFn+AF13yjBLouNqAAAAAElFTkSuQmCC"
      }, {
        "itemID":2,
        "itemName": "B",
        "itemImage": ""
      }, {
        "itemID":3,
        "itemName": "C",
        "itemImage": "iVBORw0KGgoAAAANSUhEUgAAAEUAAABICAIAAAAvca+gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAALASURBVGhD7ZRRctswDERzid65t3YR4VGhViRI2bREpX6zHx3uAsJO0nw9fhefPnNzdp+/X39y8ZoIrE7O65PfKgpcn+1ncB+5xlV775cv72FYH7lguPhMizF95NvvEF9qcaCPfOBpsa7+yxlbMV19ZO8rYuOCWCaMROwWafeRpU0xtiCWCWNBLBNGQlwTRp1GH1nXFGMJcU0YC4G1IhkTRoXBfUxMLtTe+8k35MLeEfWRFSaMhLguvEHI8lXYO6p9ZN6EsaUn8yLyiVXYW17tcxpyjAljS28fXi9FTjJhZJT7yJgJ42qaV3X14XUCmof9B31kxoQxAc3DtI8MuPAmoHnYTx+J5iIxAc3D7tRHrjJhZNBHciLPXIuc5MLLKPfJH/3fl7PeJsJOfPeRhMm9qZALV2EnCn3cmA05chV24jZ9HDnVhJGYsU98xnpnMTbd/5/mJXHgu48Rh05DznDhJWK33Mfl1snIDS68hcAyoj4uD5yGfN2FV3IxEvQxJJeLxInIAabiuz/m/PQxJL0K+0TkAFPtUWj/fLBPR84oimhGow/eFcgle5HbUu3D66XISblI7LhlH+wSN+uDUWfePs/dE/09wHgnwYfWM4LMnp8+hqzYi9wggs255cJocayPiegIgrW55cJoseljyJa9yL2MrDXV3k1u9aB9DNklIrSlGdiTj8RioI9CH0eWuvB2dMZyZCQQA31U+xiy14W3pSeTI/lADHQT9TFke7+YryDhoogepNHHkM/0i/kdEjPlj555mnf9fFaxaEEsF94g3t6nKb40iMN/D4pi4Hh/xsZxoA+v9XdH3EAMDGXAz4d0hgSKIjqaah/5fCAGSkjShfceXu1DehoKfeTiQAzMxPN9SE+G9pGj9yI3K7+9jyEFcpGYmN4+eNNT6OPcrolT7XNTPn3m5tNnbj59Zubx+AcAJRBqGXuMfwAAAABJRU5ErkJggg=="
      }, {
        "itemID":4,
        "itemName": "D",
        "itemImage": "iVBORw0KGgoAAAANSUhEUgAAAFcAAABECAIAAAB76D4OAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAKBSURBVHhe7ZTRTSUxEAQvEfKP4FIijXdtvXoIGnbXnrVn0Mml+mHb9tgt4M/jF/D3/e0pP6dT38JHBYVF7BYaxS1YBU/JEqlswR7/WVZksVtolLVgz/4u61KoacEeLI8+5rBbaBS0YE+VBHVF1LfA1xfn6SKyW7BHSoIXlkqClaS2YM+TBF+xNZJgGbuFRl4L9jBJ8BO2UhKsIdiCXTEgBx1j60fllD4iLdi8mJx1jK2PyVlXDLdgY2Jy1hW2KyZnnVLQAgf1YXsDctApBX8RnNKH7Q3IQafMaYGgGruVJLgi0oKIDVtN+FZzWpAEddh9JEEHwRZEeOQi7txnWguSoAK7iSToI96CsMGSIJ2b1/gfWrA7SIJubrUgbLwkyMKmS4IR7rYg7l/iDjZdEowwvwVJsB6bKwkGmdCCmHKVALPmLmlBEqzEJkqCcea0IGZdqJ+JE1e1IAnWYLMkQYj9u9DY/xcaS1rg63pmzZ3Qgl1FEqzH5kqCQea3wNcsbLokGOFuC3YDSZCFTZcEI9xqwcZLglzsDpKgm91CI96CDZYEFdhNJEEf01rgax137hNswUZKgjrsPpKggzkt8LWa8K0iLdiwftk/jp3TL/uvSG3hKaf0YXsDctApwy3YjIAc1IftDchBpxS0IDnrCtsVk7NOKfiLeMpZx9j6mJx1RaSFAHY5SXCMrZcEC0hqQdiTJMFP2EpJsIa8FoQ9TBJ8xdZIgmXsFhqpLQh7niR4YakkWEl2C+L8kZZKgpXUtyAJiioQBS0Ie6o8+pjDbqFR04KwB3+XdSmUtSDs2Z9lRRa7hUZlC8Ie/5QskeIWRHkFYrfQqG9B1FYgfkULxTwe/wCPmvV7kPqJLQAAAABJRU5ErkJggg=="
      }, {
        "itemID":5,
        "itemName": "E",
        "itemImage": ""
      }, {
        "itemID":6,
        "itemName": "F",
        "itemImage": "iVBORw0KGgoAAAANSUhEUgAAAEkAAABFCAIAAACJ01zwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAIWSURBVGhD7ZNLboRADERz/9PkUNnnCBMrrlijCg3+tBkY9VOtKLD9Fnw8Ovn++hwFb3TS5UYmo+DtHlrcSGA/+KaB+W50umW/6mCyGx1tQX2u3kw3OteC+gl6QYNuHtPc6FANui3oTQ26ScxxoxM16MbQ+xbUZapudJYF9RH0lQV1jZIbHWRB7YO+taAukHejUyyoI9AEC+osSTc6woI6Ds2xoE6RcaP1FtQFaKAGXZywGy3WoJsBTdagCxJzo5UadPOg+RbUbrxutMaCeja0xYLah8uNFlhQ90C7LKgdHLvRaAvqTmijBfURB2401IK6H9prQb3LnhuN06A7F7pBg27M0I0GadC9ArpEg27AthuN0KB7HXSPBt0WG270sQbdq6GrNOj+4XJDcQ3oNgmKfxy74emVcF7o+t/w9Br4b1tuV8J/m8tNguIC+A/bdhP8I84kdNVye283CYrXQfdIUAwYugmhQScQvWe5+WZ1E71nz02IjuuDLpGgGHNXNzzdZblFJjaRuOTATUgMnU7uhuUWnzuX3A1hNwmKE8kdcOwm5EbPIr19uWWnTyG9PeMmQdEP7ZWgcOByE9ILilT2Lrf3dhMqa3LQRgkKH3dyw1M3y+2X4qYExY0BN6G4LER913L7o77PT31XyU2CooH6opibQCvPCXYHWW5P0NZzgt1Bwm4CLe4OtsZZbvdkud2T5XZHHo8f/vQg++X/tpoAAAAASUVORK5CYII="
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
