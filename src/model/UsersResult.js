(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UsersResultUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersResultUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.UsersResult = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.UsersResultUsers);
  }
}(this, function(ApiClient, UsersResultUsers) {
  'use strict';




  /**
   * The UsersResult model module.
   * @module model/UsersResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UsersResult</code>.
   * @alias module:model/UsersResult
   * @class
   * @param users
   */
  var exports = function(users) {
    var _this = this;

    _this['users'] = users;
  };

  /**
   * Constructs a <code>UsersResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersResult} obj Optional instance to populate.
   * @return {module:model/UsersResult} The populated <code>UsersResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('users')) {
        obj['users'] = UsersResultUsers.constructFromObject(data['users']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UsersResultUsers} users
   */
  exports.prototype['users'] = undefined;




  return exports;
}));


