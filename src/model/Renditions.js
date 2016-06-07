(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RenditionsResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenditionsResult'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Renditions = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.RenditionsResult);
  }
}(this, function(ApiClient, RenditionsResult) {
  'use strict';




  /**
   * The Renditions model module.
   * @module model/Renditions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Renditions</code>.
   * @alias module:model/Renditions
   * @class
   * @param result
   */
  var exports = function(result) {
    var _this = this;

    _this['result'] = result;
  };

  /**
   * Constructs a <code>Renditions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Renditions} obj Optional instance to populate.
   * @return {module:model/Renditions} The populated <code>Renditions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = RenditionsResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RenditionsResult} result
   */
  exports.prototype['result'] = undefined;




  return exports;
}));


