(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Teams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Teams'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.TeamsApi = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Teams);
  }
}(this, function(ApiClient, Teams) {
  'use strict';

  /**
   * Teams service.
   * @module api/TeamsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new TeamsApi. 
   * @alias module:api/TeamsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the queriesTeamsGet operation.
     * @callback module:api/TeamsApi~queriesTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Teams} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns teams
     * @param {module:api/TeamsApi~queriesTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Teams}
     */
    this.queriesTeamsGet = function(callback) {
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
      var returnType = Teams;

      return this.apiClient.callApi(
        '/queries/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
