webpackJsonp([2],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detailview/detailview.module": [
		302,
		1
	],
	"../pages/homeqrscanner/homeqrscanner.module": [
		303,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUserFlowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_details_child_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeUserFlowPage = /** @class */ (function () {
    function HomeUserFlowPage(navCtrl, navParams, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.parentName = [];
    }
    HomeUserFlowPage.prototype.ionViewDidLoad = function () {
        this.getParentDetails();
    };
    HomeUserFlowPage.prototype.getParentDetails = function () {
        var _this = this;
        var request = {
            "id": "open-saber.registry.search",
            "ver": "1.0",
            "ets": "11234",
            "params": {
                "did": "",
                "key": "",
                "msgid": ""
            },
            "request": {
                "Parent": {}
            }
        };
        var header = {
            headers: {
                'x-authenticated-user-token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiI5NDAyODcwMC1jYWI0LTRkM2YtYWYyZi01ZmZmZjM5NGI1YjAiLCJleHAiOjE1NDgyMzg1NzQsIm5iZiI6MCwiaWF0IjoxNTQ4MjIwNTc0LCJpc3MiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJhZG1pbi1jbGkiLCJzdWIiOiI4NzRlZDhhNS03ODJlLTRmNmMtOGYzNi1lMDI4ODQ1NTkwMWUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI3YjAwMWUyYi0wMDZlLTRiOTAtYTU5Zi1lNDBiYmJlNTUzZDgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnt9LCJuYW1lIjoiQ3JlYXRpb24iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJudHB0ZXN0MTAyIiwiZ2l2ZW5fbmFtZSI6IkNyZWF0aW9uIiwiZmFtaWx5X25hbWUiOiIiLCJlbWFpbCI6ImFyY2hhbmFrKzFAaWxpbWkuaW4ifQ.V6EoG9i857Lx44Xo09uSa2bZSC8O89VG4Mu0QcO38G3krObPf118gNQ-N9OPbhFFP8V9Pb37BV7xDjm5utmec4gQaPwvqeA6D6m6x_MzTXfyBXZ-wG1tf_yAW8I0WSSARzKS0OankTYFPnUgMO0Zq89W0Qac89En9OPeM8VTk68INMOBp5Xj4h3SAhhGbC5DFxkDphY2fr5EMlRhmhkKRGJbqr3gJeqpeSmLtMrbt6DbapbkE7NKZGDCR_15hNuVSn1OQ33iCx5rZe7VZO4lKr-iVoAo8o6lcsNvG1AayBFPg4TqujjKHajZChQxE9BhWYj8yYYfyijqpz4I74Wtrg',
                "Access-Control-Allow-Origin": "*"
            }
        };
        this.httpClient.post("http://52.172.187.3:8080/search", request, header)
            .subscribe(function (data) {
            console.log('data is', data);
            _this.parentDetailsResponse = data.result;
            console.log(_this.parentDetailsResponse);
            _this.parentDetailsResponse.forEach(function (element) {
                _this.parentName.push(element.name);
            });
        }, function (error) {
            console.log(error);
        });
    };
    HomeUserFlowPage.prototype.navigateToChildDetailsPage = function (index) {
        console.log(typeof (this.parentDetailsResponse[index].children));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__child_details_child_details__["a" /* ChildDetailsPage */], {
            children: this.parentDetailsResponse[index].children
        });
    };
    HomeUserFlowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-user-flow',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/home-user-flow/home-user-flow.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Parent Directory</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let name of parentName; let i=index" (click)="navigateToChildDetailsPage(i)">\n    <ion-card-header >\n      {{name}}\n    </ion-card-header>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/home-user-flow/home-user-flow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomeUserFlowPage);
    return HomeUserFlowPage;
}());

//# sourceMappingURL=home-user-flow.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentcalendarview_studentcalendarview__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChildDetailsPage = /** @class */ (function () {
    function ChildDetailsPage(navCtrl, navParams, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.childrenDetail = [];
        this.childrenInfoList = [];
        console.log();
        this.childrenDetail = this.navParams.get("children");
        if (!Array.isArray(this.navParams.get("children"))) {
            this.childrenDetail = [this.navParams.get("children")];
        }
        this.childrenDetail.forEach(function (element) {
            _this.getChildDetails(_this.getChildName(element));
        });
    }
    ChildDetailsPage.prototype.getChildName = function (path) {
        return path.substring(path.lastIndexOf('/') + 1);
    };
    ChildDetailsPage.prototype.getChildDetails = function (studentId) {
        var _this = this;
        this.httpClient.get("https://dev.ekstep.in/api/devcon/v3/profile/read/" + studentId)
            .subscribe(function (data) {
            console.log(data.result.Student);
            _this.childrenInfoList.push(data.result.Student);
        }, function (error) {
            console.log(error);
        });
    };
    ChildDetailsPage.prototype.showStudentCalenderView = function (index) {
        var studentId = this.childrenDetail[index];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__studentcalendarview_studentcalendarview__["a" /* StudentcalendarviewPage */], {
            studentId: studentId
        });
    };
    ChildDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-child-details',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/child-details/child-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Child details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card *ngFor="let child of childrenInfoList; let i=index" (click)=\'showStudentCalenderView(i)\'>\n        <ion-card-header>\n          {{child.name}}\n        </ion-card-header>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/child-details/child-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ChildDetailsPage);
    return ChildDetailsPage;
}());

//# sourceMappingURL=child-details.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentcalendarviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/**
 * Generated class for the StudentcalendarviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StudentcalendarviewPage = /** @class */ (function () {
    function StudentcalendarviewPage(qrScanner, platform, viewCtrl, navCtrl, ref, navParams, httpClient) {
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.studentId = '';
        this.visitorName = '';
        this.studentId = this.navParams.get('studentId');
    }
    StudentcalendarviewPage.prototype.ngOnInit = function () {
    };
    StudentcalendarviewPage.prototype.handleBackButton = function () {
        var _this = this;
        this.backButtonFunc = this.platform.registerBackButtonAction(function () {
            _this.backButtonFunc();
        }, 10);
    };
    StudentcalendarviewPage.prototype.getSearchIdentifiers = function () {
        var _this = this;
        var date = this.formatDate(this.currentDate);
        this.date = date;
        this.httpClient.get("https://dev.ekstep.in/api/dialcode/v3/schedule/read/" + date + "/" + this.teacherId)
            .subscribe(function (data) {
            if (data) {
                var res = data[date + "_" + _this.teacherId];
                var temp = [];
                if (res) {
                    res.forEach(function (element) {
                        temp.push({
                            "start": element.start,
                            "end": element.end,
                            "text": element.grade + " &nbsp&nbsp&nbsp  " + element.subject,
                            "color": "#ddddd",
                            "data": { "class": element.grade, "subject": element.subject, "period": element.period }
                        });
                    });
                    temp.push({
                        "start": date + "T09:00:00+00:00",
                        "end": date + "T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    }, {
                        "start": date + "T09:00:00+00:00",
                        "end": date + "T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    }, {
                        "start": date + "T12:00:00+00:00",
                        "end": date + "T13:00:00+00:00",
                        "text": "Lunch",
                        "color": "#008000",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    });
                }
                _this.events = temp;
                _this.ref.detectChanges();
            }
        }, function (error) {
            console.log(error);
        });
    };
    StudentcalendarviewPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], StudentcalendarviewPage.prototype, "content", void 0);
    StudentcalendarviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentcalendarview',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/studentcalendarview/studentcalendarview.html"*/'<ion-header class="bg-primary white">\n  <ion-navbar>\n    <ion-title>\n      Scheduler\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="openQrCodeScanner()" id="qrIcon">\n          <img src="assets/imgs/ic_scanqr.png" class="tool-icon" height="30" width="30" float-end />\n      </button>\n  </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<!-- <mbsc-form> -->\n<div class="mbsc-grid">\n    <div class="mbsc-row">\n          <div class="mbsc-form-group w-100 m-0">\n                  <!-- <div class="mbsc-form-group-title" style="color: black;text-align: center">Jagadish</div> -->\n                  <!-- <div class="mbsc-form-group-title">Daily schedule</div> -->\n                  <!-- <mbsc-eventcalendar [data]="events" [options]="dailySettings">\n                  </mbsc-eventcalendar> -->\n              </div>\n        <!-- <div class="mbsc-col-sm-12 mbsc-col-md-4">\n            <div class="mbsc-form-group">\n                <div class="mbsc-form-group-title">Weekly schedule</div>\n                <mbsc-eventcalendar [data]="events" [options]="weeklySettings"></mbsc-eventcalendar>\n            </div>\n        </div>\n        <div class="mbsc-col-sm-12 mbsc-col-md-4">\n            <div class="mbsc-form-group">\n                <div class="mbsc-form-group-title">Monthly schedule</div>\n                <mbsc-eventcalendar [data]="events" [options]="monthlySettings"></mbsc-eventcalendar>\n            </div>\n        </div> -->\n    </div>\n</div>\n<!-- </mbsc-form> -->\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/studentcalendarview/studentcalendarview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], StudentcalendarviewPage);
    return StudentcalendarviewPage;
}());

