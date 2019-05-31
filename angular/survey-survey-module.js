(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-survey-module"],{

/***/ "./src/app/customer.component.css":
/*!****************************************!*\
  !*** ./src/app/customer.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .app-component-sidenav {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n} */\r\n\r\n.mat-sidenav-container, mat-sidenav-content{\r\n  top: 0px;\r\n  height:100%;\r\n  min-height:93vh;\r\n}\r\n\r\n.docs-container {\r\n  flex: 1;\r\n}\r\n\r\n.example-sidenav {\r\n  height: 100%;\r\n  width: 200px;\r\n}\r\n\r\napp-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  color: #fff;\r\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\nmat-sidenav {\r\n  top: 64px !important;\r\n}\r\n\r\nmat-sidenav-content {\r\n  /* width: calc(100% - 200px); */\r\n  padding: 40px;\r\n  background: #F4F6F9;\r\n}\r\n\r\n::ng-deep .mat-select-panel {\r\n  max-width: -webkit-fit-content !important;\r\n  max-width: -moz-fit-content !important;\r\n  max-width: fit-content !important;\r\n}\r\n\r\n::ng-deep .m-left .mat-drawer-inner-container\r\n{width: 200px;overflow: hidden}\r\n\r\n/* @media (max-width: 600px) {\r\n  .mat-sidenav-content {\r\n    width: 100%;\r\n  }\r\n} */\r\n\r\n/* .mat-drawer-content {\r\n  width: calc(100% - 200px);\r\n  float: right;\r\n} */\r\n\r\n@media (max-width: 600px) {\r\n  .mat-sidenav-container {\r\n    top: 44px;\r\n  }\r\n  .mat-drawer-content {\r\n    width: 100% !important;\r\n    float: none;\r\n  }\r\n  .mat-sidenav-content {\r\n    padding: 16px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOztBQUVIO0VBQ0UsUUFBUTtFQUNSLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLDhHQUE4RztBQUNoSDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQWlDO0VBQWpDLHNDQUFpQztFQUFqQyxpQ0FBaUM7QUFDbkM7O0FBQ0E7Q0FDQyxZQUFZLENBQUMsZ0JBQWdCOztBQUk5Qjs7OztHQUlHOztBQUVIOzs7R0FHRzs7QUFFSDtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYXBwLWNvbXBvbmVudC1zaWRlbmF2IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSAqL1xyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudHtcclxuICB0b3A6IDBweDtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBtaW4taGVpZ2h0Ojkzdmg7XHJcbn1cclxuXHJcbi5kb2NzLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuYXBwLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB0b3A6IDY0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTsgKi9cclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGNEY2Rjk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbCB7XHJcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubS1sZWZ0IC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lclxyXG57d2lkdGg6IDIwMHB4O292ZXJmbG93OiBoaWRkZW59XHJcblxyXG5cclxuXHJcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSAqL1xyXG5cclxuLyogLm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgdG9wOiA0NHB4O1xyXG4gIH1cclxuICAubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9XHJcbiAgLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/customer.component.html":
/*!*****************************************!*\
  !*** ./src/app/customer.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf='router.url!==\"/account/logon\"&&show_header' [drawer]='drawer'></app-header>\r\n<mat-sidenav-container class=\"mat-sidenav-container\">\r\n  <mat-sidenav class=\"m-left\" #drawer mode=\"side\" [opened]=\"show_sidebar&&!auth.mobileQuery.matches&&auth.userinfo.login_status\"\r\n  [fixedInViewport]=\"true\" [mode]=\"auth.mobileQuery.matches ? 'over' : 'side'\">\r\n    <mat-nav-list   style=\"width: 210px;overflow: auto;height: 100%;\">\r\n      <app-sidebar   *ngIf='show_sidebar'> </app-sidebar>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n<app-loading></app-loading>"

/***/ }),

/***/ "./src/app/service/survey.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/survey.service.ts ***!
  \*******************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory.service */ "./src/app/service/factory.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@7.2.15@@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyService = /** @class */ (function (_super) {
    __extends(SurveyService, _super);
    function SurveyService(http, router) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.router = router;
        return _this;
    }
    SurveyService.prototype.setAuth = function (auth) {
        this.auth = auth;
    };
    SurveyService.prototype.setLayOut = function (layout) {
        this.layout = layout;
    };
    SurveyService.prototype.hideHeaderAndBar = function () {
        this.layout.showHeaderAndBar(false);
    };
    SurveyService.prototype.showHeaderAndBar = function () {
        this.layout.showHeaderAndBar(true);
    };
    SurveyService.prototype.checkStudent = function () {
        if (this.auth.getStudentID() == 0) {
            this.router.navigateByUrl('/Home/AdvisorHome');
        }
    };
    SurveyService.prototype.getSurveyQuestions = function (sectionID, studentID) {
        var _this = this;
        if (studentID === void 0) { studentID = 0; }
        if (studentID == 0) {
            studentID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/common/getSection/?sectionID=' +
                sectionID +
                '&studentID=' +
                studentID).then(function (res) {
                resolve(res);
            });
        });
    };
    //get detail for a certain survey
    SurveyService.prototype.getSurveyDetail = function (surveyID, studentID) {
        var _this = this;
        if (studentID === void 0) { studentID = 0; }
        if (studentID == 0) {
            studentID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/common/getSurveyDetail/?surveyID=' +
                surveyID +
                '&studentID=' +
                studentID).then(function (res) {
                resolve(res);
            });
        });
    };
    //survey dashboard, use person ID
    SurveyService.prototype.getSurveyDashboard = function (personID) {
        var _this = this;
        if (personID === void 0) { personID = 0; }
        if (personID == 0) {
            personID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/common/getStudentSurveyDashboard/?studentID=' + personID).then(function (res) {
                resolve(res);
            });
        });
    };
    //analysis result for colmatch
    SurveyService.prototype.getColMatchAnalysis = function (personID) {
        var _this = this;
        if (personID === void 0) { personID = 0; }
        if (personID == 0) {
            personID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/colmatch/getColMatchAnalysis/?studentID=' + personID).then(function (res) {
                resolve(res);
            });
        });
    };
    //analysis result for learning styles
    SurveyService.prototype.getLearningStyleAnalysis = function (personID) {
        var _this = this;
        if (personID === void 0) { personID = 0; }
        if (personID == 0) {
            personID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/learningStyle/getLearningStyleAnalysis/?studentID=' + personID).then(function (res) {
                resolve(res);
            });
        });
    };
    //analysis result for find my sparks
    SurveyService.prototype.getFmsAnalysis = function (personID) {
        var _this = this;
        if (personID === void 0) { personID = 0; }
        if (personID == 0) {
            personID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/fms/getFmsAnalysis/?studentID=' + personID).then(function (res) {
                resolve(res);
            });
        });
    };
    //save after change
    SurveyService.prototype.saveSurveySectionResponses = function (sectionID, responses, studentID) {
        var _this = this;
        if (studentID === void 0) { studentID = 0; }
        if (studentID == 0) {
            studentID = this.auth.getStudentID();
        }
        var posts = {
            responses: responses
        };
        return new Promise(function (resolve) {
            _this.post('/survey/common/saveSurveySectionResponses/?sectionID=' +
                sectionID +
                '&studentID=' +
                studentID, posts).then(function (res) {
                resolve(res);
            });
        });
    };
    //update survey sharing status
    SurveyService.prototype.updateSurveySharing = function (surveyID, sharingMode, studentID) {
        var _this = this;
        if (studentID === void 0) { studentID = 0; }
        if (studentID == 0) {
            studentID = this.auth.getStudentID();
        }
        return new Promise(function (resolve) {
            _this.get('/survey/common/updateSurveySharing/?studentID=' +
                studentID +
                '&surveyID=' +
                surveyID +
                '&sharingMode=' +
                sharingMode).then(function (res) {
                resolve(res);
            });
        });
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SurveyService);
    return SurveyService;
}(_factory_service__WEBPACK_IMPORTED_MODULE_1__["FactoryService"]));



/***/ }),

/***/ "./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".analysis-intro {\r\n    color: #00396B;\r\n    font-style: italic;\r\n    font-size: 90%;\r\n}\r\n\r\n.back-circle {\r\n    border: 2px solid #E0E5EE;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    margin: 30px 0;\r\n}\r\n\r\n.rubric-title {\r\n    font-size: 16px;\r\n    color: #00396B;\r\n    font-weight: 500;\r\n    background: #E0E5EE;\r\n    padding: 16px 20px;\r\n    margin: -20px -20px 20px;\r\n}\r\n\r\n.rubric-score {\r\n    padding-left: 8px;\r\n}\r\n\r\n.rubric-desc {\r\n    color: #00396B;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2NvbG1hdGNoL2NvbG1hdGNoLWFuYWx5c2lzL2NvbG1hdGNoLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L2NvbG1hdGNoL2NvbG1hdGNoLWFuYWx5c2lzL2NvbG1hdGNoLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5hbHlzaXMtaW50cm8ge1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxufVxyXG5cclxuLmJhY2stY2lyY2xlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEU1RUU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbi5ydWJyaWMtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTVFRTtcclxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICAgIG1hcmdpbjogLTIwcHggLTIwcHggMjBweDtcclxufVxyXG5cclxuLnJ1YnJpYy1zY29yZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnJ1YnJpYy1kZXNjIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <span [innerHtml]='analysis.ScoringInformation' class=\"analysis-intro\"></span>\r\n    <div *ngFor='let rubric of analysis.rubrics' class=\"back-circle\">\r\n        <div class=\"rubric-title\">{{rubric.Name}}<span class=\"rubric-score\">{{rubric.Score}}</span></div>       \r\n        <span class=\"rubric-desc\" [innerHTML]='rubric.Description'></span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ColmatchAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColmatchAnalysisComponent", function() { return ColmatchAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColmatchAnalysisComponent = /** @class */ (function () {
    function ColmatchAnalysisComponent() {
        this.analysis = [];
    }
    ColmatchAnalysisComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColmatchAnalysisComponent.prototype, "analysis", void 0);
    ColmatchAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colmatch-analysis',
            template: __webpack_require__(/*! ./colmatch-analysis.component.html */ "./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.html"),
            styles: [__webpack_require__(/*! ./colmatch-analysis.component.css */ "./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ColmatchAnalysisComponent);
    return ColmatchAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/survey/colmatch/colmatch.component.css":
/*!********************************************************!*\
  !*** ./src/app/survey/colmatch/colmatch.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-white {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    height: 100%;\r\n}\r\n\r\n.start-button {\r\n    background: #006FD2;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    margin-left: 12px;\r\n    margin-bottom: 4px;\r\n    line-height: 32px;\r\n}\r\n\r\n::ng-deep .back-white .mat-tab-header {\r\n    margin: 20px 0;\r\n}\r\n\r\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\r\n    background-color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label {\r\n    color: #54698D;\r\n    opacity: 1 !important;\r\n    font-size: 16px;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus:not(.mat-tab-disable) {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep  .mat-tab-label-active {\r\n    color: #006FD2;\r\n    opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .back-white {\r\n        padding: 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2NvbG1hdGNoL2NvbG1hdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9jb2xtYXRjaC9jb2xtYXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2std2hpdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGFydC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNkZEMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuYmFjay13aGl0ZSAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZGRDI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzU0Njk4RDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsOmZvY3VzOm5vdCgubWF0LXRhYi1kaXNhYmxlKSB7XHJcbiAgICBjb2xvcjogIzAwNkZEMjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG59XHJcbjo6bmctZGVlcCAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYmFjay13aGl0ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/survey/colmatch/colmatch.component.html":
/*!*********************************************************!*\
  !*** ./src/app/survey/colmatch/colmatch.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-common-title [info]='info'></app-common-title>\r\n<div class=\"back-white\">\r\n    <app-description [info]='info' (exPdf)=\"configPDF()\"></app-description>\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Analysis\">\r\n            <app-colmatch-analysis [analysis]=\"analysis\"></app-colmatch-analysis>\r\n        </mat-tab>\r\n        <mat-tab label=\"Summary\">\r\n            <app-common-summary [detail]='details'></app-common-summary>\r\n        </mat-tab>\r\n        <mat-tab label=\"Progress\">\r\n            <app-common-progress [detail]='details'></app-common-progress>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/colmatch/colmatch.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/survey/colmatch/colmatch.component.ts ***!
  \*******************************************************/
/*! exports provided: ColmatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColmatchComponent", function() { return ColmatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/img-to-base64/img-to-base64.service */ "./src/app/service/img-to-base64/img-to-base64.service.ts");
/* harmony import */ var _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/export-pdf/export-pdf.service */ "./src/app/service/export-pdf/export-pdf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;


var ColmatchComponent = /** @class */ (function () {
    function ColmatchComponent(router, route, ss, cd, itb, ep) {
        this.router = router;
        this.route = route;
        this.ss = ss;
        this.cd = cd;
        this.itb = itb;
        this.ep = ep;
        this.baseLink = '/survey/common/';
        this.links = [
            { link: '/summary', label: 'Summary' },
            { link: '/progress', label: 'Survey Progress' }
        ];
        this.id = 0;
        this.info = {
            name: 'Survey',
            description: 'A survey',
            status: false,
            id: 0
        };
        this.details = [];
        this.analysis = [];
    }
    ColmatchComponent.prototype.ngOnInit = function () {
        // this.configPDF();
        this.getSurveyDetail();
        this.getColMatchAnalysis();
    };
    ColmatchComponent.prototype.getSurveyDetail = function () {
        var _this = this;
        this.ss.getSurveyDetail(12).then(function (res) {
            _this.details = res.sections;
            _this.info = res;
            _this.cd.markForCheck();
        });
    };
    ColmatchComponent.prototype.getColMatchAnalysis = function () {
        var _this = this;
        this.ss.getColMatchAnalysis().then(function (res) {
            _this.analysis = res;
            _this.cd.markForCheck();
        });
    };
    ColmatchComponent.prototype.startSurvey = function () {
        this.router.navigateByUrl('/survey/question/' + this.info.first_section);
    };
    ColmatchComponent.prototype.configPDF = function () {
        var _this = this;
        var imgList = [
            '/assets/img/report/student/College-Match.jpg',
            '/assets/img/pdfCover.png'
        ];
        // let imgList =[
        //   '/assets/img/pdfCover.png',
        //   '/assets/img/college-match.png'
        // ]
        this.itb.getImgToBaseList(imgList).then(function (result) {
            // this.ep.initConfig("College Match",
            //   "John Doe",
            //   "November 2018",
            //   result[0],
            //   "Blueprint for\nChoosing the Best\nSchool for You",
            //   result[0]);
            _this.ep.initConfig("COLLEGE MATCH", 'REPORT', 'Andy Awesome', result[1], '05/15/2019', result[0]);
            _this.ep.addContent("\n\n");
            _this.ep.addContent([
                "\n\n",
                {
                    text: "Overview",
                    color: "#3c78d8",
                    fontSize: 14
                },
                "\n\n",
                {
                    text: "This survey is from College Match: A Blueprint for Choosing the School for You, Dr.\n          Steven R. Antonoff's how-to guide for students and parents. In addition to this survey,\n          there are a dozen more worksheets included in the book. The purpose of College\n          Match is to help students find colleges where they will be happy and successful.\n          \n\n          Dr. Steven R. Antonoff is an independent educational consultant, trainer, and speaker.\n          He is former Dean of Admissions and Financial Aid and Dean of Students at the\n          University of Denver. Dr. Antonoff has worked with hundreds of families in their search\n          for good fit colleges. His articles have appeared in both professional and popular\n          publications. His presentations are for students, parents, and counselors.",
                    fontSize: 12
                },
                "\n\n",
                {
                    text: "Interpreting Your Self-Survey Scores",
                    color: "#3c78d8",
                    fontSize: 14
                },
                "\n\n",
                {
                    text: "The survey you just completed is intended to encourage you to think about yourself as\n          a college student. By looking at your scores and seeing what they mean within each\n          category, you should glean insight about yourself\u2014your attitudes, strengths and\n          weaknesses, aspirations, and fears. This information will be essential to your college\n          planning process.\n          \n\n          There is no definitive answer to what a specific score in a category means for you. In\n          the sections below, you will see words describing each category like \u201Cscores in the mid\n          30\u2019s or higher suggest . . . \u201D and \u201Clower scores suggest . . . \u201D. This lack of specificity is\n          purposeful because these scores can be evaluated in many ways. It is up to you to\n          read the descriptions and to determine what, if any, meaning a particular score has for\n          you. Your score in one category might give you insight into something important, and\n          your score in another category might be less meaningful.\n          \n\n          Finding meaning in high scores is a bit easier than doing so for lower scores, but\n          remember, there is no hard-and-fast interpretation of a lower score. In the category\n          School Enthusiasm, for example, the first paragraph interprets scores \u201Cin the mid 30\u2019s\n          or above.\u201D The next paragraph is an analysis of the meaning of \u201Clower scores,\u201D i.e., a\n          score from 0 to the mid 30\u2019s. Keep in mind that your score\u2014whether higher or lower\u2014\n          is on a continuum. Thus, your interpretation of what your score means in this area will\n          vary if your score was a single digit or in the teens versus the high 20\u2019s or low 30\u2019s. In\n          other words, the description associated with a low score might be more true of you if\n          your score was a 6 as compared with a 29.\n          \n\n          Finally, don\u2019t get hung up on the numerical aspects of the interpretation of your scores.\n          The goal here is to provide information that can serve as a springboard in your quest\n          to find colleges that are a good match for you. \u201CHigh\u201D and \u201Clow\u201D numbers are less\n          significant than using the information here to come up with match colleges that\n          correspond with your attributes and beliefs.",
                    fontSize: 12
                },
                "\n\n",
                {
                    text: "John Doe, here are YOUR results from the College Match Survey:",
                    color: "#3c78d8",
                    fontSize: 14
                },
                "\n\n",
                {
                    text: "Affection for Knowledge: 57",
                    fontSize: 10,
                    bold: true
                },
                "\n",
                {
                    text: "- If you scored in the 40\u2019s or higher here, the life of the mind is exciting to you. You may read widely on\n          a variety of topics, and you enjoy learning for the sake of learning, not because you may get a good\n          grade. You enjoy talking about ideas and philosophies and trading perspectives with others. Students\n          with high scores here should seek academic challenges and colleges that will stimulate their minds.\n          Keep in mind, however,that \u201Cbig name\u201D colleges are not the only ones that provide intellectual\n          stimulation and that there are dozens of colleges outside the Ivy League Athletic Conference that are\n          intellectually challenging. For some students, nontraditional colleges that do not stress grades may be\n          worth considering because they can offer freedom to follow your curiosity wherever it takes you, without\n          worrying about a GPA.\n          \n\n          - Lower scores suggest that you are less comfortable with intellectual ideas and concepts. Perhaps you\n          haven\u2019t yet have been exposed to compelling topics, issues, or ideas that excite you. You may not have\n          had experiences that gave you a love of learning. You will want to be cautious about applying to a\n          college that expects you to start your first semester with a serious academic focus. You may want to use\n          college as aplace to try classes or subjects with which you are unfamiliar; you might be pleasantly\n          surprised by how fascinating a new subject can be. On the other hand, if you have a few specific areas\n          that interest you, you might prefer a college where the classes are more directly related or applicable to\n          these areas.",
                    fontSize: 10
                },
                "\n",
                {
                    text: "Basic Academic Skills: 57",
                    fontSize: 10,
                    bold: true
                },
                "\n",
                {
                    text: "If you scored in the 40\u2019s or higher, you are likely to have the skills particularly valuable to success in\n          college\u2014writing, reading, note-taking, and prioritizing. You may find college a bit less demanding than\n          you expected, thanks to the strength of your academic skills. \n          \n\n          There are several considerations for the student with a lower score in this category. You may want to\n          search out colleges where some extra assistance from teachers is readily available and where you can\n          find resources and opportunities to develop your study skills. When choosing classes, think carefully\n          about the workload involved \u2014 reading requirements, term papers, and other assignments \u2014 especially\n          during freshman year. However, lower scores in this category also may reflect a student who is overly\n          critical of personal study skills but fully capable of handling the academic demands of typical freshmen\n          courses.",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Eagerness for College: 57",
                    fontSize: 10,
                    bold: true
                },
                "\n",
                {
                    text: "Scores in the high 30\u2019s or above signal that you anticipate college in a favorable way and are looking\n          forward to the collegiate experience. Adjustment will likely be easy because your enthusiasm will be a\n          great asset in learning to master college life. Although you may have some concerns about college,\n          your attitude is generally positive. Because you played a primary role in deciding to attend college, you\n          likely have specific goals to make the most of your college years. \n          \n\n          Lower scores can be interpreted in several ways. Just because you scored low here doesn\u2019t mean that\n          you are not \u201Ccollege material\u201D or are dreading the college experience. Eagerness for college tends to\n          ebb and flow during the high school years. But a lower score is worth thinking about. Are you motivated\n          to attend college? You will want to give special consideration to the ways you can make college a\n          satisfying and productive experience. Some fears about college - such as leaving home and being\n          independent - are perfectly normal. If your score was lower in this category, involving yourself in the\n          planning and decision making processes will help you feel more in control and less like you are being\n          pushed into college. But think carefully about, and seek assistance with, the timing and the nature of\n          your college years. ",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "School Enthusiasm: 54",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "If you scored in the mid 30\u2019s or higher, you probably feel comfortable with the tasks and central qualities\n          of school. In general, you like attending classes and have positive feelings about the academicnature of\n          school.\n          \n\n          If your score is lower here, there are several possible interpretations. You may enjoy some of the social\n          features of school more than the actual classes, teachers, and classroom information. You many not\n          have found school to be a successful academic experience, and your struggle with school may\n          affectyour attitude toward it. Your school attitude may impact your feelings about planning for college,\n          your willingness to enter a challenging college environment, the level of competitiveness you prefer, as\n          well as your motivation to stay in school. Do you have the motivation to be successful in college? You\n          may not have enjoyed high school because particular characteristics of your school may not have been\n          right for you. If that is the case, you have a chance to choose the college that provides the kind of\n          environment that suits you. Your analysis of the factors that matter to you in a college (Chapter 3) will\n          be particularly importantin finding a college you can be excited about attending. You also may want\n          consider these questions: Is the time right to enter college? Would you benefit from a year of travel,\n          work, or some other activity before entering college?",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Self Understanding: 54",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "A score in the high 30\u2019s and above suggests that you are in touch with your own good and bad qualities\n          and are accepting of yourself. You are fairly comfortable with who you are and don\u2019t let others direct\n          your thoughts and behaviors. This self-awareness will aid you in adjusting to college and in making\n          decisions once you enroll. You will be less prone to modulating your behavior to impress others. You\n          are comfortable with your abilities and personality and such comfort will enable you to make mature\n          decisions in college.\n          \n\n          If your score was lower here, you may be just beginning to know yourself. Teenagers\u2019 perceptions of\n          themselves are usually heavily influenced by peers. Is it possible that you are overly responsive to the\n          wishes and demands others have for you? Your focus on pleasing others may override your personal\n          wants and needs. You might find it easier to acquire self-understanding and confidence at a smaller,\n          more-supportive college than at an enormous university. Look at schools where you\u2019ll be a big fish in a\n          small pond. Lower scores are not necessarily bad! Self-understanding is a skill that is a lifetime in the\n          making.",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Career Orientation: 48",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "A score of 40 or higher in this category indicates that you view college as a means to an end, a way to\n          achieve other lifetime goals and attain a position of professional or vocational competence. Because\n          you see college as a vehicle for vocational preparation, you may want to explore professionally related\n          majors and seek colleges where you\u2019ll able to keep \u201Con track\u201D toward meeting the demands of your\n          chosen career. As you consider colleges, review the general educational requirements that students\n          must fulfill. Too many required humanities courses, for example, may be less appealing to you than the\n          freedom to concentrate on subjects of interest early on.\n          \n\n          A lower score in this category is quite common and reflects a student who wants a general, broadbased college education. You are likely very open to the wide variety of learning experiences that\n          college may bring. For you, college may be a time for academic experimentation, a place where you can\n          test a variety ofideas and career paths. You may want to explore traditional liberal art colleges with\n          many options in the humanities, social sciences, and sciences. Whether it\u2019s liberal arts or something\n          else, you are on track to discover your likes and dislikes in college.",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Academic/Social Balance: 45",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "If you scored in the high 30\u2019s and above, both academics and extracurricular experiences are\n          prioritiesfor you. You will want to choose a college where you can have a balanced life, where you can\n          pursue your studies, participate in sports or other activities, and still have some time for yourself.\n          Colleges known for a \u201Cwork hard/play hard\u201D philosophy may appeal to you, but consider your college\n          choices carefully\u2014 being certain you are not getting in \u201Cover your head.\u201D You will want to choose a\n          college where you are academically similar to the majority of students, where you are as likely as\n          anyone else to understand the material in your classes, where you are able to spend about the same\n          amount of time studying and still have a life outside of the classroom. In researching colleges, look\n          carefully at the characteristics of students who enroll. What were their grade point averages? Test\n          scores? Did they take courses in high school fairly similar to the ones you have chosen?\n          \n\n          There are several ways to interpret a lower score in this category. Perhaps you are focused more on\n          academics and want college to be all about learning. Or maybe you value your social life more than\n          your studies and want college to be all about having fun. If academics are your highest or even your\n          only priority, you may be comfortable at a college that is academically intense. If social experiences\n          matter most, you will want to consider colleges where you will have time to get involved in campus\n          activities and time for your friends.",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Participant Learner: 42",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "\u2022 If your score in this category is in the mid 30\u2019s or higher, you likely want to take an active, rather than\n          passive, approach to learning. You are not comfortable merely taking notes and regurgitating the\n          teacher\u2019s lectures\u2014you want to get involved! You normally do the homework your teachers assign, not\n          because you have to, but because it helps you learn. Likely, you participate in class discussion, enjoy it,\n          and learn from your peers. You read the textbooks and may read additional material on a topic that\n          interests you. Because learning and understanding are so important to you, you are assertive in asking\n          questions of teachers and fellow students. You likely will be most comfortable at colleges where\n          professors are readily available and lecture classes are not huge. In addition, you will want opportunities\n          for discussions and seminars as part of your college experience. High scorers should consider smaller\n          colleges.\n          \n\n          \u2022 If you scored in the lower 30\u2019s and below, you have several factors to consider. You may be interested\n          in and committed to learning but prefer to learn quietly and deliberately rather than participate verbally in\n          class.Course lectures, reading, and out-of-class assignments are normally sufficient for you to learn the\n          material.For you, class size probably will not be as significant a factor. Lower scores here suggest that\n          you may notmind being in a large class, and a bigger university would meet your needs.",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Independence: 39",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "The questions in this category focused on your willingness to make your own plans, follow your\n          instincts, and act independently of others. Are you ready to make the decisions college students face\n          every day\u2014choosing classes, setting your own schedule, negotiating with roommates, determining your\n          own social \u201Cdo\u2019s and don\u2019ts\u201D? Students who score in the 40\u2019s or higher will likely be comfortable with\n          such freedom. Having already shown that you take charge of your life, you are less apt to act\n          irresponsibly while away from home and less in need of others\u2019 approval before making important\n          decisions. In addition, given your self-sufficiency, you may not need the \u201Cexcitement\u201D of a college in a\n          large city because even at an isolated college locale you will be able to generate activities and create a\n          social network.\n          \n\n          If your scores were lower, you may still be transitioning from dependence to independence. Rather than\n          be overwhelmed by choices your freshman year, you may want some decisions made for you. Some\n          colleges provide more structure, such as a core curriculum or series of required classes, and offer a\n          range of planned activities and events to attend. You may also need to work on self-discipline and\n          practice assuming responsibility for your decisions and their consequences. A smaller college could\n          provide the perfect environment for gradually building your self-confidence and independence",
                    fontSize: 10,
                },
                "\n",
                {
                    text: "Social Consciousness: 39",
                    fontSize: 10,
                    bold: true,
                },
                "\n",
                {
                    text: "Scores in the high 30\u2019s and above suggest you care about the world and may not be satisfied with the\n          status quo. Your concern about the state of the world may influence your life and lead you to seek\n          outlets for your compassion and empathy. Colleges that might appeal to you include those with political\n          action committees, volunteer opportunities, or other activities geared to reaching out beyond the bounds\n          of campus. Some colleges place an explicit value on recognizing one\u2019s responsibility to the world.\n          \n\n          Lower scores here could have several connotations. You may not be sensitive to or aware of the\n          numerous opportunities for social responsibility. You may be comfortable pursuing your individual goals,\n          or you may have other priorities. A low score doesn\u2019t mean you don\u2019t have a social conscience! It may\n          merely reflect that, at present, the drive to help others is less strong than other motivators in your life.",
                    fontSize: 10,
                },
                "\n",
            ]);
            _this.ep.openPdf();
        });
    };
    ColmatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colmatch',
            template: __webpack_require__(/*! ./colmatch.component.html */ "./src/app/survey/colmatch/colmatch.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./colmatch.component.css */ "./src/app/survey/colmatch/colmatch.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_5__["ImgToBase64Service"],
            _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportPdfService"]])
    ], ColmatchComponent);
    return ColmatchComponent;
}());



