(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      <main role=\"main\" class=\"col-md-12\">        \n        <app-layout></app-layout>\n      </main>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dynamic-layout';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _declarations_layout_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./declarations/layout-components */ "./src/app/declarations/layout-components.ts");




// tslint:disable-next-line: max-line-length

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _declarations_layout_components__WEBPACK_IMPORTED_MODULE_4__["embeddedDependencies"],
                _declarations_layout_components__WEBPACK_IMPORTED_MODULE_4__["embeddedComponents"],
                _declarations_layout_components__WEBPACK_IMPORTED_MODULE_4__["embeddedComponentsDependencies"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _declarations_layout_components__WEBPACK_IMPORTED_MODULE_4__["embeddedModules"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [
                _declarations_layout_components__WEBPACK_IMPORTED_MODULE_4__["embeddedComponents"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/example1/example1.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/example1/example1.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\">\n  <h4 class=\"alert-heading\">Well done!</h4>\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n  <hr>\n  <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n</div>"

/***/ }),

/***/ "./src/app/components/example1/example1.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/example1/example1.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZTEvZXhhbXBsZTEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example1/example1.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/example1/example1.component.ts ***!
  \***********************************************************/
/*! exports provided: Example1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example1Component", function() { return Example1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Example1Component = /** @class */ (function () {
    function Example1Component() {
    }
    Example1Component.prototype.ngOnInit = function () {
    };
    Example1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example1',
            template: __webpack_require__(/*! ./example1.component.html */ "./src/app/components/example1/example1.component.html"),
            styles: [__webpack_require__(/*! ./example1.component.scss */ "./src/app/components/example1/example1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Example1Component);
    return Example1Component;
}());



/***/ }),

/***/ "./src/app/components/example2/example2.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/example2/example2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item\">Cras justo odio</li>\n  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n  <li class=\"list-group-item\">Morbi leo risus</li>\n  <li class=\"list-group-item\">Porta ac consectetur ac</li>\n  <li class=\"list-group-item\">Vestibulum at eros</li>\n</ul>"

/***/ }),

/***/ "./src/app/components/example2/example2.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/example2/example2.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZTIvZXhhbXBsZTIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example2/example2.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/example2/example2.component.ts ***!
  \***********************************************************/
/*! exports provided: Example2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example2Component", function() { return Example2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Example2Component = /** @class */ (function () {
    function Example2Component() {
    }
    Example2Component.prototype.ngOnInit = function () {
    };
    Example2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example2',
            template: __webpack_require__(/*! ./example2.component.html */ "./src/app/components/example2/example2.component.html"),
            styles: [__webpack_require__(/*! ./example2.component.scss */ "./src/app/components/example2/example2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Example2Component);
    return Example2Component;
}());



/***/ }),

/***/ "./src/app/components/example3/example3.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/example3/example3.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">First</th>\n      <th scope=\"col\">Last</th>\n      <th scope=\"col\">Handle</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope=\"row\">1</th>\n      <td>Mark</td>\n      <td>Otto</td>\n      <td>@mdo</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">2</th>\n      <td>Jacob</td>\n      <td>Thornton</td>\n      <td>@fat</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">3</th>\n      <td>Larry</td>\n      <td>the Bird</td>\n      <td>@twitter</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/example3/example3.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/example3/example3.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZTMvZXhhbXBsZTMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example3/example3.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/example3/example3.component.ts ***!
  \***********************************************************/
/*! exports provided: Example3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example3Component", function() { return Example3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Example3Component = /** @class */ (function () {
    function Example3Component() {
    }
    Example3Component.prototype.ngOnInit = function () {
    };
    Example3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example3',
            template: __webpack_require__(/*! ./example3.component.html */ "./src/app/components/example3/example3.component.html"),
            styles: [__webpack_require__(/*! ./example3.component.scss */ "./src/app/components/example3/example3.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Example3Component);
    return Example3Component;
}());



/***/ }),

/***/ "./src/app/components/example4/child/child.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/example4/child/child.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\n  <div class=\"card-header\">Child</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">This is a Child Control</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n  </div>\n</div>\n<app-subchild></app-subchild>"

/***/ }),

