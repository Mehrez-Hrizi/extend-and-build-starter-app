import { ModuleWithProviders } from '@angular/core';
import { ExchangeRatesConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { DataModulesManager } from "@backbase/foundation-ang/data-http";
import * as i0 from "@angular/core";
export declare class ExchangeRatesApiModule {
    static forRoot(configurationFactory: () => ExchangeRatesConfiguration): ModuleWithProviders<ExchangeRatesApiModule>;
    constructor(parentModule: ExchangeRatesApiModule, http: HttpClient, dataModulesManager: DataModulesManager | null, config: ExchangeRatesConfiguration);
    static ɵfac: i0.ɵɵFactoryDef<ExchangeRatesApiModule, [{ optional: true; skipSelf: true; }, { optional: true; }, { optional: true; }, null]>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<ExchangeRatesApiModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDef<ExchangeRatesApiModule>;
}
//# sourceMappingURL=api.module.d.ts.map