import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AttendancePage } from '../attendance/attendance';
import { ReportAlertComponent } from '../../components/report-alert/report-alert';

/**
 * Generated class for the PerioddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perioddetails',
  templateUrl: 'perioddetails.html',
})
export class PerioddetailsPage {
  periodResponse: any;
  data: any;
  topics = [];
  topic;
  avgEngagement: any;
  avgPerformance: any;
  avgAttendence: any;
  startDate: any;
  endDate: Date;
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpClient: HttpClient, private modalCtrl: ModalController, private popoverCtrl: PopoverController) {
    this.data = this.navParams.get('data');
    const date = this.navParams.get('date');
    const teacherId = this.navParams.get('teacherid');
    this.data = this.data.event.data;
    console.log(this.data);
    this.getPeriodDetails(this.data.period, this.data.class, date, teacherId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerioddetailsPage');
    // this.getPeriodDetails();
  }

  onClickAttendance() {
    let studentModal = this.modalCtrl.create(AttendancePage);
    studentModal.present();
  }

  getPeriodDetails(periodId, classId, date, teacherId) {
    const request = {
      "request": {
        "periodId": periodId,
        "classId": classId,
        "date": date,
        "id": teacherId
      }
    };
    this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read",
      request)
      .subscribe(data => {
        this.periodResponse = data;
        console.log(this.periodResponse);
        for (var i = 0; i < this.periodResponse.topics.length; i++) {
          this.topics.push(this.periodResponse.topics[i]);
        }
        this.topic = this.topics.join(' , ');
        this.avgAttendence = this.periodResponse.attendance;
        this.avgEngagement = this.getAverage(this.periodResponse.engagementDetails);
        this.avgPerformance = this.getAverage(this.periodResponse.performanceDetails);
        // this.startDate = this.periodResponse.start;
        // this.date = new Date(this.startDate);
  
      }, error => {
        console.log(error);
      });
  }

  getAverage(array):string {
    if(array){
      let total:number = 0
      array.forEach(element => {
        total= total+Number(element.rate);
      });
      const avg = (total/array.length).toFixed(0);
      return avg;
    }
  }
  openHeatMap() {
    const popover = this.popoverCtrl.create(ReportAlertComponent, {
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();
  }
  openHeatMapForEngagement() {
    
  }

}
