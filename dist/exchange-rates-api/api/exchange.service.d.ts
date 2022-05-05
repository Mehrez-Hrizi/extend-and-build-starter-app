import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyItem } from '../model/models';
import { ExchangeRateItem } from '../model/models';
import { ExchangeRatesConfiguration } from '../configuration';
import * as i0 from "@angular/core";
export interface GetRatesRequestParams {
    /** The currency that we want to convert from. */
    ["source"]: string;
    /** The currency that we want to convert to. */
    ["target"]: string;
    /** The starting date of the list of exchange rates (date only, always starting at 00:00 of that day) */
    ["from"]?: string;
    /** The ending date of the list of exchange rates (date only, always ending at 23:59 of that day) */
    ["to"]?: string;
}
export declare class ExchangeHttpService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: ExchangeRatesConfiguration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string, configuration: ExchangeRatesConfiguration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * Returns all available currencies.
     * Returns all available currencies.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCurrencies(observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
    }): Observable<Array<CurrencyItem>>;
    getCurrencies(observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
    }): Observable<HttpResponse<Array<CurrencyItem>>>;
    getCurrencies(observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
    }): Observable<HttpEvent<Array<CurrencyItem>>>;
    getCurrenciesUrl(): string;
    /**
     * Returns the exchange rates for a particular pair of currencies in a given time period.
     * Returns the exchange rates for a particular pair of currencies in a given time period.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getRates(requestParameters: GetRatesRequestParams, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
    }): Observable<Array<ExchangeRateItem>>;
    getRates(requestParameters: GetRatesRequestParams, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
    }): Observable<HttpResponse<Array<ExchangeRateItem>>>;
    getRates(requestParameters: GetRatesRequestParams, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
    }): Observable<HttpEvent<Array<ExchangeRateItem>>>;
    getRatesUrl(requestParameters: GetRatesRequestParams): string;
    static ɵfac: i0.ɵɵFactoryDef<ExchangeHttpService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<ExchangeHttpService>;
}
//# sourceMappingURL=exchange.service.d.ts.map