import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { statsHeatMap } from '../../data/data';
import { PerioddetailsPage } from '../../pages/perioddetails/perioddetails'

/**
 * Generated class for the SubjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-list',
  templateUrl: 'subject-list.html',
})
export class SubjectListPage {
   terms;
  childrenData: any;
  depth = '1';
  child = [];
  data: any;
  associations: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient) {

    this.associations = this.navParams.get('terms') || undefined;
  }

  ionViewWillEnter() {
    this.data = this.navParams.get('data');
    this.childrenData = statsHeatMap;
    this.setChildData();
    if(!this.associations){
    this.getSubjectList()
  }

  }
  setChildData() {
    if (this.data) {
      this.childrenData = this.data;
    }
  }
  navigatePeriodDetailsPage(association){
    console.log('associations =>' , association.name);
    this.navCtrl.push(PerioddetailsPage , {
      association:association.name
    });
  }
  getSubjectList() {
    this.httpClient.get('https://dev.ekstep.in/api/framework/v3/read/devcon-appu?categories=subject,topic')
      .subscribe((res) => {
        console.log('response is =>', res);
        console.log('categories =>', res['result'].framework.categories);
        let data = res['result'].framework.categories;
        data.forEach(element => {
          if(element.code === 'subject'){
             this.terms = element.terms;
          }
          console.log('terms =>' , this.terms);

        });
      })
  }

  navigateToDetailsPage(item) {
    // this.child = item.child;
    // if (this.child) {
      console.log('item before push => ' , item);
      this.navCtrl.push(SubjectListPage, {
        terms: item,
        title: 'Topics'
      })
    // } else {
    //   this.navCtrl.push(PerioddetailsPage, {
    //   });
    }
  }