/***/ }),

/***/ "./src/app/survey/common/common-title/common-title.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/survey/common/common-title/common-title.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-button {\r\n    background: #006FD2;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    margin-left: 12px;\r\n    margin-bottom: 4px;\r\n    line-height: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2NvbW1vbi9jb21tb24tdGl0bGUvY29tbW9uLXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L2NvbW1vbi9jb21tb24tdGl0bGUvY29tbW9uLXRpdGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDZGRDI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/survey/common/common-title/common-title.component.html":
/*!************************************************************************!*\
  !*** ./src/app/survey/common/common-title/common-title.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">{{info.Name}}\r\n  <span><button mat-button (click)='startSurvey()' class=\"start-button\">Start</button></span>\r\n</h4>"

/***/ }),

/***/ "./src/app/survey/common/common-title/common-title.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/survey/common/common-title/common-title.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommonTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonTitleComponent", function() { return CommonTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/survey.service */ "./src/app/service/survey.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonTitleComponent = /** @class */ (function () {
    function CommonTitleComponent(router, route, cd, ss, auth) {
        this.router = router;
        this.route = route;
        this.cd = cd;
        this.ss = ss;
        this.auth = auth;
        this.title = '';
        this.description = '';
        this.status = false;
        this.id = 0;
    }
    CommonTitleComponent.prototype.ngDoCheck = function () {
        this.updateInfo();
    };
    CommonTitleComponent.prototype.updateInfo = function () {
        // this.title = this.info.Name;
        // this.description = this.info.LongDescription;
        // this.status = this.info.status;
        // this.id = this.info.id;
        // this.cd.markForCheck();
    };
    CommonTitleComponent.prototype.ngOnInit = function () { };
    CommonTitleComponent.prototype.startSurvey = function () {
        this.router.navigateByUrl('/survey/question/' + this.info.first_section);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonTitleComponent.prototype, "info", void 0);
    CommonTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-title',
            template: __webpack_require__(/*! ./common-title.component.html */ "./src/app/survey/common/common-title/common-title.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./common-title.component.css */ "./src/app/survey/common/common-title/common-title.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CommonTitleComponent);
    return CommonTitleComponent;
}());



/***/ }),

/***/ "./src/app/survey/common/common.component.css":
/*!****************************************************!*\
  !*** ./src/app/survey/common/common.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-white {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    height: 100%;\r\n}\r\n\r\n.start-button {\r\n    background: #006FD2;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    margin-left: 12px;\r\n    margin-bottom: 4px;\r\n    line-height: 32px;\r\n}\r\n\r\n::ng-deep .back-white .mat-tab-header {\r\n    margin: 20px 0;\r\n}\r\n\r\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\r\n    background-color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label {\r\n    color: #54698D;\r\n    opacity: 1 !important;\r\n    font-size: 16px;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus:not(.mat-tab-disable) {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep  .mat-tab-label-active {\r\n    color: #006FD2;\r\n    opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .back-white {\r\n        padding: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2NvbW1vbi9jb21tb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L2NvbW1vbi9jb21tb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDZGRDI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmFjay13aGl0ZSAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZGRDI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzU0Njk4RDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsOmZvY3VzOm5vdCgubWF0LXRhYi1kaXNhYmxlKSB7XHJcbiAgICBjb2xvcjogIzAwNkZEMjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG59XHJcbjo6bmctZGVlcCAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYmFjay13aGl0ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/survey/common/common.component.html":
/*!*****************************************************!*\
  !*** ./src/app/survey/common/common.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-common-title [info]='info'></app-common-title>\r\n<div class=\"back-white\">   \r\n    <app-description [info]='info'></app-description>\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Summary\">\r\n            <app-common-summary [detail]='details'></app-common-summary>\r\n        </mat-tab>\r\n        <mat-tab label=\"Progress\">\r\n            <app-common-progress [detail]='details'></app-common-progress>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/common/common.component.ts":
/*!***************************************************!*\
  !*** ./src/app/survey/common/common.component.ts ***!
  \***************************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonComponent = /** @class */ (function () {
    function CommonComponent(router, route, ss, cd) {
        this.router = router;
        this.route = route;
        this.ss = ss;
        this.cd = cd;
        this.baseLink = '/survey/common/';
        this.links = [
            { link: '/summary', label: 'Summary' },
            { link: '/progress', label: 'Survey Progress' }
        ];
        this.id = 0;
        this.info = {
            name: 'Survey',
            description: 'A survey',
            status: false,
            id: 0
        };
        this.details = [];
    }
    CommonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.id = data['id'];
            _this.getSurveyDetail();
        });
    };
    CommonComponent.prototype.getSurveyDetail = function () {
        var _this = this;
        this.ss.getSurveyDetail(this.id).then(function (res) {
            _this.details = res.sections;
            _this.info = res;
            _this.cd.markForCheck();
        });
    };
    CommonComponent.prototype.startSurvey = function () {
        this.router.navigateByUrl('/survey/question/' + this.info.first_section);
    };
    CommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common',
            template: __webpack_require__(/*! ./common.component.html */ "./src/app/survey/common/common.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./common.component.css */ "./src/app/survey/common/common.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CommonComponent);
    return CommonComponent;
}());



/***/ }),

/***/ "./src/app/survey/common/progress/common-progress.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/survey/common/progress/common-progress.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-name {\r\n    color: #00396B;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.progress-detail {\r\n    color: #00396B;\r\n    font-size: 14px;\r\n    padding-top: 2px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.padding-left {\r\n    padding-left: 20px;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: #97C846;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-buffer {\r\n    background-color: #EDF6E3;\r\n}\r\n\r\n::ng-deep .mat-progress-bar {\r\n    height: 16px !important;\r\n    border-radius: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2NvbW1vbi9wcm9ncmVzcy9jb21tb24tcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXkvY29tbW9uL3Byb2dyZXNzL2NvbW1vbi1wcm9ncmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tbmFtZSB7XHJcbiAgICBjb2xvcjogIzAwMzk2QjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZGV0YWlsIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy1sZWZ0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5N0M4NDY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERjZFMztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/survey/common/progress/common-progress.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/survey/common/progress/common-progress.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngFor='let section of detail'>\r\n    <div class=\"section-name\">{{section.Name}}</div>\r\n    <mat-progress-bar mode=\"determinate\" value=\"{{section.questions.complete.required_done/section.questions.complete.required*100}}\"></mat-progress-bar>\r\n    <div class=\"progress-detail\">Questions Required {{section.questions.complete.required_done}} / {{section.questions.complete.required}} <span class=\"padding-left\">Completed {{section.questions.complete.done}} / {{section.questions.complete.all}}</span></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/common/progress/common-progress.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/survey/common/progress/common-progress.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommonProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonProgressComponent", function() { return CommonProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonProgressComponent = /** @class */ (function () {
    function CommonProgressComponent() {
        this.detail = [];
        this.results = [
            {
                name: 'a',
                percent: 20,
                questions: {
                    required: {
                        done: 3,
                        total: 10
                    },
                    all: {
                        done: 7,
                        total: 35
                    }
                }
            },
        ];
    }
    CommonProgressComponent.prototype.ngOnInit = function () {
    };
    CommonProgressComponent.prototype.ngDoCheck = function () {
    };
    CommonProgressComponent.prototype.getSummary = function (id) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonProgressComponent.prototype, "detail", void 0);
    CommonProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-progress',
            template: __webpack_require__(/*! ./common-progress.component.html */ "./src/app/survey/common/progress/common-progress.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./common-progress.component.css */ "./src/app/survey/common/progress/common-progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonProgressComponent);
    return CommonProgressComponent;
}());



/***/ }),

/***/ "./src/app/survey/common/summary/common-summary.component.css":
/*!********************************************************************!*\
  !*** ./src/app/survey/common/summary/common-summary.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-circle {\r\n    border: 2px solid #E0E5EE;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    margin: 30px 0;\r\n}\r\n\r\n.rubric-title {\r\n    font-size: 16px;\r\n    color: #00396B;\r\n    font-weight: 500;\r\n    background: #E0E5EE;\r\n    padding: 16px 20px;\r\n    margin: -20px -20px 20px;\r\n}\r\n\r\n.back-circle li:nth-of-type(odd) {\r\n    background: #F4F6F9;\r\n}\r\n\r\n.back-circle ul li {\r\n    list-style: none;\r\n    padding: 12px 18px;\r\n    font-size: 14px;\r\n    color: #00396B;\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n\r\n.back-circle ul {\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n}\r\n\r\n.question-name {\r\n    width: 78%\r\n}\r\n\r\n.question-answer {\r\n    float: right;\r\n    width: 20%;\r\n    padding-left: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2NvbW1vbi9zdW1tYXJ5L2NvbW1vbi1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L2NvbW1vbi9zdW1tYXJ5L2NvbW1vbi1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1jaXJjbGUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTVFRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuLnJ1YnJpYy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMzk2QjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFNUVFO1xyXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAtMjBweCAtMjBweCAyMHB4O1xyXG59XHJcblxyXG4uYmFjay1jaXJjbGUgbGk6bnRoLW9mLXR5cGUob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNkY5O1xyXG59XHJcblxyXG4uYmFjay1jaXJjbGUgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEycHggMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYmFjay1jaXJjbGUgdWwge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uLW5hbWUge1xyXG4gICAgd2lkdGg6IDc4JVxyXG59XHJcblxyXG4ucXVlc3Rpb24tYW5zd2VyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/survey/common/summary/common-summary.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/survey/common/summary/common-summary.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back-circle\" *ngFor='let section of detail'>\r\n    <div class=\"rubric-title\">{{section.Name}}</div>\r\n    <ul>\r\n        <li *ngFor='let question of section.questions.list'>\r\n            <span class=\"question-name\">\r\n            <span>{{question.Name}}</span></span>\r\n            <span class=\"question-answer\">{{question.Answer}}</span>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/common/summary/common-summary.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/survey/common/summary/common-summary.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommonSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSummaryComponent", function() { return CommonSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonSummaryComponent = /** @class */ (function () {
    function CommonSummaryComponent() {
        this.detail = [];
        this.list = [
            {
                name: 'a',
                questions: [
                    { name: 'b', index: 1 },
                    { name: 'c', index: 2 },
                ]
            },
        ];
    }
    CommonSummaryComponent.prototype.ngOnInit = function () {
    };
    CommonSummaryComponent.prototype.ngDoCheck = function () {
        this.getSummary(this.id);
    };
    CommonSummaryComponent.prototype.getSummary = function (id) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonSummaryComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommonSummaryComponent.prototype, "detail", void 0);
    CommonSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-summary',
            template: __webpack_require__(/*! ./common-summary.component.html */ "./src/app/survey/common/summary/common-summary.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./common-summary.component.css */ "./src/app/survey/common/summary/common-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonSummaryComponent);
    return CommonSummaryComponent;
}());



