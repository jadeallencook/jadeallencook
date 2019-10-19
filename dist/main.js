(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../../src/$$_lazy_route_resource lazy recursive":
/*!*************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../src/app/app-routing.module.ts":
/*!******************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/app-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/feed/feed.component */ "../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "../../../../src/app/components/contact/contact.component.ts");





var routes = [
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '**', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../src/app/app.component.html":
/*!***************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/app.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../src/app/app.component.scss":
/*!***************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/app.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "../../../../src/app/app.component.ts":
/*!*************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/app.component.ts ***!
  \*************************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "../../../../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../src/app/app.module.ts":
/*!**********************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/app.module.ts ***!
  \**********************************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "../../../../src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "../../../../src/app/app.component.ts");
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ "../../../../src/app/components/common/navbar/navbar.component.ts");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/header/header.component */ "../../../../src/app/components/common/header/header.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feed/feed.component */ "../../../../src/app/components/feed/feed.component.ts");
/* harmony import */ var _components_feed_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/feed/feedback/feedback.component */ "../../../../src/app/components/feed/feedback/feedback.component.ts");
/* harmony import */ var _components_common_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/post/post.component */ "../../../../src/app/components/common/post/post.component.ts");
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/footer/footer.component */ "../../../../src/app/components/common/footer/footer.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "../../../../src/app/components/contact/contact.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"],
                _components_feed_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
                _components_common_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"],
                _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../src/app/components/common/footer/footer.component.html":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  © Copyright 2006-2019 Jade Allen Cook\n</div>"

/***/ }),

/***/ "../../../../src/app/components/common/footer/footer.component.scss":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/footer/footer.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.footer {\n  background-color: #15202A;\n  box-sizing: border-box;\n  padding: 15px;\n  font-size: 0.75em;\n  text-align: center;\n  margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2phZGVhbGxlbmNvb2svd3d3L0phZGUtQWxsZW4tQ29vay9zcmMvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0RVO0VERVYsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6Ii4uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2NvbG9yLnNjc3MnO1xuXG5kaXYuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59IiwiJGxpZ2h0OiAjNWY3ZDk5O1xuJG1lZGl1bTogIzI0MzM0MTtcbiRkYXJrOiAjMTUyMDJBO1xuJHdoaXRlOiAjRkZGRkZGOyJdfQ== */"

/***/ }),

/***/ "../../../../src/app/components/common/footer/footer.component.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/footer/footer.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "../../../../src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "../../../../src/app/components/common/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../src/app/components/common/header/header.component.html":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/header/header.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div></div>\n  <a routerLink=\"/\">\n    <img src=\"../../../../assets/logo.png\" alt=\"Jade Allen Cook logo\" />\n  </a>\n  <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSeDnjIFoP0tZCGs2XX1Zunkhq87Yg6_fg4QZSmleDXubW1wBQ/viewform?usp=sf_link\" target=\"_blank\">\n    <i class=\"far fa-paper-plane\"></i>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../src/app/components/common/header/header.component.scss":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/header/header.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.header {\n  background-color: #15202A;\n  display: grid;\n  text-align: center;\n  grid-template-columns: 1fr 200px 1fr;\n  width: 100%;\n  padding: 40px 0px 5px 0px;\n  align-items: center; }\n  div.header > a > img {\n    width: 150px; }\n  div.header > a {\n    color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2phZGVhbGxlbmNvb2svd3d3L0phZGUtQWxsZW4tQ29vay9zcmMvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQ0RVO0VERVYsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTtFQVB2QjtJQVNRLFlBQVksRUFBQTtFQVRwQjtJQVlRLFdBQVcsRUFBQSIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9jb2xvci5zY3NzJztcblxuZGl2LmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcms7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHggMWZyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDQwcHggMHB4IDVweCAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICA+YSA+IGltZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG4gICAgPmEge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG59IiwiJGxpZ2h0OiAjNWY3ZDk5O1xuJG1lZGl1bTogIzI0MzM0MTtcbiRkYXJrOiAjMTUyMDJBO1xuJHdoaXRlOiAjRkZGRkZGOyJdfQ== */"

/***/ }),

