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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/app/layout/index.ts");
/* harmony import */ var _pages_export_export_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/export/export.component */ "./src/app/pages/export/export.component.ts");
/* harmony import */ var _pages_faq_limitations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/faq/limitations.component */ "./src/app/pages/faq/limitations.component.ts");
/* harmony import */ var _pages_import_import_from_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/import/import-from-file.component */ "./src/app/pages/import/import-from-file.component.ts");
/* harmony import */ var _pages_import_import_from_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/import/import-from-project.component */ "./src/app/pages/import/import-from-project.component.ts");
/* harmony import */ var _pages_import_migrate_content_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/import/migrate-content-items.component */ "./src/app/pages/import/migrate-content-items.component.ts");
/* harmony import */ var _pages_shared_cleanup_cleanup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/shared/cleanup/cleanup.component */ "./src/app/pages/shared/cleanup/cleanup.component.ts");
/* harmony import */ var _pages_templates_template_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/templates/template-list.component */ "./src/app/pages/templates/template-list.component.ts");











var routes = [
    {
        path: '', component: _layout__WEBPACK_IMPORTED_MODULE_3__["MasterLayoutComponent"], children: [
            { path: '', component: _pages_import_import_from_project_component__WEBPACK_IMPORTED_MODULE_7__["ImportFromProjectComponent"] },
            { path: 'export', component: _pages_export_export_component__WEBPACK_IMPORTED_MODULE_4__["ExportComponent"] },
            { path: 'cleanup', component: _pages_shared_cleanup_cleanup_component__WEBPACK_IMPORTED_MODULE_9__["CleanupComponent"] },
            { path: 'import-from-project', component: _pages_import_import_from_project_component__WEBPACK_IMPORTED_MODULE_7__["ImportFromProjectComponent"] },
            { path: 'import-from-file', component: _pages_import_import_from_file_component__WEBPACK_IMPORTED_MODULE_6__["ImportFromFileComponent"] },
            { path: 'migrate-content-items', component: _pages_import_migrate_content_items_component__WEBPACK_IMPORTED_MODULE_8__["MigrateContentItemsComponent"] },
            { path: 'templates', component: _pages_templates_template_list_component__WEBPACK_IMPORTED_MODULE_10__["TemplateListComponent"] },
            { path: 'limitations', component: _pages_faq_limitations_component__WEBPACK_IMPORTED_MODULE_5__["LimitationsComponent"] },
        ]
    },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/base.component */ "./src/app/core/base.component.ts");




var AppComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppComponent, _super);
    function AppComponent(dependencies, cdr) {
        return _super.call(this, dependencies, cdr) || this;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_2__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}(_core_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_7__["PagesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _messages_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages/message.component */ "./src/app/components/messages/message.component.ts");
/* harmony import */ var _preview_import_data_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview/import-data-preview.component */ "./src/app/components/preview/import-data-preview.component.ts");
/* harmony import */ var _processed_items_processed_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./processed-items/processed-items.component */ "./src/app/components/processed-items/processed-items.component.ts");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _messages_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"],
                _processed_items_processed_items_component__WEBPACK_IMPORTED_MODULE_7__["ProcessedItemsComponent"],
                _preview_import_data_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImportDataPreview"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            exports: [
                _messages_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"],
                _processed_items_processed_items_component__WEBPACK_IMPORTED_MODULE_7__["ProcessedItemsComponent"],
                _preview_import_data_preview_component__WEBPACK_IMPORTED_MODULE_6__["ImportDataPreview"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/messages/message.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/messages/message.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"type === 'error'\">\n    <div class=\"w-message error\">\n        <div class=\"title\">\n            Error\n        </div>\n        <div class=\"text\" *ngIf=\"text\">\n            {{ text }}\n        </div>\n        <div class=\"text\" *ngIf=\"html\" [innerHtml]=\"html\"></div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'success'\">\n    <div class=\"w-message success\">\n        <div class=\"title\">\n            Success\n        </div>\n        <div class=\"text\" *ngIf=\"text\">\n            {{ text }}\n        </div>\n        <div class=\"text\" *ngIf=\"html\" [innerHtml]=\"html\"></div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'info'\">\n    <div class=\"w-message info\">\n        <div class=\"title\">\n            Info\n        </div>\n        <div class=\"text\" *ngIf=\"text\">\n            {{ text }}\n        </div>\n        <div class=\"text\" *ngIf=\"html\" [innerHtml]=\"html\"></div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"type === 'warning'\">\n    <div class=\"w-message warning\">\n        <div class=\"title\">\n            Warning\n        </div>\n        <div class=\"text\" *ngIf=\"text\">\n            {{ text }}\n        </div>\n        <div class=\"text\" *ngIf=\"html\" [innerHtml]=\"html\"></div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/messages/message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/messages/message.component.ts ***!
  \**********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/base.component */ "./src/app/core/base.component.ts");




var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(dependencies, cdr) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.type = 'error';
        return _this;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MessageComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MessageComponent.prototype, "html", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MessageComponent.prototype, "type", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-message',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/messages/message.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_2__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MessageComponent);
    return MessageComponent;
}(_core_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/preview/import-data-preview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/preview/import-data-preview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"previewData\">\n\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" fxLayoutAlign=\"start center\">\n        <div *ngIf=\"showType('contentTypes')\" fxLayout=\"column\" class=\"pad\"\n            [class.w-inactive-item]=\"activeType !== 'contentTypes'\"\n            [class.w-active-item]=\"activeType === 'contentTypes'\" fxFlex.lt-md=\"50%\" (click)=\"setType('contentTypes')\">\n            <div>\n                Content types\n            </div>\n            <div class=\"push-top-sm w-text-center\" libTextCaption>\n                {{ previewData.contentTypes.length }}\n            </div>\n        </div>\n        <div *ngIf=\"showType('taxonomies')\" fxLayout=\"column\" class=\"pad\"\n            [class.w-inactive-item]=\"activeType !== 'taxonomies'\" [class.w-active-item]=\"activeType === 'taxonomies'\"\n            fxFlex.lt-md=\"50%\" (click)=\"setType('taxonomies')\">\n            <div>\n                Taxonomies\n            </div>\n            <div class=\"push-top-sm w-text-center\" libTextCaption>\n                {{ previewData.taxonomies.length }}\n            </div>\n        </div>\n        <div *ngIf=\"showType('assets')\" fxLayout=\"column\" class=\"pad\" [class.w-inactive-item]=\"activeType !== 'assets'\"\n            [class.w-active-item]=\"activeType === 'assets'\" fxFlex.lt-md=\"50%\" (click)=\"setType('assets')\">\n            <div>\n                Assets\n            </div>\n            <div class=\"push-top-sm w-text-center\" libTextCaption>\n                {{ previewData.assets.length }}\n            </div>\n        </div>\n        <div *ngIf=\"showType('contentItems')\" fxLayout=\"column\" class=\"pad\"\n            [class.w-inactive-item]=\"activeType !== 'contentItems'\"\n            [class.w-active-item]=\"activeType === 'contentItems'\" fxFlex.lt-md=\"50%\" (click)=\"setType('contentItems')\">\n            <div>\n                Content items\n            </div>\n            <div class=\"push-top-sm w-text-center\" libTextCaption>\n                {{ previewData.contentItems.length }}\n            </div>\n        </div>\n        <div *ngIf=\"showType('languageVariants')\" fxLayout=\"column\" class=\"pad\"\n            [class.w-inactive-item]=\"activeType !== 'languageVariants'\"\n            [class.w-active-item]=\"activeType === 'languageVariants'\" fxFlex.lt-md=\"50%\"\n            (click)=\"setType('languageVariants')\">\n            <div>\n                Language variants\n            </div>\n            <div class=\"push-top-sm w-text-center\" libTextCaption>\n                {{ previewData.languageVariants.length }}\n            </div>\n        </div>\n    </div>\n\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"16px\" class=\"push-top\">\n        <div fxLayout=\"column\" fxFlex=\"calc(50% - 16px)\" fxFlex.lt-lg=\"100%\">\n            <div libCard>\n                <cdk-virtual-scroll-viewport *ngIf=\"activeItems\" itemSize=\"50\" class=\"w-import-viewport\">\n                    <mat-list role=\"list\">\n                        <mat-list-item role=\"listitem\" *cdkVirtualFor=\"let item of activeItems; let i = index\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\">\n                                <div fxLayout=\"column\" fxFlex=\"initial\">\n                                    <strong>#{{ i + 1 }} </strong>\n                                </div>\n                                <div fxLayout=\"column\" fxFlex=\"initial\">\n                                    <span class=\"w-preview-link\" (click)=\"previewItem(item, i)\">Preview</span>\n                                </div>\n                                <div fxLayout=\"column\" fxFlex=\"initial\">\n                                    |\n                                </div>\n                                <div fxLayout=\"column\" fxFlex>\n                                    {{ item.title }}\n                                </div>\n                            </div>\n\n                        </mat-list-item>\n                    </mat-list>\n                </cdk-virtual-scroll-viewport>\n            </div>\n        </div>\n\n        <div fxLayout=\"column\" fxFlex=\"calc(50% - 16px)\" fxFlex.lt-lg=\"100%\">\n            <div libCard>\n                <div libTitle2>\n                    Item preview\n                </div>\n                <div class=\"push-top-sm\" *ngIf=\"activePreviewedItem\">\n                    {{ activePreviewedItem.index + 1 }} | {{ activePreviewedItem.title }}\n                </div>\n\n                <div class=\"push-top\">\n                    <div *ngIf=\"!activePreviewedItem\">\n                        No item is selected\n                    </div>\n                    <div *ngIf=\"activePreviewedItem\">\n                        <ngx-json-viewer [json]=\"activePreviewedItem.data\"></ngx-json-viewer>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/preview/import-data-preview.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/preview/import-data-preview.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w-inactive-item {\n  background-color: #e0e0e0;\n  color: black;\n  cursor: pointer; }\n\n.w-active-item {\n  background-color: #008ae1;\n  color: #ffffff;\n  cursor: pointer; }\n\n.w-preview-link {\n  color: #008ae1;\n  cursor: pointer;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9LZW50aWNvL2Nsb3VkLXRlbXBsYXRlLW1hbmFnZXIvc3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXcvaW1wb3J0LWRhdGEtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZXZpZXcvaW1wb3J0LWRhdGEtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53LWluYWN0aXZlLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnctYWN0aXZlLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhhZTE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udy1wcmV2aWV3LWxpbmsge1xuICAgIGNvbG9yOiAjMDA4YWUxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/preview/import-data-preview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/preview/import-data-preview.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImportDataPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportDataPreview", function() { return ImportDataPreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/base.component */ "./src/app/core/base.component.ts");




var ImportDataPreview = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImportDataPreview, _super);
    function ImportDataPreview(dependencies, cdr) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.showTypes = 'all';
        return _this;
    }
    Object.defineProperty(ImportDataPreview.prototype, "activeType", {
        get: function () {
            if (this._activeType) {
                return this._activeType;
            }
            if (this.showTypes === 'all') {
                return 'contentTypes';
            }
            return 'assets';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportDataPreview.prototype, "activePreviewedItem", {
        get: function () {
            if (this.previewedItem) {
                return this.previewedItem;
            }
            if (!this.activeItems) {
                return undefined;
            }
            if (this.activeItems.length > 0) {
                var firstItem = this.activeItems[0];
                return {
                    data: firstItem.data,
                    index: 0,
                    title: firstItem.title
                };
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportDataPreview.prototype, "activeItems", {
        get: function () {
            if (!this.previewData) {
                return undefined;
            }
            if (this.activeType === 'contentTypes') {
                return this.previewData.contentTypes;
            }
            if (this.activeType === 'assets') {
                return this.previewData.assets;
            }
            if (this.activeType === 'taxonomies') {
                return this.previewData.taxonomies;
            }
            if (this.activeType === 'contentItems') {
                return this.previewData.contentItems;
            }
            if (this.activeType === 'languageVariants') {
                return this.previewData.languageVariants;
            }
        },
        enumerable: true,
        configurable: true
    });
    ImportDataPreview.prototype.ngOnInit = function () {
    };
    ImportDataPreview.prototype.showType = function (type) {
        if (this.showTypes === 'all') {
            return true;
        }
        if (this.showTypes === 'contentItemsImport') {
            var allowedTypes = ['assets', 'contentItems', 'languageVariants'];
            return allowedTypes.includes(type);
        }
        throw Error("Unsupported show type");
    };
    ImportDataPreview.prototype.previewItem = function (item, index) {
        this.previewedItem = {
            data: item.data,
            index: index,
            title: item.title
        };
        _super.prototype.detectChanges.call(this);
    };
    ImportDataPreview.prototype.setType = function (type) {
        this._activeType = type;
        this.previewedItem = undefined;
        _super.prototype.detectChanges.call(this);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImportDataPreview.prototype, "previewData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImportDataPreview.prototype, "showTypes", void 0);
    ImportDataPreview = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-import-data-preview',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./import-data-preview.component.html */ "./src/app/components/preview/import-data-preview.component.html"),
            styles: [__webpack_require__(/*! ./import-data-preview.component.scss */ "./src/app/components/preview/import-data-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_2__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ImportDataPreview);
    return ImportDataPreview;
}(_core_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/components/preview/preview-helper.ts":
/*!******************************************************!*\
  !*** ./src/app/components/preview/preview-helper.ts ***!
  \******************************************************/
/*! exports provided: PreviewHelper, previewHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewHelper", function() { return PreviewHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewHelper", function() { return previewHelper; });
var PreviewHelper = /** @class */ (function () {
    function PreviewHelper() {
    }
    PreviewHelper.prototype.convertFromCleanupData = function (cleanupData) {
        return {
            assets: cleanupData.assets.map(function (m) { return ({
                title: m.fileName,
                data: m
            }); }),
            contentItems: cleanupData.contentItems.map(function (m) { return ({
                title: m.name,
                data: m
            }); }),
            contentTypes: cleanupData.contentTypes.map(function (m) { return ({
                title: m.system.name,
                data: m
            }); }),
            languageVariants: [],
            taxonomies: cleanupData.taxonomies.map(function (m) { return ({
                title: m.system.name,
                data: m
            }); }),
        };
    };
    PreviewHelper.prototype.convertFromImportData = function (importData) {
        var files = [];
        files.push.apply(files, importData.assets.map(function (m) { return ({
            title: m.fileName,
            data: m
        }); }));
        files.push.apply(files, importData.assetsFromFile.map(function (m) { return ({
            title: m.asset.fileName,
            data: m
        }); }));
        return {
            assets: files,
            taxonomies: importData.taxonomies.map(function (m) { return ({
                title: m.system.name,
                data: m
            }); }),
            contentItems: importData.contentItems.map(function (m) { return ({
                title: m.name,
                data: m
            }); }),
            contentTypes: importData.contentTypes.map(function (m) { return ({
                title: m.system.name,
                data: m
            }); }),
            languageVariants: importData.languageVariants.map(function (m) { return ({
                title: m.itemCodename + " [" + m.languageCodename + "]",
                data: m
            }); })
        };
    };
    PreviewHelper.prototype.convertFromImportResult = function (importResult) {
        return {
            assets: importResult.importedAssets.map(function (m) { return ({
                title: m.importedItem.fileName,
                data: m.importedItem
            }); }),
            taxonomies: importResult.importedTaxonomies.map(function (m) { return ({
                title: m.importedItem.system.name,
                data: m.importedItem
            }); }),
            contentItems: importResult.importedContentItems.map(function (m) { return ({
                title: m.importedItem.name,
                data: m.importedItem
            }); }),
            contentTypes: importResult.importedContentTypes.map(function (m) { return ({
                title: m.importedItem.system.name,
                data: m.importedItem
            }); }),
            languageVariants: importResult.importedLanguageVariants.map(function (m) { return ({
                title: m.importedItem.item.id + " [" + m.originalItem.languageCodename + "]",
                data: m.importedItem
            }); })
        };
    };
    return PreviewHelper;
}());

var previewHelper = new PreviewHelper();


/***/ }),

/***/ "./src/app/components/processed-items/processed-items.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/processed-items/processed-items.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"w-import-viewport\">\n    <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\" *cdkVirtualFor=\"let processedItem of processedItems\">\n            <p>\n                <strong>{{ processedItem.action }} {{ processedItem.type }}</strong>: {{ processedItem.name }}\n            </p>\n        </mat-list-item>\n    </mat-list>\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./src/app/components/processed-items/processed-items.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/processed-items/processed-items.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProcessedItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessedItemsComponent", function() { return ProcessedItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/base.component */ "./src/app/core/base.component.ts");






var ProcessedItemsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProcessedItemsComponent, _super);
    function ProcessedItemsComponent(dependencies, cdr) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this._processedItems = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])([]);
        return _this;
    }
    Object.defineProperty(ProcessedItemsComponent.prototype, "processedItems", {
        get: function () {
            return this._processedItems.toArray();
        },
        enumerable: true,
        configurable: true
    });
    ProcessedItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.subscribeToObservable.call(this, this.dependencies.processingService.processedItemsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
            var _a;
            _this._processedItems = (_a = _this._processedItems).unshift.apply(_a, items);
            _super.prototype.detectChanges.call(_this);
        })));
        _super.prototype.subscribeToObservable.call(this, this.dependencies.processingService.clearProcessedItemsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
            _this._processedItems = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])([]);
            _super.prototype.detectChanges.call(_this);
        })));
    };
    ProcessedItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-processed-items',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./processed-items.component.html */ "./src/app/components/processed-items/processed-items.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_4__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ProcessedItemsComponent);
    return ProcessedItemsComponent;
}(_core_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/core/base-page.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/base-page.component.ts ***!
  \*********************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "./src/app/core/base.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var BasePageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BasePageComponent, _super);
    function BasePageComponent(dependencies, cdr) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.dependencies = dependencies;
        _this.cdr = cdr;
        dependencies.googleAnalyticsService.trackPageview({
            pageTitle: "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].google.trackingPrefix + dependencies.router.url,
            pagePath: "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].google.trackingPrefix + dependencies.router.url,
        });
        return _this;
    }
    return BasePageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/core/base.component.ts":
/*!****************************************!*\
  !*** ./src/app/core/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../version */ "./src/version.ts");




var BaseComponent = /** @class */ (function () {
    function BaseComponent(dependencies, cdr) {
        this.dependencies = dependencies;
        this.cdr = cdr;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isLoading = false;
    }
    Object.defineProperty(BaseComponent.prototype, "version", {
        get: function () {
            return _version__WEBPACK_IMPORTED_MODULE_3__["versionInfo"].version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "isSmallScreen", {
        get: function () {
            if (!this.dependencies) {
                return false;
            }
            return this.dependencies.media.isActive('lt-lg');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "isLargeScreen", {
        get: function () {
            return !this.isSmallScreen;
        },
        enumerable: true,
        configurable: true
    });
    BaseComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    BaseComponent.prototype.destroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    BaseComponent.prototype.startLoading = function () {
        this.isLoading = true;
    };
    BaseComponent.prototype.stopLoading = function () {
        this.isLoading = false;
    };
    BaseComponent.prototype.detectChanges = function () {
        this.cdr.detectChanges();
    };
    BaseComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    BaseComponent.prototype.subscribeToObservables = function (observables) {
        this.subscribeToObservable(_utilities__WEBPACK_IMPORTED_MODULE_2__["observableHelper"].zipObservables(observables));
    };
    BaseComponent.prototype.subscribeToObservable = function (observable) {
        var _this = this;
        observable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            _this.markForCheck();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }))
            .subscribe(function () {
            _this.markForCheck();
        });
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../di */ "./src/di/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./src/services/index.ts");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../typography */ "./src/typography/index.ts");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _external__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../external */ "./src/app/external/index.ts");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout */ "./src/app/layout/index.ts");











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _services__WEBPACK_IMPORTED_MODULE_6__["ServicesModule"],
                _di__WEBPACK_IMPORTED_MODULE_5__["DependenciesModule"],
                _layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _external__WEBPACK_IMPORTED_MODULE_9__["ExternalModule"],
                _typography__WEBPACK_IMPORTED_MODULE_7__["TypographyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/directives/card.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/directives/card.directive.ts ***!
  \**********************************************/
/*! exports provided: CardDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDirective", function() { return CardDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardDirective = /** @class */ (function () {
    function CardDirective(hostElement, renderer) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.enableCard = true;
        this.addPad = true;
        this.padClass = 'pad';
        this.standardCardClass = 'w-card';
    }
    CardDirective.prototype.ngOnInit = function () {
        this.processCard();
    };
    CardDirective.prototype.ngOnChanges = function (changes) {
        this.processCard();
    };
    CardDirective.prototype.processCard = function () {
        if (this.hostElement) {
            if (this.addPad) {
                this.renderer.addClass(this.hostElement.nativeElement, this.padClass);
            }
            else {
                this.renderer.removeClass(this.hostElement.nativeElement, this.padClass);
            }
            this.renderer.addClass(this.hostElement.nativeElement, this.standardCardClass);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardDirective.prototype, "enableCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardDirective.prototype, "addPad", void 0);
    CardDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libCard]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CardDirective);
    return CardDirective;
}());



/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.directive */ "./src/app/directives/card.directive.ts");





var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [
                _card_directive__WEBPACK_IMPORTED_MODULE_4__["CardDirective"],
            ],
            exports: [
                _card_directive__WEBPACK_IMPORTED_MODULE_4__["CardDirective"]
            ]
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "./src/app/external/external.module.ts":
/*!*********************************************!*\
  !*** ./src/app/external/external.module.ts ***!
  \*********************************************/
/*! exports provided: ExternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalModule", function() { return ExternalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");







var ExternalModule = /** @class */ (function () {
    function ExternalModule() {
    }
    ExternalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatchModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["FileDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_6__["NgxJsonViewerModule"]
            ],
        })
    ], ExternalModule);
    return ExternalModule;
}());



/***/ }),

/***/ "./src/app/external/index.ts":
/*!***********************************!*\
  !*** ./src/app/external/index.ts ***!
  \***********************************/
/*! exports provided: ExternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _external_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external.module */ "./src/app/external/external.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExternalModule", function() { return _external_module__WEBPACK_IMPORTED_MODULE_0__["ExternalModule"]; });




/***/ }),

/***/ "./src/app/layout/index.ts":
/*!*********************************!*\
  !*** ./src/app/layout/index.ts ***!
  \*********************************/
/*! exports provided: MasterLayoutComponent, LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _master_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-layout.component */ "./src/app/layout/master-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterLayoutComponent", function() { return _master_layout_component__WEBPACK_IMPORTED_MODULE_0__["MasterLayoutComponent"]; });

/* harmony import */ var _layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.module */ "./src/app/layout/layout.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return _layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]; });





