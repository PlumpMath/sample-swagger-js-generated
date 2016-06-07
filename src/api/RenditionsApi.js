(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Renditions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Renditions'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.RenditionsApi = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Renditions);
  }
}(this, function(ApiClient, Renditions) {
  'use strict';

  /**
   * Renditions service.
   * @module api/RenditionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new RenditionsApi. 
   * @alias module:api/RenditionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the queriesRenditionsGet operation.
     * @callback module:api/RenditionsApi~queriesRenditionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Renditions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns renditions for a project
     * @param {String} id 
     * @param {module:api/RenditionsApi~queriesRenditionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Renditions}
     */
    this.queriesRenditionsGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling queriesRenditionsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-yaml', 'application/edn', 'application/transit+json', 'application/transit+msgpack'];
      var accepts = ['application/json', 'application/x-yaml', 'application/edn', 'application/transit+json', 'application/transit+msgpack'];
      var returnType = Renditions;

      return this.apiClient.callApi(
        '/queries/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
