import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import { NavController } from 'ionic-angular';
// import { Jsonp } from '@angular/http';

mobiscroll.settings = {
    theme: 'material'
};

/**
 * Generated class for the TeacherdayviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detailview',
  templateUrl: 'detailview.html',
})
export class DetailviewPage {

  constructor() {
      console.log("I am in new page");
  }

  
}



