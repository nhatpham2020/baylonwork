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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<app-babylon-viewer class=\"flex-grow-1\"></app-babylon-viewer>\r\n<app-appearance-controls></app-appearance-controls>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gun-customizer';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _babylon_viewer_babylon_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./babylon-viewer/babylon-viewer.component */ "./src/app/babylon-viewer/babylon-viewer.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _appearance_controls_appearance_controls_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appearance-controls/appearance-controls.component */ "./src/app/appearance-controls/appearance-controls.component.ts");
/* harmony import */ var _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./share-modal/share-modal.component */ "./src/app/share-modal/share-modal.component.ts");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "./src/app/login-modal/login-modal.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _babylon_viewer_babylon_viewer_component__WEBPACK_IMPORTED_MODULE_6__["BabylonViewerComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _appearance_controls_appearance_controls_component__WEBPACK_IMPORTED_MODULE_8__["AppearanceControlsComponent"],
                _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_9__["ShareModalComponent"],
                _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_10__["LoginModalComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__["ColorPickerModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            entryComponents: [_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_10__["LoginModalComponent"], _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_9__["ShareModalComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appearance-controls/appearance-controls.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/appearance-controls/appearance-controls.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gun-selector a *,\r\n.weapon-option a *,\r\n.pack-selector a *,\r\n.option-editor a *{\r\n    vertical-align: middle;\r\n}\r\n\r\n.gun-selector a {\r\n    margin: auto 0;\r\n}\r\n\r\n.gun-selector .material-icons {\r\n    font-size: 2em;\r\n}\r\n\r\n.weapon-icon {\r\n    display: inline-block;\r\n    width: 8em;\r\n    overflow: hidden;\r\n}\r\n\r\n.weapon-name {\r\n    display: inline-block;\r\n    width: 8em;\r\n}\r\n\r\n.section-selector {\r\n    background-color: #DADADA;\r\n    position: relative;\r\n}\r\n\r\n.vertical-divider {\r\n    display: inline-block;\r\n    height: auto;\r\n    margin: 1em 0;\r\n    border: 1px solid;\r\n}\r\n\r\n.section-icon {\r\n    height: 2em;\r\n    min-width: 2em;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n.all-options {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 100%;\r\n    transition: left 0.4s ease-in-out;\r\n}\r\n\r\n.all-options.put-away {\r\n    left: -100%;\r\n}\r\n\r\n.options-container {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.section-option {\r\n    display: inline-block;\r\n    text-align: center;\r\n    height: 4em;\r\n}\r\n\r\n.section-option .display {\r\n    background-clip: border-box;\r\n    background-origin: border-box;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 4em;\r\n    height: 100%;\r\n}\r\n\r\n.section-option .display:hover,\r\n.section-option.active .display {\r\n    border: 2px solid #EC121F;\r\n}\r\n\r\n.section-option.first-of-set:not(:first-child) {\r\n    margin-left: 15px;\r\n}\r\n\r\n.undo-button {\r\n    position: absolute;\r\n    color: white;\r\n    top: 25%;\r\n    left: 40%;\r\n    font-weight: bold;\r\n}\r\n\r\n.arrow-controls {\r\n    font-size: 2.5em;\r\n    line-height: 0;\r\n}\r\n\r\n.arrow-controls .disabled {\r\n    color: darkgray;\r\n}\r\n\r\n.mcontainer{\r\n  position:relative;\r\n}\r\n\r\n.deployBtn, .deployBtn2{\r\n  position:absolute;\r\n  right:20px;\r\n  top:-45px;\r\n  border-radius: 15px;\r\n  border: none;\r\n}\r\n\r\n.weapon-visiblity{\r\n  padding:5px;\r\n  font-size:1.2em;\r\n}\r\n\r\n.pack-selector{\r\n  background: #444;\r\n  position:relative;\r\n}\r\n\r\n.pack-selector ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.pack-selector li {\r\n  float: left;\r\n}\r\n\r\n.pack-selector li a {\r\n  display: block;\r\n  text-align: center;\r\n  padding: 2px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n.pack-selector a{\r\n  color:#e0e0e0;\r\n}\r\n\r\n.pack-selector li a:hover , .pack-selector li.active a,.pack-selector .addPack:hover{\r\n  background-color: #222;\r\n  color:#fff;\r\n}\r\n\r\n.pack-selector .addPack{\r\n  position:absolute;\r\n  right:15px;\r\n  top:0;\r\n  cursor: pointer;\r\n  padding:2px;\r\n  vertical-align: middle;\r\n  color: #e0e0e0;\r\n}\r\n\r\n.pack-selector .newPack i,.pack-selector .newPack a{\r\n  color: #ff0;\r\n}\r\n\r\n.pack-selector .delNewPack{\r\n\r\n}\r\n\r\n.pack-selector .delNewPack:hover{\r\n  color:#e00000;\r\n}\r\n\r\n.arrow-controls{\r\n\r\n}\r\n\r\n.arrow-controls .addOption{\r\n  font-size:1.5em;\r\n  color:#222;\r\n}\r\n\r\n.options-container .newOption{\r\n  border: 2px solid #f00;\r\n  box-shadow:0 0 3px #A00;\r\n}\r\n\r\n.option-editor{\r\n  height: 30px;\r\n  padding: 0 50px 0 80px;\r\n  margin:0;\r\n }\r\n\r\n.option-editor .editor-option{\r\n  padding: 2px;\r\n  margin: 0 3px;\r\n}\r\n\r\n.option-editor .editor-option:hover i{\r\n  color: red;\r\n}\r\n\r\n.optionDisplayImg{\r\n  width:100%;\r\n  height:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/appearance-controls/appearance-controls.component.html":
/*!************************************************************************!*\
  !*** ./src/app/appearance-controls/appearance-controls.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2 mb-2 col-12\" style=\"text-align: right;padding-right: 20px;\" *ngIf=\"isAdmin\">\r\n  <button style=\"background: #444444; border: #444444;\" (click)=\"deployPackData()\" type=\"button\" class=\"btn btn-danger\">Deploy</button>\r\n</div>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row section-selector\">\r\n    <div class=\"col-auto gun-selector d-flex\">\r\n      <a href=\"#\" (click)=\"toggleChoices($event)\">\r\n        <i class=\"material-icons\">{{hideWeaponChoices ? 'expand_less' : 'expand_more'}}</i>\r\n        <div class=\"weapon-icon contain-svg\" *ngIf=\"chosenWeapon && chosenWeapon.svgPath\" [inlineSVG]=\"chosenWeapon.svgPath\"></div>\r\n        <div class=\"p-2 weapon-name\" *ngIf=\"chosenWeapon && chosenWeapon.name\">{{chosenWeapon.name}}</div>\r\n      </a>\r\n    </div>\r\n    <div class=\"vertical-divider\"></div>\r\n    <div class=\"mt-2 mb-2 col-auto\" *ngFor=\"let section of allSections\">\r\n      <a [class.active]=\"section == activeSection()\" href=\"#\" (click)=\"changeSection($event, section)\">\r\n        <div class=\"section-icon contain-svg\" [inlineSVG]=\"section.svgPath\"></div>\r\n        <div>{{section.name}}</div>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-auto all-options\" [class.put-away]=\"hideWeaponChoices\">\r\n      <div class=\"weapon-option\" *ngFor=\"let weapon of (customizationData || {}).weapons\">\r\n        <i style=\"cursor: pointer;margin-right:5px\" *ngIf=\"weapon.visible && isAdmin\" (click)=\"setVisibleofWeapon(weapon ,false)\" class=\"material-icons md-inherit\">visibility</i>\r\n        <i style=\"cursor: pointer;margin-right:5px\" *ngIf=\"!weapon.visible  && isAdmin\" (click)=\"setVisibleofWeapon(weapon ,true)\" class=\"material-icons md-inherit\">visibility_off</i>\r\n        <a class=\"d-inline-block\" href=\"#\" [class.active]=\"weapon == chosenWeapon\" (click)=\"chooseWeapon($event, weapon)\">\r\n          <div class=\"weapon-icon contain-svg\" [inlineSVG]=\"weapon.svgPath\"></div>\r\n          <div class=\"p-2 weapon-name\">{{weapon.name}}</div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row pack-selector\">\r\n    <ul>\r\n      <li [class.active]=\"allitemSelected\">\r\n        <a href=\"#\" (click)=\"selectPack(null)\">ALL</a>\r\n      </li>\r\n      <li *ngFor=\"let pack of packArray\" [class.active]=\"pack == selectedPack\">\r\n        <ng-container>\r\n          <a style=\"float: left;padding-right: 5px;\" href=\"#\" (click)=\"selectPack(pack)\">\r\n            {{pack.name}}\r\n          </a>\r\n          <!--<a href=\"#\">edit </a>\r\n          <a href=\"#\">delete </a>\r\n          <a href=\"#\">visible </a>-->\r\n          <div style=\"display:inline-flex\" *ngIf=\"selectedPack && selectedPack._id == pack._id && isAdmin\" class=\"option-editor-options\">\r\n\r\n            <a style=\"padding-left: 4px;padding-right: 0px;\" (click) =\"movePackLeft(pack)\" >\r\n              <i style=\"cursor: pointer;\" class=\"material-icons md-inherit\">keyboard_arrow_left</i>\r\n            </a>\r\n\r\n            <a style=\"padding-left: 4px;padding-right: 0px;\" (click) =\"movePackRight(pack)\">\r\n              <i style=\"cursor: pointer;\" class=\"material-icons md-inherit\">keyboard_arrow_right</i>\r\n            </a>\r\n\r\n\r\n            <a style=\"padding-left: 4px;padding-right: 0px;\">\r\n              <i style=\"cursor: pointer;\" *ngIf=\"pack.visible\" (click)=\"setVisibleofPack(pack ,false)\" class=\"material-icons md-inherit\">visibility</i>\r\n              <i style=\"cursor: pointer;\" *ngIf=\"!pack.visible\" (click)=\"setVisibleofPack(pack ,true)\" class=\"material-icons md-inherit\">visibility_off</i>\r\n            </a>\r\n            <a style=\"padding-left: 4px;padding-right: 0px;\" (click)=\"openEditPack(pack)\">\r\n              <i style=\"cursor: pointer;\" class=\"material-icons md-inherit\">edit</i>\r\n            </a>\r\n            <a style=\"padding-left: 4px;padding-right: 0px;\" (click)=\"openDeletePack(pack)\">\r\n              <i style=\"cursor: pointer;\" class=\"material-icons md-inherit\">close</i>\r\n            </a>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!userLoggedIn\">\r\n          <a *ngIf=\"pack.status==='V'\" href=\"#\" (click)=\"selectPack(pack)\">{{pack.name}}</a>\r\n        </ng-container>\r\n      </li>\r\n\r\n      <li *ngFor=\"let pack of newPackArray\" [class.newPack]=\"true\">\r\n        <a (click)=\"newPackClicked($event)\">\r\n          {{pack.name}}\r\n          <i class=\"material-icons md-inherit delNewPack\" (click)=\"delNewPack(pack)\">close</i>\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n    <div class=\"addPack\" (click)=\"openAddPackModel()\" *ngIf=\"isAdmin\">\r\n      <i class=\"material-icons md-inherit\">add</i>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row option-editor\" *ngIf=\"isAdmin\">\r\n    <div class=\"option-editor-options\">\r\n\r\n      <a *ngIf=\"allitemSelected == false && selectedItem\" class=\"editor-option editOption\" style=\"cursor: pointer;\">\r\n        <i style=\"cursor: pointer;\" (click)=\"moveLeft(selectedItem)\" class=\"material-icons md-inherit\">keyboard_arrow_left</i>\r\n      </a>\r\n\r\n      <a *ngIf=\"allitemSelected == false && selectedItem\" class=\"editor-option editOption\" style=\"cursor: pointer;\">\r\n        <i style=\"cursor: pointer;\" (click)=\"moveRight(selectedItem)\" class=\"material-icons md-inherit\">keyboard_arrow_right</i>\r\n      </a>\r\n\r\n      <a *ngIf=\"allitemSelected == false && selectedItem\" class=\"editor-option toggleOptionVisibility\" style=\"cursor: pointer;\">\r\n        <i *ngIf=\"selectedItem.visible\" (click)=\"setVisible(false)\" class=\"material-icons md-inherit\">visibility</i>\r\n        <i *ngIf=\"!selectedItem.visible\" (click)=\"setVisible(true)\" class=\"material-icons md-inherit\">visibility_off</i>\r\n      </a>\r\n      <a *ngIf=\"allitemSelected == false && selectedItem\" (click)=\"editOption()\" class=\"editor-option editOption\" style=\"cursor: pointer;\">\r\n        <i class=\"material-icons md-inherit\">edit</i>\r\n      </a>\r\n      <a  *ngIf=\"allitemSelected == false && selectedItem\"(click)=\"openDeleteModel()\" class=\"editor-option delOption\" style=\"cursor: pointer;\">\r\n        <i class=\"material-icons md-inherit\">close</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row option-browser\">\r\n    <div class=\"mt-3 mb-3 col-auto\" *ngIf=\"(activeSection() || {}).globalReset\">\r\n      <!-- [class.active]=\"activeTracking().resetActive\" -->\r\n      <a class=\"section-option\" href=\"#\" title=\"undo\"\r\n         (click)=\"resetPressed($event)\">\r\n        <div class=\"display\" [style.opacity]=\"(undoManagerLimit()+3)/(9+3)\" style=\"background-image: url('assets/img/nav-icons/arrow.png');\">\r\n          <span class=\"undo-button\">{{ undoManagerLimit() }}</span>\r\n        </div>\r\n      </a>\r\n      <!-- <a class=\"section-option\" href=\"#\" title=\"redo\"\r\n          (click)=\"redoPressed($event)\">\r\n         <div class=\"display\" style=\"background-image: url('assets/img/nav-icons/arrow.png');\"></div>\r\n       </a> -->\r\n    </div>\r\n    <div #optionsContainer class=\"mt-3 mb-3 col options-container\">\r\n      <ng-container *ngFor=\"let optionGroup of (activeSection() || {}).optionGroups\">\r\n        <ng-container *ngFor=\"let option of optionGroup.options; let isFirst = first\">\r\n          <a class=\"section-option\" href=\"#\"\r\n             *ngIf=\"allitemSelected || (selectedPack && selectedPack._id === option.pack_id)\"\r\n             [class.first-of-set]=\"isFirst\"\r\n             [class.active1]=\" (option === selectedOption(optionGroup))\"\r\n             [class.active]=\"selectedOption1(option, optionGroup)\"\r\n             (click)=\"optionClicked($event, optionGroup, option)\">\r\n            <div *ngIf=\"option.type != 'MAT' && option.type != 'PAT'\" class=\"display\" [id]=\"option.displayImg ? ('url(\\'' + option.displayImg + '\\')') : ''\" [style.backgroundColor]=\"option.displayColor || ''\"></div>\r\n            <img *ngIf=\"option.type == 'MAT' || option.type == 'PAT'\" [src]=\"option.displayImg\" style=\"height: 4em;            width: 4em;\" />\r\n          </a>\r\n        </ng-container>\r\n        <!-- allitemSelected -->\r\n\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"mt-3 mb-3 col-auto arrow-controls d-flex\">\r\n      <a class=\"m-auto\" *ngIf=\"isAdmin\"\r\n         (click)=\"openModel()\">\r\n        <i class=\"material-icons md-inherit addOption\">add</i>\r\n      </a>\r\n      <a class=\"m-auto\" href=\"#\"\r\n         (click)=\"scrollOptionsLeft($event)\"\r\n         [class.disabled]=\"optionsContainer.scrollLeft === 0\">\r\n        <i class=\"material-icons md-inherit\">arrow_left</i>\r\n      </a>\r\n      <a class=\"m-auto\" href=\"#\"\r\n         (click)=\"scrollOptionsRight($event)\"\r\n         [class.disabled]=\"(optionsContainer.scrollLeft + optionsContainer.clientWidth) >= optionsContainer.scrollWidth\">\r\n        <i class=\"material-icons md-inherit\">arrow_right</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal\" style=\" overflow-y: scroll;\" id=\"my-modal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 *ngIf=\"!isEdit\">Add New Material</h4>\r\n        <h4 *ngIf=\"isEdit\">Edit Material</h4>\r\n        <button (click)=\"hideModal('my-modal')\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div _ngcontent-c6=\"\" class=\"row\">\r\n          <div _ngcontent-c6=\"\" class=\"col-12\">\r\n            <p> Please fill in the fields to add new material. </p>\r\n          </div>\r\n          <div class=\"col-12 form-group\">\r\n            <label _ngcontent-c6=\"\">Name</label>\r\n            <input _ngcontent-c6=\"\" class=\"form-control ng-untouched ng-pristine ng-valid\" [(ngModel)]=\"name\" type=\"text\">\r\n          </div>\r\n          <div class=\"col-12 form-group\">\r\n            <label>Color</label>\r\n            <!--<input class=\"form-control ng-untouched ng-pristine ng-valid\" type=\"text\" [(ngModel)]=\"colorCode\" ng-reflect-model=\"#000000\">-->\r\n            <input class=\"colorSample\" [value]=\"color\" style=\"width: 100%;color: white;padding-left: 5px;\" [(colorPicker)]=\"color\" [style.background]=\"color\" (colorPickerChange)=\"colorChanged($event)\" />\r\n          </div>\r\n          <!--<div class=\"col-12 form-group\">\r\n            <label>interactionValue</label>\r\n            <input _ngcontent-c6=\"\" class=\"form-control\" [(ngModel)]=\"name\" type=\"text\" disabled=\"\">\r\n          </div>-->\r\n          <div class=\"col-12 form-group\">\r\n            <label for=\"formControlRange\">Roughness</label>&nbsp;&nbsp;&nbsp;<b>{{roughness}}</b>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\"><input class=\"form-control-range ng-untouched ng-pristine ng-valid\" id=\"formControlRange\" max=\"1\" min=\"0\" step=\"0.01\" [(ngModel)]=\"roughness\" type=\"range\" ng-reflect-model=\"0.32\"></div>\r\n              <!--<div class=\"col-4\"><input class=\"form-control-range ng-untouched ng-pristine ng-valid\" id=\"formControlRange\" max=\"1\" min=\"0\" step=\"0.01\" [(ngModel)]=\"roughness\" type=\"number\" ng-reflect-model=\"0.32\"></div>-->\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 col-12\">\r\n                <label _ngcontent-c6=\"\">Display image</label>&nbsp;\r\n              </div>\r\n              <div class=\"col-md-6 col-12\" style=\"position:relative\">\r\n                <input accept=\"image/*\" (change)=\"fileEvent($event)\" style=\"position:absolute;width:115px;height:40px;opacity:0\" type=\"file\">\r\n                <button class=\"btn btn-success\" type=\"button\">Select image</button>\r\n              </div>\r\n              <div class=\"col-12 imgHolder text-center mt-3\">\r\n\r\n                <img id=\"image\" width=\"128\" class=\"imageSample\" src=\"{{image}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div _ngcontent-c6=\"\" class=\"col-md-6 col-12 form-group tcenter\">\r\n            <div _ngcontent-c6=\"\" class=\"checkbox\">\r\n              <label _ngcontent-c6=\"\">\r\n                <input _ngcontent-c6=\"\" type=\"checkbox\" [(ngModel)]=\"isMetal\"> Is Metal\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div _ngcontent-c6=\"\" class=\"col-md-6 col-12 form-group tcenter\">\r\n            <div _ngcontent-c6=\"\" class=\"checkbox\">\r\n              <label _ngcontent-c6=\"\"><input _ngcontent-c6=\"\" type=\"checkbox\" [(ngModel)]=\"visible\"> Visible</label>\r\n            </div>\r\n          </div>\r\n          <div _ngcontent-c6=\"\" class=\"col-12 form-group\">\r\n            <button _ngcontent-c6=\"\" *ngIf=\"!isEdit\" (click)=\"addMaterial()\" class=\"btn btn-primary\">Add New Material</button>\r\n            <button _ngcontent-c6=\"\" *ngIf=\"isEdit\" (click)=\"editMaterial()\" class=\"btn btn-primary\">Edit Material</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n         <button (click)=\"closemodal()\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"modal\" style=\" overflow-y: scroll;\" id=\"addColor\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 *ngIf=\"!isEdit\">Add New Color</h4>\r\n        <h4 *ngIf=\"isEdit\">Edit Color</h4>\r\n        <button (click)=\"hideModal('addColor')\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div _ngcontent-c6=\"\" class=\"row\">\r\n          <div _ngcontent-c6=\"\" class=\"col-12\">\r\n            <p> Please fill in the fields to add new Color. </p>\r\n          </div>\r\n          <div class=\"col-12 form-group\">\r\n            <label _ngcontent-c6=\"\">Name</label>\r\n            <input _ngcontent-c6=\"\" placeholder=\"New Color\" [(ngModel)]=\"colorName\" class=\"form-control ng-untouched ng-pristine ng-valid\" type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"col-12 form-group\">\r\n            <label>Display color</label>\r\n            <!--<input class=\"form-control ng-untouched ng-pristine ng-valid\" type=\"text\" [(ngModel)]=\"colorCodeInColor\" ng-reflect-model=\"#000000\">-->\r\n            <input class=\"colorSample\" [value]=\"color\" style=\"width: 100%;color: white;padding-left: 5px;\" [(colorPicker)]=\"color\" [style.background]=\"color\" (colorPickerChange)=\"colorModelChanged($event)\" />\r\n          </div>\r\n\r\n          <!--<div class=\"col-12 form-group\">\r\n            <label>interactionValue</label>\r\n            <input placeholder=\"new color\" _ngcontent-c6=\"\" class=\"form-control\" type=\"text\" disabled=\"\">\r\n            <div class=\"colorSample\" style=\"background-color: rgb(0, 0, 0);\">&nbsp;</div>\r\n          </div>-->\r\n\r\n\r\n\r\n          <div _ngcontent-c6=\"\" class=\"col-md-6 col-12 form-group tcenter\">\r\n            <div _ngcontent-c6=\"\" class=\"checkbox\">\r\n              <label _ngcontent-c6=\"\"><input _ngcontent-c6=\"\" [(ngModel)]=\"visibleInColor\" type=\"checkbox\"> Visible</label>\r\n            </div>\r\n          </div>\r\n          <div _ngcontent-c6=\"\" class=\"col-12 form-group\">\r\n            <button _ngcontent-c6=\"\" *ngIf=\"!isEdit\" (click)=\"addColor()\" class=\"btn btn-primary\">Add New Color</button>\r\n            <button _ngcontent-c6=\"\" *ngIf=\"isEdit\" (click)=\"editColor()\" class=\"btn btn-primary\">Edit Color</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n         <button (click)=\"closemodal()\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal\" style=\" overflow-y: scroll;\" id=\"patterns\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 *ngIf=\"!isEdit\">Add New Pattern</h4>\r\n        <h4 *ngIf=\"isEdit\">Edit Pattern</h4>\r\n        <button (click)=\"hideModal('patterns')\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div _ngcontent-c6=\"\" class=\"row\">\r\n          <div _ngcontent-c6=\"\" class=\"col-12\">\r\n            <p> Please fill in the fields to add new Texture. </p>\r\n          </div>\r\n          <div class=\"col-12 form-group\">\r\n            <label _ngcontent-c6=\"\">Name</label>\r\n            <input _ngcontent-c6=\"\" placeholder=\"New Pattern\" [(ngModel)]=\"patternName\" class=\"form-control ng-untouched ng-pristine ng-valid\" type=\"text\">\r\n          </div>\r\n\r\n          <div style=\"position: relative;\" class=\"col-12 imgHolder text-center mt-3\">\r\n            <input style=\"position: absolute;opacity: 0;  line-height: 121px;width: 128px;\" (change)=\"fileEvent($event)\" accept=\"image/*\" type=\"file\">\r\n            <img width=\"128\" id=\"image1\" class=\"imageSample\" src=\"{{patternImage}}\">\r\n          </div>\r\n\r\n          <!--<div class=\"col-12 form-group\">\r\n            <label>interactionValue</label>\r\n            <input placeholder=\"new color\" _ngcontent-c6=\"\" class=\"form-control\" type=\"text\" disabled=\"\">\r\n            <div class=\"colorSample\" style=\"background-color: rgb(0, 0, 0);\">&nbsp;</div>\r\n          </div>-->\r\n          <div _ngcontent-c6=\"\" class=\"col-md-6 col-12 form-group tcenter\">\r\n            <div _ngcontent-c6=\"\" class=\"checkbox\">\r\n              <label _ngcontent-c6=\"\"><input _ngcontent-c6=\"\" [(ngModel)]=\"visibleInPattern\" type=\"checkbox\"> Visible</label>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div _ngcontent-c6=\"\" class=\"col-12 form-group\">\r\n            <button _ngcontent-c6=\"\" *ngIf=\"!isEdit\" (click)=\"addPatternse()\" class=\"btn btn-primary\">Add New Texture</button>\r\n            <button _ngcontent-c6=\"\" *ngIf=\"isEdit\" (click)=\"editPatternse()\" class=\"btn btn-primary\">Edit Texture</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n         <button (click)=\"closemodal()\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" style=\" overflow-y: scroll;\" id=\"addPack\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 *ngIf=\"!isEdit\">Add New Pack</h4>\r\n        <h4 *ngIf=\"isEdit\">Edit Pack</h4>\r\n        <button (click)=\"hideModal('addPack')\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <p> Please fill in the fields to add new Pack. </p>\r\n          </div>\r\n          <div class=\"col-12 form-group\">\r\n            <input placeholder=\"Name of the pack\" name=\"packname\" [(ngModel)]=\"packName\" class=\"form-control\" type=\"text\">\r\n          </div>\r\n\r\n          <!-- <div class=\"col-12 form-group\">\r\n            <select class=\"form-control ng-untouched ng-pristine ng-valid\" [(ngModel)]=\"packtype\">\r\n              <option value=\"MATERIALS\">Material</option>\r\n              <option value=\"COLORS\">Colors</option>\r\n              <option value=\"PATTERNS\">Patterns</option>\r\n            </select>\r\n          </div> -->\r\n\r\n\r\n\r\n\r\n          <div class=\"col-12 form-group\">\r\n            <button *ngIf=\"!isEdit\" (click)=\"addPack()\" class=\"btn btn-primary\">Add New Pack</button>\r\n            <button *ngIf=\"isEdit\" (click)=\"editPack()\" class=\"btn btn-primary\">Edit Pack</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n         <button (click)=\"closemodal()\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal \" id=\"deletModel\" role=\"dialog\" style=\"background-color: rgba(0,0,0,0.4);\">\r\n  <div class=\"modal-dialog modal-img \">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-center\" style=\"color:black\"><b>Are you sure want to delete ?</b></h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hideModal('deletModel')\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <button type=\"button\" style=\"margin-left:86%;\" class=\"btn btn-round btn-info\" (click)=\"deleteData()\">\r\n              Yes\r\n            </button>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <button type=\"button\" style=\"float:right;background:#ce4747;color: white;\" (click)=\"hideModal('deletModel')\" class=\"btn btn-round \">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal \" id=\"deletPackModel\" role=\"dialog\" style=\"background-color: rgba(0,0,0,0.4);\">\r\n  <div class=\"modal-dialog modal-img \">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title text-center\" style=\"color:black\"><b>Are you sure want to delete ?</b></h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"hideModal('deletPackModel')\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <button type=\"button\" style=\"margin-left:86%;\" class=\"btn btn-round btn-info\" (click)=\"deletePack()\">\r\n              Yes\r\n            </button>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <button type=\"button\" style=\"float:right;background:#ce4747;color: white;\" (click)=\"hideModal('deletPackModel')\" class=\"btn btn-round \">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/appearance-controls/appearance-controls.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/appearance-controls/appearance-controls.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppearanceControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceControlsComponent", function() { return AppearanceControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customizer_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customizer-data.service */ "./src/app/customizer-data.service.ts");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewer.service */ "./src/app/viewer.service.ts");
/* harmony import */ var _undo_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./undo-manager */ "./src/app/appearance-controls/undo-manager.ts");
/* harmony import */ var _providers_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/api-service */ "./src/providers/api-service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AppearanceControlsComponent = /** @class */ (function () {
    function AppearanceControlsComponent(customizerDataService, apiService, _ngZone, viewerService, userService) {
        var _this = this;
        this.customizerDataService = customizerDataService;
        this.apiService = apiService;
        this._ngZone = _ngZone;
        this.viewerService = viewerService;
        this.userService = userService;
        this.allSections = [];
        this.hideWeaponChoices = true;
        this.selectedItems = new Map();
        this.lastClickedOption = new Map();
        this.packArray = [];
        this.newPackArray = [];
        this.loggedUser = null;
        this.isAdmin = false;
        this.place_holder_image = 'assets/img/image-placeholder-png-4.png';
        this.colorCode = "#000";
        this.type = "MATERIALS";
        this.interactionValue = "new material";
        this.image = this.place_holder_image;
        this.isMetal = false;
        this.visible = false;
        this.roughness = 0.5;
        this.visibleInColor = false;
        this.colorCodeInColor = "#000";
        this.visibleInPattern = false;
        this.isEdit = true;
        this.packtype = "MATERIALS";
        this.color = "#000";
        this.patternImage = "";
        this.Packs = [];
        this.deletedPack = [];
        this.outside = true;
        this.allitemSelected = true;
        this.sectionIndex = 0;
        this.allpacks = [];
        this.selectedPack = null;
        this.selectedItem = null;
        this.loggedUser = this.userService.retrieveUser();
        //this.isAdmin = this.userService.isAdmin();
        this.isAdmin = true;
        this.initializeSubscription = viewerService.initialized.subscribe(function () {
            _this.viewerInitialized();
        });
        this.clickSubscription = this.viewerService.meshClicked.subscribe(function (meshName) {
            _this.meshClicked(meshName);
        });
        this.viewerResetSubscription = this.viewerService.reset.subscribe(function () {
            _this.viewerReset();
        });
        this.getPacks();
        //document.addEventListener("click", function () {
        //  $('a').removeClass('active')
        //  console.log(this)
        //});
    }
    AppearanceControlsComponent.prototype.documentClick = function (event) {
        var currentTarget = event.currentTarget;
        if (this.outside && currentTarget.activeElement.nodeName === 'BODY') {
            $('a').removeClass('active');
            this.selectedItem = null;
        }
        else {
            this.outside = true;
        }
    };
    AppearanceControlsComponent.prototype.undoManagerLimit = function () {
        return _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].getInstance().getIndex() + 1;
    };
    AppearanceControlsComponent.prototype.activeTracking = function () {
        if (this.chosenWeapon) {
            return this.selectedItems.get(this.chosenWeapon);
        }
    };
    AppearanceControlsComponent.prototype.activeSection = function () {
        if (this.activeTracking() && this.activeTracking().activeSection) {
            return this.activeTracking().activeSection;
        }
    };
    AppearanceControlsComponent.prototype.changeSection = function (event, section) {
        var _this = this;
        this.activeTracking().activeSection = section;
        console.log(section.name);
        if (section.name == "Material") {
            this.sectionIndex = 0;
            this.type = "MATERIALS";
        }
        else if (section.name == "Color") {
            this.type = "COLORS";
            this.sectionIndex = 1;
        }
        else if (section.name == "Patterns") {
            this.type = "PATTERNS";
            this.sectionIndex = 2;
        }
        this.packtype = this.type;
        this.packArray = this.allpacks.filter(function (p) { return p.type == _this.packtype; });
        //this.selectedPack = null;
        //this.selectedItem = null;
        this.allitemSelected = true;
        return this.stopEvent(event);
    };
    /**
     * @param {string} meshName
     */
    AppearanceControlsComponent.prototype.chooseWeapon = function (event, weapon) {
        _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].getInstance().clear();
        this.chosenWeapon = weapon;
        this.hideWeaponChoices = true;
        this.allSections = this.customizationData.commonSections.slice()
            .concat(this.chosenWeapon.customizations.slice());
        this.viewerService.viewer.changeWeapon(weapon.modelFolder, weapon.modelFile);
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.clampScrollValue = function (scroll) {
        var ne = this.optionsContainer.nativeElement;
        return Math.max(0, Math.min(scroll, ne.scrollWidth - ne.clientWidth));
    };
    /**
     *  @param {string} meshName
     */
    AppearanceControlsComponent.prototype.meshClicked = function (meshName) {
        if (meshName === 'assets/models/assault-rifle/assault-rifle.gltf.honey_badger.trigger')
            return;
        if (!this.chosenWeapon.interactionBlacklist || (this.chosenWeapon.interactionBlacklist.indexOf(meshName) === -1)) {
            var activeSection = this.activeSection();
            /* if (activeTracking.resetActive) {
               switch (activeSection.interactionType) {
                 case 'alterMaterial':
                   this.viewerService.viewer.resetMaterialProperty(meshName, activeSection.affectedParameter);
                   break;
                 case 'swapMaterial':
                   this.viewerService.viewer.resetMaterial(meshName);
                   break;
               }
             } else {
             */
            var lastClickedOption = this.lastClickedOption.has(activeSection) ? this.lastClickedOption.get(activeSection) : null;
            if (lastClickedOption) {
                switch (activeSection.interactionType) {
                    case 'alterMaterial':
                        _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].setMaterialProperty(this.viewerService.viewer, meshName, activeSection.affectedParameter, lastClickedOption.interactionValue);
                        // this.viewerService.viewer.setMeshMaterialProperty(meshName, activeSection.affectedParameter,
                        //  lastClickedOption.interactionValue);
                        break;
                    case 'swapMaterial':
                        // this.viewerService.viewer.changeMeshMaterial(meshName, lastClickedOption.interactionValue);
                        _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].setMaterialTexture(this.viewerService.viewer, meshName, lastClickedOption.interactionValue);
                        break;
                }
            }
        }
        // }
    };
    AppearanceControlsComponent.prototype.ngOnDestroy = function () {
        this.initializeSubscription.unsubscribe();
        this.clickSubscription.unsubscribe();
        this.viewerResetSubscription.unsubscribe();
    };
    /**
     * @param {string} meshName
     */
    AppearanceControlsComponent.prototype.optionClicked = function (event, optionGroup, option) {
        var _this = this;
        this.selectedItem = option;
        var currentlySelectedOption = this.selectedOption(optionGroup);
        var activeTracking = this.activeTracking();
        activeTracking.resetActive = false;
        var prevChosenGroupOption = activeTracking.chosenGroupOption;
        var lastClickedOption = this.lastClickedOption;
        // keep a handle to previous values
        var prevOption = lastClickedOption.get(this.activeSection());
        var prevGroupOption = prevChosenGroupOption.get(optionGroup);
        var section = this.activeSection();
        if (option === currentlySelectedOption) {
            if (optionGroup.allowNone) {
                var redoFunction = function () {
                    _this.optionOff(option);
                    prevChosenGroupOption.set(optionGroup, null);
                    lastClickedOption.set(section, null);
                };
                if (section.interactionType == 'toggleMesh') {
                    _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].add({
                        undo: function () {
                            _this.optionOn(option);
                            prevChosenGroupOption.set(optionGroup, prevGroupOption);
                            lastClickedOption.set(section, prevOption);
                        },
                        redo: redoFunction,
                    });
                }
                else {
                    redoFunction();
                }
            }
        }
        else {
            var redoFunction = function () {
                _this.optionOff(currentlySelectedOption);
                prevChosenGroupOption.set(optionGroup, option);
                _this.optionOn(option);
                lastClickedOption.set(section, option);
            };
            if (section.interactionType == 'toggleMesh') {
                _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].add({
                    undo: function () {
                        _this.optionOff(option, section);
                        prevChosenGroupOption.set(optionGroup, prevGroupOption);
                        _this.optionOn(currentlySelectedOption, section);
                        lastClickedOption.set(section, prevOption);
                    },
                    redo: redoFunction,
                });
            }
            else {
                redoFunction();
            }
        }
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.optionOff = function (option, section) {
        if (!option) {
            return;
        }
        section = section ? section : this.activeSection();
        switch (section.interactionType) {
            case 'toggleMesh':
                this.viewerService.viewer.hideMesh(option.interactionValue);
                break;
        }
    };
    AppearanceControlsComponent.prototype.optionOn = function (option, section) {
        if (!option) {
            return;
        }
        section = section ? section : this.activeSection();
        switch (section.interactionType) {
            case 'toggleMesh':
                this.viewerService.viewer.showMesh(option.interactionValue);
                break;
        }
    };
    AppearanceControlsComponent.prototype.resetPressed = function (event) {
        // const tracking = this.activeTracking();
        // tracking.resetActive = !tracking.resetActive;
        _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].undo();
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.redoPressed = function (event) {
        _undo_manager__WEBPACK_IMPORTED_MODULE_3__["UndoMgr"].redo();
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.scrollOptionsLeft = function (event) {
        var ne = this.optionsContainer.nativeElement;
        ne.scrollLeft = this.clampScrollValue(ne.scrollLeft - (ne.clientWidth - 64));
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.scrollOptionsRight = function (event) {
        var ne = this.optionsContainer.nativeElement;
        ne.scrollLeft = this.clampScrollValue(ne.scrollLeft + (ne.clientWidth - 64));
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.selectedOption = function (optionGroup) {
        var toreturn = this.activeTracking().chosenGroupOption.get(optionGroup);
        //console.log(toreturn);
        return toreturn;
    };
    AppearanceControlsComponent.prototype.selectedOption1 = function (option, optionGroup) {
        if (this.selectedItem) {
            if (this.selectedItem._id && this.selectedItem._id === option._id)
                return true;
            else
                return this.selectedItem.name === option.name && this.selectedItem.displayImg === option.displayImg;
        }
        else
            return false;
    };
    AppearanceControlsComponent.prototype.setupOptionTracking = function (commonSections, weapon) {
        var groupOptionTracking = new Map();
        commonSections.slice()
            .concat(weapon.customizations.slice())
            .forEach(function (customization) {
            customization.optionGroups.forEach(function (optionGroup) {
                var defaultSelected = null;
                if (typeof optionGroup.defaultSelected === 'number') {
                    defaultSelected = optionGroup.options[optionGroup.defaultSelected];
                }
                else if (!optionGroup.allowNone && (optionGroup.options.length > 0)) {
                    defaultSelected = optionGroup.options[0];
                }
                groupOptionTracking.set(optionGroup, defaultSelected);
            });
        });
        this.selectedItems.set(weapon, {
            activeSection: (commonSections.length !== 0) ? commonSections[0] : weapon.customizations[0],
            resetActive: false,
            chosenGroupOption: groupOptionTracking
        });
    };
    AppearanceControlsComponent.prototype.setupOptionTrackingByCommonSection = function (commonSections, weapon, resetIndex) {
        var groupOptionTracking = new Map();
        commonSections.slice()
            .concat(weapon.customizations.slice())
            .forEach(function (customization) {
            customization.optionGroups.forEach(function (optionGroup) {
                var defaultSelected = null;
                if (typeof optionGroup.defaultSelected === 'number') {
                    defaultSelected = optionGroup.options[optionGroup.defaultSelected];
                }
                else if (!optionGroup.allowNone && (optionGroup.options.length > 0)) {
                    defaultSelected = optionGroup.options[0];
                }
                groupOptionTracking.set(optionGroup, defaultSelected);
            });
        });
        var item = this.selectedItems.get(weapon);
        item.activeSection = (commonSections.length !== 0) ? commonSections[resetIndex] : weapon.customizations[0];
        item.resetActive = true;
        //item.chosenGroupOption = item.chosenGroupOption;
        console.log(item);
        this.selectedItems.set(weapon, item);
    };
    AppearanceControlsComponent.prototype.stopEvent = function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        return false;
    };
    AppearanceControlsComponent.prototype.toggleChoices = function (event) {
        this.hideWeaponChoices = !this.hideWeaponChoices;
        return this.stopEvent(event);
    };
    AppearanceControlsComponent.prototype.viewerInitialized = function () {
        var _this = this;
        var createMaterial = function (matProps) {
            _this.viewerService.viewer.createMaterial(matProps);
        };
        this.customizerDataService.weaponsData().then(function (customizationData) {
            _this.customizationData = customizationData;
            if (!!customizationData.environment) {
                _this.viewerService.viewer.setEnvironment(customizationData.environment);
            }
            if (!!customizationData.commonMaterials) {
                customizationData.commonMaterials.forEach(createMaterial);
            }
            customizationData.weapons.forEach(function (weapon, wIdx) {
                _this.setupOptionTracking(customizationData.commonSections || [], weapon);
                _this.viewerService.viewer.load(weapon.modelFolder, weapon.modelFile, wIdx === 0, function () {
                    if (!!weapon.materials) {
                        weapon.materials.forEach(createMaterial);
                    }
                    _this.weaponSetup(weapon);
                });
            });
            _this.chooseWeapon(null, customizationData.weapons[0]);
        });
    };
    AppearanceControlsComponent.prototype.viewerUpdated = function (api_response) {
        var _this = this;
        var createMaterial = function (matProps) {
            _this.viewerService.viewer.createMaterial(matProps);
        };
        //this.customizerDataService.weaponsData().subscribe((api_response) => {
        var customizationData = api_response;
        this.customizationData = customizationData;
        if (!!customizationData.environment) {
            this.viewerService.viewer.setEnvironment(customizationData.environment);
        }
        if (!!customizationData.commonMaterials) {
            customizationData.commonMaterials.forEach(createMaterial);
        }
        customizationData.weapons.forEach(function (weapon, wIdx) {
            _this.setupOptionTrackingByCommonSection(customizationData.commonSections || [], weapon, _this.sectionIndex);
        });
        this.chooseWeapon(null, customizationData.weapons[0]);
    };
    AppearanceControlsComponent.prototype.viewerReset = function () {
        var _this = this;
        this.customizationData.weapons.forEach(function (weapon) {
            _this.setupOptionTracking(_this.customizationData.commonSections || [], weapon);
            _this.weaponSetup(weapon);
        });
    };
    AppearanceControlsComponent.prototype.weaponSetup = function (weapon) {
        var _this = this;
        if (!!weapon.replaceMaterials) {
            weapon.replaceMaterials.forEach(function (replacement) {
                console.log('reset-part', replacement);
                _this.viewerService.viewer.replaceMaterials(weapon.modelFolder, weapon.modelFile, replacement.oldMaterialNames, replacement.newMaterialName);
            });
        }
        if (weapon['rotation']) {
            this.viewerService.viewer.setRotation(weapon.modelFolder, weapon.modelFile, weapon['rotation']);
        }
        if (!!weapon.setupActions) {
            weapon.setupActions.forEach(function (setupAction) {
                switch (setupAction.type) {
                    case 'hideMesh':
                        _this.viewerService.viewer.hideMesh(setupAction.target, weapon.modelFolder, weapon.modelFile);
                        break;
                    case 'showMesh':
                        weapon.customizations[0].optionGroups.forEach(function (optionGroup) {
                            optionGroup.options.forEach(function (option) {
                                if (setupAction.target === option.name) {
                                    _this.optionOn(option);
                                    _this.selectedItems.get(weapon).chosenGroupOption.set(optionGroup, option);
                                }
                            });
                        });
                        break;
                }
            });
        }
    };
    AppearanceControlsComponent.prototype.openAddPackModel = function () {
        this.outside = false;
        this.packName = "";
        this.isEdit = false;
        this.showModal('addPack');
    };
    AppearanceControlsComponent.prototype.hideModal = function (id) {
        this.outside = false;
        this.manageModel(id, false);
        this.isEdit = false;
    };
    AppearanceControlsComponent.prototype.showModal = function (id) {
        this.outside = false;
        this.manageModel(id, true);
    };
    AppearanceControlsComponent.prototype.manageModel = function (id, visible) {
        this.outside = false;
        visible ? $('#' + id).show() : $('#' + id).hide();
    };
    AppearanceControlsComponent.prototype.getPacks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var self, input, totalPacksArray, i, _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.apiService.prepareNodeJSRequestObject("packs", "getpacks", null)];
                    case 1:
                        input = _a.sent();
                        return [4 /*yield*/, this.apiService.execute(input, false)];
                    case 2:
                        totalPacksArray = _a.sent();
                        this.allpacks = totalPacksArray.apidata.Data;
                        if (this.Packs.length > 0) {
                            for (i = 0; i < this.Packs.length; i++) {
                                this.allpacks.push(this.Packs[i]);
                            }
                        }
                        if (this.deletedPack.length > 0) {
                            _loop_1 = function (i) {
                                var j = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this_1.allpacks, function (t) { return t._id == self.deletedPack[i].packid; });
                                this_1.allpacks.splice(j, 1);
                            };
                            this_1 = this;
                            for (i = 0; i < this.deletedPack.length; i++) {
                                _loop_1(i);
                            }
                        }
                        this.packArray = this.allpacks.filter(function (p) { return p.type == _this.packtype; });
                        this.packArray.sort(this.customizerDataService.compare);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppearanceControlsComponent.prototype.selectPack = function (pack) {
        var _this = this;
        this.outside = false;
        this._ngZone.run(function () {
            if (pack) {
                _this.selectedPack = pack;
                _this.selectedItem = null;
                _this.allitemSelected = false;
            }
            else {
                _this.allitemSelected = true;
                _this.selectedPack = null;
            }
        });
    };
    AppearanceControlsComponent.prototype.addPack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, obj;
            return __generator(this, function (_a) {
                this.outside = false;
                order = this.customizerDataService.getOrder(this.packArray);
                obj = {
                    name: this.packName,
                    type: this.packtype,
                    _id: new Date().getTime(),
                    colors: [],
                    patterns: [],
                    metarials: [],
                    visible: true,
                    opname: "ADD",
                    order: order
                };
                this.customizerDataService.dbData.push(obj);
                this.Packs.push(obj);
                this.getPacks();
                this.hideModal("addPack");
                this.packName = "";
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.openModel = function () {
        this.outside = false;
        if (this.selectedPack === null) {
            alert("please select at pack before adding ");
            return;
        }
        this.isEdit = false;
        if (this.type == "MATERIALS") {
            this.name = '';
            this.colorCode = "#000";
            this.color = "#000";
            this.interactionValue = "";
            this.roughness = 0.5;
            this.image = this.place_holder_image;
            this.isMetal = true;
            this.visible = true;
            this.imagePath = null;
            $('#image')
                .attr('src', this.place_holder_image)
                .width(150)
                .height(150);
            this.showModal('my-modal');
        }
        else if (this.type == "COLORS") {
            this.colorName = '';
            this.colorCodeInColor = "#000";
            this.color = "#000";
            this.visibleInColor = true;
            this.showModal('addColor');
        }
        else if (this.type == "PATTERNS") {
            this.patternName = '';
            this.imagePath = null;
            this.visibleInPattern = true;
            this.patternImage = this.place_holder_image;
            this.showModal('patterns');
            $('#image1')
                .attr('src', this.place_holder_image)
                .width(150)
                .height(150);
        }
    };
    AppearanceControlsComponent.prototype.onAddAndUpdate = function () {
        var api_response = this.customizerDataService.weaponsDataLocal();
        this.viewerUpdated(api_response);
    };
    AppearanceControlsComponent.prototype.colorChanged = function (data) {
        console.log(data);
        this.colorCode = data;
    };
    AppearanceControlsComponent.prototype.fileEvent = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, reader;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sendFile(data.target.files[0])];
                    case 1:
                        _a.imagePath = _b.sent();
                        reader = new FileReader();
                        reader.onload = function (e) {
                            var tfg = e.target;
                            $('#image')
                                .attr('src', tfg.result)
                                .width(150)
                                .height(150);
                            $('#image1')
                                .attr('src', tfg.result)
                                .width(150)
                                .height(150);
                        };
                        reader.readAsDataURL(data.target.files[0]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppearanceControlsComponent.prototype.sendFile = function (file) {
        return new Promise(function (resolve, reject) {
            var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseURL + 'profile';
            var self = this;
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("avatar", file, file.name);
            xhr.open("POST", apiUrl, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText).path);
                    }
                    else {
                        console.error(xhr.statusText);
                    }
                }
            };
            xhr.send(formData);
        });
    };
    AppearanceControlsComponent.prototype.addMaterial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, metarials;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = {};
                metarials = [];
                obj.packid = this.selectedPack._id;
                if (this.name == "" || !this.imagePath || this.imagePath == null) {
                    alert("All field are mandatory ");
                }
                else {
                    metarials = [{
                            name: this.name,
                            colors: this.colorCode,
                            interactionValue: this.name,
                            roughness: this.roughness,
                            image: this.imagePath,
                            metal: this.isMetal,
                            visible: this.visible,
                            opname: "ADD",
                            _id: new Date().getTime()
                        }];
                    obj.metarials = metarials;
                    this.customizerDataService.addDataOnPacks(obj);
                    this.onAddAndUpdate();
                    this.hideModal('my-modal');
                    //this.selectedItem = null
                }
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.colorModelChanged = function (data) {
        this.colorCodeInColor = data;
    };
    AppearanceControlsComponent.prototype.addColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, colors;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = {};
                colors = [];
                obj.packid = this.selectedPack._id;
                if (this.colorName == "") {
                    alert("All field are mandatory ");
                }
                else {
                    colors = [{
                            name: this.colorName,
                            code: this.colorCodeInColor,
                            visible: this.visibleInColor,
                            opname: "ADD",
                            _id: new Date().getTime()
                        }];
                    obj.colors = colors;
                    this.customizerDataService.addDataOnPacks(obj);
                    this.onAddAndUpdate();
                    this.hideModal("addColor");
                    //this.selectedItem = null
                }
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.addPatternse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, patterns;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = {};
                patterns = [];
                obj.packid = this.selectedPack._id;
                if (this.patternName == "" || !this.imagePath || this.imagePath == null) {
                    alert("All field are mandatory ");
                }
                else {
                    patterns = [{
                            name: this.patternName,
                            visible: this.visibleInPattern,
                            image: this.imagePath,
                            opname: "ADD",
                            _id: new Date().getTime()
                        }];
                    obj.patterns = patterns;
                    this.customizerDataService.addDataOnPacks(obj);
                    this.onAddAndUpdate();
                    this.hideModal('patterns');
                    //this.selectedItem = null
                }
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.editOption = function () {
        return __awaiter(this, void 0, void 0, function () {
            var type, obj;
            return __generator(this, function (_a) {
                this.outside = false;
                this.isEdit = true;
                this.packid = this.selectedItem.pack_id;
                type = this.packtype;
                obj = this.selectedItem;
                this.arrid = obj._id;
                this.imagePath = "";
                if (type == "MATERIALS") {
                    this.name = obj.name;
                    this.colorCode = obj.displayColor;
                    this.interactionValue = obj.interactionValue;
                    this.roughness = obj.roughness;
                    this.image = obj.displayImg;
                    this.isMetal = obj.metal;
                    this.visible = obj.visible;
                    $('#my-modal').show();
                }
                else if (type == "COLORS") {
                    this.colorName = obj.name;
                    this.colorCodeInColor = obj.displayColor;
                    this.color = obj.displayColor;
                    this.visibleInColor = obj.visible;
                    $('#addColor').show();
                }
                else if (type == "PATTERNS") {
                    this.patternName = obj.name;
                    this.visibleInPattern = obj.visible;
                    this.patternImage = obj.displayImg;
                    $('#patterns').show();
                }
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.editMaterial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var metarials, obj;
            return __generator(this, function (_a) {
                this.outside = false;
                metarials = [
                    {
                        name: this.name,
                        colors: this.colorCode,
                        interactionValue: this.name,
                        roughness: this.roughness,
                        image: this.image,
                        metal: this.isMetal,
                        visible: this.visible,
                        opname: "EDIT",
                        _id: this.arrid
                    }
                ];
                if (this.imagePath && this.imagePath != '') {
                    metarials[0].image = this.imagePath;
                }
                obj = { packid: this.selectedItem.pack_id, metarials: metarials, arrId: this.arrid };
                this.customizerDataService.editDataOnPacks(obj);
                this.onAddAndUpdate();
                this.hideModal('my-modal');
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.editColor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var colors, obj;
            return __generator(this, function (_a) {
                this.outside = false;
                colors = [{
                        name: this.colorName,
                        code: this.colorCodeInColor,
                        visible: this.visibleInColor,
                        opname: "EDIT",
                        _id: this.arrid
                    }];
                obj = { packid: this.selectedItem.pack_id, colors: colors, arrId: this.arrid };
                this.customizerDataService.editDataOnPacks(obj);
                this.onAddAndUpdate();
                this.hideModal('addColor');
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.editPatternse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patterns, obj;
            return __generator(this, function (_a) {
                this.outside = false;
                patterns = [{
                        name: this.patternName,
                        visible: this.visibleInPattern,
                        image: this.patternImage,
                        opname: "EDIT",
                        _id: this.arrid
                    }];
                if (this.imagePath && this.imagePath != '') {
                    patterns[0].image = this.imagePath;
                }
                obj = { packid: this.selectedItem.pack_id, patterns: patterns, arrId: this.arrid };
                this.customizerDataService.editDataOnPacks(obj);
                this.onAddAndUpdate();
                this.hideModal('patterns');
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.openDeleteModel = function () {
        this.outside = false;
        $('#deletModel').show();
    };
    AppearanceControlsComponent.prototype.deleteData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = { packid: this.selectedItem.pack_id, type: this.type, arrId: this.selectedItem._id };
                this.customizerDataService.deleteDataOnPack(obj);
                this.onAddAndUpdate();
                this.hideModal("deletModel");
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.setVisible = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var obj;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = { packid: this.selectedItem.pack_id, type: this.type, value: value, arrId: this.selectedItem._id };
                this.customizerDataService.setVisibleOfPackData(obj);
                this.selectedItem.visible = value;
                this.onAddAndUpdate();
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.setVisibleofPack = function (pack, b) {
        return __awaiter(this, void 0, void 0, function () {
            var obj, input;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.outside = false;
                        obj = {};
                        obj.packid = pack._id;
                        obj.value = b;
                        input = this.apiService.prepareNodeJSRequestObject("packs", "setVisibleOfPack", obj);
                        return [4 /*yield*/, this.apiService.execute(input, false)];
                    case 1:
                        _a.sent();
                        this.getPacks();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppearanceControlsComponent.prototype.openEditPack = function (pack) {
        this.outside = false;
        this.isEdit = true;
        this.packid = pack._id;
        this.packName = pack.name;
        this.showModal('addPack');
    };
    AppearanceControlsComponent.prototype.editPack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, k, j;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = {};
                obj.packid = this.packid;
                obj.name = this.packName;
                k = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.packArray, function (t) { return t._id == obj.packid; });
                this.packArray[k].name = obj.name;
                j = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.customizerDataService.dbData, function (t) { return t._id == obj.packid; });
                this.customizerDataService.dbData[j].name = obj.name;
                this.customizerDataService.dbData[j].opname = "EDIT";
                //this.getPacks();
                this.onAddAndUpdate();
                this.hideModal("addPack");
                this.isEdit = false;
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.movePackLeft = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var order, self, k, j, l;
            return __generator(this, function (_a) {
                this.outside = false;
                order = data.order;
                self = this;
                k = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.packArray, function (t) { return t._id == data._id; });
                if (k > -1 && k != 0) {
                    this.packArray[k].order = this.packArray[k - 1].order;
                    this.packArray[k - 1].order = order;
                    this.packArray.sort(this.customizerDataService.compare);
                }
                j = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.customizerDataService.dbData, function (t) { return t._id == data._id; });
                l = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.customizerDataService.dbData, function (t) { return t._id == self.packArray[k]._id; });
                if (j > -1 && j != 0) {
                    this.customizerDataService.dbData[j].order = this.customizerDataService.dbData[l].order;
                    this.customizerDataService.dbData[l].order = order;
                    this.customizerDataService.dbData[l].opname = "EDIT";
                    this.customizerDataService.dbData[j].opname = "EDIT";
                    this.customizerDataService.dbData.sort(this.customizerDataService.compare);
                }
                this.onAddAndUpdate();
                this.hideModal("addPack");
                this.isEdit = false;
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.movePackRight = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var order, self, k, max, j, l;
            return __generator(this, function (_a) {
                this.outside = false;
                order = data.order;
                self = this;
                k = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.packArray, function (t) { return t._id == data._id; });
                max = this.customizerDataService.getOrder(this.packArray);
                if (k > -1 && order < max - 1) {
                    this.packArray[k].order = this.packArray[k + 1].order;
                    this.packArray[k + 1].order = order;
                    this.packArray.sort(this.customizerDataService.compare);
                }
                j = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.customizerDataService.dbData, function (t) { return t._id == data._id; });
                l = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.customizerDataService.dbData, function (t) { return t._id == self.packArray[k]._id; });
                if (j > -1 && order < max - 1) {
                    this.customizerDataService.dbData[j].order = this.customizerDataService.dbData[l].order;
                    this.customizerDataService.dbData[l].order = order;
                    this.customizerDataService.dbData[l].opname = "EDIT";
                    this.customizerDataService.dbData[j].opname = "EDIT";
                    this.customizerDataService.dbData.sort(this.customizerDataService.compare);
                }
                this.onAddAndUpdate();
                this.hideModal("addPack");
                this.isEdit = false;
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.openDeletePack = function (pack) {
        this.outside = false;
        this.packid = pack._id;
        this.showModal('deletPackModel');
    };
    AppearanceControlsComponent.prototype.deletePack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, i;
            return __generator(this, function (_a) {
                this.outside = false;
                obj = {};
                obj.packid = this.packid;
                i = underscore__WEBPACK_IMPORTED_MODULE_7__["_"].findIndex(this.customizerDataService.dbData, function (t) { return t._id == obj.packid; });
                this.customizerDataService.dbData.splice(i, 1);
                this.deletedPack.push(obj);
                this.getPacks();
                this.onAddAndUpdate();
                this.hideModal("deletPackModel");
                this.isEdit = false;
                return [2 /*return*/];
            });
        });
    };
    AppearanceControlsComponent.prototype.deployPackData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, input;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.outside = false;
                        obj = { dbData: this.customizerDataService.dbData, deleted: this.customizerDataService.deleted, weapons: this.customizerDataService.dbWeapons, deletedPack: this.deletedPack };
                        input = this.apiService.prepareNodeJSRequestObject("packs", "deployPack", obj);
                        return [4 /*yield*/, this.apiService.execute(input, false)];
                    case 1:
                        _a.sent();
                        this.onAddAndUpdate();
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppearanceControlsComponent.prototype.setVisibleofWeapon = function (weapons, value) {
        this.outside = false;
        var obj = { weapons: weapons, value: value };
        this.customizerDataService.setVisibleofWeapon(obj);
        this.onAddAndUpdate();
    };
    AppearanceControlsComponent.prototype.moveLeft = function (data) {
        this.outside = false;
        console.log(this.selectedItem);
        var obj = { packid: data.pack_id, order: data.order, type: this.type, arrId: data._id };
        var selectedItemTemp = this.customizerDataService.moveLeft(obj);
        this.onAddAndUpdate();
        this.selectedItem = this.customizerDataService.getUIFORMATDATA(selectedItemTemp._id);
    };
    AppearanceControlsComponent.prototype.moveRight = function (data) {
        this.outside = false;
        var obj = { packid: data.pack_id, order: data.order, type: this.type, arrId: data._id };
        var selectedItemTemp = this.customizerDataService.moveRight(obj);
        this.onAddAndUpdate();
        this.selectedItem = this.customizerDataService.getUIFORMATDATA(selectedItemTemp._id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('optionsContainer'),
        __metadata("design:type", Object)
    ], AppearanceControlsComponent.prototype, "optionsContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], AppearanceControlsComponent.prototype, "documentClick", null);
    AppearanceControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appearance-controls',
            template: __webpack_require__(/*! ./appearance-controls.component.html */ "./src/app/appearance-controls/appearance-controls.component.html"),
            styles: [__webpack_require__(/*! ./appearance-controls.component.css */ "./src/app/appearance-controls/appearance-controls.component.css")],
            providers: [_providers_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"]]
            //directives: [FORM_DIRECTIVES]
        }),
        __metadata("design:paramtypes", [_customizer_data_service__WEBPACK_IMPORTED_MODULE_1__["CustomizerDataService"],
            _providers_api_service__WEBPACK_IMPORTED_MODULE_4__["APIService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], AppearanceControlsComponent);
    return AppearanceControlsComponent;
}());



/***/ }),

/***/ "./src/app/appearance-controls/undo-manager.ts":
/*!*****************************************************!*\
  !*** ./src/app/appearance-controls/undo-manager.ts ***!
  \*****************************************************/
/*! exports provided: UndoMgr, undoFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoMgr", function() { return UndoMgr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoFactory", function() { return undoFactory; });
/* harmony import */ var undo_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! undo-manager */ "./node_modules/undo-manager/lib/undomanager.js");
/* harmony import */ var undo_manager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(undo_manager__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


var undoManagerMap = {};
var UndoMgr = undoFactory('default');
/**
 * @param name
 * @returns {*}
 */
function undoFactory(name) {
    console.log(undoManagerMap);
    if (undoManagerMap[name]) {
        return undoManagerMap[name];
    }
    var undoManager = new undo_manager__WEBPACK_IMPORTED_MODULE_0___default.a();
    undoManager.setLimit(9);
    var mUndoMgr = {
        setMaterialProperty: function (viewer, meshName, propertyName, propertyValue) {
            console.log(meshName);
            var material = viewer.getMesh(meshName).material;
            var lastVal = material.albedoColor.toHexString();
            switch (propertyName) {
                case 'color':
                    lastVal = material.albedoColor.toHexString();
                    break;
                case 'texture':
                    lastVal = material.albedoTexture;
                    break;
            }
            this.add({
                undo: function () {
                    console.log('undo', meshName, propertyName, propertyValue);
                    // FIXME this will reset material to starting material
                    // viewer.resetMaterialProperty(meshName, propertyName);
                    viewer.setMeshMaterialProperty(meshName, propertyName, lastVal);
                },
                redo: function () {
                    console.log('redo', meshName, propertyName, propertyValue);
                    viewer.setMeshMaterialProperty(meshName, propertyName, propertyValue);
                }
            });
        },
        setMaterialTexture: function (viewer, meshName, propertyValue) {
            var oldMaterial = viewer.getMesh(meshName).material;
            this.add({
                undo: function () {
                    console.log('undo', meshName, propertyValue);
                    viewer.getMesh(meshName).material = oldMaterial;
                },
                redo: function () {
                    console.log('redo', meshName, propertyValue);
                    viewer.changeMeshMaterial(meshName, propertyValue);
                }
            });
        },
        /**
         * Puts attribute changes of a HTMLElement onto the undo stack.
         * @param {HTMLElement} el - The target for the undo/redo.
         * @param {object} attributes - A map containing attributes that should be changed via setAttribute.
         * @param {object} [oldAttributes] - A map containing attributes that will be used for the undo step.
         *                                   Note: If left undefined, 'oldAttributes' will be retrieved from the 'attributes' keys.
         */
        addHTMLAttributes: function (el, attributes, oldAttributes) {
            if (!oldAttributes) {
                oldAttributes = lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"](attributes, function (attr, key) { return el.getAttribute(key); });
            }
            var addAttrs = function (_attributes) {
                return function () { return lodash__WEBPACK_IMPORTED_MODULE_1__["each"](_attributes, function (attr, key) {
                    return (attr != null) ? el.setAttribute(key, attr) : el.removeAttribute(key);
                }); };
            };
            this.add({
                redo: addAttrs(attributes),
                undo: addAttrs(oldAttributes)
            });
        },
        add: function (_a) {
            var undo = _a.undo, redo = _a.redo;
            if (!undo) {
                throw new Error('undo not defined');
            }
            if (!redo) {
                throw new Error('redo not defined');
            }
            undoManager.add({ undo: undo, redo: redo });
            // call the method once
            redo();
        },
        undo: function () { return undoManager.undo(); },
        redo: function () { return undoManager.redo(); },
        getInstance: function () { return undoManager; }
    };
    undoManagerMap[name] = mUndoMgr;
    return mUndoMgr;
}


/***/ }),

/***/ "./src/app/babylon-viewer/babylon-viewer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/babylon-viewer/babylon-viewer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".babylon-viewer {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 60vh;\r\n  touch-action: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/babylon-viewer/babylon-viewer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/babylon-viewer/babylon-viewer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #renderTarget class=\"babylon-viewer\" touch-action=\"none\" (contextmenu)=\"false;\"></canvas>\r\n"

/***/ }),

/***/ "./src/app/babylon-viewer/babylon-viewer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/babylon-viewer/babylon-viewer.component.ts ***!
  \************************************************************/
/*! exports provided: BabylonViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabylonViewerComponent", function() { return BabylonViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewer.service */ "./src/app/viewer.service.ts");
/* harmony import */ var _notifier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifier.service */ "./src/app/notifier.service.ts");
/* harmony import */ var _utils_GIFExportPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GIFExportPreview */ "./src/app/utils/GIFExportPreview.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../babylon.d.ts"/>




var BabylonViewerComponent = /** @class */ (function () {
    function BabylonViewerComponent(viewerService, notifierService) {
        var _this = this;
        this.viewerService = viewerService;
        this.initialized = false;
        this.knownWidth = 0;
        this.knownHeight = 0;
        this.aspectRatio = 0;
        this.loadingCount = 0;
        this.activeRoot = null;
        this.allAssetContainers = new Map();
        this.allRootMeshes = new Map();
        this.environment = null;
        this.sourceMaterials = new Map();
        this.sourceRoots = new Map();
        this.meshStartingMaterial = new Map();
        this.textures = new Map();
        this.resizeOnRender = true;
        viewerService.viewer = this;
        this.resetSubscription = notifierService.observable('reset').subscribe(function () {
            var keys = [];
            _this.allRootMeshes.forEach(function (v, k) {
                keys.push(k);
            });
            keys.forEach(function (key) {
                var currentMesh = _this.allRootMeshes.get(key);
                var sourceRoot = _this.sourceRoots.get(key);
                var enabled = currentMesh.isEnabled();
                _this.scene.removeMesh(currentMesh, true);
                var clone = sourceRoot.clone(key);
                clone.setEnabled(enabled);
                if (enabled) {
                    _this.activeRoot = clone;
                }
                _this.allRootMeshes.set(key, clone);
            });
            _this.viewerService.notifyReset();
        });
        // TODO @7frank remove debug code
        window["that"] = this;
        window['debugPreview'] = function () {
            var preview = new _utils_GIFExportPreview__WEBPACK_IMPORTED_MODULE_3__["GIFExportPreview"](_this.scene, _this.displayCanvas, _this.viewerService.viewer.camera);
            preview.enablePreview(_this.getActiveWeapon());
            window["preview"] = preview;
        };
    }
    BabylonViewerComponent.prototype.changeMeshMaterial = function (meshName, materialName) {
        if (!this.sourceMaterials.has(materialName)) {
            return;
        }
        var newMat = this.sourceMaterials.get(materialName).clone(materialName);
        var mesh = this.getMesh(meshName);
        var oldMat = mesh.material;
        newMat.sideOrientation = oldMat.sideOrientation;
        newMat.albedoColor = oldMat.albedoColor;
        newMat.albedoTexture = oldMat.albedoTexture;
        mesh.material = newMat;
    };
    BabylonViewerComponent.prototype.getActiveWeapon = function () {
        return this.activeRoot;
    };
    BabylonViewerComponent.prototype.changeWeapon = function (modelRoot, modelPath) {
        var combinedName = modelRoot + modelPath;
        if (this.activeRoot) {
            this.activeRoot.setEnabled(false);
            this.activeRoot = null;
        }
        this.activeRoot = this.allRootMeshes.get(combinedName);
        if (this.activeRoot) {
            this.activeRoot.setEnabled(true);
        }
    };
    BabylonViewerComponent.prototype.createMaterial = function (properties) {
        var mat = new BABYLON.PBRMaterial(properties.name, this.scene);
        mat.reflectionTexture = this.environment;
        mat.useRoughnessFromMetallicTextureAlpha = false;
        mat.useRoughnessFromMetallicTextureGreen = true;
        mat.useMetallnessFromMetallicTextureBlue = true;
        mat.useAmbientOcclusionFromMetallicTextureRed = true;
        mat.useAmbientInGrayScale = true;
        if (!!properties.color) {
            mat.albedoColor = BABYLON.Color3.FromHexString(properties.color);
        }
        if (!!properties.texture) {
            mat.albedoTexture = this.texture(properties.texture);
        }
        if (!!properties.metallicRoughnessMap) {
            mat.metallic = 1.0;
            mat.roughness = 1.0;
            mat.metallicTexture = this.texture(properties.metallicRoughnessMap);
        }
        else {
            mat.metallic = properties.metal ? 1.0 : 0.0;
            mat.roughness = properties.roughness;
        }
        if (!!properties.normalMap) {
            mat.bumpTexture = this.texture(properties.normalMap);
        }
        this.sourceMaterials.set(properties.name, mat);
    };
    BabylonViewerComponent.prototype.getMesh = function (name, modelFolder, modelFile) {
        var root = (!!modelFolder || !!modelFile) ? this.allRootMeshes.get(modelFolder + modelFile) : this.activeRoot;
        var splitName = name.split('.').reverse();
        return root.getChildMeshes(false, function (node) {
            var namePieces = node.name.split('.').reverse();
            if (namePieces.length < splitName.length) {
                return;
            }
            return splitName.every(function (piece, idx) {
                return piece === namePieces[idx];
            });
        })[0];
    };
    BabylonViewerComponent.prototype.hideMesh = function (meshName, modelFolder, modelFile) {
        this.getMesh(meshName, modelFolder, modelFile).setEnabled(false);
    };
    BabylonViewerComponent.prototype.load = function (modelRoot, modelPath, visible, onSuccess) {
        var _this = this;
        if (visible === void 0) { visible = false; }
        if (onSuccess === void 0) { onSuccess = null; }
        var combinedName = modelRoot + modelPath;
        var extractMaterial = function (mesh) {
            if (!!mesh.material) {
                var matName = mesh.material.name;
                var sourceMat = mesh.material.clone(matName + '_source');
                sourceMat.reflectionTexture = _this.environment;
                _this.sourceMaterials.set(mesh.material.name, sourceMat);
                mesh.material = sourceMat.clone(matName);
                _this.meshStartingMaterial.set(mesh.uniqueId, matName);
            }
        };
        ++this.loadingCount;
        this.engine.displayLoadingUI();
        BABYLON.SceneLoader.LoadAssetContainer(modelRoot, modelPath, this.scene, function (assets) {
            _this.allAssetContainers.set(combinedName, assets);
            var rootMesh = assets.meshes.filter(function (mesh) {
                return !mesh.parent;
            })[0];
            assets.meshes.forEach(function (mesh) {
                extractMaterial(mesh);
                mesh.getChildMeshes(false).forEach(extractMaterial);
            });
            rootMesh.setEnabled(false);
            assets.addAllToScene();
            _this.sourceRoots.set(combinedName, rootMesh);
            var meshCopy = rootMesh.clone(combinedName);
            _this.allRootMeshes.set(combinedName, meshCopy);
            meshCopy.setEnabled(visible);
            if (visible) {
                _this.activeRoot = meshCopy;
            }
            if (!!onSuccess) {
                onSuccess();
            }
            if (--_this.loadingCount === 0) {
                _this.engine.hideLoadingUI();
            }
        });
    };
    BabylonViewerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.displayCanvas = this.renderCanvas.nativeElement;
        // Note: Using preserveDrawingBuffer decreases frame rate and should only be used to render the gif feature.
        //    But must be enabled to generate GIFs.
        //    A better approach would be to render separate scenes and use separate engines for the GIF preview.
        //    But as of now this was not possible.
        this.engine = new BABYLON.Engine(this.displayCanvas, true, { preserveDrawingBuffer: true });
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(241 / 255, 242 / 255, 237 / 255, 1);
        this.scene.onPointerObservable.add(function (eventData, eventState) {
            _this.pointerObserved(eventData, eventState);
        });
        /*this.directionalLight = new BABYLON.DirectionalLight('mainLight', new BABYLON.Vector3(0.5, 1, 0.5), this.scene);
        this.directionalLight.diffuse.set(0.6, 0.6, 0.6);
        this.directionalLight.specular.set(0.6, 0.6, 0.6);*/
        this.setupCamera();
        this.engine.runRenderLoop(function () {
            _this.render();
            // this.updateHoverControls();
        });
        this.initialized = true;
        this.viewerService.notifyInitialized();
    };
    BabylonViewerComponent.prototype.ngOnDestroy = function () {
        this.resetSubscription.unsubscribe();
    };
    BabylonViewerComponent.prototype.pointerObserved = function (eventData, eventState) {
        if (eventData.type === 1) {
            if (eventData.pickInfo.hit) {
                this.viewerService.notifyClick(eventData.pickInfo.pickedMesh.name);
            }
        }
    };
    BabylonViewerComponent.prototype.pointerMeshEnter = function (mesh) {
        var children = mesh.parent.getChildren();
        children.forEach(function (c) {
            c.visibility = 0.1;
        });
        mesh.visibility = 1;
    };
    BabylonViewerComponent.prototype.render = function () {
        if (this.resizeOnRender) {
            this.resizeAsNeeded();
        }
        /*const camAlpha = this.camera.alpha + Math.PI / 48;
        const camBeta = Math.PI / 2 - this.camera.beta + Math.PI / 48;
        const cosBeta = Math.cos(camBeta);

        this.directionalLight.direction.set(cosBeta * Math.cos(camAlpha), Math.sin(camBeta), cosBeta * Math.sin(camAlpha));*/
        this.scene.render();
    };
    BabylonViewerComponent.prototype.setRotation = function (modelRoot, modelPath, rotation) {
        var model = this.allRootMeshes.get(modelRoot + modelPath);
        model.rotation.y = Math.PI / 180 * rotation;
    };
    BabylonViewerComponent.prototype.replaceMaterials = function (modelRoot, modelPath, oldMaterialNames, newMaterialName) {
        var _this = this;
        var newMat = this.sourceMaterials.get(newMaterialName);
        var sourceRoot = this.sourceRoots.get(modelRoot + modelPath);
        var rootModel = this.allRootMeshes.get(modelRoot + modelPath);
        if (!newMat || !rootModel) {
            return;
        }
        var replaceOldMat = function (mesh) {
            if (mesh.material && (oldMaterialNames.indexOf(mesh.material.name) !== -1)) {
                var matClone = newMat.clone(newMaterialName);
                matClone.sideOrientation = mesh.material.sideOrientation;
                mesh.material = matClone;
                _this.meshStartingMaterial.set(mesh.uniqueId, newMaterialName);
            }
        };
        replaceOldMat(sourceRoot);
        replaceOldMat(rootModel);
        sourceRoot.getChildMeshes(false).forEach(replaceOldMat);
        rootModel.getChildMeshes(false).forEach(replaceOldMat);
    };
    BabylonViewerComponent.prototype.resetMaterial = function (meshName) {
        this.resetMeshMaterial(this.getMesh(meshName));
    };
    BabylonViewerComponent.prototype.resetMaterialProperty = function (meshName, propertyName) {
        var mesh = this.getMesh(meshName);
        if (!this.meshStartingMaterial.has(mesh.uniqueId)) {
            return;
        }
        var matName = this.meshStartingMaterial.get(mesh.uniqueId);
        var sourceMat = this.sourceMaterials.get(matName);
        var meshMat = mesh.material;
        switch (propertyName) {
            case 'color':
                meshMat.albedoColor = sourceMat.albedoColor;
                break;
            case 'texture':
                meshMat.albedoTexture = sourceMat.albedoTexture;
                break;
        }
    };
    BabylonViewerComponent.prototype.resetMeshMaterial = function (mesh) {
        if (!this.meshStartingMaterial.has(mesh.uniqueId)) {
            return;
        }
        var matName = this.meshStartingMaterial.get(mesh.uniqueId);
        var matClone = this.sourceMaterials.get(matName).clone(matName);
        matClone.sideOrientation = mesh.material.sideOrientation;
        mesh.material = matClone;
    };
    BabylonViewerComponent.prototype.resizeAsNeeded = function (force) {
        var measuredWidth = this.displayCanvas.parentElement.clientWidth;
        var measuredHeight = this.displayCanvas.parentElement.clientHeight;
        if (!force)
            if ((measuredWidth === this.knownWidth) && (measuredHeight === this.knownHeight)) {
                return;
            }
        this.knownWidth = measuredWidth;
        this.knownHeight = measuredHeight;
        this.aspectRatio = measuredWidth / measuredHeight;
        // this.engine.resize();
        this.engine.setSize(measuredWidth, measuredHeight);
    };
    BabylonViewerComponent.prototype.setEnvironment = function (textureBaseName) {
        var envTex = null;
        if (textureBaseName.indexOf('.dds') !== -1) {
            envTex = BABYLON.CubeTexture.CreateFromPrefilteredData(textureBaseName, this.scene);
        }
        else if (textureBaseName.indexOf('hdr') !== -1) {
            envTex = new BABYLON.HDRCubeTexture(textureBaseName, this.scene, 512);
        }
        else {
            envTex = new BABYLON.CubeTexture(textureBaseName, this.scene);
        }
        this.sourceMaterials.forEach(function (mat) {
            mat.reflectionTexture = envTex;
        });
        var setEnv = function (mesh) {
            if (!!mesh.material) {
                mesh.material.reflectionTexture = envTex;
            }
        };
        this.allRootMeshes.forEach(function (mesh) {
            setEnv(mesh);
            mesh.getChildMeshes(false).forEach(setEnv);
        });
        this.environment = envTex;
    };
    BabylonViewerComponent.prototype.setMeshMaterialProperty = function (meshName, propertyName, propertyValue) {
        var material = this.getMesh(meshName).material;
        switch (propertyName) {
            case 'color':
                material.albedoColor = BABYLON.Color3.FromHexString(propertyValue);
                break;
            case 'texture':
                material.albedoTexture = (propertyValue instanceof BABYLON.Texture) ? propertyValue : this.texture(propertyValue);
                break;
        }
    };
    BabylonViewerComponent.prototype.setupCamera = function () {
        this.camera = new BABYLON.ArcRotateCamera('mainCam', 0, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 0), this.scene, true);
        this.camera.useFramingBehavior = true;
        this.camera.wheelPrecision = 500;
        this.camera.pinchPrecision = 200;
        this.camera.minZ = 0.01;
        this.camera.lowerRadiusLimit = 0.01;
        this.camera.upperRadiusLimit = 5;
        this.camera.attachControl(this.displayCanvas);
    };
    BabylonViewerComponent.prototype.showMesh = function (meshName, modelFolder, modelFile) {
        this.getMesh(meshName, modelFolder, modelFile).setEnabled(true);
    };
    BabylonViewerComponent.prototype.texture = function (url) {
        if (this.textures.has(url)) {
            return this.textures.get(url);
        }
        var tex = new BABYLON.Texture(url, this.scene, false, false);
        this.textures.set(url, tex);
        return tex;
    };
    // TODO @7frank highlight the active mesh
    BabylonViewerComponent.prototype.updateHoverControls = function () {
        var el = this.scene.pick(this.scene.pointerX, this.scene.pointerY, null, true);
        if (el.pickedMesh != null) {
            if (this.objectUnderCursor != el.pickedMesh) {
                this.previousObjectUnderCursor = this.objectUnderCursor;
                this.objectUnderCursor = el.pickedMesh;
                this.pointerMeshEnter(this.objectUnderCursor);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('renderTarget'),
        __metadata("design:type", Object)
    ], BabylonViewerComponent.prototype, "renderCanvas", void 0);
    BabylonViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-babylon-viewer',
            template: __webpack_require__(/*! ./babylon-viewer.component.html */ "./src/app/babylon-viewer/babylon-viewer.component.html"),
            styles: [__webpack_require__(/*! ./babylon-viewer.component.css */ "./src/app/babylon-viewer/babylon-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_viewer_service__WEBPACK_IMPORTED_MODULE_1__["ViewerService"], _notifier_service__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])
    ], BabylonViewerComponent);
    return BabylonViewerComponent;
}());



