(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PitchesResultPitches'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PitchesResultPitches'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.PitchesResult = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.PitchesResultPitches);
  }
}(this, function(ApiClient, PitchesResultPitches) {
  'use strict';




  /**
   * The PitchesResult model module.
   * @module model/PitchesResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PitchesResult</code>.
   * @alias module:model/PitchesResult
   * @class
   * @param pitches
   */
  var exports = function(pitches) {
    var _this = this;

    _this['pitches'] = pitches;
  };

  /**
   * Constructs a <code>PitchesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PitchesResult} obj Optional instance to populate.
   * @return {module:model/PitchesResult} The populated <code>PitchesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pitches')) {
        obj['pitches'] = PitchesResultPitches.constructFromObject(data['pitches']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PitchesResultPitches} pitches
   */
  exports.prototype['pitches'] = undefined;




  return exports;
}));


