/**
 * Generated class for the StudentcalendarviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Platform, Content, ViewController } from 'ionic-angular';
import { DetailviewPage } from '../detailview/detailview'
import 'rxjs/add/operator/map';
import { AskappuPage } from '../askappu/askappu';
import { RestProvider } from '../../service/rest-provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { AppConstnats } from '../../app/app-constants';
import { ChangeDetectorRef } from '@angular/core';
import { PerioddetailsPage } from '../perioddetails/perioddetails';
import { EData, Telemetry } from '../../model/telemetry';
import { StudentviewPage } from '../studentview/studentview';

mobiscroll.settings = {
    theme: 'material'
};

@Component({
  selector: 'page-studentcalendarview',
  templateUrl: 'studentcalendarview.html',
})
export class StudentcalendarviewPage {

  
  @ViewChild('content', { read: ElementRef })
  private content: ElementRef;
  private backButtonFunc: any;
  private timeTable;
  private currentDate; 
  private teacherId:string;
  private studentId:string= '';
  private data;
  private visitorName:string= '';
  date;

  constructor(
      private qrScanner: QRScanner,
      private platform: Platform,
      private viewCtrl: ViewController,
      private navCtrl: NavController,
      private ref: ChangeDetectorRef,
      public navParams: NavParams,private httpClient: HttpClient) { 
          this.studentId = this.navParams.get('studentId');
      }

  events: any;

  ngOnInit() {
  }


  dailySettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          eventList: { type: 'day' }
      },
      onEventSelect: (event, inst) => {
          this.navCtrl.push(StudentviewPage,{
            data: event,
            studentId: this.studentId
          });

      },
      onSetDate: (event, inst) => {
          this.teacherId = 'TCH1';
          this.currentDate = event.date;
          this.getSearchIdentifiers();
      }
  };

  weeklySettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          eventList: { type: 'week' }
      }
  };

  monthlySettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          eventList: { type: 'month' }
      }
  };

 
 

  handleBackButton() {
      this.backButtonFunc = this.platform.registerBackButtonAction(() => {
          this.backButtonFunc();
      }, 10);
      
  }

  getSearchIdentifiers() {
      var date = this.formatDate(this.currentDate);
      this.date =date;
      this.httpClient.get("https://dev.ekstep.in/api/dialcode/v3/schedule/read/"+date+"/"+this.teacherId)
          .subscribe((data:any) => {
              if (data) {
                  var res = data[date + "_" + this.teacherId];
                  var temp :any =  [];
                  if(res){
                      res.forEach(element => {
                          temp.push(
                              {
                                  "start": element.start,
                                  "end": element.end,
                                  "text": element.grade  +" &nbsp&nbsp&nbsp  " + element.subject,
                                  "color": "#ddddd",
                                  "data": { "class": element.grade, "subject": element.subject, "period": element.period }
                              }
                          );
                      });
                      temp.push({
                        "start": date + "T09:00:00+00:00",
                        "end": date + "T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    },
                    {
                        "start": date + "T09:00:00+00:00",
                        "end": date + "T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    }
                    ,
                    {
                        "start": date + "T12:00:00+00:00",
                        "end": date + "T13:00:00+00:00",
                        "text": "Lunch",
                        "color": "#008000",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    });
                  }
                  
                  this.events = temp;
                  this.ref.detectChanges();
              }

          }, error => {
              console.log(error);
          });
  }

   formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [year, month, day].join('-');
  }
}
