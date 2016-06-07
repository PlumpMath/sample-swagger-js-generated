(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PitchesResultPitchesItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PitchesResultPitchesItems'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.PitchesResultPitches = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.PitchesResultPitchesItems);
  }
}(this, function(ApiClient, PitchesResultPitchesItems) {
  'use strict';




  /**
   * The PitchesResultPitches model module.
   * @module model/PitchesResultPitches
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PitchesResultPitches</code>.
   * @alias module:model/PitchesResultPitches
   * @class
   * @param items
   */
  var exports = function(items) {
    var _this = this;

    _this['items'] = items;
  };

  /**
   * Constructs a <code>PitchesResultPitches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PitchesResultPitches} obj Optional instance to populate.
   * @return {module:model/PitchesResultPitches} The populated <code>PitchesResultPitches</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [PitchesResultPitchesItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PitchesResultPitchesItems>} items
   */
  exports.prototype['items'] = undefined;




  return exports;
}));


