import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare const ExchangeRateConfigurationToken: InjectionToken<ExchangeRateConfiguration>;
export interface ExchangeRateConfiguration {
    headerTitle: string;
}
export declare const DEFAULT_EXCHANGE_RATE_CONFIG: ExchangeRateConfiguration;
export declare class ExchangeRatesJourneyService {
    readonly serviceConfig: ExchangeRateConfiguration;
    constructor(serviceConfig: Partial<ExchangeRateConfiguration> | null);
    static ɵfac: i0.ɵɵFactoryDef<ExchangeRatesJourneyService, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ExchangeRatesJourneyService>;
}
//# sourceMappingURL=exchange-rates-journey.service.d.ts.map