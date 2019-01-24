import { Component } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SendNoteComponent } from '../send-note/send-note';

/**
 * Generated class for the AttendenceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'attendence',
  templateUrl: 'attendence.html'
})
export class AttendenceComponent {
  attendenceDetails: any;
  names = [];
  status: any;
  teacherId;
  visitorId;
  period;
  grade;
  subject;
  constructor(private navParams: NavParams, private httpClient: HttpClient, public popoverCtrl: PopoverController) {
    this.attendenceDetails = this.navParams.get("attendenceDeatils");
    this.teacherId = this.navParams.get('teacher');
    this.visitorId = this.navParams.get('visitorId');
    console.log(this.visitorId)
    this.period = this.navParams.get('period');
    this.grade = this.navParams.get('grade');
    this.subject = this.navParams.get('subject');

    this.setDetails();
  }

  setDetails() {
    this.attendenceDetails.forEach(element => {
      this.getChildDetails(element.studentId);
    });
  }

  getChildDetails(studentId) {
    this.httpClient.get("https://dev.ekstep.in/api/devcon/v3/profile/read/" + studentId)
      .subscribe((data: any) => {
        console.log(data.result.Student);
        this.names.push(data.result.Student.name);
      }, error => {
        console.log(error);
      });
  }

  sendNote(name) {
    let studId;
    console.log(name);
    this.attendenceDetails.forEach(element => {
      if (element.name === name) {
        studId = element.code;
      }
    });
    const popover = this.popoverCtrl.create(SendNoteComponent,
      {
        studentId: studId,
        visitorId: this.visitorId,
        period: this.period,
        grade: this.grade,
        subject: this.subject,
        teacher: this.teacherId
      }, {
        cssClass: 'popover-alert'
      });
    popover.present();
  }

  getStatus(name):any{
    for(var i=0;i<this.attendenceDetails.length;i++) {
      if(this.attendenceDetails[i].studentId === name){
        return this.attendenceDetails.present;
      }
    }
  }

}
