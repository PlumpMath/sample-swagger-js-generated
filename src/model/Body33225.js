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
    root.NowthisServerCljs.Body33225 = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body33225 model module.
   * @module model/Body33225
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Body33225</code>.
   * @alias module:model/Body33225
   * @class
   * @param pitchId
   * @param title
   * @param dueDate
   * @param teamId
   * @param scriptRequired
   */
  var exports = function(pitchId, title, dueDate, teamId, scriptRequired) {
    var _this = this;

    _this['pitch_id'] = pitchId;
    _this['title'] = title;
    _this['due_date'] = dueDate;
    _this['team_id'] = teamId;
    _this['script_required'] = scriptRequired;



  };

  /**
   * Constructs a <code>Body33225</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body33225} obj Optional instance to populate.
   * @return {module:model/Body33225} The populated <code>Body33225</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pitch_id')) {
        obj['pitch_id'] = ApiClient.convertToType(data['pitch_id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
      }
      if (data.hasOwnProperty('team_id')) {
        obj['team_id'] = ApiClient.convertToType(data['team_id'], 'String');
      }
      if (data.hasOwnProperty('script_required')) {
        obj['script_required'] = ApiClient.convertToType(data['script_required'], 'Boolean');
      }
      if (data.hasOwnProperty('producer_id')) {
        obj['producer_id'] = ApiClient.convertToType(data['producer_id'], 'String');
      }
      if (data.hasOwnProperty('assignment_notes')) {
        obj['assignment_notes'] = ApiClient.convertToType(data['assignment_notes'], 'String');
      }
      if (data.hasOwnProperty('script_writer_id')) {
        obj['script_writer_id'] = ApiClient.convertToType(data['script_writer_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} pitch_id
   */
  exports.prototype['pitch_id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {String} team_id
   */
  exports.prototype['team_id'] = undefined;
  /**
   * @member {Boolean} script_required
   */
  exports.prototype['script_required'] = undefined;
  /**
   * @member {String} producer_id
   */
  exports.prototype['producer_id'] = undefined;
  /**
   * @member {String} assignment_notes
   */
  exports.prototype['assignment_notes'] = undefined;
  /**
   * @member {String} script_writer_id
   */
  exports.prototype['script_writer_id'] = undefined;




  return exports;
}));