/***/ "./src/app/components/example4/child/child.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/example4/child/child.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZTQvY2hpbGQvY2hpbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example4/child/child.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/example4/child/child.component.ts ***!
  \**************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/components/example4/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.scss */ "./src/app/components/example4/child/child.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/components/example4/child/subchild/subchild.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/example4/child/subchild/subchild.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n  <div class=\"card-header\">subchild</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Level 2 control </h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/example4/child/subchild/subchild.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/example4/child/subchild/subchild.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZTQvY2hpbGQvc3ViY2hpbGQvc3ViY2hpbGQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example4/child/subchild/subchild.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/example4/child/subchild/subchild.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubchildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubchildComponent", function() { return SubchildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubchildComponent = /** @class */ (function () {
    function SubchildComponent() {
    }
    SubchildComponent.prototype.ngOnInit = function () {
    };
    SubchildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subchild',
            template: __webpack_require__(/*! ./subchild.component.html */ "./src/app/components/example4/child/subchild/subchild.component.html"),
            styles: [__webpack_require__(/*! ./subchild.component.scss */ "./src/app/components/example4/child/subchild/subchild.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubchildComponent);
    return SubchildComponent;
}());



/***/ }),

/***/ "./src/app/components/example4/example4.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/example4/example4.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Special title treatment</h5>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n    <app-child></app-child>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/example4/example4.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/example4/example4.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZTQvZXhhbXBsZTQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example4/example4.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/example4/example4.component.ts ***!
  \***********************************************************/
/*! exports provided: Example4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example4Component", function() { return Example4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Example4Component = /** @class */ (function () {
    function Example4Component() {
    }
    Example4Component.prototype.ngOnInit = function () {
    };
    Example4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example4',
            template: __webpack_require__(/*! ./example4.component.html */ "./src/app/components/example4/example4.component.html"),
            styles: [__webpack_require__(/*! ./example4.component.scss */ "./src/app/components/example4/example4.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Example4Component);
    return Example4Component;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light justify-content-between\">\n  <a class=\"navbar-brand\"><h2>D - Layout</h2></a>\n  <div>\n    <button class=\"btn btn-outline-success my-2 my-sm-0\"  style=\"min-height:50px;margin:5px;\" (click)=\"AddEmptyContainer()\">Add Cells</button>\n    <button class=\"btn btn-outline-primary my-2 my-sm-0\"  style=\"min-height:50px;margin:5px;\" (click)=\"CurrentContainerLayout()\">Get Container Layout</button>\n    <button class=\"btn btn-outline-secondary my-2 my-sm-0\"  style=\"min-height:50px;margin:5px;\" (click)=\"CurrentLayout()\">Get DropItem Layout</button>\n  </div>\n</nav>\n\n\n<div class=\"row\">\n  <div class=\"col-sm\">\n    <p>\n      <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#dataChange\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n         Changes\n      </a>    \n    </p>\n    <div class=\"collapse\" id=\"dataChange\">\n      <div class=\"card card-body form-group\">\n        <div class=\"form-group\">\n          <label for=\"comment\">Grid Changes:</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"layoutchanges\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"comment\">Drop Content Changes:</label>\n          <textarea class=\"form-control\" rows=\"5\" id=\"contentchanges\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-outline-secondary my-2 my-sm-0\" style=\"min-height:50px;margin:5px;\">Apply Layout Changes</button>\n        </div>\n    </div>\n    </div>\n    \n    <p>\n      <a class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n         Container\n      </a>    \n    </p>\n    <div class=\"collapse\" id=\"collapseExample\">\n      <div class=\"card card-body form-group\">\n        <div class=\"toolbar1\" class=\"col-md-12\">\n          <nav>\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n              <li class=\"nav-item\" (dragend)=\"DroppableItems('TabContent1')\">\n                <a class=\"nav-link active btn btn-primary\" id=\"1-tab\" data-toggle=\"tab\" href=\"#tab1\" role=\"tab\"\n                  class=\"draggable\" draggable=\"true\" (dragend)=\"DroppableItems('TabContent1')\" aria-controls=\"home\"\n                  aria-selected=\"true\">TAB 1</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"2-tab\" data-toggle=\"tab\" href=\"#tab2\" role=\"tab\" class=\"draggable\" draggable=\"true\"\n                  (dragend)=\"DroppableItems('TabContent2')\" aria-controls=\"profile\" aria-selected=\"false\">TAB 2</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"3-tab\" data-toggle=\"tab\" href=\"#tab3\" role=\"tab\" class=\"draggable\" draggable=\"true\"\n                  (dragend)=\"DroppableItems('TabContent3')\" aria-controls=\"contact\" aria-selected=\"false\">TAB 3</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"4-tab\" data-toggle=\"tab\" href=\"#tab4\" role=\"tab\" class=\"draggable\" draggable=\"true\"\n                  (dragend)=\"DroppableItems('TabContent4')\" aria-controls=\"contact\" aria-selected=\"false\">TAB 4</a>\n              </li>\n            </ul>\n          </nav>\n        \n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"tab1\" role=\"tabpanel\" aria-labelledby=\"1-tab\">\n              <app-example1></app-example1>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tab2\" role=\"tabpanel\" aria-labelledby=\"2-tab\">\n              <app-example2></app-example2>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tab3\" role=\"tabpanel\" aria-labelledby=\"3-tab\">\n              <app-example3></app-example3>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tab4\" role=\"tabpanel\" aria-labelledby=\"4-tab\">\n              <app-example4></app-example4>\n            </div>\n          </div>\n         \n          \n        </div>\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"col-sm\">\n    <gridster [options]=\"options\" >\n      <gridster-item *ngFor=\"let item of layout\" [item]=\"item\" (dragover)=\"SetContainerId(item.id)\">\n        <div class=\"alert alert-dismissible\">\n          <ng-container appLayoutItem [componentRef]=\"GetContainerElement(item.id)\" >\n    \n            \n       \n          </ng-container>\n          <button (click)=\"RemoveContainer(item.id)\">Delete Item</button>\n        </div>\n      </gridster-item>\n    </gridster>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .toolbar {\n  height: 100px;\n  display: flex; }\n\n:host gridster {\n  display: flex;\n  height: calc(100vh - 115px);\n  flex-direction: column; }\n\n:host button {\n  height: 30px; }\n\n:host .draggable {\n  padding: 10px;\n  width: 200px;\n  border: solid 0px #000;\n  margin-left: 20px;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvQzpcXFVzZXJzXFxqb2pveVxcRG9jdW1lbnRzXFxHaXRIdWJcXGR5bmFtaWNMYXlvdXQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFKakI7RUFRSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQVYxQjtFQWNJLFlBQVksRUFBQTs7QUFkaEI7RUFrQkksYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5Q0FBeUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAudG9vbGJhciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgZ3JpZHN0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE1cHgpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBidXR0b24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5kcmFnZ2FibGUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogc29saWQgMHB4ICMwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/layout.service */ "./src/app/services/layout.service.ts");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(layoutService, detector) {
        this.layoutService = layoutService;
        this.detector = detector;
    }
    Object.defineProperty(LayoutComponent.prototype, "options", {
        get: function () {
            return this.layoutService.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutComponent.prototype, "layout", {
        get: function () {
            return this.layoutService.layout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutComponent.prototype, "components", {
        get: function () {
            return this.layoutService.components;
        },
        enumerable: true,
        configurable: true
    });
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.CurrentLayout = function () {
        alert(JSON.stringify(this.layoutService.getComponents()));
    };
    LayoutComponent.prototype.CurrentContainerLayout = function () {
        alert(JSON.stringify(this.layoutService.layout));
    };
    LayoutComponent.prototype.AddEmptyContainer = function () {
        this.layoutService.addItem();
    };
    LayoutComponent.prototype.GetContainerElement = function (id) {
        return this.layoutService.getComponentRef(id);
    };
    LayoutComponent.prototype.DroppableItems = function (id) {
        this.layoutService.dropItem(id);
    };
    LayoutComponent.prototype.SetContainerId = function (id) {
        this.layoutService.setDropId(id);
    };
    LayoutComponent.prototype.RemoveContainer = function (id) {
        this.layoutService.deleteItem(id);
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/declarations/layout-components.ts":
/*!***************************************************!*\
  !*** ./src/app/declarations/layout-components.ts ***!
  \***************************************************/
/*! exports provided: components, embeddedComponents, embeddedComponentsDependencies, embeddedModules, embeddedDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeddedComponents", function() { return embeddedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeddedComponentsDependencies", function() { return embeddedComponentsDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeddedModules", function() { return embeddedModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embeddedDependencies", function() { return embeddedDependencies; });
/* harmony import */ var _components_example4_example4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/example4/example4.component */ "./src/app/components/example4/example4.component.ts");
/* harmony import */ var _components_example3_example3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/example3/example3.component */ "./src/app/components/example3/example3.component.ts");
/* harmony import */ var _components_example2_example2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/example2/example2.component */ "./src/app/components/example2/example2.component.ts");
/* harmony import */ var _components_example1_example1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/example1/example1.component */ "./src/app/components/example1/example1.component.ts");
/* harmony import */ var _components_example4_child_subchild_subchild_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/example4/child/subchild/subchild.component */ "./src/app/components/example4/child/subchild/subchild.component.ts");
/* harmony import */ var _components_example4_child_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/example4/child/child.component */ "./src/app/components/example4/child/child.component.ts");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _directives_layout_item_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/layout-item.directive */ "./src/app/directives/layout-item.directive.ts");









var components = {
    TabContent1: _components_example1_example1_component__WEBPACK_IMPORTED_MODULE_3__["Example1Component"],
    TabContent2: _components_example2_example2_component__WEBPACK_IMPORTED_MODULE_2__["Example2Component"],
    TabContent3: _components_example3_example3_component__WEBPACK_IMPORTED_MODULE_1__["Example3Component"],
    TabContent4: _components_example4_example4_component__WEBPACK_IMPORTED_MODULE_0__["Example4Component"]
};
var embeddedComponents = [
    _components_example1_example1_component__WEBPACK_IMPORTED_MODULE_3__["Example1Component"],
    _components_example2_example2_component__WEBPACK_IMPORTED_MODULE_2__["Example2Component"],
    _components_example3_example3_component__WEBPACK_IMPORTED_MODULE_1__["Example3Component"],
    _components_example4_example4_component__WEBPACK_IMPORTED_MODULE_0__["Example4Component"]
];
var embeddedComponentsDependencies = [
    _components_example4_child_child_component__WEBPACK_IMPORTED_MODULE_5__["ChildComponent"],
    _components_example4_child_subchild_subchild_component__WEBPACK_IMPORTED_MODULE_4__["SubchildComponent"],
];
var embeddedModules = [
    angular_gridster2__WEBPACK_IMPORTED_MODULE_6__["GridsterModule"]
];
var embeddedDependencies = [
    _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
    _directives_layout_item_directive__WEBPACK_IMPORTED_MODULE_8__["LayoutItemDirective"],
];


/***/ }),

