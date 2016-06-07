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
    root.NowthisServerCljs.TeamsResultTeamsItems = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TeamsResultTeamsItems model module.
   * @module model/TeamsResultTeamsItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TeamsResultTeamsItems</code>.
   * @alias module:model/TeamsResultTeamsItems
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TeamsResultTeamsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamsResultTeamsItems} obj Optional instance to populate.
   * @return {module:model/TeamsResultTeamsItems} The populated <code>TeamsResultTeamsItems</code> instance.
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


