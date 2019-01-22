webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherdayviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(199);
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


// import { Jsonp } from '@angular/http';




__WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["b" /* mobiscroll */].settings = {
    theme: 'material'
};
var TeacherdayviewPage = /** @class */ (function () {
    function TeacherdayviewPage(qrScanner, platform, viewCtrl) {
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.dailySettings = {
            display: 'inline',
            view: {
                eventList: { type: 'day' }
            }
        };
        this.weeklySettings = {
            display: 'inline',
            view: {
                eventList: { type: 'week' }
            }
        };
        this.monthlySettings = {
            display: 'inline',
            view: {
                eventList: { type: 'month' }
            }
        };
    }
    TeacherdayviewPage.prototype.ngOnInit = function () {
        //   this.jsonp.request('https://trial.mobiscroll.com/events-new/?callback=JSONP_CALLBACK').subscribe((res: any) => {
        //       this.events = res._body;
        //   });
        this.events = [
            {
                "start": "2019-01-23T14:00:00+00:00",
                "end": "2019-01-23T15:00:00+00:00",
                "text": "Class 2 &nbsp&nbsp&nbsp English ",
                "color": "#de3d83"
            },
            {
                "start": "2019-01-24T14:00:00+00:00",
                "end": "2019-01-24T15:00:00+00:00",
                "text": "Class 4 &nbsp&nbsp&nbsp Hindi ",
                "color": "#f67944"
            }
        ];
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
    // style="background: none transparent !important;"
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TeacherdayviewPage.prototype, "content", void 0);
    TeacherdayviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacherdayview',template:/*ion-inline-start:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/teacherdayview/teacherdayview.html"*/'<ion-header class="bg-primary white">\n    <ion-navbar>\n        <ion-title>\n           Time Table\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n                <ion-icon name="add-circle" end></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n<mbsc-form>\n  <div class="mbsc-grid">\n      <div class="mbsc-row">\n            <div class="mbsc-form-group w-100 m-0">\n                    <!-- <div class="mbsc-form-group-title" style="color: black;text-align: center">Jagadish</div> -->\n                    <!-- <div class="mbsc-form-group-title">Daily schedule</div> -->\n                    <mbsc-eventcalendar [data]="events" [options]="dailySettings">\n                    </mbsc-eventcalendar>\n                </div>\n          <!-- <div class="mbsc-col-sm-12 mbsc-col-md-4">\n              <div class="mbsc-form-group">\n                  <div class="mbsc-form-group-title">Weekly schedule</div>\n                  <mbsc-eventcalendar [data]="events" [options]="weeklySettings"></mbsc-eventcalendar>\n              </div>\n          </div>\n          <div class="mbsc-col-sm-12 mbsc-col-md-4">\n              <div class="mbsc-form-group">\n                  <div class="mbsc-form-group-title">Monthly schedule</div>\n                  <mbsc-eventcalendar [data]="events" [options]="monthlySettings"></mbsc-eventcalendar>\n              </div>\n          </div> -->\n      </div>\n  </div>\n</mbsc-form>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/teacherdayview/teacherdayview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ViewController */]])
    ], TeacherdayviewPage);
    return TeacherdayviewPage;
}());

//# sourceMappingURL=teacherdayview.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detailview/detailview.module": [
		286,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(199);
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
    RestProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || "Server error!");
    };
    RestProvider.prototype.extractData = function (res) {
        return res.json();
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest-provider.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
    function DetailviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailviewPage');
    };
    DetailviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailview',template:/*ion-inline-start:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/detailview/detailview.html"*/'<ion-header class="bg-primary white">\n  <ion-navbar>\n      <ion-title>\n          Summary\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only (click)="openModal()">\n              <ion-icon name="download" end></ion-icon>\n              <ion-icon name="print" end></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="pet" color="primary">\n      <ion-segment-button value="puppies">\n          Topic 1\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n          Topic 2\n      </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n\n<ion-content>\n  <div [ngSwitch]="pet">\n      <div *ngSwitchCase="\'puppies\'">\n          <ion-card class="m-0 w-100 no-shadow pb-5 no-border no-radius">\n              <ion-item class="no-bg tile-title">\n                  <h1 class="m-0">Period 1</h1>\n              </ion-item>\n              <ion-row class="pl-16">\n                  <ion-col class="pl-0">\n                      <span id="classId" class="classId lb-value pr-5">Class 3</span> | <span id="subjectId" class="subjectId lb-value pr-5 pl-5">Maths</span>\n                      | <span id="studentNo" class="studentNo lb-value pl-5">10 Student(s)</span>\n                  </ion-col>\n              </ion-row>\n              <ion-row class="pl-16 st-analysis">\n                  <ion-col class="pl-0 flex">\n                      <ion-icon name="hand" class="mr-5"></ion-icon>\n                      <div class="st-analysis-item">\n                          <div id="attendanceId" class="lb-value">100%</div>\n                          <div class="lb-title">Attendance</div>\n                      </div>\n                  </ion-col>\n                  <ion-col class="pl-0 flex">\n                      <ion-icon name="git-merge" class="mr-5"></ion-icon>\n                      <div class="st-analysis-item">\n                          <div id="engagementId" class="lb-value">70%</div>\n                          <div class="lb-title">Engagement</div>\n                      </div>\n                  </ion-col>\n                  <ion-col class="pl-0 flex">\n                      <ion-icon name="flash" class="mr-5"></ion-icon>\n                      <div class="st-analysis-item">\n                          <div id="perfomanceId" class="lb-value">80%</div>\n                          <div class="lb-title">Perfomance</div>\n                      </div>\n                  </ion-col>\n              </ion-row>\n\n          </ion-card>\n          <ion-item-divider>\n              Students\n          </ion-item-divider>\n          <div class="container">\n\n              <ion-card class="pb-5">\n                  <ion-item>\n                      <ion-avatar item-start>\n                          <div class="student-pic">\n                              <span>M</span>\n                          </div>\n                      </ion-avatar>\n                      <h1>Marty McFly</h1>\n                  </ion-item>\n                  <ion-row class="pl-16 st-analysis">\n                      <ion-col class="pl-0 flex">\n                          <ion-icon name="hand" class="mr-5"></ion-icon>\n                          <div class="st-analysis-item">\n                              <div id="attendanceId" class="lb-value">100%</div>\n                              <div class="lb-title">Attendance</div>\n                          </div>\n                      </ion-col>\n                      <ion-col class="pl-0 flex">\n                          <ion-icon name="git-merge" class="mr-5"></ion-icon>\n                          <div class="st-analysis-item">\n                              <div id="engagementId" class="lb-value">70%</div>\n                              <div class="lb-title">Engagement</div>\n                          </div>\n                      </ion-col>\n                      <ion-col class="pl-0 flex">\n                          <ion-icon name="flash" class="mr-5"></ion-icon>\n                          <div class="st-analysis-item">\n                              <div id="perfomanceId" class="lb-value">80%</div>\n                              <div class="lb-title">Perfomance</div>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </ion-card>\n          </div>\n      </div>\n\n      <div *ngSwitchCase="\'kittens\'">\n          demo value\n      </div>\n  </div>\n\n</ion-content>\n\n\n\nCollapse \n'/*ion-inline-end:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/detailview/detailview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DetailviewPage);
    return DetailviewPage;
}());

