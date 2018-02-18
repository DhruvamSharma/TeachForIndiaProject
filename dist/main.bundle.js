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
        this.petsUrl = 'http://localhost:3000/dashboard';
    }
    // Get a list if pets based on animal
    DashboardService.prototype.findPets = function () {
        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.get('http://localhost:3000/dashboard', {
            headers: headers
        })
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/dashboard']);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_staff_dashboard_old_program_old_program_component__ = __webpack_require__("../../../../../src/app/landing/staff/dashboard/old-program/old-program.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_9__landing_staff_dashboard_old_program_old_program_component__["a" /* OldProgramComponent */]
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
//Modules loading



var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_staff_dashboard_dashboard_component__["a" /* DashboardComponent */]
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
        this.dashboard.findPets();
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

module.exports = "<!--<ul>\n  <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>-->\n\n<div class=\"site\">\n  <nav class=\"site-nav flex-center\">\n    <ul>\n    <li><a class=\"active\" href=\"#home\">Home</a></li>\n  <li><a href=\"#news\">News</a></li>\n  <li><a href=\"#contact\">Contact</a></li>\n  <li><a href=\"#about\">About</a></li>\n</ul>\n  </nav>\n  <main class=\"site-content\">\n    <header class=\"content-header flex-center\">\n      <h1 class=\"section-title\">HEADER</h1>\n    </header>\n    <section class=\"content-topic\">\n      <!-- main body -->\n      <app-new-program></app-new-program>\n      <hr>\n      <h2>Programs That you've created</h2>\n      <app-old-program></app-old-program>\n    </section>\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
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

module.exports = "<div class=\"card card-inverse\" style=\"background-color: #333; border-color: #333;\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n    <div class=\"card-block\">\n      <h3 class=\"card-title\">Special title treatment</h3>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"left\" data-original-title=\"Create\" onclick=\"newmail()\">Create a Program</a>\n    </div>\n  </div>\n\n\n\n\n\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          \n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <!--Trainig Module-->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"well\">\n            <h3>Create an Event</h3>\n            <form>\n              <header>\n                  <div class=\"form-group\">\n                      <label for=\"inputInstititue\">Event Name</label>\n                      <input type=\"text\" name=\"inputInstitituename\" placeholder=\"Event Name\">\n                    </div>\n              </header>\n              \n              \n            <div class=\"form-group\">\n              <h5>Now Add Important Fields As Necessary</h5>\n              <div *ngFor=\"let number of times; let i = index\">\n                <label for=\"inputInstititue\">{{number.type}}</label>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"remove(i)\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                <input type=\"text\" name=\"inputInstititueaddress\" placeholder=\"Address of the Institute/Company for Summer Training\">\n              </div>\n            </div>\n            <input type=\"text\" name=\"inputInstititueaddress\" style=\"width:40%;\" placeholder=\"Type of Data\" #type required>\n            <button type=\"submit\" class=\"btn btn-primary end\" (click)=\"add(type.value)\">Add More Fields</button>\n  \n            </form>\n            </div>\n        </div>\n      </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>"

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

/***/ "../../../../../src/app/landing/staff/dashboard/old-program/old-program.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/old-program/old-program.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-block\">\n      <h3 class=\"card-title\">Special title treatment</h3>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/landing/staff/dashboard/old-program/old-program.component.ts":
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
            template: __webpack_require__("../../../../../src/app/landing/staff/dashboard/old-program/old-program.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/staff/dashboard/old-program/old-program.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OldProgramComponent);
    return OldProgramComponent;
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