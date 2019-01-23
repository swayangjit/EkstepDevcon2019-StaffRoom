import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-child-details',
  templateUrl: 'child-details.html',
})
export class ChildDetailsPage {
  childDetail: any;
  parentName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.childDetail = ['child1', 'child2'];
    this.parentName = this.navParams.get("childOf");
  }

  ionViewDidLoad() {
    
  }

}
