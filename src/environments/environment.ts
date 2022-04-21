// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Provider } from '@angular/core';

import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';
import { TransactionClientHttpServiceMocksProvider } from '@backbase/data-ang/transactions';
import { ProductSummaryHttpServiceMocksProvider} from '@backbase/data-ang/arrangements'

export const mockProviders = [
    createMocksInterceptor(),
    ProductSummaryHttpServiceMocksProvider,
    TransactionClientHttpServiceMocksProvider
];

export const environment = {
  production: false,
  mockProviders,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