/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../di */ "./src/di/index.ts");
/* harmony import */ var _external__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../external */ "./src/app/external/index.ts");
/* harmony import */ var _master_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-layout.component */ "./src/app/layout/master-layout.component.ts");







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _master_layout_component__WEBPACK_IMPORTED_MODULE_6__["MasterLayoutComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _di__WEBPACK_IMPORTED_MODULE_4__["DependenciesModule"],
                _external__WEBPACK_IMPORTED_MODULE_5__["ExternalModule"]
            ],
            providers: [],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/master-layout.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/master-layout.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"w-full-width\" fxLayoutGap=\"16px\"\n        fxLayoutAlign=\"start center\">\n        <div fxLayout=\"column\" fxFlex=\"150px\" class=\"w-cursor-pointer\" (click)=\"sidenav.toggle()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 152 54\" width=\"100%\" height=\"50\">\n                <g fill=\"#fff\" fill-rule=\"evenodd\">\n                    <circle cx=\"27.1\" cy=\"27\" r=\"5.8\"></circle>\n                    <path\n                        d=\"M15.1 33.4l-6.9 6.9c-4.1 4.1 2.9 8.3 2.9 8.3l9.7-9.7c3.5-3.4-2.2-8.9-5.7-5.5zM39.1 20.6l6.9-6.9c4.1-4.1-2.9-8.3-2.9-8.3l-9.7 9.7c-3.4 3.4 2.3 8.9 5.7 5.5zM15.1 20.6c3.5 3.5 9-2.2 5.6-5.6l-6.9-6.9C9.7 4 5.4 11 5.4 11s5.8 5.7 9.7 9.6zM39.1 33.4c-3.5-3.5-9 2.2-5.6 5.7l6.9 6.9c4.1 4.1 8.3-2.9 8.3-2.9s-5.7-5.8-9.6-9.7zM40.1 23c-4.9 0-4.8 7.9.1 7.9H50c5.8 0 3.9-7.9 3.9-7.9H40.1zM14.1 23H4.3c-5.8 0-3.8 8-3.8 8h13.7c4.9 0 4.8-8-.1-8zM23.2 40v9.8c0 5.8 7.9 3.9 7.9 3.9V40c0-5-7.9-4.9-7.9 0zM31.1 14V4.2c0-5.8-7.9-3.9-7.9-3.9V14c0 5 7.9 4.9 7.9 0zM71.4 17.1c1.7-2.4 5-6.4 6.3-7.7v-.1h-2.3c-1.3 0-1.7.1-2.5 1-1.8 2-3.3 4.3-4.8 6.5v-5.2c0-1.2-.6-2.3-2.2-2.3h-1.1v14.5c0 1.2.6 2.3 2.2 2.3h1.1v-8.5c1.7 2.7 3.3 5.1 5.4 7.5.6.7 1.5 1.1 2.3 1.1 1.3 0 1.9-.5 2.2-1.7-.5-.1-.8-.3-1.3-.7-2.2-1.9-3.7-4.4-5.3-6.7zM85.3 26.3c3.6 0 4.8-1.3 4.8-3v-1H90c-1.1 1-2.7 1.2-4 1.2-1.9 0-3.5-1.1-3.7-2.7h2.2c4.4 0 6.2-.8 6.2-3.2 0-3.2-2.5-5.1-5.3-5.1-3.8 0-6.5 2.8-6.5 7.2-.1 4 3.1 6.6 6.4 6.6zm-3.1-8.2c.1-1.5 1.2-2.8 2.8-2.8 1.5 0 2.5.7 2.5 2 0 .9-.7 1.3-3.8 1.3h-1.5v-.5zM105 26v-7.7c0-3.7-2.6-5.8-5.7-5.8-4.1 0-5.9 2.9-5.9 5.7v5.7c0 1.2.9 2.2 2.3 2.2h1v-7.6c0-1.9 1-3 2.4-3 1.7 0 2.7 1 2.7 3.2v5.2c0 1.2.9 2.2 2.4 2.2h.8V26zM111.8 9.8h-.8c-.5 0-1.1.4-1.5.9-.7.8-1 1.3-1 2.6v7.9c0 3.1 1.6 4.9 4.9 4.9 1.9 0 2.9-.9 2.9-2.2v-1.2h-.1c-.5.3-1.3.5-2.4.5-1.3 0-2.1-.7-2.1-2.4v-5.2h2.6c1.3 0 2-.9 2-1.6v-1.3h-4.6V9.8h.1zM120.6 11.9c1.1 0 1.9-.9 1.9-1.9 0-1.1-.9-1.9-1.9-1.9-1.1 0-1.9.9-1.9 1.9 0 1 .8 1.9 1.9 1.9zM122.2 15.6c0-1.7-.9-2.4-2.3-2.4h-.9v8.9c0 2.7 1.4 4.1 3.9 4.1 1.4 0 2-.6 2-2v-.7h-.6c-1.4 0-2-.4-2-1.7v-6.2h-.1zM133.4 12.7c-4.5 0-7.1 3.2-7.1 7s3.1 6.6 6.8 6.6c2.4 0 3.9-1.2 3.9-2.7V22h-.1c-.5.6-1.6 1.2-3.5 1.2-2.2 0-3.6-1.6-3.6-4 0-2 1.7-3.5 3.6-3.5 1.9 0 3.1.6 3.6 1.4h.1v-1.5c-.1-1.6-1.5-2.9-3.7-2.9zM145.6 12.5c-4.3 0-6.5 3.2-6.5 7.1 0 3.5 2.3 6.7 6.2 6.7 4.3 0 6.5-3.2 6.5-7.1 0-3.5-2.2-6.7-6.2-6.7zm0 10.9c-2.2 0-3.1-1.6-3.1-4.2 0-2.2 1-3.7 2.8-3.7 2.2 0 3.1 1.6 3.1 4.2 0 2.1-.9 3.7-2.8 3.7zM72.8 30.6c-5.1 0-8.6 3.6-8.6 8.8 0 5 3.8 8.3 8.3 8.3 2.3 0 5-1 5-3.3v-1.2h-.1c-.9 1-2.8 1.6-4.4 1.6-3.2 0-5.3-2-5.3-5.9 0-3.3 2.2-5.4 5.2-5.4 1.4 0 3.5.4 4.6 1.8h.1V34c-.1-2.2-2.1-3.4-4.8-3.4zM83.4 43.3V32.2c0-1.2-.7-2.2-2.3-2.2h-.9v13.6c0 2.7 1.5 4.1 4.2 4.1 1.4 0 2.2-.6 2.2-2V45h-.9c-1.6.1-2.3-.3-2.3-1.7zM94.5 34.1c-4.3 0-6.5 3.2-6.5 7.1 0 3.5 2.3 6.7 6.2 6.7 4.3 0 6.5-3.2 6.5-7.1.1-3.5-2.2-6.7-6.2-6.7zm0 10.9c-2.2 0-3.1-1.6-3.1-4.2 0-2.2 1-3.7 2.8-3.7 2.2 0 3.1 1.6 3.1 4.2.1 2.1-.8 3.7-2.8 3.7zM112.5 34.4h-.6v7.4c0 2.3-1 3.2-2.3 3.2-1.5 0-2.7-1-2.7-3.4v-4.8c0-1.5-.8-2.3-2.7-2.3h-.6V42c0 3.8 2.6 6 5.8 6 3.8 0 5.8-2.1 5.8-6.2v-4.9c0-1.7-.8-2.5-2.7-2.5zM128.3 30h-1v6.2c-.5-1.2-2-2.1-3.3-2.1-3.8 0-5.9 2.8-5.9 7.1 0 3.6 2.7 6.7 6.1 6.7 4.5 0 6.3-2.5 6.3-6.4v-9.3c0-1.3-.7-2.2-2.2-2.2zm-3.7 15.2c-1.9 0-3.3-1.8-3.3-4.5 0-2.1 1.1-3.7 2.7-3.7 1.8 0 3.2 1.2 3.2 4.5 0 2.3-.8 3.7-2.6 3.7z\">\n                    </path>\n                </g>\n            </svg>\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"initial\" fxShow fxHide.lt-lg>\n            {{ appName }}\n        </div>\n        <div fxLayout=\"column\" fxFlex>\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"initial\" class=\"w-layout-version\">\n            <a fxShow fxHide.lt-sm mat-flat-button color=\"accent\" target=\"_blank\"\n                href=\"https://github.com/Kentico/cloud-template-manager/blob/master/README.md#submitting-web-template-to-templates-gallery\">\n                Submit web template\n            </a>\n            <a fxHide fxShow.lt-sm mat-mini-fab color=\"accent\" target=\"_blank\"\n                href=\"https://github.com/Kentico/cloud-template-manager/blob/master/README.md#submitting-web-template-to-templates-gallery\">\n                <mat-icon>add</mat-icon>\n            </a>\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"initial\" fxShow fxHide.lt-lg class=\"w-layout-version\">\n            v{{ version }}\n        </div>\n        <a fxLayout=\"column\" href=\"https://github.com/Kentico/cloud-template-manager\" target=\"_blank\">\n            <img class=\"w-layout-github-logo\" alt=\"GitHub logo\" src=\"https://image.flaticon.com/icons/svg/25/25231.svg\">\n        </a>\n    </div>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"w-layout-container\">\n\n    <mat-sidenav #sidenav opened [mode]=\"isSmallScreen ? 'over' : 'side'\" [opened]=\"isSmallScreen ? 'false' : 'true'\"\n        class=\"w-layout-side-menu\">\n        <ng-container *ngFor=\"let item of navigationItems\">\n            <a *ngIf=\"item.type === 'link'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                class=\"w-layout-side-item active\" [class.active]=\"menuItemIsActive(item.routerLink)\"\n                [routerLink]=\"item.routerLink\">\n                <div fxLayout=\"column\" class=\"push-right\">\n                    <mat-icon>{{ item.icon }}</mat-icon>\n                </div>\n                <div fxLayout=\"column\" fxFlex>\n                    {{ item.title}}\n                </div>\n            </a>\n            <div *ngIf=\"item.type === 'section'\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                class=\"w-layout-side-section\">\n                <div fxLayout=\"column\" fxFlex=\"100%\">\n                    {{ item.title }}\n                </div>\n            </div>\n        </ng-container>\n    </mat-sidenav>\n\n    <div class=\"w-layout-content\">\n        <router-outlet></router-outlet>\n    </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layout/master-layout.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/master-layout.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body .push {\n  margin: 16px; }\n\nbody .push-xxl {\n  margin: 56px; }\n\nbody .push-xl {\n  margin: 48px; }\n\nbody .push-lg {\n  margin: 32px; }\n\nbody .push-md {\n  margin: 24px; }\n\nbody .push-sm {\n  margin: 8px; }\n\nbody .push-xs {\n  margin: 4px; }\n\nbody .push-none {\n  margin: 0; }\n\nbody .push-bottom {\n  margin-bottom: 16px; }\n\nbody .push-bottom-xxl {\n  margin-bottom: 56px; }\n\nbody .push-bottom-xl {\n  margin-bottom: 48px; }\n\nbody .push-bottom-lg {\n  margin-bottom: 32px; }\n\nbody .push-bottom-md {\n  margin-bottom: 24px; }\n\nbody .push-bottom-sm {\n  margin-bottom: 8px; }\n\nbody .push-bottom-xs {\n  margin-bottom: 4px; }\n\nbody .push-bottom-none {\n  margin-bottom: 0; }\n\nbody .push-top {\n  margin-top: 16px; }\n\nbody .push-top-xxl {\n  margin-top: 56px; }\n\nbody .push-top-xl {\n  margin-top: 48px; }\n\nbody .push-top-lg {\n  margin-top: 32px; }\n\nbody .push-top-md {\n  margin-top: 24px; }\n\nbody .push-top-sm {\n  margin-top: 8px; }\n\nbody .push-top-xs {\n  margin-top: 4px; }\n\nbody .push-top-none {\n  margin-top: 0; }\n\nbody .push-left {\n  margin-left: 16px; }\n\nbody .push-left-xxl {\n  margin-left: 56px; }\n\nbody .push-left-xl {\n  margin-left: 48px; }\n\nbody .push-left-lg {\n  margin-left: 32px; }\n\nbody .push-left-md {\n  margin-left: 24px; }\n\nbody .push-left-sm {\n  margin-left: 8px; }\n\nbody .push-left-xs {\n  margin-left: 4px; }\n\nbody .push-left-none {\n  margin-left: 0; }\n\nbody .push-right {\n  margin-right: 16px; }\n\nbody .push-right-xxl {\n  margin-right: 56px; }\n\nbody .push-right-xl {\n  margin-right: 48px; }\n\nbody .push-right-lg {\n  margin-right: 32px; }\n\nbody .push-right-md {\n  margin-right: 24px; }\n\nbody .push-right-sm {\n  margin-right: 8px; }\n\nbody .push-right-xs {\n  margin-right: 4px; }\n\nbody .push-right-none {\n  margin-right: 0; }\n\nbody .pad {\n  padding: 16px; }\n\nbody .pad-xxl {\n  padding: 56px; }\n\nbody .pad-xl {\n  padding: 48px; }\n\nbody .pad-lg {\n  padding: 32px; }\n\nbody .pad-md {\n  padding: 24px; }\n\nbody .pad-sm {\n  padding: 8px; }\n\nbody .pad-xs {\n  padding: 4px; }\n\nbody .pad-none {\n  padding: 0; }\n\nbody .pad-bottom {\n  padding-bottom: 16px; }\n\nbody .pad-bottom-xxl {\n  padding-bottom: 56px; }\n\nbody .pad-bottom-xl {\n  padding-bottom: 48px; }\n\nbody .pad-bottom-lg {\n  padding-bottom: 32px; }\n\nbody .pad-bottom-md {\n  padding-bottom: 24px; }\n\nbody .pad-bottom-sm {\n  padding-bottom: 8px; }\n\nbody .pad-bottom-xs {\n  padding-bottom: 4px; }\n\nbody .pad-bottom-none {\n  padding-bottom: 0; }\n\nbody .pad-top {\n  padding-top: 16px; }\n\nbody .pad-top-xxl {\n  padding-top: 56px; }\n\nbody .pad-top-xl {\n  padding-top: 48px; }\n\nbody .pad-top-lg {\n  padding-top: 32px; }\n\nbody .pad-top-md {\n  padding-top: 24px; }\n\nbody .pad-top-sm {\n  padding-top: 8px; }\n\nbody .pad-top-xs {\n  padding-top: 4px; }\n\nbody .pad-top-none {\n  padding-top: 0; }\n\nbody .pad-left {\n  padding-left: 16px; }\n\nbody .pad-left-xxl {\n  padding-left: 56px; }\n\nbody .pad-left-xl {\n  padding-left: 48px; }\n\nbody .pad-left-lg {\n  padding-left: 32px; }\n\nbody .pad-left-md {\n  padding-left: 24px; }\n\nbody .pad-left-sm {\n  padding-left: 8px; }\n\nbody .pad-left-xs {\n  padding-left: 4px; }\n\nbody .pad-left-none {\n  padding-left: 0; }\n\nbody .pad-right {\n  padding-right: 16px; }\n\nbody .pad-right-xxl {\n  padding-right: 56px; }\n\nbody .pad-right-xl {\n  padding-right: 48px; }\n\nbody .pad-right-lg {\n  padding-right: 32px; }\n\nbody .pad-right-md {\n  padding-right: 24px; }\n\nbody .pad-right-sm {\n  padding-right: 8px; }\n\nbody .pad-right-xs {\n  padding-right: 4px; }\n\nbody .pad-right-none {\n  padding-right: 0; }\n\nbody .push {\n  margin: 16px; }\n\nbody .push-xxl {\n  margin: 56px; }\n\nbody .push-xl {\n  margin: 48px; }\n\nbody .push-lg {\n  margin: 32px; }\n\nbody .push-md {\n  margin: 24px; }\n\nbody .push-sm {\n  margin: 8px; }\n\nbody .push-xs {\n  margin: 4px; }\n\nbody .push-none {\n  margin: 0; }\n\nbody .push-bottom {\n  margin-bottom: 16px; }\n\nbody .push-bottom-xxl {\n  margin-bottom: 56px; }\n\nbody .push-bottom-xl {\n  margin-bottom: 48px; }\n\nbody .push-bottom-lg {\n  margin-bottom: 32px; }\n\nbody .push-bottom-md {\n  margin-bottom: 24px; }\n\nbody .push-bottom-sm {\n  margin-bottom: 8px; }\n\nbody .push-bottom-xs {\n  margin-bottom: 4px; }\n\nbody .push-bottom-none {\n  margin-bottom: 0; }\n\nbody .push-top {\n  margin-top: 16px; }\n\nbody .push-top-xxl {\n  margin-top: 56px; }\n\nbody .push-top-xl {\n  margin-top: 48px; }\n\nbody .push-top-lg {\n  margin-top: 32px; }\n\nbody .push-top-md {\n  margin-top: 24px; }\n\nbody .push-top-sm {\n  margin-top: 8px; }\n\nbody .push-top-xs {\n  margin-top: 4px; }\n\nbody .push-top-none {\n  margin-top: 0; }\n\nbody .push-left {\n  margin-left: 16px; }\n\nbody .push-left-xxl {\n  margin-left: 56px; }\n\nbody .push-left-xl {\n  margin-left: 48px; }\n\nbody .push-left-lg {\n  margin-left: 32px; }\n\nbody .push-left-md {\n  margin-left: 24px; }\n\nbody .push-left-sm {\n  margin-left: 8px; }\n\nbody .push-left-xs {\n  margin-left: 4px; }\n\nbody .push-left-none {\n  margin-left: 0; }\n\nbody .push-right {\n  margin-right: 16px; }\n\nbody .push-right-xxl {\n  margin-right: 56px; }\n\nbody .push-right-xl {\n  margin-right: 48px; }\n\nbody .push-right-lg {\n  margin-right: 32px; }\n\nbody .push-right-md {\n  margin-right: 24px; }\n\nbody .push-right-sm {\n  margin-right: 8px; }\n\nbody .push-right-xs {\n  margin-right: 4px; }\n\nbody .push-right-none {\n  margin-right: 0; }\n\n.w-card {\n  border-radius: 5px;\n  box-shadow: #dde5ea 0px 2px 15px;\n  background-color: #ffffff;\n  color: inherit; }\n\n.w-layout-container {\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #f0f0f0; }\n\n.w-layout-side-menu {\n  width: 270px; }\n\n.w-layout-content {\n  margin: 16px; }\n\n.w-layout-github-logo {\n  height: 40px; }\n\n.w-layout-side-item {\n  display: block;\n  text-decoration: none;\n  padding: 12px;\n  color: #5f5f5f;\n  font-size: 14px;\n  cursor: pointer; }\n\n.w-layout-side-item:hover {\n    /* background-color: $accentColor; */\n    color: #008ae1; }\n\n.w-layout-side-item.active {\n    /* background-color: rgb(238, 238, 238); */\n    color: #008ae1;\n    background: #f0f0f0; }\n\n.w-layout-side-section {\n  display: block;\n  text-align: left;\n  text-decoration: none;\n  font-weight: 600;\n  padding: 12px;\n  font-size: 12px;\n  color: #2b2b2b;\n  border-top: solid 1px #c9c9c9; }\n\n.w-layout-version {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9LZW50aWNvL2Nsb3VkLXRlbXBsYXRlLW1hbmFnZXIvc3JjL2Fzc2V0cy9zdHlsZXMvdXRpbGl0aWVzL3B1c2guc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9LZW50aWNvL2Nsb3VkLXRlbXBsYXRlLW1hbmFnZXIvc3JjL2Fzc2V0cy9zdHlsZXMvdXRpbGl0aWVzL3BhZC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL0tlbnRpY28vY2xvdWQtdGVtcGxhdGUtbWFuYWdlci9zcmMvYXNzZXRzL3N0eWxlcy9kaXJlY3RpdmVzL19jYXJkLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvS2VudGljby9jbG91ZC10ZW1wbGF0ZS1tYW5hZ2VyL3NyYy9hcHAvbGF5b3V0L21hc3Rlci1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvS2VudGljby9jbG91ZC10ZW1wbGF0ZS1tYW5hZ2VyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy1jb3JlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUErQixFQUFBOztBQUVqQztFQUNFLFlBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBK0IsRUFBQTs7QUFFakM7RUFDRSxZQUErQixFQUFBOztBQUVqQztFQUNFLFlBQStCLEVBQUE7O0FBRWpDO0VBQ0UsV0FBOEIsRUFBQTs7QUFFaEM7RUFDRSxXQUE4QixFQUFBOztBQUVoQztFQUNFLFNBQTRCLEVBQUE7O0FBdEI5QjtFQUNFLG1CQUErQixFQUFBOztBQUVqQztFQUNFLG1CQUErQixFQUFBOztBQUVqQztFQUNFLG1CQUErQixFQUFBOztBQUVqQztFQUNFLG1CQUErQixFQUFBOztBQUVqQztFQUNFLG1CQUErQixFQUFBOztBQUVqQztFQUNFLGtCQUE4QixFQUFBOztBQUVoQztFQUNFLGtCQUE4QixFQUFBOztBQUVoQztFQUNFLGdCQUE0QixFQUFBOztBQXRCOUI7RUFDRSxnQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxnQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxnQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxnQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxnQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxlQUE4QixFQUFBOztBQUVoQztFQUNFLGVBQThCLEVBQUE7O0FBRWhDO0VBQ0UsYUFBNEIsRUFBQTs7QUF0QjlCO0VBQ0UsaUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsaUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsaUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsaUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsaUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsZ0JBQThCLEVBQUE7O0FBRWhDO0VBQ0UsZ0JBQThCLEVBQUE7O0FBRWhDO0VBQ0UsY0FBNEIsRUFBQTs7QUF0QjlCO0VBQ0Usa0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usa0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usa0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usa0JBQStCLEVBQUE7O0FBRWpDO0VBQ0Usa0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsaUJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsaUJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsZUFBNEIsRUFBQTs7QUN0QjlCO0VBQ0ksYUFBaUMsRUFBQTs7QUFFckM7RUFDSSxhQUFpQyxFQUFBOztBQUVyQztFQUNJLGFBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksYUFBaUMsRUFBQTs7QUFFckM7RUFDSSxhQUFpQyxFQUFBOztBQUVyQztFQUNJLFlBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksWUFBZ0MsRUFBQTs7QUFFcEM7RUFDSSxVQUE4QixFQUFBOztBQXRCbEM7RUFDSSxvQkFBaUMsRUFBQTs7QUFFckM7RUFDSSxvQkFBaUMsRUFBQTs7QUFFckM7RUFDSSxvQkFBaUMsRUFBQTs7QUFFckM7RUFDSSxvQkFBaUMsRUFBQTs7QUFFckM7RUFDSSxvQkFBaUMsRUFBQTs7QUFFckM7RUFDSSxtQkFBZ0MsRUFBQTs7QUFFcEM7RUFDSSxtQkFBZ0MsRUFBQTs7QUFFcEM7RUFDSSxpQkFBOEIsRUFBQTs7QUF0QmxDO0VBQ0ksaUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksaUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksaUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksaUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksaUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksZ0JBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksZ0JBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksY0FBOEIsRUFBQTs7QUF0QmxDO0VBQ0ksa0JBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksaUJBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksaUJBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksZUFBOEIsRUFBQTs7QUF0QmxDO0VBQ0ksbUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksbUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksbUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksbUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksbUJBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksa0JBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksa0JBQWdDLEVBQUE7O0FBRXBDO0VBQ0ksZ0JBQThCLEVBQUE7O0FEdEJsQztFQUNFLFlBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBK0IsRUFBQTs7QUFFakM7RUFDRSxZQUErQixFQUFBOztBQUVqQztFQUNFLFlBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBK0IsRUFBQTs7QUFFakM7RUFDRSxXQUE4QixFQUFBOztBQUVoQztFQUNFLFdBQThCLEVBQUE7O0FBRWhDO0VBQ0UsU0FBNEIsRUFBQTs7QUF0QjlCO0VBQ0UsbUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsbUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsbUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsbUJBQStCLEVBQUE7O0FBRWpDO0VBQ0UsbUJBQStCLEVBQUE7O0FBRWpDO0VBQ0Usa0JBQThCLEVBQUE7O0FBRWhDO0VBQ0Usa0JBQThCLEVBQUE7O0FBRWhDO0VBQ0UsZ0JBQTRCLEVBQUE7O0FBdEI5QjtFQUNFLGdCQUErQixFQUFBOztBQUVqQztFQUNFLGdCQUErQixFQUFBOztBQUVqQztFQUNFLGdCQUErQixFQUFBOztBQUVqQztFQUNFLGdCQUErQixFQUFBOztBQUVqQztFQUNFLGdCQUErQixFQUFBOztBQUVqQztFQUNFLGVBQThCLEVBQUE7O0FBRWhDO0VBQ0UsZUFBOEIsRUFBQTs7QUFFaEM7RUFDRSxhQUE0QixFQUFBOztBQXRCOUI7RUFDRSxpQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxnQkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxnQkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxjQUE0QixFQUFBOztBQXRCOUI7RUFDRSxrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxrQkFBK0IsRUFBQTs7QUFFakM7RUFDRSxpQkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxpQkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxlQUE0QixFQUFBOztBRXRCOUI7RUFDSSxrQkFBa0I7RUFDbEIsZ0NBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FDSnRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixtQkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQU5uQjtJQVFRLG9DQUFBO0lBQ0EsY0N2QmMsRUFBQTs7QURjdEI7SUFhTywwQ0FBQTtJQUNDLGNDNUJjO0lENkJkLG1CQUE4QixFQUFBOztBQUt0QztFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGNBQXNCO0VBQ3RCLDZCQUF3QyxFQUFBOztBQUc1QztFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYXN0ZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHB1c2goJGRpcmVjdGlvbjogJycpIHtcbiAgICAucHVzaCN7JGRpcmVjdGlvbn0ge1xuICAgICAgbWFyZ2luI3skZGlyZWN0aW9ufTogMTZweDtcbiAgICB9XG4gICAgLnB1c2gjeyRkaXJlY3Rpb259LXh4bCB7XG4gICAgICBtYXJnaW4jeyRkaXJlY3Rpb259OiA1NnB4O1xuICAgIH1cbiAgICAucHVzaCN7JGRpcmVjdGlvbn0teGwge1xuICAgICAgbWFyZ2luI3skZGlyZWN0aW9ufTogNDhweDtcbiAgICB9XG4gICAgLnB1c2gjeyRkaXJlY3Rpb259LWxnIHtcbiAgICAgIG1hcmdpbiN7JGRpcmVjdGlvbn06IDMycHg7XG4gICAgfVxuICAgIC5wdXNoI3skZGlyZWN0aW9ufS1tZCB7XG4gICAgICBtYXJnaW4jeyRkaXJlY3Rpb259OiAyNHB4O1xuICAgIH1cbiAgICAucHVzaCN7JGRpcmVjdGlvbn0tc20ge1xuICAgICAgbWFyZ2luI3skZGlyZWN0aW9ufTogOHB4O1xuICAgIH1cbiAgICAucHVzaCN7JGRpcmVjdGlvbn0teHMge1xuICAgICAgbWFyZ2luI3skZGlyZWN0aW9ufTogNHB4O1xuICAgIH1cbiAgICAucHVzaCN7JGRpcmVjdGlvbn0tbm9uZSB7XG4gICAgICBtYXJnaW4jeyRkaXJlY3Rpb259OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQG1peGluIHB1c2gtdXRpbGl0aWVzKCkge1xuICAgIGJvZHkge1xuICAgICAgQGluY2x1ZGUgcHVzaCgpO1xuICAgICAgQGluY2x1ZGUgcHVzaCgtYm90dG9tKTtcbiAgICAgIEBpbmNsdWRlIHB1c2goLXRvcCk7XG4gICAgICBAaW5jbHVkZSBwdXNoKC1sZWZ0KTtcbiAgICAgIEBpbmNsdWRlIHB1c2goLXJpZ2h0KTtcbiAgICB9XG4gIH1cbiAgXG4gIEBpbmNsdWRlIHB1c2gtdXRpbGl0aWVzKCk7IiwiQG1peGluIHBhZCgkZGlyZWN0aW9uOiAnJykge1xuICAgIC5wYWQjeyRkaXJlY3Rpb259IHtcbiAgICAgICAgcGFkZGluZyN7JGRpcmVjdGlvbn06IDE2cHg7XG4gICAgfVxuICAgIC5wYWQjeyRkaXJlY3Rpb259LXh4bCB7XG4gICAgICAgIHBhZGRpbmcjeyRkaXJlY3Rpb259OiA1NnB4O1xuICAgIH1cbiAgICAucGFkI3skZGlyZWN0aW9ufS14bCB7XG4gICAgICAgIHBhZGRpbmcjeyRkaXJlY3Rpb259OiA0OHB4O1xuICAgIH1cbiAgICAucGFkI3skZGlyZWN0aW9ufS1sZyB7XG4gICAgICAgIHBhZGRpbmcjeyRkaXJlY3Rpb259OiAzMnB4O1xuICAgIH1cbiAgICAucGFkI3skZGlyZWN0aW9ufS1tZCB7XG4gICAgICAgIHBhZGRpbmcjeyRkaXJlY3Rpb259OiAyNHB4O1xuICAgIH1cbiAgICAucGFkI3skZGlyZWN0aW9ufS1zbSB7XG4gICAgICAgIHBhZGRpbmcjeyRkaXJlY3Rpb259OiA4cHg7XG4gICAgfVxuICAgIC5wYWQjeyRkaXJlY3Rpb259LXhzIHtcbiAgICAgICAgcGFkZGluZyN7JGRpcmVjdGlvbn06IDRweDtcbiAgICB9XG4gICAgLnBhZCN7JGRpcmVjdGlvbn0tbm9uZSB7XG4gICAgICAgIHBhZGRpbmcjeyRkaXJlY3Rpb259OiAwO1xuICAgIH1cbn1cblxuQG1peGluIHBhZC11dGlsaXRpZXMoKSB7XG4gICAgYm9keSB7XG4gICAgICAgIEBpbmNsdWRlIHBhZCgpO1xuICAgICAgICBAaW5jbHVkZSBwYWQoLWJvdHRvbSk7XG4gICAgICAgIEBpbmNsdWRlIHBhZCgtdG9wKTtcbiAgICAgICAgQGluY2x1ZGUgcGFkKC1sZWZ0KTtcbiAgICAgICAgQGluY2x1ZGUgcGFkKC1yaWdodCk7XG4gICAgfVxufVxuIiwiQG1peGluIGNhcmQoKSB7XG4gICAgLnctY2FyZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDIyMSwgMjI5LCAyMzQpIDBweCAycHggMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLWNvcmUuc2Nzcyc7XG4udy1sYXlvdXQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2NHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn1cblxuLnctbGF5b3V0LXNpZGUtbWVudSB7XG4gICAgd2lkdGg6IDI3MHB4O1xufVxuXG4udy1sYXlvdXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAxNnB4O1xufVxuXG4udy1sYXlvdXQtZ2l0aHViLWxvZ28ge1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnctbGF5b3V0LXNpZGUtaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgY29sb3I6IHJnYig5NSwgOTUsIDk1KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50Q29sb3I7ICovXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7ICovXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgfVxuIFxufVxuXG4udy1sYXlvdXQtc2lkZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yIDpyZ2IoNDMsIDQzLCA0Myk7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYigyMDEsIDIwMSwgMjAxKTtcbn1cblxuLnctbGF5b3V0LXZlcnNpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iLCJAaW1wb3J0ICcuL3V0aWxpdGllcy9wdXNoJztcbkBpbXBvcnQgJy4vdXRpbGl0aWVzL3BhZCc7XG5AaW1wb3J0ICcuL2RpcmVjdGl2ZXMvY2FyZCc7XG5cbkBpbmNsdWRlIHBhZC11dGlsaXRpZXMoKTtcbkBpbmNsdWRlIHB1c2gtdXRpbGl0aWVzKCk7XG5AaW5jbHVkZSBjYXJkKCk7XG5cbiRwcmltYXJ5Q29sb3I6ICMwMDhhZTE7XG4kYWNjZW50Q29sb3I6ICNmMDVhMjI7XG4kcHJpbWFyeUNvbG9yQ29udHJhc3Q6IHdoaXRlO1xuJGFjY2VudENvbG9yQ29udHJhc3Q6IHdoaXRlO1xuIl19 */"

