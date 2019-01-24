import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, PopoverController } from 'ionic-angular';
import { DialogPopupComponent } from '../../components/dialog-popup/dialog-popup';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the StudentviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-studentview',
  templateUrl: 'studentview.html',
})
export class StudentviewPage {
  @ViewChild(Content) content: Content;
  data = [];
  showCard = false;   
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ref: ChangeDetectorRef,
    private popoverCtrl: PopoverController,
    private httpClient:HttpClient
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentviewPage');
    this.getRecommendedContent1();
  }

  getRecommendedContent1() {
    const request = {
      "request": { 
          "filters":{
              "objectType": "Content",
              "topic": ["Types of Birds"],
              "keywords": ["dc_secondary", "dc_practise"],
              "status":[]
          },
          "limit":20,
          "fields" :["identifier"],
          "sort_by":{"lastUpdatedOn":"desc"}
          
      }
  }
    this.httpClient.post("https://dev.ekstep.in/api/search/v3/search",
      request)
      .subscribe((data: any) => {
        console.log(data);
        if (data.result.content) {
        }

      }, error => {
        console.log(error);
      });
    this.ref.detectChanges();
  }

  getRecommendedContent() {
    this.data = ['sudip', 'sudip', 'sudip'];
    this.showCard = true;
    this.ref.detectChanges();
    this.scrollToBottom();
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 300)
  }

  showPackage() {
    const popover = this.popoverCtrl.create(DialogPopupComponent, {
      title: "this.contentName",
      body: ['sudip','sudip']
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();

  }

}
