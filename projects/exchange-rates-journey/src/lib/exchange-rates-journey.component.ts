import { Component, OnInit } from '@angular/core';
import { ExchangeRatesJourneyService } from './exchange-rates-journey.service';
import { Observable, of, Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'lib-exchange-rates-journey',
  template: `
    <h3>
      {{headerTitle}}
    </h3>
  `,
  styles: [
  ]
})
export class ExchangeRatesJourneyComponent implements OnInit {

  constructor(private exchangeRatesJourneyService: ExchangeRatesJourneyService) { }
  headerTitle: string = this.exchangeRatesJourneyService.serviceConfig.headerTitle;

  ngOnInit(): void {
  }

}