/***/ }),

/***/ "./src/app/layout/master-layout.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/master-layout.component.ts ***!
  \***************************************************/
/*! exports provided: MasterLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterLayoutComponent", function() { return MasterLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../di */ "./src/di/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _core_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/base.component */ "./src/app/core/base.component.ts");






var MasterLayoutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MasterLayoutComponent, _super);
    function MasterLayoutComponent(dependencies, cdr) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.appName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appName;
        _this.navigationItems = [
            {
                title: 'Import & export',
                type: 'section'
            },
            {
                title: 'Import from project',
                routerLink: '/',
                icon: 'settings_backup_restore',
                type: 'link'
            },
            {
                title: 'Import from file',
                routerLink: '/import-from-file',
                icon: 'settings_backup_restore',
                type: 'link'
            },
            {
                title: 'Migrate items between projects',
                routerLink: '/migrate-content-items',
                icon: 'sync',
                type: 'link'
            },
            {
                title: 'Export',
                routerLink: '/export',
                icon: 'cloud_download',
                type: 'link'
            },
            {
                title: 'Common',
                type: 'section'
            },
            {
                title: 'Cleanup',
                routerLink: '/cleanup',
                icon: 'delete',
                type: 'link'
            },
            {
                title: 'Gallery',
                type: 'section'
            },
            {
                title: 'Templates',
                routerLink: '/templates',
                icon: 'list',
                type: 'link'
            },
            {
                title: 'FAQ',
                type: 'section'
            },
            {
                title: 'Limitations',
                routerLink: '/limitations',
                icon: 'help',
                type: 'link'
            }
        ];
        return _this;
    }
    MasterLayoutComponent.prototype.ngOnInit = function () {
    };
    MasterLayoutComponent.prototype.menuItemIsActive = function (path, exactMatch) {
        if (exactMatch === void 0) { exactMatch = true; }
        var currentUrlWithoutQueryString = this.removeQueryStringFromUrl(this.dependencies.router.url);
        // get urls to compare
        var processedCurrentUrl = this.getActionUrl(currentUrlWithoutQueryString);
        var processedItemUrl = this.getActionUrl(path);
        if (exactMatch) {
            return processedCurrentUrl.toLowerCase() === processedItemUrl.toLowerCase();
        }
        return processedCurrentUrl.startsWith(processedItemUrl);
    };
    MasterLayoutComponent.prototype.getActionUrl = function (action) {
        if (!action) {
            return '';
        }
        // prepare route url
        var routeUrl = action;
        // add starting '/'
        if (!routeUrl.startsWith('/')) {
            routeUrl = '/' + routeUrl;
        }
        // remove '/' from end
        if (routeUrl.endsWith('/')) {
            routeUrl = routeUrl.substring(0, routeUrl.length - 1);
        }
        return routeUrl;
    };
    MasterLayoutComponent.prototype.removeQueryStringFromUrl = function (url) {
        if (!url) {
            return '';
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["stringHelper"].removeEverythingAfterIncludingSeparator(url, '?');
    };
    MasterLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./master-layout.component.html */ "./src/app/layout/master-layout.component.html"),
            styles: [__webpack_require__(/*! ./master-layout.component.scss */ "./src/app/layout/master-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_2__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MasterLayoutComponent);
    return MasterLayoutComponent;
}(_core_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/export/export.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/export/export.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"push-bottom\" *ngIf=\"error\">\n    <lib-message [type]=\"'error'\" [text]=\"error\"></lib-message>\n</div>\n\n<h1>\n    Export data\n</h1>\n\n<p class=\"push-top push-bottom\">\n    This function enables you to create <em>json</em> export package of data from given project\n</p>\n\n<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n\n<ng-container *ngIf=\"step === 'initial'\">\n    <div [formGroup]=\"formGroup\">\n        <div libCard class=\"push-top\">\n            <mat-form-field class=\"w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"projectId\" required>\n            </mat-form-field>\n\n            <mat-form-field class=\"push-top w-full-width\">\n                <input autocomplete=\"off\" matInput\n                    placeholder=\"Languages - separated by semicolon such as 'en-US; es-ES'. Leave empty for default language.\"\n                    formControlName=\"languages\">\n            </mat-form-field>\n        </div>\n    </div>\n    <div>\n\n        <div class=\"push-top\">\n            <button *ngIf=\"canSubmit\" (click)=\"handleExport()\" mat-raised-button color=\"warn\">Export data</button>\n            <button disabled *ngIf=\"!canSubmit\" (click)=\"handleExport()\" mat-raised-button>Export data</button>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'completed'\">\n    <div>\n        <lib-message [type]=\"'success'\" [text]=\"'Data was exported successfully.'\"></lib-message>\n\n        <div class=\"push-top\" *ngIf=\"showDownloadButton\">\n            <button mat-raised-button color=\"accent\" (click)=\"handleDownloadFile()\">Download zip</button>\n        </div>\n\n        <div libTitle1 class=\"push-top\">\n            Preview of exported data\n        </div>\n\n        <div class=\"push-top\">\n            <lib-import-data-preview [previewData]=\"importPreviewData\"></lib-import-data-preview>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'exporting'\">\n    <div libCard>\n        <lib-processed-items></lib-processed-items>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/pages/export/export.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/export/export.component.ts ***!
  \**************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kentico-cloud-core */ "./node_modules/kentico-cloud-core/_commonjs/index.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/preview/preview-helper */ "./src/app/components/preview/preview-helper.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/base-page.component */ "./src/app/core/base-page.component.ts");










var ExportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExportComponent, _super);
    function ExportComponent(dependencies, cdr, fb) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.fb = fb;
        _this.step = 'initial';
        _this.formGroup = _this.fb.group({
            projectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.sourceProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            languages: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.languages],
        });
        return _this;
    }
    Object.defineProperty(ExportComponent.prototype, "importPreviewData", {
        get: function () {
            if (!this.importData) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__["previewHelper"].convertFromImportData(this.importData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "canSubmit", {
        get: function () {
            return this.formGroup.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "parsedLanguages", {
        get: function () {
            var languagesValue = this.formGroup.controls['languages'].value;
            if (!languagesValue) {
                return [];
            }
            return languagesValue.split(';').map(function (m) { return m.trim(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportComponent.prototype, "showDownloadButton", {
        get: function () {
            if (this.importData) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ExportComponent.prototype.handleDownloadFile = function () {
        var _this = this;
        var config = this.getConfig();
        if (config && this.importData) {
            this.dependencies.exportService.createAndDownloadZipFile(config.projectId, this.importData, function () {
                _super.prototype.stopLoading.call(_this);
                _this.step = 'completed';
                _super.prototype.detectChanges.call(_this);
            });
        }
    };
    ExportComponent.prototype.handleExport = function () {
        var _this = this;
        var config = this.getConfig();
        this.resetErrors();
        if (config) {
            this.step = 'exporting';
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.exportService.getImportDataWithDeliveryApi({
                languages: this.parsedLanguages,
                publishAllItems: false,
                sourceProjectId: config.projectId,
                targetProjectCmApiKey: 'xxx',
                targetProjectId: 'xxx',
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
                _this.importData = result;
                _this.handleDownloadFile();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                if (err instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = err.message;
                }
                else {
                    _this.error = err;
                }
                _super.prototype.stopLoading.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            })));
        }
    };
    ExportComponent.prototype.getConfig = function () {
        var projectId = this.formGroup.controls['projectId'].value;
        if (!projectId) {
            this.error = 'Invalid project id';
            return;
        }
        return {
            projectId: projectId,
        };
    };
    ExportComponent.prototype.resetErrors = function () {
        this.error = undefined;
    };
    ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/pages/export/export.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_6__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ExportComponent);
    return ExportComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/faq/limitations.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/faq/limitations.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Limitations\n</h1>\n\n<div libCard>\n    <p class=\"push-top\">\n        Currently, the <em>export package</em> is created using <strong>Delivery API</strong>, and as such it cannot\n        make\n        an\n        identical copy of your project. Some information is not available through Delivery API and is lost during\n        export/import process. Once the <strong>Content managemenent API</strong> is mature enough, this application\n        will switch to it to create better export packages with more information.\n    </p>\n</div>\n\n<div class=\"push-top\">\n    <h3>Current limitations include:</h3>\n\n    <div libCard>\n        <mat-list role=\"list\">\n            <mat-list-item role=\"listitem\">1) Content type snippets are not preserved, but data is not lost. Instead,\n                these\n                elements are created on each content type separately.</mat-list-item>\n            <mat-list-item role=\"listitem\">2) Components in rich text elements are created as standalone linked items\n                (they\n                are preserved correctly in rich text values)</mat-list-item>\n            <mat-list-item role=\"listitem\">3) Content type configuration is lost (e.g. size limitations for assets,\n                allowed content types for linked item elements...)</mat-list-item>\n            <mat-list-item role=\"listitem\">4) Only published items are exported</mat-list-item>\n            <mat-list-item role=\"listitem\">5) Assets folder categorization is not preserved and assets are created in\n                flat structure</mat-list-item>\n            <mat-list-item role=\"listitem\">6) API does not allow setting specific codenames and it may happen that\n                certain items/types/assets will have different codename and in some cases name (for assets whose name is\n                not part of delivery response)</mat-list-item>\n        </mat-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/faq/limitations.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/faq/limitations.component.ts ***!
  \****************************************************/
/*! exports provided: LimitationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitationsComponent", function() { return LimitationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/base-page.component */ "./src/app/core/base-page.component.ts");




var LimitationsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LimitationsComponent, _super);
    function LimitationsComponent(dependencies, cdr) {
        return _super.call(this, dependencies, cdr) || this;
    }
    LimitationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./limitations.component.html */ "./src/app/pages/faq/limitations.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_2__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LimitationsComponent);
    return LimitationsComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_3__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/import/import-from-file.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/import/import-from-file.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Import from export package\n</h1>\n\n<div class=\"push-bottom\" *ngIf=\"error\">\n    <lib-message [type]=\"'error'\" [text]=\"error\"></lib-message>\n</div>\n\n<ng-container *ngIf=\"step === 'initial'\" [formGroup]=\"formGroup\">\n\n    <div libTitle1 class=\"push-top\">\n        Target Project\n    </div>\n\n    <div libCard>\n        <mat-form-field class=\"w-full-width\">\n            <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"projectId\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"push-top w-full-width\">\n            <input autocomplete=\"off\" matInput placeholder=\"CM API Key\" formControlName=\"cmApiKey\" required>\n        </mat-form-field>\n\n        <div class=\"push-top\">\n            <file-drop dropZoneLabel=\"Drop export package here\" (onFileDrop)=\"dropped($event)\">\n                <span></span>\n            </file-drop>\n            <div class=\"push-top\">\n                Or select file <input #selectFileElem (change)=\"handleManualInputOnChange($event)\" type=\"file\"\n                    accept=\".zip\">\n            </div>\n\n            <div *ngIf=\"file\" class=\"push-top\" libTextCaption>\n                <em>{{ file.name }} </em>\n            </div>\n        </div>\n    </div>\n\n    <div libTitle1 class=\"push-top\">\n        Configuration\n    </div>\n\n    <div libCard>\n        <mat-checkbox formControlName=\"publishAllItems\">Publish imported items</mat-checkbox>\n        <div>\n\n            <div class=\"push-top\" *ngIf=\"!isLoading\">\n                <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"handlePreview()\">Prepare\n                    import\n                    data</button>\n                <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>Prepare import data</button>\n            </div>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'preview'\">\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <div class=\"push-bottom\" *ngIf=\"!isLoading\">\n        <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"handleImport()\">Proceed with import</button>\n        <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>Proceed with import</button>\n    </div>\n\n    <div libTitle1 class=\"push-top\">\n        Import data preview\n    </div>\n\n    <lib-import-data-preview [previewData]=\"importPreviewData\"></lib-import-data-preview>\n\n</ng-container>\n\n<ng-container *ngIf=\"step === 'importing'\">\n    <div libTitle1>\n        Processed items\n    </div>\n\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    <div libCard>\n        <lib-processed-items *ngIf=\"isLoading || importCompleted\"></lib-processed-items>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'completed'\">\n    <lib-message [type]=\"'success'\" [text]=\"'Data was imported successfully'\"></lib-message>\n\n    <div libTitle1 class=\"push-top\">\n        Overview of imported items:\n    </div>\n\n    <div class=\"push-top\">\n        <lib-import-data-preview [previewData]=\"resultPreviewData\"></lib-import-data-preview>\n    </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/pages/import/import-from-file.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/import/import-from-file.component.ts ***!
  \************************************************************/
/*! exports provided: ImportFromFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportFromFileComponent", function() { return ImportFromFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kentico-cloud-core */ "./node_modules/kentico-cloud-core/_commonjs/index.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/preview/preview-helper */ "./src/app/components/preview/preview-helper.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/base-page.component */ "./src/app/core/base-page.component.ts");











var ImportFromFileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImportFromFileComponent, _super);
    function ImportFromFileComponent(dependencies, cdr, fb) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.fb = fb;
        _this.step = 'initial';
        _this.importResult = undefined;
        _this.formGroup = _this.fb.group({
            projectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.targetProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cmApiKey: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.targetProjectApiKey, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            publishAllItems: [true],
        });
        // init stored values
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
            var storedData = dependencies.importDataStorageService.getImportData();
            if (storedData) {
                _this.formGroup.controls['projectId'].setValue(storedData.targetProjectId);
                _this.formGroup.controls['cmApiKey'].setValue(storedData.targetProjectId);
                _this.formGroup.controls['publishAllItems'].setValue(storedData.publishContentItems);
            }
        }
        return _this;
    }
    Object.defineProperty(ImportFromFileComponent.prototype, "importPreviewData", {
        get: function () {
            if (!this.importData) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_9__["previewHelper"].convertFromImportData(this.importData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportFromFileComponent.prototype, "resultPreviewData", {
        get: function () {
            if (!this.importResult) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_9__["previewHelper"].convertFromImportResult(this.importResult);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportFromFileComponent.prototype, "canSubmit", {
        get: function () {
            return this.formGroup.valid && (this.file ? true : false);
        },
        enumerable: true,
        configurable: true
    });
    ImportFromFileComponent.prototype.handlePreview = function () {
        var _this = this;
        var config = this.getConfig();
        if (config) {
            this.resetErrors();
            this.step = "preview";
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.exportService.getImportDataFromFile(config)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (importData) {
                _this.importData = importData;
                _super.prototype.stopLoading.call(_this);
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Import failed. See console for error details.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            })));
        }
    };
    ImportFromFileComponent.prototype.handleManualInputOnChange = function (change) {
        this.file = undefined;
        if (change.target) {
            var fileList = change.target['files'];
            if (fileList.length > 0) {
                this.file = fileList[0];
            }
            _super.prototype.detectChanges.call(this);
        }
    };
    ImportFromFileComponent.prototype.handleImport = function () {
        var _this = this;
        var config = this.getConfig();
        if (config && this.importData) {
            this.resetErrors();
            this.step = 'importing';
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.importService.import(this.importData, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (importResult) {
                _super.prototype.stopLoading.call(_this);
                _this.step = 'completed';
                _this.importResult = importResult;
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Import failed. See console for error details.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            })));
        }
    };
    ImportFromFileComponent.prototype.dropped = function (event) {
        var _this = this;
        if (!event.files) {
            this.error = 'Invalid file';
            _super.prototype.detectChanges.call(this);
            return;
        }
        if (event.files.length > 1) {
            this.error = 'Only 1 file can be uploaded at a time';
            _super.prototype.detectChanges.call(this);
            return;
        }
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var droppedFile = _a[_i];
            // Is it a file?
            if (!droppedFile.fileEntry.isFile) {
                this.error = 'Dropped item is not a file';
                _super.prototype.detectChanges.call(this);
                return;
            }
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    if (!_utilities__WEBPACK_IMPORTED_MODULE_8__["zipHelper"].getZipFileTypes().map(function (m) { return m.toLowerCase(); }).includes(file.type.toLowerCase())) {
                        _this.error = 'File has to be zip package';
                        _super.prototype.detectChanges.call(_this);
                        return;
                    }
                    _this.file = file;
                    _super.prototype.detectChanges.call(_this);
                });
            }
        }
    };
    ImportFromFileComponent.prototype.getConfig = function () {
        var projectId = this.formGroup.controls['projectId'].value;
        var cmApiKey = this.formGroup.controls['cmApiKey'].value;
        var publishAllItems = this.formGroup.controls['publishAllItems'].value;
        if (!projectId) {
            this.error = 'Invalid project id';
            return;
        }
        if (!cmApiKey) {
            this.error = 'Invalid api key';
            return;
        }
        if (!this.file) {
            this.error = 'File is not uploaded';
            return;
        }
        // store values
        this.dependencies.importDataStorageService.updateImportData({
            targetProjectApiKey: cmApiKey,
            publishContentItems: publishAllItems,
            targetProjectId: projectId
        });
        return {
            apiKey: cmApiKey,
            projectId: projectId,
            file: this.file,
            publishAllItems: publishAllItems,
        };
    };
    ImportFromFileComponent.prototype.resetErrors = function () {
        this.error = undefined;
    };
    ImportFromFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./import-from-file.component.html */ "./src/app/pages/import/import-from-file.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_6__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ImportFromFileComponent);
    return ImportFromFileComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_10__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/import/import-from-project.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/import/import-from-project.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Import from project\n</h1>\n\n<div class=\"push-bottom\" *ngIf=\"error\">\n    <lib-message [type]=\"'error'\" [text]=\"error\"></lib-message>\n</div>\n\n<ng-container *ngIf=\"step === 'initial'\">\n    <div libTitle1>\n        Source Project\n    </div>\n\n    <div [formGroup]=\"formGroup\">\n\n        <div libCard>\n            <mat-form-field class=\"w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"sourceProjectId\" required>\n            </mat-form-field>\n\n            <mat-form-field class=\"push-top w-full-width\">\n                <input autocomplete=\"off\" matInput\n                    placeholder=\"Languages - separated by semicolon such as 'en-US; es-ES'. Leave empty for default language.\"\n                    formControlName=\"languages\">\n            </mat-form-field>\n\n            <div class=\"push-top\" *ngIf=\"languagesWarningMessage\">\n                <lib-message [type]=\"'warning'\" [html]=\"languagesWarningMessage\"></lib-message>\n            </div>\n        </div>\n\n        <div libTitle1 class=\"push-top\">\n            Target Project\n        </div>\n\n        <div libCard>\n            <mat-form-field class=\"w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"targetProjectId\" required>\n            </mat-form-field>\n\n            <mat-form-field class=\"push-top w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"CM API Key\" formControlName=\"targetProjectCmApiKey\"\n                    required>\n            </mat-form-field>\n        </div>\n\n        <div libTitle1 class=\"push-top\">\n            Configuration\n        </div>\n\n        <div libCard>\n            <mat-checkbox formControlName=\"publishAllItems\">Publish imported items</mat-checkbox>\n        </div>\n\n        <div class=\"push-top\" *ngIf=\"!isLoading\">\n            <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"handlePreview()\">Prepare import\n                data</button>\n            <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>Prepare import data</button>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'preview'\">\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <div class=\"push-bottom\" *ngIf=\"!isLoading\">\n        <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"handleImport()\">Proceed with import</button>\n        <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>Proceed with import</button>\n    </div>\n\n    <div libTitle1 class=\"push-top\">\n        Import data preview\n    </div>\n\n    <lib-import-data-preview [previewData]=\"importPreviewData\"></lib-import-data-preview>\n\n</ng-container>\n\n<ng-container *ngIf=\"step === 'importing'\">\n    <div libTitle1>\n        Processed items\n    </div>\n\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    <div libCard>\n        <lib-processed-items *ngIf=\"isLoading || importCompleted\"></lib-processed-items>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'completed'\">\n    <lib-message [type]=\"'success'\" [text]=\"'Data was imported successfully'\"></lib-message>\n\n    <div libTitle1 class=\"push-top\">\n        Imported data:\n    </div>\n\n    <div class=\"push-top\">\n        <lib-import-data-preview [previewData]=\"resultPreviewData\"></lib-import-data-preview>\n    </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/pages/import/import-from-project.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/import/import-from-project.component.ts ***!
  \***************************************************************/
