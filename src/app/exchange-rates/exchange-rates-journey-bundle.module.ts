import { NgModule, Provider } from "@angular/core";
import { 
    ExchangeRatesJourneyModule,
    ExchangeRateConfiguration,
    ExchangeRateConfigurationToken 
} from "exchange-rates-journey";

@NgModule({
    imports: [ExchangeRatesJourneyModule.forRoot()],
    providers: [
        {
            provide: ExchangeRateConfigurationToken,
            useValue: <Partial<ExchangeRateConfiguration>>{
                headerTitle: "Exchange Rates History"
              },
        }
    ]
})
export class ExchangeRatesJourneyBundleModule {}