/***/ "../../../../src/app/components/common/header/header.component.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/header/header.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "../../../../src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "../../../../src/app/components/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../src/app/components/common/navbar/navbar.component.html":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/navbar/navbar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  NAVBAR\n</div>"

/***/ }),

/***/ "../../../../src/app/components/common/navbar/navbar.component.scss":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/navbar/navbar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "../../../../src/app/components/common/navbar/navbar.component.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/navbar/navbar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "../../../../src/app/components/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "../../../../src/app/components/common/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../src/app/components/common/post/post.component.html":
/*!***************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/post/post.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post\">\n  <!-- details -->\n  <div class=\"poster\">\n    {{this.post.title}}\n    <span>{{this.post.date}}</span>\n  </div>\n  <!-- video -->\n  <div class=\"video\" *ngIf=\"this.type === 'videos'\">\n    <iframe width=\"100%\" height=\"200\"\n      [src]='sanitizer.bypassSecurityTrustResourceUrl(\"https://www.youtube.com/embed/\" + this.post.url)' frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  </div>\n  <!-- photo -->\n  <div class=\"photo\" *ngIf=\"this.type === 'photos'\">\n    <img src=\"../../../assets/images/{{this.post.url}}\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../src/app/components/common/post/post.component.scss":
/*!***************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/post/post.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.post {\n  padding: 15px 15px 0px 15px;\n  width: 100%;\n  max-width: 345px;\n  display: inline-block;\n  margin: 0px auto; }\n  div.post > div.poster {\n    margin-bottom: 10px;\n    font-weight: bold; }\n  div.post > div.poster > span {\n      font-size: 0.8em;\n      display: block;\n      color: #5f7d99; }\n  div.post > div.video > iframe {\n    background-color: #5f7d99; }\n  div.post > div.photo > img {\n    width: 100%;\n    background-color: #5f7d99; }\n  div.post > div.comments {\n    padding: 0px 0px; }\n  div.post > div.comments > div.comment {\n      font-size: 0.75em; }\n  div.post > div.comments > div.comment > span:first-child {\n        font-weight: bold; }\n  div.post > div.share {\n    font-size: 1.5em;\n    margin: 10px 0px; }\n  div.post > div.share > i {\n      margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvamFkZWFsbGVuY29vay93d3cvSmFkZS1BbGxlbi1Db29rL3NyYy9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0VBTGxCO0lBUU0sbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBVHZCO01BV1UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxjQ2ZLLEVBQUE7RURFZjtJQW1CTSx5QkNyQlMsRUFBQTtFREVmO0lBeUJNLFdBQVc7SUFDWCx5QkM1QlMsRUFBQTtFREVmO0lBK0JJLGdCQUFnQixFQUFBO0VBL0JwQjtNQWlDTSxpQkFBaUIsRUFBQTtFQWpDdkI7UUFtQ1EsaUJBQWlCLEVBQUE7RUFuQ3pCO0lBeUNJLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQTFDcEI7TUE0Q00sa0JBQWtCLEVBQUEiLCJmaWxlIjoiLi4vc3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9jb2xvci5zY3NzJztcblxuZGl2LnBvc3Qge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IGF1dG87XG5cbiAgPmRpdi5wb3N0ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgPnNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgIH1cbiAgfVxuXG4gID5kaXYudmlkZW8ge1xuICAgID5pZnJhbWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuICAgIH1cbiAgfVxuXG4gID5kaXYucGhvdG8ge1xuICAgID5pbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4gICAgfVxuICB9XG5cbiAgPmRpdi5jb21tZW50cyB7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgICA+ZGl2LmNvbW1lbnQge1xuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICA+c3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gID5kaXYuc2hhcmUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICA+aSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCIkbGlnaHQ6ICM1ZjdkOTk7XG4kbWVkaXVtOiAjMjQzMzQxO1xuJGRhcms6ICMxNTIwMkE7XG4kd2hpdGU6ICNGRkZGRkY7Il19 */"

/***/ }),