/***/ }),

/***/ "./src/app/customizer-data.service.ts":
/*!********************************************!*\
  !*** ./src/app/customizer-data.service.ts ***!
  \********************************************/
/*! exports provided: CustomizerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerDataService", function() { return CustomizerDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CustomizerDataService = /** @class */ (function () {
    function CustomizerDataService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.dbData = null;
        this.dbWeapons = null;
        this.deleted = [];
    }
    CustomizerDataService.prototype.generateTextureOptions = function (count, filePattern, descriptionPattern) {
        var options = [];
        for (var i = 1; i <= count; ++i) {
            var numStr = i < 10 ? ('0' + i) : i.toString();
            var uri = 'assets/img/patterns/' + filePattern.replace('#', numStr);
            options.push({
                name: descriptionPattern.replace('#', numStr),
                displayImg: uri,
                interactionValue: uri
            });
        }
        return options;
    };
    CustomizerDataService.prototype.weaponsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, role, toSend, api_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL + 'api/shared';
                        role = null;
                        if (this.userService.isAdmin()) {
                            role = 'admin';
                        }
                        toSend = {
                            PRCID: 'packs',
                            Method: 'getdata',
                            Data: { role: role }
                        };
                        return [4 /*yield*/, this.http.post(apiUrl, toSend).toPromise()];
                    case 1:
                        api_response = _a.sent();
                        this.dbData = api_response.Data.packs;
                        this.dbWeapons = api_response.Data.weapons;
                        return [2 /*return*/, this.prepareData()]; //this.dbData;
                }
            });
        });
    };
    CustomizerDataService.prototype.compare = function (a, b) {
        if (a.order > b.order)
            return 1;
        if (b.order > a.order)
            return -1;
        return 0;
    };
    CustomizerDataService.prototype.prepareData = function () {
        var isAdmin = true;
        var obj = {
            environment: 'assets/textures/environments/parking.hdr',
            commonMaterials: [],
            commonSections: [{
                    svgPath: 'assets/img/section-icons/materials.svg',
                    name: 'Material',
                    globalReset: true,
                    interactionType: 'swapMaterial',
                    optionGroups: [{
                            allowNone: true,
                            options: []
                        }]
                },
                {
                    svgPath: 'assets/img/section-icons/color.svg',
                    name: 'Color',
                    globalReset: true,
                    interactionType: 'alterMaterial',
                    affectedParameter: 'color',
                    optionGroups: [{
                            allowNone: true,
                            options: []
                        }]
                },
                {
                    svgPath: 'assets/img/section-icons/textures.svg',
                    name: 'Patterns',
                    globalReset: true,
                    interactionType: 'alterMaterial',
                    affectedParameter: 'texture',
                    optionGroups: [{
                            allowNone: true,
                            options: []
                        }]
                }
            ],
            weapons: []
        };
        obj.weapons = this.dbWeapons;
        var temp = this.dbData;
        obj.commonSections[0].optionGroups[0].options = [];
        obj.commonSections[1].optionGroups[0].options = [];
        obj.commonSections[2].optionGroups[0].options = [];
        obj.commonMaterials = [];
        if (temp.length > 0) {
            obj.commonSections[0].optionGroups[0].options = [];
            obj.commonSections[1].optionGroups[0].options = [];
            obj.commonSections[2].optionGroups[0].options = [];
            obj.commonMaterials = [];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].metarials.length > 0) {
                    for (var j = 0; j < temp[i].metarials.length; j++) {
                        var option = {};
                        option.name = temp[i].metarials[j].name;
                        option.displayImg = temp[i].metarials[j].image;
                        option.interactionValue = temp[i].metarials[j].name;
                        option.pack_id = temp[i]._id;
                        option._id = temp[i].metarials[j]._id;
                        option.roughness = temp[i].metarials[j].roughness;
                        option.visible = temp[i].metarials[j].visible;
                        option.metal = temp[i].metarials[j].metal;
                        option.displayColor = temp[i].metarials[j].colors;
                        option.order = temp[i].metarials[j].order;
                        option.type = 'MAT';
                        if (isAdmin) {
                            obj.commonSections[0].optionGroups[0].options.push(option);
                        }
                        else if (temp[i].metarials[j].visible) {
                            obj.commonSections[0].optionGroups[0].options.push(option);
                        }
                        var commonMaterials = {};
                        commonMaterials.name = temp[i].metarials[j].name;
                        commonMaterials.color = temp[i].metarials[j].colors;
                        commonMaterials.metal = temp[i].metarials[j].metal;
                        commonMaterials.roughness = temp[i].metarials[j].roughness;
                        obj.commonMaterials.push(commonMaterials);
                    }
                    obj.commonSections[0].optionGroups[0].options.sort(this.compare);
                }
                if (temp[i].colors.length > 0) {
                    for (var j = 0; j < temp[i].colors.length; j++) {
                        var option = {};
                        option.name = temp[i].colors[j].name;
                        option.displayColor = temp[i].colors[j].code;
                        option.interactionValue = temp[i].colors[j].code;
                        option.pack_id = temp[i]._id;
                        option._id = temp[i].colors[j]._id;
                        option.visible = temp[i].colors[j].visible;
                        option.order = temp[i].colors[j].order;
                        option.type = 'COL';
                        if (isAdmin) {
                            obj.commonSections[1].optionGroups[0].options.push(option);
                        }
                        else if (temp[i].colors[j].visible) {
                            obj.commonSections[1].optionGroups[0].options.push(option);
                        }
                    }
                    obj.commonSections[1].optionGroups[0].options.sort(this.compare);
                }
                if (temp[i].patterns.length > 0) {
                    for (var j = 0; j < temp[i].patterns.length; j++) {
                        var option = {};
                        option.name = temp[i].patterns[j].name;
                        option.displayImg = temp[i].patterns[j].image;
                        option.interactionValue = temp[i].patterns[j].image;
                        option.pack_id = temp[i]._id;
                        option._id = temp[i].patterns[j]._id;
                        option.visible = temp[i].patterns[j].visible;
                        option.order = temp[i].patterns[j].order;
                        option.type = 'PAT';
                        if (isAdmin) {
                            obj.commonSections[2].optionGroups[0].options.push(option);
                        }
                        else if (temp[i].patterns[j].visible) {
                            obj.commonSections[2].optionGroups[0].options.push(option);
                        }
                    }
                    obj.commonSections[2].optionGroups[0].options.sort(this.compare);
                }
            }
        }
        return obj;
    };
    CustomizerDataService.prototype.getOrder = function (arr) {
        var order = 0;
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].order > order)
                    order = arr[i].order;
            }
        }
        return order + 1;
    };
    CustomizerDataService.prototype.addDataOnPacks = function (obj) {
        //obj.OPER
        if (obj.metarials) {
            obj.metarials[0]._id = new Date().getTime(); //auto generate unique id ;
            console.log(this.dbData);
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == obj.packid; });
            if (i > -1) {
                if (this.dbData[i].opname) {
                    delete obj.metarials[0].opname;
                }
                var order = this.getOrder(this.dbData[i].metarials);
                obj.metarials[0].order = order;
                this.dbData[i].metarials.push(obj.metarials[0]);
            }
        }
        else if (obj.colors) {
            console.log(this.dbData);
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == obj.packid; });
            if (i > -1) {
                if (this.dbData[i].opname) {
                    delete obj.colors[0].opname;
                }
                var order = this.getOrder(this.dbData[i].colors);
                obj.colors[0].order = order;
                this.dbData[i].colors.push(obj.colors[0]);
            }
        }
        else if (obj.patterns) {
            console.log(this.dbData);
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == obj.packid; });
            if (i > -1) {
                if (this.dbData[i].opname) {
                    delete obj.patterns[0].opname;
                }
                var order = this.getOrder(this.dbData[i].patterns);
                obj.patterns[0].order = order;
                this.dbData[i].patterns.push(obj.patterns[0]);
            }
        }
        localStorage.setItem("Packs", JSON.stringify(this.dbData));
    };
    CustomizerDataService.prototype.editDataOnPacks = function (obj) {
        console.log(obj);
        if (obj.metarials) {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == obj.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].metarials, function (t) { return t._id == obj.arrId; });
                if (j > -1) {
                    if (this.dbData[i].metarials[j].opname && this.dbData[i].metarials[j].opname == "ADD") {
                        obj.metarials[0].opname = "ADD";
                        this.dbData[i].metarials[j] = obj.metarials[0];
                    }
                    else {
                        this.dbData[i].metarials[j] = obj.metarials[0];
                    }
                }
            }
        }
        else if (obj.colors) {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == obj.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].colors, function (t) { return t._id == obj.arrId; });
                if (j > -1) {
                    if (this.dbData[i].colors[j].opname && this.dbData[i].colors[j].opname == "ADD") {
                        obj.colors[0].opname = "ADD";
                        this.dbData[i].colors[j] = obj.colors[0];
                    }
                    else {
                        this.dbData[i].colors[j] = obj.colors[0];
                    }
                }
            }
        }
        else if (obj.patterns) {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == obj.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].patterns, function (t) { return t._id == obj.arrId; });
                if (j > -1) {
                    if (this.dbData[i].patterns[j].opname && this.dbData[i].patterns[j].opname == "ADD") {
                        obj.patterns[0].opname = "ADD";
                        this.dbData[i].patterns[j] = obj.patterns[0];
                    }
                    else {
                        this.dbData[i].patterns[j] = obj.patterns[0];
                    }
                }
            }
        }
        localStorage.setItem("Packs", JSON.stringify(this.dbData));
    };
    CustomizerDataService.prototype.deleteDataOnPack = function (data) {
        this.deleted.push(data);
        if (data.type == "MATERIALS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].metarials, function (t) { return t._id == data.arrId; });
                if (j > -1) {
                    this.dbData[i].metarials.splice(j, 1);
                }
            }
        }
        else if (data.type == "COLORS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].colors, function (t) { return t._id == data.arrId; });
                if (j > -1) {
                    this.dbData[i].colors.splice(j, 1);
                }
            }
        }
        else if (data.type == "PATTERNS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].patterns, function (t) { return t._id == data.arrId; });
                if (j > -1) {
                    this.dbData[i].patterns.splice(j, 1);
                }
            }
        }
        localStorage.setItem("Packs", JSON.stringify(this.dbData));
    };
    CustomizerDataService.prototype.setVisibleOfPackData = function (data) {
        if (data.type == "MATERIALS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].metarials, function (t) { return t._id == data.arrId; });
                if (j > -1) {
                    this.dbData[i].metarials[j].visible = data.value;
                    if (this.dbData[i].metarials[j].opname && this.dbData[i].metarials[j].opname == "ADD") {
                    }
                    else {
                        this.dbData[i].metarials[j].opname = 'EDIT';
                    }
                }
            }
        }
        else if (data.type == "COLORS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].colors, function (t) { return t._id == data.arrId; });
                if (j > -1) {
                    this.dbData[i].colors[j].visible = data.value;
                    if (this.dbData[i].colors[j].opname && this.dbData[i].colors[j].opname == "ADD") {
                    }
                    else {
                        this.dbData[i].colors[j].opname = 'EDIT';
                    }
                }
            }
        }
        else if (data.type == "PATTERNS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].patterns, function (t) { return t._id == data.arrId; });
                if (j > -1) {
                    this.dbData[i].patterns[j].visible = data.value;
                    if (this.dbData[i].patterns[j].opname && this.dbData[i].patterns[j].opname == "ADD") {
                    }
                    else {
                        this.dbData[i].patterns[j].opname = 'EDIT';
                    }
                }
            }
        }
        localStorage.setItem("Packs", JSON.stringify(this.dbData));
    };
    CustomizerDataService.prototype.setVisibleofWeapon = function (obj) {
        var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbWeapons, function (t) { return t._id == obj.weapons._id; });
        if (i > -1) {
            this.dbWeapons[i].visible = obj.value;
            this.dbWeapons[i].opname = "EDIT";
        }
    };
    CustomizerDataService.prototype.moveLeft = function (data) {
        var selectedItemTemp = null;
        if (data.type == "MATERIALS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                this.dbData[i].metarials.sort(this.compare);
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].metarials, function (t) { return t._id == data.arrId; });
                if (j > -1 && data.order > 1) {
                    this.dbData[i].metarials[j].order = this.dbData[i].metarials[j - 1].order;
                    this.dbData[i].metarials[j].opname = 'EDIT';
                    this.dbData[i].metarials[j - 1].order = data.order;
                    this.dbData[i].metarials[j - 1].opname = 'EDIT';
                    selectedItemTemp = this.dbData[i].metarials[j];
                }
            }
        }
        else if (data.type == "COLORS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                this.dbData[i].colors.sort(this.compare);
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].colors, function (t) { return t._id == data.arrId; });
                if (j > -1 && data.order > 1) {
                    this.dbData[i].colors[j].order = this.dbData[i].colors[j - 1].order;
                    this.dbData[i].colors[j].opname = 'EDIT';
                    this.dbData[i].colors[j - 1].order = data.order;
                    this.dbData[i].colors[j - 1].opname = 'EDIT';
                    selectedItemTemp = this.dbData[i].colors[j];
                }
            }
        }
        else if (data.type == "PATTERNS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                this.dbData[i].patterns.sort(this.compare);
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].patterns, function (t) { return t._id == data.arrId; });
                if (j > -1 && data.order > 1) {
                    this.dbData[i].patterns[j].order = this.dbData[i].patterns[j - 1].order;
                    this.dbData[i].patterns[j].opname = 'EDIT';
                    this.dbData[i].patterns[j - 1].order = data.order;
                    this.dbData[i].patterns[j - 1].opname = 'EDIT';
                    selectedItemTemp = this.dbData[i].patterns[j];
                }
            }
        }
        localStorage.setItem("Packs", JSON.stringify(this.dbData));
        return selectedItemTemp;
    };
    CustomizerDataService.prototype.moveRight = function (data) {
        var selectedItemTemp = null;
        if (data.type == "MATERIALS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                this.dbData[i].metarials.sort(this.compare);
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].metarials, function (t) { return t._id == data.arrId; });
                var max = this.getOrder(this.dbData[i].metarials);
                if (j > -1 && data.order < max - 1) {
                    this.dbData[i].metarials[j].order = this.dbData[i].metarials[j + 1].order;
                    this.dbData[i].metarials[j].opname = 'EDIT';
                    this.dbData[i].metarials[j + 1].order = data.order;
                    this.dbData[i].metarials[j + 1].opname = 'EDIT';
                    selectedItemTemp = this.dbData[i].metarials[j];
                }
            }
        }
        else if (data.type == "COLORS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                this.dbData[i].colors.sort(this.compare);
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].colors, function (t) { return t._id == data.arrId; });
                var max = this.getOrder(this.dbData[i].colors);
                if (j > -1 && data.order < max - 1) {
                    this.dbData[i].colors[j].order = this.dbData[i].colors[j + 1].order;
                    this.dbData[i].colors[j].opname = 'EDIT';
                    this.dbData[i].colors[j + 1].order = data.order;
                    this.dbData[i].colors[j + 1].opname = 'EDIT';
                    selectedItemTemp = this.dbData[i].colors[j];
                }
            }
        }
        else if (data.type == "PATTERNS") {
            var i = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData, function (t) { return t._id == data.packid; });
            if (i > -1) {
                this.dbData[i].patterns.sort(this.compare);
                var j = underscore__WEBPACK_IMPORTED_MODULE_3__["_"].findIndex(this.dbData[i].patterns, function (t) { return t._id == data.arrId; });
                var max = this.getOrder(this.dbData[i].patterns);
                if (j > -1 && data.order < max - 1) {
                    this.dbData[i].patterns[j].order = this.dbData[i].patterns[j + 1].order;
                    this.dbData[i].patterns[j].opname = 'EDIT';
                    this.dbData[i].patterns[j + 1].order = data.order;
                    this.dbData[i].patterns[j + 1].opname = 'EDIT';
                    selectedItemTemp = this.dbData[i].patterns[j];
                }
            }
        }
        localStorage.setItem("Packs", JSON.stringify(this.dbData));
        return selectedItemTemp;
    };
    CustomizerDataService.prototype.getUIFORMATDATA = function (item_id) {
        var uidata = this.prepareData();
        console.log(uidata);
        for (var i = 0; i < uidata.commonSections.length; i++) {
            var og = uidata.commonSections[i].optionGroups;
            for (var j = 0; j < (og || []).length; j++) {
                var options = og[j].options;
                var index = (options || []).findIndex(function (o) { return o._id === item_id; });
                if (index >= 0) {
                    return og[j].options[index];
                }
            }
        }
    };
    CustomizerDataService.prototype.weaponsDataLocal = function () {
        return this.prepareData();
    };
    CustomizerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], CustomizerDataService);
    return CustomizerDataService;
}());



