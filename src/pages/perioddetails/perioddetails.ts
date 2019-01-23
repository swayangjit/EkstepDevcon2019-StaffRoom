import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AttendancePage } from '../attendance/attendance';

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
  periodResponse:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpClient: HttpClient, private modalCtrl: ModalController) {
    //   this.data = this.navParams.get('data');
    // this.data = this.data.event.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerioddetailsPage');
    this.getPeriodDetails();
  }

  onClickAttendance(){
    let studentModal = this.modalCtrl.create(AttendancePage);
    studentModal.present();
  }

  getPeriodDetails(){
        const request = {
          "request": {
            "periodId": "PTCH1_1",
            "classId": "grade3",
            "date": "2019-01-23",
            "id": "TCH1"
        }
        };
        this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read",
            request)
            .subscribe(data => {
                console.log(data);
                this.periodResponse =  data;

            }, error => {
                console.log(error);
            });
    }

}
