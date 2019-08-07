import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerioddetailsPage } from '../pages/perioddetails/perioddetails';
import { SubjectListPage } from '../pages/subject-list/subject-list';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';
import { HomeUserFlowPage } from '../pages/home-user-flow/home-user-flow';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomeUserFlowPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}

