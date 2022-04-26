import { NgModule } from '@angular/core';
import { ExchangeRatesJourneyComponent } from './exchange-rates-journey.component';
import { provideRoutes } from '@angular/router';
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
ExchangeRatesJourneyModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
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
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9leGNoYW5nZS1yYXRlcy1qb3VybmV5L3NyYy9saWIvZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsYUFBYSxFQUF1QixNQUFNLGlCQUFpQixDQUFDOztBQUVyRSxNQUFNLFlBQVksR0FBVTtJQUMxQixJQUFJLEVBQUUsRUFBRTtJQUNSLFNBQVMsRUFBRSw2QkFBNkI7SUFDeEMsUUFBUSxFQUFFO1FBQ1I7WUFDRSxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLFNBQVMsRUFBRSxNQUFNO1NBQ2xCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSw2QkFBNkI7U0FDekM7S0FDRjtDQUNGLENBQUM7QUFZRixNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBaUQsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO1FBQ3JGLE9BQU87WUFDTCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pDLENBQUM7SUFDSixDQUFDOztvR0FOVSwwQkFBMEI7OERBQTFCLDBCQUEwQjtrRUFONUIsRUFDUjt3RkFLVSwwQkFBMEIsbUJBUm5DLDZCQUE2QixhQUs3Qiw2QkFBNkI7dUZBR3BCLDBCQUEwQjtjQVZ0QyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLDZCQUE2QjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLDZCQUE2QjtpQkFDOUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeGNoYW5nZVJhdGVzSm91cm5leUNvbXBvbmVudCB9IGZyb20gJy4vZXhjaGFuZ2UtcmF0ZXMtam91cm5leS5jb21wb25lbnQnO1xuaW1wb3J0IHsgcHJvdmlkZVJvdXRlcywgUm91dGUsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IGRlZmF1bHRSb3V0ZTogUm91dGUgPSB7ICBcbiAgcGF0aDogJycsXG4gIGNvbXBvbmVudDogRXhjaGFuZ2VSYXRlc0pvdXJuZXlDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICByZWRpcmVjdFRvOiAnaGlzdG9yeScsXG4gICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2hpc3RvcnknLFxuICAgICAgY29tcG9uZW50OiBFeGNoYW5nZVJhdGVzSm91cm5leUNvbXBvbmVudFxuICAgIH1cbiAgXVxufTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRXhjaGFuZ2VSYXRlc0pvdXJuZXlDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRXhjaGFuZ2VSYXRlc0pvdXJuZXlDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeGNoYW5nZVJhdGVzSm91cm5leU1vZHVsZSB7IFxuICBzdGF0aWMgZm9yUm9vdChkYXRhOiB7IFtrZXk6IHN0cmluZ106IHVua25vd247IHJvdXRlOiBSb3V0ZSB9ID0geyByb3V0ZTogZGVmYXVsdFJvdXRlIH0pIHsgLy88LS0gQUREIFNUQVRJQyBNRVRIT0RcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV4Y2hhbmdlUmF0ZXNKb3VybmV5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZVJvdXRlcyhbZGF0YS5yb3V0ZV0pXSxcbiAgICB9O1xuICB9XG59XG4iXX0=