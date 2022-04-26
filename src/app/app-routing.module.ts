import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () =>
      import('../bundles/accounts-transactions-journey-bundle.module').then(
        (m) => m.AccountsTransactionsJourneyBundleModule,
      )
  },
  {
    path: 'rates',
    loadChildren: () => 
    import('./exchange-rates/exchange-rates-journey-bundle.module').then(
      (m) => m.ExchangeRatesJourneyBundleModule
    )
  },
  {
    path: '**',
    redirectTo: 'accounts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
