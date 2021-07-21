# RecreationmsTradingTool.HistoricalPriceApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coinsIdHistoryGet**](HistoricalPriceApi.md#coinsIdHistoryGet) | **GET** /coins/{id}/history | returns market data by date


<a name="coinsIdHistoryGet"></a>
# **coinsIdHistoryGet**
> HistoricalData coinsIdHistoryGet(id, opts)

returns market data by date

returns the market data of a certain coin by a given date

### Example
```javascript
var RecreationmsTradingTool = require('recreationms_trading_tool');

var apiInstance = new RecreationmsTradingTool.HistoricalPriceApi();

var id = "id_example"; // String | e.g. bitcoin

var opts = { 
  '_date': "_date_example", // String | use date format dd-mm-yyyy
  'localization': "localization_example" // String | choose between true and false
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.coinsIdHistoryGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| e.g. bitcoin | 
 **_date** | **String**| use date format dd-mm-yyyy | [optional] 
 **localization** | **String**| choose between true and false | [optional] 

### Return type

[**HistoricalData**](HistoricalData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

