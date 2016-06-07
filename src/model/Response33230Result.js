(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Response33230ResultProjects'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Response33230ResultProjects'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.Response33230Result = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Response33230ResultProjects);
  }
}(this, function(ApiClient, Response33230ResultProjects) {
  'use strict';




  /**
   * The Response33230Result model module.
   * @module model/Response33230Result
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Response33230Result</code>.
   * @alias module:model/Response33230Result
   * @class
   * @param projects
   */
  var exports = function(projects) {
    var _this = this;

    _this['projects'] = projects;
  };

  /**
   * Constructs a <code>Response33230Result</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Response33230Result} obj Optional instance to populate.
   * @return {module:model/Response33230Result} The populated <code>Response33230Result</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('projects')) {
        obj['projects'] = Response33230ResultProjects.constructFromObject(data['projects']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Response33230ResultProjects} projects
   */
  exports.prototype['projects'] = undefined;




  return exports;
}));


