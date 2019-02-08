import { ReportAlertComponent } from './../../components/report-alert/report-alert';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, Events, Platform, ViewController, IonicApp, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { AttendancePage } from '../attendance/attendance';
//import { ReportAlertComponent } from '../../components/report-alert/report-alert';
//import { AskappuPage } from '../askappu/askappu';
// import { AttendenceComponent } from '../../components/attendence/attendence';
import { statsHeatMap } from '../../data/data';
// import { request } from 'https';

/**
 * Generated class for the PerioddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perioddetails',
  templateUrl: 'perioddetails.html',
})
export class PerioddetailsPage {
  periodResponse: any;
  data: any;
  topics = [];
  topic;
  avgEngagement: any;
  avgPerformance;
  avgAttendence: any;
  date: Date;
  studentSize = 5;
  studentStatistics: boolean = true;
  teacherId;
  visitorId;
  visitorName;
  topicInfo;
  showStartClass = false;
  backButtonFunc = undefined;
  practise: any;
  quiz: any;
  recall: any;
  revise: any;
  associations;
  details: any;
  count = 0;
  activePortal
  playing
  activePerformance = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpClient: HttpClient, private modalCtrl: ModalController, private popoverCtrl: PopoverController,
    public events: Events,
    private platform: Platform,
    private viewCtrl: ViewController,
    private ionicApp: IonicApp,
    private loadingCtrl: LoadingController,
    private zone: NgZone,
    private alertCtrl: AlertController) {
    this.getApiResponse();
    // this.data = this.navParams.get('data');

    // const date = this.navParams.get('date');
    // this.teacherId = this.navParams.get('teacherid');
    // this.visitorId = this.navParams.get('visitorId');
    // this.visitorName = this.navParams.get('visitorName');
    // this.data = this.data.event.data;
    this.data = { 'period': 'PTCH1_1', 'class': 'Class 3' };

    const date = '2019-02-06-';
    this.teacherId = 'TCH1';
    this.visitorId = 'VIS1';
    this.visitorName = 'VIS1';
    console.log(this.data);
    this.showStartClass = false;
    this.events.subscribe('periodId', (res) => {
      if (res) {
        this.getTopicsArray(res);
        this.showStartClass = true;
        console.log(this.showStartClass);
        console.log(res);
      }
    });
    this.associations = this.navParams.get('association');
    // this.associations = 'Smell';
    // this.getPeriodDetails(this.data.period, this.data.class, date, this.teacherId);
    this.handleBackButton();
  }

  getTopicsArray(periodId) {
    switch (periodId) {
      case 'PTCH1_1':
        this.topic = 'Taste,Smell';
        break;
      case 'PTCH1_2':
        this.topic = 'Taste,Smell';
        break;
      case 'PTCH2_1':
        this.topic = 'Sun,Planets,Earth';
        break;
      case 'PTCH3_1':
        this.topic = 'Types of Birds';
        break;
      case 'PTCH4_1':
        this.topic = 'Tropic of cancer';
        break;
      case 'PTCH5_1':
        this.topic = 'Inertia,Mass';
        break;
    }

  }

  showPlayingAlert() {
    const alert = this.alertCtrl.create({
      title: 'Playing....',
      // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      // buttons: ['OK']
      //enableBackdropDismiss : false
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerioddetailsPage');
  }

  // onClickAttendance() {
  //   let studentModal = this.modalCtrl.create(AttendancePage);
  //   studentModal.present();
  // }

  getPeriodDetails(periodId, classId, date, teacherId) {
    const request = {
      "request": {
        "periodId": periodId,
        "classId": classId,
        "date": date,
        "id": teacherId
      }
    };
    console.log('req body', request);
    this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read",
      request)
      .subscribe(data => {
        this.periodResponse = data;
        console.log('my response', this.periodResponse);
        this.date = this.periodResponse.start;
        console.log('date', this.date);
        for (var i = 0; i < this.periodResponse.topics.length; i++) {
          this.topics.push(this.periodResponse.topics[i]);
        }
        this.studentStatistics = this.periodResponse.engagementDetails.length;

        this.topic = this.topics.join(' , ');
        this.avgAttendence = this.periodResponse.attendance;
        this.avgEngagement = this.getAverage(this.periodResponse.engagementDetails);
        this.avgPerformance = this.getAverage(this.periodResponse.performanceDetails);
        if (this.periodResponse.students) {
          this.studentSize = this.periodResponse.students.length;
        }
        // this.startDate = this.periodResponse.start;
        // this.date = new Date(this.startDate);

      }, error => {
        console.log('error is', error);
        // this.topic = this.topics.join(' , ');
        // this.avgAttendence = 100;//this.periodResponse.attendance;
        // this.avgEngagement = 85;//this.getAverage(this.periodResponse.engagementDetails);
        // this.avgPerformance = 70;//this.getAverage(this.periodResponse.performanceDetails);
      });
  }

  getAverage(array): string {
    if (array) {
      let total: number = 0
      array.forEach(element => {
        total = total + Number(element.rate);
      });
      const avg = (total / array.length).toFixed(0);
      return avg;
    }
  }
  getApiResponse() {
    const loader = this.getLoader();
    loader.present();
    this.httpClient.get('https://dev.ekstep.in/api/dialcode/v3/question/read/geography').subscribe((response) => {
      console.log('response is =>', response);
      let data = response['result'].content;
      console.log('data is =>', data);
      data.forEach(item => {
        if (item.usecase === 'assess') {
          this.quiz = item;
        } else if (item.usecase === 'practice') {
          this.practise = item;
        } else if (item.usecase === 'recall') {
          this.recall = item;
        } else if (item.usecase === 'revise') {
          this.revise = item;
        }
      });
      loader.dismiss();
    })
  }

  // openHeatMap() {
  //   const popover = this.popoverCtrl.create(ReportAlertComponent, {
  //   }, {
  //       cssClass: 'popover-alert'
  //     });
  //   popover.present();
  // }

  openHeatMapForEngagement() {
    const popover = this.popoverCtrl.create(ReportAlertComponent, {
      heatMapData: statsHeatMap,// this.periodResponse.engagementDetails,
      title: "Engagement Report",
      pageName: "Engagement"
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();

  }

  // showAppuPage() {
  //   this.navCtrl.push(AskappuPage, {
  //     visitorId: this.visitorId,
  //     visitorName: this.visitorName,
  //     teacherId: this.teacherId,
  //     period: this.data.period
  //   });
  // }

  openMap() {
    this.presentPopOver(this.details);
  }

  openHeatMapForPerformance() {
    let request = {};
    request['topic'] = this.associations;
    let body = {
      request: request
    }
    console.log('request is =>' , body);
    this.httpClient.post('https://dev.ekstep.in/api/dialcode/v3/period/read ' , body)
    .subscribe((res)=>{
      console.log('response is =>' , res);
      this.details = res['performanceDetails'];
      console.log('details', this.details);
      this.avgPerformance = this.getAverage(res['performanceDetails']);
      console.log(this.avgPerformance);
      console.log(statsHeatMap);
    })
    
  }
  presentPopOver(details) {
    const popover = this.popoverCtrl.create(ReportAlertComponent, {
      heatMapData: details,
      title: "Performance Report",
      pageName: "Performance"
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();

  }

  // openAttendenceReport() {
  //   console.log(this.visitorId)
  //   const popover = this.popoverCtrl.create(AttendenceComponent, {
  //     attendenceDeatils: statsHeatMap,//this.periodResponse.attendanceDetails,
  //     visitorId: this.visitorId,
  //     period: this.data.period,
  //     grade: this.data.class,
  //     subject: this.data.subject,
  //     teacher: this.teacherId

  //   }, {
  //       cssClass: 'popover-alert'
  //     });
  //   popover.present();
  // }

  formatDate() {

  }

  handleBackButton() {
    this.backButtonFunc = this.platform.registerBackButtonAction(() => {
      const activePortal = this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
      } else if (this.navCtrl.canGoBack()) {
        this.navCtrl.pop();
      }
      this.backButtonFunc();
    }, 10);

  }
  quizStatus() {
    return this.httpClient.get('https://still-wildwood-30783.herokuapp.com/quiz/status');
  }

  startQuiz(quiz) {
    this.playing = true;
    this.httpClient.get(`https://still-wildwood-30783.herokuapp.com/quiz/start/${quiz.identifier}`)
      .subscribe((response) => {
        let interval = setInterval(() => {
          this.quizStatus().subscribe((res) => {
            console.log('quiz status =>', res);
            if (res && res['quizStatus'] === 'STARTED' || res['quizStatus'] === 'IN_PROGRESS') {
              this.playing = true;
            } else {
              this.zone.run(() => {
                this.playing = false;
                this.activePerformance = true;
                clearInterval(interval);
              })
            }
          })
        }, 4000);
      })
  }
  alert(contentData) {
    console.log('content data =>', contentData);
    this.zone.run(() => {
      console.log('asasasasa' + (<any>window).geniecanvas);
      const request: any = {};
      request.streaming = true;
      // const content ='{"contentAccess":[{"contentLearnerState":{},"status":1}],"contentData":{contentData"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg","artifactUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip","attributions":["DIKSHA"],"audience":["Learner"],"board":"State (Tamil Nadu)","channel":"in.ekstep","contentDisposition":"inline","contentEncoding":"gzip","contentType":"Resource","createdBy":"b9a3972c-a2ba-46fa-9279-59ce21957a83","createdOn":"2018-11-27T06:14:29.024+0000","creator":"DemoCreator Creator","description":"Grade 4 Math Activity","downloadUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar","framework":"NCF","gradeLevel":["Class 4"],"identifier":"do_21264270761184460811673","language":["English"],"lastPublishedOn":"2018-11-27T07:22:07.149+0000","medium":"English","mimeType":"application/vnd.ekstep.ecml-archive","name":"Mathematics Activity - Class 4","osId":"org.ekstep.quiz.app","owner":"DemoCreator Creator","pkgVersion":"2.0","previewUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest","resourceType":"Test","size":"562094.0","status":"Live","streamingUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest","subject":"Mathematics","variants":{"spine":{"ecarUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar","size":12590}},"versionKey":"1543303326455","downloadable":false,"contentAccess":[{"contentLearnerState":{},"status":1}],"contentMarker":[{"contentId":"do_21264270761184460811673","extraInfoMap":{"hierarchyInfo":[]},"marker":1,"uid":"89bafcca-e2a4-4494-bc2c-1d179ef0ab03"}]},"contentFeedback":[],"contentMarker":[{"contentId":"do_21264270761184460811673","extraInfoMap":{"hierarchyInfo":[]},"marker":1,"uid":"89bafcca-e2a4-4494-bc2c-1d179ef0ab03"}],"contentType":"resource","identifier":"do_21264270761184460811673","isAvailableLocally":false,"isUpdateAvailable":false,"lastUpdatedTime":0,"mimeType":"application/vnd.ekstep.ecml-archive","referenceCount":1}';
      const content = { "contentAccess": [{ "contentLearnerState": {}, "status": 1 }], "contentData": contentData, "contentFeedback": [], "contentMarker": [{ "contentId": contentData.identifier, "extraInfoMap": { "hierarchyInfo": [] }, "marker": 1, "uid": "89bafcca-e2a4-4494-bc2c-1d179ef0ab03" }], "contentType": "resource", "identifier": "do_21264270761184460811673", "isAvailableLocally": false, "isUpdateAvailable": false, "lastUpdatedTime": 0, "mimeType": "application/vnd.ekstep.ecml-archive", "referenceCount": 1 };
      console.log('content is =>', JSON.stringify(content));

      (<any>window).geniecanvas.play(JSON.stringify(content), JSON.stringify(request));
    });
  }
  getLoader(): any {
    return this.loadingCtrl.create({
      duration: 30000,
      spinner: 'crescent'
    });
  }

  ionViewWillEnter() {
    this.openHeatMapForPerformance();
  }
}

