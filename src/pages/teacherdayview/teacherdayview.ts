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
   
    private teacherId:string;
    private visitorId:string= '';
    private visitorName:string= '';

    constructor(
        private qrScanner: QRScanner,
        private platform: Platform,
        private viewCtrl: ViewController,
        private navCtrl: NavController,
        public navParams: NavParams,) { 
            this.visitorName = this.navParams.get('vistorName');
            this.visitorId = this.navParams.get('visitorId');
        }

    events: any;

    ngOnInit() {
        this.teacherId = 'TCH1';
        this.events = AppConstnats.TCH1;
    }




    dailySettings: MbscEventcalendarOptions = {
        display: 'inline',
        view: {
            eventList: { type: 'day' }
        },
        onEventSelect: (event, inst) => {
            // this.getSearchIdentifiers();
            if (event.event.start.search('2019-01-24') == -1) {
                this.navCtrl.push(DetailviewPage,{
                    data: event,
                    teacherId: this.teacherId,
                    visitorId: this.visitorId,
                    visitorName:this.visitorName
                  });
            } else {
                this.navCtrl.push(AskappuPage,{
                    data: event,
                    teacherId: this.teacherId,
                    visitorId: this.visitorId,
                    visitorName:this.visitorName
                  });
            }

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

    // getSearchIdentifiers() {
    //     const request = {
    //         "request": {
    //             "filters": {
    //                 "objectType": "Content",
    //                 "status": []
    //             },
    //             "limit": 1,
    //             "fields": ["identifier"],
    //             "sort_by": { "lastUpdatedOn": "desc" }

    //         }
    //     };
    //     this.httpClient.post("https://dev.ekstep.in/api/search/v3/search",
    //         request)
    //         .subscribe(data => {
    //             if (data.result.content) {
    //                 data.result.content.forEach(element => {
    //                     const identifier = element.identifier;
    //                     console.log(identifier);
    //                     this.getPackagedContent(identifier);
    //                 });
    //             }

    //         }, error => {
    //             console.log(error);
    //         });
    // }

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

}

