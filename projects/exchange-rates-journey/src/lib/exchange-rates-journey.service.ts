import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';

export const ExchangeRateConfigurationToken = new InjectionToken<ExchangeRateConfiguration>('ExchangeRateServiceConfig injection token');

export interface ExchangeRateConfiguration {
  headerTitle: string;
}

export const DEFAULT_EXCHANGE_RATE_CONFIG: ExchangeRateConfiguration = {
  headerTitle: 'Welcome!',
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesJourneyService {

  readonly serviceConfig: ExchangeRateConfiguration;
  constructor(
    @Optional() @Inject(ExchangeRateConfigurationToken) serviceConfig: Partial<ExchangeRateConfiguration> | null
  ) {
    this.serviceConfig = {...DEFAULT_EXCHANGE_RATE_CONFIG, ...serviceConfig };
    console.log('Service configuration:', this.serviceConfig);
   }
}
