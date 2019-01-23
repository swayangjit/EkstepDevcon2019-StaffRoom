import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isArray } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'page-child-details',
  templateUrl: 'child-details.html',
})
export class ChildDetailsPage {
  childrenDetail = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log();
    this.childrenDetail = this.navParams.get("children");
    if (!Array.isArray(this.navParams.get("children"))) {
      this.childrenDetail = [this.navParams.get("children")];
    }
  }

  ionViewDidLoad() {

  }

  getChildName(path) {
    return  path.substring(path.lastIndexOf('/')+1);
  }

}