/***/ }),

/***/ "./src/app/login-modal/login-modal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4>Sign up or Log in</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <!-- <div class=\"text-center\">\r\n    <a href=\"#\"><img style=\"height: 2em;\" src=\"https://scontent.fatl1-2.fna.fbcdn.net/v/t39.2365-6/18928641_251957295286418_4362086450741641216_n.png?_nc_cat=0&oh=96b2909091a5a140a6846aada6e4db93&oe=5BDAFA05\" alt=\"Continue with Facebook\"/></a>\r\n  </div> -->\r\n  <form class=\"needs-validation\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginUsername\">Username</label>\r\n      <input id=\"loginUsername\" type=\"text\" placeholder=\"PewPewCustoms\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginPassword\">Password</label>\r\n      <input id=\"loginPassword\" type=\"password\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"text-right\">\r\n      <!-- <a href=\"#\">Forgot Password?</a>&nbsp; -->\r\n      <input type=\"button\" class=\"btn btn-primary\" (click)=\"login()\" value=\"Login\" />\r\n        </div>\r\n    <!--<hr>\r\n     <div class=\"form-group\">\r\n      <label for=\"loginConfirmPassword\">Confirm Password</label>\r\n      <input id=\"loginConfirmPassword\" type=\"password\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginEmail\">E-mail</label>\r\n      <input id=\"loginEmail\" type=\"email\" class=\"form-control\" placeholder=\"account@emailhost.com\">\r\n    </div>\r\n    <div class=\"text-right\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Register</button>\r\n    </div> -->\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.ts ***!
  \******************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _providers_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/api-service */ "./src/providers/api-service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(modalRef, apiService, userService) {
        this.modalRef = modalRef;
        this.apiService = apiService;
        this.userService = userService;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.close = function () {
        this.modalRef.hide();
    };
    LoginModalComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var output, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.executeByURL('api/login', {
                            email: "user1@gmail.com", password: "user123"
                        })];
                    case 1:
                        output = _a.sent();
                        if (output && output.isapisuccess) {
                            res = output.apidata;
                            if (res.Code === "P00001") {
                                this.userService.storeUser(res.Data.user, res.Data.tokenId);
                                this.close();
                            }
                            else {
                                alert("Invalid user name and password");
                            }
                        }
                        else {
                            alert("Invalid user name and password");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/login-modal/login-modal.component.html"),
            styles: [__webpack_require__(/*! ./login-modal.component.css */ "./src/app/login-modal/login-modal.component.css")],
            providers: [_providers_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _providers_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  padding: 0;\r\n}\r\n\r\n.navbar-brand {\r\n  padding: 0 0.5em;\r\n}\r\n\r\n.navbar-brand img {\r\n  height: 2em;\r\n}\r\n\r\n.navbar-nav * {\r\n  vertical-align: middle;\r\n}\r\n\r\n.nav-item a {\r\n  display: block;\r\n  margin: 0.8em 0;\r\n  padding: 0 0.5em;\r\n}\r\n\r\n.nav-item:not(:first-child) a {\r\n  border-left: 1px solid grey;\r\n}\r\n\r\n.nav-item .icon {\r\n  margin-right: 0.25em;\r\n}\r\n\r\n.nav-item .icon.svg {\r\n  display: inline-block;\r\n  line-height: 0;\r\n  height: 0.75em;\r\n}\r\n\r\n.nav-item.large {\r\n  background-color: #EC121F;\r\n  color: #F1F2ED;\r\n  padding: 0;\r\n}\r\n\r\n.nav-item.large a {\r\n  border-left: none;\r\n}\r\n\r\n.nav-item.large a:hover {\r\n  color: #222222;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand\">\r\n  <a class=\"navbar-brand mr-auto\" href=\"#\"><img src=\"assets/img/logo-goat.png\"></a>\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item\">\r\n      <a href=\"#\"><i class=\"material-icons md-inherit icon\">shopping_cart</i><span>PEWPEW SHOP</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a href=\"#\" (click)=\"resetMaterials($event)\"><i class=\"material-icons md-inherit icon\">refresh</i><span>START OVER</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a href=\"#\" (click)=\"startSharing($event)\"><i class=\"material-icons md-inherit icon\">launch</i><span>SHARE</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a href=\"#\" (click)=\"openFavoriteModal($event)\"><i class=\"material-icons md-inherit icon\">favorite_border</i><span>FAVORITE</span></a>\r\n    </li>\r\n    <li class=\"nav-item large\" *ngIf=\"!loggedUser\">\r\n      <a href=\"#\" (click)=\"openLoginModal($event)\"><i class=\"material-icons md-inherit icon\">account_circle</i><span>MY ACCOUNT</span></a>\r\n    </li>\r\n    <li class=\"nav-item large\" *ngIf=\"loggedUser\">\r\n      <a href=\"#\" (click)=\"logout($event)\"><i class=\"material-icons md-inherit icon\">account_circle</i><span>Logout</span></a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n\r\n<div class=\"modal\" style=\" overflow-y: scroll;\" id=\"loginmodel\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n<div class=\"modal-header\">\r\n  <h4>Sign up or Log in</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideLoginModel()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <!-- <div class=\"text-center\">\r\n    <a href=\"#\"><img style=\"height: 2em;\" src=\"https://scontent.fatl1-2.fna.fbcdn.net/v/t39.2365-6/18928641_251957295286418_4362086450741641216_n.png?_nc_cat=0&oh=96b2909091a5a140a6846aada6e4db93&oe=5BDAFA05\" alt=\"Continue with Facebook\"/></a>\r\n  </div> -->\r\n  <form class=\"needs-validation\" novalidate>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginUsername\">Username</label>\r\n      <input id=\"loginUsername\" type=\"text\" name=\"username\" placeholder=\"PewPewCustoms\" (keyup.enter)=\"login()\" class=\"form-control\" [(ngModel)]=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginPassword\">Password</label>\r\n      <input id=\"loginPassword\" type=\"password\" class=\"form-control\" name=\"password\" (keyup.enter)=\"login()\" [(ngModel)]=\"password\">\r\n    </div>\r\n    <div class=\"text-right\">\r\n      <!-- <a href=\"#\">Forgot Password?</a>&nbsp; -->\r\n      <input type=\"button\" class=\"btn btn-primary\" (click)=\"login()\" value=\"Login\" />\r\n      \r\n      <input type=\"button\" class=\"btn btn-info\" (click)=\"hideLoginModel()\" value=\"Cancle\" />\r\n      \r\n\r\n    </div>\r\n    <!--<hr>\r\n     <div class=\"form-group\">\r\n      <label for=\"loginConfirmPassword\">Confirm Password</label>\r\n      <input id=\"loginConfirmPassword\" type=\"password\" class=\"form-control\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginEmail\">E-mail</label>\r\n      <input id=\"loginEmail\" type=\"email\" class=\"form-control\" placeholder=\"account@emailhost.com\">\r\n    </div>\r\n    <div class=\"text-right\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Register</button>\r\n    </div> -->\r\n  </form>\r\n</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notifier.service */ "./src/app/notifier.service.ts");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewer.service */ "./src/app/viewer.service.ts");
/* harmony import */ var _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share-modal/share-modal.component */ "./src/app/share-modal/share-modal.component.ts");
/* harmony import */ var _providers_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/api-service */ "./src/providers/api-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(modalService, userService, apiService, notifierService, viewerService) {
        this.modalService = modalService;
        this.userService = userService;
        this.apiService = apiService;
        this.notifierService = notifierService;
        this.viewerService = viewerService;
        this.openModal = null;
        this.loggedUser = null;
        this.username = '';
        this.password = '';
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.userService.retrieveUser();
    };
    /**
     * Initialises the sharing of the content via social media
     * @param {Event} event
     */
    NavBarComponent.prototype.startSharing = function (event) {
        this.openShareModal(event);
    };
    NavBarComponent.prototype.openFavoriteModal = function (event) {
        if (this.userService.loggedIn()) {
            // TODO
        }
        else {
            //this.openModal = this.modalService.show(LoginModalComponent);
            $("#loginmodel").show();
        }
        return this.stopEvent(event);
    };
    NavBarComponent.prototype.openLoginModal = function (event) {
        if (this.userService.loggedIn()) {
            // TODO
        }
        else {
            //this.openModal = this.modalService.show(LoginModalComponent);
            $('#loginUsername').val('');
            $('#loginPassword').val('');
            $("#loginmodel").show();
        }
        return this.stopEvent(event);
    };
    NavBarComponent.prototype.logout = function (event) {
        this.userService.clearUser();
        this.loggedUser = this.userService.retrieveUser();
        window.location.reload();
    };
    NavBarComponent.prototype.openShareModal = function (event) {
        this.openModal = this.modalService.show(_share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_5__["ShareModalComponent"]);
        return this.stopEvent(event);
    };
    NavBarComponent.prototype.resetMaterials = function (event) {
        this.notifierService.notify('reset');
        return this.stopEvent(event);
    };
    NavBarComponent.prototype.stopEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
    NavBarComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var output, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiService.executeByURL('api/login', {
                            email: this.username, password: this.password
                        })];
                    case 1:
                        output = _a.sent();
                        console.log(output);
                        if (output && output.isapisuccess) {
                            res = output.apidata;
                            if (res.Code === "P00001") {
                                this.userService.storeUser(res.Data, res.Data._id);
                                this.loggedUser = res.Data;
                                window.location.reload();
                                $("#loginmodel").hide();
                            }
                            else {
                                alert("Invalid user name and password");
                            }
                        }
                        else {
                            alert("Invalid user name and password");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NavBarComponent.prototype.hideLoginModel = function () {
        $("#loginmodel").hide();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")],
            providers: [_providers_api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _providers_api_service__WEBPACK_IMPORTED_MODULE_6__["APIService"],
            _notifier_service__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], _viewer_service__WEBPACK_IMPORTED_MODULE_4__["ViewerService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/notifier.service.ts":
/*!*************************************!*\
  !*** ./src/app/notifier.service.ts ***!
  \*************************************/
/*! exports provided: NotifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifierService = /** @class */ (function () {
    function NotifierService() {
        this.dataSources = new Map();
        this.subscriptions = new Map();
    }
    NotifierService.prototype.notify = function (eventName, data) {
        if (!this.dataSources.has(eventName)) {
            return;
        }
        this.dataSources.get(eventName).next(data);
    };
    NotifierService.prototype.observable = function (eventName) {
        if (!this.dataSources.has(eventName)) {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.dataSources.set(eventName, subject);
            this.subscriptions.set(eventName, subject.asObservable());
        }
        return this.subscriptions.get(eventName);
    };
    NotifierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotifierService);
    return NotifierService;
}());



/***/ }),

