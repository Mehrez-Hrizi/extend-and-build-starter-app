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
    path: '**',
    redirectTo: 'accounts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