/***/ "../../../../src/app/components/common/post/post.component.ts":
/*!*************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/common/post/post.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_photos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/photos.json */ "../../../../src/assets/photos.json");
var _assets_photos_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/photos.json */ "../../../../src/assets/photos.json", 1);
/* harmony import */ var _assets_videos_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/videos.json */ "../../../../src/assets/videos.json");
var _assets_videos_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/videos.json */ "../../../../src/assets/videos.json", 1);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var PostComponent = /** @class */ (function () {
    function PostComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.post = null;
        this.type = null;
        this.comments = null;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _a = this.post, type = _a.type, id = _a.id;
        if (type === 'videos' || type === 'photos') {
            this.type = type;
            this.post = type === 'videos' ? _assets_videos_json__WEBPACK_IMPORTED_MODULE_3__[id] : _assets_photos_json__WEBPACK_IMPORTED_MODULE_2__[id];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "../../../../src/app/components/common/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "../../../../src/app/components/common/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../src/app/components/contact/contact.component.html":
/*!**************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/contact/contact.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeDnjIFoP0tZCGs2XX1Zunkhq87Yg6_fg4QZSmleDXubW1wBQ/viewform?embedded=true\">Loading…</iframe>\n</div>\n"

/***/ }),

/***/ "../../../../src/app/components/contact/contact.component.scss":
/*!**************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/contact/contact.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.contact {\n  margin-top: 25px; }\n  div.contact > iframe {\n    width: 100%;\n    height: 650px;\n    display: block;\n    margin: 0px;\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR0ksV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVksRUFBQSIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhY3Qge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gID5pZnJhbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../../../src/app/components/contact/contact.component.ts":
/*!************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/contact/contact.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "../../../../src/app/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../src/app/components/feed/feed.component.html":
/*!********************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/feed/feed.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <app-post *ngFor=\"let post of posts\" [post]=\"post\"></app-post>\n  <button class=\"load-more\" (click)=\"load()\" *ngIf=\"posts.length < max\">\n    Load More\n  </button>\n</div>"

/***/ }),

/***/ "../../../../src/app/components/feed/feed.component.scss":
/*!********************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/feed/feed.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.feed {\n  max-width: 370px;\n  margin: 0px auto; }\n  div.feed > button.load-more {\n    display: block;\n    padding: 15px 0px;\n    width: 100%;\n    max-width: 345px;\n    margin: 25px auto;\n    border: none;\n    color: #FFF;\n    font-weight: bold;\n    background-color: #5f7d99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7RUFGcEI7SUFJUSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQ2RPLEVBQUEiLCJmaWxlIjoiLi4vc3JjL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2NvbG9yLnNjc3MnO1xuXG5kaXYuZmVlZCB7XG4gICAgbWF4LXdpZHRoOiAzNzBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgID5idXR0b24ubG9hZC1tb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNDVweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4gICAgfVxufSIsIiRsaWdodDogIzVmN2Q5OTtcbiRtZWRpdW06ICMyNDMzNDE7XG4kZGFyazogIzE1MjAyQTtcbiR3aGl0ZTogI0ZGRkZGRjsiXX0= */"

/***/ }),

/***/ "../../../../src/app/components/feed/feed.component.ts":
/*!******************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/feed/feed.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/feed.json */ "../../../../src/assets/feed.json");
var _assets_feed_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/feed.json */ "../../../../src/assets/feed.json", 1);