/***/ }),

/***/ "./src/app/survey/dashboard/dashboard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/survey/dashboard/dashboard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\r\n    color: #061C3F;\r\n}\r\n\r\n.survey-cate {\r\n    color: #00396B;\r\n    padding-bottom: 10px;\r\n    padding-top: 20px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.survey-card-name {\r\n    color: #00396B;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.survey-main-card {\r\n    display: inline-block;\r\n    cursor:pointer;\r\n    outline: none;\r\n}\r\n\r\n.survey-main-card:hover .survey-card-name {\r\n    color: #005FB2;\r\n}\r\n\r\n.survey-card {\r\n    width: 200px;\r\n    height: 180px;\r\n    background: #fff;\r\n    margin: 0 10px 0 0;\r\n    border-radius: 6px;\r\n    padding: 16px 20px;\r\n    z-index: 1;\r\n    display: inline-table;\r\n}\r\n\r\n.survey-status {\r\n    background: #C4DFD6;\r\n    color: #04844B;\r\n    width: 200px;\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    height: 60px;\r\n    margin: -20px 10px 10px 0;\r\n    border-radius: 6px;\r\n    z-index: 8888;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 0.25px;\r\n}\r\n\r\n.survey-status-progress {\r\n    background: #F7E3CA;\r\n    color: #4D4D4D;\r\n    width: 200px;\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    height: 60px;\r\n    margin: -20px 10px 10px 0;\r\n    border-radius: 6px;\r\n    z-index: 8888;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 0.25px;\r\n}\r\n\r\n.survey-status-no {\r\n    background: #EAD0D2;\r\n    color: #C23934;\r\n    width: 200px;\r\n    text-align: center;\r\n    padding-top: 30px;\r\n    height: 60px;\r\n    margin: -20px 10px 10px 0;\r\n    border-radius: 6px;\r\n    z-index: 8888;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    letter-spacing: 0.25px;\r\n}\r\n\r\n.survey-data {\r\n    font-size: 13px;\r\n    color: #54698D;\r\n}\r\n\r\n.survey-data-detail {\r\n    font-size: 14px;\r\n    color: #005FB2;\r\n    font-weight: 500;\r\n    padding-right: 8px;\r\n    display: inline-block;\r\n    line-height: 14px;\r\n}\r\n\r\n.survey-data-group {\r\n    padding-bottom: 4px;\r\n}\r\n\r\napp-completion-chart {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .survey-card-name {\r\n        font-size: 16px;\r\n    }\r\n    .survey-card,\r\n    .survey-status,\r\n    .survey-status-progress,\r\n    .survey-status-no {\r\n        width: 160px;\r\n    }\r\n    .survey-align {\r\n        text-align: center;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7Ozs7UUFJSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogIzA2MUMzRjtcclxufVxyXG5cclxuLnN1cnZleS1jYXRlIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5zdXJ2ZXktY2FyZC1uYW1lIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uc3VydmV5LW1haW4tY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zdXJ2ZXktbWFpbi1jYXJkOmhvdmVyIC5zdXJ2ZXktY2FyZC1uYW1lIHtcclxuICAgIGNvbG9yOiAjMDA1RkIyO1xyXG59XHJcblxyXG4uc3VydmV5LWNhcmQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDAgMTBweCAwIDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG59XHJcblxyXG4uc3VydmV5LXN0YXR1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzRERkQ2O1xyXG4gICAgY29sb3I6ICMwNDg0NEI7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogLTIwcHggMTBweCAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB6LWluZGV4OiA4ODg4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbn1cclxuXHJcbi5zdXJ2ZXktc3RhdHVzLXByb2dyZXNzIHtcclxuICAgIGJhY2tncm91bmQ6ICNGN0UzQ0E7XHJcbiAgICBjb2xvcjogIzRENEQ0RDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAtMjBweCAxMHB4IDEwcHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHotaW5kZXg6IDg4ODg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxufVxyXG5cclxuLnN1cnZleS1zdGF0dXMtbm8ge1xyXG4gICAgYmFja2dyb3VuZDogI0VBRDBEMjtcclxuICAgIGNvbG9yOiAjQzIzOTM0O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IC0yMHB4IDEwcHggMTBweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgei1pbmRleDogODg4ODtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG59XHJcblxyXG4uc3VydmV5LWRhdGEge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM1NDY5OEQ7XHJcbn1cclxuXHJcbi5zdXJ2ZXktZGF0YS1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDVGQjI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5zdXJ2ZXktZGF0YS1ncm91cCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG5hcHAtY29tcGxldGlvbi1jaGFydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zdXJ2ZXktY2FyZC1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuc3VydmV5LWNhcmQsXHJcbiAgICAuc3VydmV5LXN0YXR1cyxcclxuICAgIC5zdXJ2ZXktc3RhdHVzLXByb2dyZXNzLFxyXG4gICAgLnN1cnZleS1zdGF0dXMtbm8ge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgIH1cclxuICAgIC5zdXJ2ZXktYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/survey/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/survey/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"card-title\">Survey Dashoard</h4>\r\n<app-completion-chart [data]='multi'></app-completion-chart>\r\n<div *ngFor='let cate of surveys'>\r\n    <div class=\"survey-align\">\r\n    <div class=\"survey-cate\">{{cate.name}}</div>\r\n    <div *ngFor='let survey of cate.survey' class=\"survey-main-card\" routerLink='{{survey.url}}'>\r\n        <div class=\"survey-card\">\r\n            <div class=\"survey-card-name\">{{survey.Name}}</div>\r\n            <span class=\"survey-data\" *ngIf='survey.ratio==0'></span>\r\n            <span class=\"survey-data\" *ngIf='survey.ratio>0'>\r\n                <span *ngIf='survey.ID==1'>\r\n                        <div>\r\n                            Personality Traits: <div class=\"survey-data-group\"><span  class=\"survey-data-detail\">{{survey.analysis.personal.Name}}</span></div>\r\n                        </div>\r\n                        <div>\r\n                            College Styles: <div class=\"survey-data-group\"><span class=\"survey-data-detail\">{{survey.analysis.college_career.CollegeStyles.Name}}</span></div>\r\n                        </div>\r\n                </span>\r\n                <span *ngIf='survey.ID==2523'>\r\n                        <div>\r\n                            Receptive Style: <div class=\"survey-data-group\"><span *ngFor='let style of survey.analysis.Receptive.max' class=\"survey-data-detail\">{{style}}</span></div>\r\n                        </div>\r\n                        <div>\r\n                            Social Style: <div class=\"survey-data-group\"><span *ngFor='let style of survey.analysis.Social.max' class=\"survey-data-detail\">{{style}}</span></div>\r\n                        </div>\r\n                </span>\r\n                <span *ngIf='survey.ID==12'>\r\n                    <div *ngFor='let rubric of survey.analysis'>\r\n                        {{rubric.Name}}:\r\n                        <div class=\"survey-data-group\"><span class=\"survey-data-detail\">{{rubric.Score}}</span></div>\r\n                    </div>\r\n                </span>\r\n            </span>\r\n        </div>\r\n        <div class=\"survey-status-no\" *ngIf='survey.ratio==0'>Not Started</div>\r\n        <div class=\"survey-status-progress\" *ngIf='survey.ratio>0&&survey.ratio<1'>{{(survey.ratio*100)| number:'1.0-0'}}% Complete</div>\r\n        <div class=\"survey-status\" *ngIf='survey.ratio==1'>Completed</div>\r\n        <!-- Not started - color: #C23934; Background: #EAD0D2;\r\n        xx% Complete - color: #4D4D4D; Background: #F7E3CA; -->\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n<!-- <h4 class=\"card-title\">Survey Dashoard</h4>\r\n<app-completion-chart [data]='multi'></app-completion-chart>\r\n<div *ngFor='let cate of surveys'>\r\n    <div class=\"survey-cate\">{{cate.name}}</div>\r\n    <div *ngFor='let survey of cate.survey' [style.backgroundColor]='cate.color'>\r\n        <div class=\"survey-card-name\">{{survey.Name}}</div>\r\n        <span>{{survey.ratio}}</span>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/survey/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/survey/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @title Basic grid-list
 */
// @Component({
//   selector: 'app-survey-dashboard',  
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css'],
// })
// export class GridListOverviewExample {}
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, route, cd, ss) {
        this.router = router;
        this.route = route;
        this.cd = cd;
        this.ss = ss;
        this.multi = [
            {
                name: 'Surveys',
                series: [
                    {
                        name: 'Not Started',
                        value: 3
                    },
                    {
                        name: 'In-Progress',
                        value: 4
                    },
                    {
                        name: 'Finished',
                        value: 8
                    }
                ]
            }
        ];
        this.surveys = [
            {
                name: 'Learn',
                color: '#5AA454',
                survey: [
                    {
                        name: 'Find My Spark',
                        status: 'In Progress',
                        id: 1,
                        questions: {
                            finished: 1,
                            total: 2
                        }
                    },
                    {
                        name: 'College Match',
                        status: 'Completed',
                        id: 2,
                        questions: {
                            finished: 2,
                            total: 2
                        }
                    }
                ]
            },
            {
                name: 'Explore',
                color: '#C7B42C',
                survey: [
                    {
                        name: 'Explore #1',
                        status: 'In Progress',
                        id: 3,
                        questions: {
                            finished: 1,
                            total: 2
                        }
                    },
                    {
                        name: 'Explore #2',
                        status: 'Completed',
                        id: 4,
                        questions: {
                            finished: 2,
                            total: 2
                        }
                    }
                ]
            }
        ];
        this.colors = { Explore: '#C7B42C', Learn: '#5AA454', Record: '#123332' };
        // Object.assign(this, { single, multi });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getSurveyDashboard().then(function (res) {
            var keylist = Object.keys(res);
            _this.surveys = [];
            var freq = [0, 0, 0];
            for (var _i = 0, keylist_1 = keylist; _i < keylist_1.length; _i++) {
                var key = keylist_1[_i];
                _this.surveys.push({
                    name: key,
                    color: _this.colors[key],
                    survey: res[key]
                });
                for (var _a = 0, _b = res[key]; _a < _b.length; _a++) {
                    var survey = _b[_a];
                    if (survey.ratio === 0) {
                        freq[0]++;
                    }
                    if (survey.ratio > 0 && survey.ratio < 1) {
                        freq[1]++;
                    }
                    if (survey.ratio === 1) {
                        freq[2]++;
                    }
                }
            }
            for (var i = 0; i < 3; i++) {
                _this.multi[0]['series'][i]['value'] = freq[i];
            }
            _this.multi = JSON.parse(JSON.stringify(_this.multi));
            _this.cd.markForCheck();
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/survey/dashboard/dashboard.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/survey/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/survey/description/description.component.css":
/*!**************************************************************!*\
  !*** ./src/app/survey/description/description.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\r\n    color: #061C3F;\r\n    font-size: 20px;\r\n}\r\n\r\n.back-white {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    height: 100%;\r\n}\r\n\r\n.survey-logo {\r\n    width: 120px;\r\n    float: left;\r\n    margin-right: 16px;\r\n}\r\n\r\n.survey-description {\r\n   display: inline-block;\r\n}\r\n\r\n.see-survey {\r\n    color: #00396B;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    padding-bottom: 4px;\r\n}\r\n\r\n.btn-see-survey {\r\n    background: #fff;\r\n    padding: 3px 12px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    border: 2px solid #C9D2DF;\r\n    float: left;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.icon-circle {\r\n    color: #00396B;\r\n    border-radius: 24px;\r\n    width: 44px;\r\n    height: 44px;\r\n    padding: 0 !important;\r\n    min-width: 44px !important;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-form-field-appearance-legacy .mat-form-field-ripple {\r\n    height: 0;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-form-field-appearance-legacy .mat-form-field-underline {\r\n    height: 0;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-form-field-appearance-legacy .mat-form-field-wrapper {\r\n    padding-bottom: 0;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-form-field-infix {\r\n    border-top: none;\r\n    width: 136px;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-select-arrow-wrapper {\r\n    padding-top: 2px;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label, .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    -webkit-transform: translateY(-0.0em) scale(1) perspective(0px) translateZ(.001px) !important;\r\n            transform: translateY(-0.0em) scale(1) perspective(0px) translateZ(.001px) !important;\r\n    color: #54698D;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-form-field-appearance-legacy .mat-form-field-label {\r\n    color: #54698D;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-select-arrow {\r\n    margin: 0px;\r\n}\r\n\r\n::ng-deep .btn-see-survey .mat-select-value {\r\n    color: #006FD2;\r\n    font-weight: 500;\r\n}\r\n\r\n::ng-deep .cdk-overlay-pane {\r\n    -webkit-transform: translateX(-14px) translateY(30px) !important;\r\n            transform: translateX(-14px) translateY(30px) !important;\r\n}\r\n\r\n.survey-status {\r\n    color: #00396B;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    clear: both;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.survey-status-c {\r\n    color: #04844B;\r\n    padding-left: 4px;\r\n}\r\n\r\n.survey-print {\r\n    color: #00396B;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    clear: both;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.print-icon {\r\n    margin-top: -4px;\r\n}\r\n\r\n.print-icon:hover {\r\n    color: #006FD2;\r\n}\r\n\r\n.survey-right {\r\n    float: right;\r\n}\r\n\r\n::ng-deep .back-white .mat-stroked-button {\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    border: 2px solid #C9D2DF;\r\n    color: #006FD2;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .survey-right {\r\n        margin-top: 20px;\r\n        float: left;\r\n    }\r\n    .survey-description {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLHFCQUFxQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2RkFBcUY7WUFBckYscUZBQXFGO0lBQ3JGLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdFQUF3RDtZQUF4RCx3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwNjFDM0Y7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5iYWNrLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3VydmV5LWxvZ28ge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zdXJ2ZXktZGVzY3JpcHRpb24ge1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zZWUtc3VydmV5IHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5idG4tc2VlLXN1cnZleSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzlEMkRGO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uaWNvbi1jaXJjbGUge1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgd2lkdGg6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDQ0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5idG4tc2VlLXN1cnZleSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnRuLXNlZS1zdXJ2ZXkgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJ0bi1zZWUtc3VydmV5IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5idG4tc2VlLXN1cnZleSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIHdpZHRoOiAxMzZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5idG4tc2VlLXN1cnZleSAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnRuLXNlZS1zdXJ2ZXkgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMGVtKSBzY2FsZSgxKSBwZXJzcGVjdGl2ZSgwcHgpIHRyYW5zbGF0ZVooLjAwMXB4KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1NDY5OEQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYnRuLXNlZS1zdXJ2ZXkgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzU0Njk4RDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5idG4tc2VlLXN1cnZleSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5idG4tc2VlLXN1cnZleSAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICBjb2xvcjogIzAwNkZEMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE0cHgpIHRyYW5zbGF0ZVkoMzBweCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1cnZleS1zdGF0dXMge1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5zdXJ2ZXktc3RhdHVzLWMge1xyXG4gICAgY29sb3I6ICMwNDg0NEI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLnN1cnZleS1wcmludCB7XHJcbiAgICBjb2xvcjogIzAwMzk2QjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnByaW50LWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLnByaW50LWljb246aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDZGRDI7XHJcbn1cclxuXHJcbi5zdXJ2ZXktcmlnaHQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2std2hpdGUgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQzlEMkRGO1xyXG4gICAgY29sb3I6ICMwMDZGRDI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zdXJ2ZXktcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuc3VydmV5LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/survey/description/description.component.html":
/*!***************************************************************!*\
  !*** ./src/app/survey/description/description.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n            <!-- {{info.RelativeImagePath}} -->\r\n            <div class=\"survey-description\">\r\n                <img class=\"survey-logo\" src=\"/assets/img/college-match.png\">\r\n                {{info.LongDescription}}\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"survey-right\">\r\n                <div class=\"see-survey\">Who Can See This Survey</div>\r\n                <div class=\"btn-see-survey\">\r\n                    <mat-form-field>\r\n                        <mat-select [ngModel]='info.sharing' (selectionChange)='updateSharing($event)'>\r\n                            <mat-option [value]=\"0\">\r\n                                Shared\r\n                            </mat-option>\r\n                            <mat-option [value]=\"1\">\r\n                                Private\r\n                            </mat-option>\r\n                            <mat-option [value]=\"2\">\r\n                                With Advisors\r\n                            </mat-option>\r\n                            <mat-option [value]=\"3\">\r\n                                With Contributors\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"survey-status\">Survey Status<span class=\"survey-status-c\"\r\n                        *ngIf='info.completed==1'>Completed</span><span class=\"survey-status-i\"\r\n                        *ngIf='info.completed<1 && info.completed>0'>In Progress</span><span class=\"survey-status-i\"\r\n                        *ngIf=' info.completed==0'>Not Started</span></div>\r\n               <div><button mat-stroked-button *ngIf='info.completed==1'>Notify Advisors</button></div>      \r\n               <span (click)=\"exportPdf()\"><button mat-button class=\"print-icon icon-circle\" matTooltip=\"Export to PDF\" [matTooltipPosition]=\"'below'\" [matTooltipClass]=\"'tooltiptext'\"><mat-icon class=\"print-icon\">picture_as_pdf</mat-icon></button></span>\r\n               <span><button mat-button class=\"print-icon icon-circle\" matTooltip=\"Export to Excel\" [matTooltipPosition]=\"'below'\" [matTooltipClass]=\"'tooltiptext'\"><mat-icon class=\"print-icon\">library_books</mat-icon></button></span>\r\n               <span><button mat-button class=\"print-icon icon-circle\" matTooltip=\"Print\" [matTooltipPosition]=\"'below'\" [matTooltipClass]=\"'tooltiptext'\"><mat-icon class=\"print-icon\">print</mat-icon></button></span>\r\n                <!-- <div class=\"see-survey\"><img width=\"20\" height=\"20\" src=\"./assets/img/pdf-icon.svg\" /> Export to PDF</div>\r\n                <div class=\"see-survey\"><img width=\"20\" height=\"20\" src=\"./assets/img/excel-icons.svg\" /> Export to\r\n                    Excel</div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/survey/description/description.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/survey/description/description.component.ts ***!
  \*************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent(router, route, cd, ss, auth) {
        this.router = router;
        this.route = route;
        this.cd = cd;
        this.ss = ss;
        this.auth = auth;
        this.exPdf = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = '';
        this.description = '';
        this.status = false;
        this.id = 0;
        this.test = null;
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent.prototype.ngDoCheck = function () {
        this.updateInfo();
    };
    DescriptionComponent.prototype.exportPdf = function () {
        this.exPdf.emit();
    };
    DescriptionComponent.prototype.updateInfo = function () {
        // this.title = this.info.Name;
        // this.description = this.info.LongDescription;
        // this.status = this.info.status;
        // this.id = this.info.id;
        // this.cd.markForCheck();
    };
    DescriptionComponent.prototype.startSurvey = function () {
        this.router.navigateByUrl('/survey/question/' + this.info.first_section);
    };
    DescriptionComponent.prototype.updateSharing = function ($event) {
        this.ss.updateSurveySharing(this.info.ID, $event.value).then(function (res) {
            // this.info.ID = res;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DescriptionComponent.prototype, "info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DescriptionComponent.prototype, "exPdf", void 0);
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/survey/description/description.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/survey/description/description.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/survey/efc/efc-base/efc-base.component.css":
/*!************************************************************!*\
  !*** ./src/app/survey/efc/efc-base/efc-base.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9lZmMvZWZjLWJhc2UvZWZjLWJhc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/survey/efc/efc-base/efc-base.component.html":
/*!*************************************************************!*\
  !*** ./src/app/survey/efc/efc-base/efc-base.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  efc-base works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/survey/efc/efc-base/efc-base.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/survey/efc/efc-base/efc-base.component.ts ***!
  \***********************************************************/
/*! exports provided: EfcBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfcBaseComponent", function() { return EfcBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EfcBaseComponent = /** @class */ (function () {
    function EfcBaseComponent() {
    }
    EfcBaseComponent.prototype.ngOnInit = function () {
    };
    EfcBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-efc-base',
            template: __webpack_require__(/*! ./efc-base.component.html */ "./src/app/survey/efc/efc-base/efc-base.component.html"),
            styles: [__webpack_require__(/*! ./efc-base.component.css */ "./src/app/survey/efc/efc-base/efc-base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EfcBaseComponent);
    return EfcBaseComponent;
}());



/***/ }),

/***/ "./src/app/survey/efc/efc-category/efc-category.component.css":
/*!********************************************************************!*\
  !*** ./src/app/survey/efc/efc-category/efc-category.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9lZmMvZWZjLWNhdGVnb3J5L2VmYy1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/survey/efc/efc-category/efc-category.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/survey/efc/efc-category/efc-category.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  efc-category works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/survey/efc/efc-category/efc-category.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/survey/efc/efc-category/efc-category.component.ts ***!
  \*******************************************************************/
/*! exports provided: EfcCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfcCategoryComponent", function() { return EfcCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EfcCategoryComponent = /** @class */ (function () {
    function EfcCategoryComponent() {
    }
    EfcCategoryComponent.prototype.ngOnInit = function () {
    };
    EfcCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-efc-category',
            template: __webpack_require__(/*! ./efc-category.component.html */ "./src/app/survey/efc/efc-category/efc-category.component.html"),
            styles: [__webpack_require__(/*! ./efc-category.component.css */ "./src/app/survey/efc/efc-category/efc-category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EfcCategoryComponent);
    return EfcCategoryComponent;
}());



/***/ }),

/***/ "./src/app/survey/efc/efc-question-item/efc-question-item.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/survey/efc/efc-question-item/efc-question-item.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9lZmMvZWZjLXF1ZXN0aW9uLWl0ZW0vZWZjLXF1ZXN0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/survey/efc/efc-question-item/efc-question-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/survey/efc/efc-question-item/efc-question-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n  {{question.name}} <span class=\"rq-notice\" *ngIf='question.required==1'>Rq</span>\r\n  <span *ngIf='question.responseType==\"yes/no\"||question.responseType==\"choice\"'>\r\n    <mat-radio-group *ngIf='question.responseType==\"yes/no\"' [formControl]='control' (change)='checkQuestions()' >\r\n      <mat-radio-button *ngFor='let choice of question.choices' [value]=\"choice.ID\">{{choice.name}}</mat-radio-button>\r\n    </mat-radio-group>\r\n    <mat-select *ngIf='question.responseType==\"choice\"' [formControl]='control'\r\n      (change)='checkQuestions()' placeholder='Choose An Option'>\r\n      <mat-option *ngFor='let choice of question.choices' [value]=\"choice.ID\" class=\"choose-option\">\r\n        {{choice.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </span>\r\n  <!-- <mat-form-field *ngIf='question.SurveyQuestionTypeID==2||question.SurveyQuestionTypeID==3||question.SurveyQuestionTypeID==5'>\r\n        <input matInput [(ngModel)]='question.response.SurveyQuestionTextResponse' matInput>\r\n    </mat-form-field> -->\r\n\r\n  <!-- <span *ngIf='question.responseType==\"multi choice\"'>\r\n\r\n    <app-multi-checkbox [choices]='question.choices' [(data)]='question.response.text'></app-multi-checkbox>\r\n    <app-multi-select [choices]='question.choices' [(data)]='question.response.text'></app-multi-select>\r\n  </span> -->\r\n</li>"

/***/ }),

