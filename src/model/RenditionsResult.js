(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RenditionsResultRenditions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenditionsResultRenditions'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.RenditionsResult = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.RenditionsResultRenditions);
  }
}(this, function(ApiClient, RenditionsResultRenditions) {
  'use strict';




  /**
   * The RenditionsResult model module.
   * @module model/RenditionsResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RenditionsResult</code>.
   * @alias module:model/RenditionsResult
   * @class
   * @param renditions
   */
  var exports = function(renditions) {
    var _this = this;

    _this['renditions'] = renditions;
  };

  /**
   * Constructs a <code>RenditionsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionsResult} obj Optional instance to populate.
   * @return {module:model/RenditionsResult} The populated <code>RenditionsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('renditions')) {
        obj['renditions'] = RenditionsResultRenditions.constructFromObject(data['renditions']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RenditionsResultRenditions} renditions
   */
  exports.prototype['renditions'] = undefined;




  return exports;
}));


