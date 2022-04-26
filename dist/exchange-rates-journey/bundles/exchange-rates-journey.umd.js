(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('exchange-rates-journey', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['exchange-rates-journey'] = {}, global.ng.core, global.ng.router));
}(this, (function (exports, i0, router) { 'use strict';

    var ExchangeRatesJourneyService = /** @class */ (function () {
        function ExchangeRatesJourneyService() {
        }
        return ExchangeRatesJourneyService;
    }());
    ExchangeRatesJourneyService.ɵfac = function ExchangeRatesJourneyService_Factory(t) { return new (t || ExchangeRatesJourneyService)(); };
    ExchangeRatesJourneyService.ɵprov = i0.ɵɵdefineInjectable({ token: ExchangeRatesJourneyService, factory: ExchangeRatesJourneyService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ExchangeRatesJourneyComponent = /** @class */ (function () {
        function ExchangeRatesJourneyComponent() {
        }
        ExchangeRatesJourneyComponent.prototype.ngOnInit = function () {
        };
        return ExchangeRatesJourneyComponent;
    }());
    ExchangeRatesJourneyComponent.ɵfac = function ExchangeRatesJourneyComponent_Factory(t) { return new (t || ExchangeRatesJourneyComponent)(); };
    ExchangeRatesJourneyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExchangeRatesJourneyComponent, selectors: [["lib-exchange-rates-journey"]], decls: 2, vars: 0, template: function ExchangeRatesJourneyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " exchange-rates-journey works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-exchange-rates-journey',
                        template: "\n    <p>\n      exchange-rates-journey works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var defaultRoute = {
        path: '',
        component: ExchangeRatesJourneyComponent,
        children: [
            {
                path: '',
                redirectTo: 'history',
                pathMatch: 'full'
            },
            {
                path: 'history',
                component: ExchangeRatesJourneyComponent
            }
        ]
    };
    var ExchangeRatesJourneyModule = /** @class */ (function () {
        function ExchangeRatesJourneyModule() {
        }
        ExchangeRatesJourneyModule.forRoot = function (data) {
            if (data === void 0) { data = { route: defaultRoute }; }
            return {
                ngModule: ExchangeRatesJourneyModule,
                providers: [router.provideRoutes([data.route])],
            };
        };
        return ExchangeRatesJourneyModule;
    }());
    ExchangeRatesJourneyModule.ɵfac = function ExchangeRatesJourneyModule_Factory(t) { return new (t || ExchangeRatesJourneyModule)(); };
    ExchangeRatesJourneyModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExchangeRatesJourneyModule });
    ExchangeRatesJourneyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExchangeRatesJourneyModule, { declarations: [ExchangeRatesJourneyComponent], exports: [ExchangeRatesJourneyComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ExchangeRatesJourneyComponent
                        ],
                        imports: [],
                        exports: [
                            ExchangeRatesJourneyComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of exchange-rates-journey
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ExchangeRatesJourneyComponent = ExchangeRatesJourneyComponent;
    exports.ExchangeRatesJourneyModule = ExchangeRatesJourneyModule;
    exports.ExchangeRatesJourneyService = ExchangeRatesJourneyService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=exchange-rates-journey.umd.js.map
