webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/DashboardService/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService(http, router) {
        this.http = http;
        this.router = router;
        // Base URL for Petfinder API
        this.dashboard_url = 'http://localhost:3000/dashboard';
        this.manage_applications_url = 'http://localhost:3000/manage-applications/';
    }
    /*  -----------  Create Program API   ---------------- */
    DashboardService.prototype.getPrograms = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get(this.dashboard_url, {
            headers: headers
        })
            .subscribe(function (res) {
            console.log('success');
            _this.router.navigate(['/dashboard']);
        });
    };
    /*  -----------  Manage Application API   ---------------- */
    DashboardService.prototype.getApplications = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get(this.manage_applications_url, {
            headers: headers
        })
            .subscribe(function (res) {
            console.log('success');
            _this.router.navigate(['/manage-applications']);
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_staff_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DashboardService_dashboard_service__ = __webpack_require__("../../../../../src/app/DashboardService/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_staff_dashboard_new_program_new_program_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/new-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_staff_dashboard_new_program_create_program_old_program_old_program_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/old-program/old-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_staff_dashboard_new_program_create_program_create_program_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landing_staff_dashboard_manage_application_manage_application_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/manage-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__landing_staff_dashboard_manage_application_applications_applications_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_staff_dashboard_feedback_feedback_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__landing_staff_dashboard_feedback_handle_feedback_handle_feedback_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_staff_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__landing_staff_dashboard_new_program_new_program_component__["a" /* NewProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_9__landing_staff_dashboard_new_program_create_program_old_program_old_program_component__["a" /* OldProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_10__landing_staff_dashboard_new_program_create_program_create_program_component__["a" /* CreateProgramComponent */],
                __WEBPACK_IMPORTED_MODULE_11__landing_staff_dashboard_manage_application_manage_application_component__["a" /* ManageApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__landing_staff_dashboard_manage_application_applications_applications_component__["a" /* ApplicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__landing_staff_dashboard_feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_14__landing_staff_dashboard_feedback_handle_feedback_handle_feedback_component__["a" /* HandleFeedbackComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* APP_ROUTES_PROVIDER */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__DashboardService_dashboard_service__["a" /* DashboardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES_PROVIDER; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_staff_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_staff_dashboard_new_program_create_program_create_program_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_staff_dashboard_manage_application_applications_applications_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_staff_dashboard_feedback_handle_feedback_handle_feedback_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.ts");
//Modules loading






var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_staff_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'create-program',
        component: __WEBPACK_IMPORTED_MODULE_3__landing_staff_dashboard_new_program_create_program_create_program_component__["a" /* CreateProgramComponent */]
    },
    {
        path: 'manage-applications',
        component: __WEBPACK_IMPORTED_MODULE_4__landing_staff_dashboard_manage_application_applications_applications_component__["a" /* ApplicationsComponent */]
    },
    {
        path: 'handle-feedback',
        component: __WEBPACK_IMPORTED_MODULE_5__landing_staff_dashboard_feedback_handle_feedback_handle_feedback_component__["a" /* HandleFeedbackComponent */]
    }
];
var APP_ROUTES_PROVIDER = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/dashboard']\">Click Me</a>\n<button (click)=\"callMe()\">Click Me Too</button>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DashboardService_dashboard_service__ = __webpack_require__("../../../../../src/app/DashboardService/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = (function () {
    function LandingComponent(dashboard) {
        this.dashboard = dashboard;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.callMe = function () {
        //this.dashboard.findPets();
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__DashboardService_dashboard_service__["a" /* DashboardService */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);", ""]);

// module
exports.push([module.i, ".site {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n.site-nav {\r\n  background: #4e87ea;\r\n  width: 120px;\r\n}\r\n.site-content {\r\n  background: #eee;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.content-header {\r\n  background: #fff;\r\n  height: 40px;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.content-topic {\r\n  background: #fff;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  margin: 30px 50px;\r\n  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.flex-center {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.section-title {\r\n  font-size: 1.5em;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"site\">\n  <nav class=\"site-nav flex-center\">\n    <ul>\n    \n  <li><button class=\"active btn\" (click)=\"shift(1)\">Create a Programme</button></li>\n  <li><button class=\"active btn\" (click)=\"shift(2)\">Manage Applications</button></li>\n  <li><button class=\"active btn\" (click)=\"shift(3)\">ManageFeedback</button></li>\n</ul>\n  </nav>\n  <main class=\"site-content\">\n    <header class=\"content-header flex-center\">\n      <h1 class=\"section-title\">HEADER</h1>\n    </header>\n    <section class=\"content-topic\">\n      <!-- main body -->\n      <app-new-program *ngIf=\"check1\"></app-new-program>\n      <app-manage-application *ngIf=\"check2\"></app-manage-application>\n      <app-feedback *ngIf=\"check3\"></app-feedback>\n    </section>\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DashboardService_dashboard_service__ = __webpack_require__("../../../../../src/app/DashboardService/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dashboard) {
        this.dashboard = dashboard;
        this.check1 = true;
        this.check2 = false;
        this.check3 = false;
    }
    DashboardComponent.prototype.shift = function (num) {
        if (num == 1) {
            this.check1 = true;
            this.check2 = false;
            this.check3 = false;
            this.dashboard.getPrograms();
        }
        if (num == 2) {
            this.check2 = true;
            this.check1 = false;
            this.check3 = false;
            this.dashboard.getApplications();
        }
        if (num == 3) {
            this.check3 = true;
            this.check2 = false;
            this.check1 = false;
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__DashboardService_dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/feedback/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333; margin:3%;\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n  <div class=\"card-block\">\n    <h3 class=\"card-title\">Special title treatment</h3>\n    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/handle-feedback']\">Create a Program</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackComponent = (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);", ""]);

// module
exports.push([module.i, ".site {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n.site-nav {\r\n  background: #4e87ea;\r\n  width: 120px;\r\n}\r\n.site-content {\r\n  background: #eee;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.content-header {\r\n  background: #fff;\r\n  height: 40px;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.content-topic {\r\n  background: #fff;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  margin: 30px 50px;\r\n  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.flex-center {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.section-title {\r\n  font-size: 1.5em;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"site\">\n  <nav class=\"site-nav flex-center\">\n   <!-- NAV CONTENT -->\n  </nav>\n  <main class=\"site-content\">\n    <header class=\"content-header flex-center\">\n      <h1 class=\"section-title\">HEADER</h1>\n    </header>\n    <section class=\"content-topic\">\n      <!-- main body -->\n      <h2>Heading of Feedback</h2>\n      <p>Feedback Details</p>\n      <!--Textarea with icon prefix-->\n      <div class=\"md-form\">\n        <i class=\"fa fa-pencil prefix\"></i>\n        <textarea type=\"text\" id=\"form8\" class=\"md-textarea\"></textarea>\n        <label for=\"form8\">Icon Prefix</label>\n      </div>\n    </section>\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleFeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HandleFeedbackComponent = (function () {
    function HandleFeedbackComponent() {
    }
    HandleFeedbackComponent.prototype.ngOnInit = function () {
    };
    HandleFeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-handle-feedback',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/feedback/handle-feedback/handle-feedback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HandleFeedbackComponent);
    return HandleFeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);", ""]);

// module
exports.push([module.i, ".site {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n.site-nav {\r\n  background: #4e87ea;\r\n  width: 120px;\r\n}\r\n.site-content {\r\n  background: #eee;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n.content-header {\r\n  background: #fff;\r\n  height: 40px;\r\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.content-topic {\r\n  background: #fff;\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n  margin: 30px 50px;\r\n  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n.flex-center {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n.section-title {\r\n  font-size: 1.5em;\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: rgba(0, 0, 0, 0.25);\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"site\">\n  <nav class=\"site-nav flex-center\">\n   <!-- NAV CONTENT -->\n  </nav>\n  <main class=\"site-content\">\n    <header class=\"content-header flex-center\">\n      <h1 class=\"section-title\">HEADER</h1>\n    </header>\n    <section class=\"content-topic\">\n      <!-- main body -->\n      <div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333; margin:3%;\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n        <div class=\"card-block\">\n          <h3 class=\"card-title\">Special title treatment</h3>\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n          <a class=\"btn btn-primary\">Create a Program</a>\n        </div>\n      </div>\n    </section>\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationsComponent = (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-applications',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/applications/applications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/manage-application/manage-application.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/manage-application/manage-application.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Heading</h2>\n\n<div class=\"card\" style=\"width: 20rem;\">\n  <div class=\"card-block\">\n    <h3 class=\"card-title\">Special title treatment</h3>\n    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n    <a  class=\"btn btn-primary\" [routerLink]=\"['/manage-applications']\">Go somewhere</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/manage-application/manage-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageApplicationComponent = (function () {
    function ManageApplicationComponent() {
    }
    ManageApplicationComponent.prototype.ngOnInit = function () {
    };
    ManageApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manage-application',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/manage-application.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/manage-application/manage-application.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageApplicationComponent);
    return ManageApplicationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Form contact -->\n<form>\n\n  <p class=\"h5 text-center mb-4\">Write to us</p>\n\n  <div class=\"md-form\">\n      <i class=\"fa fa-user prefix grey-text\"></i>\n      <input type=\"text\" id=\"form3\" class=\"form-control\">\n      <label for=\"form3\">Your name</label>\n  </div>\n\n  <div class=\"md-form\">\n      <i class=\"fa fa-envelope prefix grey-text\"></i>\n      <input type=\"text\" id=\"form2\" class=\"form-control\">\n      <label for=\"form2\">Your email</label>\n  </div>\n\n  <div class=\"md-form\">\n      <i class=\"fa fa-tag prefix grey-text\"></i>\n      <input type=\"text\" id=\"form32\" class=\"form-control\">\n      <label for=\"form34\">Subject</label>\n  </div>\n\n  <div class=\"md-form\">\n      <i class=\"fa fa-pencil prefix grey-text\"></i>\n      <textarea type=\"text\" id=\"form8\" class=\"md-textarea\" style=\"height: 100px\"></textarea>\n      <label for=\"form8\">Your message</label>\n  </div>\n\n  <div class=\"text-center\">\n      <button class=\"btn btn-unique\">Send <i class=\"fa fa-paper-plane-o ml-1\"></i></button>\n  </div>\n\n</form>\n<!-- Form contact -->"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateProgramComponent = (function () {
    function CreateProgramComponent() {
    }
    CreateProgramComponent.prototype.ngOnInit = function () {
    };
    CreateProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-program',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/create-program.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateProgramComponent);
    return CreateProgramComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/create-program/old-program/old-program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/create-program/old-program/old-program.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-block\">\n      <h3 class=\"card-title\">Special title treatment</h3>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/create-program/old-program/old-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OldProgramComponent = (function () {
    function OldProgramComponent() {
    }
    OldProgramComponent.prototype.ngOnInit = function () {
    };
    OldProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-old-program',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/old-program/old-program.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/create-program/old-program/old-program.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OldProgramComponent);
    return OldProgramComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/new-program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/new-program.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333;\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n    <div class=\"card-block\">\n      <h3 class=\"card-title\">Special title treatment</h3>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/create-program']\" >Create a Program</a>\n    </div>\n</div>\n\n<hr>\n<h2>Programs That you've created</h2>\n<app-old-program></app-old-program>\n\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/new-program/new-program.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProgramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewProgramComponent = (function () {
    function NewProgramComponent() {
    }
    NewProgramComponent.prototype.ngOnInit = function () {
    };
    NewProgramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-program',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/new-program.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/new-program/new-program.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewProgramComponent);
    return NewProgramComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map