/*! exports provided: ImportFromProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportFromProjectComponent", function() { return ImportFromProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kentico-cloud-core */ "./node_modules/kentico-cloud-core/_commonjs/index.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/preview/preview-helper */ "./src/app/components/preview/preview-helper.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/base-page.component */ "./src/app/core/base-page.component.ts");










var ImportFromProjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImportFromProjectComponent, _super);
    function ImportFromProjectComponent(dependencies, cdr, fb) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.fb = fb;
        _this.step = 'initial';
        _this.importResult = undefined;
        _this.formGroup = _this.fb.group({
            sourceProjectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.sourceProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            targetProjectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.targetProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            languages: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.languages],
            targetProjectCmApiKey: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.targetProjectApiKey, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            publishAllItems: [true],
        });
        // init stored values
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
            var storedData = dependencies.importDataStorageService.getImportData();
            if (storedData) {
                _this.formGroup.controls['targetProjectId'].setValue(storedData.targetProjectId);
                _this.formGroup.controls['targetProjectCmApiKey'].setValue(storedData.targetProjectApiKey);
                _this.formGroup.controls['publishAllItems'].setValue(storedData.publishContentItems);
                _this.formGroup.controls['sourceProjectId'].setValue(storedData.sourceProjectId);
                _this.formGroup.controls['languages'].setValue(storedData.sourceProjectLanguages);
            }
        }
        return _this;
    }
    Object.defineProperty(ImportFromProjectComponent.prototype, "importPreviewData", {
        get: function () {
            if (!this.importData) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__["previewHelper"].convertFromImportData(this.importData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportFromProjectComponent.prototype, "resultPreviewData", {
        get: function () {
            if (!this.importResult) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__["previewHelper"].convertFromImportResult(this.importResult);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportFromProjectComponent.prototype, "canSubmit", {
        get: function () {
            return this.formGroup.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportFromProjectComponent.prototype, "parsedLanguages", {
        get: function () {
            var languagesValue = this.formGroup.controls['languages'].value;
            if (!languagesValue) {
                return [];
            }
            return languagesValue.split(';').map(function (m) { return m.trim(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportFromProjectComponent.prototype, "languagesWarningMessage", {
        get: function () {
            if (this.parsedLanguages.length === 0) {
                return undefined;
            }
            var languagesListHtml = "<ul>" + this.parsedLanguages.map(function (m) { return "<li>" + m + "</li>"; }).join('') + "</ul>";
            return "In order for import to work, make sure that your target project contains languages with following codenames: " + languagesListHtml;
        },
        enumerable: true,
        configurable: true
    });
    ImportFromProjectComponent.prototype.handlePreview = function () {
        var _this = this;
        var config = this.getConfig();
        if (config) {
            this.resetErrors();
            this.step = "preview";
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.exportService.getImportDataWithDeliveryApi(config)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (importData) {
                _this.importData = importData;
                _super.prototype.stopLoading.call(_this);
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Import failed. See console for error details.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            })));
        }
    };
    ImportFromProjectComponent.prototype.handleImport = function () {
        var _this = this;
        this.resetErrors();
        if (!this.formGroup.valid) {
            this.error = 'Form is not valid';
            return;
        }
        var config = this.getConfig();
        if (config && this.importData) {
            this.step = 'importing';
            _super.prototype.startLoading.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.importService.import(this.importData, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (importResult) {
                _super.prototype.stopLoading.call(_this);
                _this.step = 'completed';
                _this.importResult = importResult;
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Import failed. See console for error details.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            })));
        }
    };
    ImportFromProjectComponent.prototype.getConfig = function () {
        var sourceProjectId = this.formGroup.controls['sourceProjectId'].value;
        var targetProjectId = this.formGroup.controls['targetProjectId'].value;
        var targetProjectCmApiKey = this.formGroup.controls['targetProjectCmApiKey'].value;
        var publishAllItems = this.formGroup.controls['publishAllItems'].value;
        var languages = this.parsedLanguages;
        if (!sourceProjectId) {
            this.error = 'Invalid source project id';
            return;
        }
        if (!targetProjectId) {
            this.error = 'Invalid target project id';
            return;
        }
        if (!targetProjectCmApiKey) {
            this.error = 'Invalid api key';
            return;
        }
        // store values
        this.dependencies.importDataStorageService.updateImportData({
            targetProjectApiKey: targetProjectCmApiKey,
            publishContentItems: publishAllItems,
            targetProjectId: targetProjectId,
            sourceProjectId: sourceProjectId,
            sourceProjectLanguages: languages
        });
        return {
            languages: languages,
            publishAllItems: publishAllItems,
            sourceProjectId: sourceProjectId,
            targetProjectCmApiKey: targetProjectCmApiKey,
            targetProjectId: targetProjectId,
        };
    };
    ImportFromProjectComponent.prototype.resetErrors = function () {
        this.error = undefined;
    };
    ImportFromProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./import-from-project.component.html */ "./src/app/pages/import/import-from-project.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_6__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ImportFromProjectComponent);
    return ImportFromProjectComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/import/migrate-content-items.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/import/migrate-content-items.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Migrate content items\n</h1>\n\n<p class=\"push-top\">\n    Use this to migrate data (content items & assets) from one project to another.\n    Requirement for this to work is to have matching content types and taxonomies.\n</p>\n\n<div class=\"push-bottom\" *ngIf=\"error\">\n    <lib-message [type]=\"'error'\" [text]=\"error\"></lib-message>\n</div>\n\n<ng-container *ngIf=\"step === 'initial'\">\n    <div libTitle1>\n        Source Project\n    </div>\n\n    <div [formGroup]=\"formGroup\">\n\n        <div libCard>\n            <mat-form-field class=\"w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"sourceProjectId\" required>\n            </mat-form-field>\n\n            <mat-form-field class=\"push-top w-full-width\">\n                <input autocomplete=\"off\" matInput\n                    placeholder=\"Languages - separated by semicolon such as 'en-US; es-ES'. Leave empty for default language.\"\n                    formControlName=\"languages\">\n            </mat-form-field>\n\n            <div class=\"push-top\" *ngIf=\"languagesWarningMessage\">\n                <lib-message [type]=\"'warning'\" [html]=\"languagesWarningMessage\"></lib-message>\n            </div>\n        </div>\n\n        <div libTitle1 class=\"push-top\">\n            Target Project\n        </div>\n\n        <div libCard>\n            <mat-form-field class=\"w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"targetProjectId\" required>\n            </mat-form-field>\n\n            <mat-form-field class=\"push-top w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"CM API Key\" formControlName=\"targetProjectCmApiKey\"\n                    required>\n            </mat-form-field>\n        </div>\n\n        <div libTitle1 class=\"push-top\">\n            Configuration\n        </div>\n\n        <div libCard>\n            <mat-checkbox formControlName=\"publishAllItems\">Publish imported items</mat-checkbox>\n        </div>\n\n        <div class=\"push-top\" *ngIf=\"!isLoading\">\n            <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"handlePreview()\">Prepare import\n                data</button>\n            <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>Prepare import data</button>\n        </div>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'preview'\">\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <div class=\"push-bottom\" *ngIf=\"!isLoading\">\n        <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"handleImport()\">Proceed with import</button>\n        <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>Proceed with import</button>\n    </div>\n\n    <div libTitle1 class=\"push-top\">\n        Import data preview\n    </div>\n\n    <lib-import-data-preview [showTypes]=\"'contentItemsImport'\" [previewData]=\"importPreviewData\">\n    </lib-import-data-preview>\n\n</ng-container>\n\n<ng-container *ngIf=\"step === 'importing'\">\n    <div libTitle1>\n        Processed items\n    </div>\n\n    <mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n    <div libCard>\n        <lib-processed-items *ngIf=\"isLoading || importCompleted\"></lib-processed-items>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'completed'\">\n    <lib-message [type]=\"'success'\" [text]=\"'Data was imported successfully'\"></lib-message>\n\n    <div libTitle1 class=\"push-top\">\n        Overview of imported items:\n    </div>\n\n    <div class=\"push-top\">\n        <lib-import-data-preview [showTypes]=\"'contentItemsImport'\" [previewData]=\"resultPreviewData\">\n        </lib-import-data-preview>\n    </div>\n\n</ng-container>"

/***/ }),

/***/ "./src/app/pages/import/migrate-content-items.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/import/migrate-content-items.component.ts ***!
  \*****************************************************************/
/*! exports provided: MigrateContentItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrateContentItemsComponent", function() { return MigrateContentItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kentico-cloud-core */ "./node_modules/kentico-cloud-core/_commonjs/index.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/preview/preview-helper */ "./src/app/components/preview/preview-helper.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/base-page.component */ "./src/app/core/base-page.component.ts");










var MigrateContentItemsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MigrateContentItemsComponent, _super);
    function MigrateContentItemsComponent(dependencies, cdr, fb) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.fb = fb;
        _this.step = 'initial';
        _this.importResult = undefined;
        _this.formGroup = _this.fb.group({
            sourceProjectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.sourceProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            targetProjectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.targetProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            languages: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.languages],
            targetProjectCmApiKey: [_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].defaultProjects.targetProjectApiKey, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            publishAllItems: [true],
        });
        // init stored values
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production) {
            var storedData = dependencies.importDataStorageService.getImportData();
            if (storedData) {
                _this.formGroup.controls['targetProjectId'].setValue(storedData.targetProjectId);
                _this.formGroup.controls['targetProjectCmApiKey'].setValue(storedData.targetProjectApiKey);
                _this.formGroup.controls['publishAllItems'].setValue(storedData.publishContentItems);
                _this.formGroup.controls['sourceProjectId'].setValue(storedData.sourceProjectId);
                _this.formGroup.controls['languages'].setValue(storedData.sourceProjectLanguages);
            }
        }
        return _this;
    }
    Object.defineProperty(MigrateContentItemsComponent.prototype, "importPreviewData", {
        get: function () {
            if (!this.importData) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__["previewHelper"].convertFromImportData(this.importData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MigrateContentItemsComponent.prototype, "resultPreviewData", {
        get: function () {
            if (!this.importResult) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_8__["previewHelper"].convertFromImportResult(this.importResult);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MigrateContentItemsComponent.prototype, "canSubmit", {
        get: function () {
            return this.formGroup.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MigrateContentItemsComponent.prototype, "parsedLanguages", {
        get: function () {
            var languagesValue = this.formGroup.controls['languages'].value;
            if (!languagesValue) {
                return [];
            }
            return languagesValue.split(';').map(function (m) { return m.trim(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MigrateContentItemsComponent.prototype, "languagesWarningMessage", {
        get: function () {
            if (this.parsedLanguages.length === 0) {
                return undefined;
            }
            var languagesListHtml = "<ul>" + this.parsedLanguages.map(function (m) { return "<li>" + m + "</li>"; }).join('') + "</ul>";
            return "In order for import to work, make sure that your target project contains languages with following codenames: " + languagesListHtml;
        },
        enumerable: true,
        configurable: true
    });
    MigrateContentItemsComponent.prototype.handlePreview = function () {
        var _this = this;
        var config = this.getConfig();
        if (config) {
            this.resetErrors();
            this.step = "preview";
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.exportService.getImportDataWithDeliveryApi(config)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (importData) {
                _this.importData = importData;
                _super.prototype.stopLoading.call(_this);
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Import failed. See console for error details.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            })));
        }
    };
    MigrateContentItemsComponent.prototype.handleImport = function () {
        var _this = this;
        this.resetErrors();
        if (!this.formGroup.valid) {
            this.error = 'Form is not valid';
            return;
        }
        var config = this.getConfig();
        if (config && this.importData) {
            this.step = 'importing';
            _super.prototype.startLoading.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.importService.importContentItemsOnly(this.importData, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (importResult) {
                _super.prototype.stopLoading.call(_this);
                _this.step = 'completed';
                _this.importResult = importResult;
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_3__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Import failed. See console for error details.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            })));
        }
    };
    MigrateContentItemsComponent.prototype.getConfig = function () {
        var sourceProjectId = this.formGroup.controls['sourceProjectId'].value;
        var targetProjectId = this.formGroup.controls['targetProjectId'].value;
        var targetProjectCmApiKey = this.formGroup.controls['targetProjectCmApiKey'].value;
        var publishAllItems = this.formGroup.controls['publishAllItems'].value;
        var languages = this.parsedLanguages;
        if (!sourceProjectId) {
            this.error = 'Invalid source project id';
            return;
        }
        if (!targetProjectId) {
            this.error = 'Invalid target project id';
            return;
        }
        if (!targetProjectCmApiKey) {
            this.error = 'Invalid api key';
            return;
        }
        // store values
        this.dependencies.importDataStorageService.updateImportData({
            targetProjectApiKey: targetProjectCmApiKey,
            publishContentItems: publishAllItems,
            targetProjectId: targetProjectId,
            sourceProjectId: sourceProjectId,
            sourceProjectLanguages: languages
        });
        return {
            languages: languages,
            publishAllItems: publishAllItems,
            sourceProjectId: sourceProjectId,
            targetProjectCmApiKey: targetProjectCmApiKey,
            targetProjectId: targetProjectId,
        };
    };
    MigrateContentItemsComponent.prototype.resetErrors = function () {
        this.error = undefined;
    };
    MigrateContentItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./migrate-content-items.component.html */ "./src/app/pages/import/migrate-content-items.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_6__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MigrateContentItemsComponent);
    return MigrateContentItemsComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./export/export.component */ "./src/app/pages/export/export.component.ts");
/* harmony import */ var _faq_limitations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq/limitations.component */ "./src/app/pages/faq/limitations.component.ts");
/* harmony import */ var _import_import_from_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import/import-from-file.component */ "./src/app/pages/import/import-from-file.component.ts");
/* harmony import */ var _import_import_from_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import/import-from-project.component */ "./src/app/pages/import/import-from-project.component.ts");
/* harmony import */ var _import_migrate_content_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./import/migrate-content-items.component */ "./src/app/pages/import/migrate-content-items.component.ts");
/* harmony import */ var _shared_cleanup_cleanup_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/cleanup/cleanup-confirm.component */ "./src/app/pages/shared/cleanup/cleanup-confirm.component.ts");
/* harmony import */ var _shared_cleanup_cleanup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/cleanup/cleanup.component */ "./src/app/pages/shared/cleanup/cleanup.component.ts");
/* harmony import */ var _templates_template_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/template-list.component */ "./src/app/pages/templates/template-list.component.ts");














var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _import_import_from_project_component__WEBPACK_IMPORTED_MODULE_9__["ImportFromProjectComponent"],
                _export_export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"],
                _import_import_from_file_component__WEBPACK_IMPORTED_MODULE_8__["ImportFromFileComponent"],
                _import_migrate_content_items_component__WEBPACK_IMPORTED_MODULE_10__["MigrateContentItemsComponent"],
                _export_export_component__WEBPACK_IMPORTED_MODULE_6__["ExportComponent"],
                _shared_cleanup_cleanup_component__WEBPACK_IMPORTED_MODULE_12__["CleanupComponent"],
                _shared_cleanup_cleanup_confirm_component__WEBPACK_IMPORTED_MODULE_11__["CleanupConfirmComponent"],
                _import_migrate_content_items_component__WEBPACK_IMPORTED_MODULE_10__["MigrateContentItemsComponent"],
                _templates_template_list_component__WEBPACK_IMPORTED_MODULE_13__["TemplateListComponent"],
                _faq_limitations_component__WEBPACK_IMPORTED_MODULE_7__["LimitationsComponent"]
            ],
            entryComponents: [
                _shared_cleanup_cleanup_confirm_component__WEBPACK_IMPORTED_MODULE_11__["CleanupConfirmComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/shared/cleanup/cleanup-confirm.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/shared/cleanup/cleanup-confirm.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 mat-dialog-title>Confirmation</h1>\n<div mat-dialog-content>\n    <p>This will delete given data from your project. There is no going back. Continue?</p>\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"close()\">No</button>\n    <button class=\"push-left\" mat-raised-button (click)=\"confirm()\" color=\"warn\">Yes</button>\n</div>"

/***/ }),

/***/ "./src/app/pages/shared/cleanup/cleanup-confirm.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/shared/cleanup/cleanup-confirm.component.ts ***!
  \*******************************************************************/
/*! exports provided: CleanupConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanupConfirmComponent", function() { return CleanupConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/base.component */ "./src/app/core/base.component.ts");





var CleanupConfirmComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CleanupConfirmComponent, _super);
    function CleanupConfirmComponent(dialogRef, data, dependencies, cdr) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.dialogRef = dialogRef;
        _this.data = data;
        _this.confirmed = false;
        return _this;
    }
    CleanupConfirmComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CleanupConfirmComponent.prototype.confirm = function () {
        this.confirmed = true;
        this.close();
    };
    CleanupConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./cleanup-confirm.component.html */ "./src/app/pages/shared/cleanup/cleanup-confirm.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _di__WEBPACK_IMPORTED_MODULE_3__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CleanupConfirmComponent);
    return CleanupConfirmComponent;
}(_core_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/pages/shared/cleanup/cleanup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/shared/cleanup/cleanup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Cleanup project\n</h1>\n\n<div class=\"push-bottom\" *ngIf=\"error\">\n    <lib-message [type]=\"'error'\" [text]=\"error\"></lib-message>\n</div>\n\n<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n\n<ng-container *ngIf=\"step === 'initial'\">\n    <p>This action will delete all data in your project. Proceed with caution.</p>\n\n    <div [formGroup]=\"formGroup\">\n\n        <div libTitle1>\n            Project\n        </div>\n\n        <div libCard>\n            <mat-form-field class=\"w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"Project Id\" formControlName=\"projectId\" required>\n            </mat-form-field>\n\n            <mat-form-field class=\"push-top w-full-width\">\n                <input autocomplete=\"off\" matInput placeholder=\"CM API Key\" formControlName=\"cmApiKey\" required>\n            </mat-form-field>\n        </div>\n\n        <div class=\"push-top\" *ngIf=\"!isLoading\">\n            <button *ngIf=\"canSubmit\" (click)=\"prepareCleanup()\" mat-raised-button color=\"warn\">Prepare cleanup\n                data</button>\n            <button disabled *ngIf=\"!canSubmit\" (click)=\"prepareCleanup()\" mat-raised-button>Prepare cleanup\n                data</button>\n        </div>\n    </div>\n\n\n</ng-container>\n\n<ng-container *ngIf=\"step === 'preview'\">\n\n    <ng-container *ngIf=\"!projectContainsSomeData && cleanupData\">\n        <div class=\"push-top\">\n            <lib-message [type]=\"'info'\" [text]=\"'Given project does not contain any data'\"></lib-message>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"projectContainsSomeData\">\n\n        <div class=\"push-top\" *ngIf=\"!isLoading\">\n            <button *ngIf=\"canSubmit\" mat-raised-button color=\"accent\" (click)=\"openConfirmation()\">I know what I'm\n                doing -\n                cleanup project</button>\n            <button *ngIf=\"!canSubmit\" mat-raised-button color=\"warn\" disabled>I know what I'm doing - cleanup\n                project</button>\n        </div>\n\n        <div libTitle1 class=\"push-top\">\n            Following will be deleted from your project\n        </div>\n\n        <div class=\"push-top\">\n            <lib-import-data-preview [showTypes]=\"'all'\" [previewData]=\"previewData\">\n            </lib-import-data-preview>\n        </div>\n    </ng-container>\n\n\n</ng-container>\n\n<ng-container *ngIf=\"step === 'cleaning'\">\n    <div libCard>\n        <lib-processed-items></lib-processed-items>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"step === 'completed'\">\n    <div class=\"push-top push-bottom\">\n        <lib-message [type]=\"'success'\" [text]=\"'Project data successfully deleted'\"></lib-message>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/pages/shared/cleanup/cleanup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/shared/cleanup/cleanup.component.ts ***!
  \***********************************************************/
/*! exports provided: CleanupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanupComponent", function() { return CleanupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kentico-cloud-core */ "./node_modules/kentico-cloud-core/_commonjs/index.js");
/* harmony import */ var kentico_cloud_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../di */ "./src/di/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/preview/preview-helper */ "./src/app/components/preview/preview-helper.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/base-page.component */ "./src/app/core/base-page.component.ts");
/* harmony import */ var _cleanup_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cleanup-confirm.component */ "./src/app/pages/shared/cleanup/cleanup-confirm.component.ts");












var CleanupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CleanupComponent, _super);
    function CleanupComponent(dependencies, cdr, fb, dialog) {
        var _this = _super.call(this, dependencies, cdr) || this;
        _this.fb = fb;
        _this.dialog = dialog;
        _this.step = 'initial';
        _this.formGroup = _this.fb.group({
            projectId: [_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].defaultProjects.targetProjectId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cmApiKey: [_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].defaultProjects.targetProjectApiKey, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        return _this;
    }
    Object.defineProperty(CleanupComponent.prototype, "previewData", {
        get: function () {
            if (!this.cleanupData) {
                return undefined;
            }
            return _components_preview_preview_helper__WEBPACK_IMPORTED_MODULE_9__["previewHelper"].convertFromCleanupData(this.cleanupData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CleanupComponent.prototype, "canSubmit", {
        get: function () {
            return this.formGroup.valid;
        },
        enumerable: true,
        configurable: true
    });
    CleanupComponent.prototype.projectContainsSomeData = function () {
        if (!this.cleanupData) {
            return false;
        }
        if (this.cleanupData.assets.length > 0) {
            return true;
        }
        if (this.cleanupData.contentItems.length > 0) {
            return true;
        }
        if (this.cleanupData.contentTypes.length > 0) {
            return true;
        }
        if (this.cleanupData.taxonomies.length > 0) {
            return true;
        }
        return false;
    };
    CleanupComponent.prototype.prepareCleanup = function () {
        var _this = this;
        var config = this.getConfig();
        if (config) {
            this.step = 'preview';
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.cleanupService.prepareCleanup(config.projectId, config.apiKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cleanupData) {
                _this.cleanupData = cleanupData;
                _super.prototype.stopLoading.call(_this);
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_4__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Preparing cleanup data failed. See console for full error.';
                }
                // cleanup data because something might have been deleted already and same item
                // cannot be deleted twice
                _this.cleanupData = undefined;
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            })));
        }
    };
    CleanupComponent.prototype.cleanup = function () {
        var _this = this;
        var config = this.getConfig();
        if (config && this.cleanupData) {
            this.step = 'cleaning';
            _super.prototype.startLoading.call(this);
            _super.prototype.detectChanges.call(this);
            _super.prototype.subscribeToObservable.call(this, this.dependencies.cleanupService.cleanupProject(config.projectId, config.apiKey, this.cleanupData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (cleanupData) {
                _super.prototype.stopLoading.call(_this);
                _this.step = 'completed';
                _super.prototype.detectChanges.call(_this);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                _super.prototype.stopLoading.call(_this);
                if (error instanceof kentico_cloud_core__WEBPACK_IMPORTED_MODULE_4__["CloudError"]) {
                    _this.error = error.message;
                }
                else {
                    _this.error = 'Cleaning project data failed. See console for full error.';
                }
                _super.prototype.detectChanges.call(_this);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            })));
        }
    };
    CleanupComponent.prototype.openConfirmation = function () {
        var _this = this;
        this.resetErrors();
        var config = this.getConfig();
        if (config) {
            var dialogRef_1 = this.dialog.open(_cleanup_confirm_component__WEBPACK_IMPORTED_MODULE_11__["CleanupConfirmComponent"], {
                width: '400px',
                data: {}
            });
            dialogRef_1.afterClosed().subscribe(function (result) {
                if (dialogRef_1.componentInstance.confirmed) {
                    if (!_this.cleanupData) {
                        throw Error("Invalid cleanup data");
                    }
                    _this.cleanup();
                }
            });
        }
    };
    CleanupComponent.prototype.getConfig = function () {
        var projectId = this.formGroup.controls['projectId'].value;
        var cmApiKey = this.formGroup.controls['cmApiKey'].value;
        if (!projectId) {
            this.error = 'Invalid project id';
            return;
        }
        if (!cmApiKey) {
            this.error = 'Invalid api key';
            return;
        }
        return {
            apiKey: cmApiKey,
            projectId: projectId
        };
    };
    CleanupComponent.prototype.resetErrors = function () {
        this.error = undefined;
    };
    CleanupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./cleanup.component.html */ "./src/app/pages/shared/cleanup/cleanup.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_7__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CleanupComponent);
    return CleanupComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_10__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/templates/template-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/templates/template-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Browse templates\n</h1>\n\n<div fxLayout=\"row wrap\" fxLayoutGap=\"16px grid\">\n    <div fxLayout=\"column\" fxFlex=\"33%\" fxFlex.gt-lg=\"25%\" fxFlex.lg=\"25%\" fxFlex.lt-lg=\"33%\" fxFlex.lt-md=\"50%\"\n        fxFlex.sm=\"50%\" fxFlex.xs=\"100%\" *ngFor=\"let template of templates\">\n        <div libCard [addPad]=\"false\" fxFlexFill fxLayout=\"row wrap\">\n            <div fxLayout=\"column\" fxFlex=\"100%\">\n                <div class=\"pad\" libTitle2 style=\"margin:0\">\n                    {{ template.name }}\n                </div>\n                <img style=\"width:100%\" [src]=\"template.imageUrl\" [alt]=\"'Image for ' + template.name\">\n                <div class=\"pad\" fxLayout=\"row\" fxLayoutAlign=\"end end\">\n                    <div fxLayout=\"column\" fxFlex>\n                        <div libTextCaption fxLayout=\"row\" fxLayoutGap=\"8px\">\n                            <div fxLayout=\"column\" fxFlex>\n                                <span>By <strong>{{ template.author.name }}</strong></span>\n                            </div>\n                            <div fxLayout=\"column\" fxFlex=\"initial\">\n                                {{ template.technology }}\n                            </div>\n                            <div fxLayout=\"column\" fxFlex=\"initial\" fxHide>\n                                {{ template.lastUpdate }}\n                            </div>\n                        </div>\n                        <div class=\"push-top-sm\">\n                            {{ template.description }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div fxLayout=\"column\" fxFlex=\"100%\" class=\"pad\" fxLayoutAlign=\"end\">\n                <div fxLayout=\"row\" fxLayoutGap=\"8px\" class=\"push-top\">\n                    <div fxLayout=\"column\">\n                        <a mat-raised-button color=\"accent\" target=\"_blank\"\n                            [href]=\"template.exportPackageUrl\">Download</a>\n                    </div>\n                    <div fxLayout=\"column\" fxFlex>\n\n                    </div>\n                    <div fxLayout=\"column\">\n                        <a mat-button target=\"_blank\" color=\"primary\" [href]=\"template.repoUrl\">GitHub</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/templates/template-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/templates/template-list.component.ts ***!
  \************************************************************/