/***/ "./src/app/share-modal/config.ts":
/*!***************************************!*\
  !*** ./src/app/share-modal/config.ts ***!
  \***************************************/
/*! exports provided: defaults, debug, mobile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile; });
/*
    const root = 'https://orange-lionfish-48.localtunnel.me';
        //const root="http://localhost:3000"

        //const url = 'https://gist.githubusercontent.com/7frank/faa4393b6ea43a3403d8e1dc57f70060/raw/51d8cc4ace915b3d2d4c8bc286db935e67449dcb/facebook';
        //  const url = 'http://localhost:3000/api/share/1d7ddd31-585b-437b-910a-7ceda233e058';
        const url = root + '/api/share/1d7ddd31-585b-437b-910a-7ceda233e058';

* */
var isDebugMode = window.location.hash === '#debug';
var defaults = {
    share: {
        baseURL: window.location.origin,
        shareRoute: '/api/share/',
        gifUploadRoute: '/api/upload',
        tarUploadRoute: '/api/uploadTar',
        imagesRoute: '/images/'
    },
    gif: {
        height: 512,
        width: 512,
        options: { quality: 15, totalFrames: 120, framesPerSecond: 30 }
    }
};
var debug = {
    share: {
        baseURL: window.location.origin,
        shareRoute: '/api/share/',
        gifUploadRoute: '/api/upload',
        tarUploadRoute: '/api/uploadTar',
        imagesRoute: '/images/'
    },
    gif: {
        height: 512,
        width: 512,
        options: { quality: 15, totalFrames: 2, framesPerSecond: 30 }
    }
};
// TODO @7frank do we need mobile settings?
var mobile = {
    share: {
        baseURL: window.location.origin,
        shareRoute: '/api/share/',
        gifUploadRoute: '/api/upload',
        tarUploadRoute: '/api/uploadTar',
        imagesRoute: '/images/'
    },
    gif: {
        options: { quality: 15, totalFrames: 60, framesPerSecond: 30 }
    }
};
// -------------------------
var config = isDebugMode ? debug : defaults;
config.debug = isDebugMode;
/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/app/share-modal/share-modal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/share-modal/share-modal.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gif-preview-viewer {\r\n    width: 640px;\r\n    height: 480px;\r\n    touch-action: none;\r\n}\r\n\r\n\r\n.header-color {\r\n    background-color: #DADADA;\r\n\r\n}\r\n\r\n\r\n.header-shadow {\r\n    box-shadow: 0 .5rem 1rem rgba(0,0,0,.5)!important;\r\n}\r\n\r\n\r\n.overlay-parent{\r\n    position:relative !important;\r\n\r\n\r\n}\r\n\r\n\r\n.overlay\r\n{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    z-index: 9999;\r\n    color: white;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/share-modal/share-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/share-modal/share-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-color header-shadow p-1\" xmlns=\"http://www.w3.org/1999/html\">\r\n    <h4 class=\"text-center\">SHARE</h4>\r\n</div>\r\n<div class=\"modal-body pl-5 pr-5\">\r\n\r\n    <!--\r\n     <nav aria-label=\"breadcrumb\">\r\n         <ol class=\"breadcrumb\">\r\n             <li class=\"breadcrumb-item\"><a href=\"#\">Preset</a></li>\r\n             <li class=\"breadcrumb-item\"><a href=\"#\">Share</a></li>\r\n             <li class=\"breadcrumb-item active\" aria-current=\"page\">Etc</li>\r\n         </ol>\r\n     </nav>\r\n     -->\r\n\r\n\r\n    <div [style.display]=\"error ? 'block' : 'none'\" class=\"alert alert-danger\">\r\n        <strong>Error: </strong> {{error}}\r\n    </div>\r\n\r\n\r\n    <div class=\"text-center\" [style.display]=\"progress? 'block' : 'none'\">\r\n        <div class=\"progress\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"progressPercentage +'%'\"\r\n                 [attr.aria-valuenow]=\"progressPercentage\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{ progressPercentage\r\n                }}%\r\n            </div>\r\n        </div>\r\n\r\n        <span>{{ progressType }} </span>\r\n        <a href=\"#\"><img id=\"gif-preview\" style=\"width: 100%;\" src=\"\"/></a>\r\n    </div>\r\n\r\n    <div #canvasContainer>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"d-flex p-1 pt-4\">\r\n        <div>\r\n\r\n            <div class=\"btn-group btn-group-toggle text-center m-1\" data-toggle=\"buttons\">\r\n                <label class=\"btn btn-secondary active\" (click)=\"preparePreview(availablePreviews.default)\">\r\n                    <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Default\r\n                </label>\r\n                <label class=\"btn btn-secondary\" (click)=\"preparePreview(availablePreviews.raw)\">\r\n                    <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Raw\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ml-auto m-1\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"initGIFExport()\">Start</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex p-1 pt-4\">\r\n        <div class=\"overlay-parent\">\r\n            <input class=\"m-1\" type=\"image\" (click)=\"shareWithFacebook()\" style=\"height: 2em;\"\r\n                   src=\"assets/img/share-ui/Share_FB.png\" title=\"Continue with Facebook\"/>\r\n            <!--<a id=\"twitter-gif-share\" class=\"twitter-share-button\"\r\n               href=\"#\"\r\n               data-size=\"large\">\r\n                <img class=\"m-1\" style=\"height: 2em;position: relative;top: -1em;\"\r\n                     src=\"assets/img/share-ui/Share_TW.png\" title=\"Continue with Twitter\"/>\r\n            </a>-->\r\n            <a id=\"twitter-gif-share\"\r\n               (click)=\"initTwitterShare()\"\r\n               href=\"#\"\r\n               data-size=\"large\">\r\n                <img class=\"m-1\" style=\"height: 2em;position: relative;top: -1em;\"\r\n                     src=\"assets/img/share-ui/Share_TW.png\" title=\"Continue with Twitter\"/>\r\n            </a>\r\n\r\n\r\n            <input class=\"m-1\" type=\"image\" (click)=\"download()\" style=\"height: 2em;\"\r\n                   src=\"assets/img/share-ui/Save_Icon.png\" title=\"Download\"/>\r\n\r\n            <div class=\"overlay\" [style.display]=\"!uploaded ? 'block' : 'none'\" data-toggle=\"tooltip\"\r\n                 data-placement=\"top\" title=\"First select an option and click - Start -\"></div>\r\n        </div>\r\n\r\n        <div class=\"ml-auto m-1\">\r\n            <input (click)=\"close()\" type=\"button\" class=\"btn\" value=\"Cancel\">\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div [style.display]=\"debug ? 'block' : 'none'\">\r\n\r\n        <input class=\"m-1\" type=\"image\" (click)=\"initGIFExport({},false)\" style=\"height: 2em;\"\r\n               src=\"assets/img/nav-icons/reload-circular-arrow.svg\" title=\"Reload GIF\"/>\r\n        <input class=\"m-1\" type=\"image\"\r\n               (click)=\"initGIFExport( {quality: 1, totalFrames: 240, framesPerSecond: 60},false)\" style=\"height: 2em;\"\r\n               src=\"assets/img/nav-icons/reload-circular-arrow.svg\" title=\"Reload GIF\"/>\r\n\r\n        <div></div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/share-modal/share-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/share-modal/share-modal.component.ts ***!
  \******************************************************/
/*! exports provided: ShareModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModalComponent", function() { return ShareModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _utils_Facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Facebook */ "./src/app/utils/Facebook.ts");
/* harmony import */ var _utils_GIFExport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GIFExport */ "./src/app/utils/GIFExport.ts");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../viewer.service */ "./src/app/viewer.service.ts");
/* harmony import */ var _utils_GIFExportPreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GIFExportPreview */ "./src/app/utils/GIFExportPreview.ts");
/* harmony import */ var _utils_GIFUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/GIFUpload */ "./src/app/utils/GIFUpload.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/app/share-modal/config.ts");
/* harmony import */ var _utils_Twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/Twitter */ "./src/app/utils/Twitter.ts");
/* harmony import */ var _utils_TarExport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/TarExport */ "./src/app/utils/TarExport.ts");
/* harmony import */ var _utils_Socket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/Socket */ "./src/app/utils/Socket.js");
/* harmony import */ var parsehtml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! parsehtml */ "./node_modules/parsehtml/parseHTML.js");
/* harmony import */ var parsehtml__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(parsehtml__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_RawExportPreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/RawExportPreview */ "./src/app/utils/RawExportPreview.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













function debugTwitter() {
    var twitterBTN = parsehtml__WEBPACK_IMPORTED_MODULE_11___default()("\n <a id=\"twitter-gif-share2\" class=\"twitter-share-button\"\n               href=\"#\"\n               data-size=\"large\">\n                <img class=\"m-1\" style=\"height: 2em;position: relative;top: -2em;\"\n                     src=\"assets/img/share-ui/Share_TW.png\" title=\"Continue with Twitter\"/>\n            </a>\n");
    Object(_utils_Twitter__WEBPACK_IMPORTED_MODULE_8__["updateTwitterShareButton"])(twitterBTN, 'Nice gadget!', ['pewpewcustoms'], ['http://mighty-starfish-59.localtunnel.me/api/share/a8297608-b44a-4cbc-ba9e-8b1f662ab186/m4v']);
    document.body.appendChild(twitterBTN);
}
window['debugTwitter'] = debugTwitter;
Object(_utils_Socket__WEBPACK_IMPORTED_MODULE_10__["socketStartListening"])();
var ShareModalComponent = /** @class */ (function () {
    function ShareModalComponent(modalRef, viewerService, zone) {
        var _this = this;
        this.modalRef = modalRef;
        this.viewerService = viewerService;
        this.zone = zone;
        this.debug = _config__WEBPACK_IMPORTED_MODULE_7__["default"].debug;
        // ---------------------
        // general progress info
        this.progress = false;
        this.progressType = '';
        this.progressPercentage = 0;
        this.created = false;
        this.uploaded = false;
        // --------------------
        this.error = '';
        this.uploadResponse = null;
        this.availablePreviews = { default: { name: 'default', ctor: _utils_GIFExportPreview__WEBPACK_IMPORTED_MODULE_5__["GIFExportPreview"] }, raw: { name: 'raw', ctor: _utils_RawExportPreview__WEBPACK_IMPORTED_MODULE_12__["RawExportPreview"] } };
        this.previewInstances = {};
        this.enableSharingButtons = false;
        window['that'] = this;
        _utils_Socket__WEBPACK_IMPORTED_MODULE_10__["socket"].on('convert-progress', function (data) {
            _this.zone.run(function () {
                _this.setProgress(data.percentage, 100, 'Converting ' + data.format);
                if (data.percentage >= 99)
                    _this.created = true;
                console.log(_this.progress, _this.progressType, _this.progressPercentage);
                // TODO @7frank work flow...
                if (!_this.progress && _this.progressType == "Converting jpg") {
                    // FIXME @7frank use this param to disable the overlay as soon as sockerio works through the nginx route on the server
                    _this.enableSharingButtons = true;
                }
            });
        });
    }
    // TODO @7frank add "format" parameter
    ShareModalComponent.prototype.getShareURL = function (data) {
        return _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.baseURL + _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.shareRoute + data.id + '/' + data.format;
    };
    ShareModalComponent.prototype.getVideoURL = function (data) {
        return _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.baseURL + _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.imagesRoute + data.id + '.' + data.format;
    };
    ShareModalComponent.prototype.getTwitterShareURL = function (data) {
        //TODO
        return _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.baseURL + '/twitter/video/' + data.id + '.' + data.format;
    };
    ShareModalComponent.prototype.shareWithFacebook = function () {
        if (!this.uploadResponse) {
            return;
        }
        var url = this.getShareURL(this.uploadResponse);
        Object(_utils_Facebook__WEBPACK_IMPORTED_MODULE_2__["facebookShare"])(url);
        //TODO what to do after facebook share
        //.then(() => this.close());
    };
    // TODO @7frank fix download with tar files
    ShareModalComponent.prototype.download = function () {
        var link = document.createElement('a');
        link.href = this.getVideoURL(this.uploadResponse); // this.getGifEl().src;
        link.download = 'Download.' + this.uploadResponse.format;
        document.body.appendChild(link);
        link.click();
    };
    ShareModalComponent.prototype.setProgress = function (current, maximum, action) {
        this.progressPercentage = Math.round(100 * current / maximum);
        this.progress = this.progressPercentage != 100;
        this.progressType = action;
    };
    ShareModalComponent.prototype.close = function () {
        this.modalRef.hide();
        this.undoPreviewMode();
    };
    ShareModalComponent.prototype.undoPreviewMode = function () {
        if (this.exporter) {
            this.exporter.cancel();
        }
        this.viewerService.viewer.resizeOnRender = true;
        this.viewerService.viewer.resizeAsNeeded(true);
        this.preview.disablePreview();
        this.previousCanvasContainer.appendChild(this.displayCanvas);
    };
    ShareModalComponent.prototype.getPreviewMesh = function () {
        return this.viewerService.viewer.getActiveWeapon();
    };
    ShareModalComponent.prototype.createGIFromCanvas = function (progressCallback, overrideConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var start, result, stop;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.exporter = new _utils_GIFExport__WEBPACK_IMPORTED_MODULE_3__["THREE2GIFConverter"](_config__WEBPACK_IMPORTED_MODULE_7__["default"].gif.width, _config__WEBPACK_IMPORTED_MODULE_7__["default"].gif.height, Object.assign(_config__WEBPACK_IMPORTED_MODULE_7__["default"].gif.options, overrideConfig));
                        start = window.performance.now();
                        return [4 /*yield*/, this.exporter.startRecording(this.displayCanvas, this.scene, this.getPreviewMesh(), progressCallback)];
                    case 1:
                        result = _a.sent();
                        stop = window.performance.now();
                        console.log('Creating Gif took:', (stop - start) / 1000, ' seconds');
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ShareModalComponent.prototype.createTarFromCanvas = function (progressCallback, overrideConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var start, result, stop;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.exporter = new _utils_TarExport__WEBPACK_IMPORTED_MODULE_9__["TarExport"](_config__WEBPACK_IMPORTED_MODULE_7__["default"].gif.width, _config__WEBPACK_IMPORTED_MODULE_7__["default"].gif.height, Object.assign(_config__WEBPACK_IMPORTED_MODULE_7__["default"].gif.options, overrideConfig));
                        window['converter'] = this.exporter.converter;
                        start = window.performance.now();
                        return [4 /*yield*/, this.exporter.startRecording(this.displayCanvas, this.scene, this.getPreviewMesh(), progressCallback)];
                    case 1:
                        result = _a.sent();
                        stop = window.performance.now();
                        console.log('Creating Tar took:', (stop - start) / 1000, ' seconds');
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ShareModalComponent.prototype.getGifEl = function () {
        return document.querySelector('#gif-preview');
    };
    // TODO progress bar for image after video generation gets stuck at 5% and will not highlight a success state
    ShareModalComponent.prototype.initGIFExport = function (overrideConfig, uploadImmediate) {
        if (uploadImmediate === void 0) { uploadImmediate = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mType, result, e_1, el, uploadRoute, gifPromise, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.uploaded = false;
                        this.error = '';
                        this.setProgress(0, 1, '');
                        if (!this.gifUpload) {
                            this.gifUpload = (new _utils_GIFUpload__WEBPACK_IMPORTED_MODULE_6__["GIFUpload"]);
                        }
                        this.gifUpload.cancelLastUpload();
                        mType = 'tar';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        if (!(mType === 'gif')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createGIFromCanvas(function (val) {
                                _this.setProgress(val, 1, 'Generating GIF...');
                            }, overrideConfig)];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(mType === 'tar')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.createTarFromCanvas(function (val) {
                                // FIXME progress is only triggered on convert not while capturing
                                _this.setProgress(val, 1, 'Generating Tar');
                            }, overrideConfig)];
                    case 4:
                        result = _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1 = _a.sent();
                        console.warn(e_1);
                        this.error = e_1.message;
                        return [2 /*return*/];
                    case 7: return [7 /*endfinally*/];
                    case 8:
                        if (mType == 'gif') {
                            el = this.getGifEl();
                            el.src = result.url;
                        }
                        if (!uploadImmediate) {
                            return [2 /*return*/];
                        }
                        uploadRoute = (mType == 'gif') ? _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.baseURL + _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.gifUploadRoute : _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.baseURL + _config__WEBPACK_IMPORTED_MODULE_7__["default"].share.tarUploadRoute;
                        this.gifUpload.setRemote(uploadRoute);
                        gifPromise = this.gifUpload.uploadBlob(result.blob, undefined, function (e) {
                            console.log(e.loaded, e.total);
                            _this.setProgress(e.loaded, e.total, 'Uploading ...');
                        });
                        gifPromise.catch(function (e) {
                            _this.error = 'Failed to upload file. Server not resonding.';
                        });
                        return [4 /*yield*/, gifPromise];
                    case 9:
                        response = _a.sent();
                        if (!response.error) {
                            this.setShareElements(response);
                            this.updateDebugResponse(response);
                            this.uploaded = true;
                        }
                        else {
                            this.error = response.error;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ShareModalComponent.prototype.updateDebugResponse = function (response) {
        if (!this.debug) {
            return;
        }
        // if video created load video
        // if image created load video
        var url = this.getShareURL(response);
        console.log('share URL: ', url);
    };
    ShareModalComponent.prototype.setShareElements = function (data) {
        this.uploadResponse = data;
        //updateTwitterShareButton(document.querySelector('#twitter-gif-share'), 'Nice gadget!', ['pewpewcustoms'], [this.getShareURL(data)]);
    };
    // FIXME @7frank remove all previews from the global scene otherwise re-opening dialog will create multiple instances of the individual objects
    ShareModalComponent.prototype.ngOnDestroy = function () {
        this.close();
    };
    ShareModalComponent.prototype.ngAfterViewInit = function () {
        this.displayCanvas = this.viewerService.viewer.renderCanvas.nativeElement;
        this.scene = this.viewerService.viewer.scene;
        this.previousCanvasContainer = this.displayCanvas.parentElement;
        this.canvasContainer.nativeElement.appendChild(this.displayCanvas);
        this.viewerService.viewer.resizeOnRender = false;
        // this.viewerService.viewer.resizeAsNeeded(true);
        this.scene.getEngine().setSize(512, 512);
        this.preparePreview(this.availablePreviews.default);
    };
    ShareModalComponent.prototype.preparePreview = function (obj) {
        if (this.preview) {
            this.preview.disablePreview();
        }
        if (!this.previewInstances[obj.name]) {
            this.previewInstances[obj.name] = new obj.ctor(this.scene, this.displayCanvas, this.viewerService.viewer.camera);
        }
        // this.preview = new GIFExportPreview(this.scene, this.displayCanvas, this.viewerService.viewer.camera);
        this.preview = this.previewInstances[obj.name];
        this.preview.enablePreview(this.getPreviewMesh());
    };
    ShareModalComponent.prototype.initTwitterShare = function () {
        var url = this.getTwitterShareURL(this.uploadResponse);
        console.log('initTwitterShare', url);
        window.open(url);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvasContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ShareModalComponent.prototype, "canvasContainer", void 0);
    ShareModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-modal',
            template: __webpack_require__(/*! ./share-modal.component.html */ "./src/app/share-modal/share-modal.component.html"),
            styles: [__webpack_require__(/*! ./share-modal.component.css */ "./src/app/share-modal/share-modal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _viewer_service__WEBPACK_IMPORTED_MODULE_4__["ViewerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ShareModalComponent);
    return ShareModalComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(cookieService) {
        this.cookieService = cookieService;
    }
    UserService.prototype.loggedIn = function () {
        return this.cookieService.check('TOKEN');
    };
    UserService.prototype.isAdmin = function () {
        var isAdmin = false;
        try {
            if (this.cookieService.check('USER')) {
                var user = JSON.parse(this.cookieService.get('USER'));
                isAdmin = user.role === "admin";
            }
        }
        catch (err) {
        }
        return isAdmin;
    };
    UserService.prototype.storeUser = function (user, token) {
        this.cookieService.set('TOKEN', token);
        this.cookieService.set('USER', JSON.stringify(user));
    };
    UserService.prototype.retrieveUser = function () {
        if (this.loggedIn())
            return JSON.parse(this.cookieService.get('USER'));
        else
            return null;
    };
    UserService.prototype.clearUser = function () {
        this.cookieService.delete('USER');
        this.cookieService.delete('TOKEN');
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/utils/ExportCommon.ts":
/*!***************************************!*\
  !*** ./src/app/utils/ExportCommon.ts ***!
  \***************************************/
/*! exports provided: createDefaultParticleSystem, createSpotLight, createGround, createLightTube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDefaultParticleSystem", function() { return createDefaultParticleSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpotLight", function() { return createSpotLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGround", function() { return createGround; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLightTube", function() { return createLightTube; });
function createDefaultParticleSystem(scene, emitterObject) {
    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem('particles', 300, scene);
    // Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture('/assets/textures/particles/dot8.png', scene);
    // Where the particles come from
    particleSystem.emitter = emitterObject; // the starting object, the emitter
    var emitterType = new BABYLON.ConeParticleEmitter();
    emitterType.radius = 0.4;
    // emitterType.radiusRange = 0;
    particleSystem.particleEmitterType = emitterType;
    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
    // Size of each particle (random between...
    particleSystem.minSize = 0.05 * 0.6;
    particleSystem.maxSize = 0.05 * 0.6;
    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;
    // Emission rate
    particleSystem.emitRate = 50;
    //  Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
    // Angular speed, in radians
    // particleSystem.minAngularSpeed = 0;
    // particleSystem.maxAngularSpeed = Math.PI;
    // Speed
    particleSystem.minEmitPower = 0.7;
    particleSystem.maxEmitPower = 1.1;
    particleSystem.updateSpeed = 0.01;
    // particleSystem.addVelocityGradient(0, 3, 5);
    // particleSystem.addVelocityGradient(1.0, -5, -10);
    // Start the particle system
    particleSystem['preWarmCycles'] = 10;
    particleSystem['preWarmStepOffset'] = 5;
    // particleSystem.start();
    return particleSystem;
}
function createSpotLight(scene) {
    // Light direction is directly down from a position one unit up, slow decay
    var spotLight = new BABYLON.SpotLight('spotLight', new BABYLON.Vector3(1, 2, 1), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 18, scene);
    spotLight.diffuse = new BABYLON.Color3(0, 1, 1);
    spotLight.specular = new BABYLON.Color3(1, 1, 1);
    spotLight.shadowEnabled = true;
    return spotLight;
}
function createGround(scene) {
    var texture = new BABYLON.Texture('/assets/preview/plate4.jpg', scene);
    texture.uScale = 3;
    texture.vScale = 3;
    var groundMaterial = new BABYLON.StandardMaterial('myMaterial', scene);
    //  groundMaterial.diffuseTexture = texture;
    groundMaterial.diffuseColor = new BABYLON.Color3(.5, .5, .5);
    var myGround = BABYLON.MeshBuilder.CreateGround('myGround', { width: 9, height: 9 }, scene);
    myGround.position.y = -0.5;
    myGround.receiveShadows = true;
    myGround.material = groundMaterial;
    return myGround;
}
function createLightTube(radii, height, scene) {
    var path = [];
    path.push(new BABYLON.Vector3(0, -height / 2, 0)); //point 1A
    path.push(new BABYLON.Vector3(0, height / 2, 0)); //point 2
    var radiusFunction = function (i, distance) {
        return radii[i];
    };
    return BABYLON.Mesh.CreateTube('tube', path, 2, 6, radiusFunction, 0, scene, false, BABYLON.Mesh.FRONTSIDE);
}


/***/ }),

/***/ "./src/app/utils/Facebook.ts":
/*!***********************************!*\
  !*** ./src/app/utils/Facebook.ts ***!
  \***********************************/
/*! exports provided: facebookShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebookShare", function() { return facebookShare; });
/**
 * Enables  the sharing of a URL.
 * Note: depends on Facebook being available globally
 *
 * @param url
 * @returns {Promise<void>}
 */
function facebookShare(url) {
    var FB = window.FB;
    return new Promise(function (ok, fail) {
        FB.ui({
            method: 'share',
            href: url
        }, function (response) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (typeof response == undefined) {
                fail();
            }
            else {
                ok();
            }
        });
    });
}


/***/ }),

/***/ "./src/app/utils/GIFExport.ts":
/*!************************************!*\
  !*** ./src/app/utils/GIFExport.ts ***!
  \************************************/
/*! exports provided: THREE2GIFConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE2GIFConverter", function() { return THREE2GIFConverter; });
/* harmony import */ var gif_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gif.js */ "./node_modules/gif.js/dist/gif.js");
/* harmony import */ var gif_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gif_js__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import GIFWorker from 'gif.js/dist/gif.worker';
// TODO @7frank load worker in a more convenient way .. currently the worker script is base64 encoded in the following url
var workerURL = 'data:application/javascript;base64,Ly8gZ2lmLndvcmtlci5qcyAwLjIuMCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qbm9yZGJlcmcvZ2lmLmpzCihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09ImZ1bmN0aW9uIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcigiQ2Fubm90IGZpbmQgbW9kdWxlICciK28rIiciKTt0aHJvdyBmLmNvZGU9Ik1PRFVMRV9OT1RfRk9VTkQiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09ImZ1bmN0aW9uIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe3ZhciBOZXVRdWFudD1yZXF1aXJlKCIuL1R5cGVkTmV1UXVhbnQuanMiKTt2YXIgTFpXRW5jb2Rlcj1yZXF1aXJlKCIuL0xaV0VuY29kZXIuanMiKTtmdW5jdGlvbiBCeXRlQXJyYXkoKXt0aGlzLnBhZ2U9LTE7dGhpcy5wYWdlcz1bXTt0aGlzLm5ld1BhZ2UoKX1CeXRlQXJyYXkucGFnZVNpemU9NDA5NjtCeXRlQXJyYXkuY2hhck1hcD17fTtmb3IodmFyIGk9MDtpPDI1NjtpKyspQnl0ZUFycmF5LmNoYXJNYXBbaV09U3RyaW5nLmZyb21DaGFyQ29kZShpKTtCeXRlQXJyYXkucHJvdG90eXBlLm5ld1BhZ2U9ZnVuY3Rpb24oKXt0aGlzLnBhZ2VzWysrdGhpcy5wYWdlXT1uZXcgVWludDhBcnJheShCeXRlQXJyYXkucGFnZVNpemUpO3RoaXMuY3Vyc29yPTB9O0J5dGVBcnJheS5wcm90b3R5cGUuZ2V0RGF0YT1mdW5jdGlvbigpe3ZhciBydj0iIjtmb3IodmFyIHA9MDtwPHRoaXMucGFnZXMubGVuZ3RoO3ArKyl7Zm9yKHZhciBpPTA7aTxCeXRlQXJyYXkucGFnZVNpemU7aSsrKXtydis9Qnl0ZUFycmF5LmNoYXJNYXBbdGhpcy5wYWdlc1twXVtpXV19fXJldHVybiBydn07Qnl0ZUFycmF5LnByb3RvdHlwZS53cml0ZUJ5dGU9ZnVuY3Rpb24odmFsKXtpZih0aGlzLmN1cnNvcj49Qnl0ZUFycmF5LnBhZ2VTaXplKXRoaXMubmV3UGFnZSgpO3RoaXMucGFnZXNbdGhpcy5wYWdlXVt0aGlzLmN1cnNvcisrXT12YWx9O0J5dGVBcnJheS5wcm90b3R5cGUud3JpdGVVVEZCeXRlcz1mdW5jdGlvbihzdHJpbmcpe2Zvcih2YXIgbD1zdHJpbmcubGVuZ3RoLGk9MDtpPGw7aSsrKXRoaXMud3JpdGVCeXRlKHN0cmluZy5jaGFyQ29kZUF0KGkpKX07Qnl0ZUFycmF5LnByb3RvdHlwZS53cml0ZUJ5dGVzPWZ1bmN0aW9uKGFycmF5LG9mZnNldCxsZW5ndGgpe2Zvcih2YXIgbD1sZW5ndGh8fGFycmF5Lmxlbmd0aCxpPW9mZnNldHx8MDtpPGw7aSsrKXRoaXMud3JpdGVCeXRlKGFycmF5W2ldKX07ZnVuY3Rpb24gR0lGRW5jb2Rlcih3aWR0aCxoZWlnaHQpe3RoaXMud2lkdGg9fn53aWR0aDt0aGlzLmhlaWdodD1+fmhlaWdodDt0aGlzLnRyYW5zcGFyZW50PW51bGw7dGhpcy50cmFuc0luZGV4PTA7dGhpcy5yZXBlYXQ9LTE7dGhpcy5kZWxheT0wO3RoaXMuaW1hZ2U9bnVsbDt0aGlzLnBpeGVscz1udWxsO3RoaXMuaW5kZXhlZFBpeGVscz1udWxsO3RoaXMuY29sb3JEZXB0aD1udWxsO3RoaXMuY29sb3JUYWI9bnVsbDt0aGlzLm5ldVF1YW50PW51bGw7dGhpcy51c2VkRW50cnk9bmV3IEFycmF5O3RoaXMucGFsU2l6ZT03O3RoaXMuZGlzcG9zZT0tMTt0aGlzLmZpcnN0RnJhbWU9dHJ1ZTt0aGlzLnNhbXBsZT0xMDt0aGlzLmRpdGhlcj1mYWxzZTt0aGlzLmdsb2JhbFBhbGV0dGU9ZmFsc2U7dGhpcy5vdXQ9bmV3IEJ5dGVBcnJheX1HSUZFbmNvZGVyLnByb3RvdHlwZS5zZXREZWxheT1mdW5jdGlvbihtaWxsaXNlY29uZHMpe3RoaXMuZGVsYXk9TWF0aC5yb3VuZChtaWxsaXNlY29uZHMvMTApfTtHSUZFbmNvZGVyLnByb3RvdHlwZS5zZXRGcmFtZVJhdGU9ZnVuY3Rpb24oZnBzKXt0aGlzLmRlbGF5PU1hdGgucm91bmQoMTAwL2Zwcyl9O0dJRkVuY29kZXIucHJvdG90eXBlLnNldERpc3Bvc2U9ZnVuY3Rpb24oZGlzcG9zYWxDb2RlKXtpZihkaXNwb3NhbENvZGU+PTApdGhpcy5kaXNwb3NlPWRpc3Bvc2FsQ29kZX07R0lGRW5jb2Rlci5wcm90b3R5cGUuc2V0UmVwZWF0PWZ1bmN0aW9uKHJlcGVhdCl7dGhpcy5yZXBlYXQ9cmVwZWF0fTtHSUZFbmNvZGVyLnByb3RvdHlwZS5zZXRUcmFuc3BhcmVudD1mdW5jdGlvbihjb2xvcil7dGhpcy50cmFuc3BhcmVudD1jb2xvcn07R0lGRW5jb2Rlci5wcm90b3R5cGUuYWRkRnJhbWU9ZnVuY3Rpb24oaW1hZ2VEYXRhKXt0aGlzLmltYWdlPWltYWdlRGF0YTt0aGlzLmNvbG9yVGFiPXRoaXMuZ2xvYmFsUGFsZXR0ZSYmdGhpcy5nbG9iYWxQYWxldHRlLnNsaWNlP3RoaXMuZ2xvYmFsUGFsZXR0ZTpudWxsO3RoaXMuZ2V0SW1hZ2VQaXhlbHMoKTt0aGlzLmFuYWx5emVQaXhlbHMoKTtpZih0aGlzLmdsb2JhbFBhbGV0dGU9PT10cnVlKXRoaXMuZ2xvYmFsUGFsZXR0ZT10aGlzLmNvbG9yVGFiO2lmKHRoaXMuZmlyc3RGcmFtZSl7dGhpcy53cml0ZUxTRCgpO3RoaXMud3JpdGVQYWxldHRlKCk7aWYodGhpcy5yZXBlYXQ+PTApe3RoaXMud3JpdGVOZXRzY2FwZUV4dCgpfX10aGlzLndyaXRlR3JhcGhpY0N0cmxFeHQoKTt0aGlzLndyaXRlSW1hZ2VEZXNjKCk7aWYoIXRoaXMuZmlyc3RGcmFtZSYmIXRoaXMuZ2xvYmFsUGFsZXR0ZSl0aGlzLndyaXRlUGFsZXR0ZSgpO3RoaXMud3JpdGVQaXhlbHMoKTt0aGlzLmZpcnN0RnJhbWU9ZmFsc2V9O0dJRkVuY29kZXIucHJvdG90eXBlLmZpbmlzaD1mdW5jdGlvbigpe3RoaXMub3V0LndyaXRlQnl0ZSg1OSl9O0dJRkVuY29kZXIucHJvdG90eXBlLnNldFF1YWxpdHk9ZnVuY3Rpb24ocXVhbGl0eSl7aWYocXVhbGl0eTwxKXF1YWxpdHk9MTt0aGlzLnNhbXBsZT1xdWFsaXR5fTtHSUZFbmNvZGVyLnByb3RvdHlwZS5zZXREaXRoZXI9ZnVuY3Rpb24oZGl0aGVyKXtpZihkaXRoZXI9PT10cnVlKWRpdGhlcj0iRmxveWRTdGVpbmJlcmciO3RoaXMuZGl0aGVyPWRpdGhlcn07R0lGRW5jb2Rlci5wcm90b3R5cGUuc2V0R2xvYmFsUGFsZXR0ZT1mdW5jdGlvbihwYWxldHRlKXt0aGlzLmdsb2JhbFBhbGV0dGU9cGFsZXR0ZX07R0lGRW5jb2Rlci5wcm90b3R5cGUuZ2V0R2xvYmFsUGFsZXR0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdsb2JhbFBhbGV0dGUmJnRoaXMuZ2xvYmFsUGFsZXR0ZS5zbGljZSYmdGhpcy5nbG9iYWxQYWxldHRlLnNsaWNlKDApfHx0aGlzLmdsb2JhbFBhbGV0dGV9O0dJRkVuY29kZXIucHJvdG90eXBlLndyaXRlSGVhZGVyPWZ1bmN0aW9uKCl7dGhpcy5vdXQud3JpdGVVVEZCeXRlcygiR0lGODlhIil9O0dJRkVuY29kZXIucHJvdG90eXBlLmFuYWx5emVQaXhlbHM9ZnVuY3Rpb24oKXtpZighdGhpcy5jb2xvclRhYil7dGhpcy5uZXVRdWFudD1uZXcgTmV1UXVhbnQodGhpcy5waXhlbHMsdGhpcy5zYW1wbGUpO3RoaXMubmV1UXVhbnQuYnVpbGRDb2xvcm1hcCgpO3RoaXMuY29sb3JUYWI9dGhpcy5uZXVRdWFudC5nZXRDb2xvcm1hcCgpfWlmKHRoaXMuZGl0aGVyKXt0aGlzLmRpdGhlclBpeGVscyh0aGlzLmRpdGhlci5yZXBsYWNlKCItc2VycGVudGluZSIsIiIpLHRoaXMuZGl0aGVyLm1hdGNoKC8tc2VycGVudGluZS8pIT09bnVsbCl9ZWxzZXt0aGlzLmluZGV4UGl4ZWxzKCl9dGhpcy5waXhlbHM9bnVsbDt0aGlzLmNvbG9yRGVwdGg9ODt0aGlzLnBhbFNpemU9NztpZih0aGlzLnRyYW5zcGFyZW50IT09bnVsbCl7dGhpcy50cmFuc0luZGV4PXRoaXMuZmluZENsb3Nlc3QodGhpcy50cmFuc3BhcmVudCx0cnVlKX19O0dJRkVuY29kZXIucHJvdG90eXBlLmluZGV4UGl4ZWxzPWZ1bmN0aW9uKGltZ3Epe3ZhciBuUGl4PXRoaXMucGl4ZWxzLmxlbmd0aC8zO3RoaXMuaW5kZXhlZFBpeGVscz1uZXcgVWludDhBcnJheShuUGl4KTt2YXIgaz0wO2Zvcih2YXIgaj0wO2o8blBpeDtqKyspe3ZhciBpbmRleD10aGlzLmZpbmRDbG9zZXN0UkdCKHRoaXMucGl4ZWxzW2srK10mMjU1LHRoaXMucGl4ZWxzW2srK10mMjU1LHRoaXMucGl4ZWxzW2srK10mMjU1KTt0aGlzLnVzZWRFbnRyeVtpbmRleF09dHJ1ZTt0aGlzLmluZGV4ZWRQaXhlbHNbal09aW5kZXh9fTtHSUZFbmNvZGVyLnByb3RvdHlwZS5kaXRoZXJQaXhlbHM9ZnVuY3Rpb24oa2VybmVsLHNlcnBlbnRpbmUpe3ZhciBrZXJuZWxzPXtGYWxzZUZsb3lkU3RlaW5iZXJnOltbMy84LDEsMF0sWzMvOCwwLDFdLFsyLzgsMSwxXV0sRmxveWRTdGVpbmJlcmc6W1s3LzE2LDEsMF0sWzMvMTYsLTEsMV0sWzUvMTYsMCwxXSxbMS8xNiwxLDFdXSxTdHVja2k6W1s4LzQyLDEsMF0sWzQvNDIsMiwwXSxbMi80MiwtMiwxXSxbNC80MiwtMSwxXSxbOC80MiwwLDFdLFs0LzQyLDEsMV0sWzIvNDIsMiwxXSxbMS80MiwtMiwyXSxbMi80MiwtMSwyXSxbNC80MiwwLDJdLFsyLzQyLDEsMl0sWzEvNDIsMiwyXV0sQXRraW5zb246W1sxLzgsMSwwXSxbMS84LDIsMF0sWzEvOCwtMSwxXSxbMS84LDAsMV0sWzEvOCwxLDFdLFsxLzgsMCwyXV19O2lmKCFrZXJuZWx8fCFrZXJuZWxzW2tlcm5lbF0pe3Rocm93IlVua25vd24gZGl0aGVyaW5nIGtlcm5lbDogIitrZXJuZWx9dmFyIGRzPWtlcm5lbHNba2VybmVsXTt2YXIgaW5kZXg9MCxoZWlnaHQ9dGhpcy5oZWlnaHQsd2lkdGg9dGhpcy53aWR0aCxkYXRhPXRoaXMucGl4ZWxzO3ZhciBkaXJlY3Rpb249c2VycGVudGluZT8tMToxO3RoaXMuaW5kZXhlZFBpeGVscz1uZXcgVWludDhBcnJheSh0aGlzLnBpeGVscy5sZW5ndGgvMyk7Zm9yKHZhciB5PTA7eTxoZWlnaHQ7eSsrKXtpZihzZXJwZW50aW5lKWRpcmVjdGlvbj1kaXJlY3Rpb24qLTE7Zm9yKHZhciB4PWRpcmVjdGlvbj09MT8wOndpZHRoLTEseGVuZD1kaXJlY3Rpb249PTE/d2lkdGg6MDt4IT09eGVuZDt4Kz1kaXJlY3Rpb24pe2luZGV4PXkqd2lkdGgreDt2YXIgaWR4PWluZGV4KjM7dmFyIHIxPWRhdGFbaWR4XTt2YXIgZzE9ZGF0YVtpZHgrMV07dmFyIGIxPWRhdGFbaWR4KzJdO2lkeD10aGlzLmZpbmRDbG9zZXN0UkdCKHIxLGcxLGIxKTt0aGlzLnVzZWRFbnRyeVtpZHhdPXRydWU7dGhpcy5pbmRleGVkUGl4ZWxzW2luZGV4XT1pZHg7aWR4Kj0zO3ZhciByMj10aGlzLmNvbG9yVGFiW2lkeF07dmFyIGcyPXRoaXMuY29sb3JUYWJbaWR4KzFdO3ZhciBiMj10aGlzLmNvbG9yVGFiW2lkeCsyXTt2YXIgZXI9cjEtcjI7dmFyIGVnPWcxLWcyO3ZhciBlYj1iMS1iMjtmb3IodmFyIGk9ZGlyZWN0aW9uPT0xPzA6ZHMubGVuZ3RoLTEsZW5kPWRpcmVjdGlvbj09MT9kcy5sZW5ndGg6MDtpIT09ZW5kO2krPWRpcmVjdGlvbil7dmFyIHgxPWRzW2ldWzFdO3ZhciB5MT1kc1tpXVsyXTtpZih4MSt4Pj0wJiZ4MSt4PHdpZHRoJiZ5MSt5Pj0wJiZ5MSt5PGhlaWdodCl7dmFyIGQ9ZHNbaV1bMF07aWR4PWluZGV4K3gxK3kxKndpZHRoO2lkeCo9MztkYXRhW2lkeF09TWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsZGF0YVtpZHhdK2VyKmQpKTtkYXRhW2lkeCsxXT1NYXRoLm1heCgwLE1hdGgubWluKDI1NSxkYXRhW2lkeCsxXStlZypkKSk7ZGF0YVtpZHgrMl09TWF0aC5tYXgoMCxNYXRoLm1pbigyNTUsZGF0YVtpZHgrMl0rZWIqZCkpfX19fX07R0lGRW5jb2Rlci5wcm90b3R5cGUuZmluZENsb3Nlc3Q9ZnVuY3Rpb24oYyx1c2VkKXtyZXR1cm4gdGhpcy5maW5kQ2xvc2VzdFJHQigoYyYxNjcxMTY4MCk+PjE2LChjJjY1MjgwKT4+OCxjJjI1NSx1c2VkKX07R0lGRW5jb2Rlci5wcm90b3R5cGUuZmluZENsb3Nlc3RSR0I9ZnVuY3Rpb24ocixnLGIsdXNlZCl7aWYodGhpcy5jb2xvclRhYj09PW51bGwpcmV0dXJuLTE7aWYodGhpcy5uZXVRdWFudCYmIXVzZWQpe3JldHVybiB0aGlzLm5ldVF1YW50Lmxvb2t1cFJHQihyLGcsYil9dmFyIGM9YnxnPDw4fHI8PDE2O3ZhciBtaW5wb3M9MDt2YXIgZG1pbj0yNTYqMjU2KjI1Njt2YXIgbGVuPXRoaXMuY29sb3JUYWIubGVuZ3RoO2Zvcih2YXIgaT0wLGluZGV4PTA7aTxsZW47aW5kZXgrKyl7dmFyIGRyPXItKHRoaXMuY29sb3JUYWJbaSsrXSYyNTUpO3ZhciBkZz1nLSh0aGlzLmNvbG9yVGFiW2krK10mMjU1KTt2YXIgZGI9Yi0odGhpcy5jb2xvclRhYltpKytdJjI1NSk7dmFyIGQ9ZHIqZHIrZGcqZGcrZGIqZGI7aWYoKCF1c2VkfHx0aGlzLnVzZWRFbnRyeVtpbmRleF0pJiZkPGRtaW4pe2RtaW49ZDttaW5wb3M9aW5kZXh9fXJldHVybiBtaW5wb3N9O0dJRkVuY29kZXIucHJvdG90eXBlLmdldEltYWdlUGl4ZWxzPWZ1bmN0aW9uKCl7dmFyIHc9dGhpcy53aWR0aDt2YXIgaD10aGlzLmhlaWdodDt0aGlzLnBpeGVscz1uZXcgVWludDhBcnJheSh3KmgqMyk7dmFyIGRhdGE9dGhpcy5pbWFnZTt2YXIgc3JjUG9zPTA7dmFyIGNvdW50PTA7Zm9yKHZhciBpPTA7aTxoO2krKyl7Zm9yKHZhciBqPTA7ajx3O2orKyl7dGhpcy5waXhlbHNbY291bnQrK109ZGF0YVtzcmNQb3MrK107dGhpcy5waXhlbHNbY291bnQrK109ZGF0YVtzcmNQb3MrK107dGhpcy5waXhlbHNbY291bnQrK109ZGF0YVtzcmNQb3MrK107c3JjUG9zKyt9fX07R0lGRW5jb2Rlci5wcm90b3R5cGUud3JpdGVHcmFwaGljQ3RybEV4dD1mdW5jdGlvbigpe3RoaXMub3V0LndyaXRlQnl0ZSgzMyk7dGhpcy5vdXQud3JpdGVCeXRlKDI0OSk7dGhpcy5vdXQud3JpdGVCeXRlKDQpO3ZhciB0cmFuc3AsZGlzcDtpZih0aGlzLnRyYW5zcGFyZW50PT09bnVsbCl7dHJhbnNwPTA7ZGlzcD0wfWVsc2V7dHJhbnNwPTE7ZGlzcD0yfWlmKHRoaXMuZGlzcG9zZT49MCl7ZGlzcD1kaXNwb3NlJjd9ZGlzcDw8PTI7dGhpcy5vdXQud3JpdGVCeXRlKDB8ZGlzcHwwfHRyYW5zcCk7dGhpcy53cml0ZVNob3J0KHRoaXMuZGVsYXkpO3RoaXMub3V0LndyaXRlQnl0ZSh0aGlzLnRyYW5zSW5kZXgpO3RoaXMub3V0LndyaXRlQnl0ZSgwKX07R0lGRW5jb2Rlci5wcm90b3R5cGUud3JpdGVJbWFnZURlc2M9ZnVuY3Rpb24oKXt0aGlzLm91dC53cml0ZUJ5dGUoNDQpO3RoaXMud3JpdGVTaG9ydCgwKTt0aGlzLndyaXRlU2hvcnQoMCk7dGhpcy53cml0ZVNob3J0KHRoaXMud2lkdGgpO3RoaXMud3JpdGVTaG9ydCh0aGlzLmhlaWdodCk7aWYodGhpcy5maXJzdEZyYW1lfHx0aGlzLmdsb2JhbFBhbGV0dGUpe3RoaXMub3V0LndyaXRlQnl0ZSgwKX1lbHNle3RoaXMub3V0LndyaXRlQnl0ZSgxMjh8MHwwfDB8dGhpcy5wYWxTaXplKX19O0dJRkVuY29kZXIucHJvdG90eXBlLndyaXRlTFNEPWZ1bmN0aW9uKCl7dGhpcy53cml0ZVNob3J0KHRoaXMud2lkdGgpO3RoaXMud3JpdGVTaG9ydCh0aGlzLmhlaWdodCk7dGhpcy5vdXQud3JpdGVCeXRlKDEyOHwxMTJ8MHx0aGlzLnBhbFNpemUpO3RoaXMub3V0LndyaXRlQnl0ZSgwKTt0aGlzLm91dC53cml0ZUJ5dGUoMCl9O0dJRkVuY29kZXIucHJvdG90eXBlLndyaXRlTmV0c2NhcGVFeHQ9ZnVuY3Rpb24oKXt0aGlzLm91dC53cml0ZUJ5dGUoMzMpO3RoaXMub3V0LndyaXRlQnl0ZSgyNTUpO3RoaXMub3V0LndyaXRlQnl0ZSgxMSk7dGhpcy5vdXQud3JpdGVVVEZCeXRlcygiTkVUU0NBUEUyLjAiKTt0aGlzLm91dC53cml0ZUJ5dGUoMyk7dGhpcy5vdXQud3JpdGVCeXRlKDEpO3RoaXMud3JpdGVTaG9ydCh0aGlzLnJlcGVhdCk7dGhpcy5vdXQud3JpdGVCeXRlKDApfTtHSUZFbmNvZGVyLnByb3RvdHlwZS53cml0ZVBhbGV0dGU9ZnVuY3Rpb24oKXt0aGlzLm91dC53cml0ZUJ5dGVzKHRoaXMuY29sb3JUYWIpO3ZhciBuPTMqMjU2LXRoaXMuY29sb3JUYWIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bjtpKyspdGhpcy5vdXQud3JpdGVCeXRlKDApfTtHSUZFbmNvZGVyLnByb3RvdHlwZS53cml0ZVNob3J0PWZ1bmN0aW9uKHBWYWx1ZSl7dGhpcy5vdXQud3JpdGVCeXRlKHBWYWx1ZSYyNTUpO3RoaXMub3V0LndyaXRlQnl0ZShwVmFsdWU+PjgmMjU1KX07R0lGRW5jb2Rlci5wcm90b3R5cGUud3JpdGVQaXhlbHM9ZnVuY3Rpb24oKXt2YXIgZW5jPW5ldyBMWldFbmNvZGVyKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQsdGhpcy5pbmRleGVkUGl4ZWxzLHRoaXMuY29sb3JEZXB0aCk7ZW5jLmVuY29kZSh0aGlzLm91dCl9O0dJRkVuY29kZXIucHJvdG90eXBlLnN0cmVhbT1mdW5jdGlvbigpe3JldHVybiB0aGlzLm91dH07bW9kdWxlLmV4cG9ydHM9R0lGRW5jb2Rlcn0seyIuL0xaV0VuY29kZXIuanMiOjIsIi4vVHlwZWROZXVRdWFudC5qcyI6M31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe3ZhciBFT0Y9LTE7dmFyIEJJVFM9MTI7dmFyIEhTSVpFPTUwMDM7dmFyIG1hc2tzPVswLDEsMyw3LDE1LDMxLDYzLDEyNywyNTUsNTExLDEwMjMsMjA0Nyw0MDk1LDgxOTEsMTYzODMsMzI3NjcsNjU1MzVdO2Z1bmN0aW9uIExaV0VuY29kZXIod2lkdGgsaGVpZ2h0LHBpeGVscyxjb2xvckRlcHRoKXt2YXIgaW5pdENvZGVTaXplPU1hdGgubWF4KDIsY29sb3JEZXB0aCk7dmFyIGFjY3VtPW5ldyBVaW50OEFycmF5KDI1Nik7dmFyIGh0YWI9bmV3IEludDMyQXJyYXkoSFNJWkUpO3ZhciBjb2RldGFiPW5ldyBJbnQzMkFycmF5KEhTSVpFKTt2YXIgY3VyX2FjY3VtLGN1cl9iaXRzPTA7dmFyIGFfY291bnQ7dmFyIGZyZWVfZW50PTA7dmFyIG1heGNvZGU7dmFyIGNsZWFyX2ZsZz1mYWxzZTt2YXIgZ19pbml0X2JpdHMsQ2xlYXJDb2RlLEVPRkNvZGU7ZnVuY3Rpb24gY2hhcl9vdXQoYyxvdXRzKXthY2N1bVthX2NvdW50KytdPWM7aWYoYV9jb3VudD49MjU0KWZsdXNoX2NoYXIob3V0cyl9ZnVuY3Rpb24gY2xfYmxvY2sob3V0cyl7Y2xfaGFzaChIU0laRSk7ZnJlZV9lbnQ9Q2xlYXJDb2RlKzI7Y2xlYXJfZmxnPXRydWU7b3V0cHV0KENsZWFyQ29kZSxvdXRzKX1mdW5jdGlvbiBjbF9oYXNoKGhzaXplKXtmb3IodmFyIGk9MDtpPGhzaXplOysraSlodGFiW2ldPS0xfWZ1bmN0aW9uIGNvbXByZXNzKGluaXRfYml0cyxvdXRzKXt2YXIgZmNvZGUsYyxpLGVudCxkaXNwLGhzaXplX3JlZyxoc2hpZnQ7Z19pbml0X2JpdHM9aW5pdF9iaXRzO2NsZWFyX2ZsZz1mYWxzZTtuX2JpdHM9Z19pbml0X2JpdHM7bWF4Y29kZT1NQVhDT0RFKG5fYml0cyk7Q2xlYXJDb2RlPTE8PGluaXRfYml0cy0xO0VPRkNvZGU9Q2xlYXJDb2RlKzE7ZnJlZV9lbnQ9Q2xlYXJDb2RlKzI7YV9jb3VudD0wO2VudD1uZXh0UGl4ZWwoKTtoc2hpZnQ9MDtmb3IoZmNvZGU9SFNJWkU7ZmNvZGU8NjU1MzY7ZmNvZGUqPTIpKytoc2hpZnQ7aHNoaWZ0PTgtaHNoaWZ0O2hzaXplX3JlZz1IU0laRTtjbF9oYXNoKGhzaXplX3JlZyk7b3V0cHV0KENsZWFyQ29kZSxvdXRzKTtvdXRlcl9sb29wOndoaWxlKChjPW5leHRQaXhlbCgpKSE9RU9GKXtmY29kZT0oYzw8QklUUykrZW50O2k9Yzw8aHNoaWZ0XmVudDtpZihodGFiW2ldPT09ZmNvZGUpe2VudD1jb2RldGFiW2ldO2NvbnRpbnVlfWVsc2UgaWYoaHRhYltpXT49MCl7ZGlzcD1oc2l6ZV9yZWctaTtpZihpPT09MClkaXNwPTE7ZG97aWYoKGktPWRpc3ApPDApaSs9aHNpemVfcmVnO2lmKGh0YWJbaV09PT1mY29kZSl7ZW50PWNvZGV0YWJbaV07Y29udGludWUgb3V0ZXJfbG9vcH19d2hpbGUoaHRhYltpXT49MCl9b3V0cHV0KGVudCxvdXRzKTtlbnQ9YztpZihmcmVlX2VudDwxPDxCSVRTKXtjb2RldGFiW2ldPWZyZWVfZW50Kys7aHRhYltpXT1mY29kZX1lbHNle2NsX2Jsb2NrKG91dHMpfX1vdXRwdXQoZW50LG91dHMpO291dHB1dChFT0ZDb2RlLG91dHMpfWZ1bmN0aW9uIGVuY29kZShvdXRzKXtvdXRzLndyaXRlQnl0ZShpbml0Q29kZVNpemUpO3JlbWFpbmluZz13aWR0aCpoZWlnaHQ7Y3VyUGl4ZWw9MDtjb21wcmVzcyhpbml0Q29kZVNpemUrMSxvdXRzKTtvdXRzLndyaXRlQnl0ZSgwKX1mdW5jdGlvbiBmbHVzaF9jaGFyKG91dHMpe2lmKGFfY291bnQ+MCl7b3V0cy53cml0ZUJ5dGUoYV9jb3VudCk7b3V0cy53cml0ZUJ5dGVzKGFjY3VtLDAsYV9jb3VudCk7YV9jb3VudD0wfX1mdW5jdGlvbiBNQVhDT0RFKG5fYml0cyl7cmV0dXJuKDE8PG5fYml0cyktMX1mdW5jdGlvbiBuZXh0UGl4ZWwoKXtpZihyZW1haW5pbmc9PT0wKXJldHVybiBFT0Y7LS1yZW1haW5pbmc7dmFyIHBpeD1waXhlbHNbY3VyUGl4ZWwrK107cmV0dXJuIHBpeCYyNTV9ZnVuY3Rpb24gb3V0cHV0KGNvZGUsb3V0cyl7Y3VyX2FjY3VtJj1tYXNrc1tjdXJfYml0c107aWYoY3VyX2JpdHM+MCljdXJfYWNjdW18PWNvZGU8PGN1cl9iaXRzO2Vsc2UgY3VyX2FjY3VtPWNvZGU7Y3VyX2JpdHMrPW5fYml0czt3aGlsZShjdXJfYml0cz49OCl7Y2hhcl9vdXQoY3VyX2FjY3VtJjI1NSxvdXRzKTtjdXJfYWNjdW0+Pj04O2N1cl9iaXRzLT04fWlmKGZyZWVfZW50Pm1heGNvZGV8fGNsZWFyX2ZsZyl7aWYoY2xlYXJfZmxnKXttYXhjb2RlPU1BWENPREUobl9iaXRzPWdfaW5pdF9iaXRzKTtjbGVhcl9mbGc9ZmFsc2V9ZWxzZXsrK25fYml0cztpZihuX2JpdHM9PUJJVFMpbWF4Y29kZT0xPDxCSVRTO2Vsc2UgbWF4Y29kZT1NQVhDT0RFKG5fYml0cyl9fWlmKGNvZGU9PUVPRkNvZGUpe3doaWxlKGN1cl9iaXRzPjApe2NoYXJfb3V0KGN1cl9hY2N1bSYyNTUsb3V0cyk7Y3VyX2FjY3VtPj49ODtjdXJfYml0cy09OH1mbHVzaF9jaGFyKG91dHMpfX10aGlzLmVuY29kZT1lbmNvZGV9bW9kdWxlLmV4cG9ydHM9TFpXRW5jb2Rlcn0se31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe3ZhciBuY3ljbGVzPTEwMDt2YXIgbmV0c2l6ZT0yNTY7dmFyIG1heG5ldHBvcz1uZXRzaXplLTE7dmFyIG5ldGJpYXNzaGlmdD00O3ZhciBpbnRiaWFzc2hpZnQ9MTY7dmFyIGludGJpYXM9MTw8aW50Ymlhc3NoaWZ0O3ZhciBnYW1tYXNoaWZ0PTEwO3ZhciBnYW1tYT0xPDxnYW1tYXNoaWZ0O3ZhciBiZXRhc2hpZnQ9MTA7dmFyIGJldGE9aW50Ymlhcz4+YmV0YXNoaWZ0O3ZhciBiZXRhZ2FtbWE9aW50Ymlhczw8Z2FtbWFzaGlmdC1iZXRhc2hpZnQ7dmFyIGluaXRyYWQ9bmV0c2l6ZT4+Mzt2YXIgcmFkaXVzYmlhc3NoaWZ0PTY7dmFyIHJhZGl1c2JpYXM9MTw8cmFkaXVzYmlhc3NoaWZ0O3ZhciBpbml0cmFkaXVzPWluaXRyYWQqcmFkaXVzYmlhczt2YXIgcmFkaXVzZGVjPTMwO3ZhciBhbHBoYWJpYXNzaGlmdD0xMDt2YXIgaW5pdGFscGhhPTE8PGFscGhhYmlhc3NoaWZ0O3ZhciBhbHBoYWRlYzt2YXIgcmFkYmlhc3NoaWZ0PTg7dmFyIHJhZGJpYXM9MTw8cmFkYmlhc3NoaWZ0O3ZhciBhbHBoYXJhZGJzaGlmdD1hbHBoYWJpYXNzaGlmdCtyYWRiaWFzc2hpZnQ7dmFyIGFscGhhcmFkYmlhcz0xPDxhbHBoYXJhZGJzaGlmdDt2YXIgcHJpbWUxPTQ5OTt2YXIgcHJpbWUyPTQ5MTt2YXIgcHJpbWUzPTQ4Nzt2YXIgcHJpbWU0PTUwMzt2YXIgbWlucGljdHVyZWJ5dGVzPTMqcHJpbWU0O2Z1bmN0aW9uIE5ldVF1YW50KHBpeGVscyxzYW1wbGVmYWMpe3ZhciBuZXR3b3JrO3ZhciBuZXRpbmRleDt2YXIgYmlhczt2YXIgZnJlcTt2YXIgcmFkcG93ZXI7ZnVuY3Rpb24gaW5pdCgpe25ldHdvcms9W107bmV0aW5kZXg9bmV3IEludDMyQXJyYXkoMjU2KTtiaWFzPW5ldyBJbnQzMkFycmF5KG5ldHNpemUpO2ZyZXE9bmV3IEludDMyQXJyYXkobmV0c2l6ZSk7cmFkcG93ZXI9bmV3IEludDMyQXJyYXkobmV0c2l6ZT4+Myk7dmFyIGksdjtmb3IoaT0wO2k8bmV0c2l6ZTtpKyspe3Y9KGk8PG5ldGJpYXNzaGlmdCs4KS9uZXRzaXplO25ldHdvcmtbaV09bmV3IEZsb2F0NjRBcnJheShbdix2LHYsMF0pO2ZyZXFbaV09aW50Ymlhcy9uZXRzaXplO2JpYXNbaV09MH19ZnVuY3Rpb24gdW5iaWFzbmV0KCl7Zm9yKHZhciBpPTA7aTxuZXRzaXplO2krKyl7bmV0d29ya1tpXVswXT4+PW5ldGJpYXNzaGlmdDtuZXR3b3JrW2ldWzFdPj49bmV0Ymlhc3NoaWZ0O25ldHdvcmtbaV1bMl0+Pj1uZXRiaWFzc2hpZnQ7bmV0d29ya1tpXVszXT1pfX1mdW5jdGlvbiBhbHRlcnNpbmdsZShhbHBoYSxpLGIsZyxyKXtuZXR3b3JrW2ldWzBdLT1hbHBoYSoobmV0d29ya1tpXVswXS1iKS9pbml0YWxwaGE7bmV0d29ya1tpXVsxXS09YWxwaGEqKG5ldHdvcmtbaV1bMV0tZykvaW5pdGFscGhhO25ldHdvcmtbaV1bMl0tPWFscGhhKihuZXR3b3JrW2ldWzJdLXIpL2luaXRhbHBoYX1mdW5jdGlvbiBhbHRlcm5laWdoKHJhZGl1cyxpLGIsZyxyKXt2YXIgbG89TWF0aC5hYnMoaS1yYWRpdXMpO3ZhciBoaT1NYXRoLm1pbihpK3JhZGl1cyxuZXRzaXplKTt2YXIgaj1pKzE7dmFyIGs9aS0xO3ZhciBtPTE7dmFyIHAsYTt3aGlsZShqPGhpfHxrPmxvKXthPXJhZHBvd2VyW20rK107aWYoajxoaSl7cD1uZXR3b3JrW2orK107cFswXS09YSoocFswXS1iKS9hbHBoYXJhZGJpYXM7cFsxXS09YSoocFsxXS1nKS9hbHBoYXJhZGJpYXM7cFsyXS09YSoocFsyXS1yKS9hbHBoYXJhZGJpYXN9aWYoaz5sbyl7cD1uZXR3b3JrW2stLV07cFswXS09YSoocFswXS1iKS9hbHBoYXJhZGJpYXM7cFsxXS09YSoocFsxXS1nKS9hbHBoYXJhZGJpYXM7cFsyXS09YSoocFsyXS1yKS9hbHBoYXJhZGJpYXN9fX1mdW5jdGlvbiBjb250ZXN0KGIsZyxyKXt2YXIgYmVzdGQ9figxPDwzMSk7dmFyIGJlc3RiaWFzZD1iZXN0ZDt2YXIgYmVzdHBvcz0tMTt2YXIgYmVzdGJpYXNwb3M9YmVzdHBvczt2YXIgaSxuLGRpc3QsYmlhc2Rpc3QsYmV0YWZyZXE7Zm9yKGk9MDtpPG5ldHNpemU7aSsrKXtuPW5ldHdvcmtbaV07ZGlzdD1NYXRoLmFicyhuWzBdLWIpK01hdGguYWJzKG5bMV0tZykrTWF0aC5hYnMoblsyXS1yKTtpZihkaXN0PGJlc3RkKXtiZXN0ZD1kaXN0O2Jlc3Rwb3M9aX1iaWFzZGlzdD1kaXN0LShiaWFzW2ldPj5pbnRiaWFzc2hpZnQtbmV0Ymlhc3NoaWZ0KTtpZihiaWFzZGlzdDxiZXN0Ymlhc2Qpe2Jlc3RiaWFzZD1iaWFzZGlzdDtiZXN0Ymlhc3Bvcz1pfWJldGFmcmVxPWZyZXFbaV0+PmJldGFzaGlmdDtmcmVxW2ldLT1iZXRhZnJlcTtiaWFzW2ldKz1iZXRhZnJlcTw8Z2FtbWFzaGlmdH1mcmVxW2Jlc3Rwb3NdKz1iZXRhO2JpYXNbYmVzdHBvc10tPWJldGFnYW1tYTtyZXR1cm4gYmVzdGJpYXNwb3N9ZnVuY3Rpb24gaW54YnVpbGQoKXt2YXIgaSxqLHAscSxzbWFsbHBvcyxzbWFsbHZhbCxwcmV2aW91c2NvbD0wLHN0YXJ0cG9zPTA7Zm9yKGk9MDtpPG5ldHNpemU7aSsrKXtwPW5ldHdvcmtbaV07c21hbGxwb3M9aTtzbWFsbHZhbD1wWzFdO2ZvcihqPWkrMTtqPG5ldHNpemU7aisrKXtxPW5ldHdvcmtbal07aWYocVsxXTxzbWFsbHZhbCl7c21hbGxwb3M9ajtzbWFsbHZhbD1xWzFdfX1xPW5ldHdvcmtbc21hbGxwb3NdO2lmKGkhPXNtYWxscG9zKXtqPXFbMF07cVswXT1wWzBdO3BbMF09ajtqPXFbMV07cVsxXT1wWzFdO3BbMV09ajtqPXFbMl07cVsyXT1wWzJdO3BbMl09ajtqPXFbM107cVszXT1wWzNdO3BbM109an1pZihzbWFsbHZhbCE9cHJldmlvdXNjb2wpe25ldGluZGV4W3ByZXZpb3VzY29sXT1zdGFydHBvcytpPj4xO2ZvcihqPXByZXZpb3VzY29sKzE7ajxzbWFsbHZhbDtqKyspbmV0aW5kZXhbal09aTtwcmV2aW91c2NvbD1zbWFsbHZhbDtzdGFydHBvcz1pfX1uZXRpbmRleFtwcmV2aW91c2NvbF09c3RhcnRwb3MrbWF4bmV0cG9zPj4xO2ZvcihqPXByZXZpb3VzY29sKzE7ajwyNTY7aisrKW5ldGluZGV4W2pdPW1heG5ldHBvc31mdW5jdGlvbiBpbnhzZWFyY2goYixnLHIpe3ZhciBhLHAsZGlzdDt2YXIgYmVzdGQ9MWUzO3ZhciBiZXN0PS0xO3ZhciBpPW5ldGluZGV4W2ddO3ZhciBqPWktMTt3aGlsZShpPG5ldHNpemV8fGo+PTApe2lmKGk8bmV0c2l6ZSl7cD1uZXR3b3JrW2ldO2Rpc3Q9cFsxXS1nO2lmKGRpc3Q+PWJlc3RkKWk9bmV0c2l6ZTtlbHNle2krKztpZihkaXN0PDApZGlzdD0tZGlzdDthPXBbMF0tYjtpZihhPDApYT0tYTtkaXN0Kz1hO2lmKGRpc3Q8YmVzdGQpe2E9cFsyXS1yO2lmKGE8MClhPS1hO2Rpc3QrPWE7aWYoZGlzdDxiZXN0ZCl7YmVzdGQ9ZGlzdDtiZXN0PXBbM119fX19aWYoaj49MCl7cD1uZXR3b3JrW2pdO2Rpc3Q9Zy1wWzFdO2lmKGRpc3Q+PWJlc3RkKWo9LTE7ZWxzZXtqLS07aWYoZGlzdDwwKWRpc3Q9LWRpc3Q7YT1wWzBdLWI7aWYoYTwwKWE9LWE7ZGlzdCs9YTtpZihkaXN0PGJlc3RkKXthPXBbMl0tcjtpZihhPDApYT0tYTtkaXN0Kz1hO2lmKGRpc3Q8YmVzdGQpe2Jlc3RkPWRpc3Q7YmVzdD1wWzNdfX19fX1yZXR1cm4gYmVzdH1mdW5jdGlvbiBsZWFybigpe3ZhciBpO3ZhciBsZW5ndGhjb3VudD1waXhlbHMubGVuZ3RoO3ZhciBhbHBoYWRlYz0zMCsoc2FtcGxlZmFjLTEpLzM7dmFyIHNhbXBsZXBpeGVscz1sZW5ndGhjb3VudC8oMypzYW1wbGVmYWMpO3ZhciBkZWx0YT1+fihzYW1wbGVwaXhlbHMvbmN5Y2xlcyk7dmFyIGFscGhhPWluaXRhbHBoYTt2YXIgcmFkaXVzPWluaXRyYWRpdXM7dmFyIHJhZD1yYWRpdXM+PnJhZGl1c2JpYXNzaGlmdDtpZihyYWQ8PTEpcmFkPTA7Zm9yKGk9MDtpPHJhZDtpKyspcmFkcG93ZXJbaV09YWxwaGEqKChyYWQqcmFkLWkqaSkqcmFkYmlhcy8ocmFkKnJhZCkpO3ZhciBzdGVwO2lmKGxlbmd0aGNvdW50PG1pbnBpY3R1cmVieXRlcyl7c2FtcGxlZmFjPTE7c3RlcD0zfWVsc2UgaWYobGVuZ3RoY291bnQlcHJpbWUxIT09MCl7c3RlcD0zKnByaW1lMX1lbHNlIGlmKGxlbmd0aGNvdW50JXByaW1lMiE9PTApe3N0ZXA9MypwcmltZTJ9ZWxzZSBpZihsZW5ndGhjb3VudCVwcmltZTMhPT0wKXtzdGVwPTMqcHJpbWUzfWVsc2V7c3RlcD0zKnByaW1lNH12YXIgYixnLHIsajt2YXIgcGl4PTA7aT0wO3doaWxlKGk8c2FtcGxlcGl4ZWxzKXtiPShwaXhlbHNbcGl4XSYyNTUpPDxuZXRiaWFzc2hpZnQ7Zz0ocGl4ZWxzW3BpeCsxXSYyNTUpPDxuZXRiaWFzc2hpZnQ7cj0ocGl4ZWxzW3BpeCsyXSYyNTUpPDxuZXRiaWFzc2hpZnQ7aj1jb250ZXN0KGIsZyxyKTthbHRlcnNpbmdsZShhbHBoYSxqLGIsZyxyKTtpZihyYWQhPT0wKWFsdGVybmVpZ2gocmFkLGosYixnLHIpO3BpeCs9c3RlcDtpZihwaXg+PWxlbmd0aGNvdW50KXBpeC09bGVuZ3RoY291bnQ7aSsrO2lmKGRlbHRhPT09MClkZWx0YT0xO2lmKGklZGVsdGE9PT0wKXthbHBoYS09YWxwaGEvYWxwaGFkZWM7cmFkaXVzLT1yYWRpdXMvcmFkaXVzZGVjO3JhZD1yYWRpdXM+PnJhZGl1c2JpYXNzaGlmdDtpZihyYWQ8PTEpcmFkPTA7Zm9yKGo9MDtqPHJhZDtqKyspcmFkcG93ZXJbal09YWxwaGEqKChyYWQqcmFkLWoqaikqcmFkYmlhcy8ocmFkKnJhZCkpfX19ZnVuY3Rpb24gYnVpbGRDb2xvcm1hcCgpe2luaXQoKTtsZWFybigpO3VuYmlhc25ldCgpO2lueGJ1aWxkKCl9dGhpcy5idWlsZENvbG9ybWFwPWJ1aWxkQ29sb3JtYXA7ZnVuY3Rpb24gZ2V0Q29sb3JtYXAoKXt2YXIgbWFwPVtdO3ZhciBpbmRleD1bXTtmb3IodmFyIGk9MDtpPG5ldHNpemU7aSsrKWluZGV4W25ldHdvcmtbaV1bM11dPWk7dmFyIGs9MDtmb3IodmFyIGw9MDtsPG5ldHNpemU7bCsrKXt2YXIgaj1pbmRleFtsXTttYXBbaysrXT1uZXR3b3JrW2pdWzBdO21hcFtrKytdPW5ldHdvcmtbal1bMV07bWFwW2srK109bmV0d29ya1tqXVsyXX1yZXR1cm4gbWFwfXRoaXMuZ2V0Q29sb3JtYXA9Z2V0Q29sb3JtYXA7dGhpcy5sb29rdXBSR0I9aW54c2VhcmNofW1vZHVsZS5leHBvcnRzPU5ldVF1YW50fSx7fV0sNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7dmFyIEdJRkVuY29kZXIscmVuZGVyRnJhbWU7R0lGRW5jb2Rlcj1yZXF1aXJlKCIuL0dJRkVuY29kZXIuanMiKTtyZW5kZXJGcmFtZT1mdW5jdGlvbihmcmFtZSl7dmFyIGVuY29kZXIscGFnZSxzdHJlYW0sdHJhbnNmZXI7ZW5jb2Rlcj1uZXcgR0lGRW5jb2RlcihmcmFtZS53aWR0aCxmcmFtZS5oZWlnaHQpO2lmKGZyYW1lLmluZGV4PT09MCl7ZW5jb2Rlci53cml0ZUhlYWRlcigpfWVsc2V7ZW5jb2Rlci5maXJzdEZyYW1lPWZhbHNlfWVuY29kZXIuc2V0VHJhbnNwYXJlbnQoZnJhbWUudHJhbnNwYXJlbnQpO2VuY29kZXIuc2V0UmVwZWF0KGZyYW1lLnJlcGVhdCk7ZW5jb2Rlci5zZXREZWxheShmcmFtZS5kZWxheSk7ZW5jb2Rlci5zZXRRdWFsaXR5KGZyYW1lLnF1YWxpdHkpO2VuY29kZXIuc2V0RGl0aGVyKGZyYW1lLmRpdGhlcik7ZW5jb2Rlci5zZXRHbG9iYWxQYWxldHRlKGZyYW1lLmdsb2JhbFBhbGV0dGUpO2VuY29kZXIuYWRkRnJhbWUoZnJhbWUuZGF0YSk7aWYoZnJhbWUubGFzdCl7ZW5jb2Rlci5maW5pc2goKX1pZihmcmFtZS5nbG9iYWxQYWxldHRlPT09dHJ1ZSl7ZnJhbWUuZ2xvYmFsUGFsZXR0ZT1lbmNvZGVyLmdldEdsb2JhbFBhbGV0dGUoKX1zdHJlYW09ZW5jb2Rlci5zdHJlYW0oKTtmcmFtZS5kYXRhPXN0cmVhbS5wYWdlcztmcmFtZS5jdXJzb3I9c3RyZWFtLmN1cnNvcjtmcmFtZS5wYWdlU2l6ZT1zdHJlYW0uY29uc3RydWN0b3IucGFnZVNpemU7aWYoZnJhbWUuY2FuVHJhbnNmZXIpe3RyYW5zZmVyPWZ1bmN0aW9uKCl7dmFyIGksbGVuLHJlZixyZXN1bHRzO3JlZj1mcmFtZS5kYXRhO3Jlc3VsdHM9W107Zm9yKGk9MCxsZW49cmVmLmxlbmd0aDtpPGxlbjtpKyspe3BhZ2U9cmVmW2ldO3Jlc3VsdHMucHVzaChwYWdlLmJ1ZmZlcil9cmV0dXJuIHJlc3VsdHN9KCk7cmV0dXJuIHNlbGYucG9zdE1lc3NhZ2UoZnJhbWUsdHJhbnNmZXIpfWVsc2V7cmV0dXJuIHNlbGYucG9zdE1lc3NhZ2UoZnJhbWUpfX07c2VsZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oZXZlbnQpe3JldHVybiByZW5kZXJGcmFtZShldmVudC5kYXRhKX19LHsiLi9HSUZFbmNvZGVyLmpzIjoxfV19LHt9LFs0XSk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpZi53b3JrZXIuanMubWFwCg==';
/*
interface IConverter {
}

interface IBaseConverter {
    converter: IConverter;
    grabFrames(scene: BABYLON.Scene, canvasElement: HTMLCanvasElement, mesh: BABYLON.Mesh): Promise<any>;
    createConverter();
    cancel();

}
*/
/**
 * The class that handles the conversion part rendering the scene into a separate context and grabbing frames creating a gif in the end.
 */
var THREE2GIFConverter = /** @class */ (function () {
    function THREE2GIFConverter(width, height, options) {
        if (width === void 0) { width = 512; }
        if (height === void 0) { height = 512; }
        this.width = width;
        this.height = height;
        var defaults = { quality: 8, framesPerSecond: 30, totalFrames: 60 };
        this.options = Object.assign(defaults, options);
        this.createConverter();
    }
    THREE2GIFConverter.prototype.createConverter = function () {
        this.gif = new gif_js__WEBPACK_IMPORTED_MODULE_0___default.a({
            repeat: 0,
            workers: 2,
            quality: this.options.quality,
            //workerScript:"libs/gif.js/gif.worker.js"
            workerScript: workerURL
        });
    };
    THREE2GIFConverter.prototype.cancel = function () {
        this.sigCancel = true;
    };
    /**
     *
     * Renders a specific amount of frames based on {@link THREE2GIFConverter.options}.
     * @param {BABYLON.Scene} scene
     * @param {HTMLCanvasElement} canvasElement
     * @param {BABYLON.Mesh} mesh
     * @returns {Promise<any>}
     */
    THREE2GIFConverter.prototype.grabFrames = function (scene, canvasElement, mesh) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var amount, fps;
            return __generator(this, function (_a) {
                amount = this.options.totalFrames, fps = this.options.framesPerSecond;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var imgNm = 0;
                        var setSize, stopCapture, captureNextFrame;
                        setSize = function () {
                            scene.getEngine().setSize(_this.width, _this.height);
                        };
                        stopCapture = function () {
                            scene.unregisterBeforeRender(setSize);
                            scene.unregisterAfterRender(captureNextFrame);
                        };
                        captureNextFrame = function () {
                            // make sure to reject if cancel flag is set
                            if (_this.sigCancel) {
                                stopCapture();
                                reject(new Error('canceled manually'));
                            }
                            if (imgNm++ < amount + 1) {
                                if (imgNm !== 1) {
                                    _this.gif.addFrame(canvasElement, { copy: true, delay: 1000 / fps });
                                }
                                // Add a constant rotation per frame.
                                var axis = new BABYLON.Vector3(-1, 1, 0);
                                var angle = Math.PI / 4;
                                var quaternionBase = BABYLON.Quaternion.RotationAxis(axis, angle);
                                var axis2 = new BABYLON.Vector3(0, 1, 0);
                                var angle2 = imgNm * 2 * Math.PI / amount;
                                var quaternionRotation = BABYLON.Quaternion.RotationAxis(axis2, angle2);
                                mesh.rotationQuaternion = quaternionRotation.multiply(quaternionBase);
                            }
                            else {
                                stopCapture();
                                resolve();
                            }
                        };
                        scene.registerBeforeRender(setSize);
                        scene.registerAfterRender(captureNextFrame);
                    })];
            });
        });
    };
    THREE2GIFConverter.prototype.startRecording = function (canvasElement, scene, mesh, progessCB) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var gif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gif = this.gif;
                        return [4 /*yield*/, this.grabFrames(scene, canvasElement, mesh)];
                    case 1:
                        _a.sent();
                        gif.on('progress', progessCB);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                gif.on('progress', function () {
                                    if (_this.sigCancel) {
                                        gif.abort();
                                        reject(new Error('canceled manually'));
                                    }
                                });
                                gif.on('finished', function (blob) {
                                    var url = URL.createObjectURL(blob);
                                    resolve({ url: url, blob: blob });
                                });
                                gif.render();
                            })];
                }
            });
        });
    };
    return THREE2GIFConverter;
}());



