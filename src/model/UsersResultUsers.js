(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UsersResultUsersItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersResultUsersItems'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.UsersResultUsers = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.UsersResultUsersItems);
  }
}(this, function(ApiClient, UsersResultUsersItems) {
  'use strict';




  /**
   * The UsersResultUsers model module.
   * @module model/UsersResultUsers
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UsersResultUsers</code>.
   * @alias module:model/UsersResultUsers
   * @class
   * @param items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>UsersResultUsers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersResultUsers} obj Optional instance to populate.
   * @return {module:model/UsersResultUsers} The populated <code>UsersResultUsers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [UsersResultUsersItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UsersResultUsersItems>} items
   */
  exports.prototype['items'] = undefined;




  return exports;
}));


