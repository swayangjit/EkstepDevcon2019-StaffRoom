import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import { NavController } from 'ionic-angular';
import {DetailviewPage} from '../detailView/detailview'
// import { Jsonp } from '@angular/http';

mobiscroll.settings = {
    theme: 'material'
};

/**
 * Generated class for the TeacherdayviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teacherdayview',
  templateUrl: 'teacherdayview.html',
})
export class TeacherdayviewPage implements OnInit{

  constructor(
      private navCtrl : NavController
  ) {}

  events: any;

  ngOnInit() {
    //   this.jsonp.request('https://trial.mobiscroll.com/events-new/?callback=JSONP_CALLBACK').subscribe((res: any) => {
    //       this.events = res._body;
    //   });
    this.events = [
        {
            "start": "2019-01-21T13:00:00+00:00",
            "end": "2019-01-21T14:00:00+00:00",
            "text": "Class 2 &nbsp&nbsp&nbsp English &nbsp&nbsp&nbsp 100 no of students",
            "color": "#de3d83"
        },
        {
            "start": "2019-01-21T14:00:00+00:00",
            "end": "2019-01-21T15:00:00+00:00",
            "text": "Class 2 &nbsp&nbsp&nbsp English &nbsp&nbsp&nbsp 80 no of students",
            "color": "#f67944"
        },
        {
            "start": "2019-01-22T13:00:00+00:00",
            "end": "2019-01-22T14:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp Hindi &nbsp&nbsp&nbsp 50 no of students",
            "color": "#f67944"
        },
        {
            "start": "2019-01-22T14:00:00+00:00",
            "end": "2019-01-22T15:00:00+00:00",
            "text": "Class 5 &nbsp&nbsp&nbsp English &nbsp&nbsp&nbsp 300 no of students",
            "color": "#00aabb"
        }
      ];
  }

  dailySettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          eventList: { type: 'day' }
      },
      onEventSelect: (event, inst) => {
        console.log("DOM ID:",event.event._id);
        this.navCtrl.push(DetailviewPage);
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
}



