import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailview',
  templateUrl: 'detailview.html',
})
export class DetailviewPage {
  pet :string = ''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = 'puppies'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailviewPage');
  }

}
