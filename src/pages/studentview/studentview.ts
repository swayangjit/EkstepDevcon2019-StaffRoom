import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, PopoverController } from 'ionic-angular';
import { DialogPopupComponent } from '../../components/dialog-popup/dialog-popup';

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
    private popoverCtrl: PopoverController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentviewPage');
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
