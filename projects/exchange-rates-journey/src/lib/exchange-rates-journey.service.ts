import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ExchangeHttpService, ExchangeRateItem } from 'exchange-rates-api';
import { Observable, of, from as rxFrom} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


export const ExchangeRateConfigurationToken = new InjectionToken<ExchangeRateConfiguration>('ExchangeRateServiceConfig injection token');

export interface ExchangeRateConfiguration {
  headerTitle: string;
}

export const DEFAULT_EXCHANGE_RATE_CONFIG: ExchangeRateConfiguration = {
  headerTitle: 'Welcome!',
}

export { ExchangeRateItem }

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesJourneyService {

  readonly serviceConfig: ExchangeRateConfiguration;
  constructor(
    private readonly exchangeRateDataService: ExchangeHttpService,
    @Optional() @Inject(ExchangeRateConfigurationToken) serviceConfig: Partial<ExchangeRateConfiguration> | null
  ) {
    this.serviceConfig = {...DEFAULT_EXCHANGE_RATE_CONFIG, ...serviceConfig };
    console.log('Service configuration:', this.serviceConfig);
   }

   getExchangeRates(source: string, target: string, from: string = '', to: string = '') { //<-- CREATE THIS METHOD
    return this.exchangeRateDataService.getRates({ source, target, from, to }).pipe(
      switchMap((response: ExchangeRateItem[]): Observable<ExchangeRateItem> => {
        return response ? rxFrom(response) : of({} as ExchangeRateItem);
      }),
    )
  }
}
