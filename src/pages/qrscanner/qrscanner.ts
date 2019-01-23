import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { TeacherdayviewPage } from '../teacherdayview/teacherdayview';
import { RestProvider } from '../../service/rest-provider';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { EData, Telemetry } from '../../model/telemetry';
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
    private viewCtrl: ViewController) {
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
            const index = this.navCtrl.getActive().index;
            this.navCtrl.push(TeacherdayviewPage).then(() => {
              this.navCtrl.remove(index);
            });
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
    this.restProvider.getVisitorInfo(visitorId).subscribe(data => {
      this.visitorInfo = data
      this.sendTelemetry(JSON.stringify(this.generateStartEvent('', '')));
      this.navCtrl.push(TeacherdayviewPage, {
        visitorId: '',
        visitorName: ''
      });
    });
  }

  sendTelemetry(event: string) {
    this.restProvider.saveTelemetry(event).subscribe(data => { this.visitorInfo = data });
  }

  generateStartEvent(visitorId: string, visitorName: string): Telemetry {

    const edata: EData = { type: 'staffroom', mode: 'play' };
    const telemetry: Telemetry = {
      eid: 'DC_START',
      did: this.uniqueId,
      ets: (new Date).getTime(),
      visitorId: '',
      visitorName: '',
      profileId: '',
      profileType: 'TEACHER',
      stallId: '',
      stallName: 'STAFFROOM',
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