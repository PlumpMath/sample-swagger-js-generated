(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Users'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Users'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.UsersApi = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Users);
  }
}(this, function(ApiClient, Users) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 0.0.1
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the queriesUsersGet operation.
     * @callback module:api/UsersApi~queriesUsersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Users} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns users
     * @param {module:api/UsersApi~queriesUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Users}
     */
    this.queriesUsersGet = function(callback) {
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
      var returnType = Users;

      return this.apiClient.callApi(
        '/queries/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
