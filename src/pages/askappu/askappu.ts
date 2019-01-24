import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { AppConstnats } from '../../app/app-constants';
import { TeacherRequestConstnats } from '../../data/teacher-request-constants';
import { HttpClient } from '@angular/common/http';
import { NavController, PopoverController, Navbar, NavParams } from 'ionic-angular';
import { DialogPopupComponent } from '../../components/dialog-popup/dialog-popup';
import { PopUpAlert } from '../../app/app.constant';
import { Interact, CData } from '../../model/telemetry';

@Component({
  selector: 'page-askappu',
  templateUrl: 'askappu.html',
})
export class AskappuPage {
  @ViewChild(Navbar) navBar: Navbar;
  appuAvatar = '../../assets/imgs/appu.png';
  userAvatar = '../../assets/imgs/teacher.png';
  usersAnswers = [];
  userSelectedCommands = [];
  teacherConversation;
  teacherRequestData;
  optionsIndex: string = '';
  temp = {};
  done = true;
  suggestions = true;
  teacherId: string = '';
  data: any;
  finalPackageId: string;
  periodId: string = '';
  visitorId: string = '';
  visitorName: string = '';
  packageItem = [];
  contentName: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private ref: ChangeDetectorRef,
    public httpClient: HttpClient,
    private popoverCtrl: PopoverController) {
    this.data = this.navParams.get('data');
    this.teacherId = this.navParams.get('teacherId');
    this.visitorId = this.navParams.get('visitorId');
    this.visitorName = this.navParams.get('visitorName');
    this.periodId = this.navParams.get('period');
    this.getConversation(this.teacherId)
    this.usersAnswers.push({ 'msg': this.teacherConversation.msg, 'command': '' });
  }

  getConversation(teacherId): any {
    switch (teacherId) {
      case 'TCH1':
        this.teacherConversation = AppConstnats.APPU_TCH1;
        break;
      case 'TCH2':
        this.teacherConversation = AppConstnats.APPU_TCH2;
        break;
      case 'TCH3':
        this.teacherConversation = AppConstnats.APPU_TCH3;
        break;

      case 'TCH4':
        this.teacherConversation = AppConstnats.APPU_TCH4;
        break;

      case 'TCH5':
        this.teacherConversation = AppConstnats.APPU_TCH5;
        break;

    }

  }

  selectCommand(data) {
    this.suggestions = false;
    if (this.teacherId == 'TCH4') {
      this.temp = { 'msg': data.msg, 'command': data.index == 0 ? '' : data.command };
    } else {
      this.temp = { 'msg': data.msg, 'command': data.command };
    }
    // this.temp = { 'msg': data.msg, 'command': data.index == 0 ? '' : data.command };
    this.userSelectedCommands.push(data.command);
    this.optionsIndex = data.index;
    this.usersAnswers.push(this.temp);
    if (data.options) {
      this.teacherConversation = data;
      this.suggestions = true;
    } else {
      console.log("No options/commands", this.userSelectedCommands);
      //Call API for creating content on this topic
      this.getSearchIdentifiers(this.teacherId, this.optionsIndex);
    }
    //Generate Telemetry
    this.sendTelemetry(this.generateInteractEvent());
    this.ref.detectChanges();
  }

  getSearchIdentifiers(teachID, optionsIndex: string) {
    var index = optionsIndex.indexOf(',') > 0 ? optionsIndex.split(',') : optionsIndex;
    switch (teachID) {
      case 'TCH1':
        if (index.length == 1) {
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[0];
        } else if (index.length > 1)
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[index[0]][index[1]];
        break;
      case 'TCH2':
        if (index.length == 1) {
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[0];
        } else if (index.length > 1)
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[index[0]][index[1]];
        break;
      case 'TCH3':
        if (index.length == 1) {
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[0];
        } else if (index.length > 1)
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[index[0]][index[1]];
        break;
      case 'TCH4':
        if (index.length == 1) {
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[0];
        } else if (index.length > 1)
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[index[0]][index[1]];
        break;
      case 'TCH5':
        if (index.length == 1) {
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[0];
        } else if (index.length > 1)
          this.teacherRequestData = TeacherRequestConstnats.TCH1_REQUEST_CONST[index[0]][index[1]];
        break;
    }

    this.httpClient.post("https://dev.ekstep.in/api/search/v3/search",
      this.teacherRequestData)
      .subscribe((data: any) => {
        // this.done = false;
        // this.ref.detectChanges();
        if (data.result.content) {
          this.getPackagedContent(data.result.content[0].identifier);
        }

      }, error => {
        console.log(error);
      });
    this.ref.detectChanges();
  }

  getPackagedContent(identifier: string) {
    const request = {
      "request": {
        "content": {
          "mediaType": "content",
          "visibility": "Default",
          "description": "DevCon",
          "name": "TestBook1",
          "contentType": "TextBook",
          "createdBy": this.visitorId,
          "teacherId": this.teacherId,
          "periodId": this.periodId,
          "code": "testbook1",
          "mimeType": "application/vnd.ekstep.content-collection",
          "framework": "devcon-appu",
          "children": [
            { "identifier": identifier }
          ]
        }
      }
    };

    const header = { headers: { 'x-Channel-Id': 'devcon.appu' } };
    this.httpClient.post("https://dev.ekstep.in/api/content/v3/create",
      request, header)
      .subscribe((data: any) => {
        this.finalPackageId = data.result.node_id;
        this.publishContent(this.finalPackageId);
      }, error => {
        console.log(error);
      });
  }

  publishContent(identifier: string) {
    const request = {
      "request": {
        "content": {
          "lastPublishedBy": "devcon"
        }
      }
    };

    this.httpClient.post("https://dev.ekstep.in/api/content/v3/publish/" + identifier,
      request)
      .subscribe((data: any) => {
        this.getPackageInformation(this.finalPackageId);
      }, error => {
        console.log(error);
      });
  }

  getPackageInformation(packageId: string) {
    this.httpClient.get("https://dev.ekstep.in/api/content/v3/read/" + packageId)
      .subscribe((data: any) => {
        console.log(data.result.content);
        this.done = false;
        this.ref.detectChanges();
        this.contentName = data.result.content.name;
        const packageData = data.result.content.children;
        for (var num = 0; num < packageData.length; num++) {
          this.packageItem.push(packageData[num].name);
        }
      }, error => {
        console.log(error);
      });
  }

  openPackageDetailsAlert() {
    const popover = this.popoverCtrl.create(DialogPopupComponent, {
      title: this.contentName,
      body: this.packageItem,
      periodId: this.periodId
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();
  }

  generateInteractEvent() {
    const cData: CData[] = [{ type: 'visitorid', id: this.visitorName }]
    let interact: Interact = {
      eid: 'INTERACT',
      ets: (new Date()).getTime(),
      ver: '3.0',
      context: { cData }
    }
    return interact;
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

  sendNotes(visitorId: string,
    periodId: string,
    grade: string,
    subject: string,
    teacherId: string,
    student: string,
    note: string) {
    const request = {
      "request": {
        "ptm": {
          "visitor": visitorId,
          "period": periodId,
          "grade": grade,
          "subject": subject,
          "teacher": teacherId,
          "student": student,
          "notes": note
        }
      }
    };

    this.httpClient.post(" https://dev.ekstep.in/api/ptm/v3/create",
      request)
      .subscribe((data: any) => {
        
      }, error => {
        console.log(error);
      });
  }


}
