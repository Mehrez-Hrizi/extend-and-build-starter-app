import { NgModule } from '@angular/core';
import { 
    AccountsTransactionsJourneyConfiguration,
    AccountsTransactionsJourneyConfigurationToken,
    AccountsTransactionsJourneyModule 
} from '@backbase/accounts-transactions-journey-ang'
 
@NgModule({
    imports: [AccountsTransactionsJourneyModule.forRoot()],
    providers: [{
        provide: AccountsTransactionsJourneyConfigurationToken,
        useValue: <Partial<AccountsTransactionsJourneyConfiguration>>{
          showCheckImages: true,
          maskIndicator: true,
          enableManageAccounts: false,
        }},
    ]
})
export class AccountsTransactionsJourneyBundleModule {}