(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('exchange-rates-journey', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['exchange-rates-journey'] = {}, global.ng.core, global.ng.router));
}(this, (function (exports, i0, router) { 'use strict';

    var ExchangeRateConfigurationToken = new i0.InjectionToken('ExchangeRateServiceConfig injection token');
    var DEFAULT_EXCHANGE_RATE_CONFIG = {
        headerTitle: 'Welcome!',
    };
    var ExchangeRatesJourneyService = /** @class */ (function () {
        function ExchangeRatesJourneyService(serviceConfig) {
            this.serviceConfig = Object.assign(Object.assign({}, DEFAULT_EXCHANGE_RATE_CONFIG), serviceConfig);
            console.log('Service configuration:', this.serviceConfig);
        }
        return ExchangeRatesJourneyService;
    }());
    ExchangeRatesJourneyService.ɵfac = function ExchangeRatesJourneyService_Factory(t) { return new (t || ExchangeRatesJourneyService)(i0.ɵɵinject(ExchangeRateConfigurationToken, 8)); };
    ExchangeRatesJourneyService.ɵprov = i0.ɵɵdefineInjectable({ token: ExchangeRatesJourneyService, factory: ExchangeRatesJourneyService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [ExchangeRateConfigurationToken]
                        }] }];
        }, null);
    })();

    var ExchangeRatesJourneyComponent = /** @class */ (function () {
        function ExchangeRatesJourneyComponent(exchangeRatesJourneyService) {
            this.exchangeRatesJourneyService = exchangeRatesJourneyService;
            this.headerTitle = this.exchangeRatesJourneyService.serviceConfig.headerTitle;
        }
        ExchangeRatesJourneyComponent.prototype.ngOnInit = function () {
        };
        return ExchangeRatesJourneyComponent;
    }());
    ExchangeRatesJourneyComponent.ɵfac = function ExchangeRatesJourneyComponent_Factory(t) { return new (t || ExchangeRatesJourneyComponent)(i0.ɵɵdirectiveInject(ExchangeRatesJourneyService)); };
    ExchangeRatesJourneyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExchangeRatesJourneyComponent, selectors: [["lib-exchange-rates-journey"]], decls: 2, vars: 1, template: function ExchangeRatesJourneyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h3");
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", ctx.headerTitle, " ");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-exchange-rates-journey',
                        template: "\n    <h3>\n      {{headerTitle}}\n    </h3>\n  ",
                        styles: []
                    }]
            }], function () { return [{ type: ExchangeRatesJourneyService }]; }, null);
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
    ExchangeRatesJourneyModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            ExchangeRatesJourneyService
        ], imports: [[]] });
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
                        ],
                        providers: [
                            ExchangeRatesJourneyService
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

    exports.DEFAULT_EXCHANGE_RATE_CONFIG = DEFAULT_EXCHANGE_RATE_CONFIG;
    exports.ExchangeRateConfigurationToken = ExchangeRateConfigurationToken;
    exports.ExchangeRatesJourneyComponent = ExchangeRatesJourneyComponent;
    exports.ExchangeRatesJourneyModule = ExchangeRatesJourneyModule;
    exports.ExchangeRatesJourneyService = ExchangeRatesJourneyService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=exchange-rates-journey.umd.js.map
