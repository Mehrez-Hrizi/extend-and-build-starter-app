import { NgModule } from '@angular/core';
import { 
    AccountsTransactionsJourneyConfiguration,
    AccountsTransactionsJourneyConfigurationToken,
    AccountsTransactionsJourneyModule,
    AccountsTransactionsJourneyComponent,
    AccountsListComponent,
    AccountsManageGuardService 
} from '@backbase/accounts-transactions-journey-ang'

import { Route } from '@angular/router';

import { CustomAccountsManagementWidgetModule } from 'src/app/custom-views/accounts/custom-accounts-management.module';
import { CustomAccountsManageComponent } from 'src/app/custom-views/accounts/custom-accounts-management.component';
 
const customRoutes: Route = {
    path: '',
    component: AccountsTransactionsJourneyComponent,
    children: [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: AccountsListComponent,
        data: { title: 'My Accounts' },
    },
    {
        path: 'manage',
        component: CustomAccountsManageComponent, //<-- NEW CUSTOM VIEW
        canActivate: [AccountsManageGuardService],
    }
    ],
}; 

@NgModule({
    imports: [AccountsTransactionsJourneyModule.forRoot({route:customRoutes}),
    CustomAccountsManagementWidgetModule],
    providers: [{
        provide: AccountsTransactionsJourneyConfigurationToken,
        useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
          showCheckImages: true,
          maskIndicator: true,
          enableManageAccounts: true,
        }},
    ]
})
export class AccountsTransactionsJourneyBundleModule {}