//# sourceMappingURL=studentcalendarview.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerioddetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_report_alert_report_alert__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerioddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerioddetailsPage = /** @class */ (function () {
    function PerioddetailsPage(navCtrl, navParams, httpClient, modalCtrl, popoverCtrl, events, platform, viewCtrl, ionicApp, loadingCtrl, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.ionicApp = ionicApp;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.topics = [];
        this.studentSize = 5;
        this.studentStatistics = true;
        this.showStartClass = false;
        this.backButtonFunc = undefined;
        this.getApiResponse();
        // this.data = this.navParams.get('data');
        // const date = this.navParams.get('date');
        // this.teacherId = this.navParams.get('teacherid');
        // this.visitorId = this.navParams.get('visitorId');
        // this.visitorName = this.navParams.get('visitorName');
        // this.data = this.data.event.data;
        this.data = { 'period': 'PTCH1_1', 'class': 'Class 3' };
        var date = '2019-02-06-';
        this.teacherId = 'TCH1';
        this.visitorId = 'VIS1';
        this.visitorName = 'VIS1';
        console.log(this.data);
        this.showStartClass = false;
        this.events.subscribe('periodId', function (res) {
            if (res) {
                _this.getTopicsArray(res);
                _this.showStartClass = true;
                console.log(_this.showStartClass);
                console.log(res);
            }
        });
        // this.getPeriodDetails(this.data.period, this.data.class, date, this.teacherId);
        this.handleBackButton();
    }
    PerioddetailsPage.prototype.getTopicsArray = function (periodId) {
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
    };
    PerioddetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerioddetailsPage');
    };
    // onClickAttendance() {
    //   let studentModal = this.modalCtrl.create(AttendancePage);
    //   studentModal.present();
    // }
    PerioddetailsPage.prototype.getPeriodDetails = function (periodId, classId, date, teacherId) {
        var _this = this;
        var request = {
            "request": {
                "periodId": periodId,
                "classId": classId,
                "date": date,
                "id": teacherId
            }
        };
        console.log('req body', request);
        this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read", request)
            .subscribe(function (data) {
            _this.periodResponse = data;
            console.log('my response', _this.periodResponse);
            _this.date = _this.periodResponse.start;
            console.log('date', _this.date);
            for (var i = 0; i < _this.periodResponse.topics.length; i++) {
                _this.topics.push(_this.periodResponse.topics[i]);
            }
            _this.studentStatistics = _this.periodResponse.engagementDetails.length;
            _this.topic = _this.topics.join(' , ');
            _this.avgAttendence = _this.periodResponse.attendance;
            _this.avgEngagement = _this.getAverage(_this.periodResponse.engagementDetails);
            _this.avgPerformance = _this.getAverage(_this.periodResponse.performanceDetails);
            if (_this.periodResponse.students) {
                _this.studentSize = _this.periodResponse.students.length;
            }
            // this.startDate = this.periodResponse.start;
            // this.date = new Date(this.startDate);
        }, function (error) {
            console.log('error is', error);
            _this.topic = _this.topics.join(' , ');
            _this.avgAttendence = 100; //this.periodResponse.attendance;
            _this.avgEngagement = 85; //this.getAverage(this.periodResponse.engagementDetails);
            _this.avgPerformance = 70; //this.getAverage(this.periodResponse.performanceDetails);
        });
    };
    PerioddetailsPage.prototype.getAverage = function (array) {
        if (array) {
            var total_1 = 0;
            array.forEach(function (element) {
                total_1 = total_1 + Number(element.rate);
            });
            var avg = (total_1 / array.length).toFixed(0);
            return avg;
        }
    };
    PerioddetailsPage.prototype.getApiResponse = function () {
        var _this = this;
        var loader = this.getLoader();
        loader.present();
        this.httpClient.get('https://dev.ekstep.in/api/dialcode/v3/question/read/geography').subscribe(function (response) {
            console.log('response is =>', response);
            var data = response['result'].content;
            console.log('data is =>', data);
            data.forEach(function (item) {
                if (item.usecase === 'assess') {
                    _this.quiz = item;
                }
                else if (item.usecase === 'practice') {
                    _this.practise = item;
                }
                else if (item.usecase === 'recall') {
                    _this.recall = item;
                }
                else if (item.usecase === 'revise') {
                    _this.revise = item;
                }
            });
            loader.dismiss();
        });
    };
    // openHeatMap() {
    //   const popover = this.popoverCtrl.create(ReportAlertComponent, {
    //   }, {
    //       cssClass: 'popover-alert'
    //     });
    //   popover.present();
    // }
    PerioddetailsPage.prototype.openHeatMapForEngagement = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_report_alert_report_alert__["a" /* ReportAlertComponent */], {
            heatMapData: __WEBPACK_IMPORTED_MODULE_4__data_data__["a" /* statsHeatMap */],
            title: "Engagement Report",
            pageName: "Engagement"
        }, {
            cssClass: 'popover-alert'
        });
        popover.present();
    };
    // showAppuPage() {
    //   this.navCtrl.push(AskappuPage, {
    //     visitorId: this.visitorId,
    //     visitorName: this.visitorName,
    //     teacherId: this.teacherId,
    //     period: this.data.period
    //   });
    // }
    PerioddetailsPage.prototype.openHeatMapForPerformance = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_report_alert_report_alert__["a" /* ReportAlertComponent */], {
            heatMapData: __WEBPACK_IMPORTED_MODULE_4__data_data__["a" /* statsHeatMap */],
            title: "Performance Report",
            pageName: "Performance"
        }, {
            cssClass: 'popover-alert'
        });
        popover.present();
    };
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
    PerioddetailsPage.prototype.formatDate = function () {
    };
    PerioddetailsPage.prototype.handleBackButton = function () {
        var _this = this;
        this.backButtonFunc = this.platform.registerBackButtonAction(function () {
            var activePortal = _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
            }
            else if (_this.navCtrl.canGoBack()) {
                _this.navCtrl.pop();
            }
            _this.backButtonFunc();
        }, 10);
    };
    PerioddetailsPage.prototype.alert = function (contentData) {
        console.log('content data =>', contentData);
        this.zone.run(function () {
            console.log('asasasasa' + window.geniecanvas);
            var request = {};
            request.streaming = true;
            // const content ='{"contentAccess":[{"contentLearnerState":{},"status":1}],"contentData":{contentData"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg","artifactUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip","attributions":["DIKSHA"],"audience":["Learner"],"board":"State (Tamil Nadu)","channel":"in.ekstep","contentDisposition":"inline","contentEncoding":"gzip","contentType":"Resource","createdBy":"b9a3972c-a2ba-46fa-9279-59ce21957a83","createdOn":"2018-11-27T06:14:29.024+0000","creator":"DemoCreator Creator","description":"Grade 4 Math Activity","downloadUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar","framework":"NCF","gradeLevel":["Class 4"],"identifier":"do_21264270761184460811673","language":["English"],"lastPublishedOn":"2018-11-27T07:22:07.149+0000","medium":"English","mimeType":"application/vnd.ekstep.ecml-archive","name":"Mathematics Activity - Class 4","osId":"org.ekstep.quiz.app","owner":"DemoCreator Creator","pkgVersion":"2.0","previewUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest","resourceType":"Test","size":"562094.0","status":"Live","streamingUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest","subject":"Mathematics","variants":{"spine":{"ecarUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar","size":12590}},"versionKey":"1543303326455","downloadable":false,"contentAccess":[{"contentLearnerState":{},"status":1}],"contentMarker":[{"contentId":"do_21264270761184460811673","extraInfoMap":{"hierarchyInfo":[]},"marker":1,"uid":"89bafcca-e2a4-4494-bc2c-1d179ef0ab03"}]},"contentFeedback":[],"contentMarker":[{"contentId":"do_21264270761184460811673","extraInfoMap":{"hierarchyInfo":[]},"marker":1,"uid":"89bafcca-e2a4-4494-bc2c-1d179ef0ab03"}],"contentType":"resource","identifier":"do_21264270761184460811673","isAvailableLocally":false,"isUpdateAvailable":false,"lastUpdatedTime":0,"mimeType":"application/vnd.ekstep.ecml-archive","referenceCount":1}';
            var content = { "contentAccess": [{ "contentLearnerState": {}, "status": 1 }], "contentData": contentData, "contentFeedback": [], "contentMarker": [{ "contentId": contentData.identifier, "extraInfoMap": { "hierarchyInfo": [] }, "marker": 1, "uid": "89bafcca-e2a4-4494-bc2c-1d179ef0ab03" }], "contentType": "resource", "identifier": "do_21264270761184460811673", "isAvailableLocally": false, "isUpdateAvailable": false, "lastUpdatedTime": 0, "mimeType": "application/vnd.ekstep.ecml-archive", "referenceCount": 1 };
            console.log('content is =>', JSON.stringify(content));
            window.geniecanvas.play(JSON.stringify(content), JSON.stringify(request));
        });
    };
    PerioddetailsPage.prototype.getLoader = function () {
        return this.loadingCtrl.create({
            duration: 30000,
            spinner: 'crescent'
        });
    };
    PerioddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-perioddetails',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/perioddetails/perioddetails.html"*/'<ion-header class="bg-primary white">\n  <ion-navbar>\n    <ion-title>\n      Class\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()">\n        <ion-icon name="more" end></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card class="summary-card">\n    <ion-row class="st-analysis no-border">\n      <ion-col class="flex">\n        <ion-icon name="albums" class="mr-10"></ion-icon>\n        <div class="st-analysis-item">\n          <div class="lb-title">Class</div>\n          <div id="ClassId" class="lb-value">{{periodResponse?.grade}}</div>\n        </div>\n      </ion-col>\n      <ion-col class="flex">\n        <ion-icon name="book" class="mr-10"></ion-icon>\n        <div class="st-analysis-item">\n          <div class="lb-title">Subject</div>\n          <div id="SubjectId" class="lb-value">{{periodResponse?.subject}}</div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="st-analysis">\n      <ion-col class="flex">\n        <ion-icon name="list-box" class="mr-10"></ion-icon>\n        <div class="st-analysis-item">\n          <div class="lb-title">Topics</div>\n          <div id="TopicsId" class="lb-value"><span>{{topic}} </span></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="st-analysis">\n      <ion-col class="flex">\n        <ion-icon name="people" class="mr-10"></ion-icon>\n        <div class="st-analysis-item">\n          <div class="lb-title">Students</div>\n          <div class="lb-value" id="ClassId">{{studentSize}}</div>\n        </div>\n      </ion-col>\n      <ion-col class="flex">\n        <ion-icon name="timer" class="mr-10"></ion-icon>\n        <div class="st-analysis-item">\n          <div class="lb-title">Date & Time</div>\n          <div class="lb-value" id="SubjectId" *ngIf="date">23-01-2019 (10:00AM - 11:00AM)</div>\n          <div class="lb-value" id="SubjectId" *ngIf="!date">24-01-2019 (01:00PM - 06:00PM)</div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row class="student-stats" *ngIf=\'studentStatistics\'>\n    <!-- <ion-col class="p-0">\n      <ion-card padding (click)="openAttendenceReport()">\n        <div class="st-analysis-item">\n          <ion-icon name="hand" class="mr-10 secondary-color"></ion-icon>\n          <div class="lb-value stats py-5" id="AttendanceId"> {{avgAttendence}} % </div>\n          <div class="lb-title">Attendance</div>\n        </div>\n      </ion-card>\n    </ion-col> -->\n    <!-- <ion-col class="p-0">\n      <ion-card padding (click)="openHeatMapForEngagement()">\n        <div class="st-analysis-item">\n          <ion-icon name="git-merge" class="mr-10 primary-color"></ion-icon>\n          <div class="lb-value stats py-5" id="EngagementId">{{avgEngagement}} %</div>\n          <div class="lb-title">Engagement</div>\n        </div>\n      </ion-card>\n    </ion-col> -->\n    <ion-col class="p-0">\n      <ion-card padding>\n        <ion-row>\n          <ion-col col-1>\n            <ion-icon name="analytics" class="mr-10 tertiary-color"></ion-icon>\n          </ion-col>\n          <ion-col col-11>\n            <div class="st-analysis-item" (click)="openHeatMapForPerformance()">\n              <div class="lb-value stats py-5" id="PerformanceID">{{avgPerformance}} %</div>\n              <div class="lb-title">Performance</div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n          <div (click)="alert(revise)">Revise <ion-icon class="secondary-color "float-end name="play"></ion-icon></div>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n          <div (click)="alert(recall)">Recall <ion-icon class="secondary-color "float-end name="play"></ion-icon></div>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n          <div (click)="alert(practise)">Practice  <ion-icon class="secondary-color"  float-end name="play"></ion-icon></div>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-header>\n          <div (click)="alert(quiz)">Start Quiz</div>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/perioddetails/perioddetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */]])
    ], PerioddetailsPage);
    return PerioddetailsPage;
}());

