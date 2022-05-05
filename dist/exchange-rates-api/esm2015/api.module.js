import { NgModule, SkipSelf, Optional } from '@angular/core';
import { ExchangeRatesConfiguration, CONFIG_TOKEN } from './configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@backbase/foundation-ang/data-http";
import * as i3 from "./configuration";
export class ExchangeRatesApiModule {
    constructor(parentModule, http, dataModulesManager, config) {
        if (parentModule) {
            throw new Error('ExchangeRatesApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
        if (dataModulesManager) {
            dataModulesManager.setModuleConfig(CONFIG_TOKEN, {
                apiRoot: '',
                servicePath: config.basePath || '',
                headers: {},
            });
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ExchangeRatesApiModule,
            providers: [{ provide: ExchangeRatesConfiguration, useFactory: configurationFactory }]
        };
    }
}
ExchangeRatesApiModule.ɵfac = function ExchangeRatesApiModule_Factory(t) { return new (t || ExchangeRatesApiModule)(i0.ɵɵinject(ExchangeRatesApiModule, 12), i0.ɵɵinject(i1.HttpClient, 8), i0.ɵɵinject(i2.DataModulesManager, 8), i0.ɵɵinject(i3.ExchangeRatesConfiguration)); };
ExchangeRatesApiModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExchangeRatesApiModule });
ExchangeRatesApiModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesApiModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: []
            }]
    }], function () { return [{ type: ExchangeRatesApiModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: i1.HttpClient, decorators: [{
                type: Optional
            }] }, { type: i2.DataModulesManager, decorators: [{
                type: Optional
            }] }, { type: i3.ExchangeRatesConfiguration }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL2V4Y2hhbmdlLXJhdGVzLWFwaS9hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQVczRSxNQUFNLE9BQU8sc0JBQXNCO0lBUS9CLFlBQXFDLFlBQW9DLEVBQ2hELElBQWdCLEVBQ2hCLGtCQUE2QyxFQUN6RCxNQUFrQztRQUczQyxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQztTQUNwRztRQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRDtnQkFDL0UsMERBQTBELENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksa0JBQWtCLEVBQUU7WUFDcEIsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTtnQkFDN0MsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRTtnQkFDbEMsT0FBTyxFQUFFLEVBQUU7YUFDZCxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUE1Qk0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBc0Q7UUFDeEUsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLENBQUU7U0FDM0YsQ0FBQztJQUNOLENBQUM7OzRGQU5RLHNCQUFzQixjQVFvQixzQkFBc0I7MERBUmhFLHNCQUFzQjsrREFGbkIsRUFBRSxZQUhGLEVBQUU7dUZBS0wsc0JBQXNCO2NBTmxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQU8sRUFBRTtnQkFDaEIsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBTyxFQUFFO2dCQUNoQixTQUFTLEVBQUssRUFBRTthQUNqQjtzQ0FTc0Qsc0JBQXNCO3NCQUEzRCxRQUFROztzQkFBSSxRQUFROztzQkFDcEIsUUFBUTs7c0JBQ1IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4Y2hhbmdlUmF0ZXNDb25maWd1cmF0aW9uLCBDT05GSUdfVE9LRU4gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRGF0YU1vZHVsZXNNYW5hZ2VyIH0gZnJvbSBcIkBiYWNrYmFzZS9mb3VuZGF0aW9uLWFuZy9kYXRhLWh0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogICAgICBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogICAgICBbXSxcbiAgcHJvdmlkZXJzOiAgICBbXVxufSlcbmV4cG9ydCBjbGFzcyBFeGNoYW5nZVJhdGVzQXBpTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IEV4Y2hhbmdlUmF0ZXNDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFeGNoYW5nZVJhdGVzQXBpTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogRXhjaGFuZ2VSYXRlc0FwaU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IEV4Y2hhbmdlUmF0ZXNDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9IF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBFeGNoYW5nZVJhdGVzQXBpTW9kdWxlLFxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBkYXRhTW9kdWxlc01hbmFnZXI6IERhdGFNb2R1bGVzTWFuYWdlciB8IG51bGwsXG4gICAgICAgICAgICAgICAgIGNvbmZpZzogRXhjaGFuZ2VSYXRlc0NvbmZpZ3VyYXRpb24sXG5cbiAgICAgICAgKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXhjaGFuZ2VSYXRlc0FwaU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGluIHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWh0dHApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBIdHRwQ2xpZW50TW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISBcXG4nICtcbiAgICAgICAgICAgICdTZWUgYWxzbyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDU3NScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFNb2R1bGVzTWFuYWdlcikge1xuICAgICAgICAgICAgZGF0YU1vZHVsZXNNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyhDT05GSUdfVE9LRU4sIHtcbiAgICAgICAgICAgICAgICBhcGlSb290OiAnJyxcbiAgICAgICAgICAgICAgICBzZXJ2aWNlUGF0aDogY29uZmlnLmJhc2VQYXRoIHx8ICcnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=