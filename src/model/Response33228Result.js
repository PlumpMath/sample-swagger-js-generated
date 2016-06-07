(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Response33228ResultPitches'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Response33228ResultPitches'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33228Result = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Response33228ResultPitches);
  }
}(this, function(ApiClient, Response33228ResultPitches) {
  'use strict';




  /**
   * The Response33228Result model module.
   * @module model/Response33228Result
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33228Result</code>.
   * @alias module:model/Response33228Result
   * @class
   * @param pitches
   */
  var exports = function(pitches) {
    var _this = this;

    _this['pitches'] = pitches;
  };

  /**
   * Constructs a <code>Response33228Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33228Result} obj Optional instance to populate.
   * @return {module:model/Response33228Result} The populated <code>Response33228Result</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pitches')) {
        obj['pitches'] = Response33228ResultPitches.constructFromObject(data['pitches']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Response33228ResultPitches} pitches
   */
  exports.prototype['pitches'] = undefined;




  return exports;
}));