/*! exports provided: TemplateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateListComponent", function() { return TemplateListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../di */ "./src/di/index.ts");
/* harmony import */ var _core_base_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/base-page.component */ "./src/app/core/base-page.component.ts");





var TemplateListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplateListComponent, _super);
    function TemplateListComponent(dependencies, cdr) {
        return _super.call(this, dependencies, cdr) || this;
    }
    TemplateListComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.subscribeToObservable.call(this, this.dependencies.templatesService.getTemplates().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (templates) {
            _this.templates = templates;
        })));
    };
    TemplateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./template-list.component.html */ "./src/app/pages/templates/template-list.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_di__WEBPACK_IMPORTED_MODULE_3__["ComponentDependencies"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TemplateListComponent);
    return TemplateListComponent;
}(_core_base_page_component__WEBPACK_IMPORTED_MODULE_4__["BasePageComponent"]));



/***/ }),

/***/ "./src/di/component-dependencies.ts":
/*!******************************************!*\
  !*** ./src/di/component-dependencies.ts ***!
  \******************************************/
/*! exports provided: ComponentDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentDependencies", function() { return ComponentDependencies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");





var ComponentDependencies = /** @class */ (function () {
    function ComponentDependencies(importService, cleanupService, exportService, processingService, media, router, templatesService, googleAnalyticsService, importDataStorageService) {
        this.importService = importService;
        this.cleanupService = cleanupService;
        this.exportService = exportService;
        this.processingService = processingService;
        this.media = media;
        this.router = router;
        this.templatesService = templatesService;
        this.googleAnalyticsService = googleAnalyticsService;
        this.importDataStorageService = importDataStorageService;
    }
    ComponentDependencies = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["ImportService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["CleanupService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ExportService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ProcessingService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["TemplatesService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalyticsService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ImportDataStorageService"]])
    ], ComponentDependencies);
    return ComponentDependencies;
}());



/***/ }),

/***/ "./src/di/dependencies.module.ts":
/*!***************************************!*\
  !*** ./src/di/dependencies.module.ts ***!
  \***************************************/
/*! exports provided: DependenciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependenciesModule", function() { return DependenciesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_external__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/external */ "./src/app/external/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");





var DependenciesModule = /** @class */ (function () {
    function DependenciesModule() {
    }
    DependenciesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _services__WEBPACK_IMPORTED_MODULE_4__["ServicesModule"],
                _app_external__WEBPACK_IMPORTED_MODULE_3__["ExternalModule"]
            ],
            providers: [],
        })
    ], DependenciesModule);
    return DependenciesModule;
}());



/***/ }),

/***/ "./src/di/index.ts":
/*!*************************!*\
  !*** ./src/di/index.ts ***!
  \*************************/
/*! exports provided: ComponentDependencies, DependenciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_dependencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-dependencies */ "./src/di/component-dependencies.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentDependencies", function() { return _component_dependencies__WEBPACK_IMPORTED_MODULE_0__["ComponentDependencies"]; });

/* harmony import */ var _dependencies_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies.module */ "./src/di/dependencies.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DependenciesModule", function() { return _dependencies_module__WEBPACK_IMPORTED_MODULE_1__["DependenciesModule"]; });





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
    production: false,
    appName: 'Template manager',
    templatesSourceUrl: 'https://raw.githubusercontent.com/Kentico/cloud-template-manager/master/templates/list.json',
    defaultProjects: {
        sourceProjectId: 'f249eb83-18fd-01b8-2db7-c561bcb1ed1e',
        // tslint:disable-next-line:max-line-length
        sourceProjectApiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxM2VkMmI4ODQ1NDg0ZjIwYjVkNWVhOTRlZDVlOWY0YSIsImlhdCI6IjE1NTQzNjg0NjgiLCJleHAiOiIxODk5OTY4NDY4IiwicHJvamVjdF9pZCI6ImYyNDllYjgzMThmZDAxYjgyZGI3YzU2MWJjYjFlZDFlIiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.UJ8rpJ5fKrCco4_1JvVtMFvUIyrIHr1Wo-VTRbdx34M',
        languages: 'en-US; es-ES',
        // sourceProjectId: 'b062c2f0-1a33-0070-794f-b48fa8bc1899',
        targetProjectId: 'ede994d8-bb05-01b5-9c33-8b65e7372306',
        // tslint:disable-next-line:max-line-length
        targetProjectApiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0Yjg1NmJmMTEyYTA0ODcwYjRiMDBjNGQ3OTZkZGUxNyIsImlhdCI6IjE1NTI2NDk3NjUiLCJleHAiOiIxODk4MjQ5NzY1IiwicHJvamVjdF9pZCI6ImVkZTk5NGQ4YmIwNTAxYjU5YzMzOGI2NWU3MzcyMzA2IiwidmVyIjoiMi4xLjAiLCJ1aWQiOiJ1c3JfMHZRWUJDcUF2cm5vNXJpZkhuaVlFRyIsImF1ZCI6Im1hbmFnZS5rZW50aWNvY2xvdWQuY29tIn0.d5ynvZh06reXR2JRSR86Vp9jhFFqmX1mJlD_jzuHG84'
    },
    requestDelay: 80,
    export: {
        filenames: {
            packagePrefix: 'export_',
            assets: 'assets.json',
            languageVariants: 'language-variants.json',
            contentItems: 'content-items.json',
            contentTypes: 'content-types.json',
            taxonomies: 'taxonomies.json',
            assetsFolder: 'assets',
            metadata: 'metadata.json'
        }
    },
    google: {
        enableTracking: false,
        trackingPrefix: '/cloud-template-manager',
        googleAnalyticsTrackingId: 'UA-69014260-7'
    },
    storage: {
        storageName: 'templateManagerData'
    }
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

/***/ "./src/services/base-service.ts":
/*!**************************************!*\
  !*** ./src/services/base-service.ts ***!
  \**************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var BaseService = /** @class */ (function () {
    function BaseService() {
        this.cmRequestDelay = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].requestDelay;
    }
    return BaseService;
}());



/***/ }),

/***/ "./src/services/cleanup/cleanup.service.ts":
/*!*************************************************!*\
  !*** ./src/services/cleanup/cleanup.service.ts ***!
  \*************************************************/
/*! exports provided: CleanupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanupService", function() { return CleanupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kentico-cloud-content-management */ "./node_modules/kentico-cloud-content-management/_commonjs/index.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _fetch_cm_fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetch/cm-fetch.service */ "./src/services/fetch/cm-fetch.service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../processing/processing.service */ "./src/services/processing/processing.service.ts");








var CleanupService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CleanupService, _super);
    function CleanupService(cmFetchService, processingService) {
        var _this = _super.call(this) || this;
        _this.cmFetchService = cmFetchService;
        _this.processingService = processingService;
        return _this;
    }
    CleanupService.prototype.cleanupProject = function (projectId, apiKey, cleanupData) {
        var _this = this;
        var client = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        });
        return this.deleteContentItems(client, cleanupData.contentItems)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this.deleteAssets(client, cleanupData.assets);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this.deleteTaxonomies(client, cleanupData.taxonomies);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this.deleteContentTypes(client, cleanupData.contentTypes);
        }));
    };
    CleanupService.prototype.prepareCleanup = function (projectId, apiKey) {
        var _this = this;
        var result = {
            assets: [],
            contentItems: [],
            contentTypes: [],
            taxonomies: []
        };
        return this.cmFetchService.getAllAssets(projectId, apiKey, []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (assets) {
            result.assets = assets;
            return _this.cmFetchService.getAllContentItems(projectId, apiKey, []);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (contentItems) {
            result.contentItems = contentItems;
            return _this.cmFetchService.getAllTaxonomies(projectId, apiKey, []);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (taxonomies) {
            result.taxonomies = taxonomies;
            return _this.cmFetchService.getAllTypes(projectId, apiKey, []);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (contentTypes) {
            result.contentTypes = contentTypes;
            return result;
        }));
    };
    CleanupService.prototype.getContentManagementClient = function (config) {
        return new kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ContentManagementClient"](config);
    };
    CleanupService.prototype.deleteAssets = function (client, assets) {
        var _this = this;
        var obs = [];
        var _loop_1 = function (asset) {
            obs.push(client.deleteAsset().byAssetId(asset.id).toObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this_1.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                _this.processingService.addProcessedItem({
                    data: asset.fileName,
                    type: 'asset',
                    action: 'delete',
                    name: asset.fileName
                });
            })));
        };
        var this_1 = this;
        for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
            var asset = assets_1[_i];
            _loop_1(asset);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay);
    };
    CleanupService.prototype.deleteContentTypes = function (client, contentTypes) {
        var _this = this;
        var obs = [];
        var _loop_2 = function (type) {
            obs.push(client.deleteContentType().byTypeCodename(type.system.codename).toObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                _this.processingService.addProcessedItem({
                    data: type.system.codename,
                    type: 'content type',
                    action: 'delete',
                    name: type.system.codename
                });
            })));
        };
        for (var _i = 0, contentTypes_1 = contentTypes; _i < contentTypes_1.length; _i++) {
            var type = contentTypes_1[_i];
            _loop_2(type);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay);
    };
    CleanupService.prototype.deleteTaxonomies = function (client, taxonomies) {
        var _this = this;
        var obs = [];
        var _loop_3 = function (taxonomy) {
            obs.push(client.deleteTaxonomy().byTaxonomyCodename(taxonomy.system.codename).toObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this_2.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                _this.processingService.addProcessedItem({
                    data: taxonomy.system.codename,
                    type: 'taxonomy',
                    action: 'delete',
                    name: taxonomy.system.codename
                });
            })));
        };
        var this_2 = this;
        for (var _i = 0, taxonomies_1 = taxonomies; _i < taxonomies_1.length; _i++) {
            var taxonomy = taxonomies_1[_i];
            _loop_3(taxonomy);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay);
    };
    CleanupService.prototype.deleteContentItems = function (client, contentItems) {
        var _this = this;
        var obs = [];
        var _loop_4 = function (item) {
            obs.push(client.deleteContentItem().byItemCodename(item.codename).toObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this_3.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                _this.processingService.addProcessedItem({
                    data: item.codename,
                    type: 'content item',
                    action: 'delete',
                    name: item.codename
                });
            })));
        };
        var this_3 = this;
        for (var _i = 0, contentItems_1 = contentItems; _i < contentItems_1.length; _i++) {
            var item = contentItems_1[_i];
            _loop_4(item);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay);
    };
    CleanupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_cm_fetch_service__WEBPACK_IMPORTED_MODULE_6__["CmFetchService"],
            _processing_processing_service__WEBPACK_IMPORTED_MODULE_7__["ProcessingService"]])
    ], CleanupService);
    return CleanupService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "./src/services/export/export.service.ts":
/*!***********************************************!*\
  !*** ./src/services/export/export.service.ts ***!
  \***********************************************/
/*! exports provided: ExportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var filesaver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filesaver.js */ "./node_modules/filesaver.js/FileSaver.js");
/* harmony import */ var filesaver_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filesaver_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jszip_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jszip-utils */ "./node_modules/jszip-utils/lib/index.js");
/* harmony import */ var jszip_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jszip_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kentico-cloud-content-management */ "./node_modules/kentico-cloud-content-management/_commonjs/index.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../version */ "./src/version.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _fetch_cm_fetch_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fetch/cm-fetch.service */ "./src/services/fetch/cm-fetch.service.ts");
/* harmony import */ var _fetch_delivery_fetch_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fetch/delivery-fetch.service */ "./src/services/fetch/delivery-fetch.service.ts");














var ExportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExportService, _super);
    function ExportService(cmFetchService, deliveryFetchService) {
        var _this = _super.call(this) || this;
        _this.cmFetchService = cmFetchService;
        _this.deliveryFetchService = deliveryFetchService;
        return _this;
    }
    ExportService.prototype.createAndDownloadZipFile = function (projectId, data, callback) {
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_3__();
        zip.file(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.contentTypes, JSON.stringify(data.contentTypes));
        zip.file(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.contentItems, JSON.stringify(data.contentItems));
        zip.file(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.taxonomies, JSON.stringify(data.taxonomies));
        zip.file(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.assets, JSON.stringify(data.assets));
        zip.file(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.languageVariants, JSON.stringify(data.languageVariants));
        zip.file(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.metadata, JSON.stringify(data.metadata));
        var assetsFolder = zip.folder(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.assetsFolder);
        for (var _i = 0, _a = data.assets; _i < _a.length; _i++) {
            var asset = _a[_i];
            var assetIdShortFolder = assetsFolder.folder(asset.id.substr(0, 3));
            var assetIdFolder = assetIdShortFolder.folder(asset.id);
            var assetFilename = asset.fileName;
            assetIdFolder.file(assetFilename, this.urlToPromise(asset.deliveryUrl), {
                binary: true
            });
        }
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            Object(filesaver_js__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(content, "" + _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.packagePrefix + projectId + ".zip");
            callback();
        });
    };
    ExportService.prototype.getImportDataWithDeliveryApi = function (config) {
        var _this = this;
        var targetContentManagementClient = this.getContentManagementClient({
            projectId: config.targetProjectId,
            apiKey: config.targetProjectCmApiKey
        });
        var data = {
            targetClient: targetContentManagementClient,
            contentTypes: [],
            contentItems: [],
            taxonomies: [],
            languageVariants: [],
            assets: [],
            targetProjectId: config.targetProjectId,
            assetsFromFile: [],
            metadata: {
                version: _version__WEBPACK_IMPORTED_MODULE_10__["versionInfo"].version,
            }
        };
        return this.deliveryFetchService.getAllTypes(config.sourceProjectId, [], {
            useProcessingService: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (types) {
            var _a;
            (_a = data.contentTypes).push.apply(_a, types);
            return _this.deliveryFetchService.getAllContentItems(config.sourceProjectId, config.languages, {
                useProcessingService: true
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (contentItemsResult) {
            var _a, _b, _c;
            (_a = data.assets).push.apply(_a, contentItemsResult.assets);
            (_b = data.contentItems).push.apply(_b, contentItemsResult.contentItems);
            (_c = data.languageVariants).push.apply(_c, contentItemsResult.languageVariants);
            return _this.deliveryFetchService.getAllTaxonomies(config.sourceProjectId, [], {
                useProcessingService: true
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (taxonomies) {
            var _a;
            (_a = data.taxonomies).push.apply(_a, taxonomies);
            return data;
        }));
    };
    ExportService.prototype.getImportDataFromFile = function (config) {
        var _this = this;
        var targetClient = this.getContentManagementClient({
            apiKey: config.apiKey,
            projectId: config.projectId
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(jszip__WEBPACK_IMPORTED_MODULE_3__["loadAsync"](config.file)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (fileContents) {
            var obs = [];
            var importData = {
                contentItems: [],
                contentTypes: [],
                taxonomies: [],
                targetClient: targetClient,
                languageVariants: [],
                assets: [],
                targetProjectId: config.projectId,
                assetsFromFile: [],
                metadata: {
                    version: _version__WEBPACK_IMPORTED_MODULE_10__["versionInfo"].version,
                }
            };
            // taxonomies
            obs.push(_this.readJsonFile(fileContents, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.taxonomies).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (taxonomiesString) {
                var taxonomies = JSON.parse(taxonomiesString);
                importData.taxonomies = taxonomies;
            })));
            // content types
            obs.push(_this.readJsonFile(fileContents, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.contentTypes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (contentTypesString) {
                var contentTypes = JSON.parse(contentTypesString);
                importData.contentTypes = contentTypes;
            })));
            // content items
            obs.push(_this.readJsonFile(fileContents, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.contentItems).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (contentItemsString) {
                var contentItems = JSON.parse(contentItemsString);
                importData.contentItems = contentItems;
            })));
            // assets
            obs.push(_this.readJsonFile(fileContents, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.assets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function (assetsString) {
                var assets = JSON.parse(assetsString);
                return _this.getAssetBinariesFromFile(fileContents, assets);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (assetsFromFile) {
                importData.assetsFromFile = assetsFromFile;
            })));
            // language variants
            obs.push(_this.readJsonFile(fileContents, _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].export.filenames.languageVariants).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (languageVariantsString) {
                var languageVariants = JSON.parse(languageVariantsString);
                importData.languageVariants = languageVariants;
            })));
            return _utilities__WEBPACK_IMPORTED_MODULE_9__["observableHelper"].zipObservables(obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () {
                return importData;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
            return result;
        }));
    };
    ExportService.prototype.getImportDataWithCMApi = function (config) {
        var _this = this;
        var targetContentManagementClient = this.getContentManagementClient({
            projectId: config.targetProjectId,
            apiKey: config.targetProjectCmApiKey
        });
        var data = {
            targetClient: targetContentManagementClient,
            contentTypes: [],
            contentItems: [],
            taxonomies: [],
            languageVariants: [],
            assets: [],
            targetProjectId: config.targetProjectId,
            assetsFromFile: [],
            metadata: {
                version: _version__WEBPACK_IMPORTED_MODULE_10__["versionInfo"].version,
            }
        };
        var obs = [
            this.cmFetchService.getAllAssets(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
                data.assets = response;
            })),
            this.cmFetchService.getAllTypes(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
                data.contentTypes = response;
            })),
            this.cmFetchService.getAllContentItems(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
                data.contentItems = response;
            })),
            this.cmFetchService.getAllTaxonomies(config.sourceProjectId, config.sourceProjectCmApiKey, []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
                data.taxonomies = response;
            })),
        ];
        return _utilities__WEBPACK_IMPORTED_MODULE_9__["observableHelper"].zipObservables(obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["flatMap"])(function () {
            return _this.cmFetchService.getLanguageVariantsForContentItems(config.sourceProjectId, config.sourceProjectCmApiKey, {
                contentItems: data.contentItems,
                contentTypes: data.contentTypes
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            data.languageVariants = response;
            return data;
        }));
    };
    ExportService.prototype.getContentManagementClient = function (config) {
        return new kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_5__["ContentManagementClient"](config);
    };
    ExportService.prototype.getAssetBinariesFromFile = function (fileContents, assets) {
        var obs = [];
        var assetsFromFile = [];
        if (!fileContents) {
            throw Error("Invalid zip file'");
        }
        var files = fileContents.files;
        var _loop_1 = function (asset) {
            var assetFile = files[_utilities__WEBPACK_IMPORTED_MODULE_9__["zipHelper"].getFullAssetPath(asset.id, asset.fileName)];
            obs.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(assetFile.async('blob')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
                assetsFromFile.push({
                    asset: asset,
                    data: data
                });
            })));
        };
        for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
            var asset = assets_1[_i];
            _loop_1(asset);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_9__["observableHelper"].zipObservables(obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () { return assetsFromFile; }));
    };
    ExportService.prototype.readJsonFile = function (fileContents, filename) {
        var files = fileContents.files;
        var file = files[filename];
        if (!file) {
            throw Error("Invalid file '" + filename + "'");
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(file.async('text')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return data; }));
    };
    ExportService.prototype.urlToPromise = function (url) {
        return new Promise(function (resolve, reject) {
            jszip_utils__WEBPACK_IMPORTED_MODULE_4__["getBinaryContent"](url, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    ExportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fetch_cm_fetch_service__WEBPACK_IMPORTED_MODULE_12__["CmFetchService"],
            _fetch_delivery_fetch_service__WEBPACK_IMPORTED_MODULE_13__["DeliveryFetchService"]])
    ], ExportService);
    return ExportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"]));



/***/ }),

/***/ "./src/services/fetch/cm-fetch.service.ts":
/*!************************************************!*\
  !*** ./src/services/fetch/cm-fetch.service.ts ***!
  \************************************************/
/*! exports provided: CmFetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmFetchService", function() { return CmFetchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kentico-cloud-content-management */ "./node_modules/kentico-cloud-content-management/_commonjs/index.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _delivery_fetch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-fetch.service */ "./src/services/fetch/delivery-fetch.service.ts");







var CmFetchService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CmFetchService, _super);
    function CmFetchService(deliveryFetchService) {
        var _this = _super.call(this) || this;
        _this.deliveryFetchService = deliveryFetchService;
        return _this;
    }
    CmFetchService.prototype.getAllContentItems = function (projectId, apiKey, contentItems, nextPageUrl) {
        var _this = this;
        var query = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        }).listContentItems();
        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            contentItems.push.apply(contentItems, response.data.items.map(function (m) {
                return {
                    codename: m.codename,
                    externalId: m.externalId,
                    id: m.id,
                    name: m.name,
                    sitemapLocations: m.sitemapLocations,
                    type: m.type,
                    typeId: m.type.id,
                    typeCodename: 'notSupported'
                };
            }));
            if (response.data.pagination.nextPage) {
                _this.getAllContentItems(projectId, apiKey, contentItems, response.data.pagination.nextPage);
            }
            return contentItems;
        }));
    };
    CmFetchService.prototype.getLanguageVariantsForContentItems = function (projectId, apiKey, prerequisities) {
        var client = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        });
        var languageVariants = [];
        var obs = [];
        var _loop_1 = function (contentItem) {
            obs.push(client.listLanguageVariants()
                .byItemCodename(contentItem.codename)
                .toObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                languageVariants.push.apply(languageVariants, response.data.variants.map(function (variant) {
                    return {
                        elements: variant.elements.map(function (element) {
                            var contentType = prerequisities.contentTypes.find(function (s) { return s.system.codename === contentItem.typeCodename; });
                            if (!contentType) {
                                throw Error("Could not find content type for content item '" + contentItem.codename + "'");
                            }
                            var contentTypeElement = contentType.elements.find(function (s) { return s.id === element.element.id; });
                            if (!contentTypeElement) {
                                throw Error("Could not find content type element for content item '" + contentItem.codename + "' with id '" + element.element.id + "'");
                            }
                            var fieldValue;
                            if (Array.isArray(element.value)) {
                                fieldValue = element.value.map(function (m) {
                                    if (!m.codename) {
                                        throw Error("Codename is required");
                                    }
                                    return m.codename;
                                });
                            }
                            else {
                                fieldValue = element.value;
                            }
                            return {
                                element: element.element,
                                value: fieldValue,
                                elementModel: contentTypeElement,
                                elementCodename: element.element.codename
                            };
                        }),
                        itemCodename: contentItem.codename,
                        itemId: contentItem.id,
                        lastModified: variant.lastModified,
                        languageCodename: 'notSupported'
                    };
                }));
            })));
        };
        for (var _i = 0, _a = prerequisities.contentItems; _i < _a.length; _i++) {
            var contentItem = _a[_i];
            _loop_1(contentItem);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return languageVariants;
        }));
    };
    CmFetchService.prototype.getAllAssets = function (projectId, apiKey, assets, nextPageUrl) {
        var _this = this;
        var query = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        }).listAssets();
        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            assets.push.apply(assets, response.data.items.map(function (m) {
                return {
                    externalId: m.externalId,
                    fileName: m.fileName,
                    id: m.id,
                    title: m.title,
                    type: m.type,
                    deliveryUrl: _this.constructDeliveryAssetUrl(projectId, m.fileReference.id, m.fileName)
                };
            }));
            if (response.data.pagination.nextPage) {
                _this.getAllAssets(projectId, apiKey, assets, response.data.pagination.nextPage);
            }
            return assets;
        }));
    };
    CmFetchService.prototype.getAllTypes = function (projectId, apiKey, allTypes, nextPageUrl) {
        var _this = this;
        var query = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        }).listContentTypes();
        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            allTypes.push.apply(allTypes, response.data.types.map(function (m) {
                var elements = [];
                m.elements.forEach(function (originalElement) {
                    var processed = false;
                    if (originalElement instanceof kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementModel) {
                        elements.push({
                            codename: originalElement.codename,
                            name: originalElement.name,
                            options: [],
                            taxonomyGroup: undefined,
                            type: originalElement.type,
                            id: originalElement.id,
                            mode: undefined
                        });
                        processed = true;
                    }
                    if (originalElement instanceof kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].MultipleChoiceElementModel) {
                        elements.push({
                            codename: originalElement.codename,
                            name: originalElement.name,
                            options: originalElement.options,
                            taxonomyGroup: undefined,
                            type: originalElement.type,
                            id: originalElement.id,
                            mode: originalElement.mode
                        });
                        processed = true;
                    }
                    if (!processed) {
                        throw Error("Unsupported element type for '" + m.codename + "' content type");
                    }
                });
                return {
                    system: {
                        codename: m.codename,
                        id: m.id,
                        name: m.name,
                    },
                    elementsWithOriginalCodename: [],
                    elements: elements
                };
            }));
            if (response.data.pagination.nextPage) {
                _this.getAllTypes(projectId, apiKey, allTypes, response.data.pagination.nextPage);
            }
            return allTypes;
        }));
    };
    CmFetchService.prototype.getAllTaxonomies = function (projectId, apiKey, taxonomies) {
        var query = this.getContentManagementClient({
            projectId: projectId,
            apiKey: apiKey
        }).listTaxonomies();
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            taxonomies.push.apply(taxonomies, response.data.map(function (m) {
                return {
                    system: m,
                    terms: m.terms
                };
            }));
            return taxonomies;
        }));
    };
    CmFetchService.prototype.getContentManagementClient = function (config) {
        return new kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ContentManagementClient"](config);
    };
    CmFetchService.prototype.getDataCenterFromProject = function (projectId) {
        var dataCenterIdentifier = projectId.substr(14, 2);
        if (dataCenterIdentifier === '00') {
            return 'US';
        }
        if (dataCenterIdentifier === '01') {
            return 'EU';
        }
        if (dataCenterIdentifier === '02') {
            return 'AU';
        }
        return 'US';
    };
    CmFetchService.prototype.constructDeliveryAssetUrl = function (projectId, fileId, assetFilename) {
        var dataCenter = this.getDataCenterFromProject(projectId);
        var dataCenterIdentifier = 'us-01';
        if (dataCenter === 'EU') {
            dataCenterIdentifier = 'eu-01';
        }
        if (dataCenter === 'AU') {
            dataCenterIdentifier = 'au-01';
        }
        return "https://assets-" + dataCenterIdentifier + ".kc-usercontent.com/" + projectId + "/" + fileId + "/" + assetFilename;
    };
    CmFetchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delivery_fetch_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryFetchService"]])
    ], CmFetchService);
    return CmFetchService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "./src/services/fetch/delivery-fetch.service.ts":