//# sourceMappingURL=detailview.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_teacherdayview_teacherdayview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_qr_scanner__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_qrscanner_qrscanner__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_detailview_detailview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_unique_device_id__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_rest_provider__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(202);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */], __WEBPACK_IMPORTED_MODULE_12__pages_qrscanner_qrscanner__["a" /* QrscannerPage */], __WEBPACK_IMPORTED_MODULE_13__pages_detailview_detailview__["a" /* DetailviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detailview/detailview.module#DetailviewPageModule', name: 'DetailviewPage', segment: 'detailview', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* JsonpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */], __WEBPACK_IMPORTED_MODULE_13__pages_detailview_detailview__["a" /* DetailviewPage */], __WEBPACK_IMPORTED_MODULE_12__pages_qrscanner_qrscanner__["a" /* QrscannerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_qr_scanner__["a" /* QRScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_unique_device_id__["a" /* UniqueDeviceID */], __WEBPACK_IMPORTED_MODULE_15__service_rest_provider__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_teacherdayview_teacherdayview__ = __webpack_require__(101);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
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
        this.eventSettings = {
            display: 'inline',
            view: {
                calendar: { type: 'week' },
                eventList: { type: 'day' }
            }
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonp.request('https://trial.mobiscroll.com/events/?callback=JSONP_CALLBACK').subscribe(function (res) {
            _this.events = res._body;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/home/home.html"*/'<ion-content>\n  <mbsc-eventcalendar [data]="events" [options]="eventSettings"></mbsc-eventcalendar>\n</ion-content>'/*ion-inline-end:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Jsonp */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrscannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacherdayview_teacherdayview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_rest_provider__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__ = __webpack_require__(203);
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
    function QrscannerPage(navCtrl, navParams, qrScanner, uniqueDeviceID, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.uniqueDeviceID = uniqueDeviceID;
        this.restProvider = restProvider;
    }
    QrscannerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            _this.uniqueId = uuid;
            console.log(uuid);
        })
            .catch(function (error) { return console.log(error); });
        this.openQrCodeScanner();
    };
    QrscannerPage.prototype.openQrCodeScanner = function () {
        var _this = this;
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacherdayview_teacherdayview__["a" /* TeacherdayviewPage */]);
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
        this.restProvider.getVisitorInfo(visitorId).subscribe(function (data) { _this.visitorInfo = data; });
    };
    QrscannerPage.prototype.sendTelemetry = function (event) {
        var _this = this;
        this.restProvider.saveTelemetry(event).subscribe(function (data) { _this.visitorInfo = data; });
    };
    QrscannerPage.prototype.generateStartEvent = function (visitorId, visitorName) {
        var edata = { type: 'staffroom', mode: 'play' };
        var telemetry = {
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
        };
        return telemetry;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], QrscannerPage.prototype, "content", void 0);
    QrscannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qrscanner',template:/*ion-inline-start:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/qrscanner/qrscanner.html"*/'<!--\n  Generated template for the QrscannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content #content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/user/Ionic-Workspace/EkstepDevcon2019-StaffRoom/src/pages/qrscanner/qrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_4__service_rest_provider__["a" /* RestProvider */]])
    ], QrscannerPage);
    return QrscannerPage;
}());

//# sourceMappingURL=qrscanner.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map