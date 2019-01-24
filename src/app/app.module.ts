import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JsonpModule, Http, HttpModule } from '@angular/http';
import { TeacherdayviewPage } from '../pages/teacherdayview/teacherdayview';
import { QRScanner } from '@ionic-native/qr-scanner';
import { QrscannerPage } from '../pages/qrscanner/qrscanner';
import { DetailviewPage } from '../pages/detailview/detailview';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { RestProvider } from '../service/rest-provider';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import {AskappuPage} from '../pages/askappu/askappu'
import { ReportPage } from '../pages/report/report'
import { DialogPopupComponent } from '../components/dialog-popup/dialog-popup';
import { PerioddetailsPage } from '../pages/perioddetails/perioddetails';
import { AttendancePage } from '../pages/attendance/attendance';
import { ReportAlertComponent } from '../components/report-alert/report-alert';
import { HomeUserFlowPage } from '../pages/home-user-flow/home-user-flow';
import { ChildDetailsPage } from '../pages/child-details/child-details';
import { HomeqrscannerPage } from '../pages/homeqrscanner/homeqrscanner';
import { StudentviewPage } from '../pages/studentview/studentview';
import { AttendenceComponent } from '../components/attendence/attendence';
import { StudentcalendarviewPage } from '../pages/studentcalendarview/studentcalendarview';
import { SendNoteComponent } from '../components/send-note/send-note';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TeacherdayviewPage,
    QrscannerPage,
    DetailviewPage,
    AskappuPage,
    ReportPage,
    DialogPopupComponent,PerioddetailsPage,AttendancePage,
    ReportAlertComponent,
    HomeUserFlowPage,
    ChildDetailsPage,HomeqrscannerPage,
    AttendenceComponent,
    HomeqrscannerPage,StudentviewPage,StudentcalendarviewPage,
    SendNoteComponent
  ],
  imports: [ 
    MbscModule, 
    FormsModule, HttpModule,HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TeacherdayviewPage,
    DetailviewPage,
    QrscannerPage,
    AskappuPage,
    ReportPage,
    DialogPopupComponent,PerioddetailsPage,AttendancePage,
    ReportAlertComponent,
    HomeUserFlowPage,
    HomeqrscannerPage,
    ChildDetailsPage,
    AttendenceComponent,HomeqrscannerPage,StudentviewPage,StudentcalendarviewPage,
    SendNoteComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UniqueDeviceID,RestProvider,HttpClient
  ]
})
export class AppModule {}
