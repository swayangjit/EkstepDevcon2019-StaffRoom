import { Component } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import { Jsonp } from '@angular/http';

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
export class TeacherdayviewPage {

  constructor(private jsonp: Jsonp) {}

  events: any;

  ngOnInit() {
      this.jsonp.request('https://trial.mobiscroll.com/events-new/?callback=JSONP_CALLBACK').subscribe((res: any) => {
          this.events = res._body;
      });
  }

  dailySettings: MbscEventcalendarOptions = {
      display: 'inline',
      view: {
          eventList: { type: 'day' }
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