/***/ }),

/***/ "./src/app/utils/GIFExportPreview.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/GIFExportPreview.ts ***!
  \*******************************************/
/*! exports provided: GIFExportPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFExportPreview", function() { return GIFExportPreview; });
/* harmony import */ var _share_modal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../share-modal/config */ "./src/app/share-modal/config.ts");
/* harmony import */ var _ExportCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExportCommon */ "./src/app/utils/ExportCommon.ts");


/**
 * setup a scene where the mesh will be rendered in preview mode
 *
 *
 * TODO @7frank extends RawExportPreview
 */
var GIFExportPreview = /** @class */ (function () {
    // FIXME reset camera to default or previous after export
    function GIFExportPreview(scene, displayCanvas, camera) {
        this.scene = scene;
        this.displayCanvas = displayCanvas;
        this.camera = camera;
        this.debug = _share_modal_config__WEBPACK_IMPORTED_MODULE_0__["default"].debug;
        this.enabled = false;
        this.shadowMaps = new Map();
        this.children = new Array();
        this.initialized = false;
        this.setupPreviewElements();
    }
    GIFExportPreview.prototype.enablePreview = function (mesh) {
        this.enabled = true;
        this.currentObject = mesh;
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        this.currObjectRotation = mesh.rotationQuaternion.clone();
        this.prevCamTarget = this.camera.target.clone();
        this.prevCamPos = this.camera.position.clone();
        console.log("enablePreview", this.currObjectRotation, this.prevCamTarget, this.prevCamPos);
        if (!this.debug) {
            // this.displayCanvas.style.visibility = 'hidden';
            this.setupPreviewCamera();
        }
        this.children.forEach((function (el) {
            el.visibility = 1;
            el.isPickable = false;
        }));
        this.particles.start();
        this.spotLight.setEnabled(true);
        this.platform.visibility = 1;
        this.spotLight.setDirectionToTarget(mesh.position);
        this.addShadow(this.spotLight, mesh, 16);
    };
    GIFExportPreview.prototype.disablePreview = function () {
        this.enabled = false;
        // TODO test if reset works
        this.currentObject.rotationQuaternion = this.currObjectRotation;
        this.camera.target = this.prevCamTarget;
        this.camera.position = this.prevCamPos;
        console.log("disablePreview", this.currentObject, this.camera.target, this.camera.position);
        // this.displayCanvas.style.visibility = 'visible';
        this.scene.clearColor = this.defaultClearColor;
        this.spotLight.setEnabled(false);
        this.platform.visibility = 0;
        this.particles.stop();
        this.children.forEach((function (el) { return el.visibility = 0; }));
        // re-enable controls
        this.camera.attachControl(this.displayCanvas);
        // remove shadow of the rendered target again
        this.shadowMaps.get(this.spotLight).removeShadowCaster(this.currentObject);
    };
    GIFExportPreview.prototype.setupPreviewElements = function () {
        var _this = this;
        if (this.initialized) {
            return;
        }
        this.defaultPlatformMaterial = new BABYLON.StandardMaterial('redMat', this.scene);
        this.defaultPlatformMaterial.emissiveColor = new BABYLON.Color3(0, 0.6, 0.6);
        this.defaultClearColor = this.scene.clearColor;
        this.spotLight = Object(_ExportCommon__WEBPACK_IMPORTED_MODULE_1__["createSpotLight"])(this.scene);
        this.ground = Object(_ExportCommon__WEBPACK_IMPORTED_MODULE_1__["createGround"])(this.scene);
        this.children.push(this.ground);
        // add plattform
        var useGodrays = false;
        var res = this.createPlatform(useGodrays);
        this.platform = res.node;
        (_a = this.children).push.apply(_a, res.node.getChildMeshes());
        if (useGodrays) {
            var t_1 = 0;
            this.scene.onBeforeRenderObservable.add(function () {
                if (!_this.enabled)
                    return;
                t_1 += 0.1;
                res.setLightIntensity(0.6);
                // res.setLightIntensity(Math.cos(t) * 0.2 + 0.6);
            });
        }
        else {
            var glow_1 = new BABYLON.GlowLayer('glow', this.scene, {
                mainTextureFixedSize: 256,
                blurKernelSize: 64
            });
            var t_2 = 0;
            this.scene.onBeforeRenderObservable.add(function () {
                if (!_this.enabled)
                    return;
                t_2 += 0.1;
                glow_1.intensity = Math.cos(t_2) * 0.4 + 0.4;
                res.setLightIntensity(Math.cos(t_2) * 0.1 + 0.25);
            });
        }
        // create particles
        this.particles = Object(_ExportCommon__WEBPACK_IMPORTED_MODULE_1__["createDefaultParticleSystem"])(this.scene, this.platform);
        this.particles.renderingGroupId = 0;
        this.initialized = true;
        var _a;
        // ---------------------------------
    };
    GIFExportPreview.prototype.createPlatform = function (useGodrays) {
        if (useGodrays === void 0) { useGodrays = false; }
        var glowMat = this.defaultPlatformMaterial;
        var platform = BABYLON.MeshBuilder.CreateCylinder('plattform-inner', { tessellation: 6, height: 0.02, diameter: 0.8 }, this.scene);
        platform.material = glowMat;
        this.addShadow(this.spotLight, platform, 16);
        var node = new BABYLON.Mesh('plattform', this.scene);
        platform.parent = node;
        node.position.y = -0.45;
        node.rotation.y = Math.PI / 2;
        // platform.rotation.x = Math.PI / 2;
        platform.rotation.y = Math.PI / 2;
        platform.scaling.y = 0.01;
        platform.position.y = 0.04;
        var torus = BABYLON.Mesh.CreateTorus('plattform-middle', 1, 0.05, 6, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        var torus2 = BABYLON.Mesh.CreateTorus('plattform-outer', 1.2, 0.05, 6, this.scene, false, BABYLON.Mesh.DEFAULTSIDE);
        this.addShadow(this.spotLight, torus, 16);
        this.addShadow(this.spotLight, torus2, 16);
        torus.position.y = 0.03;
        torus.receiveShadows = true;
        torus2.receiveShadows = true;
        var transparentMat = new BABYLON.StandardMaterial('transparentMat', this.scene);
        transparentMat.diffuseColor = new BABYLON.Color3(0, 1, 1);
        transparentMat.emissiveColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        transparentMat.alpha = 0.4;
        torus.material = glowMat;
        torus2.material = glowMat;
        torus.parent = node;
        torus2.parent = node;
        torus.scaling.y = 0.1;
        torus2.scaling.y = 0.1;
        var setLightIntensity;
        if (useGodrays) {
            var hole = BABYLON.MeshBuilder.CreateCylinder('plattform-inner', { tessellation: 6, height: 0.02, diameter: 0.8 }, this.scene);
            hole.rotation.y = Math.PI / 2;
            hole.scaling.y = 0.01;
            hole.position.y = 0.04;
            var hmat = new BABYLON.StandardMaterial('hMat', this.scene);
            // hmat.diffuseColor = new BABYLON.Color4(1, 1, 1, 1);
            hmat.diffuseTexture = new BABYLON.Texture('http://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg', this.scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);
            hmat.diffuseTexture.level = 1;
            hmat.diffuseTexture.hasAlpha = false;
            hole.material = hmat;
            var godrays_1 = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, this.camera, hole, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, this.scene.getEngine(), false);
            godrays_1.mesh.position.y = -0.4;
            godrays_1.mesh.rotation.y = 0;
            godrays_1.useDiffuseColor = true;
            godrays_1.mesh.material['diffuseColor'] = new BABYLON.Color3(0, 1, 1);
            godrays_1.exposure = 0.3;
            godrays_1.decay = 0.98;
            godrays_1.weight = 0.2;
            godrays_1.density = 0.926;
            setLightIntensity = function (val) {
                godrays_1.density = val;
            };
        }
        else {
            var texture = new BABYLON.Texture('/assets/preview/light-beam-gradient.png', this.scene);
            texture.uScale = 1;
            texture.vScale = 1;
            var opTexture = new BABYLON.Texture('/assets/preview/beam-opacity.jpg', this.scene, false, true);
            opTexture.uScale = 1;
            opTexture.vScale = 1;
            var mLightMat = new BABYLON.StandardMaterial('texture4', this.scene);
            mLightMat.emissiveColor = new BABYLON.Color3(0, 1, 1);
            mLightMat.opacityTexture = opTexture;
            mLightMat.opacityTexture['wAng'] = Math.PI;
            mLightMat.opacityTexture.getAlphaFromRGB = true;
            var lightBeam_1 = Object(_ExportCommon__WEBPACK_IMPORTED_MODULE_1__["createLightTube"])([0.4, 0.5], 1, this.scene);
            this.children.push(lightBeam_1);
            lightBeam_1.position.y = .55;
            lightBeam_1.visibility = 0.1;
            lightBeam_1.parent = node;
            lightBeam_1.material = mLightMat;
            setLightIntensity = function (val) {
                lightBeam_1.visibility = val;
            };
            this.spotLight.excludedMeshes.push(lightBeam_1);
        }
        return { node: node, setLightIntensity: setLightIntensity };
    };
    GIFExportPreview.prototype.addShadow = function (light, mesh, blurKernel) {
        if (blurKernel === void 0) { blurKernel = 32; }
        // Shadows
        var shadowGenerator = this.shadowMaps.get(light);
        if (!shadowGenerator) {
            shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
            shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useKernelBlur = true;
            shadowGenerator.blurKernel = blurKernel;
            //  shadowGenerator.usePoissonSampling = true;
            //  shadowGenerator.bias = .0001;
            this.shadowMaps.set(light, shadowGenerator);
        }
        // shadowGenerator.getShadowMap().renderList.push(mesh);
        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME;
        shadowGenerator.addShadowCaster(mesh);
    };
    GIFExportPreview.prototype.setupPreviewCamera = function () {
        this.camera.detachControl(this.displayCanvas);
        this.camera.setPosition(new BABYLON.Vector3(-2, 1, 0).multiplyByFloats(0.7, 0.7, 0.7));
        this.camera.setTarget(new BABYLON.Vector3(0, -.22, 0));
        this.camera.useFramingBehavior = true;
        this.camera.wheelPrecision = 500;
        this.camera.pinchPrecision = 200;
        this.camera.minZ = 0.01;
        this.camera.lowerRadiusLimit = 0.01;
        this.camera.upperRadiusLimit = 5;
    };
    return GIFExportPreview;
}());