var FeedComponent = /** @class */ (function () {
    function FeedComponent() {
        this.posts = _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 10);
        this.index = 1;
        this.max = _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__.length;
    }
    FeedComponent.prototype.load = function () {
        this.index++;
        this.posts = _assets_feed_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 10 * this.index);
    };
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "../../../../src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.scss */ "../../../../src/app/components/feed/feed.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "../../../../src/app/components/feed/feedback/feedback.component.html":
/*!*********************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/feed/feedback/feedback.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feedback\">\n  <div *ngIf=\"!feedback.length\">\n    Loading...\n  </div>\n  <div *ngIf=\"feedback.length\">\n    <div *ngFor=\"let testimonal of feedback\">\n      <div [ngStyle]=\"{'background-image': 'url(assets/feedback/'+ testimonal.image +')'}\"></div>\n      <span>{{testimonal.name}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../src/app/components/feed/feedback/feedback.component.scss":
/*!*********************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/feed/feedback/feedback.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.feedback > div {\n  padding: 15px 15px 0px 15px;\n  overflow-x: scroll;\n  white-space: nowrap;\n  border-bottom: #5f7d99 solid thin; }\n  div.feedback > div > div {\n    display: inline-block;\n    text-align: center;\n    padding-right: 15px; }\n  div.feedback > div > div > div {\n      height: 50px;\n      width: 50px;\n      background-color: #5f7d99;\n      border: #5f7d99 3px solid;\n      display: inline-block;\n      border-radius: 100%;\n      background-size: cover; }\n  div.feedback > div > div > span {\n      font-size: 0.5em;\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWRlYWxsZW5jb29rL3d3dy9KYWRlLUFsbGVuLUNvb2svc3JjL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvamFkZWFsbGVuY29vay93d3cvSmFkZS1BbGxlbi1Db29rL3NyYy9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWdDLEVBQUE7RUFMcEM7SUFRUSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBVjNCO01BWVEsWUFBWTtNQUNaLFdBQVc7TUFDWCx5QkNoQk87TURpQlAseUJBQXdCO01BQ3hCLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsc0JBQXNCLEVBQUE7RUFsQjlCO01BcUJVLGdCQUFnQjtNQUNoQixjQUFjLEVBQUEiLCJmaWxlIjoiLi4vc3JjL2FwcC9jb21wb25lbnRzL2ZlZWQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9jb2xvci5zY3NzJztcblxuZGl2LmZlZWRiYWNrIHtcbiAgPmRpdiB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1ib3R0b206ICRsaWdodCBzb2xpZCB0aGluO1xuXG4gICAgPmRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgPmRpdiB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcbiAgICAgICAgYm9yZGVyOiAkbGlnaHQgM3B4IHNvbGlkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgICA+c3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRsaWdodDogIzVmN2Q5OTtcbiRtZWRpdW06ICMyNDMzNDE7XG4kZGFyazogIzE1MjAyQTtcbiR3aGl0ZTogI0ZGRkZGRjsiXX0= */"

/***/ }),

/***/ "../../../../src/app/components/feed/feedback/feedback.component.ts":
/*!*******************************************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/app/components/feed/feedback/feedback.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
        this.feedback = [];
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedbackComponent.prototype, "feedback", void 0);
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "../../../../src/app/components/feed/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "../../../../src/app/components/feed/feedback/feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../src/assets/feed.json":
/*!*********************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/assets/feed.json ***!
  \*********************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, default */
/***/ (function(module) {

module.exports = [{"type":"videos","id":"11"},{"type":"photos","id":"2"},{"type":"videos","id":"9"},{"type":"photos","id":"1"},{"type":"photos","id":"3"},{"type":"videos","id":"8"},{"type":"videos","id":"7"},{"type":"videos","id":"13"},{"type":"photos","id":"32"},{"type":"photos","id":"4"},{"type":"photos","id":"6"},{"type":"videos","id":"6"},{"type":"videos","id":"5"},{"type":"photos","id":"26"},{"type":"photos","id":"50"},{"type":"photos","id":"28"},{"type":"photos","id":"7"},{"type":"videos","id":"4"},{"type":"photos","id":"37"},{"type":"photos","id":"53"},{"type":"videos","id":"31"},{"type":"photos","id":"5"},{"type":"photos","id":"24"},{"type":"videos","id":"3"},{"type":"videos","id":"2"},{"type":"photos","id":"23"},{"type":"photos","id":"29"},{"type":"videos","id":"1"},{"type":"photos","id":"39"},{"type":"photos","id":"48"},{"type":"photos","id":"52"},{"type":"photos","id":"46"},{"type":"photos","id":"30"},{"type":"photos","id":"55"},{"type":"photos","id":"31"},{"type":"photos","id":"54"},{"type":"photos","id":"49"},{"type":"photos","id":"47"},{"type":"photos","id":"51"},{"type":"photos","id":"38"},{"type":"videos","id":"14"},{"type":"photos","id":"36"},{"type":"videos","id":"15"},{"type":"videos","id":"16"},{"type":"videos","id":"10"},{"type":"photos","id":"44"},{"type":"photos","id":"16"},{"type":"photos","id":"35"},{"type":"photos","id":"40"},{"type":"videos","id":"17"},{"type":"photos","id":"34"},{"type":"photos","id":"21"},{"type":"photos","id":"41"},{"type":"photos","id":"20"},{"type":"photos","id":"19"},{"type":"photos","id":"42"},{"type":"videos","id":"18"},{"type":"photos","id":"18"},{"type":"photos","id":"8"},{"type":"photos","id":"17"},{"type":"videos","id":"19"},{"type":"photos","id":"15"},{"type":"videos","id":"20"},{"type":"photos","id":"14"},{"type":"videos","id":"21"},{"type":"photos","id":"43"},{"type":"photos","id":"22"},{"type":"videos","id":"24"},{"type":"videos","id":"23"},{"type":"videos","id":"25"},{"type":"photos","id":"13"},{"type":"videos","id":"28"},{"type":"videos","id":"29"},{"type":"videos","id":"27"},{"type":"photos","id":"12"},{"type":"photos","id":"11"},{"type":"photos","id":"33"},{"type":"photos","id":"10"},{"type":"videos","id":"30"},{"type":"photos","id":"9"},{"type":"photos","id":"45"},{"type":"photos","id":"27"}];

/***/ }),

