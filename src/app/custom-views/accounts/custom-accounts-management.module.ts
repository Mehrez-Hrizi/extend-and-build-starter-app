import { NgModule } from '@angular/core';
import { CustomAccountsManageComponent } from './custom-accounts-management.component';
import { ProductSummaryManageAccountsWidgetModule } from '@backbase/retail-ang/product-summary';

@NgModule({
declarations: [CustomAccountsManageComponent],
imports: [
    ProductSummaryManageAccountsWidgetModule
],
})
export class CustomAccountsManagementWidgetModule { }