import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SendNoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send-note',
  templateUrl: 'send-note.html'
})
export class SendNoteComponent {
  teacherId;
  visitorId;
  period;
  grade;
  subject;
  studentId;
  notes: any;

  constructor(private httpClient: HttpClient, private navParams: NavParams, private viewCtrl: ViewController) {
    this.teacherId = this.navParams.get('teacher');
    this.visitorId = this.navParams.get('visitorId');
    this.period = this.navParams.get('period');
    this.grade = this.navParams.get('grade');
    this.subject = this.navParams.get('subject');
    this.studentId = this.navParams.get('studentId');
  }

  sendNotes() {
    this.invokeApi(this.visitorId,this.period,this.grade,this.subject,this.teacherId,this.studentId,this.notes)
  }

  closeNotes() {
    this.viewCtrl.dismiss();
  }
  
  invokeApi(visitorId: string,
    periodId: string,
    grade: string,
    subject: string,
    teacherId: string,
    student: string,
    note: string) {
    const request = {
      "request": {
        "ptm": {
          "visitor": visitorId,
          "period": periodId,
          "grade": grade,
          "subject": subject,
          "teacher": teacherId,
          "student": student,
          "notes": note
        }
      }
    };
console.log(request);
    this.httpClient.post(" https://dev.ekstep.in/api/ptm/v3/create",
      request)
      .subscribe((data: any) => {
        console.log(data);
        this.viewCtrl.dismiss();
      }, error => {
        console.log(error);
      });
  }

}
