(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UsersResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersResult'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Users = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.UsersResult);
  }
}(this, function(ApiClient, UsersResult) {
  'use strict';




  /**
   * The Users model module.
   * @module model/Users
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Users</code>.
   * @alias module:model/Users
   * @class
   * @param result
   */
  var exports = function(result) {
    var _this = this;

    _this['result'] = result;
  };

  /**
   * Constructs a <code>Users</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Users} obj Optional instance to populate.
   * @return {module:model/Users} The populated <code>Users</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = UsersResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UsersResult} result
   */
  exports.prototype['result'] = undefined;




  return exports;
}));


