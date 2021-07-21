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

  describe('(package)', function() {
    describe('Data', function() {
      beforeEach(function() {
        instance = new RecreationmsTradingTool.Data();
      });

      it('should create an instance of Data', function() {
        // TODO: update the code to test Data
        expect(instance).to.be.a(RecreationmsTradingTool.Data);
      });

      it('should have the property bitcoin (base name: "bitcoin")', function() {
        // TODO: update the code to test the property bitcoin
        expect(instance).to.have.property('bitcoin');
        // expect(instance.bitcoin).to.be(expectedValueLiteral);
      });

    });
  });

}));