/*!******************************************************!*\
  !*** ./src/services/fetch/delivery-fetch.service.ts ***!
  \******************************************************/
/*! exports provided: DeliveryFetchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryFetchService", function() { return DeliveryFetchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kentico-cloud-delivery */ "./node_modules/kentico-cloud-delivery/_commonjs/index.js");
/* harmony import */ var kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../processing/processing.service */ "./src/services/processing/processing.service.ts");
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mime */ "./node_modules/mime/index.js");
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mime__WEBPACK_IMPORTED_MODULE_6__);







var DeliveryFetchService = /** @class */ (function () {
    function DeliveryFetchService(processingService) {
        this.processingService = processingService;
    }
    DeliveryFetchService.prototype.getAllTypes = function (projectId, allTypes, config, nextPageUrl) {
        var _this = this;
        var query = this.getDeliveryClient({
            projectId: projectId
        }).types();
        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            allTypes.push.apply(allTypes, response.types.map(function (m) {
                return {
                    elements: m.elements,
                    system: {
                        codename: m.system.codename,
                        id: m.system.id,
                        name: m.system.name
                    }
                };
            }));
            if (config.useProcessingService) {
                _this.processingService.addProcessedItems(response.types.map(function (m) {
                    return {
                        type: 'content type',
                        action: 'get',
                        data: m,
                        name: m.system.name
                    };
                }));
            }
            if (response.pagination.nextPage) {
                _this.getAllTypes(projectId, allTypes, config, response.pagination.nextPage);
            }
            return allTypes;
        }));
    };
    DeliveryFetchService.prototype.getAllTaxonomies = function (projectId, taxonomies, config, nextPageUrl) {
        var _this = this;
        var query = this.getDeliveryClient({
            projectId: projectId
        }).taxonomies();
        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            taxonomies.push.apply(taxonomies, response.taxonomies.map(function (m) {
                return {
                    system: m.system,
                    terms: m.terms
                };
            }));
            if (config.useProcessingService) {
                _this.processingService.addProcessedItems(response.taxonomies.map(function (m) {
                    return {
                        type: 'taxonomy',
                        action: 'get',
                        data: m,
                        name: m.system.name
                    };
                }));
            }
            if (response.pagination.nextPage) {
                _this.getAllTaxonomies(projectId, taxonomies, config, response.pagination.nextPage);
            }
            return taxonomies;
        }));
    };
    DeliveryFetchService.prototype.getAllContentItems = function (projectId, languageCodenames, config) {
        var _this = this;
        var contentItems = [];
        var obs = [];
        if (languageCodenames.length === 0) {
            // get content items in default language withous specifying any language param
            return this.getContentItemsForLanguage(projectId, contentItems, config, undefined, undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                return _this.processContentItemsResult(result);
            }));
        }
        for (var _i = 0, languageCodenames_1 = languageCodenames; _i < languageCodenames_1.length; _i++) {
            var languageCodename = languageCodenames_1[_i];
            obs.push(this.getContentItemsForLanguage(projectId, [], config, languageCodename, undefined).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                contentItems.push.apply(contentItems, response);
            })));
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, 50).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this.processContentItemsResult(contentItems);
        }));
    };
    DeliveryFetchService.prototype.getContentItemByCodename = function (projectId, codename) {
        var _this = this;
        return this.getDeliveryClient({
            projectId: projectId
        })
            .item(codename)
            .toObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var item = response.item;
            return {
                elements: item.elements,
                system: item.system,
                assets: _this.extractAssets(item),
                linkedItemCodenames: _this.extractLinkedItemCodenames(item)
            };
        }));
    };
    DeliveryFetchService.prototype.getDeliveryClient = function (config) {
        return new kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["DeliveryClient"](config);
    };
    DeliveryFetchService.prototype.processContentItemsResult = function (contentItems) {
        var assets = [];
        var slimContentItems = [];
        var languageVariants = [];
        for (var _i = 0, contentItems_1 = contentItems; _i < contentItems_1.length; _i++) {
            var contentItem = contentItems_1[_i];
            assets.push.apply(assets, contentItem.assets.map(function (m) {
                // delivery API does not return asset/file in all cases - use custom generated one for such scenarios
                var assetId = !m.id ? _utilities__WEBPACK_IMPORTED_MODULE_4__["stringHelper"].newGuid() : m.id;
                return {
                    deliveryUrl: m.asset.url,
                    fileName: m.asset.name,
                    id: assetId,
                    type: m.asset.type,
                    description: m.asset.description,
                    size: m.size,
                    zipFilePath: _utilities__WEBPACK_IMPORTED_MODULE_4__["zipHelper"].getFullAssetPath(assetId, m.asset.name),
                    externalId: undefined,
                    title: m.name // N/A Delivery API
                };
            }));
            slimContentItems.push({
                codename: contentItem.system.codename,
                id: contentItem.system.id,
                name: contentItem.system.name,
                typeId: undefined,
                typeCodename: contentItem.system.type
            });
            languageVariants.push(this.extractLanguageVariant(contentItem));
        }
        return {
            assets: assets,
            contentItems: this.filterIdenticalContentItems(slimContentItems),
            languageVariants: languageVariants
        };
    };
    DeliveryFetchService.prototype.extractLanguageVariant = function (contentItem) {
        if (!contentItem.system.language) {
            throw Error("Invalid or missing language for content item '" + contentItem.system.codename + "'");
        }
        var elements = [];
        for (var _i = 0, _a = Object.keys(contentItem.elements); _i < _a.length; _i++) {
            var elementCodename = _a[_i];
            var field = contentItem.elements[elementCodename];
            var fieldValue = undefined;
            if (field.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["FieldType"].Asset.toLowerCase()) {
                var assetFieldValue = field.value;
                fieldValue = assetFieldValue;
            }
            if (field.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["FieldType"].MultipleChoice.toLowerCase()) {
                var multipleFieldValue = field.value;
                fieldValue = multipleFieldValue;
            }
            else {
                fieldValue = field.value;
            }
            elements.push({
                value: fieldValue,
                elementCodename: field.name,
                elementModel: {
                    codename: elementCodename,
                    type: field.type,
                    mode: undefined,
                    name: field.name,
                    options: [],
                    taxonomyGroup: field.taxonomy_group
                }
            });
        }
        return {
            itemCodename: contentItem.system.codename,
            itemId: contentItem.system.id,
            languageCodename: contentItem.system.language,
            elements: elements
        };
    };
    DeliveryFetchService.prototype.filterIdenticalContentItems = function (contentItems) {
        return contentItems.reduce(function (unique, item) {
            var existingItem = unique.find(function (m) { return m.codename === item.codename; });
            return existingItem ? unique : unique.concat([item]);
        }, []);
    };
    DeliveryFetchService.prototype.addLinkedItemsToResponse = function (linkedItemCodenames, response, contentItems) {
        var _loop_1 = function (linkedItemCodename) {
            var existingItem = contentItems.find(function (m) { return m.system.codename === linkedItemCodename; });
            if (!existingItem) {
                // item is component, add it from response
                var linkedItem = response.linkedItems[linkedItemCodename];
                if (!linkedItem) {
                    throw Error("Could not find linked item with codename '" + linkedItemCodename + "' in response");
                }
                contentItems.push({
                    elements: linkedItem.elements,
                    system: linkedItem.system,
                    assets: this_1.extractAssets(linkedItem),
                    linkedItemCodenames: this_1.extractLinkedItemCodenames(linkedItem)
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, linkedItemCodenames_1 = linkedItemCodenames; _i < linkedItemCodenames_1.length; _i++) {
            var linkedItemCodename = linkedItemCodenames_1[_i];
            _loop_1(linkedItemCodename);
        }
    };
    DeliveryFetchService.prototype.getContentItemsForLanguage = function (projectId, contentItems, config, languageCodename, nextPageUrl) {
        var _this = this;
        var query = this.getDeliveryClient({
            projectId: projectId
        }).items();
        if (languageCodename) {
            query.languageParameter(languageCodename);
        }
        if (nextPageUrl) {
            query.withUrl(nextPageUrl);
        }
        return query
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var _loop_2 = function (item) {
                if (!contentItems.find(function (m) { return m.system.codename === item.system.codename; })) {
                    var contentItem = {
                        elements: item.elements,
                        system: item.system,
                        assets: _this.extractAssets(item),
                        linkedItemCodenames: _this.extractLinkedItemCodenames(item)
                    };
                    contentItems.push(contentItem);
                    if (config.useProcessingService) {
                        _this.processingService.addProcessedItems(response.items.map(function (m) {
                            return {
                                type: 'content item',
                                action: 'get',
                                data: m,
                                name: "[" + m.system.language + "] " + m.system.name
                            };
                        }));
                    }
                    // make sure that components are added to result as well - needed because of components in rich text elements
                    _this.addLinkedItemsToResponse(contentItem.linkedItemCodenames, response, contentItems);
                }
            };
            for (var _i = 0, _a = response.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _loop_2(item);
            }
            if (response.pagination.nextPage) {
                _this.getContentItemsForLanguage(projectId, contentItems, config, languageCodename, response.pagination.nextPage);
            }
            return contentItems;
        }));
    };
    DeliveryFetchService.prototype.extractLinkedItemCodenames = function (contentItem) {
        var linkedItems = [];
        for (var _i = 0, _a = Object.keys(contentItem.elements); _i < _a.length; _i++) {
            var elementCodename = _a[_i];
            var element = contentItem.elements[elementCodename];
            if (element.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["FieldType"].ModularContent.toLowerCase()) {
                var modularContent = element.value;
                for (var _b = 0, modularContent_1 = modularContent; _b < modularContent_1.length; _b++) {
                    var modularItem = modularContent_1[_b];
                    if (!linkedItems.includes(modularItem)) {
                        linkedItems.push(modularItem);
                    }
                }
            }
            if (element.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["FieldType"].RichText.toLowerCase()) {
                var modularContent = element['modular_content'];
                for (var _c = 0, modularContent_2 = modularContent; _c < modularContent_2.length; _c++) {
                    var modularItem = modularContent_2[_c];
                    if (!linkedItems.includes(modularItem)) {
                        linkedItems.push(modularItem);
                    }
                }
            }
        }
        return linkedItems;
    };
    DeliveryFetchService.prototype.extractAssets = function (contentItem) {
        var assets = [];
        for (var _i = 0, _a = Object.keys(contentItem.elements); _i < _a.length; _i++) {
            var elementCodename = _a[_i];
            var element = contentItem.elements[elementCodename];
            // process asset elements
            if (element.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["FieldType"].Asset.toLowerCase()) {
                var fieldAssets = element.value;
                for (var _b = 0, fieldAssets_1 = fieldAssets; _b < fieldAssets_1.length; _b++) {
                    var asset = fieldAssets_1[_b];
                    assets.push({
                        assetSource: 'assetElement',
                        languageCodename: contentItem.system.language,
                        asset: asset,
                        contentItemCodename: contentItem.system.codename,
                        contentItemId: contentItem.system.id,
                        fieldCodename: elementCodename,
                        description: asset.description,
                        size: asset.size || 0,
                        type: asset.type,
                        name: asset.name,
                        id: false,
                    });
                }
            }
            // process rich text elements
            if (element.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_2__["FieldType"].RichText.toLowerCase()) {
                var richTextElement = element;
                for (var _c = 0, _d = Object.keys(richTextElement.images); _c < _d.length; _c++) {
                    var imageKey = _d[_c];
                    var image = richTextElement.images[imageKey];
                    var fileType = this.extractMimeTypeFromUrl(image.url);
                    if (!fileType) {
                        throw Error("Cannot determine type of asset from '" + image.url + "'. This is referenced by '" + contentItem.system.codename + "' content item in element '" + element.name + "'");
                    }
                    assets.push({
                        assetSource: 'richTexElementtImages',
                        asset: {
                            description: image.description || '',
                            name: image.image_id,
                            size: 0,
                            type: fileType,
                            url: image.url,
                        },
                        contentItemCodename: contentItem.system.codename,
                        contentItemId: contentItem.system.id,
                        fieldCodename: elementCodename,
                        description: image.description,
                        size: 0,
                        type: fileType,
                        name: image.image_id,
                        languageCodename: contentItem.system.language,
                        id: image.image_id
                    });
                }
            }
        }
        return assets;
    };
    DeliveryFetchService.prototype.extractMimeTypeFromUrl = function (url) {
        return Object(mime__WEBPACK_IMPORTED_MODULE_6__["getType"])(url);
    };
    DeliveryFetchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_5__["ProcessingService"]])
    ], DeliveryFetchService);
    return DeliveryFetchService;
}());



/***/ }),

/***/ "./src/services/google/google-analytics.service.ts":
/*!*********************************************************!*\
  !*** ./src/services/google/google-analytics.service.ts ***!
  \*********************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



/**
 * Docs: https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService(rendererFactory2) {
        /**
         * Name of script tag in DOM
         */
        this.sourceScriptElemId = 'google-analytics-source';
        /**
         * Name of script tag in DOM
         */
        this.executionSriptElemId = 'google-analytics-script';
        this.renderer2 = rendererFactory2.createRenderer(null, null);
    }
    /**
     * Tracks given page in google analytics
     * @param data Page data to track
     */
    GoogleAnalyticsService.prototype.trackPageview = function (data) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].google.enableTracking) {
            // tracking is disabled
            return;
        }
        // make sure script is registered
        this.ensureGoogleAnalyticsScript();
        if (window['gtag']) {
            // source: https://developers.google.com/analytics/devguides/collection/gtagjs/pages
            gtag('config', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].google.googleAnalyticsTrackingId, {
                page_title: data.pageTitle,
                page_location: data.pageLocation,
                page_path: data.pagePath,
            });
        }
        else {
            throw Error("gtag is not available and cannot log page");
        }
    };
    GoogleAnalyticsService.prototype.ensureGoogleAnalyticsScript = function () {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].google.googleAnalyticsTrackingId) {
            throw Error('Cannot init google analytics because tracking id is not configured');
        }
        if (document.getElementById(this.sourceScriptElemId) || document.getElementById(this.executionSriptElemId)) {
            return;
        }
        var sourceScriptElem = this.renderer2.createElement('script');
        sourceScriptElem.type = 'text/javascript';
        sourceScriptElem.id = this.sourceScriptElemId;
        sourceScriptElem.async = true;
        sourceScriptElem.src = "https://www.googletagmanager.com/gtag/js?id=" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].google.googleAnalyticsTrackingId;
        document.getElementsByTagName('head')[0].appendChild(sourceScriptElem);
        var executionScriptElem = this.renderer2.createElement('script');
        executionScriptElem.type = 'text/javascript';
        executionScriptElem.id = this.executionSriptElemId;
        executionScriptElem.innerText = "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        ";
        document.getElementsByTagName('head')[0].appendChild(executionScriptElem);
    };
    GoogleAnalyticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]])
    ], GoogleAnalyticsService);
    return GoogleAnalyticsService;
}());



/***/ }),

/***/ "./src/services/import/import.service.ts":
/*!***********************************************!*\
  !*** ./src/services/import/import.service.ts ***!
  \***********************************************/
/*! exports provided: ImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportService", function() { return ImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/services/workflow/workflow.service.ts");
/* harmony import */ var _types_assets_import_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/assets-import.service */ "./src/services/import/types/assets-import.service.ts");
/* harmony import */ var _types_content_items_import_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/content-items-import.service */ "./src/services/import/types/content-items-import.service.ts");
/* harmony import */ var _types_content_types_import_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/content-types-import.service */ "./src/services/import/types/content-types-import.service.ts");
/* harmony import */ var _types_language_variants_import_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/language-variants-import.service */ "./src/services/import/types/language-variants-import.service.ts");
/* harmony import */ var _types_taxonomies_import_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/taxonomies-import.service */ "./src/services/import/types/taxonomies-import.service.ts");










var ImportService = /** @class */ (function () {
    function ImportService(contentTypesImportService, contentItemsImportService, taxonomiesImportService, workflowService, languageVariantsImportService, assetsImportService) {
        this.contentTypesImportService = contentTypesImportService;
        this.contentItemsImportService = contentItemsImportService;
        this.taxonomiesImportService = taxonomiesImportService;
        this.workflowService = workflowService;
        this.languageVariantsImportService = languageVariantsImportService;
        this.assetsImportService = assetsImportService;
    }
    ImportService.prototype.importContentItemsOnly = function (data, config) {
        var _this = this;
        var result = {
            importedContentItems: [],
            importedContentTypes: [],
            importedLanguageVariants: [],
            importedTaxonomies: [],
            publishedItems: [],
            importedAssets: []
        };
        return this.contentItemsImportService.importContentItems(data.targetClient, data.contentItems, {
            contentTypes: data.contentTypes.map(function (m) { return ({
                importedItem: m,
                originalItem: m
            }); }),
            taxonomies: data.taxonomies.map(function (m) { return ({
                importedItem: m,
                originalItem: m
            }); })
        }, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (response) {
            result.importedContentItems = response;
            return _this.assetsImportService.importAssetsByUrl(data.targetClient, data.assets, data.assetsFromFile, config);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (response) {
            result.importedAssets = response;
            return _this.languageVariantsImportService.importLanguageVariants(data.targetClient, data.languageVariants, {
                assets: result.importedAssets,
                contentItems: result.importedContentItems,
                contentTypes: data.contentTypes.map(function (m) { return ({
                    importedItem: m,
                    originalItem: m
                }); }),
                taxonomies: data.taxonomies.map(function (m) { return ({
                    importedItem: m,
                    originalItem: m
                }); })
            }, config);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (response) {
            result.importedLanguageVariants = response;
            if (config.publishAllItems) {
                return _this.getPublishObservable(data.targetClient, config, result.importedLanguageVariants);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
                result.publishedItems = response;
            }
            return result;
        }));
    };
    ImportService.prototype.import = function (data, config) {
        var _this = this;
        var result = {
            importedContentItems: [],
            importedContentTypes: [],
            importedLanguageVariants: [],
            importedTaxonomies: [],
            publishedItems: [],
            importedAssets: []
        };
        return this.taxonomiesImportService.importTaxonomies(data.targetClient, data.taxonomies, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (response) {
            result.importedTaxonomies = response;
            return _this.contentTypesImportService.importContentTypes(data.targetClient, data.contentTypes, {
                taxonomies: response
            }, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (contentTypes) {
                result.importedContentTypes = contentTypes;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this.assetsImportService.importAssetsByUrl(data.targetClient, data.assets, data.assetsFromFile, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                result.importedAssets = response;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this.contentItemsImportService.importContentItems(data.targetClient, data.contentItems, {
                contentTypes: result.importedContentTypes,
                taxonomies: result.importedTaxonomies
            }, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                result.importedContentItems = response;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this.languageVariantsImportService.importLanguageVariants(data.targetClient, data.languageVariants, {
                contentTypes: result.importedContentTypes,
                taxonomies: result.importedTaxonomies,
                contentItems: result.importedContentItems,
                assets: result.importedAssets
            }, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                result.importedLanguageVariants = response;
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            if (config.publishAllItems) {
                return _this.getPublishObservable(data.targetClient, config, result.importedLanguageVariants);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
                result.publishedItems = response;
            }
            // all finished
            return result;
        }));
    };
    ImportService.prototype.getPublishObservable = function (client, config, importedLanguageVariants) {
        return this.workflowService.publishContentItems(importedLanguageVariants.map(function (languageVariantResult) {
            if (!languageVariantResult.importedItem.item.id) {
                throw Error("Cannot publish item because item id is missing");
            }
            if (!languageVariantResult.importedItem.language.id) {
                throw Error("Cannot publish item because language id is missing for item '" + languageVariantResult.importedItem.item.id + "'");
            }
            return {
                itemId: languageVariantResult.importedItem.item.id,
                languageId: languageVariantResult.importedItem.language.id
            };
        }), client, config);
    };
    ImportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_types_content_types_import_service__WEBPACK_IMPORTED_MODULE_7__["ContentTypesImportService"],
            _types_content_items_import_service__WEBPACK_IMPORTED_MODULE_6__["ContentItemsImportService"],
            _types_taxonomies_import_service__WEBPACK_IMPORTED_MODULE_9__["TaxonomiesImportService"],
            _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowService"],
            _types_language_variants_import_service__WEBPACK_IMPORTED_MODULE_8__["LanguageVariantsImportService"],
            _types_assets_import_service__WEBPACK_IMPORTED_MODULE_5__["AssetsImportService"]])
    ], ImportService);
    return ImportService;
}());



/***/ }),

/***/ "./src/services/import/types/assets-import.service.ts":
/*!************************************************************!*\
  !*** ./src/services/import/types/assets-import.service.ts ***!
  \************************************************************/
/*! exports provided: AssetsImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsImportService", function() { return AssetsImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../processing/processing.service */ "./src/services/processing/processing.service.ts");







var AssetsImportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AssetsImportService, _super);
    function AssetsImportService(processingService) {
        var _this = _super.call(this) || this;
        _this.processingService = processingService;
        return _this;
    }
    AssetsImportService.prototype.importAssetsByUrl = function (targetClient, assets, assetsFromFile, config) {
        var importedAssets = [];
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables([
            this.importAssetsByUrlInternal(targetClient, assets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (createdAssets) {
                importedAssets.push.apply(importedAssets, createdAssets);
            })),
            this.importAssetsFromFileInternal(targetClient, assetsFromFile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (createdAssets) {
                importedAssets.push.apply(importedAssets, createdAssets);
            })),
        ], this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return importedAssets;
        }));
    };
    AssetsImportService.prototype.importAssetsByUrlInternal = function (targetClient, assets) {
        var _this = this;
        var createdAssets = [];
        var assetsToCreateObs = [];
        var obs = [];
        var _loop_1 = function (asset) {
            assetsToCreateObs.push(this_1.getAssetBlobFromUrl(asset.deliveryUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                return {
                    blob: response.blob,
                    asset: asset
                };
            })));
        };
        var this_1 = this;
        for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
            var asset = assets_1[_i];
            _loop_1(asset);
        }
        for (var _a = 0, assetsToCreateObs_1 = assetsToCreateObs; _a < assetsToCreateObs_1.length; _a++) {
            var assetObs = assetsToCreateObs_1[_a];
            obs.push(assetObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (data) {
                var asset = data.asset;
                var contentType = asset.type;
                var fileBinary = data.blob;
                return targetClient.uploadBinaryFile()
                    .withData({
                    binaryData: fileBinary,
                    contentType: contentType,
                    filename: asset.fileName
                }).toObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(_this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (response) {
                    _this.processingService.addProcessedItem({
                        data: response.data.id,
                        type: 'binary file',
                        action: 'upload',
                        name: "[" + response.data.type + "] - " + asset.fileName
                    });
                    return targetClient.addAsset().withData({
                        title: asset.title,
                        descriptions: [],
                        fileReference: {
                            id: response.data.id,
                            type: response.data.type
                        },
                    }).toObservable();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                    _this.processingService.addProcessedItem({
                        data: response.data.fileName,
                        type: 'asset',
                        action: 'add',
                        name: "[" + response.data.type + "] - " + response.data.fileName
                    });
                    createdAssets.push({
                        importedItem: response.data,
                        originalItem: data.asset
                    });
                }));
            })));
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return createdAssets;
        }));
    };
    AssetsImportService.prototype.getAssetBlobFromUrl = function (url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.onload = function () {
                resolve({
                    blob: xhr.response,
                });
            };
            xhr.send();
        }));
    };
    AssetsImportService.prototype.importAssetsFromFileInternal = function (targetClient, assets) {
        var _this = this;
        var createdAssets = [];
        var obs = [];
        var _loop_2 = function (assetFromFile) {
            var contentType = assetFromFile.asset.type;
            var fileBinary = assetFromFile.data;
            obs.push(targetClient.uploadBinaryFile()
                .withData({
                binaryData: fileBinary,
                contentType: contentType,
                filename: assetFromFile.asset.fileName
            }).toObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this_2.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (response) {
                _this.processingService.addProcessedItem({
                    data: response.data.id,
                    type: 'binary file',
                    action: 'upload',
                    name: assetFromFile.asset.fileName + " [" + assetFromFile.asset.size + "B]"
                });
                return targetClient.addAsset().withData({
                    title: assetFromFile.asset.fileName,
                    descriptions: [],
                    fileReference: {
                        id: response.data.id,
                        type: response.data.type
                    },
                }).toObservable();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                _this.processingService.addProcessedItem({
                    data: response.data.fileName,
                    type: 'asset',
                    action: 'add',
                    name: "[" + response.data.type + "] - " + response.data.fileName
                });
                createdAssets.push({
                    importedItem: response.data,
                    originalItem: assetFromFile.asset
                });
            })));
        };
        var this_2 = this;
        for (var _i = 0, assets_2 = assets; _i < assets_2.length; _i++) {
            var assetFromFile = assets_2[_i];
            _loop_2(assetFromFile);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_4__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return createdAssets; }));
    };
    AssetsImportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_6__["ProcessingService"]])
    ], AssetsImportService);
    return AssetsImportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "./src/services/import/types/content-items-import.service.ts":
/*!*******************************************************************!*\
  !*** ./src/services/import/types/content-items-import.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContentItemsImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentItemsImportService", function() { return ContentItemsImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../processing/processing.service */ "./src/services/processing/processing.service.ts");






var ContentItemsImportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContentItemsImportService, _super);
    function ContentItemsImportService(processingService) {
        var _this = _super.call(this) || this;
        _this.processingService = processingService;
        return _this;
    }
    ContentItemsImportService.prototype.importContentItems = function (targetClient, contentItems, prerequisities, config) {
        return this.prepareAllContentItemsWithoutLanguageVariants(targetClient, contentItems, prerequisities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (createdContentItems) {
            return createdContentItems;
        }));
    };
    ContentItemsImportService.prototype.prepareAllContentItemsWithoutLanguageVariants = function (targetClient, contentItems, prerequisities) {
        var createdContentItems = [];
        var obs = [];
        var _loop_1 = function (item) {
            obs.push(this_1.addContentItem(targetClient, item, prerequisities).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
                createdContentItems.push({
                    importedItem: response.data,
                    originalItem: item
                });
            })));
        };
        var this_1 = this;
        for (var _i = 0, contentItems_1 = contentItems; _i < contentItems_1.length; _i++) {
            var item = contentItems_1[_i];
            _loop_1(item);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_3__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return createdContentItems;
        }));
    };
    ContentItemsImportService.prototype.addContentItem = function (targetClient, contentItem, prerequisities) {
        var _this = this;
        var candidateContentType = prerequisities.contentTypes.find(function (m) { return m.originalItem.system.codename === contentItem.typeCodename; });
        if (!candidateContentType) {
            throw Error("Could not find candidate content type '" + contentItem.typeCodename + "'. This was required by '" + contentItem.codename + "' content item.");
        }
        return targetClient.addContentItem()
            .withData({
            name: contentItem.name,
            type: {
                codename: candidateContentType.importedItem.system.codename
            },
        })
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.processingService.addProcessedItem({
                data: contentItem,
                type: 'content item',
                action: 'add',
                name: response.data.codename
            });
            return response;
        }));
    };
    ContentItemsImportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_5__["ProcessingService"]])
    ], ContentItemsImportService);
    return ContentItemsImportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/services/import/types/content-types-import.service.ts":
/*!*******************************************************************!*\
  !*** ./src/services/import/types/content-types-import.service.ts ***!
  \*******************************************************************/
/*! exports provided: ContentTypesImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesImportService", function() { return ContentTypesImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kentico-cloud-content-management */ "./node_modules/kentico-cloud-content-management/_commonjs/index.js");
/* harmony import */ var kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kentico-cloud-delivery */ "./node_modules/kentico-cloud-delivery/_commonjs/index.js");
/* harmony import */ var kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../processing/processing.service */ "./src/services/processing/processing.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.models */ "./src/services/shared/shared.models.ts");









var ContentTypesImportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContentTypesImportService, _super);
    function ContentTypesImportService(processingService) {
        var _this = _super.call(this) || this;
        _this.processingService = processingService;
        return _this;
    }
    ContentTypesImportService.prototype.importContentTypes = function (targetClient, contentTypes, prerequisities, config) {
        var _this = this;
        var obs = [];
        var importedTypes = [];
        contentTypes.forEach(function (contentType) {
            obs.push(_this.createType(contentType, targetClient, prerequisities, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (importedType) {
                importedTypes.push({
                    importedItem: importedType,
                    originalItem: contentType
                });
            })));
        });
        return _utilities__WEBPACK_IMPORTED_MODULE_5__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return importedTypes; }));
    };
    ContentTypesImportService.prototype.mapElementType = function (element) {
        var type = element.type;
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].text) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.text;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].number) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.number;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].asset) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.asset;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].dateTime) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.dateTime;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].richText) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.richText;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].urlSlug) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.urlSlug;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].multipleChoice) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.multipleChoice;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].modularContent) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.modularContent;
        }
        if (type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].taxonomy) {
            return kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.taxonomy;
        }
        console.warn("Mapping of element type '" + element.type + "' is not yet supported. Skipping element.");
        return undefined;
    };
    ContentTypesImportService.prototype.getElementMultipleChoiceOptions = function (element) {
        return element.options.map(function (m) {
            return {
                name: m.name
            };
        });
    };
    ContentTypesImportService.prototype.fixUrlSlugElem = function (elements) {
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            var dependsOn = undefined;
            if (element.type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["ElementType"].urlSlug) {
                if (element.depends_on) {
                    dependsOn = element.depends_on;
                }
                else {
                    // try finding first text field to use as depends on reference
                    var textElem = elements.find(function (m) { return m.type.toLowerCase() === kentico_cloud_delivery__WEBPACK_IMPORTED_MODULE_3__["FieldType"].Text.toLowerCase(); });
                    if (textElem) {
                        dependsOn = {
                            element: {
                                external_id: textElem.external_id
                            }
                        };
                    }
                }
                if (!dependsOn) {
                    throw Error("Could not get any depending element for url slug field");
                }
                element.depends_on = dependsOn;
            }
        }
    };
    ContentTypesImportService.prototype.getElementData = function (element, prerequisities) {
        var elementType = this.mapElementType(element);
        if (elementType) {
            var mode = undefined;
            var options = void 0;
            var externalId = _utilities__WEBPACK_IMPORTED_MODULE_5__["stringHelper"].newGuid();
            var taxonomyGroup = void 0;
            if (elementType === kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.multipleChoice) {
                mode = kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementMode.single;
                options = this.getElementMultipleChoiceOptions(element);
            }
            if (elementType === kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.modularContent) {
                mode = kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementMode.multiple;
            }
            if (elementType === kentico_cloud_content_management__WEBPACK_IMPORTED_MODULE_2__["ElementModels"].ElementType.taxonomy) {
                if (!element.taxonomyGroup) {
                    throw Error("Element '" + element.codename + "' does not have taxonomy group assigned");
                }
                var candidateTaxonomyGroup = prerequisities.taxonomies.find(function (m) { return m.originalItem.system.codename === element.taxonomyGroup; });
                if (!candidateTaxonomyGroup) {
                    throw Error("Cannto find candidate taxonomy group for element '" + element.codename + "' with taxonomy group set to '" + element.taxonomyGroup + "'");
                }
                taxonomyGroup = {
                    codename: candidateTaxonomyGroup.importedItem.system.codename
                };
            }
            return {
                name: element.name,
                mode: mode,
                guidelines: '',
                options: options,
                type: elementType,
                external_id: externalId,
                taxonomy_group: taxonomyGroup
            };
        }
        return undefined;
    };
    ContentTypesImportService.prototype.createType = function (contentType, targetClient, prerequisities, data) {
        var _this = this;
        var mappedElements = [];
        contentType.elements.forEach(function (sourceElement) {
            var mappedElementData = _this.getElementData(sourceElement, prerequisities);
            if (mappedElementData) {
                mappedElements.push(mappedElementData);
            }
        });
        // fixes url slug elem
        this.fixUrlSlugElem(mappedElements);
        return targetClient.addContentType()
            .withData({
            name: contentType.system.name,
            elements: mappedElements
        })
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.processingService.addProcessedItem({
                data: contentType,
                type: 'content type',
                action: 'add',
                name: response.data.codename
            });
            return {
                elements: response.data.elements,
                system: {
                    codename: response.data.codename,
                    id: response.data.id,
                    name: response.data.name
                }
            };
        }));
    };
    ContentTypesImportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_7__["ProcessingService"]])
    ], ContentTypesImportService);
    return ContentTypesImportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"]));



/***/ }),

/***/ "./src/services/import/types/language-variants-import.service.ts":
/*!***********************************************************************!*\
  !*** ./src/services/import/types/language-variants-import.service.ts ***!
  \***********************************************************************/
/*! exports provided: LanguageVariantsImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageVariantsImportService", function() { return LanguageVariantsImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../processing/processing.service */ "./src/services/processing/processing.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.models */ "./src/services/shared/shared.models.ts");







var LanguageVariantsImportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LanguageVariantsImportService, _super);
    function LanguageVariantsImportService(processingService) {
        var _this = _super.call(this) || this;
        _this.processingService = processingService;
        return _this;
    }
    LanguageVariantsImportService.prototype.importLanguageVariants = function (targetClient, languageVariants, prerequisities, config) {
        var obs = [];
        var importedLanguageVariants = [];
        for (var _i = 0, languageVariants_1 = languageVariants; _i < languageVariants_1.length; _i++) {
            var languageVariant = languageVariants_1[_i];
            obs.push(this.createLanguageVariants({
                languageVariant: languageVariant,
                targetClient: targetClient,
                config: config,
                prerequisities: prerequisities
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (importResult) {
                importedLanguageVariants.push(importResult);
            })));
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_3__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return importedLanguageVariants;
        }));
    };
    LanguageVariantsImportService.prototype.createLanguageVariants = function (data) {
        var _this = this;
        var candidateContentItemForLanguageVariant = data.prerequisities.contentItems.find(function (m) { return m.originalItem.codename === data.languageVariant.itemCodename; });
        if (!candidateContentItemForLanguageVariant) {
            throw Error("Cannot find candidate content item (parent) for language variant with id '" + data.languageVariant.itemCodename + "' ");
        }
        var languageCodename = data.languageVariant.languageCodename;
        if (!languageCodename) {
            throw Error("Invalid language for language variant '" + data.languageVariant.itemCodename + "'");
        }
        return data.targetClient.upsertLanguageVariant()
            .byItemId(candidateContentItemForLanguageVariant.importedItem.id)
            .byLanguageCodename(languageCodename)
            .withElementCodenames(this.getElements(candidateContentItemForLanguageVariant, data.languageVariant, data.prerequisities))
            .toObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.processingService.addProcessedItem({
                data: data.languageVariant,
                type: 'language variant',
                action: 'add',
                name: data.languageVariant.itemCodename + " [" + data.languageVariant.languageCodename + "]"
            });
            return {
                importedItem: response.data,
                originalItem: data.languageVariant
            };
        }));
    };
    LanguageVariantsImportService.prototype.processRichTextItems = function (htmlCollection, prerequisities) {
        if (!htmlCollection || htmlCollection.length === 0) {
            // there are no more nodes
        }
        else {
            var _loop_1 = function (i) {
                var element = htmlCollection[i];
                // process links 
                if (element.nodeName.toLowerCase() === 'a'.toLowerCase()) {
                    var linkAttributes = element.attributes;
                    // remove attributes not allowed by CM API
                    if (linkAttributes.getNamedItem('rel')) {
                        linkAttributes.removeNamedItem('rel');
                    }
                    if (linkAttributes.getNamedItem('target')) {
                        linkAttributes.removeNamedItem('target');
                    }
                }
                // process assets
                if (element.nodeName.toLowerCase() === 'figure'.toLowerCase()) {
                    var assetAttributes = element.getAttributeNames();
                    // remove attributes not allowed by CM API
                    var allowedAttributes = ['data-asset-id', 'data-asset-external-id'];
                    for (var _i = 0, assetAttributes_1 = assetAttributes; _i < assetAttributes_1.length; _i++) {
                        var assetAttribute = assetAttributes_1[_i];
                        if (!allowedAttributes.includes(assetAttribute)) {
                            element.attributes.removeNamedItem(assetAttribute);
                        }
                    }
                    var dataAssetId_1 = element.attributes.getNamedItem('data-asset-id');
                    var dataImageExternalId_1 = element.attributes.getNamedItem('data-asset-external-id');
                    if (dataAssetId_1) {
                        // get imported asset
                        var asset = prerequisities.assets.find(function (m) { return m.originalItem.id === dataAssetId_1.value; });
                        if (!asset) {
                            throw Error("Asset with id '" + dataAssetId_1.value + "' could not be found in source data");
                        }
                        element.attributes.removeNamedItem('data-asset-id');
                        element.setAttribute('data-asset-id', asset.importedItem.id);
                    }
                    if (dataImageExternalId_1) {
                        // get imported asset
                        var asset = prerequisities.assets.find(function (m) { return m.originalItem.externalId === dataImageExternalId_1.value; });
                        if (!asset) {
                            throw Error("Asset with external id '" + dataImageExternalId_1.value + "' could not be found in source data");
                        }
                        var externalIdOfImportedAsset = asset.importedItem.externalId;
                        if (!externalIdOfImportedAsset) {
                            throw Error("ExternalId of asset is not set");
                        }
                        element.attributes.removeNamedItem('data-asset-exgternal-id');
                        element.setAttribute('data-asset-external-id', externalIdOfImportedAsset);
                    }
                }
                // process images
                if (element.nodeName.toLowerCase() === 'img'.toLowerCase()) {
                    var dataImageId_1 = element.attributes.getNamedItem('data-image-id');
                    var dataImageExternalId_2 = element.attributes.getNamedItem('data-image-external-id');
                    if (dataImageId_1) {
                        // get imported asset
                        var asset = prerequisities.assets.find(function (m) { return m.originalItem.id === dataImageId_1.value; });
                        if (!asset) {
                            throw Error("Asset with id '" + dataImageId_1.value + "' could not be found in source data");
                        }
                        element.setAttribute('data-asset-id', asset.importedItem.id);
                        element.attributes.removeNamedItem('data-image-id');
                    }
                    if (dataImageExternalId_2) {
                        // get imported asset
                        var asset = prerequisities.assets.find(function (m) { return m.originalItem.externalId === dataImageExternalId_2.value; });
                        if (!asset) {
                            throw Error("Asset with external id '" + dataImageExternalId_2.value + "' could not be found in source data");
                        }
                        var externalIdOfImportedAsset = asset.importedItem.externalId;
                        if (!externalIdOfImportedAsset) {
                            throw Error("ExternalId of asset is not set");
                        }
                        element.setAttribute('data-asset-external-id', externalIdOfImportedAsset);
                        element.attributes.removeNamedItem('data-image-externa-id');
                    }
                    var allowedAttributes = ['data-asset-id', 'data-asset-external-id'];
                    var assetAttributes = element.getAttributeNames();
                    for (var _a = 0, assetAttributes_2 = assetAttributes; _a < assetAttributes_2.length; _a++) {
                        var assetAttribute = assetAttributes_2[_a];
                        if (!allowedAttributes.includes(assetAttribute)) {
                            element.attributes.removeNamedItem(assetAttribute);
                        }
                    }
                }
                var typeAttribute = element.attributes ? element.attributes.getNamedItem('type') : undefined;
                // process linked items (modular items)
                if (element.attributes && typeAttribute && typeAttribute.value && typeAttribute.value.toLowerCase() === 'application/kenticocloud'.toLowerCase()) {
                    var dataCodenameAttribute_1 = element.attributes.getNamedItem('data-codename');
                    var dataTypeAttribute = element.attributes.getNamedItem('data-type');
                    if (!dataCodenameAttribute_1) {
                        throw Error('Missing data codename attribute. This is likely an error caused by invalid response.');
                    }
                    if (!dataTypeAttribute) {
                        throw Error('Missing data type attribute. This is likely an error caused by invalid response.');
                    }
                    // find linked item
                    var importedLinkedItem = prerequisities.contentItems.find(function (m) { return m.originalItem.codename === dataCodenameAttribute_1.value; });
                    if (!importedLinkedItem) {
                        throw Error("Linked item in rich text field with codename '" + dataCodenameAttribute_1.value + "' could not be found");
                    }
                    // see https://developer.kenticocloud.com/reference#section-rich-text-content-items for syntax details
                    // remove data-codename attribute 
                    element.attributes.removeNamedItem('data-codename');
                    element.attributes.removeNamedItem('data-rel');
                    // add data-id attribute with imported item id
                    element.setAttribute('data-id', importedLinkedItem.importedItem.id);
                }
                if (element.children && element.children.length > 0) {
                    this_1.processRichTextItems(element.children, prerequisities);
                }
            };
            var this_1 = this;
            for (var i = 0; i < htmlCollection.length; i++) {
                _loop_1(i);
            }
        }
    };
    LanguageVariantsImportService.prototype.getRichTextHtmlElement = function (html) {
        var element = document.createElement('p');
        element.innerHTML = html;
        return element;
    };
    LanguageVariantsImportService.prototype.fixInvalidHtmlInRichTextField = function (html) {
        // because sample project contains invalid html
        return html.replace(new RegExp('<br>', 'g'), '');
    };
    LanguageVariantsImportService.prototype.mapElementValue = function (contentType, languageVariant, field, prerequisities) {
        if (field.elementModel.type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["ElementType"].modularContent) {
            var linkedItemCodenames = field.value;
            var newLinkedItems = [];
            var _loop_2 = function (currentLinkedItem) {
                var candidateLinkedItem = prerequisities.contentItems.find(function (m) { return m.originalItem.codename === currentLinkedItem; });
                if (!candidateLinkedItem) {
                    throw Error("Cannot find linked item '" + currentLinkedItem + "'. This was requested by '" + languageVariant.itemCodename + "'");
                }
                newLinkedItems.push({
                    codename: candidateLinkedItem.importedItem.codename
                });
            };
            for (var _i = 0, linkedItemCodenames_1 = linkedItemCodenames; _i < linkedItemCodenames_1.length; _i++) {
                var currentLinkedItem = linkedItemCodenames_1[_i];
                _loop_2(currentLinkedItem);
            }
            return newLinkedItems;
        }
        var value = field.value;
        if (field.elementModel.type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["ElementType"].richText) {
            var richTextValueWithFixedHtml = this.fixInvalidHtmlInRichTextField(field.value);
            var doc = this.getRichTextHtmlElement(richTextValueWithFixedHtml);
            this.processRichTextItems(doc.children, prerequisities);
            return doc.innerHTML;
        }
        if (field.elementModel.type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["ElementType"].taxonomy) {
            var currentTaxonomies = field.value;
            var newTaxonomies = [];
            var _loop_3 = function (currentTaxonomyCodename) {
                var candidateTaxonomy = prerequisities.taxonomies.find(function (m) { return m.originalItem.system.codename === currentTaxonomyCodename; });
                if (!candidateTaxonomy) {
                    throw Error("Cannot find taxonomy with id '" + currentTaxonomyCodename + "'");
                }
                newTaxonomies.push({
                    codename: candidateTaxonomy.importedItem.system.codename
                });
            };
            for (var _a = 0, currentTaxonomies_1 = currentTaxonomies; _a < currentTaxonomies_1.length; _a++) {
                var currentTaxonomyCodename = currentTaxonomies_1[_a];
                _loop_3(currentTaxonomyCodename);
            }
            return newTaxonomies;
        }
        if (field.elementModel.type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["ElementType"].multipleChoice) {
            var currentOptions = field.value;
            var newOptions = [];
            var originalElement = contentType.originalItem.elements.find(function (m) { return m.codename === field.elementModel.codename; });
            if (!originalElement) {
                throw Error("Invalid original element");
            }
            for (var _b = 0, currentOptions_1 = currentOptions; _b < currentOptions_1.length; _b++) {
                var currentOption = currentOptions_1[_b];
                newOptions.push({
                    codename: currentOption.codename
                });
            }
            return newOptions;
        }
        if (field.elementModel.type === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["ElementType"].asset) {
            var currentAssets = field.value;
            var newAssets = [];
            var _loop_4 = function (currentAsset) {
                var candidateAsset = prerequisities.assets.find(function (m) { return m.originalItem.deliveryUrl === currentAsset.url; });
                if (!candidateAsset) {
                    throw Error("Cannot find asset with url '" + currentAsset.url + "'");
                }
                newAssets.push({
                    id: candidateAsset.importedItem.id
                });
            };
            for (var _c = 0, currentAssets_1 = currentAssets; _c < currentAssets_1.length; _c++) {
                var currentAsset = currentAssets_1[_c];
                _loop_4(currentAsset);
            }
            return newAssets;
        }
        return value;
    };
    LanguageVariantsImportService.prototype.getElements = function (contentItem, languageVariant, prerequisities) {
        var contentItemElements = [];
        var candidateContentType = prerequisities.contentTypes.find(function (m) { return m.originalItem.system.codename === contentItem.originalItem.typeCodename; });
        if (!candidateContentType) {
            throw Error("Could not find candidate content type '" + contentItem.originalItem.typeCodename + "'. This type is required by content item '" + languageVariant.itemCodename + "'");
        }
        var originalElements = candidateContentType.originalItem.elements;
        var importedElements = candidateContentType.importedItem.elements;
        var _loop_5 = function (elementData) {
            var originalElement = originalElements.find(function (m) { return m.codename === elementData.elementModel.codename; });
            if (!originalElement) {
                throw Error("Cannot find element '" + elementData.elementModel.codename + "' in original elements");
            }
            var originalElementIndex = originalElements.findIndex(function (m) { return m.codename === elementData.elementModel.codename; });
            if (originalElementIndex === -1) {
                throw Error("Cannot find element with index '" + originalElementIndex + "' in original elements");
            }
            // This is very dangerous because we are mapping elements based on their index
            // and if KC API changes order of elements, this will be broken.
            var importedElement = importedElements[originalElementIndex];
            if (!importedElement) {
                throw Error("Could not find candidate import element for element with codename '" + originalElement.codename + "'");
            }
            contentItemElements.push({
                codename: importedElement.codename,
                value: this_2.mapElementValue(candidateContentType, languageVariant, elementData, prerequisities)
            });
        };
        var this_2 = this;
        for (var _i = 0, _a = languageVariant.elements; _i < _a.length; _i++) {
            var elementData = _a[_i];
            _loop_5(elementData);
        }
        return contentItemElements;
    };
    LanguageVariantsImportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_5__["ProcessingService"]])
    ], LanguageVariantsImportService);
    return LanguageVariantsImportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/services/import/types/taxonomies-import.service.ts":
/*!****************************************************************!*\
  !*** ./src/services/import/types/taxonomies-import.service.ts ***!
  \****************************************************************/
/*! exports provided: TaxonomiesImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxonomiesImportService", function() { return TaxonomiesImportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../processing/processing.service */ "./src/services/processing/processing.service.ts");