/***/ }),

/***/ "./src/app/utils/GIFUpload.ts":
/*!************************************!*\
  !*** ./src/app/utils/GIFUpload.ts ***!
  \************************************/
/*! exports provided: GIFUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFUpload", function() { return GIFUpload; });
function futch(url, opts, onProgress) {
    if (opts === void 0) { opts = {}; }
    return new Promise(function (res, rej) {
        var xhr = new XMLHttpRequest();
        xhr.open(opts.method || 'get', url);
        for (var k in opts.headers || {})
            xhr.setRequestHeader(k, opts.headers[k]);
        xhr.onload = function (e) { return res(e.target); };
        xhr.onerror = rej;
        if (xhr.upload && onProgress)
            xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
        xhr.send(opts.body);
    });
}
/**
 * The class handling the export of the created gif.
 */
var GIFUpload = /** @class */ (function () {
    function GIFUpload() {
        this.remoteURL = 'http://localhost:3000/api/upload';
    }
    // remoteURL = '/api/upload';
    GIFUpload.prototype.setRemote = function (remoteURL) {
        this.remoteURL = remoteURL;
        return this;
    };
    GIFUpload.prototype.uploadBlob = function (blob, fileName, progressCallback) {
        var fd = new FormData();
        fd.append('files', blob, fileName);
        return futch(this.remoteURL, {
            method: 'post',
            body: fd
        }, progressCallback)
            .then(function (res) {
            if (res.status == 404) {
                throw new Error(res.statusText);
            }
            return res.responseText;
        })
            .then(function (res) { return JSON.parse(res); });
        //.then( (res: any) => res.json());
    };
    // TODO @7frank implement deleting uploaded file in case the user cancels its intent to share
    GIFUpload.prototype.cancelLastUpload = function () {
        console.error('TODO implementation');
    };
    return GIFUpload;
}());



