import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'dialog-popup',
  templateUrl: 'dialog-popup.html'
})
export class DialogPopupComponent {
  title: any;
  body: any;
  buttonText: any;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.title = this.navParams.get('title');
    this.body = this.navParams.get('body');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
