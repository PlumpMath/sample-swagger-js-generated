(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body33221', 'model/Response33249', 'model/Body33225', 'model/Body33218', 'model/Response33243', 'model/Body33217', 'model/Response33242', 'model/Response33247', 'model/Body33223', 'model/Body33222', 'model/Body33220', 'model/Response33228', 'model/Pitches'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body33221'), require('../model/Response33249'), require('../model/Body33225'), require('../model/Body33218'), require('../model/Response33243'), require('../model/Body33217'), require('../model/Response33242'), require('../model/Response33247'), require('../model/Body33223'), require('../model/Body33222'), require('../model/Body33220'), require('../model/Response33228'), require('../model/Pitches'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.PitchesApi = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Body33221, root.NowthisServerCljs.Response33249, root.NowthisServerCljs.Body33225, root.NowthisServerCljs.Body33218, root.NowthisServerCljs.Response33243, root.NowthisServerCljs.Body33217, root.NowthisServerCljs.Response33242, root.NowthisServerCljs.Response33247, root.NowthisServerCljs.Body33223, root.NowthisServerCljs.Body33222, root.NowthisServerCljs.Body33220, root.NowthisServerCljs.Response33228, root.NowthisServerCljs.Pitches);
  }
}(this, function(ApiClient, Body33221, Response33249, Body33225, Body33218, Response33243, Body33217, Response33242, Response33247, Body33223, Body33222, Body33220, Response33228, Pitches) {
  'use strict';

  /**
   * Pitches service.
   * @module api/PitchesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PitchesApi. 
   * @alias module:api/PitchesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the commandsApprovePitchPost operation.
     * @callback module:api/PitchesApi~commandsApprovePitchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve a pitch
     * @param {module:model/Body33221} body33221 
     * @param {module:api/PitchesApi~commandsApprovePitchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsApprovePitchPost = function(body33221, callback) {
      var postBody = body33221;

      // verify the required parameter 'body33221' is set
      if (body33221 == undefined || body33221 == null) {
        throw "Missing the required parameter 'body33221' when calling commandsApprovePitchPost";
      }


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
        '/commands/approve_pitch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsAssignPitchAsProjectPost operation.
     * @callback module:api/PitchesApi~commandsAssignPitchAsProjectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33249} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assigns a pitch to a team or user as a project
     * @param {module:model/Body33225} body33225 
     * @param {module:api/PitchesApi~commandsAssignPitchAsProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33249}
     */
    this.commandsAssignPitchAsProjectPost = function(body33225, callback) {
      var postBody = body33225;

      // verify the required parameter 'body33225' is set
      if (body33225 == undefined || body33225 == null) {
        throw "Missing the required parameter 'body33225' when calling commandsAssignPitchAsProjectPost";
      }


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
      var returnType = Response33249;

      return this.apiClient.callApi(
        '/commands/assign_pitch_as_project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsCreatePitchPost operation.
     * @callback module:api/PitchesApi~commandsCreatePitchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33243} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a pitch to the db
     * @param {module:model/Body33218} body33218 
     * @param {module:api/PitchesApi~commandsCreatePitchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33243}
     */
    this.commandsCreatePitchPost = function(body33218, callback) {
      var postBody = body33218;

      // verify the required parameter 'body33218' is set
      if (body33218 == undefined || body33218 == null) {
        throw "Missing the required parameter 'body33218' when calling commandsCreatePitchPost";
      }


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
      var returnType = Response33243;

      return this.apiClient.callApi(
        '/commands/create_pitch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsDeletePitchPost operation.
     * @callback module:api/PitchesApi~commandsDeletePitchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33242} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a pitch from the db
     * @param {module:model/Body33217} body33217 
     * @param {module:api/PitchesApi~commandsDeletePitchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33242}
     */
    this.commandsDeletePitchPost = function(body33217, callback) {
      var postBody = body33217;

      // verify the required parameter 'body33217' is set
      if (body33217 == undefined || body33217 == null) {
        throw "Missing the required parameter 'body33217' when calling commandsDeletePitchPost";
      }


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
      var returnType = Response33242;

      return this.apiClient.callApi(
        '/commands/delete_pitch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsModifyPitchContentPost operation.
     * @callback module:api/PitchesApi~commandsModifyPitchContentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33247} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modified a pitch&#39;s content
     * @param {module:model/Body33223} body33223 
     * @param {module:api/PitchesApi~commandsModifyPitchContentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33247}
     */
    this.commandsModifyPitchContentPost = function(body33223, callback) {
      var postBody = body33223;

      // verify the required parameter 'body33223' is set
      if (body33223 == undefined || body33223 == null) {
        throw "Missing the required parameter 'body33223' when calling commandsModifyPitchContentPost";
      }


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
      var returnType = Response33247;

      return this.apiClient.callApi(
        '/commands/modify_pitch_content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsRejectPitchPost operation.
     * @callback module:api/PitchesApi~commandsRejectPitchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject a pitch
     * @param {module:model/Body33222} body33222 
     * @param {module:api/PitchesApi~commandsRejectPitchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsRejectPitchPost = function(body33222, callback) {
      var postBody = body33222;

      // verify the required parameter 'body33222' is set
      if (body33222 == undefined || body33222 == null) {
        throw "Missing the required parameter 'body33222' when calling commandsRejectPitchPost";
      }


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
        '/commands/reject_pitch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsSubmitPitchPost operation.
     * @callback module:api/PitchesApi~commandsSubmitPitchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a pitch
     * @param {module:model/Body33220} body33220 
     * @param {module:api/PitchesApi~commandsSubmitPitchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsSubmitPitchPost = function(body33220, callback) {
      var postBody = body33220;

      // verify the required parameter 'body33220' is set
      if (body33220 == undefined || body33220 == null) {
        throw "Missing the required parameter 'body33220' when calling commandsSubmitPitchPost";
      }


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
        '/commands/submit_pitch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queriesDetailedPitchesGet operation.
     * @callback module:api/PitchesApi~queriesDetailedPitchesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33228} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns pitch details
     * @param {String} id 
     * @param {module:api/PitchesApi~queriesDetailedPitchesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33228}
     */
    this.queriesDetailedPitchesGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling queriesDetailedPitchesGet";
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
      var returnType = Response33228;

      return this.apiClient.callApi(
        '/queries/detailed-pitches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queriesPitchOfProjectGet operation.
     * @callback module:api/PitchesApi~queriesPitchOfProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pitches} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the pitch that a project was created from
     * @param {String} id 
     * @param {module:api/PitchesApi~queriesPitchOfProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pitches}
     */
    this.queriesPitchOfProjectGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling queriesPitchOfProjectGet";
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
      var returnType = Pitches;

      return this.apiClient.callApi(
        '/queries/pitch-of-project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queriesPitchesGet operation.
     * @callback module:api/PitchesApi~queriesPitchesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pitches} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns pitches
     * @param {Object} opts Optional parameters
     * @param {String} opts.status 
     * @param {module:api/PitchesApi~queriesPitchesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pitches}
     */
    this.queriesPitchesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'application/x-yaml', 'application/edn', 'application/transit+json', 'application/transit+msgpack'];
      var accepts = ['application/json', 'application/x-yaml', 'application/edn', 'application/transit+json', 'application/transit+msgpack'];
      var returnType = Pitches;

      return this.apiClient.callApi(
        '/queries/pitches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
