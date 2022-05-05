import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export const ExchangeRateConfigurationToken = new InjectionToken('ExchangeRateServiceConfig injection token');
export const DEFAULT_EXCHANGE_RATE_CONFIG = {
    headerTitle: 'Welcome!',
};
export class ExchangeRatesJourneyService {
    constructor(serviceConfig) {
        this.serviceConfig = Object.assign(Object.assign({}, DEFAULT_EXCHANGE_RATE_CONFIG), serviceConfig);
        console.log('Service configuration:', this.serviceConfig);
    }
}
ExchangeRatesJourneyService.ɵfac = function ExchangeRatesJourneyService_Factory(t) { return new (t || ExchangeRatesJourneyService)(i0.ɵɵinject(ExchangeRateConfigurationToken, 8)); };
ExchangeRatesJourneyService.ɵprov = i0.ɵɵdefineInjectable({ token: ExchangeRatesJourneyService, factory: ExchangeRatesJourneyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyService, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXhjaGFuZ2UtcmF0ZXMtam91cm5leS9zcmMvbGliL2V4Y2hhbmdlLXJhdGVzLWpvdXJuZXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU3RSxNQUFNLENBQUMsTUFBTSw4QkFBOEIsR0FBRyxJQUFJLGNBQWMsQ0FBNEIsMkNBQTJDLENBQUMsQ0FBQztBQU16SSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBOEI7SUFDckUsV0FBVyxFQUFFLFVBQVU7Q0FDeEIsQ0FBQTtBQUtELE1BQU0sT0FBTywyQkFBMkI7SUFHdEMsWUFDc0QsYUFBd0Q7UUFFNUcsSUFBSSxDQUFDLGFBQWEsbUNBQU8sNEJBQTRCLEdBQUssYUFBYSxDQUFFLENBQUM7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7c0dBUlMsMkJBQTJCLGNBSWhCLDhCQUE4QjttRUFKekMsMkJBQTJCLFdBQTNCLDJCQUEyQixtQkFGMUIsTUFBTTt1RkFFUCwyQkFBMkI7Y0FIdkMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFLSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBFeGNoYW5nZVJhdGVDb25maWd1cmF0aW9uVG9rZW4gPSBuZXcgSW5qZWN0aW9uVG9rZW48RXhjaGFuZ2VSYXRlQ29uZmlndXJhdGlvbj4oJ0V4Y2hhbmdlUmF0ZVNlcnZpY2VDb25maWcgaW5qZWN0aW9uIHRva2VuJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhjaGFuZ2VSYXRlQ29uZmlndXJhdGlvbiB7XG4gIGhlYWRlclRpdGxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYQ0hBTkdFX1JBVEVfQ09ORklHOiBFeGNoYW5nZVJhdGVDb25maWd1cmF0aW9uID0ge1xuICBoZWFkZXJUaXRsZTogJ1dlbGNvbWUhJyxcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXhjaGFuZ2VSYXRlc0pvdXJuZXlTZXJ2aWNlIHtcblxuICByZWFkb25seSBzZXJ2aWNlQ29uZmlnOiBFeGNoYW5nZVJhdGVDb25maWd1cmF0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEV4Y2hhbmdlUmF0ZUNvbmZpZ3VyYXRpb25Ub2tlbikgc2VydmljZUNvbmZpZzogUGFydGlhbDxFeGNoYW5nZVJhdGVDb25maWd1cmF0aW9uPiB8IG51bGxcbiAgKSB7XG4gICAgdGhpcy5zZXJ2aWNlQ29uZmlnID0gey4uLkRFRkFVTFRfRVhDSEFOR0VfUkFURV9DT05GSUcsIC4uLnNlcnZpY2VDb25maWcgfTtcbiAgICBjb25zb2xlLmxvZygnU2VydmljZSBjb25maWd1cmF0aW9uOicsIHRoaXMuc2VydmljZUNvbmZpZyk7XG4gICB9XG59XG4iXX0=