/***/ "./src/app/survey/efc/efc-question-item/efc-question-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/survey/efc/efc-question-item/efc-question-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EfcQuestionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfcQuestionItemComponent", function() { return EfcQuestionItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EfcQuestionItemComponent = /** @class */ (function () {
    function EfcQuestionItemComponent() {
    }
    EfcQuestionItemComponent.prototype.ngOnInit = function () {
    };
    EfcQuestionItemComponent.prototype.checkQuestions = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EfcQuestionItemComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EfcQuestionItemComponent.prototype, "questionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EfcQuestionItemComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EfcQuestionItemComponent.prototype, "controlChange", void 0);
    EfcQuestionItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-efc-question-item',
            template: __webpack_require__(/*! ./efc-question-item.component.html */ "./src/app/survey/efc/efc-question-item/efc-question-item.component.html"),
            styles: [__webpack_require__(/*! ./efc-question-item.component.css */ "./src/app/survey/efc/efc-question-item/efc-question-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EfcQuestionItemComponent);
    return EfcQuestionItemComponent;
}());



/***/ }),

/***/ "./src/app/survey/efc/efc-sample/efc-sample.component.css":
/*!****************************************************************!*\
  !*** ./src/app/survey/efc/efc-sample/efc-sample.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9lZmMvZWZjLXNhbXBsZS9lZmMtc2FtcGxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/survey/efc/efc-sample/efc-sample.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/survey/efc/efc-sample/efc-sample.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"back-white-2\">\r\n<ul>\r\n<li >\r\n  <app-efc-question-item [question]='list[0]' [control]='control1'></app-efc-question-item>\r\n</li>\r\n<li>\r\n    <app-efc-question-item [question]='list[1]' [control]='control2' *ngIf='control1.value==1'></app-efc-question-item>\r\n</li>\r\n\r\n<li >\r\n    <app-efc-question-item [question]='list[2]' [control]='control3'></app-efc-question-item>\r\n  </li>\r\n  <li>\r\n      <app-efc-question-item [question]='list[3]' [control]='control4' *ngIf='control3.value==1'></app-efc-question-item>\r\n  </li>\r\n\r\n<li >\r\n    <app-efc-question-item [question]='list[4]' [control]='control5'></app-efc-question-item>\r\n  </li>\r\n</ul>\r\n</div>\r\n<div class=\"back-white-2\">\r\n    <button mat-button class=\"save-btn\" (click)='save()'>Save</button>\r\n    <button mat-button class=\"cancel-btn\" (click)='cancel()'>Cancel</button>\r\n    <!-- <button mat-button class=\"save-exit-btn\" *ngIf='section.nextSectionID==undefined' (click)='save(1,true)'>Save\r\n        and Exit</button> -->\r\n    <button mat-button class=\"save-next-btn\" *ngIf='control5.value==1' (click)='save(1)'>Save and\r\n        Next</button>\r\n    <!-- <button mat-button class=\"pre-btn\" *ngIf='section.prevSectionID!==undefined' (click)='save(-1)'>Previous Section</button> -->\r\n</div>\r\n\r\n<mat-form-field>\r\n  <mat-select multiple #mSelect [(ngModel)]='multi_list'>\r\n    <mat-option (click)='selectAll(mSelect)' [value]=\"'all'\">Select All</mat-option>\r\n    <mat-option *ngFor=\"let topping of toppingList\"  [value]=\"topping\">{{topping}}</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<button (click)='checkMulti()'>check multi</button>"

/***/ }),

/***/ "./src/app/survey/efc/efc-sample/efc-sample.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/survey/efc/efc-sample/efc-sample.component.ts ***!
  \***************************************************************/
/*! exports provided: EfcSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfcSampleComponent", function() { return EfcSampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/_@angular_forms@7.2.15@@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/_@angular_material@7.3.7@@angular/material/esm5/select.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EfcSampleComponent = /** @class */ (function () {
    function EfcSampleComponent() {
        this.list = [
            {
                ID: '1.1',
                name: 'This is question 1',
                responseType: 'choice',
                required: 1,
                constraints: [],
                choices: [
                    { ID: 1, name: 'Choice 1' },
                    { ID: 2, name: 'Choice 2' },
                    { ID: 3, name: 'Choice 3' },
                    { ID: 4, name: 'Choice 4' },
                    { ID: 5, name: 'Choice 5' }
                ]
            }, {
                ID: '1.2',
                name: 'This is question 2',
                responseType: 'choice',
                required: 1,
                constraints: {
                    1.1: 1
                },
                choices: [
                    { ID: 1, name: 'Choice 1' },
                    { ID: 2, name: 'Choice 2' },
                    { ID: 3, name: 'Choice 3' },
                    { ID: 4, name: 'Choice 4' },
                    { ID: 5, name: 'Choice 5' }
                ]
            },
            {
                ID: '1.3',
                name: 'This is question 3',
                responseType: 'choice',
                required: 1,
                constraints: [],
                choices: [
                    { ID: 1, name: 'Choice 1' },
                    { ID: 2, name: 'Choice 2' },
                    { ID: 3, name: 'Choice 3' },
                    { ID: 4, name: 'Choice 4' },
                    { ID: 5, name: 'Choice 5' }
                ]
            }, {
                ID: '1.4',
                name: 'This is question 4',
                responseType: 'choice',
                required: 1,
                constraints: {
                    1.1: 1
                },
                choices: [
                    { ID: 1, name: 'Choice 1' },
                    { ID: 2, name: 'Choice 2' },
                    { ID: 3, name: 'Choice 3' },
                    { ID: 4, name: 'Choice 4' },
                    { ID: 5, name: 'Choice 5' }
                ]
            },
            {
                ID: '1.5',
                name: 'This is question 5',
                responseType: 'choice',
                required: 1,
                constraints: [],
                choices: [
                    { ID: 1, name: 'Choice 1' },
                    { ID: 2, name: 'Choice 2' },
                    { ID: 3, name: 'Choice 3' },
                    { ID: 4, name: 'Choice 4' },
                    { ID: 5, name: 'Choice 5' }
                ]
            }
        ];
        this.control1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.control2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.control3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.control4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.control5 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.multi_list = [];
    }
    EfcSampleComponent.prototype.ngOnInit = function () {
    };
    EfcSampleComponent.prototype.selectAll = function (mSelect) {
        // mSelect.options
        var options = mSelect.options.toArray();
        var selected = options[0].selected;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            if (selected) {
                option.select();
            }
            else {
                option.deselect();
            }
        }
    };
    EfcSampleComponent.prototype.checkMulti = function () {
        console.log(this.multi_list);
    };
    EfcSampleComponent.prototype.save = function (a) {
        if (a === void 0) { a = null; }
    };
    EfcSampleComponent.prototype.cancel = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mSelect'),
        __metadata("design:type", _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"])
    ], EfcSampleComponent.prototype, "mSelect", void 0);
    EfcSampleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-efc-sample',
            template: __webpack_require__(/*! ./efc-sample.component.html */ "./src/app/survey/efc/efc-sample/efc-sample.component.html"),
            styles: [__webpack_require__(/*! ./efc-sample.component.css */ "./src/app/survey/efc/efc-sample/efc-sample.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EfcSampleComponent);
    return EfcSampleComponent;
}());



/***/ }),

/***/ "./src/app/survey/efc/efc-strategy/efc-strategy.component.css":
/*!********************************************************************!*\
  !*** ./src/app/survey/efc/efc-strategy/efc-strategy.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9lZmMvZWZjLXN0cmF0ZWd5L2VmYy1zdHJhdGVneS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/survey/efc/efc-strategy/efc-strategy.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/survey/efc/efc-strategy/efc-strategy.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  efc-strategy works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/survey/efc/efc-strategy/efc-strategy.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/survey/efc/efc-strategy/efc-strategy.component.ts ***!
  \*******************************************************************/
/*! exports provided: EfcStrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfcStrategyComponent", function() { return EfcStrategyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EfcStrategyComponent = /** @class */ (function () {
    function EfcStrategyComponent() {
    }
    EfcStrategyComponent.prototype.ngOnInit = function () {
    };
    EfcStrategyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-efc-strategy',
            template: __webpack_require__(/*! ./efc-strategy.component.html */ "./src/app/survey/efc/efc-strategy/efc-strategy.component.html"),
            styles: [__webpack_require__(/*! ./efc-strategy.component.css */ "./src/app/survey/efc/efc-strategy/efc-strategy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EfcStrategyComponent);
    return EfcStrategyComponent;
}());



/***/ }),

/***/ "./src/app/survey/efc/efc.component.css":
/*!**********************************************!*\
  !*** ./src/app/survey/efc/efc.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-viewport {\r\n    height: 200px;\r\n    width: 200px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.example-item {\r\n    height: 50px;\r\n}\r\n\r\n.chart{\r\n    width: 490px;\r\n    min-height: 240px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2VmYy9lZmMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXkvZWZjL2VmYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pdGVtIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uY2hhcnR7XHJcbiAgICB3aWR0aDogNDkwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/survey/efc/efc.component.html":
/*!***********************************************!*\
  !*** ./src/app/survey/efc/efc.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-common-title [info]='info'></app-common-title>\r\n<app-description [info]='info' (exPdf)=\"exportPdfClick()\"></app-description>\r\n<app-infinite-scroll [items]=\"items\" (update)='updateList($event)' [size] = '50'>\r\n  <ng-template  let-item scrollItem>\r\n    <div class='example-item'>\r\n      {{item}}\r\n    </div>\r\n  </ng-template>\r\n</app-infinite-scroll>\r\n<button (click)='new_items()'></button>\r\n<div class=\"chart\" #charts [chart]=\"plansChart\" style=\"display:none\"></div>\r\n<mat-tab-group>\r\n  <mat-tab label=\"Summary\">\r\n    <app-common-summary [detail]='details'></app-common-summary>\r\n  </mat-tab>\r\n  <mat-tab label=\"Progress\">\r\n    <app-common-progress [detail]='details'></app-common-progress>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/survey/efc/efc.component.ts":
/*!*********************************************!*\
  !*** ./src/app/survey/efc/efc.component.ts ***!
  \*********************************************/
/*! exports provided: EfcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfcComponent", function() { return EfcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/_rxjs@6.3.3@rxjs/_esm5/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! canvg */ "./node_modules/_canvg@1.5.3@canvg/dist/browser/canvg.min.js");
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(canvg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/_angular-highcharts@6.2.6@angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/img-to-base64/img-to-base64.service */ "./src/app/service/img-to-base64/img-to-base64.service.ts");
/* harmony import */ var _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/export-pdf/export-pdf.service */ "./src/app/service/export-pdf/export-pdf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;