/***/ }),

/***/ "./src/app/utils/RawExportPreview.ts":
/*!*******************************************!*\
  !*** ./src/app/utils/RawExportPreview.ts ***!
  \*******************************************/
/*! exports provided: RawExportPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawExportPreview", function() { return RawExportPreview; });
/* harmony import */ var _share_modal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../share-modal/config */ "./src/app/share-modal/config.ts");

/**
 * setup a scene where the mesh will be rendered in preview mode
 */
var RawExportPreview = /** @class */ (function () {
    // FIXME reset camera to default or previous after export
    function RawExportPreview(scene, displayCanvas, camera) {
        this.scene = scene;
        this.displayCanvas = displayCanvas;
        this.camera = camera;
        this.debug = _share_modal_config__WEBPACK_IMPORTED_MODULE_0__["default"].debug;
        this.enabled = false;
        this.shadowMaps = new Map();
        this.children = new Array();
        this.setupPreviewElements();
    }
    RawExportPreview.prototype.enablePreview = function (mesh) {
        this.enabled = true;
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        this.currentObject = mesh;
        this.currObjectRotation = mesh.rotationQuaternion.clone();
        this.prevCamTarget = this.camera.target.clone();
        this.prevCamPos = this.camera.position.clone();
        if (!this.debug) {
            // this.displayCanvas.style.visibility = 'hidden';
            this.setupPreviewCamera();
        }
        this.children.forEach((function (el) {
            el.visibility = 1;
            el.isPickable = false;
        }));
    };
    RawExportPreview.prototype.disablePreview = function () {
        this.enabled = false;
        // TODO test if reset works
        this.currentObject.rotationQuaternion = this.currObjectRotation;
        this.camera.target = this.prevCamTarget;
        this.camera.position = this.prevCamPos;
        this.scene.clearColor = this.defaultClearColor;
        this.children.forEach((function (el) { return el.visibility = 0; }));
        // re-enable controls
        this.camera.attachControl(this.displayCanvas);
    };
    RawExportPreview.prototype.setupPreviewElements = function () {
        this.defaultClearColor = this.scene.clearColor;
        // add plattform
        var useGodrays = false;
    };
    RawExportPreview.prototype.addShadow = function (light, mesh, blurKernel) {
        if (blurKernel === void 0) { blurKernel = 32; }
        // Shadows
        var shadowGenerator = this.shadowMaps.get(light);
        if (!shadowGenerator) {
            shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
            shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useKernelBlur = true;
            shadowGenerator.blurKernel = blurKernel;
            //  shadowGenerator.usePoissonSampling = true;
            //  shadowGenerator.bias = .0001;
            this.shadowMaps.set(light, shadowGenerator);
        }
        // shadowGenerator.getShadowMap().renderList.push(mesh);
        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME;
        shadowGenerator.addShadowCaster(mesh);
    };
    RawExportPreview.prototype.setupPreviewCamera = function () {
        this.camera.detachControl(this.displayCanvas);
        this.camera.setPosition(new BABYLON.Vector3(-2, 1, 0).multiplyByFloats(0.7, 0.7, 0.7));
        this.camera.setTarget(new BABYLON.Vector3(0, -.22, 0));
        this.camera.useFramingBehavior = true;
        this.camera.wheelPrecision = 500;
        this.camera.pinchPrecision = 200;
        this.camera.minZ = 0.01;
        this.camera.lowerRadiusLimit = 0.01;
        this.camera.upperRadiusLimit = 5;
    };
    return RawExportPreview;
}());



