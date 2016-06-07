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
    root.NowthisServerCljs.Response33235ResultScriptWriter = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Response33235ResultScriptWriter model module.
   * @module model/Response33235ResultScriptWriter
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33235ResultScriptWriter</code>.
   * @alias module:model/Response33235ResultScriptWriter
   * @class
   * @param id
   * @param email
   * @param firstName
   * @param lastName
   */
  var exports = function(id, email, firstName, lastName) {
    var _this = this;

    _this['id'] = id;
    _this['email'] = email;
    _this['first_name'] = firstName;
    _this['last_name'] = lastName;
  };

  /**
   * Constructs a <code>Response33235ResultScriptWriter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33235ResultScriptWriter} obj Optional instance to populate.
   * @return {module:model/Response33235ResultScriptWriter} The populated <code>Response33235ResultScriptWriter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;




  return exports;
}));


