(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RenditionsResultRenditionsItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenditionsResultRenditionsItems'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.RenditionsResultRenditions = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.RenditionsResultRenditionsItems);
  }
}(this, function(ApiClient, RenditionsResultRenditionsItems) {
  'use strict';




  /**
   * The RenditionsResultRenditions model module.
   * @module model/RenditionsResultRenditions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RenditionsResultRenditions</code>.
   * @alias module:model/RenditionsResultRenditions
   * @class
   * @param items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>RenditionsResultRenditions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionsResultRenditions} obj Optional instance to populate.
   * @return {module:model/RenditionsResultRenditions} The populated <code>RenditionsResultRenditions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [RenditionsResultRenditionsItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RenditionsResultRenditionsItems>} items
   */
  exports.prototype['items'] = undefined;




  return exports;
}));


