import { NgModule } from "@angular/core";
import { ExchangeRatesJourneyModule } from "exchange-rates-journey";

@NgModule({
    imports: [ExchangeRatesJourneyModule.forRoot()],
    providers: []
})
export class ExchangeRatesJourneyBundleModule {}