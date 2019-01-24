import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild, ElementRef } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { TeacherdayviewPage } from '../pages/teacherdayview/teacherdayview';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';
import { HomeUserFlowPage } from '../pages/home-user-flow/home-user-flow';
import { StudentviewPage } from '../pages/studentview/studentview';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomeUserFlowPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 
}