//# sourceMappingURL=perioddetails.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportAlertComponent = /** @class */ (function () {
    function ReportAlertComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = this.navParams.get("title");
        this.pageName = this.navParams.get("pageName");
        this.data = this.navParams.get("heatMapData").map(function (item) { return ({
            country: item.studentId,
            product: item.topics,
            value: item.rate
        }); });
    }
    ReportAlertComponent.prototype.ionViewDidLoad = function () {
        this.draw();
    };
    ReportAlertComponent.prototype.draw = function () {
        var itemSize = 45, cellSize = itemSize - 1, margin = { top: 70, right: 5, bottom: 5, left: 100 };
        var width = 370 - margin.right - margin.left, height = 370 - margin.top - margin.bottom;
        var formatDate = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.time.format("%Y-%m-%d");
        var x_elements = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.set(this.data.map(function (item) { return item.product; })).values(), y_elements = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.set(this.data.map(function (item) { return item.country; })).values();
        var xScale = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.scale.ordinal()
            .domain(x_elements)
            .rangeBands([0, x_elements.length * itemSize]);
        var xAxis = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.svg.axis()
            .scale(xScale)
            .tickFormat(function (d) {
            return d;
        })
            .orient("top");
        var yScale = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.scale.ordinal()
            .domain(y_elements)
            .rangeBands([0, y_elements.length * itemSize]);
        var yAxis = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.svg.axis()
            .scale(yScale)
            .tickFormat(function (d) {
            return d;
        })
            .orient("left");
        var colorScale = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.scale.threshold()
            .domain([0, 100])
            .range(["rgb(165,42,42)", "#E67E22", "rgb(0,128,0)"]);
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3___default.a.select(this.reportCanvas.nativeElement)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var cells = svg.selectAll('rect')
            .data(this.data)
            .enter().append('g').append('rect')
            .attr('class', 'cell')
            .attr('width', cellSize)
            .attr('height', cellSize)
            .attr('y', function (d) { return yScale(d.country); })
            .attr('x', function (d) { return xScale(d.product); })
            .attr('fill', function (d) {
            // return d.value ? colorScale(d.value) : '#ededed' as any; 
            if (d.value && d.value <= 50) {
                return '#87CEEB';
            }
            else if (d.value && d.value > 50 && d.value <= 74) {
                return '#4F94CD	';
            }
            else if (d.value && d.value > 74 && d.value <= 100) {
                return '#1874CD';
            }
        });
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .selectAll('text')
            .attr('font-weight', 'normal');
        svg.append("g")
            .attr("class", "x axis")
            .call(xAxis)
            .selectAll('text')
            .attr('font-weight', 'normal')
            .style("text-anchor", "start")
            .attr("dx", ".8em")
            .attr("dy", ".5em")
            .attr("transform", function (d) {
            return "rotate(-65)";
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('reportcanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ReportAlertComponent.prototype, "reportCanvas", void 0);
    ReportAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'report-alert',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/report-alert/report-alert.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div #reportcanvas style="overflow: scroll;"></div>\n  <div style="margin-left: 20px">\n    {{pageName}} between 0% - 50% -- <span class="red-bg" height="5" width="5">&nbsp;&nbsp;&nbsp;&nbsp;</span>\n  </div>\n  <div style="margin-left: 20px">\n    {{pageName}} between 51% - 74% -- <span class="orrange-bg" height="5" width="5">&nbsp;&nbsp;&nbsp;&nbsp;</span>\n  </div>\n  <div style="margin-left: 20px">\n    {{pageName}} between 75% - 100% -- <span class="green-bg" height="5" width="5">&nbsp;&nbsp;&nbsp;&nbsp;</span>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/report-alert/report-alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportAlertComponent);
    return ReportAlertComponent;
}());

//# sourceMappingURL=report-alert.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return statsHeatMap; });
var statsHeatMap = [
    {
        "studentId": "STU1",
        "rate": "75",
        "topics": "Smell"
    },
    {
        "studentId": "STU1",
        "rate": "75",
        "topics": "Taste"
    },
    {
        "studentId": "STU2",
        "rate": "80",
        "topics": "Smell"
    },
    {
        "studentId": "STU2",
        "rate": "70",
        "topics": "Taste"
    },
    {
        "studentId": "STU3",
        "rate": "70",
        "topics": "Smell"
    },
    {
        "studentId": "STU3",
        "rate": "65",
        "topics": "Taste"
    },
    {
        "studentId": "STU4",
        "rate": "90",
        "topics": "Smell"
    },
    {
        "studentId": "STU4",
        "rate": "100",
        "topics": "Taste"
    },
    {
        "studentId": "STU5",
        "rate": "90",
        "topics": "Smell"
    },
    {
        "studentId": "STU5",
        "rate": "85",
        "topics": "Taste"
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherdayviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeacherdayviewPage = /** @class */ (function () {
    function TeacherdayviewPage(qrScanner, platform, viewCtrl, navCtrl, ref, navParams, httpClient) {
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.ref = ref;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.visitorId = '';
        this.visitorName = '';
        this.visitorName = this.navParams.get('visitorName');
        this.visitorId = this.navParams.get('visitorId');
    }
    TeacherdayviewPage.prototype.ngOnInit = function () {
        this.teacherId = 'TCH1';
    };
    TeacherdayviewPage.prototype.openQrCodeScanner = function () {
        var _this = this;
        this.handleBackButton();
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                _this.hideContentBG();
                _this.qrScanner.show();
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.destroy();
                    _this.qrScanner.hide();
                    scanSub_1.unsubscribe();
                    _this.showContentBG();
                });
            }
            else {
                console.log('denied');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    TeacherdayviewPage.prototype.hideContentBG = function () {
        this.content.nativeElement.setAttribute('hidden', 'true');
    };
    TeacherdayviewPage.prototype.showContentBG = function () {
        this.content.nativeElement.removeAttribute('hidden');
    };
    TeacherdayviewPage.prototype.handleBackButton = function () {
        var _this = this;
        this.backButtonFunc = this.platform.registerBackButtonAction(function () {
            _this.showContentBG();
            _this.qrScanner.destroy();
            _this.backButtonFunc();
        }, 10);
    };
    TeacherdayviewPage.prototype.getSearchIdentifiers = function () {
        var _this = this;
        var date = this.formatDate(this.currentDate);
        this.date = date;
        this.httpClient.get("https://dev.ekstep.in/api/dialcode/v3/schedule/read/" + date + "/" + this.teacherId)
            .subscribe(function (data) {
            if (data) {
                var res = data[date + "_" + _this.teacherId];
                var temp = [];
                if (res) {
                    res.forEach(function (element) {
                        temp.push({
                            "start": element.start,
                            "end": element.end,
                            "text": element.grade + " &nbsp&nbsp&nbsp  " + element.subject,
                            "color": "#ddddd",
                            "data": { "class": element.grade, "subject": element.subject, "period": element.period }
                        });
                    });
                    temp.push({
                        "start": date + "T09:00:00+00:00",
                        "end": date + "T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    }, {
                        "start": date + "T09:00:00+00:00",
                        "end": date + "T11:00:00+00:00",
                        "text": "",
                        "color": "#dedede",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    }, {
                        "start": date + "T12:00:00+00:00",
                        "end": date + "T13:00:00+00:00",
                        "text": "Lunch",
                        "color": "#008000",
                        "data": { "class": res[0].grade, "subject": res[0].subject, "period": res[0].period }
                    });
                }
                _this.events = temp;
                _this.ref.detectChanges();
            }
        }, function (error) {
            console.log(error);
        });
    };
    TeacherdayviewPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TeacherdayviewPage.prototype, "content", void 0);
    TeacherdayviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacherdayview',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/teacherdayview/teacherdayview.html"*/'<ion-header class="bg-primary white">\n    <ion-navbar>\n      <ion-title>\n        Scheduler\n      </ion-title>\n      <!-- <ion-buttons end>\n        <button ion-button icon-only (click)="openQrCodeScanner()" id="qrIcon">\n            <img src="assets/imgs/ic_scanqr.png" class="tool-icon" height="30" width="30" float-end />\n        </button>\n    </ion-buttons> -->\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<!-- <mbsc-form> -->\n  <div class="mbsc-grid">\n      <div class="mbsc-row">\n            <div class="mbsc-form-group w-100 m-0">\n                    <!-- <div class="mbsc-form-group-title" style="color: black;text-align: center">Jagadish</div> -->\n                    <!-- <div class="mbsc-form-group-title">Daily schedule</div> -->\n                    <!-- <mbsc-eventcalendar [data]="events" [options]="dailySettings">\n                    </mbsc-eventcalendar> -->\n                </div>\n          <!-- <div class="mbsc-col-sm-12 mbsc-col-md-4">\n              <div class="mbsc-form-group">\n                  <div class="mbsc-form-group-title">Weekly schedule</div>\n                  <mbsc-eventcalendar [data]="events" [options]="weeklySettings"></mbsc-eventcalendar>\n              </div>\n          </div>\n          <div class="mbsc-col-sm-12 mbsc-col-md-4">\n              <div class="mbsc-form-group">\n                  <div class="mbsc-form-group-title">Monthly schedule</div>\n                  <mbsc-eventcalendar [data]="events" [options]="monthlySettings"></mbsc-eventcalendar>\n              </div>\n          </div> -->\n      </div>\n  </div>\n<!-- </mbsc-form> -->\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/teacherdayview/teacherdayview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], TeacherdayviewPage);
    return TeacherdayviewPage;
}());