var TaxonomiesImportService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TaxonomiesImportService, _super);
    function TaxonomiesImportService(processingService) {
        var _this = _super.call(this) || this;
        _this.processingService = processingService;
        return _this;
    }
    TaxonomiesImportService.prototype.importTaxonomies = function (targetClient, taxonomies, config) {
        var _this = this;
        var obs = [];
        var importedTaxonomies = [];
        taxonomies.forEach(function (taxonomy) {
            obs.push(_this.createTaxonomy(taxonomy, targetClient, config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (importedTaxonomy) {
                importedTaxonomies.push({
                    importedItem: importedTaxonomy,
                    originalItem: taxonomy
                });
            })));
        });
        return _utilities__WEBPACK_IMPORTED_MODULE_3__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return importedTaxonomies;
        }));
    };
    TaxonomiesImportService.prototype.createTaxonomy = function (taxonomy, targetClient, data) {
        var _this = this;
        return targetClient.addTaxonomy()
            .withData({
            name: taxonomy.system.name,
            terms: taxonomy.terms,
        })
            .toObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.cmRequestDelay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.processingService.addProcessedItem({
                data: taxonomy,
                type: 'taxonomy',
                action: 'add',
                name: response.data.codename
            });
            return {
                system: {
                    codename: response.data.codename,
                    id: response.data.id,
                    name: response.data.name
                },
                terms: response.data.terms
            };
        }));
    };
    TaxonomiesImportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_5__["ProcessingService"]])
    ], TaxonomiesImportService);
    return TaxonomiesImportService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: ServicesModule, ImportService, ContentTypesImportService, DeliveryFetchService, CmFetchService, WorkflowService, CleanupService, ExportService, ProcessingService, ContentItemsImportService, TemplatesService, GoogleAnalyticsService, StorageService, ImportDataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.module */ "./src/services/services.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return _services_module__WEBPACK_IMPORTED_MODULE_0__["ServicesModule"]; });

/* harmony import */ var _import_import_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/import.service */ "./src/services/import/import.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportService", function() { return _import_import_service__WEBPACK_IMPORTED_MODULE_1__["ImportService"]; });

/* harmony import */ var _import_types_content_types_import_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/types/content-types-import.service */ "./src/services/import/types/content-types-import.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentTypesImportService", function() { return _import_types_content_types_import_service__WEBPACK_IMPORTED_MODULE_2__["ContentTypesImportService"]; });

/* harmony import */ var _fetch_delivery_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch/delivery-fetch.service */ "./src/services/fetch/delivery-fetch.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryFetchService", function() { return _fetch_delivery_fetch_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryFetchService"]; });

/* harmony import */ var _fetch_cm_fetch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch/cm-fetch.service */ "./src/services/fetch/cm-fetch.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CmFetchService", function() { return _fetch_cm_fetch_service__WEBPACK_IMPORTED_MODULE_4__["CmFetchService"]; });

/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/services/workflow/workflow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_5__["WorkflowService"]; });

/* harmony import */ var _cleanup_cleanup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cleanup/cleanup.service */ "./src/services/cleanup/cleanup.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CleanupService", function() { return _cleanup_cleanup_service__WEBPACK_IMPORTED_MODULE_6__["CleanupService"]; });

/* harmony import */ var _export_export_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./export/export.service */ "./src/services/export/export.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return _export_export_service__WEBPACK_IMPORTED_MODULE_7__["ExportService"]; });

/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./processing/processing.service */ "./src/services/processing/processing.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcessingService", function() { return _processing_processing_service__WEBPACK_IMPORTED_MODULE_8__["ProcessingService"]; });

/* harmony import */ var _import_types_content_items_import_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import/types/content-items-import.service */ "./src/services/import/types/content-items-import.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentItemsImportService", function() { return _import_types_content_items_import_service__WEBPACK_IMPORTED_MODULE_9__["ContentItemsImportService"]; });

/* harmony import */ var _templates_templates_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/templates.service */ "./src/services/templates/templates.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatesService", function() { return _templates_templates_service__WEBPACK_IMPORTED_MODULE_10__["TemplatesService"]; });

/* harmony import */ var _google_google_analytics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./google/google-analytics.service */ "./src/services/google/google-analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return _google_google_analytics_service__WEBPACK_IMPORTED_MODULE_11__["GoogleAnalyticsService"]; });

/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storage/storage.service */ "./src/services/storage/storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _storage_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"]; });

/* harmony import */ var _storage_import_data_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./storage/import-data-storage.service */ "./src/services/storage/import-data-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportDataStorageService", function() { return _storage_import_data_storage_service__WEBPACK_IMPORTED_MODULE_13__["ImportDataStorageService"]; });

















/***/ }),

/***/ "./src/services/processing/processing.service.ts":
/*!*******************************************************!*\
  !*** ./src/services/processing/processing.service.ts ***!
  \*******************************************************/
/*! exports provided: ProcessingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessingService", function() { return ProcessingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-service */ "./src/services/base-service.ts");




var ProcessingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProcessingService, _super);
    function ProcessingService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processedItemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.clearProcessedItemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.processedItemsChanged$ = _this.processedItemsSource.asObservable();
        _this.clearProcessedItemsChanged$ = _this.clearProcessedItemsSource.asObservable();
        return _this;
    }
    ProcessingService.prototype.addProcessedItem = function (item) {
        this.processedItemsSource.next([item]);
    };
    ProcessingService.prototype.addProcessedItems = function (items) {
        this.processedItemsSource.next(items);
    };
    ProcessingService.prototype.clearProcessedItems = function () {
        this.clearProcessedItemsSource.next();
    };
    ProcessingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ProcessingService);
    return ProcessingService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/services/services.module.ts":
/*!*****************************************!*\
  !*** ./src/services/services.module.ts ***!
  \*****************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [],
            providers: [],
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/services/shared/shared.models.ts":
/*!**********************************************!*\
  !*** ./src/services/shared/shared.models.ts ***!
  \**********************************************/
/*! exports provided: ElementMode, ElementType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMode", function() { return ElementMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return ElementType; });
var ElementMode;
(function (ElementMode) {
    ElementMode["single"] = "single";
    ElementMode["multiple"] = "multiple";
})(ElementMode || (ElementMode = {}));
var ElementType;
(function (ElementType) {
    ElementType["text"] = "text";
    ElementType["richText"] = "rich_text";
    ElementType["number"] = "number";
    ElementType["multipleChoice"] = "multiple_choice";
    ElementType["dateTime"] = "date_time";
    ElementType["asset"] = "asset";
    ElementType["modularContent"] = "modular_content";
    ElementType["taxonomy"] = "taxonomy";
    ElementType["urlSlug"] = "url_slug";
    ElementType["guidelines"] = "guidelines";
    ElementType["snippet"] = "snippet";
})(ElementType || (ElementType = {}));


/***/ }),

/***/ "./src/services/storage/import-data-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/services/storage/import-data-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: ImportDataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportDataStorageService", function() { return ImportDataStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./src/services/storage/storage.service.ts");



var ImportDataStorageService = /** @class */ (function () {
    function ImportDataStorageService(storageService) {
        this.storageService = storageService;
        this.storageSource = 'importDataStorageService';
        this.dataName = 'data';
    }
    ImportDataStorageService.prototype.updateImportData = function (data) {
        this.storageService.set(this.storageSource, this.dataName, data);
    };
    ImportDataStorageService.prototype.getImportData = function () {
        return this.storageService.get(this.storageSource, this.dataName);
    };
    ImportDataStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], ImportDataStorageService);
    return ImportDataStorageService;
}());



/***/ }),

/***/ "./src/services/storage/storage.service.ts":
/*!*************************************************!*\
  !*** ./src/services/storage/storage.service.ts ***!
  \*************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage-fallback */ "./node_modules/local-storage-fallback/lib/index.js");
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage_fallback__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var StorageService = /** @class */ (function () {
    function StorageService() {
        this.storageName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].storage.storageName;
        var storageObj = local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default.a.getItem(this.storageName);
        if (!storageObj) {
            // init storage object
            local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default.a.setItem(this.storageName, JSON.stringify({}));
        }
        var storageVal = local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default.a.getItem(this.storageName);
        if (!storageVal) {
            throw Error("Invalid storage value");
        }
        this.storageObj = JSON.parse(storageVal);
    }
    StorageService.prototype.set = function (source, name, value) {
        var existingObj = this.storageObj[source];
        var storeObj;
        if (!existingObj) {
            // create new obj
            storeObj = {};
            this.storageObj[source] = storeObj;
        }
        else {
            storeObj = existingObj;
        }
        // store property value
        storeObj[name] = value;
        this.saveCurrentObj();
    };
    StorageService.prototype.get = function (source, name) {
        var sourceObj = this.storageObj[source];
        if (!sourceObj) {
            return undefined;
        }
        return sourceObj[name];
    };
    StorageService.prototype.removeSource = function (source) {
        delete this.storageObj[source];
    };
    StorageService.prototype.remove = function (source, name) {
        var sourceObj = this.storageObj[source];
        if (!sourceObj) {
            return undefined;
        }
        delete this.storageObj[source][name];
        this.saveCurrentObj();
    };
    StorageService.prototype.saveCurrentObj = function () {
        local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default.a.setItem(this.storageName, JSON.stringify(this.storageObj));
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/services/templates/templates.service.ts":
/*!*****************************************************!*\
  !*** ./src/services/templates/templates.service.ts ***!
  \*****************************************************/
/*! exports provided: TemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesService", function() { return TemplatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-service */ "./src/services/base-service.ts");






var TemplatesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TemplatesService, _super);
    function TemplatesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    TemplatesService.prototype.getTemplates = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].templatesSourceUrl + '?t=' + new Date().valueOf()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    TemplatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TemplatesService);
    return TemplatesService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



/***/ }),

/***/ "./src/services/workflow/workflow.service.ts":
/*!***************************************************!*\
  !*** ./src/services/workflow/workflow.service.ts ***!
  \***************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-service */ "./src/services/base-service.ts");
/* harmony import */ var _processing_processing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../processing/processing.service */ "./src/services/processing/processing.service.ts");






var WorkflowService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WorkflowService, _super);
    function WorkflowService(processingService) {
        var _this = _super.call(this) || this;
        _this.processingService = processingService;
        return _this;
    }
    WorkflowService.prototype.publishContentItems = function (items, client, config) {
        var _this = this;
        var obs = [];
        var _loop_1 = function (item) {
            obs.push(client.publishOrScheduleLanguageVariant()
                .byItemId(item.itemId)
                .byLanguageId(item.languageId)
                .withData(undefined)
                .toObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
                _this.processingService.addProcessedItem({
                    data: item.itemId,
                    type: 'content item',
                    action: 'publish',
                    name: item.itemId + " [" + item.languageId + "]"
                });
            })));
        };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            _loop_1(item);
        }
        return _utilities__WEBPACK_IMPORTED_MODULE_3__["observableHelper"].flatMapObservables(obs, this.cmRequestDelay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return items;
        }));
    };
    WorkflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_processing_processing_service__WEBPACK_IMPORTED_MODULE_5__["ProcessingService"]])
    ], WorkflowService);
    return WorkflowService;
}(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/typography/basic/text.ts":
/*!**************************************!*\
  !*** ./src/typography/basic/text.ts ***!
  \**************************************/
/*! exports provided: Text1Directive, Text2Directive, TextCaptionDirective, TextDisplay1Directive, TextDisplay2Directive, TextDisplay3Directive, TextDisplay4Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text1Directive", function() { return Text1Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text2Directive", function() { return Text2Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCaptionDirective", function() { return TextCaptionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDisplay1Directive", function() { return TextDisplay1Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDisplay2Directive", function() { return TextDisplay2Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDisplay3Directive", function() { return TextDisplay3Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDisplay4Directive", function() { return TextDisplay4Directive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


function addClass(renderer, hostElement, classToAppend) {
    renderer.addClass(hostElement.nativeElement, classToAppend);
}
var Text1Directive = /** @class */ (function () {
    function Text1Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-body-1');
    }
    Text1Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libText1]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], Text1Directive);
    return Text1Directive;
}());

var Text2Directive = /** @class */ (function () {
    function Text2Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-body-2');
    }
    Text2Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libText2]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], Text2Directive);
    return Text2Directive;
}());

var TextCaptionDirective = /** @class */ (function () {
    function TextCaptionDirective(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-caption');
    }
    TextCaptionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTextCaption]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextCaptionDirective);
    return TextCaptionDirective;
}());

var TextDisplay1Directive = /** @class */ (function () {
    function TextDisplay1Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-display-1');
    }
    TextDisplay1Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTextDisplay1]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextDisplay1Directive);
    return TextDisplay1Directive;
}());

var TextDisplay2Directive = /** @class */ (function () {
    function TextDisplay2Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-display-2');
    }
    TextDisplay2Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTextDisplay2]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextDisplay2Directive);
    return TextDisplay2Directive;
}());

var TextDisplay3Directive = /** @class */ (function () {
    function TextDisplay3Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-display-3');
    }
    TextDisplay3Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTextDisplay3]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextDisplay3Directive);
    return TextDisplay3Directive;
}());

var TextDisplay4Directive = /** @class */ (function () {
    function TextDisplay4Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-display-4');
    }
    TextDisplay4Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTextDisplay4]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TextDisplay4Directive);
    return TextDisplay4Directive;
}());



/***/ }),

/***/ "./src/typography/basic/titles.ts":
/*!****************************************!*\
  !*** ./src/typography/basic/titles.ts ***!
  \****************************************/
/*! exports provided: Title1Directive, Title2Directive, Title3Directive, Title4Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title1Directive", function() { return Title1Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title2Directive", function() { return Title2Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title3Directive", function() { return Title3Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title4Directive", function() { return Title4Directive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


function addClass(renderer, el, classToAppend) {
    renderer.addClass(el.nativeElement, classToAppend);
}
var Title1Directive = /** @class */ (function () {
    function Title1Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-headline');
    }
    Title1Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTitle1]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], Title1Directive);
    return Title1Directive;
}());

var Title2Directive = /** @class */ (function () {
    function Title2Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-title');
    }
    Title2Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTitle2]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], Title2Directive);
    return Title2Directive;
}());

var Title3Directive = /** @class */ (function () {
    function Title3Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-subheading-2');
    }
    Title3Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTitle3]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], Title3Directive);
    return Title3Directive;
}());

var Title4Directive = /** @class */ (function () {
    function Title4Directive(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        addClass(this.renderer, this.hostElement, 'mat-subheading-1');
    }
    Title4Directive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[libTitle4]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], Title4Directive);
    return Title4Directive;
}());



/***/ }),

/***/ "./src/typography/index.ts":
/*!*********************************!*\
  !*** ./src/typography/index.ts ***!
  \*********************************/
/*! exports provided: TypographyModule, Text1Directive, Text2Directive, TextCaptionDirective, TextDisplay1Directive, TextDisplay2Directive, TextDisplay3Directive, TextDisplay4Directive, Title1Directive, Title2Directive, Title3Directive, Title4Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typography_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography.module */ "./src/typography/typography.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyModule", function() { return _typography_module__WEBPACK_IMPORTED_MODULE_0__["TypographyModule"]; });

/* harmony import */ var _basic_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/text */ "./src/typography/basic/text.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text1Directive", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["Text1Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text2Directive", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["Text2Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextCaptionDirective", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["TextCaptionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDisplay1Directive", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["TextDisplay1Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDisplay2Directive", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["TextDisplay2Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDisplay3Directive", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["TextDisplay3Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextDisplay4Directive", function() { return _basic_text__WEBPACK_IMPORTED_MODULE_1__["TextDisplay4Directive"]; });

/* harmony import */ var _basic_titles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/titles */ "./src/typography/basic/titles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title1Directive", function() { return _basic_titles__WEBPACK_IMPORTED_MODULE_2__["Title1Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title2Directive", function() { return _basic_titles__WEBPACK_IMPORTED_MODULE_2__["Title2Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title3Directive", function() { return _basic_titles__WEBPACK_IMPORTED_MODULE_2__["Title3Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title4Directive", function() { return _basic_titles__WEBPACK_IMPORTED_MODULE_2__["Title4Directive"]; });






/***/ }),

/***/ "./src/typography/typography.module.ts":
/*!*********************************************!*\
  !*** ./src/typography/typography.module.ts ***!
  \*********************************************/
/*! exports provided: TypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyModule", function() { return TypographyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/text */ "./src/typography/basic/text.ts");
/* harmony import */ var _basic_titles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/titles */ "./src/typography/basic/titles.ts");






var TypographyModule = /** @class */ (function () {
    function TypographyModule() {
    }
    TypographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ],
            declarations: [
                // Titles
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title1Directive"],
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title2Directive"],
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title3Directive"],
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title4Directive"],
                // Text
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["Text1Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["Text2Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextCaptionDirective"],
                // Display
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay1Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay2Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay3Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay4Directive"],
            ],
            exports: [
                // Titles
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title1Directive"],
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title2Directive"],
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title3Directive"],
                _basic_titles__WEBPACK_IMPORTED_MODULE_5__["Title4Directive"],
                // Text
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["Text1Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["Text2Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextCaptionDirective"],
                // Display
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay1Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay2Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay3Directive"],
                _basic_text__WEBPACK_IMPORTED_MODULE_4__["TextDisplay4Directive"],
            ]
        })
    ], TypographyModule);
    return TypographyModule;
}());



/***/ }),

/***/ "./src/utilities/index.ts":
/*!********************************!*\
  !*** ./src/utilities/index.ts ***!
  \********************************/
/*! exports provided: StringHelper, stringHelper, ObservableHelper, observableHelper, ZipHelper, zipHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _string_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string-helper */ "./src/utilities/string-helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringHelper", function() { return _string_helper__WEBPACK_IMPORTED_MODULE_0__["StringHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringHelper", function() { return _string_helper__WEBPACK_IMPORTED_MODULE_0__["stringHelper"]; });

/* harmony import */ var _observable_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable-helper */ "./src/utilities/observable-helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableHelper", function() { return _observable_helper__WEBPACK_IMPORTED_MODULE_1__["ObservableHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observableHelper", function() { return _observable_helper__WEBPACK_IMPORTED_MODULE_1__["observableHelper"]; });

/* harmony import */ var _zip_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zip-helper */ "./src/utilities/zip-helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZipHelper", function() { return _zip_helper__WEBPACK_IMPORTED_MODULE_2__["ZipHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zipHelper", function() { return _zip_helper__WEBPACK_IMPORTED_MODULE_2__["zipHelper"]; });






/***/ }),

/***/ "./src/utilities/observable-helper.ts":
/*!********************************************!*\
  !*** ./src/utilities/observable-helper.ts ***!
  \********************************************/
/*! exports provided: ObservableHelper, observableHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableHelper", function() { return ObservableHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observableHelper", function() { return observableHelper; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var ObservableHelper = /** @class */ (function () {
    function ObservableHelper() {
    }
    /**
     * Returns true if given parameter is an Observable, false otherwise
     * @param value Value to check
     */
    ObservableHelper.prototype.isObservable = function (value) {
        if (value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return true;
        }
        return false;
    };
    /**
    * https://www.learnrxjs.io/operators/combination/zip.html
    * @param observables Observables to zip
    */
    ObservableHelper.prototype.zipObservables = function (observables) {
        if (!observables) {
            throw Error("Given observables are not valid");
        }
        if (!Array.isArray(observables)) {
            throw Error("Given observables are not in array");
        }
        if (observables.length === 0) {
            // return empty/fake observable if there are none observables
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
        }
        if (observables.length === 1) {
            return observables[0];
        }
        var zippedObservable = observables[0];
        for (var i = 1; i < observables.length; i++) {
            var currentObservable = observables[i];
            zippedObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(zippedObservable, currentObservable);
        }
        return zippedObservable;
    };
    ObservableHelper.prototype.flatMapObservables = function (observables, delayMs) {
        if (!observables) {
            throw Error("Given observables are not valid");
        }
        if (!Array.isArray(observables)) {
            throw Error("Given observables are not in array");
        }
        if (observables.length === 0) {
            // return empty/fake observable if there are none observables
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(undefined);
        }
        if (observables.length === 1) {
            return observables[0];
        }
        var flatMappedObs = observables[0];
        var _loop_1 = function (i) {
            var currentObservable = observables[i];
            flatMappedObs = flatMappedObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(delayMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (x) {
                return currentObservable;
            }));
        };
        for (var i = 1; i < observables.length; i++) {
            _loop_1(i);
        }
        return flatMappedObs;
    };
    /**
    * https://www.learnrxjs.io/operators/combination/forkjoin.html
    * @param observables Observables to fork join
    */
    ObservableHelper.prototype.forkJoinObservables = function (observables) {
        if (!observables) {
            throw Error("Given observables are not valid");
        }
        if (!Array.isArray(observables)) {
            throw Error("Given observables are not in array");
        }
        if (observables.length === 0) {
            throw Error("Observables array doesn't contain any observable");
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(observables);
    };
    return ObservableHelper;
}());

var observableHelper = new ObservableHelper();


/***/ }),

/***/ "./src/utilities/string-helper.ts":
/*!****************************************!*\
  !*** ./src/utilities/string-helper.ts ***!
  \****************************************/
/*! exports provided: StringHelper, stringHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringHelper", function() { return StringHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringHelper", function() { return stringHelper; });
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.prototype.extractEverythingBefore = function (text, beforeString) {
        return text.substring(0, text.indexOf(beforeString));
    };
    /**
     * Converts first char of the text to uppercase
     * @param text text
     */
    StringHelper.prototype.toPascalCase = function (text) {
        if (!text) {
            return '';
        }
        return text.toString().charAt(0).toUpperCase() + text.slice(1);
    };
    /**
     * Converts first char of the text to lowercase
     * @param text text
     */
    StringHelper.prototype.toCamelCase = function (text) {
        if (!text) {
            return '';
        }
        return text.toString().charAt(0).toLowerCase() + text.slice(1);
    };
    /**
     * capitalizeTxt('this is a test'); // returns 'This is a test'
     * @param text text to capitalize
     */
    StringHelper.prototype.capitalizeText = function (text) {
        if (!text) {
            return '';
        }
        return text.toString().charAt(0).toUpperCase() + text.slice(1);
    };
    StringHelper.prototype.isValidEmail = function (email) {
        if (!email) {
            return false;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    /**
     * Removes everything in text before given string
     * @param text Text
     * @param beforeString String to match
     */
    StringHelper.prototype.removeEverythingBefore = function (text, beforeString) {
        return text.toString().substring(text.indexOf(beforeString) + 1);
    };
    /**
     * Removes everything after some separator. Includes the separator itself.
     * @param text Text
     * @param separator Everything after this will be removed (included separator itself)
     */
    StringHelper.prototype.removeEverythingAfterIncludingSeparator = function (text, separator) {
        var n = text.toString().indexOf(separator);
        // tslint:disable-next-line:triple-equals
        var result = text.toString().substring(0, n != -1 ? n : text.length);
        return result;
    };
    /**
     * Gets hash from given string
     * @param text text to hash
     */
    StringHelper.prototype.getHash = function (text) {
        var hash = 0, i, chr;
        if (!text) {
            return hash;
        }
        for (i = 0; i < text.length; i++) {
            chr = text.charCodeAt(i);
            // tslint:disable-next-line:no-bitwise
            hash = ((hash << 5) - hash) + chr;
            // tslint:disable-next-line:no-bitwise
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    /**
     * Returns true if text contains the other one
     * @param text text
     * @param contains text to contain
     */
    StringHelper.prototype.contains = function (text, contains) {
        if (!text || !contains) {
            return false;
        }
        return text.indexOf(contains) !== -1;
    };
    /**
   * Returns true if text contains all of the given inputs
   * @param text text
   * @param contains text array
   */
    StringHelper.prototype.containsAll = function (text, containsArr) {
        if (!text || !containsArr || !Array.isArray(containsArr)) {
            return false;
        }
        return containsArr.every(function (m) { return text.toLowerCase().includes(m.toLowerCase()); });
    };
    /**
    * Returns true if text contains one of the given inputs
    * @param text text
    * @param contains text array
    */
    StringHelper.prototype.containsAny = function (text, containsArr) {
        if (!text || !containsArr || !Array.isArray(containsArr)) {
            return false;
        }
        var result = false;
        containsArr.forEach(function (contains) {
            var textContainsResult = text.toLowerCase().indexOf(contains.toLowerCase()) !== -1;
            if (textContainsResult) {
                result = true;
                return;
            }
        });
        return result;
    };
    /**
     * Checks if given value is string
     * @param value Value to check
     */
    StringHelper.prototype.isString = function (value) {
        if (typeof value === 'string' || value instanceof String) {
            return true;
        }
        return false;
    };
    /**
     * Removes HTML tags from text
     * @param text Text
     */
    StringHelper.prototype.stripHtmlTags = function (text) {
        if ((text === null) || (text === '')) {
            return undefined;
        }
        else {
            text = text.toString();
        }
        return text.replace(/<[^>]*>/g, '');
    };
    StringHelper.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise triple-equals
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return StringHelper;
}());

var stringHelper = new StringHelper();


/***/ }),

/***/ "./src/utilities/zip-helper.ts":
/*!*************************************!*\
  !*** ./src/utilities/zip-helper.ts ***!
  \*************************************/
/*! exports provided: ZipHelper, zipHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipHelper", function() { return ZipHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipHelper", function() { return zipHelper; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var ZipHelper = /** @class */ (function () {
    function ZipHelper() {
    }
    ZipHelper.prototype.getFullAssetPath = function (assetId, filename) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].export.filenames.assetsFolder + "/" + assetId.substr(0, 3) + "/" + assetId + "/" + filename;
    };
    ZipHelper.prototype.getZipFileTypes = function () {
        return ['application/zip', 'application/x-zip-compressed'];
    };
    return ZipHelper;
}());

var zipHelper = new ZipHelper();


/***/ }),

/***/ "./src/version.ts":
/*!************************!*\
  !*** ./src/version.ts ***!
  \************************/
/*! exports provided: versionInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionInfo", function() { return versionInfo; });
var versionInfo = {
    version: '0.0.3'
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/Kentico/cloud-template-manager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map