/***/ }),

/***/ "./src/app/utils/Socket.js":
/*!*********************************!*\
  !*** ./src/app/utils/Socket.js ***!
  \*********************************/
/*! exports provided: socket, socketStartListening */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socket", function() { return socket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketStartListening", function() { return socketStartListening; });
/* harmony import */ var _share_modal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../share-modal/config */ "./src/app/share-modal/config.ts");
//import io from 'socket.io-client';


let socket = null;

function socketStartListening() {

    const io = window['io']

    if (!io) {

        // add dummy for client development
        socket = {
            on: function () {
            },
            emit: function () {
            },
        }

        console.warn("socket.io server not responding")
        return;
    }

    //  const socket = io(config.baseURL);
    socket = io.connect(_share_modal_config__WEBPACK_IMPORTED_MODULE_0__["default"].baseURL);
    socket.on('this', function (data) {
        console.log("this", data);
        socket.emit('my other event', {my: 'data'});
    });

    socket.on('connect', function (data) {
        console.log("connect", data);

    });


    socket.on('connect', function (data) {
        console.log("connect", data);

    });


}



/***/ }),

/***/ "./src/app/utils/TarExport.ts":
/*!************************************!*\
  !*** ./src/app/utils/TarExport.ts ***!
  \************************************/
/*! exports provided: TarExport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarExport", function() { return TarExport; });
/* harmony import */ var ccapture_js_src_tar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ccapture.js/src/tar */ "./node_modules/ccapture.js/src/tar.js");
/* harmony import */ var ccapture_js_src_tar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ccapture_js_src_tar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ccapture_js_src_CCapture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ccapture.js/src/CCapture.js */ "./node_modules/ccapture.js/src/CCapture.js");
/* harmony import */ var ccapture_js_src_CCapture_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ccapture_js_src_CCapture_js__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var TarExport = /** @class */ (function () {
    function TarExport(width, height, options) {
        if (width === void 0) { width = 512; }
        if (height === void 0) { height = 512; }
        this.width = width;
        this.height = height;
        var defaults = { quality: 8, framesPerSecond: 30, totalFrames: 60 };
        this.options = Object.assign(defaults, options);
        this.createConverter();
    }
    TarExport.prototype.createConverter = function () {
        /*  this.gif = new GIF({
              repeat: 0,
              workers: 2,
              quality: this.options.quality,
              //workerScript:"libs/gif.js/gif.worker.js"
              workerScript: workerURL
          });*/
        // Create a capturer that exports PNG images in a TAR file
        this.converter = new ccapture_js_src_CCapture_js__WEBPACK_IMPORTED_MODULE_1__({
            format: 'png',
            // framerate: 60,
            verbose: false,
        });
    };
    TarExport.prototype.addFrame = function (canvasElement) {
        // this.gif.addFrame(canvasElement, {copy: true, delay: 1000 / this.options.framesPerSecond});
        this.converter.capture(canvasElement);
    };
    TarExport.prototype.cancel = function () {
        this.sigCancel = true;
        // this.converter.stop();
    };
    TarExport.prototype.grabFrames = function (scene, canvasElement, mesh, progessCB) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var amount;
            return __generator(this, function (_a) {
                amount = this.options.totalFrames;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var imgNm = 0;
                        var setSize, stopCapture, captureNextFrame;
                        setSize = function () {
                            scene.getEngine().setSize(_this.width, _this.height);
                        };
                        stopCapture = function () {
                            scene.unregisterBeforeRender(setSize);
                            scene.unregisterAfterRender(captureNextFrame);
                        };
                        captureNextFrame = function () {
                            // make sure to reject if cancel flag is set
                            if (_this.sigCancel) {
                                stopCapture();
                                reject(new Error('canceled manually'));
                            }
                            if (imgNm++ < amount + 1) {
                                progessCB(imgNm / amount, "capturing");
                                //if (imgNm !== 1) {
                                _this.addFrame(canvasElement);
                                //}
                                // Add a constant rotation per frame.
                                var axis = new BABYLON.Vector3(-1, 1, 0);
                                var angle = Math.PI / 4;
                                var quaternionBase = BABYLON.Quaternion.RotationAxis(axis, angle);
                                var axis2 = new BABYLON.Vector3(0, 1, 0);
                                var angle2 = imgNm * 2 * Math.PI / amount;
                                var quaternionRotation = BABYLON.Quaternion.RotationAxis(axis2, angle2);
                                mesh.rotationQuaternion = quaternionRotation.multiply(quaternionBase);
                            }
                            else {
                                stopCapture();
                                resolve();
                            }
                        };
                        scene.registerBeforeRender(setSize);
                        scene.registerAfterRender(captureNextFrame);
                    })];
            });
        });
    };
    TarExport.prototype.startRecording = function (canvasElement, scene, mesh, progessCB) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // const gif = this.gif;
                        this.converter.start();
                        return [4 /*yield*/, this.grabFrames(scene, canvasElement, mesh, progessCB)];
                    case 1:
                        _a.sent();
                        this.converter.on('progress', progessCB);
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.converter.on('progress', function () {
                                    if (_this.sigCancel) {
                                        _this.converter.stop();
                                        reject(new Error('canceled manually'));
                                    }
                                });
                                //resolve({url: '', blob: new Blob()});
                                _this.converter.save(function (blob) {
                                    var url = URL.createObjectURL(blob);
                                    console.log("tar blob", url);
                                    resolve({ url: url, blob: blob });
                                });
                                /* gif.on('finished', function (blob) {
                                     const url = URL.createObjectURL(blob);
                                     resolve({url, blob});
                                 });
                                 gif.render();*/
                            })];
                }
            });
        });
    };
    return TarExport;
}());



/***/ }),

/***/ "./src/app/utils/Twitter.ts":
/*!**********************************!*\
  !*** ./src/app/utils/Twitter.ts ***!
  \**********************************/
/*! exports provided: updateTwitterShareButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTwitterShareButton", function() { return updateTwitterShareButton; });
/**
 * Load the twitter features in the background.
 *
 */
window.twttr = (function (d, s, id) {
    var js;
    var fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
    if (d.getElementById(id)) {
        return t;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
}(document, 'script', 'twitter-wjs'));
// FIXME @7frank the twitter share url should be an array where the first link is a gif file the second is the url of the server to visit.
// http://invision3d.org:3000/images/e353e8bc-a3b9-4163-811b-616a575b6148.gif
// #pewpew hello world http://invision3d.org:3000/api/share/1c93d5cc-ffc8-4a76-9b46-e8f99e545db8
/**
 * @deprecated
 * @param el
 * @param text
 * @param hashtags
 * @param shareURLs
 */
function updateTwitterShareButton(el, text, hashtags, shareURLs) {
    var tags = hashtags.map(function (tag) { return '#' + tag; }).join(' ');
    var urls = shareURLs.join(' ');
    var message = text + " " + tags + " " + urls;
    var url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(message);
    el.href = url;
}


/***/ }),

/***/ "./src/app/viewer.service.ts":
/*!***********************************!*\
  !*** ./src/app/viewer.service.ts ***!
  \***********************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewerService = /** @class */ (function () {
    function ViewerService() {
        this.initializedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.meshClickedSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.initialized = this.initializedSource.asObservable();
        this.meshClicked = this.meshClickedSource.asObservable();
        this.reset = this.resetSource.asObservable();
    }
    ViewerService.prototype.notifyClick = function (meshName) {
        this.meshClickedSource.next(meshName);
    };
    ViewerService.prototype.notifyInitialized = function () {
        this.initializedSource.next(true);
    };
    ViewerService.prototype.notifyReset = function () {
        this.resetSource.next();
    };
    ViewerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ViewerService);
    return ViewerService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiBaseURL: 'http://localhost:3000/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/providers/api-service.ts":
/*!**************************************!*\
  !*** ./src/providers/api-service.ts ***!
  \**************************************/
/*! exports provided: APIService, Keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import 'rxjs/add/operator/map';

/*
  Generated class for the APIService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 4 DI.
*/
var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
        // console.log('Hello ITHoursService Provider');
        //    this.load();
    }
    APIService.prototype.getAPIBaseURL = function () {
        console.log("env value is " + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL);
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseURL;
    };
    APIService.prototype.getUrl = function (append) {
        return this.getAPIBaseURL() + append;
    };
    APIService.prototype.getCRUDSharedUrl = function () {
        return this.getUrl("api/crud");
    };
    APIService.prototype.getSharedUrl = function () {
        return this.getUrl("api/shared");
    };
    APIService.prototype.getPostUrl = function () {
        return this.getUrl("api/crud/ADD");
    };
    APIService.prototype.getHeaders = function () {
        var headers = new Headers();
        headers.append('UserId', '12345');
        headers.append('DeviceId', '12345');
        return headers;
    };
    //ShowErrorAlert() {
    //    $("#error").fadeTo(2000, 500).slideUp(500, function () {
    //        $("#error").slideUp(500);
    //    });
    //}
    //ShowSuccessAlert() {
    //    $("#sucess").fadeTo(2000, 500).slideUp(500, function () {
    //        $("#sucess").slideUp(500);
    //    });
    //}
    APIService.prototype.prepareNodeJSRequestObject = function (prcId, opId, data) {
        var toSend = {
            PRCID: prcId,
            Method: opId
        };
        if (data)
            toSend.Data = data;
        else
            toSend.Data = {};
        return toSend;
    };
    //async execute1(inputData: any, showload: boolean = true) {
    //  const apiresponse = await this.http
    //    .post(this.getSharedUrl(), inputData)
    //    .toPromise();
    //  if (apiresponse) return { isapisuccess: true, apidata: apiresponse.json() };
    //  else return { isapisuccess: false, apidata: null };
    //}
    APIService.prototype.executeSubscribe = function (inputData, showload) {
        if (showload === void 0) { showload = true; }
        return this.http.post(this.getSharedUrl(), inputData);
    };
    APIService.prototype.execute = function (inputData, showload) {
        if (showload === void 0) { showload = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // don't have the data yet
                return [2 /*return*/, new Promise(function (resolve) {
                        // We're using Angular HTTP provider to request the data,
                        // then on the response, it'll map the JSON data to a parsed JS object.
                        // Next, we process the data and resolve the promise with the new data.
                        _this.http.post(_this.getSharedUrl(), inputData)
                            .subscribe(function (data) {
                            resolve({ isapisuccess: true, apidata: data });
                        }, function (error) {
                            resolve({ isapisuccess: true, apidata: null });
                        });
                    })];
            });
        });
    };
    APIService.prototype.executeByURL = function (url, inputData) {
        return __awaiter(this, void 0, void 0, function () {
            var final_url, apiresponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        final_url = this.getAPIBaseURL() + url;
                        return [4 /*yield*/, this.http.post(final_url, inputData).toPromise()];
                    case 1:
                        apiresponse = _a.sent();
                        if (apiresponse)
                            return [2 /*return*/, { isapisuccess: true, apidata: apiresponse }];
                        else
                            return [2 /*return*/, { isapisuccess: false, apidata: null }];
                        return [2 /*return*/];
                }
            });
        });
    };
    APIService.prototype.executeByPost = function (inputData, showload) {
        if (showload === void 0) { showload = true; }
        return __awaiter(this, void 0, void 0, function () {
            var sharedCRUD, apiresponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sharedCRUD = this.getCRUDSharedUrl() + "/ADD";
                        return [4 /*yield*/, this.http.post(sharedCRUD, inputData).toPromise()];
                    case 1:
                        apiresponse = _a.sent();
                        if (apiresponse)
                            return [2 /*return*/, { isapisuccess: true, apidata: apiresponse }];
                        else
                            return [2 /*return*/, { isapisuccess: false, apidata: null }];
                        return [2 /*return*/];
                }
            });
        });
    };
    APIService.prototype.executeByUpdate = function (inputData, showload) {
        if (showload === void 0) { showload = true; }
        return __awaiter(this, void 0, void 0, function () {
            var sharedCRUD, apiresponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sharedCRUD = this.getCRUDSharedUrl() + "/UPDATE";
                        return [4 /*yield*/, this.http.post(sharedCRUD, inputData).toPromise()];
                    case 1:
                        apiresponse = _a.sent();
                        if (apiresponse)
                            return [2 /*return*/, { isapisuccess: true, apidata: apiresponse }];
                        else
                            return [2 /*return*/, { isapisuccess: false, apidata: null }];
                        return [2 /*return*/];
                }
            });
        });
    };
    APIService.prototype.executeByGet = function (inputData, showload) {
        if (showload === void 0) { showload = true; }
        return __awaiter(this, void 0, void 0, function () {
            var sharedCRUD, apiresponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sharedCRUD = this.getCRUDSharedUrl() + "/GET";
                        return [4 /*yield*/, this.http.post(sharedCRUD, inputData).toPromise()];
                    case 1:
                        apiresponse = _a.sent();
                        if (apiresponse)
                            return [2 /*return*/, { isapisuccess: true, apidata: apiresponse }];
                        else
                            return [2 /*return*/, { isapisuccess: false, apidata: null }];
                        return [2 /*return*/];
                }
            });
        });
    };
    APIService.prototype.setObject = function (key, obj) {
        window.localStorage.setItem(key, JSON.stringify(obj));
    };
    APIService.prototype.getObject = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
    };
    APIService.prototype.SplitToArray = function (data) {
        var FirstCats = [];
        var SecondCats = [];
        var len = data.length;
        var counter;
        if (len % 2 == 1)
            counter = (len + 1) / 2;
        else
            counter = len / 2;
        for (var i = 0; i < counter; i++) {
            FirstCats.push(data[i]);
            //console.log(data[i].ItemId);
        }
        for (var j = counter; j < data.length; j++) {
            SecondCats.push(data[j]);
        }
        var imageArray = {
            FirstCats: FirstCats,
            SecondCats: SecondCats
        };
        return imageArray;
    };
    APIService.prototype.ConvertTo2DArray = function (data, colcount) {
        var productList = [];
        var counter = 0;
        for (var i = 0; i < data.length; i = i + colcount) {
            var row = [];
            for (var j = 0; j < colcount; j++) {
                if (counter >= data.length)
                    break;
                row.push(data[counter]);
                counter++;
            }
            productList.push(row);
        }
        return productList;
    };
    APIService.prototype.SetUpAWS = function () {
        var albumBucketName = '';
        var bucketRegion = '';
        var IdentityPoolId = '';
        AWS.config.update({
            region: 'us-west-2',
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });
        return new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: albumBucketName }
        });
    };
    APIService.prototype.showErrorMessage = function (title, test) {
        swal({
            title: title,
            text: test,
            type: 'error',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false
        });
    };
    APIService.prototype.showSuccessMessage = function (title, test) {
        swal({
            title: title,
            text: test,
            type: 'success',
            confirmButtonClass: 'btn btn-info',
            buttonsStyling: false
        });
    };
    APIService.prototype.conformationMessage = function (text1, text2) {
        return new Promise(function (resolve) {
            swal({
                title: text1,
                text: text2,
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes',
                buttonsStyling: false
            }).then(function () {
                resolve(true);
                //cb(true);
                //swal({
                //    title: 'Deleted!',
                //    text: text2,
                //    type: 'success',
                //    confirmButtonClass: 'btn btn-success',
                //    buttonsStyling: false
                //});
            });
        });
    };
    APIService.prototype.confirmMessage = function (text1, text2) {
        return new Promise(function (resolve) {
            swal({
                title: text1,
                text: text2,
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
            }).then(function () {
                resolve(true);
            });
        });
    };
    APIService.prototype.getRandomPassword = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    APIService.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    APIService.prototype.getAWSObj = function () {
        var albumBucketName = 'dolphino';
        var bucketRegion = 'us-west-2';
        var IdentityPoolId = 'us-west-2:ff182092-2a76-489c-9d58-45ba742d9e7d';
        AWS.config.update({
            region: 'us-west-2',
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });
        return new AWS.S3({
            apiVersion: '2012-10-17',
            params: { Bucket: albumBucketName }
        });
    };
    APIService.prototype.logError = function (exception) {
    };
    APIService.prototype.getYouTubeVideoIdFromUrl = function (url) {
        if (url)
            return url.replace("https://www.youtube.com/embed/", "");
        else
            return "ru0K8uYEZWw";
    };
    APIService.prototype.getYouTubePosterByVideoId = function (url) {
        return "https://img.youtube.com/vi/" + this.getYouTubeVideoIdFromUrl(url) + "/sddefault.jpg";
    };
    APIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], APIService);
    return APIService;
}());

var Keys;
(function (Keys) {
    Keys[Keys["User"] = 0] = "User";
})(Keys || (Keys = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\mywork\gun-Admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map