//# sourceMappingURL=teacherdayview.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogPopupComponent = /** @class */ (function () {
    function DialogPopupComponent(viewCtrl, navParams, events) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    DialogPopupComponent.prototype.ionViewWillEnter = function () {
        this.title = this.navParams.get('title');
        this.body = this.navParams.get('body');
        this.periodId = this.navParams.get('periodId');
    };
    DialogPopupComponent.prototype.close = function () {
        this.events.publish('periodId', this.periodId);
        this.viewCtrl.dismiss();
    };
    DialogPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'dialog-popup',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/dialog-popup/dialog-popup.html"*/'<ion-content>\n    <ion-row class="alert-header-padding">\n      <ion-col col-12>\n        <div class="alert-header">\n          <h5 class="alert-header-content"> {{title}} </h5>\n        </div> \n      </ion-col>\n    </ion-row>\n\n    <ion-row class="divider"></ion-row>\n    \n    <ion-row class="alert-content-body"> \n      <ion-item *ngFor=\'let item of body\'>{{item}}</ion-item> \n    </ion-row>\n\n    <ion-row>\n        <button ion-button full class="alert-button" (click)="close()" text-capitalize> OK. Got it. </button>\n      </ion-row>\n  </ion-content> '/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/dialog-popup/dialog-popup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], DialogPopupComponent);
    return DialogPopupComponent;
}());

//# sourceMappingURL=dialog-popup.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendNoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SendNoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SendNoteComponent = /** @class */ (function () {
    function SendNoteComponent(httpClient, navParams, viewCtrl) {
        this.httpClient = httpClient;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.teacherId = this.navParams.get('teacher');
        this.visitorId = this.navParams.get('visitorId');
        this.period = this.navParams.get('period');
        this.grade = this.navParams.get('grade');
        this.subject = this.navParams.get('subject');
        this.studentId = this.navParams.get('studentId');
    }
    SendNoteComponent.prototype.sendNotes = function () {
        this.invokeApi(this.visitorId, this.period, this.grade, this.subject, this.teacherId, this.studentId, this.notes);
    };
    SendNoteComponent.prototype.closeNotes = function () {
        this.viewCtrl.dismiss();
    };
    SendNoteComponent.prototype.invokeApi = function (visitorId, periodId, grade, subject, teacherId, student, note) {
        var _this = this;
        var request = {
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
        console.log(request);
        this.httpClient.post(" https://dev.ekstep.in/api/ptm/v3/create", request)
            .subscribe(function (data) {
            console.log(data);
            _this.viewCtrl.dismiss();
        }, function (error) {
            console.log(error);
        });
    };
    SendNoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'send-note',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/send-note/send-note.html"*/'<ion-content style="max-height: 50%">\n    <ion-row class="alert-content-body"> \n    \n        <ion-textarea [(ngModel)]="notes" placeholder="Enter Note"></ion-textarea>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <button ion-button full class="alert-button" (click)="sendNotes()" text-capitalize> Send Note </button>\n        </ion-col>\n        <ion-col>\n            <button ion-button full class="alert-button" (click)="closeNotes()" text-capitalize> Close </button>\n        </ion-col>\n      </ion-row>\n  </ion-content> '/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/send-note/send-note.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */]])
    ], SendNoteComponent);
    return SendNoteComponent;
}());

//# sourceMappingURL=send-note.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetailviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailviewPage = /** @class */ (function () {
    function DetailviewPage(navCtrl, navParams, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.pet = '';
        this.students = [];
        this.pet = 'puppies';
        this.data = this.navParams.get('data');
        this.data = this.data.event.data;
    }
    DetailviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailviewPage');
        this.students = [
            {
                id: 1,
                name: "Jagadish",
                attendance: "50%",
                engagement: "70%",
                perfomance: "100%"
            },
            {
                id: 2,
                name: "Marty McFly",
                attendance: "50%",
                engagement: "70%",
                perfomance: "100%"
            },
            {
                id: 3,
                name: "Rahul",
                attendance: "50%",
                engagement: "70%",
                perfomance: "100%"
            },
            {
                id: 4,
                name: "Ramesh",
                attendance: "50%",
                engagement: "70%",
                perfomance: "100%"
            },
            {
                id: 5,
                name: "Suresh",
                attendance: "50%",
                engagement: "70%",
                perfomance: "100%"
            }
        ];
        this.ref.detectChanges();
    };
    DetailviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailview',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/detailview/detailview.html"*/'<ion-header class="bg-primary white">\n  <ion-navbar>\n      <ion-title>\n          Summary\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="openModal()">\n              <ion-icon name="download" end></ion-icon>\n              <ion-icon name="print" end></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="pet" color="primary">\n      <ion-segment-button value="puppies">\n          Topic 1\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n          Topic 2\n      </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n\n<ion-content>\n  <div [ngSwitch]="pet">\n      <div *ngSwitchCase="\'puppies\'">\n          <ion-card class="m-0 w-100 no-shadow pb-5 no-border no-radius">\n              <ion-item class="no-bg tile-title">\n                  <h1 class="m-0">{{data.period}}</h1>\n              </ion-item>\n              <ion-row class="pl-16">\n                  <ion-col class="pl-0">\n                      <span id="classId" class="classId lb-value pr-5">{{data.class}}</span> | <span id="subjectId" class="subjectId lb-value pr-5 pl-5">{{data.subject}}</span>\n                      | <span id="studentNo" class="studentNo lb-value pl-5">10 Student(s)</span>\n                  </ion-col>\n              </ion-row>\n              <ion-row class="pl-16 st-analysis">\n                  <ion-col class="pl-0 flex">\n                      <ion-icon name="hand" class="mr-5"></ion-icon>\n                      <div class="st-analysis-item">\n                          <div id="attendanceId" class="lb-value">100%</div>\n                          <div class="lb-title">Attendance</div>\n                      </div>\n                  </ion-col>\n                  <ion-col class="pl-0 flex">\n                      <ion-icon name="git-merge" class="mr-5"></ion-icon>\n                      <div class="st-analysis-item">\n                          <div id="engagementId" class="lb-value">70%</div>\n                          <div class="lb-title">Engagement</div>\n                      </div>\n                  </ion-col>\n                  <ion-col class="pl-0 flex">\n                      <ion-icon name="flash" class="mr-5"></ion-icon>\n                      <div class="st-analysis-item">\n                          <div id="perfomanceId" class="lb-value">80%</div>\n                          <div class="lb-title">Perfomance</div>\n                      </div>\n                  </ion-col>\n              </ion-row>\n\n          </ion-card>\n          <ion-item-divider>\n              Students\n          </ion-item-divider>\n          <div class="container">\n              <ion-card class="pb-5" *ngFor="let stud of students" >\n                  <ion-item>\n                      <ion-avatar item-start>\n                          <div class="student-pic">\n                              <span>{{stud.name[0]}}</span>\n                          </div>\n                      </ion-avatar>\n                      <h1>{{stud.name}}</h1>\n                  </ion-item>\n                  <ion-row class="pl-16 st-analysis">\n                      <ion-col class="pl-0 flex">\n                          <ion-icon name="hand" class="mr-5"></ion-icon>\n                          <div class="st-analysis-item">\n                              <div id="attendanceId" class="lb-value">{{stud.attendance}}</div>\n                              <div class="lb-title">Attendance</div>\n                          </div>\n                      </ion-col>\n                      <ion-col class="pl-0 flex">\n                          <ion-icon name="git-merge" class="mr-5"></ion-icon>\n                          <div class="st-analysis-item">\n                              <div id="engagementId" class="lb-value">{{stud.engagement}}</div>\n                              <div class="lb-title">Engagement</div>\n                          </div>\n                      </ion-col>\n                      <ion-col class="pl-0 flex">\n                          <ion-icon name="flash" class="mr-5"></ion-icon>\n                          <div class="st-analysis-item">\n                              <div id="perfomanceId" class="lb-value">{{stud.perfomance}}</div>\n                              <div class="lb-title">Perfomance</div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-card>\n          </div>\n      </div>\n\n      <div *ngSwitchCase="\'kittens\'">\n          demo value\n      </div>\n  </div>\n\n</ion-content>\n\n\n\nCollapse \n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/detailview/detailview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], DetailviewPage);
    return DetailviewPage;
}());

//# sourceMappingURL=detailview.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeqrscannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_rest_provider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_user_flow_home_user_flow__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the HomeqrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeqrscannerPage = /** @class */ (function () {
    function HomeqrscannerPage(navCtrl, navParams, qrScanner, uniqueDeviceID, restProvider, platform, viewCtrl, httpClient, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.uniqueDeviceID = uniqueDeviceID;
        this.restProvider = restProvider;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.hideButton = false;
    }
    HomeqrscannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            _this.uniqueId = uuid;
            console.log(uuid);
        })
            .catch(function (error) { return console.log(error); });
    };
    HomeqrscannerPage.prototype.openQrCodeScanner = function () {
        var _this = this;
        this.hideButton = true;
        this.handleBackButton();
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                _this.hideContentBG();
                _this.qrScanner.show();
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('VisitorId', text);
                    _this.qrScanner.destroy();
                    _this.qrScanner.hide();
                    scanSub_1.unsubscribe();
                    _this.showContentBG();
                    _this.getVisitorInformation(text);
                });
            }
            else {
                console.log('denied');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    HomeqrscannerPage.prototype.hideContentBG = function () {
        this.content.nativeElement.setAttribute('hidden', 'true');
    };
    HomeqrscannerPage.prototype.showContentBG = function () {
        this.content.nativeElement.removeAttribute('hidden');
    };
    HomeqrscannerPage.prototype.getVisitorInformation = function (visitorId) {
        var _this = this;
        var request = {
            "request": {
                "code": visitorId
            }
        };
        // https://dev.ekstep.in/api/devcon/v3/profile/read/{id}
        this.httpClient.post("https://dev.ekstep.in/api/devcon/v3/login", request)
            .subscribe(function (data) {
            _this.visitorInfo = data.result.Visitor;
            _this.sendTelemetry(_this.generateStartEvent(_this.visitorInfo));
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_user_flow_home_user_flow__["a" /* HomeUserFlowPage */], {
                visitorId: _this.visitorInfo.code,
                visitorName: _this.visitorInfo.name
            }).then(function () {
                _this.navCtrl.remove(index);
            });
        }, function (error) {
            console.log(error);
        });
    };
    HomeqrscannerPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Unable to get Visitor information',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomeqrscannerPage.prototype.sendTelemetry = function (event) {
        var request = {
            "events": [event]
        };
        this.httpClient.post("http://52.172.188.118:3000/v1/telemetry", request)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    HomeqrscannerPage.prototype.generateStartEvent = function (visitorInfo) {
        var edata = { type: 'staffroom', mode: 'play' };
        var dimension = { visitorId: visitorInfo.code,
            visitorName: visitorInfo.name,
            teacherId: '',
            stallId: 'STA4',
            stallName: 'HOME',
            ideaId: 'IDE12', };
        var telemetry = {
            eid: 'DC_START',
            did: this.uniqueId,
            ets: (new Date).getTime(),
            dimensions: dimension,
            edata: edata
        };
        return telemetry;
    };
    HomeqrscannerPage.prototype.handleBackButton = function () {
        var _this = this;
        this.backButtonFunc = this.platform.registerBackButtonAction(function () {
            _this.showContentBG();
            _this.qrScanner.destroy();
            _this.viewCtrl.dismiss();
            _this.hideButton = false;
            _this.backButtonFunc();
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomeqrscannerPage.prototype, "content", void 0);
    HomeqrscannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homeqrscanner',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/homeqrscanner/homeqrscanner.html"*/'<!--\n  Generated template for the HomeqrscannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>homeqrscanner</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/homeqrscanner/homeqrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_3__service_rest_provider__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], HomeqrscannerPage);
    return HomeqrscannerPage;
}());