var EfcComponent = /** @class */ (function () {
    function EfcComponent(router, route, itb, ep) {
        this.router = router;
        this.route = route;
        this.itb = itb;
        this.ep = ep;
        this.theEnd = false;
        this.baseLink = '/survey/common/';
        this.links = [
            { link: '/summary', label: 'Summary' },
            { link: '/progress', label: 'Survey Progress' }
        ];
        this.id = 0;
        this.info = {
            name: 'Survey',
            description: 'A survey',
            status: false,
            id: 0
        };
        this.details = [];
        this.items = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EfcComponent.prototype.ngOnInit = function () {
        this.items = Array.from({ length: 100 }).map(function (_, i) { return "Item #" + i; });
        this.list = this.subject.asObservable();
        this.subject.next(this.items);
        this.initChart();
    };
    EfcComponent.prototype.initChart = function () {
        this.plansChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_6__["Chart"]({
            chart: {
                type: 'bar',
                marginBottom: 50
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['Approved', 'Not Approved'],
                title: {
                    text: null
                },
                tickLength: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of plans',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                },
                tickLength: 0
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                        // ,allowOverlap 默认是 false，即不允许数据标签重叠
                    },
                    pointWidth: 36
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: [
                        {
                            color: '#60ae8b',
                            y: 131
                        },
                        {
                            color: '#c07d7b',
                            y: 70
                        }
                    ]
                }]
        });
    };
    EfcComponent.prototype.exportPdfClick = function () {
        this.exportPdf();
    };
    EfcComponent.prototype.updateList = function ($event) {
        var items = Array.from({ length: 100 }).map(function (_, i) { return "Item #1" + i; });
        this.items.push.apply(this.items, items);
    };
    EfcComponent.prototype.new_items = function () {
        this.items = Array.from({ length: 100 }).map(function (_, i) { return "Item #" + i; });
    };
    EfcComponent.prototype.configPdf = function () {
        var _this = this;
        var imgList = [
            '/assets/img/report/student/EFC-Calculator.jpg',
            '/assets/img/pdfCover.png'
        ];
        this.itb.getImgToBaseList(imgList).then(function (result) {
            _this.ep.initConfig("EFC CALCULATOR", 'REPORT', 'Andy Awesome', result[1], '05/15/2019', result[0]);
            _this.ep.addContent([
                { text: 'Introduction', style: 'bluetitle', bold: true },
                "Introducing a new way to look at college affordability \u2013 the EFC Calculator from\n        GuidedPath! Funding college is not a one size fits all proposition. Families need to\n        know how their unique family situation fits into the financial aid process. The EFC\n        Calculator is an Expected Family Contribution (EFC) calculator that takes each family\u2019s\n        unique situation into account to generate a specialized strategy for reducing college\n        costs. \n\n",
                "Proven effective, families have used these strategies for over twenty years to be proactive\n        when making financial plans for college. Learn more about how the EFC\n        Calculator survey is designed to help families understand how to best pay for their\n        child's college education. The EFC Calculator identifies families as being in one of\n        three categories. Specialized strategies for each category are provided to families,\n        giving them an opportunity to plan and maximize college options.",
                { text: '2019-2020 Expected Family Contribution (FM: $20058 IM: $31089)', style: 'bluetitle', bold: true },
                {
                    table: {
                        widths: ['*', '*', '*'],
                        headerRows: 1,
                        body: [
                            ['Income/Asset Item', 'Federal (FM)', 'Institutional (IM)'],
                            ['Parent Income Contribution', '$15,029', '$18,185'],
                            ['Parent Asset Contribution', '$3,033', '$9,182'],
                            ['Student Income Contribution', '$397', '$1,722'],
                            ['Student Asset Contribution', '$397', '$2,000'],
                            ['Expected Family Contributio', '$20,058', '$31,089']
                        ]
                    },
                    layout: 'headerLineOnly',
                    style: 'size'
                },
                { text: '2019-2020 Contribution From Income (FM: $15426 IM: $19907)', style: 'bluetitle', bold: true },
                {
                    table: {
                        widths: [160, '*', '*', '*', '*'],
                        body: [
                            [
                                {
                                    border: [false, false, false, true],
                                    text: 'Income Item',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Parent (FM)',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Student (FM) ',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Parent (IM)',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Student (IM)',
                                    bold: true
                                },
                            ],
                            [
                                {
                                    text: 'Total Income',
                                    border: undefined
                                },
                                {
                                    text: '$125,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$1,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$125,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$1,000.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Income Protection Allowance',
                                    border: undefined
                                },
                                {
                                    text: '$52,240.00',
                                    border: undefined
                                },
                                {
                                    text: '$0.00',
                                    border: undefined
                                },
                                {
                                    text: '$45,345.00',
                                    border: undefined
                                },
                                {
                                    text: '',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'FICA',
                                    border: undefined
                                },
                                {
                                    text: '$9,180.00',
                                    border: undefined
                                },
                                {
                                    text: '$77.00',
                                    border: undefined
                                },
                                {
                                    text: '$9,180.00',
                                    border: undefined
                                },
                                {
                                    text: '$77.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Income Protection Allowance',
                                    border: undefined
                                },
                                {
                                    text: '$52,240.00',
                                    border: undefined
                                },
                                {
                                    text: '$0.00',
                                    border: undefined
                                },
                                {
                                    text: '$45,345.00',
                                    border: undefined
                                },
                                {
                                    text: '',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Federal Taxes',
                                    border: undefined
                                },
                                {
                                    text: '$12,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$100.00',
                                    border: undefined
                                },
                                {
                                    text: '$12,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$100.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'State and other tax allowances',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Total Income Allowances',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$81,170.00',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$207.00 $74',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$74,245.00',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$207.00',
                                    border: [false, true, false, false],
                                    bold: true
                                }
                            ],
                            [
                                {
                                    text: 'Available Income',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$43,830.00',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$794.00',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$50,755.00',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$794.00',
                                    border: undefined,
                                    bold: true
                                }
                            ],
                            [
                                {
                                    text: 'Contribution from Income',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$81,170.00',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$207.00 $74',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$74,245.00',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$207.00',
                                    border: [false, false, false, true],
                                    bold: true
                                }
                            ],
                            [
                                {
                                    text: 'Marginal Rate',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                }
                            ],
                        ],
                    },
                    layout: {
                        defaultBorder: false,
                    },
                    style: 'size'
                },
                {
                    layout: "noBorders",
                    width: ['*', '*'],
                    table: {
                        headerRows: 0,
                        body: [
                            [{
                                    image: _this.charsBaseSrc,
                                    alignment: "center",
                                    width: 240,
                                    height: 180
                                },
                                {
                                    image: _this.charsBaseSrc,
                                    alignment: "center",
                                    width: 240,
                                    height: 180
                                }]
                        ]
                    }
                },
                { text: '2019-2020 Contribution From Assets (FM: $4633 IM: $11182)', style: 'bluetitle', bold: true },
                {
                    table: {
                        widths: [160, '*', '*', '*', '*'],
                        body: [
                            [
                                {
                                    border: [false, false, false, true],
                                    text: 'Asset Item',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Parent (FM)',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Student (FM) ',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Parent (IM)',
                                    bold: true
                                },
                                {
                                    border: [false, false, false, true],
                                    text: 'Student (IM)',
                                    bold: true
                                },
                            ],
                            [
                                {
                                    text: 'Cash and Savings',
                                    border: undefined
                                },
                                {
                                    text: '$125,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$1,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$125,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$1,000.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Other Investments',
                                    border: undefined
                                },
                                {
                                    text: '$52,240.00',
                                    border: undefined
                                },
                                {
                                    text: '$0.00',
                                    border: undefined
                                },
                                {
                                    text: '$45,345.00',
                                    border: undefined
                                },
                                {
                                    text: '',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Net Home Equity',
                                    border: undefined
                                },
                                {
                                    text: '$9,180.00',
                                    border: undefined
                                },
                                {
                                    text: '$77.00',
                                    border: undefined
                                },
                                {
                                    text: '$9,180.00',
                                    border: undefined
                                },
                                {
                                    text: '$77.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Net Worth Business/Farm',
                                    border: undefined
                                },
                                {
                                    text: '$52,240.00',
                                    border: undefined
                                },
                                {
                                    text: '$0.00',
                                    border: undefined
                                },
                                {
                                    text: '$45,345.00',
                                    border: undefined
                                },
                                {
                                    text: '',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Adjusted net worth Business/Farm',
                                    border: undefined
                                },
                                {
                                    text: '$12,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$100.00',
                                    border: undefined
                                },
                                {
                                    text: '$12,000.00',
                                    border: undefined
                                },
                                {
                                    text: '$100.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'State and other tax allowances',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                }
                            ],
                            [
                                {
                                    text: 'Total Income Allowances',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$81,170.00',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$207.00 $74',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$74,245.00',
                                    border: [false, true, false, false],
                                    bold: true
                                },
                                {
                                    text: '$207.00',
                                    border: [false, true, false, false],
                                    bold: true
                                }
                            ],
                            [
                                {
                                    text: 'Available Income',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$43,830.00',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$794.00',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$50,755.00',
                                    border: undefined,
                                    bold: true
                                },
                                {
                                    text: '$794.00',
                                    border: undefined,
                                    bold: true
                                }
                            ],
                            [
                                {
                                    text: 'Contribution from Income',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$81,170.00',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$207.00 $74',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$74,245.00',
                                    border: [false, false, false, true],
                                    bold: true
                                },
                                {
                                    text: '$207.00',
                                    border: [false, false, false, true],
                                    bold: true
                                }
                            ],
                            [
                                {
                                    text: 'Marginal Rate for Contribution (DNW)',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                },
                                {
                                    text: '$3,750.00',
                                    border: undefined
                                },
                                {
                                    text: '$30.00',
                                    border: undefined
                                }
                            ],
                        ],
                    },
                    layout: {
                        defaultBorder: false,
                    },
                    style: 'size'
                },
                { text: 'John Doe Need and Strategy Category: Partial', style: 'purpletitle', bold: true },
                { text: 'Partial Need Category', style: 'subtitle', bold: true },
                'Characteristics\n\n',
                {
                    ul: [
                        'Partial Need is defined as a federal FM EFC between $11,000 and $40,000.',
                        'A Partial Need student will have approximately the same out of pocket expense for attending public or private university/college.',
                        'At the public university/college, the student will qualify for little need-based aid and the family funds most of the student’s college costs.',
                        'At the private university/college, the student can often qualify for some need based financialaid.',
                        'College costs can be paid in part by student and part is paid by the university/college.',
                        "Knowing it will cost approximately the same to attend a public or a private university/college\n            helps open a new world of opportunities for the student and their family",
                        "Merit scholarships become part of financial need/ or out of pocket dollars at the public\n            universities.\n\n\n\n"
                    ]
                },
                'General Considerations\n\n',
                {
                    ul: [
                        " Understanding how outside scholarships will affect the family contribution is critical.",
                        "Outside scholarships will not replace the family contribution. Only parent loans or other\n            sources can reduce the family contribution.",
                        "The student may benefit from choosing a private school that offers a \u201Cno loan\u201D policy.",
                        "Universities/colleges may offer large amounts of student and parent loans, making a school\n            not affordable",
                        "Merit money can make a big difference in choices for this student.",
                        "Financial aid money received cannot equal more than the cost of attendance, so some\n            money can be deleted from college offer if outside scholarships are included.",
                        "If the university/college uses the institutional methodology, the non-custodial form, or\n            business or farm supplement, it can change the student status away from Partial Need very\n            quickly."
                    ]
                },
                { text: 'Partial Need Strategy', style: 'subtitle', bold: true },
                'General Strategies\n\n'
            ]);
            _this.ep.addStyle({
                bluetitle: {
                    color: '#4169E1',
                    margin: [0, 40, 0, 22],
                    fontSize: 16
                },
                size: {
                    fontSize: 10
                },
                purpletitle: {
                    color: '#800080',
                    fontSize: 20,
                    margin: [0, 40, 0, 22]
                },
                subtitle: {
                    fontSize: 16,
                    margin: [0, 0, 0, 22]
                }
            });
            _this.ep.openPdf();
        });
    };
    EfcComponent.prototype.canvasBase64 = function (svg) {
        var cas = document.createElement("canvas");
        canvg__WEBPACK_IMPORTED_MODULE_5___default()(cas, svg);
        var data = cas.toDataURL('image/png', 1);
        return data;
    };
    EfcComponent.prototype.exportPdf = function () {
        var _this = this;
        this.plansChart.ref$.subscribe(function (chart) {
            // let svgstr = chart.getSVG();
            var svgstr = chart.container.innerHTML;
            _this.charsBaseSrc = _this.canvasBase64(svgstr);
            _this.configPdf();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('charts'),
        __metadata("design:type", Object)
    ], EfcComponent.prototype, "chartEl", void 0);
    EfcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-efc',
            template: __webpack_require__(/*! ./efc.component.html */ "./src/app/survey/efc/efc.component.html"),
            styles: [__webpack_require__(/*! ./efc.component.css */ "./src/app/survey/efc/efc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_7__["ImgToBase64Service"], _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_8__["ExportPdfService"]])
    ], EfcComponent);
    return EfcComponent;
}());



/***/ }),

/***/ "./src/app/survey/fms/fms-major/fms-major.component.css":
/*!**************************************************************!*\
  !*** ./src/app/survey/fms/fms-major/fms-major.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9mbXMvZm1zLW1ham9yL2Ztcy1tYWpvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/survey/fms/fms-major/fms-major.component.html":
/*!***************************************************************!*\
  !*** ./src/app/survey/fms/fms-major/fms-major.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='analysis.college_career !== undefined'>\r\n<h2>{{analysis.college_career.Careers.Name}}</h2>\r\n<ul>\r\n  <li *ngFor='let section of analysis.sections| slice:1:3'>\r\n    <h4>{{section.type.Name}} - {{section.type.Description}} ({{section.score}})</h4>\r\n    <span>{{section.type.LongDescription}}</span>\r\n    <br>\r\n  </li>\r\n</ul>\r\n\r\n<h4>Majors to Consider:</h4>\r\n<ul>\r\n  <li *ngFor='let major of analysis.college_career.Careers.major'>{{major.name}}</li>\r\n</ul>\r\n\r\n<h4>Sample Careers:</h4>\r\n<ul>\r\n  <li *ngFor='let career of analysis.college_career.Careers.career'>\r\n    <span *ngIf='career.link !== null'><a href='{{career.link}}'>{{career.name}}</a></span>\r\n    <span *ngIf='career.link == null'>{{career.name}}</span>\r\n  </li>\r\n</ul>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/fms/fms-major/fms-major.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/survey/fms/fms-major/fms-major.component.ts ***!
  \*************************************************************/
/*! exports provided: FmsMajorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsMajorComponent", function() { return FmsMajorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FmsMajorComponent = /** @class */ (function () {
    function FmsMajorComponent() {
        this.analysis = [];
    }
    FmsMajorComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FmsMajorComponent.prototype, "analysis", void 0);
    FmsMajorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fms-major',
            template: __webpack_require__(/*! ./fms-major.component.html */ "./src/app/survey/fms/fms-major/fms-major.component.html"),
            styles: [__webpack_require__(/*! ./fms-major.component.css */ "./src/app/survey/fms/fms-major/fms-major.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FmsMajorComponent);
    return FmsMajorComponent;
}());



/***/ }),

/***/ "./src/app/survey/fms/fms-style/fms-style.component.css":
/*!**************************************************************!*\
  !*** ./src/app/survey/fms/fms-style/fms-style.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9mbXMvZm1zLXN0eWxlL2Ztcy1zdHlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/survey/fms/fms-style/fms-style.component.html":
/*!***************************************************************!*\
  !*** ./src/app/survey/fms/fms-style/fms-style.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='analysis.college_career !== undefined'>\r\n  <h2>{{analysis.college_career.CollegeStyles.Name}}</h2>\r\n  <ul>\r\n    <li *ngFor='let section of analysis.sections| slice:1:3'>\r\n      <h4>{{section.type.Name}} - {{section.type.Description}} ({{section.score}})</h4>\r\n      <span>{{section.type.LongDescription}}</span>\r\n      <br>\r\n    </li>\r\n  </ul>\r\n  <h2>General Description</h2>\r\n  <span>{{analysis.college_career.CollegeStyles.Description}}</span>\r\n\r\n  <h4>Searching for Colleges</h4>\r\n  <p>\r\n    When looking for {{analysis.college_career.CollegeStyles.Name}} here are some keywords to look for:\r\n    <span *ngFor='let keywords of analysis.college_career.CollegeStyles.info.keywords'>{{keywords.name}}</span>\r\n  </p>\r\n\r\n  <h4>{{analysis.college_career.CollegeStyles.Name}} College Core Values and Approach</h4>\r\n  <ul>\r\n    <li *ngFor='let value of analysis.college_career.CollegeStyles.info.values'>{{value.name}}</li>\r\n  </ul>\r\n\r\n  <h4>Student Qualities that Match the {{analysis.college_career.CollegeStyles.Name}} College Style</h4>\r\n  <ul>\r\n    <li *ngFor='let quality of analysis.college_career.CollegeStyles.info.qualities'>{{quality.name}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/survey/fms/fms-style/fms-style.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/survey/fms/fms-style/fms-style.component.ts ***!
  \*************************************************************/
/*! exports provided: FmsStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsStyleComponent", function() { return FmsStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FmsStyleComponent = /** @class */ (function () {
    function FmsStyleComponent() {
        this.analysis = [];
    }
    FmsStyleComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FmsStyleComponent.prototype, "analysis", void 0);
    FmsStyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fms-style',
            template: __webpack_require__(/*! ./fms-style.component.html */ "./src/app/survey/fms/fms-style/fms-style.component.html"),
            styles: [__webpack_require__(/*! ./fms-style.component.css */ "./src/app/survey/fms/fms-style/fms-style.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FmsStyleComponent);
    return FmsStyleComponent;
}());



/***/ }),

/***/ "./src/app/survey/fms/fms-trait/fms-trait.component.css":
/*!**************************************************************!*\
  !*** ./src/app/survey/fms/fms-trait/fms-trait.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9mbXMvZm1zLXRyYWl0L2Ztcy10cmFpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/survey/fms/fms-trait/fms-trait.component.html":
/*!***************************************************************!*\
  !*** ./src/app/survey/fms/fms-trait/fms-trait.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='analysis.college_career !== undefined'>\r\n<h2>{{analysis.personal.Name}}</h2>\r\n<ul>\r\n<li *ngFor='let section of analysis.sections' >\r\n<h4>{{section.type.Name}} - {{section.type.Description}} ({{section.score}})</h4>\r\n<span>{{section.type.LongDescription}}</span>\r\n<br>\r\n</li>\r\n</ul>\r\n<h2>General Description</h2>\r\n<span>{{analysis.personal.Description}}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/fms/fms-trait/fms-trait.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/survey/fms/fms-trait/fms-trait.component.ts ***!
  \*************************************************************/
/*! exports provided: FmsTraitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsTraitComponent", function() { return FmsTraitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FmsTraitComponent = /** @class */ (function () {
    function FmsTraitComponent() {
        this.analysis = [];
    }
    FmsTraitComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FmsTraitComponent.prototype, "analysis", void 0);
    FmsTraitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fms-trait',
            template: __webpack_require__(/*! ./fms-trait.component.html */ "./src/app/survey/fms/fms-trait/fms-trait.component.html"),
            styles: [__webpack_require__(/*! ./fms-trait.component.css */ "./src/app/survey/fms/fms-trait/fms-trait.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FmsTraitComponent);
    return FmsTraitComponent;
}());



/***/ }),

/***/ "./src/app/survey/fms/fms.component.css":
/*!**********************************************!*\
  !*** ./src/app/survey/fms/fms.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-white {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    height: 100%;\r\n}\r\n\r\n.start-button {\r\n    background: #006FD2;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    margin-left: 12px;\r\n    margin-bottom: 4px;\r\n    line-height: 32px;\r\n}\r\n\r\n::ng-deep .back-white .mat-tab-header {\r\n    margin: 20px 0;\r\n}\r\n\r\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar,\r\n.mat-tab-nav-bar.mat-primary .mat-ink-bar {\r\n    background-color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label {\r\n    color: #54698D;\r\n    opacity: 1 !important;\r\n    font-size: 16px;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus:not(.mat-tab-disable) {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label-active {\r\n    color: #006FD2;\r\n    opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .back-white {\r\n        padding: 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2Ztcy9mbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9mbXMvZm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN0YXJ0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2RkQyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5iYWNrLXdoaXRlIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhcixcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkZEMjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNTQ2OThEO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWw6Zm9jdXM6bm90KC5tYXQtdGFiLWRpc2FibGUpIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWw6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDZGRDI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDZGRDI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5iYWNrLXdoaXRlIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/survey/fms/fms.component.html":
/*!***********************************************!*\
  !*** ./src/app/survey/fms/fms.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-common-title [info]='info'></app-common-title>\r\n<div class=\"back-white\">\r\n  <app-description [info]='info' (exPdf)=\"downloadPdf()\"></app-description>\r\n  <mat-tab-group>\r\n    <mat-tab label=\"Personal Traits\">\r\n      <app-fms-trait [analysis]=\"analysis\">\r\n      </app-fms-trait>\r\n    </mat-tab>\r\n    <mat-tab label=\"College Style\">\r\n       <app-fms-style [analysis]=\"analysis\">\r\n       </app-fms-style>\r\n    </mat-tab>\r\n    <mat-tab label=\"Majors and Career\">\r\n        <app-fms-major [analysis]=\"analysis\">\r\n        </app-fms-major>\r\n    </mat-tab>\r\n    <mat-tab label=\"Summary\">\r\n      <app-common-summary [detail]='details'></app-common-summary>\r\n    </mat-tab>\r\n    <mat-tab label=\"Progress\">\r\n      <app-common-progress [detail]='details'></app-common-progress>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/survey/fms/fms.component.ts":
/*!*********************************************!*\
  !*** ./src/app/survey/fms/fms.component.ts ***!
  \*********************************************/
/*! exports provided: FmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FmsComponent", function() { return FmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/img-to-base64/img-to-base64.service */ "./src/app/service/img-to-base64/img-to-base64.service.ts");
/* harmony import */ var _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/export-pdf/export-pdf.service */ "./src/app/service/export-pdf/export-pdf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;


var FmsComponent = /** @class */ (function () {
    function FmsComponent(router, route, ss, cd, itb, ep) {
        this.router = router;
        this.route = route;
        this.ss = ss;
        this.cd = cd;
        this.itb = itb;
        this.ep = ep;
        this.baseLink = '/survey/common/';
        this.links = [
            { link: '/summary', label: 'Summary' },
            { link: '/progress', label: 'Survey Progress' }
        ];
        this.id = 0;
        this.info = {
            name: 'Survey',
            description: 'A survey',
            status: false,
            id: 0
        };
        this.details = [];
        this.analysis = [];
        this.choices = [
            { ID: 1, ChoiceText: 'a' }, { ID: 2, ChoiceText: 'b' }, { ID: 3, ChoiceText: 'c' }
        ];
        this.data = '[1,2,3]';
        this.docDefinition = {};
    }
    FmsComponent.prototype.ngOnInit = function () {
        var self = this;
        /*this.getSurveyDetail();
        this.getFmsAnalysis();*/
        console.log('进入了ngOnInit');
        Promise.all([self.getSurveyDetail(), self.getFmsAnalysis()]).then(function () {
            // console.log(self.info, self.details, self.analysis, 'self.info, self.details, self.analysis');
            self.initPdf();
        });
    };
    FmsComponent.prototype.initPdf = function () {
        var self = this;
        var imgList = [
            '/assets/img/report/student/EFC-Calculator.jpg',
            '/assets/img/pdfCover.png'
        ];
        self.itb.getImgToBaseList(imgList).then(function (result) {
            var personalTrait = [];
            var collegeStyle = [];
            var valueApproachArr = [];
            var studentQualityArr = [];
            var majors = [];
            var careers = [];
            var keyWords = '';
            if (self.analysis) {
                self.getArr(self.analysis.sections, personalTrait);
                self.getArr(self.analysis.sections.slice(1, 3), collegeStyle);
                self.analysis.college_career.CollegeStyles.info.keywords.forEach(function (item) {
                    keyWords += item.name;
                });
                self.analysis.college_career.CollegeStyles.info.values.forEach(function (item) {
                    valueApproachArr.push(item.name);
                });
                self.analysis.college_career.CollegeStyles.info.qualities.forEach(function (item) {
                    studentQualityArr.push(item.name);
                });
                self.analysis.college_career.Careers.major.forEach(function (item) {
                    majors.push(item.name);
                });
                self.analysis.college_career.Careers.career.forEach(function (item) {
                    careers.push(item.name);
                });
            }
            self.ep.initConfig("A Find My Spark Report for", 'REPORT', 'John Doe', result[1], 'November 2018', result[0]);
            self.ep.addContent([
                // Instroduction
                {
                    text: 'Introduction',
                    style: 'subheader'
                },
                {
                    text: self.info.LongDescription,
                    style: 'content'
                },
                // Personality Trait
                {
                    text: 'Personality Trait',
                    style: 'header',
                    alignment: 'center'
                },
                {
                    text: self.analysis.personal.Name,
                    style: 'subheader'
                },
                personalTrait,
                {
                    text: 'General Description',
                    style: 'subheader'
                },
                {
                    text: self.analysis.personal.Description,
                    style: 'content'
                },
                // College Styles
                {
                    text: 'College Styles',
                    style: 'header',
                    alignment: 'center'
                },
                {
                    text: self.analysis.college_career.CollegeStyles.Name,
                    style: 'subheader'
                },
                collegeStyle,
                {
                    text: 'General Description',
                    style: 'subheader'
                },
                {
                    text: self.analysis.college_career.CollegeStyles.Description,
                    style: 'content'
                },
                {
                    text: 'Searching for Colleges',
                    style: 'sub2header'
                },
                {
                    text: 'When looking for' + self.analysis.college_career.CollegeStyles.Name + 'here are some keywords to look for:' + keyWords,
                    style: 'content'
                },
                {
                    text: self.analysis.college_career.CollegeStyles.Name + 'College Core Values and Approach',
                    style: 'sub2header'
                },
                {
                    ul: valueApproachArr
                },
                {
                    text: 'Student Qualities that Match the' + self.analysis.college_career.CollegeStyles.Name + 'College Style',
                    style: 'sub2header'
                },
                {
                    ul: studentQualityArr
                },
                {
                    text: 'Majors to Consider',
                    style: 'header',
                    alignment: 'center',
                    backgroundColor: 'red'
                },
                {
                    ul: majors
                },
                {
                    text: 'Sample Careers',
                    style: 'header',
                    alignment: 'center'
                },
                {
                    ul: careers
                },
            ]);
            self.ep.addStyle({
                header: {
                    fontSize: 25,
                    bold: true,
                    marginBottom: 20,
                    marginTop: 20
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    color: '#006FD2',
                    marginBottom: 15,
                    marginTop: 15
                },
                sub2header: {
                    fontSize: 13,
                    marginBottom: 15,
                    marginTop: 15,
                    bold: true
                },
                content: {
                    fontSize: 12,
                    paddingLeft: 0
                }
            });
        });
    };
    FmsComponent.prototype.getArr = function (mapArr, getArr) {
        if (mapArr.length > 0) {
            mapArr.forEach(function (item) {
                var objTitle = { text: item.type.Name + ' - ' + item.type.Description, style: 'sub2header' };
                var objContent = { text: item.type.LongDescription, style: 'content' };
                getArr.push(objTitle);
                getArr.push(objContent);
            });
        }
        else {
            return;
        }
    };
    FmsComponent.prototype.getSurveyDetail = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.ss.getSurveyDetail(1).then(function (res) {
                self.details = res.sections;
                self.info = res;
                self.cd.markForCheck();
                resolve(res);
            });
        });
    };
    FmsComponent.prototype.getFmsAnalysis = function () {
        var self = this;
        return new Promise(function (resolve) {
            self.ss.getFmsAnalysis().then(function (res) {
                self.analysis = res;
                self.cd.markForCheck();
                resolve(res);
            });
        });
    };
    FmsComponent.prototype.startSurvey = function () {
        this.router.navigateByUrl('/survey/question/' + this.info.first_section);
    };
    FmsComponent.prototype.downloadPdf = function () {
        this.ep.openPdf();
        // pdfMake.createPdf(this.docDefinition).download();
    };
    FmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fms',
            template: __webpack_require__(/*! ./fms.component.html */ "./src/app/survey/fms/fms.component.html"),
            styles: [__webpack_require__(/*! ./fms.component.css */ "./src/app/survey/fms/fms.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_5__["ImgToBase64Service"],
            _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportPdfService"]])
    ], FmsComponent);
    return FmsComponent;
}());



