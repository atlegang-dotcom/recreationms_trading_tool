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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RecreationmsTradingTool);
  }
}(this, function(expect, RecreationmsTradingTool) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RecreationmsTradingTool.CurrentPriceApi();
  });

  describe('(package)', function() {
    describe('CurrentPriceApi', function() {
      describe('simplePriceGet', function() {
        it('should call simplePriceGet successfully', function(done) {
          // TODO: uncomment, update parameter values for simplePriceGet call and complete the assertions
          /*
          var opts = {};
          opts.ids = "ids_example";
          opts.vsCurrencies = "vsCurrencies_example";
          opts.includeMarketCap = "includeMarketCap_example";
          opts.include24hrVol = "include24hrVol_example";
          opts.include24hrChange = "include24hrChange_example";
          opts.includeLastUpdatedAt = "includeLastUpdatedAt_example";

          instance.simplePriceGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(RecreationmsTradingTool.Data);
            expect(data.bitcoin).to.be.a(Object);
            expect(data.bitcoin).to.be();

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