//# sourceMappingURL=homeqrscanner.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacherdayview_teacherdayview__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_qr_scanner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_qrscanner_qrscanner__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detailview_detailview__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_rest_provider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_askappu_askappu__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_report_report__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dialog_popup_dialog_popup__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_perioddetails_perioddetails__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_attendance_attendance__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_report_alert_report_alert__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_user_flow_home_user_flow__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_child_details_child_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_homeqrscanner_homeqrscanner__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_studentview_studentview__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_attendence_attendence__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_studentcalendarview_studentcalendarview__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_send_note_send_note__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_qrscanner_qrscanner__["a" /* QrscannerPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detailview_detailview__["a" /* DetailviewPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_askappu_askappu__["a" /* AskappuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_dialog_popup_dialog_popup__["a" /* DialogPopupComponent */], __WEBPACK_IMPORTED_MODULE_19__pages_perioddetails_perioddetails__["a" /* PerioddetailsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_21__components_report_alert_report_alert__["a" /* ReportAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_user_flow_home_user_flow__["a" /* HomeUserFlowPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_child_details_child_details__["a" /* ChildDetailsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_homeqrscanner_homeqrscanner__["a" /* HomeqrscannerPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_attendence_attendence__["a" /* AttendenceComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_homeqrscanner_homeqrscanner__["a" /* HomeqrscannerPage */], __WEBPACK_IMPORTED_MODULE_25__pages_studentview_studentview__["a" /* StudentviewPage */], __WEBPACK_IMPORTED_MODULE_27__pages_studentcalendarview_studentcalendarview__["a" /* StudentcalendarviewPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_send_note_send_note__["a" /* SendNoteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detailview/detailview.module#DetailviewPageModule', name: 'DetailviewPage', segment: 'detailview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeqrscanner/homeqrscanner.module#HomeqrscannerPageModule', name: 'HomeqrscannerPage', segment: 'homeqrscanner', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* JsonpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detailview_detailview__["a" /* DetailviewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_qrscanner_qrscanner__["a" /* QrscannerPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_askappu_askappu__["a" /* AskappuPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_dialog_popup_dialog_popup__["a" /* DialogPopupComponent */], __WEBPACK_IMPORTED_MODULE_19__pages_perioddetails_perioddetails__["a" /* PerioddetailsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_21__components_report_alert_report_alert__["a" /* ReportAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_user_flow_home_user_flow__["a" /* HomeUserFlowPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_homeqrscanner_homeqrscanner__["a" /* HomeqrscannerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_child_details_child_details__["a" /* ChildDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_attendence_attendence__["a" /* AttendenceComponent */], __WEBPACK_IMPORTED_MODULE_24__pages_homeqrscanner_homeqrscanner__["a" /* HomeqrscannerPage */], __WEBPACK_IMPORTED_MODULE_25__pages_studentview_studentview__["a" /* StudentviewPage */], __WEBPACK_IMPORTED_MODULE_27__pages_studentcalendarview_studentcalendarview__["a" /* StudentcalendarviewPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_send_note_send_note__["a" /* SendNoteComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_14__service_rest_provider__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_perioddetails_perioddetails__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_perioddetails_perioddetails__["a" /* PerioddetailsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(jsonp) {
        this.jsonp = jsonp;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/home/home.html"*/'<ion-content>\n  <!-- <mbsc-eventcalendar [data]="events" [options]="eventSettings"></mbsc-eventcalendar> -->\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrscannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacherdayview_teacherdayview__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_rest_provider__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the QrscannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QrscannerPage = /** @class */ (function () {
    function QrscannerPage(navCtrl, navParams, qrScanner, uniqueDeviceID, restProvider, platform, viewCtrl, httpClient, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.uniqueDeviceID = uniqueDeviceID;
        this.restProvider = restProvider;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.httpClient = httpClient;
        this.toastCtrl = toastCtrl;
        this.hideButton = false;
    }
    QrscannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            _this.uniqueId = uuid;
            console.log(uuid);
        })
            .catch(function (error) { return console.log(error); });
    };
    QrscannerPage.prototype.openQrCodeScanner = function () {
        var _this = this;
        this.hideButton = true;
        this.handleBackButton();
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                _this.hideContentBG();
                _this.qrScanner.show();
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('VisitorId', text);
                    _this.qrScanner.destroy();
                    _this.qrScanner.hide();
                    scanSub_1.unsubscribe();
                    _this.showContentBG();
                    _this.getVisitorInformation(text);
                });
            }
            else {
                console.log('denied');
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    QrscannerPage.prototype.hideContentBG = function () {
        this.content.nativeElement.setAttribute('hidden', 'true');
    };
    QrscannerPage.prototype.showContentBG = function () {
        this.content.nativeElement.removeAttribute('hidden');
    };
    QrscannerPage.prototype.getVisitorInformation = function (visitorId) {
        var _this = this;
        var request = {
            "request": {
                "code": visitorId
            }
        };
        this.httpClient.post("https://dev.ekstep.in/api/devcon/v3/login", request)
            .subscribe(function (data) {
            _this.visitorInfo = data.result.Visitor;
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */], {
                visitorId: _this.visitorInfo.code,
                visitorName: _this.visitorInfo.name
            }).then(function () {
                _this.navCtrl.remove(index);
            });
            _this.sendTelemetry(_this.generateStartEvent(_this.visitorInfo));
        }, function (error) {
            console.log(error);
        });
    };
    QrscannerPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Unable to get Visitor information',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    QrscannerPage.prototype.sendTelemetry = function (event) {
        var request = {
            "events": [event]
        };
        this.httpClient.post("http://52.172.188.118:3000/v1/telemetry", request)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    QrscannerPage.prototype.generateStartEvent = function (visitorInfo) {
        var edata = { type: 'staffroom', mode: 'play' };
        var dimension = { visitorId: visitorInfo.code,
            visitorName: visitorInfo.name,
            teacherId: 'TCH1',
            stallId: 'STA3',
            stallName: 'STAFFROOM',
            ideaId: 'IDE10' };
        var telemetry = {
            eid: 'DC_START',
            did: this.uniqueId,
            ets: (new Date).getTime(),
            dimensions: dimension,
            edata: edata
        };
        return telemetry;
    };
    QrscannerPage.prototype.handleBackButton = function () {
        var _this = this;
        this.backButtonFunc = this.platform.registerBackButtonAction(function () {
            _this.showContentBG();
            _this.qrScanner.destroy();
            _this.viewCtrl.dismiss();
            _this.hideButton = false;
            _this.backButtonFunc();
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], QrscannerPage.prototype, "content", void 0);
    QrscannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrscanner',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/qrscanner/qrscanner.html"*/'<!--\n  Generated template for the QrscannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content #content>\n  <div style="font-weight: bold; font-size: 1.4em; text-align: center; margin-top: 10px;">\n    <h1>Staffroom and Home</h1>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf="!hideButton">\n  <ion-buttons center>\n    <button ion-button block (click)="openQrCodeScanner()" class="footer-button">\n      Click To Scan QR code.\n    </button>\n  </ion-buttons>\n</ion-footer>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/qrscanner/qrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_4__service_rest_provider__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], QrscannerPage);
    return QrscannerPage;
}());

