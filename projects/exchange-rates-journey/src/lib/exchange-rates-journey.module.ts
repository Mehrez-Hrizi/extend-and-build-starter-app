import { NgModule } from '@angular/core';
import { ExchangeRatesJourneyComponent } from './exchange-rates-journey.component';
import { provideRoutes, Route, RouterModule } from '@angular/router';
import { ExchangeRatesJourneyService } from './exchange-rates-journey.service';
import { CommonModule } from '@angular/common';
import { TableModule } from '@backbase/ui-ang';

const defaultRoute: Route = {  
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

@NgModule({
  declarations: [
    ExchangeRatesJourneyComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    ExchangeRatesJourneyComponent
  ],
  providers: [
    ExchangeRatesJourneyService
  ]
})
export class ExchangeRatesJourneyModule { 
  static forRoot(data: { [key: string]: unknown; route: Route } = { route: defaultRoute }) { //<-- ADD STATIC METHOD
    return {
      ngModule: ExchangeRatesJourneyModule,
      providers: [provideRoutes([data.route])],
    };
  }
}
