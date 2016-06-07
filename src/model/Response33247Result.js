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
    root.NowthisServerCljs.Response33247Result = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Response33247Result model module.
   * @module model/Response33247Result
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33247Result</code>.
   * @alias module:model/Response33247Result
   * @class
   * @param title
   */
  var exports = function(title) {
    var _this = this;




    _this['title'] = title;


  };

  /**
   * Constructs a <code>Response33247Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33247Result} obj Optional instance to populate.
   * @return {module:model/Response33247Result} The populated <code>Response33247Result</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('editorial-criteria')) {
        obj['editorial-criteria'] = ApiClient.convertToType(data['editorial-criteria'], 'String');
      }
      if (data.hasOwnProperty('urgency')) {
        obj['urgency'] = ApiClient.convertToType(data['urgency'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Response33247Result.EditorialCriteriaEnum} editorial-criteria
   */
  exports.prototype['editorial-criteria'] = undefined;
  /**
   * @member {module:model/Response33247Result.UrgencyEnum} urgency
   */
  exports.prototype['urgency'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:model/Response33247Result.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;


  /**
   * Allowed values for the <code>editorial-criteria</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EditorialCriteriaEnum = {
    /**
     * value: "CoreIssue"
     * @const
     */
    "CoreIssue": "CoreIssue",
    /**
     * value: "GreatVideo"
     * @const
     */
    "GreatVideo": "GreatVideo",
    /**
     * value: "InterestingFact"
     * @const
     */
    "InterestingFact": "InterestingFact"  };
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
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",
    /**
     * value: "Draft"
     * @const
     */
    "Draft": "Draft",
    /**
     * value: "Approved"
     * @const
     */
    "Approved": "Approved",
    /**
     * value: "Submitted"
     * @const
     */
    "Submitted": "Submitted"  };


  return exports;
}));


