import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MbscEventcalendarOptions } from '@mobiscroll/angular';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {constructor(private jsonp: Jsonp) {}

events: any;

ngOnInit() {
    this.jsonp.request('https://trial.mobiscroll.com/events/?callback=JSONP_CALLBACK').subscribe((res: any) => {
        this.events = res._body;
    });
}

eventSettings: MbscEventcalendarOptions = {
    display: 'inline',
    view: {
        calendar: { type: 'week' },
        eventList: { type: 'day' }
    }
};
}
