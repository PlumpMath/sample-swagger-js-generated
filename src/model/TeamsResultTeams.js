(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamsResultTeamsItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamsResultTeamsItems'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.TeamsResultTeams = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.TeamsResultTeamsItems);
  }
}(this, function(ApiClient, TeamsResultTeamsItems) {
  'use strict';




  /**
   * The TeamsResultTeams model module.
   * @module model/TeamsResultTeams
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TeamsResultTeams</code>.
   * @alias module:model/TeamsResultTeams
   * @class
   * @param items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>TeamsResultTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamsResultTeams} obj Optional instance to populate.
   * @return {module:model/TeamsResultTeams} The populated <code>TeamsResultTeams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [TeamsResultTeamsItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/TeamsResultTeamsItems>} items
   */
  exports.prototype['items'] = undefined;




  return exports;
}));


