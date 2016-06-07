(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PitchesResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PitchesResult'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Pitches = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.PitchesResult);
  }
}(this, function(ApiClient, PitchesResult) {
  'use strict';




  /**
   * The Pitches model module.
   * @module model/Pitches
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Pitches</code>.
   * @alias module:model/Pitches
   * @class
   * @param result
   */
  var exports = function(result) {
    var _this = this;

    _this['result'] = result;
  };

  /**
   * Constructs a <code>Pitches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pitches} obj Optional instance to populate.
   * @return {module:model/Pitches} The populated <code>Pitches</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = PitchesResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PitchesResult} result
   */
  exports.prototype['result'] = undefined;




  return exports;
}));


