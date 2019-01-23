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
            this.visitorName = this.navParams.get('vistorName');
            this.visitorId = this.navParams.get('visitorId');
        }

    events: any;

    ngOnInit() {
    }




    dailySettings: MbscEventcalendarOptions = {
        display: 'inline',
        view: {
            eventList: { type: 'day' }
        },
        onEventSelect: (event, inst) => {
            // this.getSearchIdentifiers();
            console.log(event);
            if (event.event.text && event.event.text !== "Lunch" && event.event.start.search('2019-01-24') == -1) {
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
            this.teacherId = 'TCH1';
            this.currentDate = event.date;
            this.getSearchIdentifiers();
           console.log("date changed",event.date);
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
                    // var temp:any = [];
                    temp.push({
                        "start": date+"T09:00:00+00:00",
                        "end": date+"T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
                    },
                    {
                        "start": date+"T11:00:00+00:00",
                        "end": date+"T12:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
                    }
                    ,
                    {
                        "start": date+"T12:00:00+00:00",
                        "end": date+"T1:00:00+00:00",
                        "text": "Lunch",
                        "color": "#008000",
                        "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
                    });
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
                    }
                    
                    this.events = temp;

                    this.ref.detectChanges();
                }

            }, error => {
                console.log(error);
            });
    }

    // getPackagedContent(identifier: string) {
    //     const request = {
    //         "request": {
    //             "content": {
    //                 "mediaType": "content",
    //                 "visibility": "Default",
    //                 "description": "DevCon",
    //                 "name": "TestBook1",
    //                 "contentType": "TextBook",
    //                 "createdBy": "visitorId",
    //                 "code": "testbook1",
    //                 "mimeType": "application/vnd.ekstep.content-collection",
    //                 "framework": "devcon-appu",
    //                 "children": [
    //                     { "identifier": identifier }
    //                 ]
    //             }
    //         }
    //     };

    //     const header = { headers: {'x-Channel-Id':'devcon.appu'} };
    //     this.httpClient.post("https://dev.ekstep.in/api/content/v3/create",
    //         request,header)
    //         .subscribe(data => {
    //             this.finalPackageId = data.result.node_id;
    //             this.getPackageInformation(this.finalPackageId);
    //         }, error => {
    //             console.log(error);
    //         });
    // }

    // getPackageInformation(packageId:string){
    //     this.httpClient.get("https://dev.ekstep.in/api/content/v3/read/"+packageId)
    //     .subscribe(data => {
    //         console.log(data.result.content);

    //     }, error => {
    //         console.log(error);
    //     });
    // }

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

