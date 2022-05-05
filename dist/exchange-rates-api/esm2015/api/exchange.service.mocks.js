import { createMocks } from '@backbase/foundation-ang/data-http';
/**
* Mocks provider for /serviceName/v1/exchange/currencies URL pattern
*/
export const ExchangeHttpServiceGetCurrenciesMocksProvider = createMocks([{
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
export const ExchangeHttpServiceGetRatesMocksProvider = createMocks([{
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
export const ExchangeHttpServiceMocksProvider = createMocks([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2Uuc2VydmljZS5tb2Nrcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2V4Y2hhbmdlLXJhdGVzLWFwaS9hcGkvZXhjaGFuZ2Uuc2VydmljZS5tb2Nrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHakU7O0VBRUU7QUFDRixNQUFNLENBQUMsTUFBTSw2Q0FBNkMsR0FBYSxXQUFXLENBQUMsQ0FBQztRQUM1RSxVQUFVLEVBQUUscUNBQXFDO1FBQ2pELE1BQU0sRUFBRSxLQUFLO1FBQ2IsU0FBUyxFQUFFO1lBQ0g7Z0JBQ0ksTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLENBQUU7d0JBQzFCLE1BQU0sRUFBRyxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsTUFBTSxFQUFHLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxNQUFNLEVBQUcsS0FBSztxQkFDZixDQUFFO2FBQ2M7WUFDRDtnQkFDSSxNQUFNLEVBQUUsR0FBRztnQkFDWCxJQUFJLEVBQUU7b0JBQ3hCLFNBQVMsRUFBRyxhQUFhO29CQUN6QixRQUFRLEVBQUcsQ0FBRTs0QkFDWCxTQUFTLEVBQUcsa0RBQWtEOzRCQUM5RCxLQUFLLEVBQUcscUJBQXFCOzRCQUM3QixTQUFTLEVBQUc7Z0NBQ1YsS0FBSyxFQUFHLElBQUk7Z0NBQ1osS0FBSyxFQUFHLEdBQUc7NkJBQ1o7eUJBQ0YsQ0FBRTtpQkFDSjthQUNnQjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxHQUFHO2dCQUNYLElBQUksRUFBRTtvQkFDeEIsU0FBUyxFQUFHLHNCQUFzQjtpQkFDbkM7YUFDZ0I7U0FDWjtLQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ0o7O0VBRUU7QUFDRixNQUFNLENBQUMsTUFBTSx3Q0FBd0MsR0FBYSxXQUFXLENBQUMsQ0FBQztRQUN2RSxVQUFVLEVBQUUsZ0NBQWdDO1FBQzVDLE1BQU0sRUFB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d0JBQ2hCLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsTUFBTSxFQUFHLDBCQUEwQjtxQkFDcEMsQ0FBRTthQUNVO1lBRUQ7Z0JBQ0ksTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFO29CQUNwQixTQUFTLEVBQUcsYUFBYTtvQkFDekIsUUFBUSxFQUFHLENBQUU7NEJBQ1gsU0FBUyxFQUFHLGtEQUFrRDs0QkFDOUQsS0FBSyxFQUFHLHFCQUFxQjs0QkFDN0IsU0FBUyxFQUFHO2dDQUNWLEtBQUssRUFBRyxJQUFJO2dDQUNaLEtBQUssRUFBRyxHQUFHOzZCQUNaO3lCQUNGLENBQUU7aUJBQ0o7YUFDWTtZQUVEO2dCQUNJLE1BQU0sRUFBRSxHQUFHO2dCQUNYLElBQUksRUFBRTtvQkFDcEIsU0FBUyxFQUFHLHNCQUFzQjtpQkFDbkM7YUFDWTtTQUNSO0tBQ0o7Q0FDQSxDQUNBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNb2NrcyB9IGZyb20gJ0BiYWNrYmFzZS9mb3VuZGF0aW9uLWFuZy9kYXRhLWh0dHAnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4qIE1vY2tzIHByb3ZpZGVyIGZvciAvc2VydmljZU5hbWUvdjEvZXhjaGFuZ2UvY3VycmVuY2llcyBVUkwgcGF0dGVyblxuKi9cbmV4cG9ydCBjb25zdCBFeGNoYW5nZUh0dHBTZXJ2aWNlR2V0Q3VycmVuY2llc01vY2tzUHJvdmlkZXI6IFByb3ZpZGVyID0gY3JlYXRlTW9ja3MoW3tcbiAgICAgICAgdXJsUGF0dGVybjogXCIvc2VydmljZU5hbWUvdjEvZXhjaGFuZ2UvY3VycmVuY2llc1wiLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFsge1xyXG4gIFwiY29kZVwiIDogXCJFVVJcIlxyXG59LCB7XHJcbiAgXCJjb2RlXCIgOiBcIkdCUFwiXHJcbn0sIHtcclxuICBcImNvZGVcIiA6IFwiVVNEXCJcclxufSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgXCJtZXNzYWdlXCIgOiBcIkJhZCBSZXF1ZXN0XCIsXHJcbiAgXCJlcnJvcnNcIiA6IFsge1xyXG4gICAgXCJtZXNzYWdlXCIgOiBcIlZhbHVlIEV4Y2VlZGVkLiBNdXN0IGJlIGJldHdlZW4ge21pbn0gYW5kIHttYXh9LlwiLFxyXG4gICAgXCJrZXlcIiA6IFwiY29tbW9uLmFwaS5zaG9lc2l6ZVwiLFxyXG4gICAgXCJjb250ZXh0XCIgOiB7XHJcbiAgICAgIFwibWF4XCIgOiBcIjUwXCIsXHJcbiAgICAgIFwibWluXCIgOiBcIjFcIlxyXG4gICAgfVxyXG4gIH0gXVxyXG59XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgXCJtZXNzYWdlXCIgOiBcIkRlc2NyaXB0aW9uIG9mIGVycm9yXCJcclxufVxuICAgICAgICAgICAgICAgIH0sXG4gICAgXVxufV0pO1xuLyoqXG4qIE1vY2tzIHByb3ZpZGVyIGZvciAvc2VydmljZU5hbWUvdjEvZXhjaGFuZ2UvcmF0ZXMgVVJMIHBhdHRlcm5cbiovXG5leHBvcnQgY29uc3QgRXhjaGFuZ2VIdHRwU2VydmljZUdldFJhdGVzTW9ja3NQcm92aWRlcjogUHJvdmlkZXIgPSBjcmVhdGVNb2Nrcyhbe1xuICAgICAgICB1cmxQYXR0ZXJuOiBcIi9zZXJ2aWNlTmFtZS92MS9leGNoYW5nZS9yYXRlc1wiLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIHJlc3BvbnNlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IFsge1xyXG4gIFwicmF0ZVwiIDogMS4xMjc5LFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTEzVDAwOjAwOjAwKzAwMDBcIlxyXG59LCB7XHJcbiAgXCJyYXRlXCIgOiAxLjEyNTA0LFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTEyVDAwOjAwOjAwKzAwMDBcIlxyXG59LCB7XHJcbiAgXCJyYXRlXCIgOiAxLjEyMjM1LFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTExVDAwOjAwOjAwKzAwMDBcIlxyXG59LCB7XHJcbiAgXCJyYXRlXCIgOiAxLjEyMzQxLFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTEwVDAwOjAwOjAwKzAwMDBcIlxyXG59IF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHtcclxuICBcIm1lc3NhZ2VcIiA6IFwiQmFkIFJlcXVlc3RcIixcclxuICBcImVycm9yc1wiIDogWyB7XHJcbiAgICBcIm1lc3NhZ2VcIiA6IFwiVmFsdWUgRXhjZWVkZWQuIE11c3QgYmUgYmV0d2VlbiB7bWlufSBhbmQge21heH0uXCIsXHJcbiAgICBcImtleVwiIDogXCJjb21tb24uYXBpLnNob2VzaXplXCIsXHJcbiAgICBcImNvbnRleHRcIiA6IHtcclxuICAgICAgXCJtYXhcIiA6IFwiNTBcIixcclxuICAgICAgXCJtaW5cIiA6IFwiMVwiXHJcbiAgICB9XHJcbiAgfSBdXHJcbn1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHtcclxuICBcIm1lc3NhZ2VcIiA6IFwiRGVzY3JpcHRpb24gb2YgZXJyb3JcIlxyXG59XG4gICAgICAgICAgICAgICAgfSxcbiAgICBdXG59XSk7XG5cbmV4cG9ydCBjb25zdCBFeGNoYW5nZUh0dHBTZXJ2aWNlTW9ja3NQcm92aWRlcjogUHJvdmlkZXIgPSBjcmVhdGVNb2NrcyhcbiAgICBbXG4gICAge1xuICAgICAgICB1cmxQYXR0ZXJuOiBcIi9zZXJ2aWNlTmFtZS92MS9leGNoYW5nZS9jdXJyZW5jaWVzXCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgcmVzcG9uc2VzOiBbXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgICBib2R5OiBbIHtcclxuICBcImNvZGVcIiA6IFwiRVVSXCJcclxufSwge1xyXG4gIFwiY29kZVwiIDogXCJHQlBcIlxyXG59LCB7XHJcbiAgXCJjb2RlXCIgOiBcIlVTRFwiXHJcbn0gXVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IHtcclxuICBcIm1lc3NhZ2VcIiA6IFwiQmFkIFJlcXVlc3RcIixcclxuICBcImVycm9yc1wiIDogWyB7XHJcbiAgICBcIm1lc3NhZ2VcIiA6IFwiVmFsdWUgRXhjZWVkZWQuIE11c3QgYmUgYmV0d2VlbiB7bWlufSBhbmQge21heH0uXCIsXHJcbiAgICBcImtleVwiIDogXCJjb21tb24uYXBpLnNob2VzaXplXCIsXHJcbiAgICBcImNvbnRleHRcIiA6IHtcclxuICAgICAgXCJtYXhcIiA6IFwiNTBcIixcclxuICAgICAgXCJtaW5cIiA6IFwiMVwiXHJcbiAgICB9XHJcbiAgfSBdXHJcbn1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgXCJtZXNzYWdlXCIgOiBcIkRlc2NyaXB0aW9uIG9mIGVycm9yXCJcclxufVxuICAgICAgICAgICAgfSxcbiAgICBdXG59LFxuICAgIHtcbiAgICAgICAgdXJsUGF0dGVybjogXCIvc2VydmljZU5hbWUvdjEvZXhjaGFuZ2UvcmF0ZXNcIixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICByZXNwb25zZXM6IFtcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgIGJvZHk6IFsge1xyXG4gIFwicmF0ZVwiIDogMS4xMjc5LFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTEzVDAwOjAwOjAwKzAwMDBcIlxyXG59LCB7XHJcbiAgXCJyYXRlXCIgOiAxLjEyNTA0LFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTEyVDAwOjAwOjAwKzAwMDBcIlxyXG59LCB7XHJcbiAgXCJyYXRlXCIgOiAxLjEyMjM1LFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTExVDAwOjAwOjAwKzAwMDBcIlxyXG59LCB7XHJcbiAgXCJyYXRlXCIgOiAxLjEyMzQxLFxyXG4gIFwic291cmNlXCIgOiBcIkVVUlwiLFxyXG4gIFwidGFyZ2V0XCIgOiBcIlVTRFwiLFxyXG4gIFwidGltZVwiIDogXCIyMDE5LTAzLTEwVDAwOjAwOjAwKzAwMDBcIlxyXG59IF1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgICAgICBib2R5OiB7XHJcbiAgXCJtZXNzYWdlXCIgOiBcIkJhZCBSZXF1ZXN0XCIsXHJcbiAgXCJlcnJvcnNcIiA6IFsge1xyXG4gICAgXCJtZXNzYWdlXCIgOiBcIlZhbHVlIEV4Y2VlZGVkLiBNdXN0IGJlIGJldHdlZW4ge21pbn0gYW5kIHttYXh9LlwiLFxyXG4gICAgXCJrZXlcIiA6IFwiY29tbW9uLmFwaS5zaG9lc2l6ZVwiLFxyXG4gICAgXCJjb250ZXh0XCIgOiB7XHJcbiAgICAgIFwibWF4XCIgOiBcIjUwXCIsXHJcbiAgICAgIFwibWluXCIgOiBcIjFcIlxyXG4gICAgfVxyXG4gIH0gXVxyXG59XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICAgICAgICAgICAgYm9keToge1xyXG4gIFwibWVzc2FnZVwiIDogXCJEZXNjcmlwdGlvbiBvZiBlcnJvclwiXHJcbn1cbiAgICAgICAgICAgIH0sXG4gICAgXVxufSxcbl1cbik7XG5cblxuIl19