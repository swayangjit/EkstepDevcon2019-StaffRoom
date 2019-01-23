import { Component } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'dialog-popup',
  templateUrl: 'dialog-popup.html'
})
export class DialogPopupComponent {
  title: any;
  body: any;
  buttonText: any;
  periodId: any;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private events:Events) {
  }

  ionViewWillEnter() {
    this.title = this.navParams.get('title');
    this.body = this.navParams.get('body');
    this.periodId = this.navParams.get('periodId');
  }

  close() {
    this.events.publish('periodId', this.periodId);
    this.viewCtrl.dismiss();
   
  }

}
