import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscEventcalendarOptions } from '@mobiscroll/angular';
import { NavController } from 'ionic-angular';
// import { Jsonp } from '@angular/http';
import { ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { Platform, Content, ViewController } from 'ionic-angular';
import 'rxjs/add/operator/map';

mobiscroll.settings = {
    theme: 'material'
};

@Component({
    selector: 'page-teacherdayview',
    templateUrl: 'teacherdayview.html',
})
export class TeacherdayviewPage implements OnInit {

    @ViewChild('content', { read: ElementRef })
    private content: ElementRef;
    private backButtonFunc: any;
    private timeTable;

    constructor(
        private qrScanner: QRScanner,
        private platform: Platform,
        private viewCtrl: ViewController) { }

    events: any;

    ngOnInit() {
        //   this.jsonp.request('https://trial.mobiscroll.com/events-new/?callback=JSONP_CALLBACK').subscribe((res: any) => {
        //       this.events = res._body;
        //   });
        this.events = [
            {
                "start": "2019-01-23T14:00:00+00:00",
                "end": "2019-01-23T15:00:00+00:00",
                "text": "Class 2 &nbsp&nbsp&nbsp English ",
                "color": "#de3d83"
            },
            {
                "start": "2019-01-24T14:00:00+00:00",
                "end": "2019-01-24T15:00:00+00:00",
                "text": "Class 4 &nbsp&nbsp&nbsp Hindi ",
                "color": "#f67944"
            }
        ];
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

    openQrCodeScanner() {
        this.handleBackButton();
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    this.hideContentBG();
                    this.qrScanner.show();
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {

                        console.log('Scanned something', text);
                        this.qrScanner.destroy();
                        this.qrScanner.hide();
                        scanSub.unsubscribe();
                        this.showContentBG();
                    });

                } else {
                    console.log('denied');
                }
            })
            .catch((e: any) => console.log('Error is', e));

    }

    // style="background: none transparent !important;"

    private hideContentBG() {
        (this.content.nativeElement as HTMLElement).setAttribute('hidden', 'true')
    }

    private showContentBG() {
        (this.content.nativeElement as HTMLElement).removeAttribute('hidden');
    }

    handleBackButton() {
        this.backButtonFunc = this.platform.registerBackButtonAction(() => {
            this.showContentBG();
            this.qrScanner.destroy();
            this.backButtonFunc();
        }, 10);

    }

    // getTimeTable() {
    //     const headers = new HttpHeaders()
    //         .set("X-CustomHeader", "custom header value");
    //     this.http.get('apipath').
    //         map(res => res.json()).subscribe(data => {
    //             this.timeTable = data.data.result;
    //         });
    // }

}

