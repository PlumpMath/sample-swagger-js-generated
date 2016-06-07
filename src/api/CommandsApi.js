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
    root.NowthisServerCljs.CommandsApi = factory(root.NowthisServerCljs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Commands service.
   * @module api/CommandsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CommandsApi. 
   * @alias module:api/CommandsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the commandsResetDbPost operation.
     * @callback module:api/CommandsApi~commandsResetDbPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resets and initializes the database
     * @param {module:api/CommandsApi~commandsResetDbPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsResetDbPost = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-yaml', 'application/edn', 'application/transit+json', 'application/transit+msgpack'];
      var accepts = ['application/json', 'application/x-yaml', 'application/edn', 'application/transit+json', 'application/transit+msgpack'];
      var returnType = null;

      return this.apiClient.callApi(
        '/commands/reset-db', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
