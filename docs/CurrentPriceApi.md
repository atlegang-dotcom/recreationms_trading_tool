# RecreationmsTradingTool.CurrentPriceApi

All URIs are relative to *https://api.coingecko.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simplePriceGet**](CurrentPriceApi.md#simplePriceGet) | **GET** /simple/price | returns price data


<a name="simplePriceGet"></a>
# **simplePriceGet**
> Data simplePriceGet(opts)

returns price data

it returns the price data of the specified ids compared the vs_currencies

### Example
```javascript
var RecreationmsTradingTool = require('recreationms_trading_tool');

var apiInstance = new RecreationmsTradingTool.CurrentPriceApi();

var opts = { 
  'ids': "ids_example", // String | simple id or ids of currency, e.g. bitcoin, use comma separated strings for more than one ids
  'vsCurrencies': "vsCurrencies_example", // String | the currency to be compared to, e.g. usd
  'includeMarketCap': "includeMarketCap_example", // String | render true or false
  'include24hrVol': "include24hrVol_example", // String | render true or false
  'include24hrChange': "include24hrChange_example", // String | render true or false
  'includeLastUpdatedAt': "includeLastUpdatedAt_example" // String | render true or false
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.simplePriceGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **String**| simple id or ids of currency, e.g. bitcoin, use comma separated strings for more than one ids | [optional] 
 **vsCurrencies** | **String**| the currency to be compared to, e.g. usd | [optional] 
 **includeMarketCap** | **String**| render true or false | [optional] 
 **include24hrVol** | **String**| render true or false | [optional] 
 **include24hrChange** | **String**| render true or false | [optional] 
 **includeLastUpdatedAt** | **String**| render true or false | [optional] 

### Return type

[**Data**](Data.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

