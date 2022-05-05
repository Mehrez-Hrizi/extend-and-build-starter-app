(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@backbase/foundation-ang/data-http')) :
    typeof define === 'function' && define.amd ? define('@backbase/exchange-rates-http-ang', ['exports', '@angular/core', '@angular/common/http', '@backbase/foundation-ang/data-http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.backbase = global.backbase || {}, global.backbase['exchange-rates-http-ang'] = {}), global.ng.core, global.ng.common.http, global.i2));
}(this, (function (exports, i0, i1, i2) { 'use strict';

    var EXCHANGE_RATES_BASE_PATH = new i0.InjectionToken('EXCHANGE_RATES_BASE_PATH');
    var COLLECTION_FORMATS = {
        'csv': ',',
        'tsv': '   ',
        'ssv': ' ',
        'pipes': '|'
    };

    var ExchangeRatesConfiguration = /** @class */ (function () {
        function ExchangeRatesConfiguration(configurationParameters) {
            if (configurationParameters === void 0) { configurationParameters = {}; }
            this.apiKeys = configurationParameters.apiKeys;
            this.username = configurationParameters.username;
            this.password = configurationParameters.password;
            this.accessToken = configurationParameters.accessToken;
            this.basePath = configurationParameters.basePath;
            this.withCredentials = configurationParameters.withCredentials;
            this.encoder = configurationParameters.encoder;
            if (configurationParameters.credentials) {
                this.credentials = configurationParameters.credentials;
            }
            else {
                this.credentials = {};
            }
        }
        /**
         * Select the correct content-type to use for a request.
         * Uses {@link ExchangeRatesConfiguration#isJsonMime} to determine the correct content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param contentTypes - the array of content types that are available for selection
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        ExchangeRatesConfiguration.prototype.selectHeaderContentType = function (contentTypes) {
            var _this = this;
            if (contentTypes.length === 0) {
                return undefined;
            }
            var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return contentTypes[0];
            }
            return type;
        };
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link ExchangeRatesConfiguration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */
        ExchangeRatesConfiguration.prototype.selectHeaderAccept = function (accepts) {
            var _this = this;
            if (accepts.length === 0) {
                return undefined;
            }
            var type = accepts.find(function (x) { return _this.isJsonMime(x); });
            if (type === undefined) {
                return accepts[0];
            }
            return type;
        };
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */
        ExchangeRatesConfiguration.prototype.isJsonMime = function (mime) {
            var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        };
        ExchangeRatesConfiguration.prototype.lookupCredential = function (key) {
            var value = this.credentials[key];
            return typeof value === 'function'
                ? value()
                : value;
        };
        return ExchangeRatesConfiguration;
    }());
    var CONFIG_TOKEN = new i0.InjectionToken('api-data-module ExchangeRatesConfiguration');

    var ExchangeRatesApiModule = /** @class */ (function () {
        function ExchangeRatesApiModule(parentModule, http, dataModulesManager, config) {
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
        ExchangeRatesApiModule.forRoot = function (configurationFactory) {
            return {
                ngModule: ExchangeRatesApiModule,
                providers: [{ provide: ExchangeRatesConfiguration, useFactory: configurationFactory }]
            };
        };
        return ExchangeRatesApiModule;
    }());
    ExchangeRatesApiModule.ɵfac = function ExchangeRatesApiModule_Factory(t) { return new (t || ExchangeRatesApiModule)(i0.ɵɵinject(ExchangeRatesApiModule, 12), i0.ɵɵinject(i1.HttpClient, 8), i0.ɵɵinject(i2.DataModulesManager, 8), i0.ɵɵinject(ExchangeRatesConfiguration)); };
    ExchangeRatesApiModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExchangeRatesApiModule });
    ExchangeRatesApiModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeRatesApiModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        exports: [],
                        providers: []
                    }]
            }], function () {
            return [{ type: ExchangeRatesApiModule, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.SkipSelf
                        }] }, { type: i1.HttpClient, decorators: [{
                            type: i0.Optional
                        }] }, { type: i2.DataModulesManager, decorators: [{
                            type: i0.Optional
                        }] }, { type: ExchangeRatesConfiguration }];
        }, null);
    })();

    /**
     * Custom HttpParameterCodec
     * Workaround for https://github.com/angular/angular/issues/18261
     */
    var CustomHttpParameterCodec = /** @class */ (function () {
        function CustomHttpParameterCodec() {
        }
        CustomHttpParameterCodec.prototype.encodeKey = function (k) {
            return encodeURIComponent(k);
        };
        CustomHttpParameterCodec.prototype.encodeValue = function (v) {
            return encodeURIComponent(v);
        };
        CustomHttpParameterCodec.prototype.decodeKey = function (k) {
            return decodeURIComponent(k);
        };
        CustomHttpParameterCodec.prototype.decodeValue = function (v) {
            return decodeURIComponent(v);
        };
        return CustomHttpParameterCodec;
    }());

    /**
     * Example Service API Spec
     * No description available
     *
     * The version of the OpenAPI document: v1
     *
     *
     * NOTE: This class is auto generated by OpenAPI Generator (https://github.com/Backbase/backbase-openapi-tools).
     * https://github.com/Backbase/backbase-openapi-tools
     * Do not edit the class manually.
     */
    var ExchangeHttpService = /** @class */ (function () {
        function ExchangeHttpService(httpClient, basePath, configuration) {
            this.httpClient = httpClient;
            this.basePath = '/serviceName';
            this.defaultHeaders = new i1.HttpHeaders();
            this.configuration = new ExchangeRatesConfiguration();
            if (configuration) {
                this.configuration = configuration;
            }
            if (typeof this.configuration.basePath !== 'string') {
                if (typeof basePath !== 'string') {
                    basePath = this.basePath;
                }
                this.configuration.basePath = basePath;
            }
            this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
        }
        ExchangeHttpService.prototype.addToHttpParams = function (httpParams, value, key) {
            if (typeof value === "object" && value instanceof Date === false) {
                httpParams = this.addToHttpParamsRecursive(httpParams, value);
            }
            else {
                httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
            }
            return httpParams;
        };
        ExchangeHttpService.prototype.addToHttpParamsRecursive = function (httpParams, value, key) {
            var _this = this;
            if (value == null) {
                return httpParams;
            }
            if (typeof value === "object") {
                if (Array.isArray(value)) {
                    value.forEach(function (elem) { return httpParams = _this.addToHttpParamsRecursive(httpParams, elem, key); });
                }
                else if (value instanceof Date) {
                    if (key != null) {
                        httpParams = httpParams.append(key, value.toISOString().substr(0, 10));
                    }
                    else {
                        throw Error("key may not be null if value is Date");
                    }
                }
                else {
                    Object.keys(value).forEach(function (k) { return httpParams = _this.addToHttpParamsRecursive(httpParams, value[k], key != null ? key + "." + k : k); });
                }
            }
            else if (key != null) {
                httpParams = httpParams.append(key, value);
            }
            else {
                throw Error("key may not be null if value is not object or array");
            }
            return httpParams;
        };
        ExchangeHttpService.prototype.getCurrencies = function (observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/v1/exchange/currencies", {
                responseType: responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ExchangeHttpService.prototype.getCurrenciesUrl = function () {
            return this.configuration.basePath + "/v1/exchange/currencies";
        };
        ExchangeHttpService.prototype.getRates = function (requestParameters, observe, reportProgress, options) {
            if (observe === void 0) { observe = 'body'; }
            if (reportProgress === void 0) { reportProgress = false; }
            var _source = requestParameters["source"];
            if (_source === null || _source === undefined) {
                throw new Error('Required parameter source was null or undefined when calling getRates.');
            }
            var _target = requestParameters["target"];
            if (_target === null || _target === undefined) {
                throw new Error('Required parameter target was null or undefined when calling getRates.');
            }
            var _from = requestParameters["from"];
            var _to = requestParameters["to"];
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (_source !== undefined && _source !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _source, 'source');
            }
            if (_target !== undefined && _target !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _target, 'target');
            }
            if (_from !== undefined && _from !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _from, 'from');
            }
            if (_to !== undefined && _to !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _to, 'to');
            }
            var headers = this.defaultHeaders;
            var httpHeaderAcceptSelected = options && options.httpHeaderAccept;
            if (httpHeaderAcceptSelected === undefined) {
                // to determine the Accept header
                var httpHeaderAccepts = [
                    'application/json'
                ];
                httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
            }
            if (httpHeaderAcceptSelected !== undefined) {
                headers = headers.set('Accept', httpHeaderAcceptSelected);
            }
            var responseType = 'json';
            if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
                responseType = 'text';
            }
            return this.httpClient.get(this.configuration.basePath + "/v1/exchange/rates", {
                params: queryParameters,
                responseType: responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            });
        };
        ExchangeHttpService.prototype.getRatesUrl = function (requestParameters) {
            var _source = requestParameters["source"];
            if (_source === null || _source === undefined) {
                throw new Error('Required parameter source was null or undefined when calling getRates.');
            }
            var _target = requestParameters["target"];
            if (_target === null || _target === undefined) {
                throw new Error('Required parameter target was null or undefined when calling getRates.');
            }
            var _from = requestParameters["from"];
            var _to = requestParameters["to"];
            var queryParameters = new i1.HttpParams({ encoder: this.encoder });
            if (_source !== undefined && _source !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _source, 'source');
            }
            if (_target !== undefined && _target !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _target, 'target');
            }
            if (_from !== undefined && _from !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _from, 'from');
            }
            if (_to !== undefined && _to !== null) {
                queryParameters = this.addToHttpParams(queryParameters, _to, 'to');
            }
            var queryString = queryParameters.toString();
            return this.configuration.basePath + "/v1/exchange/rates" + (queryString ? "?" + queryString : '');
        };
        return ExchangeHttpService;
    }());
    ExchangeHttpService.ɵfac = function ExchangeHttpService_Factory(t) { return new (t || ExchangeHttpService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(EXCHANGE_RATES_BASE_PATH, 8), i0.ɵɵinject(ExchangeRatesConfiguration, 8)); };
    ExchangeHttpService.ɵprov = i0.ɵɵdefineInjectable({ token: ExchangeHttpService, factory: ExchangeHttpService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExchangeHttpService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [EXCHANGE_RATES_BASE_PATH]
                        }] }, { type: ExchangeRatesConfiguration, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    /**
    * Mocks provider for /serviceName/v1/exchange/currencies URL pattern
    */
    var ExchangeHttpServiceGetCurrenciesMocksProvider = i2.createMocks([{
            urlPattern: "/serviceName/v1/exchange/currencies",
            method: "GET",
            responses: [
                {
                    status: 200,
                    body: [{
                            "code": "EUR"
                        }, {
                            "code": "GBP"
                        }, {
                            "code": "USD"
                        }]
                },
                {
                    status: 400,
                    body: {
                        "message": "Bad Request",
                        "errors": [{
                                "message": "Value Exceeded. Must be between {min} and {max}.",
                                "key": "common.api.shoesize",
                                "context": {
                                    "max": "50",
                                    "min": "1"
                                }
                            }]
                    }
                },
                {
                    status: 500,
                    body: {
                        "message": "Description of error"
                    }
                },
            ]
        }]);
    /**
    * Mocks provider for /serviceName/v1/exchange/rates URL pattern
    */
    var ExchangeHttpServiceGetRatesMocksProvider = i2.createMocks([{
            urlPattern: "/serviceName/v1/exchange/rates",
            method: "GET",
            responses: [
                {
                    status: 200,
                    body: [{
                            "rate": 1.1279,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-13T00:00:00+0000"
                        }, {
                            "rate": 1.12504,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-12T00:00:00+0000"
                        }, {
                            "rate": 1.12235,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-11T00:00:00+0000"
                        }, {
                            "rate": 1.12341,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-10T00:00:00+0000"
                        }]
                },
                {
                    status: 400,
                    body: {
                        "message": "Bad Request",
                        "errors": [{
                                "message": "Value Exceeded. Must be between {min} and {max}.",
                                "key": "common.api.shoesize",
                                "context": {
                                    "max": "50",
                                    "min": "1"
                                }
                            }]
                    }
                },
                {
                    status: 500,
                    body: {
                        "message": "Description of error"
                    }
                },
            ]
        }]);
    var ExchangeHttpServiceMocksProvider = i2.createMocks([
        {
            urlPattern: "/serviceName/v1/exchange/currencies",
            method: "GET",
            responses: [
                {
                    status: 200,
                    body: [{
                            "code": "EUR"
                        }, {
                            "code": "GBP"
                        }, {
                            "code": "USD"
                        }]
                },
                {
                    status: 400,
                    body: {
                        "message": "Bad Request",
                        "errors": [{
                                "message": "Value Exceeded. Must be between {min} and {max}.",
                                "key": "common.api.shoesize",
                                "context": {
                                    "max": "50",
                                    "min": "1"
                                }
                            }]
                    }
                },
                {
                    status: 500,
                    body: {
                        "message": "Description of error"
                    }
                },
            ]
        },
        {
            urlPattern: "/serviceName/v1/exchange/rates",
            method: "GET",
            responses: [
                {
                    status: 200,
                    body: [{
                            "rate": 1.1279,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-13T00:00:00+0000"
                        }, {
                            "rate": 1.12504,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-12T00:00:00+0000"
                        }, {
                            "rate": 1.12235,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-11T00:00:00+0000"
                        }, {
                            "rate": 1.12341,
                            "source": "EUR",
                            "target": "USD",
                            "time": "2019-03-10T00:00:00+0000"
                        }]
                },
                {
                    status: 400,
                    body: {
                        "message": "Bad Request",
                        "errors": [{
                                "message": "Value Exceeded. Must be between {min} and {max}.",
                                "key": "common.api.shoesize",
                                "context": {
                                    "max": "50",
                                    "min": "1"
                                }
                            }]
                    }
                },
                {
                    status: 500,
                    body: {
                        "message": "Description of error"
                    }
                },
            ]
        },
    ]);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.CONFIG_TOKEN = CONFIG_TOKEN;
    exports.EXCHANGE_RATES_BASE_PATH = EXCHANGE_RATES_BASE_PATH;
    exports.ExchangeHttpService = ExchangeHttpService;
    exports.ExchangeHttpServiceGetCurrenciesMocksProvider = ExchangeHttpServiceGetCurrenciesMocksProvider;
    exports.ExchangeHttpServiceGetRatesMocksProvider = ExchangeHttpServiceGetRatesMocksProvider;
    exports.ExchangeHttpServiceMocksProvider = ExchangeHttpServiceMocksProvider;
    exports.ExchangeRatesApiModule = ExchangeRatesApiModule;
    exports.ExchangeRatesConfiguration = ExchangeRatesConfiguration;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=backbase-exchange-rates-http-ang.umd.js.map
