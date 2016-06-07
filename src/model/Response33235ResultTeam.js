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
    root.NowthisServerCljs.Response33235ResultTeam = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Response33235ResultTeam model module.
   * @module model/Response33235ResultTeam
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33235ResultTeam</code>.
   * @alias module:model/Response33235ResultTeam
   * @class
   * @param id
   * @param name
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>Response33235ResultTeam</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33235ResultTeam} obj Optional instance to populate.
   * @return {module:model/Response33235ResultTeam} The populated <code>Response33235ResultTeam</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));


