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
    private currentDate; 
    private teacherId:string;
    private visitorId:string= '';
    private visitorName:string= '';
    date;

    constructor(
        private qrScanner: QRScanner,
        private platform: Platform,
        private viewCtrl: ViewController,
        private navCtrl: NavController,
        private ref: ChangeDetectorRef,
        public navParams: NavParams,private httpClient: HttpClient) { 
            this.visitorName = this.navParams.get('visitorName');
            this.visitorId = this.navParams.get('visitorId');
        }

    events: any;

    ngOnInit() {
        this.teacherId = 'TCH1';
    }


    dailySettings: MbscEventcalendarOptions = {
        display: 'inline',
        view: {
            eventList: { type: 'day' }
        },
        onEventSelect: (event, inst) => {
            // this.getSearchIdentifiers();
            console.log(event);
            if (event.event.text && event.event.text !== "Lunch" ) {
                this.navCtrl.push(PerioddetailsPage,{
                    data: event,
                    teacherId: this.teacherId,
                    visitorId: this.visitorId,
                    visitorName:this.visitorName,
                    date:this.date,
                    teacherid:this.teacherId
                  });
            } else if(event.event.text && event.event.text !== "Lunch") {
                this.navCtrl.push(AskappuPage,{
                    data: event,
                    teacherId: this.teacherId,
                    visitorId: this.visitorId,
                    visitorName:this.visitorName
                  });
            }

        },
        onSetDate: (event, inst) => {
         
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