//# sourceMappingURL=qrscanner.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskappuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_constants__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dialog_popup_dialog_popup__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AskappuPage = /** @class */ (function () {
    function AskappuPage(navCtrl, navParams, ref, httpClient, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.httpClient = httpClient;
        this.popoverCtrl = popoverCtrl;
        this.appuAvatar = '../../assets/imgs/appu.png';
        this.userAvatar = '../../assets/imgs/teacher.png';
        this.usersAnswers = [];
        this.userSelectedCommands = [];
        this.optionsIndex = '';
        this.temp = {};
        this.done = true;
        this.suggestions = true;
        this.teacherId = '';
        this.periodId = '';
        this.visitorId = '';
        this.visitorName = '';
        this.packageItem = [];
        this.data = this.navParams.get('data');
        this.teacherId = this.navParams.get('teacherId');
        this.visitorId = this.navParams.get('visitorId');
        this.visitorName = this.navParams.get('visitorName');
        this.periodId = this.navParams.get('period');
        this.getConversation(this.teacherId);
        this.usersAnswers.push({ 'msg': this.teacherConversation.msg, 'command': '' });
    }
    AskappuPage.prototype.getConversation = function (teacherId) {
        switch (teacherId) {
            case 'TCH1':
                this.teacherConversation = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* AppConstnats */].APPU_TCH1;
                break;
            case 'TCH2':
                this.teacherConversation = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* AppConstnats */].APPU_TCH2;
                break;
            case 'TCH3':
                this.teacherConversation = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* AppConstnats */].APPU_TCH3;
                break;
            case 'TCH4':
                this.teacherConversation = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* AppConstnats */].APPU_TCH4;
                break;
            case 'TCH5':
                this.teacherConversation = __WEBPACK_IMPORTED_MODULE_1__app_app_constants__["a" /* AppConstnats */].APPU_TCH5;
                break;
        }
    };
    AskappuPage.prototype.selectCommand = function (data) {
        this.suggestions = false;
        if (this.teacherId == 'TCH4') {
            this.temp = { 'msg': data.msg, 'command': data.index == 0 ? '' : data.command };
        }
        else {
            this.temp = { 'msg': data.msg, 'command': data.command };
        }
        // this.temp = { 'msg': data.msg, 'command': data.index == 0 ? '' : data.command };
        this.userSelectedCommands.push(data.command);
        this.optionsIndex = data.index;
        this.usersAnswers.push(this.temp);
        if (data.options) {
            this.teacherConversation = data;
            this.suggestions = true;
        }
        else {
            console.log("No options/commands", this.userSelectedCommands);
            //Call API for creating content on this topic
            this.getSearchIdentifiers(this.teacherId, this.optionsIndex);
        }
        //Generate Telemetry
        this.sendTelemetry(this.generateInteractEvent());
        this.ref.detectChanges();
    };
    AskappuPage.prototype.getSearchIdentifiers = function (teachID, optionsIndex) {
        var _this = this;
        var index = optionsIndex.indexOf(',') > 0 ? optionsIndex.split(',') : optionsIndex;
        switch (teachID) {
            case 'TCH1':
                if (index.length == 1) {
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[0];
                }
                else if (index.length > 1)
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[index[0]][index[1]];
                break;
            case 'TCH2':
                if (index.length == 1) {
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[0];
                }
                else if (index.length > 1)
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[index[0]][index[1]];
                break;
            case 'TCH3':
                if (index.length == 1) {
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[0];
                }
                else if (index.length > 1)
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[index[0]][index[1]];
                break;
            case 'TCH4':
                if (index.length == 1) {
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[0];
                }
                else if (index.length > 1)
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[index[0]][index[1]];
                break;
            case 'TCH5':
                if (index.length == 1) {
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[0];
                }
                else if (index.length > 1)
                    this.teacherRequestData = __WEBPACK_IMPORTED_MODULE_2__data_teacher_request_constants__["a" /* TeacherRequestConstnats */].TCH1_REQUEST_CONST[index[0]][index[1]];
                break;
        }
        this.httpClient.post("https://dev.ekstep.in/api/search/v3/search", this.teacherRequestData)
            .subscribe(function (data) {
            // this.done = false;
            // this.ref.detectChanges();
            if (data.result.content) {
                _this.getPackagedContent(data.result.content[0].identifier);
            }
        }, function (error) {
            console.log(error);
        });
        this.ref.detectChanges();
    };
    AskappuPage.prototype.getPackagedContent = function (identifier) {
        var _this = this;
        var request = {
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
        var header = { headers: { 'x-Channel-Id': 'devcon.appu' } };
        this.httpClient.post("https://dev.ekstep.in/api/content/v3/create", request, header)
            .subscribe(function (data) {
            _this.finalPackageId = data.result.node_id;
            _this.publishContent(_this.finalPackageId);
        }, function (error) {
            console.log(error);
        });
    };
    AskappuPage.prototype.publishContent = function (identifier) {
        var _this = this;
        var request = {
            "request": {
                "content": {
                    "lastPublishedBy": "devcon"
                }
            }
        };
        this.httpClient.post("https://dev.ekstep.in/api/content/v3/publish/" + identifier, request)
            .subscribe(function (data) {
            _this.getPackageInformation(_this.finalPackageId);
        }, function (error) {
            console.log(error);
        });
    };
    AskappuPage.prototype.getPackageInformation = function (packageId) {
        var _this = this;
        this.httpClient.get("https://dev.ekstep.in/api/content/v3/read/" + packageId)
            .subscribe(function (data) {
            console.log(data.result.content);
            _this.done = false;
            _this.ref.detectChanges();
            _this.contentName = data.result.content.name;
            var packageData = data.result.content.children;
            for (var num = 0; num < packageData.length; num++) {
                _this.packageItem.push(packageData[num].name);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AskappuPage.prototype.openPackageDetailsAlert = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_dialog_popup_dialog_popup__["a" /* DialogPopupComponent */], {
            title: this.contentName,
            body: this.packageItem,
            periodId: this.periodId
        }, {
            cssClass: 'popover-alert'
        });
        popover.present();
    };
    AskappuPage.prototype.generateInteractEvent = function () {
        var cData = [{ type: 'visitorid', id: this.visitorName }];
        var interact = {
            eid: 'INTERACT',
            ets: (new Date()).getTime(),
            ver: '3.0',
            context: { cData: cData }
        };
        return interact;
    };
    AskappuPage.prototype.sendTelemetry = function (event) {
        var request = {
            "events": [event]
        };
        this.httpClient.post("http://52.172.188.118:3000/v1/telemetry", request)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    AskappuPage.prototype.sendNotes = function (visitorId, periodId, grade, subject, teacherId, student, note) {
        var request = {
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
        this.httpClient.post(" https://dev.ekstep.in/api/ptm/v3/create", request)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Navbar */])
    ], AskappuPage.prototype, "navBar", void 0);
    AskappuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-askappu',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/askappu/askappu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Appu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="message-wrap">\n      <div class="message" [class.left]="true">\n          <img class="user-img" [src]="appuAvatar" alt="" src="">\n          <div class="msg-detail">\n            <div class="msg-info">\n              <p>Appu</p>\n            </div>\n            <div class="msg-content">\n              <span class="triangle"></span>\n              <p class="line-breaker ">Hey {{visitorName}}, I am Appu your personal assistant !</p>\n              <div>\n              </div>\n            </div>\n          </div>\n      </div>\n    <div class="main" *ngFor="let cmd of usersAnswers; let element=last;">\n        <div class="message" [class.right]="true" *ngIf="cmd.command.length > 0">\n            <img class="user-img" [src]="userAvatar" alt="" src="">\n            <div class="msg-detail">\n              <div class="msg-info">\n                <p>You</p>\n              </div>\n              <div class="msg-content" style="background-color: #e0ffc6;">\n                <span class="triangle" style="background-color: #e0ffc6;"></span>\n                <p class="line-breaker" style="color: black">{{cmd.command}}</p>\n              </div>\n            </div>\n          </div>\n      <div class="message" [class.left]="true">\n          <img class="user-img" [src]="appuAvatar" alt="" src="">\n          <div class="msg-detail">\n            <div class="msg-info">\n              <p>Appu</p>\n            </div>\n            <div class="msg-content">\n              <span class="triangle"></span>\n              <p class="line-breaker" [innerHTML]="cmd.msg"></p>\n              <ion-spinner name="dots" *ngIf="!suggestions && element && done"></ion-spinner>\n              <div>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>  \n  </div>\n  <ion-list style="position: absolute;padding-left: 60px;" *ngIf="suggestions">\n    <button *ngFor="let item of teacherConversation.options;" ion-button round (click)="selectCommand(item)" style="font-size: 10px;">{{item.command}}</button>\n  </ion-list>\n  <button ion-button block round style="position: absolute;margin-left: 5%;width: 90%;" *ngIf="!done" (click)="openPackageDetailsAlert()">Check your package</button>\n</ion-content>\n\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/askappu/askappu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* PopoverController */]])
    ], AskappuPage);
    return AskappuPage;
}());