/***/ "../../../../src/assets/photos.json":
/*!***********************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/assets/photos.json ***!
  \***********************************************************************/
/*! exports provided: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, default */
/***/ (function(module) {

module.exports = {"1":{"url":"jim-santhosh-jade.jpg","comments":[],"date":"Aug 23, 2019","title":"Google Cloud"},"2":{"url":"team-hotpot.jpg","comments":[],"date":"Oct 3, 2019","title":"Hot Pot With The Google Team"},"3":{"url":"google-with-santhosh.jpg","comments":[],"date":"Aug 16, 2019","title":"Head In The Cloud"},"4":{"url":"ksl.jpg","comments":[],"date":"Jan 15, 2019","title":"Tonight's Top News"},"5":{"url":"the-board.jpg","comments":[],"date":"Nov 1, 2017","title":"Board Of Directors"},"6":{"url":"poolside-coding.jpg","comments":[],"date":"Dec 20, 2018","title":"Remote Software Development"},"7":{"url":"nicar.jpg","comments":[],"date":"Mar 10, 2018","title":"NICAR Conference"},"8":{"url":"ppd-camera.jpg","comments":[],"date":"Sep 18, 2014","title":"Peacock Park Production"},"9":{"url":"basement.jpg","comments":[],"date":"Feb 4, 2009","title":"First Freelancing Studio"},"10":{"url":"rap-video.jpg","comments":[],"date":"May 21, 2010","title":"Music Video Shoot"},"11":{"url":"desperate-act.jpg","comments":[],"date":"Oct 10, 2010","title":"Set Of Our Short Film"},"12":{"url":"paper.jpg","comments":[],"date":"Dec 10, 2010","title":"Meet Your Neighbor"},"13":{"url":"vehicle.jpg","comments":[],"date":"Mar 4, 2013","title":"Instructional Video"},"14":{"url":"mitten.jpg","comments":[],"date":"Apr 15, 2014","title":"New Freelancing Studio"},"15":{"url":"rig.jpg","comments":[],"date":"May 22, 2014","title":"My First Camera Rig"},"16":{"url":"diib.jpg","comments":[],"date":"Jun 28, 2015","title":"Shooting Online Business Info Videos"},"17":{"url":"zefs.jpg","comments":[],"date":"Sep 14, 2014","title":"Zef's Coney Island"},"18":{"url":"roland.jpg","comments":[],"date":"Sep 20, 2014","title":"GetRoFit Commercial"},"19":{"url":"ppd-products.jpg","comments":[],"date":"Nov 6, 2014","title":"Peacock Park Product Photography"},"20":{"url":"ppd-ad.jpg","comments":[],"date":"Nov 14, 2014","title":"My Graphic Design In A National Magazine"},"21":{"url":"apartment.jpg","comments":[],"date":"Mar 18, 2015","title":"Moved To Salt Lake City"},"22":{"url":"road-trip.jpg","comments":[],"date":"Aug 26, 2013","title":"West Coast Photography Trip"},"23":{"url":"onflo.jpg","comments":[],"date":"Sep 27, 2017","title":"Created Onflo"},"24":{"url":"slc-camera.jpg","comments":[],"date":"Oct 27, 2017","title":"New Equipment"},"26":{"url":"deseret-lunch.jpg","comments":[],"date":"Nov 22, 2018","title":"Team Lunch With Deseret News"},"27":{"url":"mpi.jpg","comments":[],"date":"Jun 22, 2007","title":"Motion Picture Institute Of Michigan"},"28":{"url":"yogi-2018.jpg","comments":[],"date":"Jun 8, 2018","title":"Launched Yogi FM"},"29":{"url":"onflo-dashboard.jpg","comments":[],"date":"Sep 15, 2017","title":"Launched Onflo Dashboard"},"30":{"url":"waveortho-editor.jpg","comments":[],"date":"Jul 28, 2016","title":"Developed Image Editor For WaveOrtho"},"31":{"url":"gdoc.jpg","comments":[],"date":"Jun 14, 2016","title":"My JS Library Gets Published"},"32":{"url":"yogi-fm.jpg","comments":[],"date":"Jan 19, 2019","title":"Rebranded Yogi FM"},"33":{"url":"mybaycity.jpg","comments":[],"date":"May 27, 2010","title":"Started Working With My Bay City"},"34":{"url":"two-friends.png","comments":[],"date":"May 10, 2015","title":"Website | Two Friends Grooming"},"35":{"url":"ui-whiteboard.jpg","comments":[],"date":"Jun 8, 2015","title":"Whiteboarding Dashboard Features"},"36":{"url":"myself.jpg","comments":[],"date":"Oct 13, 2015","title":"Learning Photography"},"37":{"url":"homicide-map.jpg","comments":[],"date":"Jan 20, 2018","title":"Interactive Gets 14 Min Engagement Time"},"38":{"url":"tooth-chart.jpg","comments":[],"date":"Apr 13, 2016","title":"Developed Interactive Tooth Chart"},"39":{"url":"payment-system.jpg","comments":[],"date":"Mar 13, 2017","title":"Developed Orthodontic Payment System"},"40":{"url":"diib-homepage.jpg","comments":[],"date":"May 21, 2015","title":"Developed Diib's 2015 Homepage"},"41":{"url":"easy-growing.png","comments":[],"date":"Dec 11, 2014","title":"Developed Online Store For Easy Growin'"},"42":{"url":"mitten-marketing.png","comments":[],"date":"Oct 20, 2014","title":"Launched Mitten Marketing"},"43":{"url":"denver.jpg","comments":[],"date":"Sep 9, 2013","title":"Launched Denver Electric"},"44":{"url":"darn-fresh.png","comments":[],"date":"Jul 11, 2015","title":"Launched Darn Fresh Food"},"45":{"url":"ej.png","comments":[],"date":"Aug 13, 2008","title":"First Marketing Company (EJ Productions)"},"46":{"url":"perfect-landing.png","comments":[],"date":"Nov 7, 2016","title":"Developed Perfect Landing Rentals"},"47":{"url":"moroni.png","comments":[],"date":"Apr 27, 2016","title":"Developed Moroni Jason Art"},"48":{"url":"ashes.png","comments":[],"date":"Jan 1, 2017","title":"Developed Ashes Bardole Tattoo"},"49":{"url":"phone-daddies.png","comments":[],"date":"May 12, 2016","title":"Developed Phone Daddies"},"50":{"url":"map.png","comments":[],"date":"Oct 15, 2018","title":"Developed Marriage Map For Deseret News"},"51":{"url":"retreat.png","comments":[],"date":"Apr 27, 2016","title":"Developed Utah Weight Loss Retreat"},"52":{"url":"alan.png","comments":[],"date":"Dec 5, 2016","title":"Developed Alan Watts"},"53":{"url":"skipper.png","comments":[],"date":"Nov 30, 2017","title":"YouTube Ad Skipper With 3,300 Users"},"54":{"url":"minnow.png","comments":[],"date":"May 30, 2016","title":"Launched Minnow Mike's Online Store"},"55":{"url":"second.png","comments":[],"date":"Jun 22, 2016","title":"Launched Second Chance's Online Store"}};

/***/ }),

