(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Response33228ResultPitchesItemsSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Response33228ResultPitchesItemsSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33228ResultPitches = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Response33228ResultPitchesItemsSchema);
  }
}(this, function(ApiClient, Response33228ResultPitchesItemsSchema) {
  'use strict';




  /**
   * The Response33228ResultPitches model module.
   * @module model/Response33228ResultPitches
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33228ResultPitches</code>.
   * @alias module:model/Response33228ResultPitches
   * @class
   * @param items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>Response33228ResultPitches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33228ResultPitches} obj Optional instance to populate.
   * @return {module:model/Response33228ResultPitches} The populated <code>Response33228ResultPitches</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [Response33228ResultPitchesItemsSchema]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Response33228ResultPitchesItemsSchema>} items
   */
  exports.prototype['items'] = undefined;




  return exports;
}));


