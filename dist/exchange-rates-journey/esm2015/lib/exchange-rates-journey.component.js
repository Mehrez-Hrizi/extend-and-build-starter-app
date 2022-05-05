import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./exchange-rates-journey.service";
export class ExchangeRatesJourneyComponent {
    constructor(exchangeRatesJourneyService) {
        this.exchangeRatesJourneyService = exchangeRatesJourneyService;
        this.headerTitle = this.exchangeRatesJourneyService.serviceConfig.headerTitle;
    }
    ngOnInit() {
    }
}
ExchangeRatesJourneyComponent.ɵfac = function ExchangeRatesJourneyComponent_Factory(t) { return new (t || ExchangeRatesJourneyComponent)(i0.ɵɵdirectiveInject(i1.ExchangeRatesJourneyService)); };
ExchangeRatesJourneyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ExchangeRatesJourneyComponent, selectors: [["lib-exchange-rates-journey"]], decls: 2, vars: 1, template: function ExchangeRatesJourneyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.headerTitle, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyComponent, [{
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
    }], function () { return [{ type: i1.ExchangeRatesJourneyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9leGNoYW5nZS1yYXRlcy1qb3VybmV5L3NyYy9saWIvZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBY2xELE1BQU0sT0FBTyw2QkFBNkI7SUFFeEMsWUFBb0IsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFDNUUsZ0JBQVcsR0FBVyxJQUFJLENBQUMsMkJBQTJCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQURELENBQUM7SUFHakYsUUFBUTtJQUNSLENBQUM7OzBHQU5VLDZCQUE2QjtrRUFBN0IsNkJBQTZCO1FBUHRDLDBCQUFJO1FBQ0YsWUFDRjtRQUFBLGlCQUFLOztRQURILGVBQ0Y7UUFERSxnREFDRjs7dUZBS1MsNkJBQTZCO2NBVnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFDUDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4Y2hhbmdlUmF0ZXNKb3VybmV5U2VydmljZSB9IGZyb20gJy4vZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24sIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWV4Y2hhbmdlLXJhdGVzLWpvdXJuZXknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMz5cbiAgICAgIHt7aGVhZGVyVGl0bGV9fVxuICAgIDwvaDM+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2hhbmdlUmF0ZXNKb3VybmV5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4Y2hhbmdlUmF0ZXNKb3VybmV5U2VydmljZTogRXhjaGFuZ2VSYXRlc0pvdXJuZXlTZXJ2aWNlKSB7IH1cbiAgaGVhZGVyVGl0bGU6IHN0cmluZyA9IHRoaXMuZXhjaGFuZ2VSYXRlc0pvdXJuZXlTZXJ2aWNlLnNlcnZpY2VDb25maWcuaGVhZGVyVGl0bGU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19