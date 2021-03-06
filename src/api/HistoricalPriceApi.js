/*
 * recreationms_trading_tool
 * a simple trading tool to return the percentage drop of a coin using coingecko api for rates and historical data
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HistoricalData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HistoricalData'));
  } else {
    // Browser globals (root is window)
    if (!root.RecreationmsTradingTool) {
      root.RecreationmsTradingTool = {};
    }
    root.RecreationmsTradingTool.HistoricalPriceApi = factory(root.RecreationmsTradingTool.ApiClient, root.RecreationmsTradingTool.HistoricalData);
  }
}(this, function(ApiClient, HistoricalData) {
  'use strict';

  /**
   * HistoricalPrice service.
   * @module api/HistoricalPriceApi
   * @version 1.0.3
   */

  /**
   * Constructs a new HistoricalPriceApi. 
   * @alias module:api/HistoricalPriceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the coinsIdHistoryGet operation.
     * @callback module:api/HistoricalPriceApi~coinsIdHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricalData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns market data by date
     * returns the market data of a certain coin by a given date
     * @param {String} id e.g. bitcoin
     * @param {Object} opts Optional parameters
     * @param {String} opts._date use date format dd-mm-yyyy
     * @param {String} opts.localization choose between true and false
     * @param {module:api/HistoricalPriceApi~coinsIdHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HistoricalData}
     */
    this.coinsIdHistoryGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling coinsIdHistoryGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'date': opts['_date'],
        'localization': opts['localization'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = HistoricalData;

      return this.apiClient.callApi(
        '/coins/{id}/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