/***/ "./src/app/directives/layout-item.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/layout-item.directive.ts ***!
  \*****************************************************/
/*! exports provided: LayoutItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutItemDirective", function() { return LayoutItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _declarations_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../declarations/layout-components */ "./src/app/declarations/layout-components.ts");



var LayoutItemDirective = /** @class */ (function () {
    function LayoutItemDirective(container, resolver) {
        this.container = container;
        this.resolver = resolver;
    }
    LayoutItemDirective.prototype.ngOnInit = function () { };
    LayoutItemDirective.prototype.ngOnChanges = function () {
        var component = _declarations_layout_components__WEBPACK_IMPORTED_MODULE_2__["components"][this.componentRef];
        if (component) {
            var factory = this.resolver.resolveComponentFactory(component);
            this.component = this.container.createComponent(factory);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LayoutItemDirective.prototype, "componentRef", void 0);
    LayoutItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appLayoutItem]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], LayoutItemDirective);
    return LayoutItemDirective;
}());



/***/ }),

/***/ "./src/app/services/layout.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/layout.service.ts ***!
  \********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-gridster2 */ "./node_modules/angular-gridster2/fesm5/angular-gridster2.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_3__);




var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.options = {
            draggable: {
                enabled: true
            },
            pushItems: true,
            resizable: {
                enabled: true
            },
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_2__["CompactType"].CompactUpAndLeft
        };
        this.layout = [];
        this.components = [];
    }
    LayoutService.prototype.addItem = function () {
        this.layout.push({
            cols: 5,
            id: angular2_uuid__WEBPACK_IMPORTED_MODULE_3__["UUID"].UUID(),
            rows: 5,
            x: 0,
            y: 0
        });
    };
    LayoutService.prototype.deleteItem = function (id) {
        var item = this.layout.find(function (d) { return d.id === id; });
        this.layout.splice(this.layout.indexOf(item), 1);
        var comp = this.components.find(function (c) { return c.TabId === id; });
        this.components.splice(this.components.indexOf(comp), 1);
        this.options.api.optionsChanged();
    };
    LayoutService.prototype.setDropId = function (tabId) {
        this.dropTabId = tabId;
    };
    LayoutService.prototype.dropItem = function (dragId) {
        var _this = this;
        var _a;
        var components = this.components;
        var comp = components.find(function (c) { return c.TabId === _this.dropTabId; });
        var updateIdx = comp ? components.indexOf(comp) : components.length;
        var componentItem = {
            TabId: this.dropTabId,
            componentRef: dragId
        };
        this.components = Object.assign([], this.components, (_a = {}, _a[updateIdx] = componentItem, _a));
    };
    LayoutService.prototype.getComponentRef = function (id) {
        var comp = this.components.find(function (c) { return c.TabId === id; });
        return comp ? comp.componentRef : null;
    };
    LayoutService.prototype.getComponents = function () {
        return this.components;
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jojoy\Documents\GitHub\dynamicLayout\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map