import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isArray } from 'ionic-angular/umd/util/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-child-details',
  templateUrl: 'child-details.html',
})
export class ChildDetailsPage {
  childrenDetail = [];
  childrentInfoList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
    console.log();
    this.childrenDetail = this.navParams.get("children");
    if (!Array.isArray(this.navParams.get("children"))) {
      this.childrenDetail = [this.navParams.get("children")];
    }

    this.childrenDetail.forEach((element)=>{
      this.getChildDetails(this.getChildName(element));
    });
    
  }

  getChildName(path) {
    return path.substring(path.lastIndexOf('/')+1);
   
  }

  getChildDetails(studentId){
    this.httpClient.get("https://dev.ekstep.in/api/devcon/v3/profile/read/" + studentId)
      .subscribe((data: any) => {
        console.log(data.result.Student);
        this.childrentInfoList.push(data.result.Student);
      }, error => {
        console.log(error);
      });
  }

}
