import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, ToastController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { TeacherdayviewPage } from '../teacherdayview/teacherdayview';
import { RestProvider } from '../../service/rest-provider';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { EData, Telemetry, Dimension } from '../../model/telemetry';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-qrscanner',
  templateUrl: 'qrscanner.html',
})
export class QrscannerPage {
  @ViewChild('content', { read: ElementRef })
  private content: ElementRef;
  private visitorInfo;
  private uniqueId;
  private backButtonFunc: any;
  private hideButton = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private qrScanner: QRScanner,
    private uniqueDeviceID: UniqueDeviceID,
    private restProvider: RestProvider,
    private platform: Platform,
    private viewCtrl: ViewController,
    public httpClient: HttpClient,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        this.uniqueId = uuid;
        console.log(uuid)
      })
      .catch((error: any) => console.log(error));
  }
  openQrCodeScanner() {
    this.hideButton = true;
    this.handleBackButton();
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.hideContentBG();
          this.qrScanner.show();
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {

            console.log('VisitorId', text);
            this.qrScanner.destroy();
            this.qrScanner.hide();
            scanSub.unsubscribe();
            this.showContentBG()
            this.getVisitorInformation(text);
           
            
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


  getVisitorInformation(visitorId: string) {
    const request = {
      "request": {
        "code": visitorId
      }
    };

    this.httpClient.post("https://dev.ekstep.in/api/devcon/v3/login",
      request)
      .subscribe((data: any) => {
        this.visitorInfo = data.result.Visitor
        const index = this.navCtrl.getActive().index;
        this.navCtrl.push(TeacherdayviewPage,{
          visitorId:this.visitorInfo.code,
          visitorName:this.visitorInfo.name
        }).then(() => {
          this.navCtrl.remove(index);
        });
        this.sendTelemetry(this.generateStartEvent(this.visitorInfo));
      }, error => {
        console.log(error);

      });

  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Unable to get Visitor information',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  sendTelemetry(event) {
    const request = {
      "events": [event]
    };

    this.httpClient.post("http://52.172.188.118:3000/v1/telemetry",
      request)
      .subscribe((data: any) => {
      }, error => {
        console.log(error);

      });

  }


  generateStartEvent(visitorInfo): Telemetry {

    const edata: EData = { type: 'staffroom', mode: 'play' };
    const dimension :Dimension={visitorId: visitorInfo.code,
      visitorName: visitorInfo.name,
      teacherId: 'TCH1',
      stallId: 'STA3',
      stallName: 'STAFFROOM',
      ideaId:'IDE10'};

    const telemetry: Telemetry = {
      eid: 'DC_START',
      did: this.uniqueId,
      ets: (new Date).getTime(),
      dimensions:dimension,
      edata: edata

    }
    return telemetry
  }

  handleBackButton() {
    this.backButtonFunc = this.platform.registerBackButtonAction(() => {
      this.showContentBG();
      this.qrScanner.destroy();
      this.viewCtrl.dismiss();
      this.hideButton = false;
      this.backButtonFunc();
    }, 10);
  }
}