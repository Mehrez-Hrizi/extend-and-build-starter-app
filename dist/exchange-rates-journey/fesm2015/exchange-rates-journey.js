import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { provideRoutes } from '@angular/router';

const ExchangeRateConfigurationToken = new InjectionToken('ExchangeRateServiceConfig injection token');
const DEFAULT_EXCHANGE_RATE_CONFIG = {
    headerTitle: 'Welcome!',
};
class ExchangeRatesJourneyService {
    constructor(serviceConfig) {
        this.serviceConfig = Object.assign(Object.assign({}, DEFAULT_EXCHANGE_RATE_CONFIG), serviceConfig);
        console.log('Service configuration:', this.serviceConfig);
    }
}
ExchangeRatesJourneyService.ɵfac = function ExchangeRatesJourneyService_Factory(t) { return new (t || ExchangeRatesJourneyService)(ɵɵinject(ExchangeRateConfigurationToken, 8)); };
ExchangeRatesJourneyService.ɵprov = ɵɵdefineInjectable({ token: ExchangeRatesJourneyService, factory: ExchangeRatesJourneyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExchangeRatesJourneyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ExchangeRateConfigurationToken]
            }] }]; }, null); })();

class ExchangeRatesJourneyComponent {
    constructor(exchangeRatesJourneyService) {
        this.exchangeRatesJourneyService = exchangeRatesJourneyService;
        this.headerTitle = this.exchangeRatesJourneyService.serviceConfig.headerTitle;
    }
    ngOnInit() {
    }
}
ExchangeRatesJourneyComponent.ɵfac = function ExchangeRatesJourneyComponent_Factory(t) { return new (t || ExchangeRatesJourneyComponent)(ɵɵdirectiveInject(ExchangeRatesJourneyService)); };
ExchangeRatesJourneyComponent.ɵcmp = ɵɵdefineComponent({ type: ExchangeRatesJourneyComponent, selectors: [["lib-exchange-rates-journey"]], decls: 2, vars: 1, template: function ExchangeRatesJourneyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h3");
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.headerTitle, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExchangeRatesJourneyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exchange-rates-journey',
                template: `
    <h3>
      {{headerTitle}}
    </h3>
  `,
                styles: []
            }]
    }], function () { return [{ type: ExchangeRatesJourneyService }]; }, null); })();

const defaultRoute = {
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
class ExchangeRatesJourneyModule {
    static forRoot(data = { route: defaultRoute }) {
        return {
            ngModule: ExchangeRatesJourneyModule,
            providers: [provideRoutes([data.route])],
        };
    }
}
ExchangeRatesJourneyModule.ɵfac = function ExchangeRatesJourneyModule_Factory(t) { return new (t || ExchangeRatesJourneyModule)(); };
ExchangeRatesJourneyModule.ɵmod = ɵɵdefineNgModule({ type: ExchangeRatesJourneyModule });
ExchangeRatesJourneyModule.ɵinj = ɵɵdefineInjector({ providers: [
        ExchangeRatesJourneyService
    ], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ExchangeRatesJourneyModule, { declarations: [ExchangeRatesJourneyComponent], exports: [ExchangeRatesJourneyComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExchangeRatesJourneyModule, [{
        type: NgModule,
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
    }], null, null); })();

/*
 * Public API Surface of exchange-rates-journey
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_EXCHANGE_RATE_CONFIG, ExchangeRateConfigurationToken, ExchangeRatesJourneyComponent, ExchangeRatesJourneyModule, ExchangeRatesJourneyService };
//# sourceMappingURL=exchange-rates-journey.js.map