//# sourceMappingURL=askappu.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstnats; });
var AppConstnats = /** @class */ (function () {
    function AppConstnats() {
    }
    AppConstnats.TCH1 = [
        {
            "start": "2019-01-23T10:00:00+00:00",
            "end": "2019-01-23T11:00:00+00:00",
            "text": "Class 3 &nbsp&nbsp&nbsp EVS ",
            "color": "#de3d83",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_1" }
        },
        {
            "start": "2019-01-24T09:00:00+00:00",
            "end": "2019-01-24T11:00:00+00:00",
            "text": "",
            "color": "#dedede",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        },
        {
            "start": "2019-01-24T11:00:00+00:00",
            "end": "2019-01-24T13:00:00+00:00",
            "text": "",
            "color": "#dedede",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T14:00:00+00:00",
            "text": "Lunch",
            "color": "#008000",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        },
        {
            "start": "2019-01-24T14:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 3 &nbsp&nbsp&nbsp EVS ",
            "color": "#f67944",
            "data": { "class": "Class 3", "subject": "EVS", "period": "PTCH1_2" }
        }
    ];
    AppConstnats.TCH2 = [
        {
            "start": "2019-01-23T11:00:00+00:00",
            "end": "2019-01-23T12:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp Geography ",
            "color": "#de3d83",
            "data": { "class": "Class 3", "subject": "Geography", "period": "PTCH2_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp Geography ",
            "color": "#f67944",
            "data": { "class": "Class 4", "subject": "Geography", "period": "PTCH2_2" }
        }
    ];
    AppConstnats.TCH3 = [
        {
            "start": "2019-01-23T14:00:00+00:00",
            "end": "2019-01-23T15:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp EVS ",
            "color": "#de3d83",
            "data": { "class": "Class 4", "subject": "EVS", "period": "PTCH3_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 4 &nbsp&nbsp&nbsp EVS ",
            "color": "#f67944",
            "data": { "class": "Class 4", "subject": "EVS", "period": "PTCH3_2" }
        }
    ];
    AppConstnats.TCH4 = [
        {
            "start": "2019-01-23T14:00:00+00:00",
            "end": "2019-01-23T15:00:00+00:00",
            "text": "Class 5 &nbsp&nbsp&nbsp Geography ",
            "color": "#de3d83",
            "data": { "class": "Class 4", "subject": "Geography", "period": "PTCH4_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 5 &nbsp&nbsp&nbsp EVS ",
            "color": "#f67944",
            "data": { "class": "Class 5", "subject": "Geography", "period": "PTCH4_2" }
        }
    ];
    AppConstnats.TCH5 = [
        {
            "start": "2019-01-23T15:00:00+00:00",
            "end": "2019-01-23T16:00:00+00:00",
            "text": "Class 8 &nbsp&nbsp&nbsp Science ",
            "color": "#de3d83",
            "data": { "class": "Class 8", "subject": "Science", "period": "PTCH5_1" }
        },
        {
            "start": "2019-01-24T13:00:00+00:00",
            "end": "2019-01-24T18:00:00+00:00",
            "text": "Class 8 &nbsp&nbsp&nbsp Science ",
            "color": "#f67944",
            "data": { "class": "Class 8", "subject": "Science", "period": "PTCH5_2" }
        }
    ];
    AppConstnats.APPU_TCH1 = {
        "msg": "You have covered the topics <b>Taste</b> and <b>Smell</b> in your previous period and the class performance is good in those topics. Do you want to conduct a quick test on those topics? Additionally, you can also start teaching the next topic <b>See</b>",
        "options": [
            {
                "command": "Conduct an Exam on the topics Taste and Smell",
                "msg": "Noted. Creating a package right away...",
                "index": '0'
            },
            {
                "command": "Teach the topic Smell",
                "msg": "How would you like to create a package?",
                "options": [
                    {
                        "command": "With Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '1,0'
                    },
                    {
                        "command": "Without Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '1,1'
                    }
                ]
            }
        ]
    };
    AppConstnats.APPU_TCH2 = {
        "msg": "You have covered the topics <b>Sun</b>, <b>Planets</b> and <b>Earth</b> in your previous period for this class and the class performance is not satisfactory. Practice material for these topics would help your students. Do you want me to create a package with practice material for these topics? Additionally, you can also start teaching the next topic <b>See</b>",
        "options": [
            {
                "command": "Create Practice Material for last class topics",
                "msg": "Add an assessment?",
                "index": '0',
                "options": [
                    {
                        "command": "Yes",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,0'
                    },
                    {
                        "command": "No",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,1'
                    }
                ]
            },
            {
                "command": "Teach the topic Moon",
                "msg": "How would you like to create a package?",
                "index": '1',
                "options": [
                    {
                        "command": "With Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '1,0'
                    },
                    {
                        "command": "Without Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '1,1'
                    }
                ]
            }
        ]
    };
    AppConstnats.APPU_TCH3 = {
        "msg": "The performance and engagement of your class in the previous period is not satisfactory. It will be helpful if you provide supplementary material for your students in the topic <b>Types of Birds</b>",
        "options": [
            {
                "command": "Get Supplementary Content for Types of Birds",
                "msg": "Do you also want to add an assessment to the package?",
                "index": '0',
                "options": [
                    {
                        "command": "Yes",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,0'
                    },
                    {
                        "command": "No",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,1'
                    }
                ]
            }
        ]
    };
    AppConstnats.APPU_TCH4 = {
        "msg": "Oops... Most of your students are absent for your previous class where you have covered the topic <b>Tropic of Cancer</b>. Do you want repeat the class? Alternatively, you can move ahead to the next topic <b>Tropic of capricorn</b>.",
        "options": [
            {
                "command": "Do you want to repeat the class?",
                "msg": "Do you want to repeat the class?",
                "index": '0',
                "options": [
                    {
                        "command": "Yes",
                        "msg": "How would you like to create a package?",
                        "index": '0,0',
                        "options": [
                            {
                                "command": "With Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index": '0,0,0'
                            },
                            {
                                "command": "Without Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index": '0,0,1'
                            }
                        ]
                    },
                    {
                        "command": "No, I will Teach the next topic",
                        "msg": "How would you like to create a package?",
                        "index": '1,0',
                        "options": [
                            {
                                "command": "With Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index": '1,1,0'
                            },
                            {
                                "command": "Without Assessment",
                                "msg": "Noted. Creating a package right away...",
                                "index": '1,1,1'
                            }
                        ]
                    }
                ]
            }
        ]
    };
    AppConstnats.APPU_TCH5 = {
        "msg": "You have covered the topics <b>Inertia</b> and <b>Mass</b> in your previous period. However, the attendance is very low and also the enagement & performance of the students who attended is not satisfactory. I strongly recommend you to repeat the class, this time along with additional material for each topic.",
        "options": [
            {
                "command": "Repeat the class",
                "msg": "How would you like to create a package?",
                "index": '0',
                "options": [
                    {
                        "command": "With Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,0'
                    },
                    {
                        "command": "Without Assessment",
                        "msg": "Noted. Creating a package right away...",
                        "index": '0,1'
                    }
                ]
            }
        ]
    };
    return AppConstnats;
}());

//# sourceMappingURL=app-constants.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherRequestConstnats; });
var TeacherRequestConstnats = /** @class */ (function () {
    function TeacherRequestConstnats() {
    }
    TeacherRequestConstnats.TCH1_REQUEST_CONST = [
        {
            "request": {
                "filters": {
                    "objectType": "Content",
                    "topic": ["Taste", "Smell"],
                    "keywords": ["dc_assessment"],
                    "status": []
                },
                "limit": 5,
                "fields": ["identifier"],
                "sort_by": { "lastUpdatedOn": "desc" }
            }
        },
        [{
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["See"],
                        "keywords": ["dc_primary", "dc_assessment"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            },
            {
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["See"],
                        "keywords": ["dc_primary"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }]
    ];
    TeacherRequestConstnats.TCH2_REQUEST_CONST = [
        [{
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["Sun", "Planets", "Earth"],
                        "keywords": ["dc_practise", "dc_assessment"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }, {
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["Sun", "Planets", "Earth"],
                        "keywords": ["dc_practise"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }],
        [{
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["See"],
                        "keywords": ["dc_primary", "dc_assessment"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }, {
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["See"],
                        "keywords": ["dc_primary"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }]
    ];
    TeacherRequestConstnats.TCH3_REQUEST_CONST = [
        {
            "request": {
                "filters": {
                    "objectType": "Content",
                    "topic": ["Types of Birds"],
                    "keywords": ["dc_secondary", "dc_assessment"],
                    "status": []
                },
                "limit": 5,
                "fields": ["identifier"],
                "sort_by": { "lastUpdatedOn": "desc" }
            }
        }, {
            "request": {
                "filters": {
                    "objectType": "Content",
                    "topic": ["Types of Birds"],
                    "keywords": ["dc_secondary"],
                    "status": []
                },
                "limit": 5,
                "fields": ["identifier"],
                "sort_by": { "lastUpdatedOn": "desc" }
            }
        }
    ];
    TeacherRequestConstnats.TCH4_REQUEST_CONST = [
        [{
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["Tropic of Cancer"],
                        "keywords": ["dc_primary", "dc_assessment"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }, {
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["Tropic of Cancer"],
                        "keywords": ["dc_primary"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }], [{
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["Inertia"],
                        "keywords": ["dc_primary", "dc_assessment"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }, {
                "request": {
                    "filters": {
                        "objectType": "Content",
                        "topic": ["Inertia"],
                        "keywords": ["dc_primary"],
                        "status": []
                    },
                    "limit": 5,
                    "fields": ["identifier"],
                    "sort_by": { "lastUpdatedOn": "desc" }
                }
            }]
    ];
    TeacherRequestConstnats.TCH5_REQUEST_CONST = [
        {
            "request": {
                "filters": {
                    "objectType": "Content",
                    "topic": ["Inertia", "Mass"],
                    "keywords": ["dc_primary", "dc_assessment"],
                    "status": []
                },
                "limit": 5,
                "fields": ["identifier"],
                "sort_by": { "lastUpdatedOn": "desc" }
            }
        }, {
            "request": {
                "filters": {
                    "objectType": "Content",
                    "topic": ["Inertia", "Mass"],
                    "keywords": ["dc_primary"],
                    "status": []
                },
                "limit": 5,
                "fields": ["identifier"],
                "sort_by": { "lastUpdatedOn": "desc" }
            }
        }
    ];
    return TeacherRequestConstnats;
}());

//# sourceMappingURL=teacher-request-constants.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_data__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        this.draw();
    };
    ReportPage.prototype.draw = function () {
        var itemSize = 35, cellSize = itemSize - 1, margin = { top: 70, right: 5, bottom: 5, left: 50 };
        var width = 370 - margin.right - margin.left, height = 500 - margin.top - margin.bottom;
        var formatDate = __WEBPACK_IMPORTED_MODULE_2_d3__["time"].format("%Y-%m-%d");
        var data = __WEBPACK_IMPORTED_MODULE_3__data_data__["a" /* statsHeatMap */].map(function (item) {
            var newItem = {};
            newItem.country = item.x;
            newItem.product = item.y;
            newItem.value = item.value;
            return newItem;
        });
        var x_elements = __WEBPACK_IMPORTED_MODULE_2_d3__["set"](data.map(function (item) { return item.product; })).values(), y_elements = __WEBPACK_IMPORTED_MODULE_2_d3__["set"](data.map(function (item) { return item.country; })).values();
        var xScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scale"].ordinal()
            .domain(x_elements)
            .rangeBands([0, x_elements.length * itemSize]);
        var xAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["svg"].axis()
            .scale(xScale)
            .tickFormat(function (d) {
            return d;
        })
            .orient("top");
        var yScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scale"].ordinal()
            .domain(y_elements)
            .rangeBands([0, y_elements.length * itemSize]);
        var yAxis = __WEBPACK_IMPORTED_MODULE_2_d3__["svg"].axis()
            .scale(yScale)
            .tickFormat(function (d) {
            return d;
        })
            .orient("left");
        var colorScale = __WEBPACK_IMPORTED_MODULE_2_d3__["scale"].threshold()
            .domain([0, 100])
            .range(["rgb(165,42,42)", "#E67E22", "rgb(0,128,0)"]);
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](this.reportCanvas.nativeElement)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var cells = svg.selectAll('rect')
            .data(data)
            .enter().append('g').append('rect')
            .attr('class', 'cell')
            .attr('width', cellSize)
            .attr('height', cellSize)
            .attr('y', function (d) { return yScale(d.country); })
            .attr('x', function (d) { return xScale(d.product); })
            .attr('fill', function (d) {
            // return d.value ? colorScale(d.value) : '#ededed' as any; 
            if (d.value && d.value <= 50) {
                return 'rgb(165,42,42)';
            }
            else if (d.value && d.value > 50 && d.value <= 74) {
                return 'rgb(184,134,11)';
            }
            else if (d.value && d.value > 74 && d.value <= 100) {
                return 'rgb(0,128,0)';
            }
        });
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .selectAll('text')
            .attr('font-weight', 'normal');
        svg.append("g")
            .attr("class", "x axis")
            .call(xAxis)
            .selectAll('text')
            .attr('font-weight', 'normal')
            .style("text-anchor", "start")
            .attr("dx", ".8em")
            .attr("dy", ".5em")
            .attr("transform", function (d) {
            return "rotate(-65)";
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('reportcanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ReportPage.prototype, "reportCanvas", void 0);
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/report/report.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <div #reportcanvas style="overflow: scroll;"></div>\n    <div style="margin-left: 20px">\n      Attendence between 0% - 50% -- <span class ="red-bg" height="5" width="5" >&nbsp;&nbsp;&nbsp;&nbsp;</span> \n    </div>\n    <div style="margin-left: 20px">\n        Attendence between 51% - 74% -- <span class ="orrange-bg" height="5" width="5" >&nbsp;&nbsp;&nbsp;&nbsp;</span> \n      </div>\n      <div style="margin-left: 20px">\n          Attendence between 75% - 100% -- <span class ="green-bg" height="5" width="5" >&nbsp;&nbsp;&nbsp;&nbsp;</span> \n        </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendancePage = /** @class */ (function () {
    function AttendancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancePage');
    };
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/attendance/attendance.html"*/'<!--\n  Generated template for the PresentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Present</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="container">\n        <ion-card class="pb-5">\n            <ion-item>\n                <ion-avatar item-start>\n                    <div class="student-pic">\n                        <span>M</span>\n                    </div>\n                </ion-avatar>\n                <h1>Marty McFly</h1>\n                <p><ion-icon name="hand" class="present"></ion-icon> Present</p>  \n            </ion-item>\n            \n        </ion-card>\n\n        <ion-card class="pb-5">\n            <ion-item>\n                <ion-avatar item-start>\n                    <div class="student-pic">\n                        <span>A</span>\n                    </div>\n                </ion-avatar>\n                <h1>Abhishek KP</h1>\n                <p><ion-icon name="hand" class="absent"></ion-icon> Absent</p>  \n            </ion-item>\n            \n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/attendance/attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StudentviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StudentviewPage = /** @class */ (function () {
    function StudentviewPage(navCtrl, navParams, ref, popoverCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.popoverCtrl = popoverCtrl;
        this.httpClient = httpClient;
        this.data = [];
        this.showCard = false;
        this.eventData = this.navParams.get('data');
        this.studentId = this.getChildId(this.navParams.get('studentId'));
        this.date = this.formatDate(this.eventData.date);
        this.period = this.eventData.event.data.period;
        this.grade = this.eventData.event.data.class;
    }
    StudentviewPage.prototype.ionViewDidLoad = function () {
        this.getRecommendedContent1();
        this.getPeriodDetails(this.period, this.grade, this.date, this.studentId);
    };
    StudentviewPage.prototype.getChildId = function (path) {
        return path.substring(path.lastIndexOf('/') + 1);
    };
    StudentviewPage.prototype.getRecommendedContent1 = function () {
        var _this = this;
        var request = {
            "request": {
                "filters": {
                    "objectType": "Content",
                    "topic": ["Types of Birds"],
                    "keywords": ["dc_secondary", "dc_practise"],
                    "status": []
                },
                "limit": 20,
                "sort_by": { "lastUpdatedOn": "desc" }
            }
        };
        this.httpClient.post("https://dev.ekstep.in/api/search/v3/search", request)
            .subscribe(function (data) {
            console.log(data);
            _this.apiResponse = data;
            if (data.result.content) {
            }
        }, function (error) {
            console.log(error);
        });
        this.ref.detectChanges();
    };
    StudentviewPage.prototype.getRecommendedContent = function () {
        var _this = this;
        this.data = [];
        this.apiResponse.result.content.forEach(function (element) {
            _this.data.push(element.name);
            _this.icon = element.appIcon;
        });
        this.showCard = true;
        this.ref.detectChanges();
        this.scrollToBottom();
    };
    StudentviewPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 300);
    };
    // showPackage() {
    //   const popover = this.popoverCtrl.create(DialogPopupComponent, {
    //     title: "this.contentName",
    //     body: ['sudip','sudip']
    //   }, {
    //       cssClass: 'popover-alert'
    //     });
    //   popover.present();
    StudentviewPage.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    StudentviewPage.prototype.getPeriodDetails = function (periodId, classId, date, studentId) {
        var _this = this;
        var request = {
            "request": {
                "periodId": periodId,
                "classId": classId,
                "date": date,
                "id": studentId
            }
        };
        this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read", request)
            .subscribe(function (data) {
            _this.periodResponse = data;
            _this.studentClass = _this.periodResponse.grade || "Class 5";
            _this.studentSubject = _this.periodResponse.subject || "EVS";
            _this.topic1 = _this.periodResponse.topics[0] || "Topic 1";
            _this.topic2 = _this.periodResponse.topics[1] || "Topic 2";
            _this.attendance = _this.periodResponse.attendanceDetails == 'Yes' ? true : false;
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], StudentviewPage.prototype, "content", void 0);
    StudentviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studentview',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/studentview/studentview.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bg-primary white">\n  <ion-navbar>\n    <ion-title>\n      Class Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div padding>\n    <ion-row>\n      <ion-col col-4>\n        <ion-label class="ft-16">Name</ion-label>\n      </ion-col>\n      <ion-col col-8>\n        <ion-label class="cl-gray ft-16">{{studentId}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4>\n        <ion-label class="ft-16">Class</ion-label>\n      </ion-col>\n      <ion-col col-8>\n        <ion-label class="cl-gray ft-16">{{studentClass}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4>\n        <ion-label class="ft-16">Subject</ion-label>\n      </ion-col>\n      <ion-col col-8>\n        <ion-label class="cl-gray ft-16">{{studentSubject}}</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4>\n        <ion-label class="ft-16">Teacher</ion-label>\n      </ion-col>\n      <ion-col col-8>\n        <ion-label class="cl-gray ft-16">Abhishek KP</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-4>\n        <ion-label class="ft-16">Attendance</ion-label>\n      </ion-col>\n      <ion-col col-8>\n        <span class="std-attd present" *ngIf="attendance"></span>\n        <span class="std-attd absent" *ngIf="!attendance"></span>\n      </ion-col>\n    </ion-row>\n\n    <div class="topic-details-table">\n      <ion-row class="text-center">\n        <ion-col></ion-col>\n        <ion-col>\n          <div class="ft-16 ft-w400">{{topic1}}</div>\n        </ion-col>\n        <ion-col>\n          <div class="ft-16 ft-w400">{{topic2}}</div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="text-center">\n        <ion-col>\n          <div class="ft-16 ft-w400">Engagement</div>\n        </ion-col>\n        <ion-col>\n          <div class="cl-gray-math"></div>\n        </ion-col>\n        <ion-col>\n          <div class="cl-gray-science"></div>\n        </ion-col>\n      </ion-row>\n      <ion-row class="text-center">\n        <ion-col>\n          <div class="ft-16 ft-w400">Perfomance</div>\n        </ion-col>\n        <ion-col>\n          <div class="cl-gray-math"></div>\n        </ion-col>\n        <ion-col>\n          <div class="cl-gray-science"></div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-item-divider class="pl-16 ft-w500">\n    <h6>Notes</h6>\n  </ion-item-divider>\n\n  <div class="teacher-notes" padding>\n    <ion-row>\n      <ion-col class="p-0">\n        <ion-card padding class="m-0 w-100">\n          <div class="ft-14 cl-gray">\n            This is the demo comment it will be made dynamic.\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-buttons end>\n      <button ion-button primary (click)="getRecommendedContent()">Get Recommended Content</button>\n    </ion-buttons>\n  </div>\n  <ion-card *ngFor="let dt of data" class="card-view">\n    <ion-row>\n      <ion-col col-4>\n        <div class="content-name-image">\n          <img src="{{icon}}"/>\n        </div>\n      </ion-col>\n      <ion-col col-8>\n        <div class="content-name-panel">\n          {{dt}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/pages/studentview/studentview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StudentviewPage);
    return StudentviewPage;
}());

//# sourceMappingURL=studentview.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__send_note_send_note__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AttendenceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AttendenceComponent = /** @class */ (function () {
    function AttendenceComponent(navParams, httpClient, popoverCtrl) {
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.popoverCtrl = popoverCtrl;
        this.names = [];
        this.attendenceDetails = this.navParams.get("attendenceDeatils");
        this.teacherId = this.navParams.get('teacher');
        this.visitorId = this.navParams.get('visitorId');
        console.log(this.visitorId);
        this.period = this.navParams.get('period');
        this.grade = this.navParams.get('grade');
        this.subject = this.navParams.get('subject');
        this.setDetails();
    }
    AttendenceComponent.prototype.setDetails = function () {
        var _this = this;
        this.attendenceDetails.forEach(function (element) {
            _this.getChildDetails(element.studentId);
        });
    };
    AttendenceComponent.prototype.getChildDetails = function (studentId) {
        var _this = this;
        this.httpClient.get("https://dev.ekstep.in/api/devcon/v3/profile/read/" + studentId)
            .subscribe(function (data) {
            console.log(data.result.Student);
            _this.names.push(data.result.Student.name);
        }, function (error) {
            console.log(error);
        });
    };
    AttendenceComponent.prototype.sendNote = function (name) {
        var studId;
        console.log(name);
        this.attendenceDetails.forEach(function (element) {
            if (element.name === name) {
                studId = element.code;
            }
        });
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__send_note_send_note__["a" /* SendNoteComponent */], {
            studentId: studId,
            visitorId: this.visitorId,
            period: this.period,
            grade: this.grade,
            subject: this.subject,
            teacher: this.teacherId
        }, {
            cssClass: 'popover-alert'
        });
        popover.present();
    };
    AttendenceComponent.prototype.getStatus = function (name) {
        for (var i = 0; i < this.attendenceDetails.length; i++) {
            if (this.attendenceDetails[i].studentId === name) {
                return this.attendenceDetails.present;
            }
        }
    };
    AttendenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'attendence',template:/*ion-inline-start:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/attendence/attendence.html"*/'<!-- Generated template for the AttendenceComponent component -->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Attendence Report</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="container">\n        <ion-card class="pb-5" *ngFor="let name of names">\n            <ion-item>\n                <span item-right>\n                    <div class="pull-right">\n                        <ion-icon  name="mail" (click)="sendNote(name)" ></ion-icon>\n                    </div>\n                </span>\n                <ion-avatar item-start>\n                    <div class="student-pic">\n                        <span>{{name[0]}}</span>\n                    </div>\n                </ion-avatar>\n                <h1>{{name}}</h1>\n                <div>\n                    <ion-icon [color]="status===\'Yes\' ? \'secondary\' : \'secondary\'" name="hand"></ion-icon>\n                    <!-- <p *ngIf="status===\'Yes\'"><ion-icon name="hand" class="present"></ion-icon> Present</p>  \n            <p *ngIf="status===\'No\'"><ion-icon name="hand" class="absent"></ion-icon> Absent</p> -->\n                </div>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/anil/Downloads/DevCon/player/EkstepDevcon2019-StaffRoom/src/components/attendence/attendence.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */]])
    ], AttendenceComponent);
    return AttendenceComponent;
}());

//# sourceMappingURL=attendence.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestProvider = /** @class */ (function () {
    function RestProvider(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "http://localhost:3000";
    }
    RestProvider.prototype.getVisitorInfo = function (visitorId) {
        return this.httpClient.get('api')
            .map(this.extractData)
            .catch(this.catchError);
    };
    RestProvider.prototype.saveTelemetry = function (telemetry) {
        return this.httpClient.get('api')
            .map(this.extractData)
            .catch(this.catchError);
    };
    RestProvider.prototype.getSearchIdentifiers = function () {
        var request = { "request": {
                "filters": {
                    "objectType": "Content",
                    "status": []
                },
                "limit": 1,
                "fields": ["identifier"],
                "sort_by": { "lastUpdatedOn": "desc" }
            } };
        return this.httpClient.post(' https://dev.ekstep.in/api/search/v3/search', request)
            .map(this.extractData)
            .catch(this.catchError);
    };
    RestProvider.prototype.sendTelemetry = function (event) {
        var request = {
            "events": []
        };
        this.httpClient.post("http://52.172.188.118:3000/v1/telemetry", request)
            .subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    RestProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server error!");
    };
    RestProvider.prototype.extractData = function (res) {
        console.log(res);
        return res;
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest-provider.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map