/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".analysis-intro {\r\n    color: #00396B;\r\n    font-style: italic;\r\n    font-size: 90%;\r\n}\r\n\r\n.back-circle {\r\n    border: 2px solid #E0E5EE;\r\n    border-radius: 4px;\r\n    padding: 20px;\r\n    margin: 30px 0;\r\n}\r\n\r\n.rubric-title {\r\n    font-size: 16px;\r\n    color: #00396B;\r\n    font-weight: 500;\r\n    background: #E0E5EE;\r\n    padding: 16px 20px;\r\n    margin: -20px -20px 20px;\r\n}\r\n\r\n.rubric-score {\r\n    padding-left: 8px;\r\n}\r\n\r\n.rubric-desc {\r\n    color: #00396B;\r\n}\r\n\r\n.style-name {\r\n    color: #00396B;\r\n    font-weight: 500;\r\n}\r\n\r\n.back-circle ul li {\r\n    color: #00396B;\r\n    list-style: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2xlYXJuaW5nc3R5bGUvbGVhcm5pbmdzdHlsZS1hbmFseXNpcy9sZWFybmluZ3N0eWxlLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXkvbGVhcm5pbmdzdHlsZS9sZWFybmluZ3N0eWxlLWFuYWx5c2lzL2xlYXJuaW5nc3R5bGUtYW5hbHlzaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmFseXNpcy1pbnRybyB7XHJcbiAgICBjb2xvcjogIzAwMzk2QjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG4uYmFjay1jaXJjbGUge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTVFRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5cclxuLnJ1YnJpYy10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzAwMzk2QjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFNUVFO1xyXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAtMjBweCAtMjBweCAyMHB4O1xyXG59XHJcblxyXG4ucnVicmljLXNjb3JlIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4ucnVicmljLWRlc2Mge1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbn1cclxuXHJcbi5zdHlsZS1uYW1lIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmJhY2stY2lyY2xlIHVsIGxpIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='analysis.rubrics!==undefined'>\r\n    <span [innerHtml]='analysis.ScoringInformation'></span>\r\n    <div class=\"back-circle\">\r\n        <div class=\"rubric-title\">Your Dominant Receptive Style: <span *ngFor=\"let st of analysis['rubrics']['Receptive']['max'];let index=index\">{{st}}<span\r\n                    *ngIf=\"index<analysis['rubrics']['Receptive']['max'].length-1\">, </span></span></div>\r\n        <ngx-charts-bar-horizontal [view]=\"view\" [scheme]=\"analysis['rubrics']['Receptive']['colors']\" [results]=\"analysis['rubrics']['Receptive']['list']\"\r\n            [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showDataLabel]='true'\r\n            [gradient]='true' [barPadding]='20' [xScaleMax]='50'>\r\n        </ngx-charts-bar-horizontal>\r\n        <div *ngFor=\"let style of analysis['rubrics']['Receptive']['list']\">\r\n            <div class=\"style-name\"><img [src]=\"analysis.style_detail.Receptive[style['name']]['img']\">{{style['name']}}\r\n                -\r\n                {{style['value']}}</div>\r\n            <ul>\r\n                <li *ngFor=\"let item of analysis.style_detail.Receptive[style['name']]['list']\">\r\n                    {{item}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"back-circle\">\r\n        <div class=\"rubric-title\">Your Dominant Social Style: <span *ngFor=\"let st of analysis['rubrics']['Social']['max'];let index=index\">{{st}}<span\r\n                    *ngIf=\"index<analysis['rubrics']['Social']['max'].length-1\">, </span></span></div>\r\n        <ngx-charts-bar-horizontal [view]=\"view\" [scheme]=\"analysis['rubrics']['Social']['colors']\" [results]=\"analysis['rubrics']['Social']['list']\"\r\n            [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showDataLabel]='true'\r\n            [gradient]='true' [barPadding]='20' [xScaleMax]='50'>\r\n        </ngx-charts-bar-horizontal>\r\n        <div *ngFor=\"let style of analysis['rubrics']['Social']['list']\">\r\n            <div class=\"style-name\"><img [src]=\"analysis.style_detail.Social[style['name']]['img']\">{{style['name']}} -\r\n                {{style['value']}}</div>\r\n            <ul>\r\n                <li *ngFor=\"let item of analysis.style_detail.Social[style['name']]['list']\">\r\n                    {{item}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"back-circle\">\r\n        <div class=\"rubric-title\">Your Dominant Expressive Style: <span *ngFor=\"let st of analysis['rubrics']['Expressive']['max'];let index=index\">{{st}}<span\r\n                    *ngIf=\"index<analysis['rubrics']['Expressive']['max'].length-1\">, </span></span></div>\r\n        <ngx-charts-bar-horizontal [view]=\"view\" [scheme]=\"analysis['rubrics']['Expressive']['colors']\" [results]=\"analysis['rubrics']['Expressive']['list']\"\r\n            [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\"\r\n            [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [showDataLabel]='true'\r\n            [gradient]='true' [barPadding]='20' [xScaleMax]='50'>\r\n        </ngx-charts-bar-horizontal>\r\n        <div *ngFor=\"let style of analysis['rubrics']['Expressive']['list']\">\r\n            <div class=\"style-name\"><img [src]=\"analysis.style_detail.Expressive[style['name']]['img']\">{{style['name']}}\r\n                -\r\n                {{style['value']}}</div>\r\n            <ul>\r\n                <li *ngFor=\"let item of analysis.style_detail.Expressive[style['name']]['list']\">\r\n                    {{item}}\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LearningstyleAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningstyleAnalysisComponent", function() { return LearningstyleAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearningstyleAnalysisComponent = /** @class */ (function () {
    function LearningstyleAnalysisComponent() {
        this.analysis = [];
        this.view = [1400, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Score';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Style';
        this.showDataLabel = 'true';
        this.colorScheme = {
            domain: ['#A10A28', '#C7B42C', '#5AA454', '#AAAAAA']
        };
    }
    LearningstyleAnalysisComponent.prototype.ngOnInit = function () {
        console.log(this.analysis);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('analysis'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "analysis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('view'),
        __metadata("design:type", Array)
    ], LearningstyleAnalysisComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showXAxis'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "showXAxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showYAxis'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "showYAxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gradient'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "gradient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showLegend'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "showLegend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showXAxisLabel '),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('xAxisLabel'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showYAxisLabel'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('yAxisLabel'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showDataLabel'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "showDataLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('colorScheme'),
        __metadata("design:type", Object)
    ], LearningstyleAnalysisComponent.prototype, "colorScheme", void 0);
    LearningstyleAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learningstyle-analysis',
            template: __webpack_require__(/*! ./learningstyle-analysis.component.html */ "./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.html"),
            styles: [__webpack_require__(/*! ./learningstyle-analysis.component.css */ "./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearningstyleAnalysisComponent);
    return LearningstyleAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".learn-title {\r\n    font-size: 18px;\r\n    color: #00396B;\r\n    font-weight: 500;\r\n}\r\n\r\n.learn-intro {\r\n    font-size: 14px;\r\n    color: #00396B;\r\n    padding: 2px 0 12px;\r\n}\r\n\r\n.style-dimension {\r\n    font-size: 16px;\r\n    font-style: italic;\r\n    font-weight: 600;\r\n    color: #00396B;\r\n}\r\n\r\n.style-dimension-detail {\r\n    font-size: 14px;\r\n    font-style: italic;\r\n    color: #00396B;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2xlYXJuaW5nc3R5bGUvbGVhcm5pbmdzdHlsZS1sZWFybi9sZWFybmluZ3N0eWxlLWxlYXJuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9sZWFybmluZ3N0eWxlL2xlYXJuaW5nc3R5bGUtbGVhcm4vbGVhcm5pbmdzdHlsZS1sZWFybi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYXJuLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxlYXJuLWludHJvIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgcGFkZGluZzogMnB4IDAgMTJweDtcclxufVxyXG5cclxuLnN0eWxlLWRpbWVuc2lvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbn1cclxuXHJcbi5zdHlsZS1kaW1lbnNpb24tZGV0YWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"HowContainer\" class=\"SurveySubDetailSectionContent\">\r\n  <div class=\"learn-title\">How Do I Learn Best?</div>\r\n  <div class=\"learn-intro\">Everyone learns in multiple ways. Understanding your dominant learning style will help you to best match your study skills to your personal learning style.</div>\r\n  <div class=\"learn-title\">The Three Learning Style Dimensions</div>\r\n  <div class=\"learn-intro\">How you learn is divided into these three dimensions. Understanding each of your dimensions helps you know how to study, and how to share what you have learned in the best possible way. Studies show you can learn more efficiently using your\r\n    learning style. Matching your study habits to your learning style will make studying easier and more efficient for you.</div>\r\n<img src=\"/assets/img/LearningStylesChevron.png\" title=\"learning styles graphic\">\r\n  <div class=\"style-dimension\">Receptive</div>\r\n  <div class=\"style-dimension-detail\">How do you take in information you learn? Which of your senses do you rely on the most to learn?</div>\r\n  <img src=\"/assets/img/LearningStylesReceptive.png\" title=\"learning styles graphic\">\r\n  <div class=\"style-dimension\">Social</div>\r\n  <div class=\"style-dimension-detail\">How do you like to organize your learning process? This can also be how you best like to study.</div>\r\n<img src=\"/assets/img/LearningStylesSocial.png\" title=\"learning styles graphic\">\r\n  <div class=\"style-dimension\">Expressive</div>\r\n  <div class=\"style-dimension-detail\">How do you like to share what you have learned? What method of delivering your learning works best for you?</div>\r\n<img src=\"/assets/img/LearningStylesExpressive.png\" title=\"learning styles graphic\">\r\n</div>"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LearningstyleLearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningstyleLearnComponent", function() { return LearningstyleLearnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearningstyleLearnComponent = /** @class */ (function () {
    function LearningstyleLearnComponent() {
    }
    LearningstyleLearnComponent.prototype.ngOnInit = function () {
    };
    LearningstyleLearnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learningstyle-learn',
            template: __webpack_require__(/*! ./learningstyle-learn.component.html */ "./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.html"),
            styles: [__webpack_require__(/*! ./learningstyle-learn.component.css */ "./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearningstyleLearnComponent);
    return LearningstyleLearnComponent;
}());



/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".study-tools {\r\n    font-size: 18px;\r\n    color: #00396B;\r\n    font-weight: 500;\r\n}\r\n\r\n.tool-name {\r\n    font-size: 18px;\r\n    color: #00396B;\r\n    font-weight: 600;\r\n    padding-top: 24px;\r\n}\r\n\r\n.tool-detail {\r\n    font-size: 16px;\r\n    color: #00396B;\r\n}\r\n\r\n.tool-box-desk {\r\n    color: #54698D;\r\n    padding: 2px 12px;\r\n    display: inline-block;\r\n    letter-spacing: 0.25px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    margin: 4px 12px 6px 0;\r\n    background: #DBFBDB;\r\n}\r\n\r\n.tool-box-online {\r\n    color: #54698D;\r\n    padding: 2px 12px;\r\n    display: inline-block;\r\n    letter-spacing: 0.25px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    margin: 4px 12px 6px 0;\r\n    background: #E0F9FF;\r\n}\r\n\r\n.tool-box-mobile {\r\n    color: #54698D;\r\n    padding: 2px 12px;\r\n    display: inline-block;\r\n    letter-spacing: 0.25px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    margin: 4px 12px 6px 0;\r\n    background: #EBE8FF;\r\n}\r\n\r\n::ng-deep .mat-tab-body-content {\r\n    overflow: initial !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2xlYXJuaW5nc3R5bGUvbGVhcm5pbmdzdHlsZS1zdHVkeS9sZWFybmluZ3N0eWxlLXN0dWR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L2xlYXJuaW5nc3R5bGUvbGVhcm5pbmdzdHlsZS1zdHVkeS9sZWFybmluZ3N0eWxlLXN0dWR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZHktdG9vbHMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udG9vbC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG59XHJcblxyXG4udG9vbC1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbn1cclxuXHJcbi50b29sLWJveC1kZXNrIHtcclxuICAgIGNvbG9yOiAjNTQ2OThEO1xyXG4gICAgcGFkZGluZzogMnB4IDEycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiA0cHggMTJweCA2cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNEQkZCREI7XHJcbn1cclxuXHJcbi50b29sLWJveC1vbmxpbmUge1xyXG4gICAgY29sb3I6ICM1NDY5OEQ7XHJcbiAgICBwYWRkaW5nOiAycHggMTJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDRweCAxMnB4IDZweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI0UwRjlGRjtcclxufVxyXG5cclxuLnRvb2wtYm94LW1vYmlsZSB7XHJcbiAgICBjb2xvcjogIzU0Njk4RDtcclxuICAgIHBhZGRpbmc6IDJweCAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogNHB4IDEycHggNnB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUJFOEZGO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"study-tools\">Study Tools To Use To Be a Better Student</div>\r\n<div div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">Evernote</div>\r\n        <div class=\"tool-detail\">a place to keep and record notes</div>\r\n        <div><span class=\"tool-box-desk\">desktop</span><span class=\"tool-box-online\">online</span><span class=\"tool-box-mobile\">mobile\r\n                app</span></div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">Trello</div>\r\n        <div class=\"tool-detail\">create and track projects</div>\r\n        <div><span class=\"tool-box-online\">online</span><span class=\"tool-box-mobile\">mobile app</span></div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">Cornell Notes</div>\r\n        <div class=\"tool-detail\">study faster and easier</div>\r\n        <div><span class=\"tool-box-mobile\">iOS app</span></div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">Dropbox</div>\r\n        <div class=\"tool-detail\">create and access files from any device</div>\r\n        <div><span class=\"tool-box-desk\">desktop</span><span class=\"tool-box-online\">online</span><span class=\"tool-box-mobile\">mobile\r\n                app</span></div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">GoConqr</div>\r\n        <div class=\"tool-detail\">create mind maps for projects, make flash cards, create your own quizzes</div>\r\n        <div><span class=\"tool-box-online\">online</span><span class=\"tool-box-mobile\">mobile app</span></div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">Khan Academy</div>\r\n        <div class=\"tool-detail\">lots of subjects covered in a way you can relate to</div>\r\n        <div><span class=\"tool-box-online\">online</span></div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"tool-name\">LiveScribe Pen</div>\r\n        <div class=\"tool-detail\">take notes and record lectures. Listen to lectures, transcribe notes online.</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LearningstyleStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningstyleStudyComponent", function() { return LearningstyleStudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearningstyleStudyComponent = /** @class */ (function () {
    function LearningstyleStudyComponent() {
    }
    LearningstyleStudyComponent.prototype.ngOnInit = function () {
    };
    LearningstyleStudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learningstyle-study',
            template: __webpack_require__(/*! ./learningstyle-study.component.html */ "./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.html"),
            styles: [__webpack_require__(/*! ./learningstyle-study.component.css */ "./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearningstyleStudyComponent);
    return LearningstyleStudyComponent;
}());



/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-white {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    height: 100%;\r\n}\r\n\r\n.start-button {\r\n    background: #006FD2;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    letter-spacing: 1px;\r\n    margin-left: 12px;\r\n    margin-bottom: 4px;\r\n    line-height: 32px;\r\n}\r\n\r\n::ng-deep .back-white .mat-tab-header {\r\n    margin: 20px 0;\r\n}\r\n\r\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\r\n    background-color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label {\r\n    color: #54698D;\r\n    opacity: 1 !important;\r\n    font-size: 16px;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus:not(.mat-tab-disable) {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-tab-label:focus {\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep  .mat-tab-label-active {\r\n    color: #006FD2;\r\n    opacity: 1;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .back-white {\r\n        padding: 16px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L2xlYXJuaW5nc3R5bGUvbGVhcm5pbmdzdHlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9sZWFybmluZ3N0eWxlL2xlYXJuaW5nc3R5bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLXdoaXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3RhcnQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDZGRDI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuYmFjay13aGl0ZSAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDZGRDI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzU0Njk4RDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsOmZvY3VzOm5vdCgubWF0LXRhYi1kaXNhYmxlKSB7XHJcbiAgICBjb2xvcjogIzAwNkZEMjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG59XHJcbjo6bmctZGVlcCAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJhY2std2hpdGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-common-title [info]='info'></app-common-title>\r\n<div class=\"back-white\">\r\n    <app-description [info]='info' (exPdf)=\"ep.openPdf()\"></app-description>\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Analysis\">\r\n            <app-learningstyle-analysis [analysis]=\"analysis\">\r\n            </app-learningstyle-analysis>\r\n        </mat-tab>\r\n        <mat-tab label=\"How Do I Learn Best\">\r\n            <app-learningstyle-learn>\r\n            </app-learningstyle-learn>\r\n        </mat-tab>\r\n        <mat-tab label=\"Study Tools\">\r\n            <app-learningstyle-study>\r\n            </app-learningstyle-study>\r\n        </mat-tab>\r\n        <mat-tab label=\"Summary\">\r\n            <app-common-summary [detail]='details'></app-common-summary>\r\n        </mat-tab>\r\n        <mat-tab label=\"Progress\">\r\n            <app-common-progress [detail]='details'></app-common-progress>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/learningstyle/learningstyle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/survey/learningstyle/learningstyle.component.ts ***!
  \*****************************************************************/
/*! exports provided: LearningstyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningstyleComponent", function() { return LearningstyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
/* harmony import */ var _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/img-to-base64/img-to-base64.service */ "./src/app/service/img-to-base64/img-to-base64.service.ts");
/* harmony import */ var _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/export-pdf/export-pdf.service */ "./src/app/service/export-pdf/export-pdf.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/_pdfmake@0.1.56@pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__["vfs"] = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__["pdfMake"].vfs;
var LearningstyleComponent = /** @class */ (function () {
    function LearningstyleComponent(router, route, ss, cd, itb, ep) {
        this.router = router;
        this.route = route;
        this.ss = ss;
        this.cd = cd;
        this.itb = itb;
        this.ep = ep;
        this.baseLink = '/survey/common/';
        this.links = [
            { link: '/summary', label: 'Summary' },
            { link: '/progress', label: 'Survey Progress' }
        ];
        this.id = 0;
        this.info = {
            name: 'Survey',
            description: 'A survey',
            status: false,
            id: 0
        };
        this.details = [];
        this.analysis = [];
    }
    LearningstyleComponent.prototype.ngOnInit = function () {
        this.configPDF();
        this.getSurveyDetail();
        this.getLearningStyleAnalysis();
    };
    LearningstyleComponent.prototype.getSurveyDetail = function () {
        var _this = this;
        this.ss.getSurveyDetail(2523).then(function (res) {
            _this.details = res.sections;
            _this.info = res;
            _this.cd.markForCheck();
            console.log(res);
        });
    };
    LearningstyleComponent.prototype.getLearningStyleAnalysis = function () {
        var _this = this;
        this.ss.getLearningStyleAnalysis().then(function (res) {
            _this.analysis = res;
            _this.cd.markForCheck();
        });
    };
    LearningstyleComponent.prototype.startSurvey = function () {
        this.router.navigateByUrl('/survey/question/' + this.info.first_section);
    };
    LearningstyleComponent.prototype.configPDF = function () {
        var _this = this;
        //需打印图片列表
        var imgList = [
            '/assets/img/report/student/College-Match.jpg',
            '/assets/img/pdfCover.png',
            '/assets/img/college-match.png',
            '/assets/img/LearningStylesChevron.png',
            '/assets/img/LearningStylesReceptive.png',
            '/assets/img/LearningStylesSocial.png',
            '/assets/img/LearningStylesExpressive.png'
        ];
        //需打印svg列表
        var svgList = [];
        this.itb.getImgToBaseList(imgList).then(function (result) {
            // console.log(result);
            // this.ep.initConfig("Learning Style",
            //   "",
            //   "John Doe",
            //   result[0],
            //   "November 2018");
            _this.ep.initConfig("COLLEGE MATCH", 'REPORT', 'Andy Awesome', result[1], '05/15/2019', result[0]);
            _this.ep.addContent("\n\n");
            _this.ep.addContent({
                image: result[2],
                width: 200,
                height: 140,
                alignment: "center"
            });
            _this.ep.addContent("\n\n");
            _this.ep.addContent({
                text: "How Do I Learn Best?",
                fontSize: 18,
                bold: true,
                alignment: "center"
            });
            _this.ep.addContent("\n\n\n\n");
            _this.ep.addContent([
                {
                    text: "Introduction",
                    color: "#3c78d8",
                    bold: true,
                    fontSize: 14
                },
                "\n\n",
                {
                    text: "Do you want to spend less time studying and get better grades? Would you like to\n          know how you learn best? By taking the GuidedPath Learning Styles Survey you have\n          taken the first step toward learning more about how you learn best. This personalized\n          survey report gives you a list of study skills to best match your personal learning style.\n          It shows you how to study smarter, not more.\n          \n\n          Use the information in this report to guide you to better grades and spending less time\n          studying. Learn which approaches best fit your learning style. Practice using the study\n          tips provided. These study skills will help you succeed in your career and endeavors\n          you have in the future.",
                    fontSize: 12,
                },
                '\n\n',
                {
                    text: "Table of Contents",
                    bold: true,
                    color: "#3c78d8",
                    fontSize: 14
                },
                "\n\n",
                {
                    text: "1. Introduction\n\n          2. The Three Learning Style Dimensions",
                    fontSize: 12,
                }, {
                    text: "\u2022 Receptive\r\n           \u2022 Social\r\n           \u2022 Expressive",
                    fontSize: 12,
                    margin: [10, 0, 0, 0]
                },
                '\n',
                {
                    text: "3. Your Learning Style Results\n\n          4. Matching Your Dominant Learning Styles to Study Habits\n\n          5. Technology Study Tools\n\n          6. Conclusion",
                    fontSize: 12,
                },
                '\n\n',
                {
                    text: "How Do I Learn Best?",
                    fontSize: 18,
                    bold: true,
                    alignment: "center"
                },
                '\n\n',
                {
                    text: "Everyone learns in multiple ways. Understanding your dominant learning style will help\n          you to best match your study skills to your personal learning style.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "The Three Learning Style Dimensions",
                    color: "#3c78d8",
                    fontSize: 14
                },
                '\n\n',
                {
                    text: "How you learn is divided into these three dimensions. Understanding each of your\n          dimensions helps you know how to study, and how to share what you have learned in\n          the best possible way. Studies show you can learn more efficiently using your learning\n          style. Matching your study habits to your learning style will make studying easier and\n          more efficient for you."
                }
            ]);
            _this.ep.addContent("\n\n\n\n");
            _this.ep.addContent({
                image: result[1],
                width: 466,
                height: 333,
                alignment: "center"
            });
            _this.ep.addContent("\n\n\n\n\n\n\n\n");
            _this.ep.addContent({
                text: "Receptive",
                bold: true,
                fontSize: 14
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                text: "How do you take in information you learn? Which of your senses do you rely on the\n        most to learn?",
                fontSize: 12
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                image: result[2],
                width: 240,
                height: 200,
                alignment: "center"
            });
            _this.ep.addContent({
                text: "Social",
                bold: true,
                fontSize: 14
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                text: "How do you like to organize your learning process? This can also be how you best like\n        to study.",
                fontSize: 12
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                image: result[3],
                width: 258,
                height: 140,
                alignment: "center"
            });
            _this.ep.addContent({
                text: "Expressive",
                bold: true,
                fontSize: 14
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                text: "How do you like to share what you have learned? What method of delivering your\n        learning works best for you?",
                fontSize: 12
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                image: result[4],
                width: 258,
                height: 140,
                alignment: "center"
            });
            _this.ep.addContent("\n");
            _this.ep.addContent({
                text: "John Doe, here are YOUR results from the Learning Styles Survey:",
                fontSize: 14,
                bold: true
            });
            _this.ep.addContent("\n\n");
            _this.ep.addContent({
                text: "1. Your dominant RECEPTIVE learning style:",
                fontSize: 12
            });
            _this.ep.addContent({
                image: result[4],
                alignment: "center"
            });
            _this.ep.addContent({
                text: "2. Your dominant SOCIAL learning style:",
                fontSize: 12
            });
            _this.ep.addContent({
                image: result[4],
                alignment: "center"
            });
            _this.ep.addContent({
                text: "3. Your dominant EXPRESSIVE learning style:",
                fontSize: 12
            });
            _this.ep.addContent({
                image: result[4],
                alignment: "center"
            });
            _this.ep.addContent("\n\n");
            _this.ep.addContent([
                {
                    text: "Matching Your Dominant Learning Styles to Study Habits",
                    color: "#3c78d8",
                    bold: true,
                    fontSize: 14
                },
                "\n\n",
                {
                    text: "Here are some tips to help you maximize your learning style as you study. Spend less\n          time studying, and get more out of your study time by developing these study habits.\n          The key is to use YOUR learning style and work to maximize how you learn in how you\n          study. ",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "John Doe, your dominant learning styles can be matched to effective study habits. The\n          study habits for your dominant learning styles are listed first in each of the following\n          Learning Styles sections of your report. Review all learning styles, to understand what\n          you can do to strengthen your less dominant styles as well as maximizing your\n          dominant learning styles.",
                    fontSize: 12,
                },
                '\n\n',
                {
                    text: "Receptive Style",
                    bold: true,
                    fontSize: 14
                },
                '\n\n',
                {
                    text: "Tactile Learners - Your score is 40",
                    bold: true,
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "\u2022 Be well equipped with study tools: pens, highlighters, your phone, notebook.\n          \u2022 Get comfortable while you study (but not in bed).\n          \u2022 Write and re-write your notes. Re-do your Cornell notes.\n          \u2022 Make summaries and outlines.\n          \u2022 Highlight information as you review or learn.\n          \u2022 Study with another person; exchange notes as you study.\n          \u2022 Put notes on cards that can be moved around as you study.\n          \u2022 Use Trello to create study cards you can move around as you study.\n          \u2022 Make flash cards. Carry them in your pocket. Study when you have open time.\n          \u2022 Download a flash card app on your phone and use it when you have open time to study.\n          \u2022 Take Cornell notes as you study, read or watch a video.\n          \u2022 Create a game out of what you are studying.\n          \u2022 Take a break at set intervals of your study. Stand up and walk around.\n          \u2022 Grab a stress ball or other object to play with when studying.\n          \u2022 Study while walking the track or treadmill.\n          \u2022 Doodle on your paper when you study.\n          \u2022 Have something to eat or drink while you work.\n          \u2022 Use a keyboard to record information as possible.\n          \u2022 Make videos of what you are learning.\n          \u2022 Post videos of yourself answering questions in your notes.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "Auditory Learners - Your score is 35",
                    fontSize: 12,
                    bold: true
                },
                "\n\n",
                {
                    text: " \u2022 Talk to other student about class.\n          \u2022 Don't miss class- you need the lectures.\n          \u2022 Read material/information out loud.\n          \u2022 Have someone read to you and talk about what's been read.\n          \u2022 Make flash cards and use them with a partner or say them out loud.\n          \u2022 Have some noise in your environment, ie music, people talking. Starbucks comes to\n         mind!\n          \u2022 Use a white noise machine like simplynoise.com for background noise.\n          \u2022 Talk the material to yourself.\n          \u2022 Study in groups and quiz each other.\n          \u2022 Ask lots of questions as you study.\n          \u2022 Discuss ideas with a classmate or family member.\n          \u2022 Record your voice reading, then listen to yourself on your phone or other device.\n          \u2022 Create songs, poems, raps or rhythms of the information you need to know.\n          \u2022 Invest in a LiveScribe pen to record lectures.\n          \u2022 Record lectures and listen to them again.\n          \u2022 Write a reflective summary at the bottom of your Cornell notes.\n          \u2022 Find study apps to meet your auditory learning style.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "Visual Learners - Your score is 25",
                    fontSize: 12,
                    bold: true
                },
                "\n\n",
                {
                    text: " \u2022 Organize your work space before starting to work or study.\n          \u2022 Draw charts, diagrams, pictures, graphs, maps.\n          \u2022 Photocopy important pages or information and draw or highlight on them.\n          \u2022 If you own the book, highlight in the book.\n          \u2022 Form pictures to which you can attach information you are learning.\n          \u2022 Turn headings into questions and then read for answers.\n          \u2022 Take Cornell notes, recording questions on the left column.\n          \u2022 Copy your notes.\n          \u2022 Read the chapter before the lecture.\n          \u2022 Use lists. Check items off your list.\n          \u2022 Make flash cards\n          \u2022 Hang pictures, charts, graphs, posters around your work place.\n          \u2022 Use reflective summary at bottom of Cornell notes. Draw pictures as part of\n         summary.\n          \u2022 Download Cornell Study Notes app on your phone or tablet.\n          \u2022 Use Evernotes to take and illustrate your notes.\n          \u2022 Track progress using Trello.\n          \u2022 Create mindmaps using GoConqr.\n          \u2022 Find study apps to meet your visual learning style.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "Social Style",
                    bold: true,
                    fontSize: 14
                },
                '\n\n',
                {
                    text: " Group Learners - Your score is 40",
                    bold: true,
                    fontSize: 12
                },
                '\n\n',
                {
                    text: " \u2022 Find a study buddy with the same learning style you have.\n          \u2022 Match your receptive learning style to your group study techniques.\n          \u2022 Set goals for your study sessions.\n          \u2022 Set time limits for your study sessions.\n          \u2022 Create signals for your buddies and yourself to use to keep studying on topic.\n          \u2022 Come prepared with questions to ask each other in your study group.\n          \u2022 Come prepared with notes to your study group.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: " Individual Learners - Your score is 15",
                    bold: true,
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "  \u2022 Create a space where you will not be distracted by others while you study.\n          \u2022 Set up a schedule for your personal study time.\n          \u2022 Match your receptive learning style to your individual learning style.\n          \u2022 Let others know your best learning style is alone.\n          \u2022 Use music or headphones to signal you want to be left alone.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "Expressive Style",
                    bold: true,
                    fontSize: 14
                },
                '\n\n',
                {
                    text: " Written Learners - Your score is 40",
                    bold: true,
                    fontSize: 12
                },
                '\n\n',
                {
                    text: " \u2022 School is designed specifically for your expressive learning style.\n          \u2022 Complete assignments using writing: documents, prezis, pixart, posters, etc.\n          \u2022 Let teachers know your expressive style is written for sharing what you have\n         learned.\n          \u2022 Explore tools online that allow you to express what you have learned through\n         written or visual media.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: " Oral Learners - Your score is 30",
                    bold: true,
                    fontSize: 12
                },
                '\n\n',
                {
                    text: " \u2022 Volunteer to do presentations or speak to the class whenever possible.\n          \u2022 Create youtube videos, podcasts and similar media to complete projects.\n          \u2022 Use dictation-to-text tools on your phone or computer to do homework or prepare\n         for tests.\n          \u2022 Ask to tell teachers what you have learned, as an alternative to taking a quiz or test.\n          \u2022 Let teachers know your expressive style is oral for sharing what you have learned.\n          \u2022 Explore tools online that allow you to express what you have learned orally.\n         ",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "Technology Study tools to use to be a better student",
                    color: "#3c78d8",
                    bold: true,
                    fontSize: 14
                },
                '\n\n',
                {
                    text: " \u2022 Evernote: a place to keep and record notes (desktop, online and mobile app)\n          \u2022 Trello: create and track projects (online and mobile app)\n          \u2022 Cornell Notes: study faster and easier (iOS app)\n          \u2022 Dropbox: create and access files from any device (desktop, online and mobile app)\n          \u2022 Khan Academy: lots of subjects covered in a way you can relate to (online)\n          \u2022 GoConqr: create mind maps for projects, make flash cards, create your own\n         quizzes, (online and mobile app)\n          \u2022 LiveScribe Pen: take notes and record lectures. Listen to lectures, transcribe notes\n         online.",
                    fontSize: 12
                },
                '\n\n',
                {
                    text: "Conclusion",
                    color: "#3c78d8",
                    bold: true,
                    fontSize: 14
                },
                '\n\n',
                {
                    text: " This report was designed to help you identify your dominant learning styles. You will\n          find you have already been using some of these techniques as you study. Select more\n          methods to try to help you as you study. Focus not only on your dominant learning\n          styles, but on all learning styles. As you perfect your study skills, you will find your\n          grades improve, but more importantly, your experience in school will be more\n          enjoyable. ",
                    fontSize: 12
                },
            ]);
        });
    };
    LearningstyleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learningstyle',
            template: __webpack_require__(/*! ./learningstyle.component.html */ "./src/app/survey/learningstyle/learningstyle.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./learningstyle.component.css */ "./src/app/survey/learningstyle/learningstyle.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _service_img_to_base64_img_to_base64_service__WEBPACK_IMPORTED_MODULE_3__["ImgToBase64Service"],
            _service_export_pdf_export_pdf_service__WEBPACK_IMPORTED_MODULE_4__["ExportPdfService"]])
    ], LearningstyleComponent);
    return LearningstyleComponent;
}());



/***/ }),

/***/ "./src/app/survey/question/question.component.css":
/*!********************************************************!*\
  !*** ./src/app/survey/question/question.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n}\r\n\r\n.back-white {\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    padding-left: 12%;\r\n    padding-right: 12%;\r\n}\r\n\r\n.back-white-2 {\r\n    margin-top: 12px;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    padding: 40px;\r\n    height: 100%;\r\n    padding-left: 12%;\r\n    padding-right: 12%;\r\n}\r\n\r\n.survey-name {\r\n    font-size: 18px;\r\n    color: #00396B;\r\n    font-weight: 600;\r\n}\r\n\r\n.section-name {\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    color: #006FD2;\r\n}\r\n\r\n.back-white-2 li {\r\n    list-style: none;\r\n    color: #00396B;\r\n    font-weight: 500;\r\n    margin: 0px 0px 24px;\r\n}\r\n\r\n.icon-info {\r\n    font-size: 18px;\r\n    padding-right: 4px;\r\n}\r\n\r\n.info-detail {\r\n    font-size: 14px;\r\n    color: #54698D;\r\n    padding-bottom: 20px;\r\n    display: flex;\r\n    line-height: 16px;\r\n}\r\n\r\n.save-btn {\r\n    background: #006FD2;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    line-height: 32px;\r\n}\r\n\r\n.cancel-btn {\r\n    background: #E0E5EE;\r\n    color: #54698D;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    line-height: 32px;\r\n    margin-left: 12px;\r\n}\r\n\r\n.pre-btn,\r\n.save-next-btn,\r\n.save-exit-btn {\r\n    background: #97C846;\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n    line-height: 32px;\r\n    float: right;\r\n    margin-left: 12px;\r\n}\r\n\r\n.rq-notice {\r\n    font-size: 12px;\r\n    padding: 6px 12px 0 0;\r\n}\r\n\r\n.progress-detail {\r\n    color: #00396B;\r\n    font-size: 14px;\r\n    padding-top: 2px;\r\n}\r\n\r\n.padding-left {\r\n    padding-left: 20px;\r\n}\r\n\r\n::ng-deep .mat-option:focus:not(.mat-option-disabled),\r\n.mat-option:hover:not(.mat-option-disabled) {\r\n    background: #F4F6F9;\r\n}\r\n\r\n/* ::ng-deep .mat-drawer-content {\r\n    width: 100% !important;\r\n} */\r\n\r\n::ng-deep .back-white-2 .mat-select {\r\n    display: block !important;\r\n    width: 240px !important;\r\n    border: 2px solid #C9D2DF;\r\n    border-radius: 4px;\r\n    padding: 6px 8px 6px 12px;\r\n    margin: 6px 0 12px;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-select:hover {\r\n    border: 2px solid #A8B7C7;\r\n}\r\n\r\n::ng-deep .choose-option {\r\n    font-weight: 500;\r\n    color: #00396B;\r\n}\r\n\r\n::ng-deep .mat-select-value {\r\n    font-size: 14px;\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-option-text {\r\n    font-size: 14px;\r\n}\r\n\r\n::ng-deep .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\r\n    background: #F4F6F9;\r\n}\r\n\r\n::ng-deep .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\r\n    background: #D8DDE6;\r\n}\r\n\r\n::ng-deep .mat-option.mat-active {\r\n    background: #F4F6F9;\r\n    color: #006FD2;\r\n}\r\n\r\n::ng-deep .mat-sidenav-container {\r\n    top: -56px;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-radio-group {\r\n    display: block;\r\n    margin: 6px 0 40px;\r\n}\r\n\r\n/* 97C846 */\r\n\r\n::ng-deep .back-white-2 .mat-radio-container {\r\n    display: none !important;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-label-content {\r\n    background-color: #006FD2;\r\n    border: 2px solid #006FD2;\r\n    color: #fff;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-radio-label-content {\r\n    border: 2px solid #C9D2DF;\r\n    padding: 6px 24px;\r\n    margin-right: 8px;\r\n    border-radius: 24px;\r\n    font-size: 14px;\r\n    color: #00396B;\r\n    letter-spacing: 0.25px;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-radio-label-content:hover {\r\n    border: 2px solid #A8B7C7;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-form-field-appearance-legacy .mat-form-field-underline {\r\n    display: none;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-form-field.mat-focused .mat-form-field-ripple {\r\n    display: none;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-form-field-infix {\r\n    border-top: none;\r\n}\r\n\r\n::ng-deep .back-white-2 .mat-form-field-appearance-legacy .mat-form-field-infix {\r\n    padding: 0;\r\n}\r\n\r\n::ng-deep .back-white-2 input.mat-input-element {\r\n    border: 2px solid #C9D2DF;\r\n    border-radius: 4px;\r\n    padding-left: 12px;\r\n    height: 40px;\r\n    display: block;\r\n    color: #006FD2;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    width: 100%;\r\n    min-width: 300px;\r\n    margin-top: 6px;\r\n}\r\n\r\n::ng-deep .back-white-2 input.mat-input-element:hover {\r\n    border: 2px solid #A8B7C7;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    ::ng-deep .back-white-2 .mat-option {\r\n        height: auto !important;\r\n        white-space: inherit !important;\r\n        padding: 12px 16px !important;\r\n        line-height: 16px !important;\r\n    }\r\n\r\n    .back-white,\r\n    .back-white-2 {\r\n        padding: 16px;\r\n    }\r\n}\r\n\r\n::ng-deep .mat-progress-bar-fill::after {\r\n    background-color: #97C846;\r\n}\r\n\r\n::ng-deep .mat-progress-bar-buffer {\r\n    background-color: #EDF6E3;\r\n}\r\n\r\n::ng-deep .mat-progress-bar {\r\n    height: 16px !important;\r\n    border-radius: 2px;\r\n}\r\n\r\n.bold-title{\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QiwrQkFBK0I7UUFDL0IsNkJBQTZCO1FBQzdCLDRCQUE0QjtJQUNoQzs7SUFFQTs7UUFFSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG59XHJcblxyXG4uYmFjay13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTIlO1xyXG59XHJcblxyXG4uYmFjay13aGl0ZS0yIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTIlO1xyXG59XHJcblxyXG4uc3VydmV5LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwNkZEMjtcclxufVxyXG5cclxuLmJhY2std2hpdGUtMiBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5pY29uLWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uaW5mby1kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1NDY5OEQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLnNhdmUtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDZGRDI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uY2FuY2VsLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFNUVFO1xyXG4gICAgY29sb3I6ICM1NDY5OEQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4ucHJlLWJ0bixcclxuLnNhdmUtbmV4dC1idG4sXHJcbi5zYXZlLWV4aXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICM5N0M4NDY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbn1cclxuXHJcbi5ycS1ub3RpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEycHggMCAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtZGV0YWlsIHtcclxuICAgIGNvbG9yOiAjMDAzOTZCO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG5cclxuLnBhZGRpbmctbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxyXG4ubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY2Rjk7XHJcbn1cclxuXHJcbi8qIDo6bmctZGVlcCAubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbjo6bmctZGVlcCAuYmFjay13aGl0ZS0yIC5tYXQtc2VsZWN0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjQwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDOUQyREY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxMnB4O1xyXG4gICAgbWFyZ2luOiA2cHggMCAxMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2std2hpdGUtMiAubWF0LXNlbGVjdDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQThCN0M3O1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5jaG9vc2Utb3B0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAwMzk2QjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDA2RkQyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNkY5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDhEREU2O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNkY5O1xyXG4gICAgY29sb3I6ICMwMDZGRDI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIHRvcDogLTU2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmFjay13aGl0ZS0yIC5tYXQtcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDZweCAwIDQwcHg7XHJcbn1cclxuXHJcbi8qIDk3Qzg0NiAqL1xyXG5cclxuOjpuZy1kZWVwIC5iYWNrLXdoaXRlLTIgLm1hdC1yYWRpby1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2std2hpdGUtMiAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2RkQyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwNkZEMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2std2hpdGUtMiAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M5RDJERjtcclxuICAgIHBhZGRpbmc6IDZweCAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDM5NkI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2std2hpdGUtMiAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0E4QjdDNztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iYWNrLXdoaXRlLTIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iYWNrLXdoaXRlLTIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iYWNrLXdoaXRlLTIgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYmFjay13aGl0ZS0yIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5iYWNrLXdoaXRlLTIgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0M5RDJERjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMwMDZGRDI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmJhY2std2hpdGUtMiBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQThCN0M3O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIDo6bmctZGVlcCAuYmFjay13aGl0ZS0yIC5tYXQtb3B0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2std2hpdGUsXHJcbiAgICAuYmFjay13aGl0ZS0yIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk3Qzg0NjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGNkUzO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5ib2xkLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/survey/question/question.component.html":
/*!*********************************************************!*\
  !*** ./src/app/survey/question/question.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back-white\">\r\n    <div class=\"survey-name\">{{section.SurveyName}}&emsp;-&emsp;<span class=\"section-name\">{{section.Name}}</span></div>\r\n    <div class=\"info-detail\"><span><i class=\"material-icons icon-info\">info</i></span>{{section.Instructions}}</div>\r\n    <div *ngIf='section.completeness !== undefined'>\r\n        <mat-progress-bar mode=\"determinate\" value=\"{{section.completeness.required_done/section.completeness.required*100}}\"></mat-progress-bar>\r\n        <div class=\"progress-detail\">Questions Required {{section.completeness.required_done}} /\r\n            {{section.completeness.required}} <span class=\"padding-left\">Completed {{section.completeness.done}} /\r\n                {{section.completeness.all}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"back-white-2\">\r\n    <!-- <div *ngIf='id==1'>Survey Name Req <input mat-input value='{{survey_name}}'></div> -->\r\n    <ul>\r\n        <li *ngFor='let question of questions; let index=index'>\r\n            <span [ngClass]=\"{'bold-title' : question.SurveyQuestionTypeID==4}\">{{question.Text}}</span>\r\n            <mat-icon class=\"material-icons icon-info\" *ngIf='question.InfoText != null' matTooltip=\"{{question.InfoText}}\" [matTooltipPosition]=\"'after'\">help</mat-icon>\r\n            <span class=\"rq-notice\" *ngIf='question.IsRequired==1'> Req</span>\r\n            <span *ngIf='question.SurveyQuestionTypeID==1||question.SurveyQuestionTypeID==3'>\r\n                <mat-radio-group *ngIf='question.ChoiceDisplayType==\"radio\"' [(ngModel)]='question.response.SurveyQuestionChoiceID'\r\n                    (change)='checkQuestions()'>\r\n                    <mat-radio-button *ngFor='let choice of question.choices' [value]=\"choice.ID\">{{choice.ChoiceText}}</mat-radio-button>\r\n                </mat-radio-group>\r\n                <mat-select *ngIf='question.ChoiceDisplayType==\"pulldown\"' [(ngModel)]='question.response.SurveyQuestionChoiceID'\r\n                    (change)='checkQuestions()' placeholder='Choose An Option'>\r\n                    <mat-option *ngFor='let choice of question.choices' [value]=\"choice.ID\" class=\"choose-option\">\r\n                        {{choice.ChoiceText}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </span>\r\n            <mat-form-field *ngIf='question.SurveyQuestionTypeID==2||question.SurveyQuestionTypeID==3||question.SurveyQuestionTypeID==5'>\r\n                <input matInput [(ngModel)]='question.response.SurveyQuestionTextResponse' matInput>\r\n            </mat-form-field>\r\n\r\n            <span *ngIf='question.SurveyQuestionTypeID==6'>\r\n\r\n                <app-multi-checkbox *ngIf='question.ChoiceDisplayType==\"radio\"' [choices]='question.choices' [(data)]='question.response.SurveyQuestionTextResponse'></app-multi-checkbox>\r\n                <app-multi-select *ngIf='question.ChoiceDisplayType==\"pulldown\"' [choices]='question.choices' [(data)]='question.response.SurveyQuestionTextResponse'></app-multi-select>\r\n            </span>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"back-white-2\">\r\n    <div class=\"info-detail\"><span><i class=\"material-icons icon-info\">info</i></span>{{section.Instructions}}</div>\r\n    <button mat-button class=\"save-btn\" (click)='save()'>Save</button>\r\n    <button mat-button class=\"cancel-btn\" (click)='cancel()'>Cancel</button>\r\n    <button mat-button class=\"save-exit-btn\" *ngIf='section.nextSectionID==undefined' (click)='save(1,true)'>Save\r\n        and Exit</button>\r\n    <button mat-button class=\"save-next-btn\" *ngIf='section.nextSectionID!==undefined' (click)='save(1)'>Save and\r\n        Next</button>\r\n    <button mat-button class=\"pre-btn\" *ngIf='section.prevSectionID!==undefined' (click)='save(-1)'>Previous Section</button>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/question/question.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/survey/question/question.component.ts ***!
  \*******************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/survey.service */ "./src/app/service/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(router, route, ss, cd) {
        this.router = router;
        this.route = route;
        this.ss = ss;
        this.cd = cd;
        // title = 'part 1';
        // survey_name = 'Find My Spark';
        this.section = [];
        this.questions = [{
                index: 1,
                name: 'question 1',
                val: 0,
                req: true,
                type: 1
            },
            {
                idnex: 2,
                name: 'question 2',
                val: 'haha',
                req: true,
                type: 2
            }
        ];
        this.saving = false;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.hideHeaderAndBar();
        this.route.params.subscribe(function (data) {
            _this.ss.getSurveyQuestions(data.id).then(function (result) {
                _this.questions = result.questions;
                _this.section = result;
                _this.cd.markForCheck();
            });
        });
    };
    QuestionComponent.prototype.save = function (next, complete) {
        var _this = this;
        if (next === void 0) { next = 0; }
        if (complete === void 0) { complete = false; }
        if (this.saving) {
            return;
        }
        this.saving = true;
        var questions = [];
        for (var i = 0; i < this.questions.length; i++) {
            questions.push(this.questions[i].response);
        }
        this.ss.saveSurveySectionResponses(this.section.ID, questions).then(function (res) {
            if (next === 1 && _this.section.nextSectionID !== undefined) {
                _this.router.navigateByUrl('/survey/question/' + _this.section.nextSectionID);
            }
            else if (next === -1 && _this.section.prevSectionID !== undefined) {
                _this.router.navigateByUrl('/survey/question/' + _this.section.prevSectionID);
            }
            else if (complete) {
                _this.router.navigateByUrl('/survey/dashboard');
            }
            else if (res !== 0) {
                _this.questions = res['questions'];
                _this.section = res;
                _this.cd.markForCheck();
            }
            _this.saving = false;
        });
    };
    QuestionComponent.prototype.ngDoCheck = function () {
    };
    QuestionComponent.prototype.ngOnDestroy = function () {
        this.ss.showHeaderAndBar();
    };
    QuestionComponent.prototype.checkQuestions = function () {
        console.log(this.questions);
    };
    QuestionComponent.prototype.cancel = function () {
        this.router.navigateByUrl(this.section.detail_url);
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/survey/question/question.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/survey/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey.component.ts":
/*!********************************************!*\
  !*** ./src/app/survey/survey.component.ts ***!
  \********************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/survey.service */ "./src/app/service/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { enableProdMode } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { Router, ActivatedRoute, ParamMap, Event, RoutesRecognized, RouterOutlet } from '@angular/router';
var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(router, auth, ss, cd) {
        this.router = router;
        this.auth = auth;
        this.ss = ss;
        this.cd = cd;
        this.show_header = true;
        this.show_sidebar = true;
        this.ss.setLayOut(this);
        this.ss.setAuth(this.auth);
        this.ss.checkStudent();
    }
    SurveyComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            }
        });
    };
    SurveyComponent.prototype.ngOnDestroy = function () {
    };
    SurveyComponent.prototype.showHeaderAndBar = function (show) {
        this.show_header = show;
        this.show_sidebar = show;
    };
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey-layout',
            template: __webpack_require__(/*! ../customer.component.html */ "./src/app/customer.component.html"),
            providers: [_service_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ../customer.component.css */ "./src/app/customer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _service_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey.module.ts":
/*!*****************************************!*\
  !*** ./src/app/survey/survey.module.ts ***!
  \*****************************************/
/*! exports provided: SurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@7.2.15@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/_@angular_router@7.2.15@@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey.component */ "./src/app/survey/survey.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/survey/dashboard/dashboard.component.ts");
/* harmony import */ var _efc_efc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./efc/efc.component */ "./src/app/survey/efc/efc.component.ts");
/* harmony import */ var _efc_efc_base_efc_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./efc/efc-base/efc-base.component */ "./src/app/survey/efc/efc-base/efc-base.component.ts");
/* harmony import */ var _efc_efc_category_efc_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./efc/efc-category/efc-category.component */ "./src/app/survey/efc/efc-category/efc-category.component.ts");
/* harmony import */ var _efc_efc_strategy_efc_strategy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./efc/efc-strategy/efc-strategy.component */ "./src/app/survey/efc/efc-strategy/efc-strategy.component.ts");
/* harmony import */ var _efc_efc_sample_efc_sample_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./efc/efc-sample/efc-sample.component */ "./src/app/survey/efc/efc-sample/efc-sample.component.ts");
/* harmony import */ var _learningstyle_learningstyle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./learningstyle/learningstyle.component */ "./src/app/survey/learningstyle/learningstyle.component.ts");
/* harmony import */ var _common_common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/common.component */ "./src/app/survey/common/common.component.ts");
/* harmony import */ var _common_summary_common_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/summary/common-summary.component */ "./src/app/survey/common/summary/common-summary.component.ts");
/* harmony import */ var _common_progress_common_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/progress/common-progress.component */ "./src/app/survey/common/progress/common-progress.component.ts");
/* harmony import */ var _fms_fms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fms/fms.component */ "./src/app/survey/fms/fms.component.ts");
/* harmony import */ var _fms_fms_style_fms_style_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fms/fms-style/fms-style.component */ "./src/app/survey/fms/fms-style/fms-style.component.ts");
/* harmony import */ var _fms_fms_trait_fms_trait_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fms/fms-trait/fms-trait.component */ "./src/app/survey/fms/fms-trait/fms-trait.component.ts");
/* harmony import */ var _fms_fms_major_fms_major_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fms/fms-major/fms-major.component */ "./src/app/survey/fms/fms-major/fms-major.component.ts");
/* harmony import */ var _colmatch_colmatch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./colmatch/colmatch.component */ "./src/app/survey/colmatch/colmatch.component.ts");
/* harmony import */ var _colmatch_colmatch_analysis_colmatch_analysis_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./colmatch/colmatch-analysis/colmatch-analysis.component */ "./src/app/survey/colmatch/colmatch-analysis/colmatch-analysis.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./description/description.component */ "./src/app/survey/description/description.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./question/question.component */ "./src/app/survey/question/question.component.ts");
/* harmony import */ var _learningstyle_learningstyle_analysis_learningstyle_analysis_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./learningstyle/learningstyle-analysis/learningstyle-analysis.component */ "./src/app/survey/learningstyle/learningstyle-analysis/learningstyle-analysis.component.ts");
/* harmony import */ var _learningstyle_learningstyle_learn_learningstyle_learn_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./learningstyle/learningstyle-learn/learningstyle-learn.component */ "./src/app/survey/learningstyle/learningstyle-learn/learningstyle-learn.component.ts");
/* harmony import */ var _learningstyle_learningstyle_study_learningstyle_study_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./learningstyle/learningstyle-study/learningstyle-study.component */ "./src/app/survey/learningstyle/learningstyle-study/learningstyle-study.component.ts");
/* harmony import */ var _common_common_title_common_title_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./common/common-title/common-title.component */ "./src/app/survey/common/common-title/common-title.component.ts");
/* harmony import */ var _efc_efc_question_item_efc_question_item_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./efc/efc-question-item/efc-question-item.component */ "./src/app/survey/efc/efc-question-item/efc-question-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"],
                        children: [
                            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
                            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
                            { path: 'efc', component: _efc_efc_component__WEBPACK_IMPORTED_MODULE_5__["EfcComponent"] },
                            { path: 'fms', component: _fms_fms_component__WEBPACK_IMPORTED_MODULE_14__["FmsComponent"] },
                            { path: 'learningstyle', component: _learningstyle_learningstyle_component__WEBPACK_IMPORTED_MODULE_10__["LearningstyleComponent"] },
                            { path: 'question/:id', component: _question_question_component__WEBPACK_IMPORTED_MODULE_21__["QuestionComponent"] },
                            { path: 'efc/sample', component: _efc_efc_sample_efc_sample_component__WEBPACK_IMPORTED_MODULE_9__["EfcSampleComponent"] },
                            {
                                path: 'common/:id', component: _common_common_component__WEBPACK_IMPORTED_MODULE_11__["CommonComponent"]
                            }, {
                                path: 'colmatch', component: _colmatch_colmatch_component__WEBPACK_IMPORTED_MODULE_18__["ColmatchComponent"]
                            },
                        ]
                    }
                ])
            ],
            declarations: [
                _survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _efc_efc_component__WEBPACK_IMPORTED_MODULE_5__["EfcComponent"],
                _efc_efc_base_efc_base_component__WEBPACK_IMPORTED_MODULE_6__["EfcBaseComponent"],
                _efc_efc_category_efc_category_component__WEBPACK_IMPORTED_MODULE_7__["EfcCategoryComponent"],
                _efc_efc_strategy_efc_strategy_component__WEBPACK_IMPORTED_MODULE_8__["EfcStrategyComponent"],
                _efc_efc_sample_efc_sample_component__WEBPACK_IMPORTED_MODULE_9__["EfcSampleComponent"],
                _learningstyle_learningstyle_component__WEBPACK_IMPORTED_MODULE_10__["LearningstyleComponent"],
                _learningstyle_learningstyle_analysis_learningstyle_analysis_component__WEBPACK_IMPORTED_MODULE_22__["LearningstyleAnalysisComponent"],
                _learningstyle_learningstyle_learn_learningstyle_learn_component__WEBPACK_IMPORTED_MODULE_23__["LearningstyleLearnComponent"],
                _learningstyle_learningstyle_study_learningstyle_study_component__WEBPACK_IMPORTED_MODULE_24__["LearningstyleStudyComponent"],
                _description_description_component__WEBPACK_IMPORTED_MODULE_20__["DescriptionComponent"],
                _common_common_component__WEBPACK_IMPORTED_MODULE_11__["CommonComponent"],
                _common_summary_common_summary_component__WEBPACK_IMPORTED_MODULE_12__["CommonSummaryComponent"],
                _common_progress_common_progress_component__WEBPACK_IMPORTED_MODULE_13__["CommonProgressComponent"],
                _common_common_title_common_title_component__WEBPACK_IMPORTED_MODULE_25__["CommonTitleComponent"],
                _fms_fms_component__WEBPACK_IMPORTED_MODULE_14__["FmsComponent"],
                _fms_fms_style_fms_style_component__WEBPACK_IMPORTED_MODULE_15__["FmsStyleComponent"],
                _fms_fms_trait_fms_trait_component__WEBPACK_IMPORTED_MODULE_16__["FmsTraitComponent"],
                _fms_fms_major_fms_major_component__WEBPACK_IMPORTED_MODULE_17__["FmsMajorComponent"],
                _colmatch_colmatch_component__WEBPACK_IMPORTED_MODULE_18__["ColmatchComponent"],
                _colmatch_colmatch_analysis_colmatch_analysis_component__WEBPACK_IMPORTED_MODULE_19__["ColmatchAnalysisComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_21__["QuestionComponent"],
                _efc_efc_question_item_efc_question_item_component__WEBPACK_IMPORTED_MODULE_26__["EfcQuestionItemComponent"],
            ]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ })

}]);
//# sourceMappingURL=survey-survey-module.js.map