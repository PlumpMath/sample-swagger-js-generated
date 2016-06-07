(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamsResultTeams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamsResultTeams'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.TeamsResult = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.TeamsResultTeams);
  }
}(this, function(ApiClient, TeamsResultTeams) {
  'use strict';




  /**
   * The TeamsResult model module.
   * @module model/TeamsResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TeamsResult</code>.
   * @alias module:model/TeamsResult
   * @class
   * @param teams
   */
  var exports = function(teams) {
    var _this = this;

    _this['teams'] = teams;
  };

  /**
   * Constructs a <code>TeamsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamsResult} obj Optional instance to populate.
   * @return {module:model/TeamsResult} The populated <code>TeamsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('teams')) {
        obj['teams'] = TeamsResultTeams.constructFromObject(data['teams']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TeamsResultTeams} teams
   */
  exports.prototype['teams'] = undefined;




  return exports;
}));


