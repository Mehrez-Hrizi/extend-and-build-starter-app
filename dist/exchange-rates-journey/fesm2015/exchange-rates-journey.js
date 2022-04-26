import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { provideRoutes } from '@angular/router';

class ExchangeRatesJourneyService {
    constructor() { }
}
ExchangeRatesJourneyService.ɵfac = function ExchangeRatesJourneyService_Factory(t) { return new (t || ExchangeRatesJourneyService)(); };
ExchangeRatesJourneyService.ɵprov = ɵɵdefineInjectable({ token: ExchangeRatesJourneyService, factory: ExchangeRatesJourneyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExchangeRatesJourneyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ExchangeRatesJourneyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExchangeRatesJourneyComponent.ɵfac = function ExchangeRatesJourneyComponent_Factory(t) { return new (t || ExchangeRatesJourneyComponent)(); };
ExchangeRatesJourneyComponent.ɵcmp = ɵɵdefineComponent({ type: ExchangeRatesJourneyComponent, selectors: [["lib-exchange-rates-journey"]], decls: 2, vars: 0, template: function ExchangeRatesJourneyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " exchange-rates-journey works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ExchangeRatesJourneyComponent, [{
        type: Component,
        args: [{
                selector: 'lib-exchange-rates-journey',
                template: `
    <p>
      exchange-rates-journey works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

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
ExchangeRatesJourneyModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
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
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of exchange-rates-journey
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExchangeRatesJourneyComponent, ExchangeRatesJourneyModule, ExchangeRatesJourneyService };
//# sourceMappingURL=exchange-rates-journey.js.map
