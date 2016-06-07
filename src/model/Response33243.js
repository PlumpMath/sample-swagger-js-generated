(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IdMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdMap'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33243 = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.IdMap);
  }
}(this, function(ApiClient, IdMap) {
  'use strict';




  /**
   * The Response33243 model module.
   * @module model/Response33243
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33243</code>.
   * @alias module:model/Response33243
   * @class
   * @param result
   */
  var exports = function(result) {
    var _this = this;

    _this['result'] = result;
  };

  /**
   * Constructs a <code>Response33243</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33243} obj Optional instance to populate.
   * @return {module:model/Response33243} The populated <code>Response33243</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = IdMap.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/IdMap} result
   */
  exports.prototype['result'] = undefined;




  return exports;
}));


