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
  eventData;
  studentId;
  date;
  period;
  attendance;
  grade;
  showCard = false; 
  studentName;
  studentClass;
  studentSubject;
  studentTeacher;
  topic1;
  topic2;
  periodResponse;  
  apiResponse: any;
  icon: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ref: ChangeDetectorRef,
    private popoverCtrl: PopoverController,
    private httpClient:HttpClient
  ) {
    this.eventData = this.navParams.get('data');
    this.studentId = this.getChildId(this.navParams.get('studentId'));
    this.date = this.formatDate(this.eventData.date);
    this.period = this.eventData.event.data.period;
    this.grade = this.eventData.event.data.class;
  }

  ionViewDidLoad() {
    this.getRecommendedContent1();
    this.getPeriodDetails(this.period, this.grade, this.date, this.studentId);
  }
  getChildId(path) {
    return path.substring(path.lastIndexOf('/')+1);
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
          "sort_by":{"lastUpdatedOn":"desc"}
          
      }
  }
    this.httpClient.post("https://dev.ekstep.in/api/search/v3/search",
      request)
      .subscribe((data: any) => {
        console.log(data);
        this.apiResponse = data;
        if (data.result.content) {
        }

      }, error => {
        console.log(error);
      });
    this.ref.detectChanges();
  }

  getRecommendedContent() {
    this.data = [];
    this.apiResponse.result.content.forEach(element => {
      this.data.push(element.name);
      this.icon = element.appIcon;
    });
    
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

  // showPackage() {
  //   const popover = this.popoverCtrl.create(DialogPopupComponent, {
  //     title: "this.contentName",
  //     body: ['sudip','sudip']
  //   }, {
  //       cssClass: 'popover-alert'
  //     });
  //   popover.present();

  
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

  getPeriodDetails(periodId, classId, date, studentId) {
    const request = {
      "request": {
        "periodId": periodId,
        "classId": classId,
        "date": date,
        "id": studentId
      }
    };
    this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read",
      request)
      .subscribe(data => {
        this.periodResponse = data;
        this.studentClass = this.periodResponse.grade || "Class 5";
        this.studentSubject = this.periodResponse.subject || "EVS";
        this.topic1 = this.periodResponse.topics[0] || "Topic 1";
        this.topic2 = this.periodResponse.topics[1] || "Topic 2";
        this.attendance = this.periodResponse.attendanceDetails == 'Yes' ? true : false;
      }, error => {
        console.log(error);
      });
  }

}
