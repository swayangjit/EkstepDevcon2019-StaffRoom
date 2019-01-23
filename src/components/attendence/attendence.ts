import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

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

  constructor(private navParams: NavParams) {
    this.attendenceDetails = this.navParams.get("attendenceDeatils");
    this.setDetails();
  }

  setDetails() {
    for(var i=0;i<this.attendenceDetails.length;i++) {
      this.names.push(this.attendenceDetails[i].studentId);
      this.status = this.attendenceDetails[i].present;
    }
  }

}
