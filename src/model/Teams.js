(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TeamsResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamsResult'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Teams = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.TeamsResult);
  }
}(this, function(ApiClient, TeamsResult) {
  'use strict';




  /**
   * The Teams model module.
   * @module model/Teams
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Teams</code>.
   * @alias module:model/Teams
   * @class
   * @param result
   */
  var exports = function(result) {
    var _this = this;

    _this['result'] = result;
  };

  /**
   * Constructs a <code>Teams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Teams} obj Optional instance to populate.
   * @return {module:model/Teams} The populated <code>Teams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = TeamsResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TeamsResult} result
   */
  exports.prototype['result'] = undefined;




  return exports;
}));


