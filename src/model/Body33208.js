(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body33208Producer', 'model/Body33208ScriptWriter', 'model/Body33208Team'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Body33208Producer'), require('./Body33208ScriptWriter'), require('./Body33208Team'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Body33208 = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Body33208Producer, root.NowthisServerCljs.Body33208ScriptWriter, root.NowthisServerCljs.Body33208Team);
  }
}(this, function(ApiClient, Body33208Producer, Body33208ScriptWriter, Body33208Team) {
  'use strict';




  /**
   * The Body33208 model module.
   * @module model/Body33208
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Body33208</code>.
   * @alias module:model/Body33208
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>Body33208</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body33208} obj Optional instance to populate.
   * @return {module:model/Body33208} The populated <code>Body33208</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscription_sources')) {
        obj['subscription_sources'] = ApiClient.convertToType(data['subscription_sources'], ['String']);
      }
      if (data.hasOwnProperty('content_tags')) {
        obj['content_tags'] = ApiClient.convertToType(data['content_tags'], ['String']);
      }
      if (data.hasOwnProperty('script_link')) {
        obj['script_link'] = ApiClient.convertToType(data['script_link'], 'String');
      }
      if (data.hasOwnProperty('assignment_notes')) {
        obj['assignment_notes'] = ApiClient.convertToType(data['assignment_notes'], 'String');
      }
      if (data.hasOwnProperty('producer')) {
        obj['producer'] = Body33208Producer.constructFromObject(data['producer']);
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
      }
      if (data.hasOwnProperty('urgency')) {
        obj['urgency'] = ApiClient.convertToType(data['urgency'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('suggested_headline')) {
        obj['suggested_headline'] = ApiClient.convertToType(data['suggested_headline'], 'String');
      }
      if (data.hasOwnProperty('publishing_notes')) {
        obj['publishing_notes'] = ApiClient.convertToType(data['publishing_notes'], 'String');
      }
      if (data.hasOwnProperty('music_tags')) {
        obj['music_tags'] = ApiClient.convertToType(data['music_tags'], ['String']);
      }
      if (data.hasOwnProperty('script_required')) {
        obj['script_required'] = ApiClient.convertToType(data['script_required'], 'Boolean');
      }
      if (data.hasOwnProperty('team')) {
        obj['team'] = Body33208Team.constructFromObject(data['team']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('suggested_description')) {
        obj['suggested_description'] = ApiClient.convertToType(data['suggested_description'], 'String');
      }
      if (data.hasOwnProperty('pitch_id')) {
        obj['pitch_id'] = ApiClient.convertToType(data['pitch_id'], 'String');
      }
      if (data.hasOwnProperty('location_tags')) {
        obj['location_tags'] = ApiClient.convertToType(data['location_tags'], ['String']);
      }
      if (data.hasOwnProperty('suggested_title')) {
        obj['suggested_title'] = ApiClient.convertToType(data['suggested_title'], 'String');
      }
      if (data.hasOwnProperty('script_writer')) {
        obj['script_writer'] = Body33208ScriptWriter.constructFromObject(data['script_writer']);
      }
      if (data.hasOwnProperty('content_permission')) {
        obj['content_permission'] = ApiClient.convertToType(data['content_permission'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} subscription_sources
   */
  exports.prototype['subscription_sources'] = undefined;
  /**
   * @member {Array.<String>} content_tags
   */
  exports.prototype['content_tags'] = undefined;
  /**
   * @member {String} script_link
   */
  exports.prototype['script_link'] = undefined;
  /**
   * @member {String} assignment_notes
   */
  exports.prototype['assignment_notes'] = undefined;
  /**
   * @member {module:model/Body33208Producer} producer
   */
  exports.prototype['producer'] = undefined;
  /**
   * @member {String} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {module:model/Body33208.UrgencyEnum} urgency
   */
  exports.prototype['urgency'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} suggested_headline
   */
  exports.prototype['suggested_headline'] = undefined;
  /**
   * @member {String} publishing_notes
   */
  exports.prototype['publishing_notes'] = undefined;
  /**
   * @member {Array.<String>} music_tags
   */
  exports.prototype['music_tags'] = undefined;
  /**
   * @member {Boolean} script_required
   */
  exports.prototype['script_required'] = undefined;
  /**
   * @member {module:model/Body33208Team} team
   */
  exports.prototype['team'] = undefined;
  /**
   * @member {module:model/Body33208.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} suggested_description
   */
  exports.prototype['suggested_description'] = undefined;
  /**
   * @member {String} pitch_id
   */
  exports.prototype['pitch_id'] = undefined;
  /**
   * @member {Array.<String>} location_tags
   */
  exports.prototype['location_tags'] = undefined;
  /**
   * @member {String} suggested_title
   */
  exports.prototype['suggested_title'] = undefined;
  /**
   * @member {module:model/Body33208ScriptWriter} script_writer
   */
  exports.prototype['script_writer'] = undefined;
  /**
   * @member {String} content_permission
   */
  exports.prototype['content_permission'] = undefined;


  /**
   * Allowed values for the <code>urgency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UrgencyEnum = {
    /**
     * value: "ThisWeek"
     * @const
     */
    "ThisWeek": "ThisWeek",
    /**
     * value: "Evergreen"
     * @const
     */
    "Evergreen": "Evergreen",
    /**
     * value: "Breaking"
     * @const
     */
    "Breaking": "Breaking",
    /**
     * value: "Today"
     * @const
     */
    "Today": "Today"  };
  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Approved"
     * @const
     */
    "Approved": "Approved",
    /**
     * value: "InProgress"
     * @const
     */
    "InProgress": "InProgress",
    /**
     * value: "ToFix"
     * @const
     */
    "ToFix": "ToFix",
    /**
     * value: "Submitted"
     * @const
     */
    "Submitted": "Submitted",
    /**
     * value: "Unassigned"
     * @const
     */
    "Unassigned": "Unassigned",
    /**
     * value: "ToDo"
     * @const
     */
    "ToDo": "ToDo"  };


  return exports;
}));


