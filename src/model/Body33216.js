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
    root.NowthisServerCljs.Body33216 = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body33216 model module.
   * @module model/Body33216
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Body33216</code>.
   * @alias module:model/Body33216
   * @class
   * @param id
   * @param rejectionNotes
   */
  var exports = function(id, rejectionNotes) {
    var _this = this;

    _this['id'] = id;
    _this['rejection_notes'] = rejectionNotes;
  };

  /**
   * Constructs a <code>Body33216</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body33216} obj Optional instance to populate.
   * @return {module:model/Body33216} The populated <code>Body33216</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('rejection_notes')) {
        obj['rejection_notes'] = ApiClient.convertToType(data['rejection_notes'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} rejection_notes
   */
  exports.prototype['rejection_notes'] = undefined;




  return exports;
}));


