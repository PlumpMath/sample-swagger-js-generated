(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.RenditionsResultRenditionsItems = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RenditionsResultRenditionsItems model module.
   * @module model/RenditionsResultRenditionsItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>RenditionsResultRenditionsItems</code>.
   * @alias module:model/RenditionsResultRenditionsItems
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RenditionsResultRenditionsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionsResultRenditionsItems} obj Optional instance to populate.
   * @return {module:model/RenditionsResultRenditionsItems} The populated <code>RenditionsResultRenditionsItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;




  return exports;
}));