/***/ "../../../../src/assets/videos.json":
/*!***********************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/assets/videos.json ***!
  \***********************************************************************/
/*! exports provided: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 27, 28, 29, 30, 31, default */
/***/ (function(module) {

module.exports = {"1":{"url":"5z6pRwrQ8ZE","comments":[],"date":"Sep 4, 2017","title":"Everyday Tools For The Web Developer"},"2":{"url":"YTZt7S6dNuQ","comments":[],"date":"Oct 9, 2017","title":"Your First HTML & CSS Project"},"3":{"url":"MSslqwLrkxE","comments":[],"date":"Oct 19, 2017","title":"Getting Started With JavaScript"},"4":{"url":"NhYMlbKgQzU","comments":[],"date":"Feb 3, 2018","title":"Advanced Javascript"},"5":{"url":"iWfz2RnTTaU","comments":[],"date":"Nov 30, 2018","title":"Creating An Instagram Bot With JavaScript"},"6":{"url":"9q4tZbHu9XY","comments":[],"date":"Dec 20, 2018","title":"Getting Around The Terminal"},"7":{"url":"1xecfa-igYc","comments":[],"date":"Mar 30, 2019","title":"Build Your First React App"},"8":{"url":"_Ii1-OWaTlk","comments":[],"date":"Jun 29, 2019","title":"Instagram Automation Chrome Extension"},"9":{"url":"Opu7kA4N8es","comments":[],"date":"Sep 1, 2019","title":"How To Practice HTML & CSS"},"10":{"url":"89P8ctxocRQ","comments":[],"date":"Jul 23, 2015","title":"How To Be A Twitter Power User"},"11":{"url":"PTDJgcnY_2k","comments":[],"date":"Oct 7, 2019","title":"How To Freelance Web Development"},"13":{"url":"sT0tGJH911k","comments":[],"date":"Mar 10, 2019","title":"How To Edit Photos"},"14":{"url":"OQhMKVCu4IM","comments":[],"date":"Oct 23, 2015","title":"2015 Film Reel"},"15":{"url":"mcf34i-aFZg","comments":[],"date":"Aug 25, 2015","title":"Commercial For Salt Lake Lifestyle"},"16":{"url":"VqaFwr4JoGk","comments":[],"date":"Aug 3, 2015","title":"Commercial For Details Comforts"},"17":{"url":"sQGB-X5FJy4","comments":[],"date":"May 14, 2015","title":"Commercial For Two Friends Grooming"},"18":{"url":"LOwHoinLrso","comments":[],"date":"Sep 28, 2014","title":"Commercial For GetRoFit"},"19":{"url":"0oX4S6BsH_I","comments":[],"date":"Jun 23, 2014","title":"Commercial For Le Andos Cafe"},"20":{"url":"XS5izycu9xU","comments":[],"date":"May 22, 2014","title":"Commercial For Cobra Kai"},"21":{"url":"LqRjZeZ72lk","comments":[],"date":"Mar 1, 2014","title":"Commercial For Zef's"},"23":{"url":"3hi1CoyFP98","comments":[],"date":"Jun 23, 2013","title":"Behind The Scenes Of A Music Video"},"24":{"url":"t_EESTOC3NY","comments":[],"date":"Jul 5, 2013","title":"Give Him Praise By Jay-Wayne Music Video"},"25":{"url":"k4uW0P_z6Rs","comments":[],"date":"Jun 4, 2013","title":"Commercial For One Love Deli"},"27":{"url":"4002hbmQmg0","comments":[],"date":"Feb 6, 2011","title":"Cookies | Short Film"},"28":{"url":"AWTr3n_BQkM","comments":[],"date":"Jan 27, 2013","title":"The Egg | Short Film"},"29":{"url":"VJoQuk4elGE","comments":[],"date":"Jan 1, 2013","title":"Hazard Head | Music Video"},"30":{"url":"ZdZXVrbTri8","comments":[],"date":"Dec 11, 2009","title":"Jason Jewell | Promo Video"},"31":{"url":"dyXiW-bzOwo","comments":[],"date":"Nov 15, 2017","title":"Deseret News | Video Project"}};

/***/ }),

/***/ "../../../../src/environments/environment.ts":
/*!********************************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/environments/environment.ts ***!
  \********************************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "../../../../src/main.ts":
/*!************************************************************!*\
  !*** /Users/jadeallencook/www/Jade-Allen-Cook/src/main.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../../../../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../../../../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi /Users/jadeallencook/www/Jade-Allen-Cook/src/main.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jadeallencook/www/Jade-Allen-Cook/src/main.ts */"../../../../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map