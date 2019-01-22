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
  students:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = 'puppies'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailviewPage');
    this.students = [
      {
        id: 1,
        name: "Jagadish",
        attendance: "50%",
        engagement: "70%",
        perfomance: "100%"
      },
      {
        id: 2,
        name: "Marty McFly",
        attendance: "50%",
        engagement: "70%",
        perfomance: "100%"
      },
      {
        id: 3,
        name: "Rahul",
        attendance: "50%",
        engagement: "70%",
        perfomance: "100%"
      },
      {
        id: 4,
        name: "Ramesh",
        attendance: "50%",
        engagement: "70%",
        perfomance: "100%"
      },
      {
        id: 5,
        name: "Suresh",
        attendance: "50%",
        engagement: "70%",
        perfomance: "100%"
      }
    ];
  }

}
