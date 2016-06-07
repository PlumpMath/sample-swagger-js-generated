(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Response33235ResultProducer', 'model/Response33235ResultScriptWriter', 'model/Response33235ResultTeam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Response33235ResultProducer'), require('./Response33235ResultScriptWriter'), require('./Response33235ResultTeam'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33235Result = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Response33235ResultProducer, root.NowthisServerCljs.Response33235ResultScriptWriter, root.NowthisServerCljs.Response33235ResultTeam);
  }
}(this, function(ApiClient, Response33235ResultProducer, Response33235ResultScriptWriter, Response33235ResultTeam) {
  'use strict';




  /**
   * The Response33235Result model module.
   * @module model/Response33235Result
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33235Result</code>.
   * @alias module:model/Response33235Result
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>Response33235Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33235Result} obj Optional instance to populate.
   * @return {module:model/Response33235Result} The populated <code>Response33235Result</code> instance.
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
        obj['producer'] = Response33235ResultProducer.constructFromObject(data['producer']);
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
        obj['team'] = Response33235ResultTeam.constructFromObject(data['team']);
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
        obj['script_writer'] = Response33235ResultScriptWriter.constructFromObject(data['script_writer']);
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
   * @member {module:model/Response33235ResultProducer} producer
   */
  exports.prototype['producer'] = undefined;
  /**
   * @member {String} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * @member {module:model/Response33235Result.UrgencyEnum} urgency
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
   * @member {module:model/Response33235ResultTeam} team
   */
  exports.prototype['team'] = undefined;
  /**
   * @member {module:model/Response33235Result.StatusEnum} status
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
   * @member {module:model/Response33235ResultScriptWriter} script_writer
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


