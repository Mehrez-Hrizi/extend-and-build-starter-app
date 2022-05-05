import { NgModule } from '@angular/core';
import { ExchangeRatesJourneyComponent } from './exchange-rates-journey.component';
import { provideRoutes } from '@angular/router';
import { ExchangeRatesJourneyService } from './exchange-rates-journey.service';
import * as i0 from "@angular/core";
const defaultRoute = {
    path: '',
    component: ExchangeRatesJourneyComponent,
    children: [
        {
            path: '',
            redirectTo: 'history',
            pathMatch: 'full'
        },
        {
            path: 'history',
            component: ExchangeRatesJourneyComponent
        }
    ]
};
export class ExchangeRatesJourneyModule {
    static forRoot(data = { route: defaultRoute }) {
        return {
            ngModule: ExchangeRatesJourneyModule,
            providers: [provideRoutes([data.route])],
        };
    }
}
ExchangeRatesJourneyModule.ɵfac = function ExchangeRatesJourneyModule_Factory(t) { return new (t || ExchangeRatesJourneyModule)(); };
ExchangeRatesJourneyModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExchangeRatesJourneyModule });
ExchangeRatesJourneyModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        ExchangeRatesJourneyService
    ], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExchangeRatesJourneyModule, { declarations: [ExchangeRatesJourneyComponent], exports: [ExchangeRatesJourneyComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesJourneyModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ExchangeRatesJourneyComponent
                ],
                imports: [],
                exports: [
                    ExchangeRatesJourneyComponent
                ],
                providers: [
                    ExchangeRatesJourneyService
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9leGNoYW5nZS1yYXRlcy1qb3VybmV5L3NyYy9saWIvZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUF1QixNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUUvRSxNQUFNLFlBQVksR0FBVTtJQUMxQixJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSw2QkFBNkI7SUFDeEMsUUFBUSxFQUFFO1FBQ1I7WUFDRSxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFNBQVMsRUFBRSxNQUFNO1NBQ2xCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSw2QkFBNkI7U0FDekM7S0FDRjtDQUNGLENBQUM7QUFlRixNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBaUQsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO1FBQ3JGLE9BQU87WUFDTCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pDLENBQUM7SUFDSixDQUFDOztvR0FOVSwwQkFBMEI7OERBQTFCLDBCQUEwQjttRUFKMUI7UUFDVCwyQkFBMkI7S0FDNUIsWUFQUSxFQUNSO3dGQVFVLDBCQUEwQixtQkFYbkMsNkJBQTZCLGFBSzdCLDZCQUE2Qjt1RkFNcEIsMEJBQTBCO2NBYnRDLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osNkJBQTZCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUUsRUFDUjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsNkJBQTZCO2lCQUM5QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsMkJBQTJCO2lCQUM1QjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4Y2hhbmdlUmF0ZXNKb3VybmV5Q29tcG9uZW50IH0gZnJvbSAnLi9leGNoYW5nZS1yYXRlcy1qb3VybmV5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBwcm92aWRlUm91dGVzLCBSb3V0ZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEV4Y2hhbmdlUmF0ZXNKb3VybmV5U2VydmljZSB9IGZyb20gJy4vZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5zZXJ2aWNlJztcblxuY29uc3QgZGVmYXVsdFJvdXRlOiBSb3V0ZSA9IHsgIFxuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBFeGNoYW5nZVJhdGVzSm91cm5leUNvbXBvbmVudCxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIHJlZGlyZWN0VG86ICdoaXN0b3J5JyxcbiAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaGlzdG9yeScsXG4gICAgICBjb21wb25lbnQ6IEV4Y2hhbmdlUmF0ZXNKb3VybmV5Q29tcG9uZW50XG4gICAgfVxuICBdXG59O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFeGNoYW5nZVJhdGVzSm91cm5leUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeGNoYW5nZVJhdGVzSm91cm5leUNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFeGNoYW5nZVJhdGVzSm91cm5leVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeGNoYW5nZVJhdGVzSm91cm5leU1vZHVsZSB7IFxuICBzdGF0aWMgZm9yUm9vdChkYXRhOiB7IFtrZXk6IHN0cmluZ106IHVua25vd247IHJvdXRlOiBSb3V0ZSB9ID0geyByb3V0ZTogZGVmYXVsdFJvdXRlIH0pIHsgLy88LS0gQUREIFNUQVRJQyBNRVRIT0RcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV4Y2hhbmdlUmF0ZXNKb3VybmV5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZVJvdXRlcyhbZGF0YS5yb3V0ZV0pXSxcbiAgICB9O1xuICB9XG59XG4iXX0=