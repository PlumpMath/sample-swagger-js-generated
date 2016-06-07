(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Body33212', 'model/Body33215', 'model/Response33234', 'model/Body33208', 'model/Response33235', 'model/Body33210', 'model/Body33216', 'model/Body33213', 'model/Body33214', 'model/Response33230'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body33212'), require('../model/Body33215'), require('../model/Response33234'), require('../model/Body33208'), require('../model/Response33235'), require('../model/Body33210'), require('../model/Body33216'), require('../model/Body33213'), require('../model/Body33214'), require('../model/Response33230'));
  } else {
    // Browser globals (root is window)
    if (!root.NowthisServerCljs) {
      root.NowthisServerCljs = {};
    }
    root.NowthisServerCljs.ProjectsApi = factory(root.NowthisServerCljs.ApiClient, root.NowthisServerCljs.Body33212, root.NowthisServerCljs.Body33215, root.NowthisServerCljs.Response33234, root.NowthisServerCljs.Body33208, root.NowthisServerCljs.Response33235, root.NowthisServerCljs.Body33210, root.NowthisServerCljs.Body33216, root.NowthisServerCljs.Body33213, root.NowthisServerCljs.Body33214, root.NowthisServerCljs.Response33230);
  }
}(this, function(ApiClient, Body33212, Body33215, Response33234, Body33208, Response33235, Body33210, Body33216, Body33213, Body33214, Response33230) {
  'use strict';

  /**
   * Projects service.
   * @module api/ProjectsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ProjectsApi. 
   * @alias module:api/ProjectsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the commandsAcceptProjectAssignmentPost operation.
     * @callback module:api/ProjectsApi~commandsAcceptProjectAssignmentPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Acecept a project assignment
     * @param {module:model/Body33212} body33212 
     * @param {module:api/ProjectsApi~commandsAcceptProjectAssignmentPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsAcceptProjectAssignmentPost = function(body33212, callback) {
      var postBody = body33212;

      // verify the required parameter 'body33212' is set
      if (body33212 == undefined || body33212 == null) {
        throw "Missing the required parameter 'body33212' when calling commandsAcceptProjectAssignmentPost";
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
        '/commands/accept-project-assignment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsApproveProjectPost operation.
     * @callback module:api/ProjectsApi~commandsApproveProjectPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve a project
     * @param {module:model/Body33215} body33215 
     * @param {module:api/ProjectsApi~commandsApproveProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsApproveProjectPost = function(body33215, callback) {
      var postBody = body33215;

      // verify the required parameter 'body33215' is set
      if (body33215 == undefined || body33215 == null) {
        throw "Missing the required parameter 'body33215' when calling commandsApproveProjectPost";
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
        '/commands/approve_project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsCreateProjectPost operation.
     * @callback module:api/ProjectsApi~commandsCreateProjectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33234} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a project to the db
     * @param {module:model/Body33208} body33208 
     * @param {module:api/ProjectsApi~commandsCreateProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33234}
     */
    this.commandsCreateProjectPost = function(body33208, callback) {
      var postBody = body33208;

      // verify the required parameter 'body33208' is set
      if (body33208 == undefined || body33208 == null) {
        throw "Missing the required parameter 'body33208' when calling commandsCreateProjectPost";
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
      var returnType = Response33234;

      return this.apiClient.callApi(
        '/commands/create_project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsModifyProjectContentPost operation.
     * @callback module:api/ProjectsApi~commandsModifyProjectContentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33235} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modified a project&#39;s content
     * @param {module:model/Body33210} body33210 
     * @param {module:api/ProjectsApi~commandsModifyProjectContentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33235}
     */
    this.commandsModifyProjectContentPost = function(body33210, callback) {
      var postBody = body33210;

      // verify the required parameter 'body33210' is set
      if (body33210 == undefined || body33210 == null) {
        throw "Missing the required parameter 'body33210' when calling commandsModifyProjectContentPost";
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
      var returnType = Response33235;

      return this.apiClient.callApi(
        '/commands/modify-project-content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsRejectProjectPost operation.
     * @callback module:api/ProjectsApi~commandsRejectProjectPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reject a project
     * @param {module:model/Body33216} body33216 
     * @param {module:api/ProjectsApi~commandsRejectProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsRejectProjectPost = function(body33216, callback) {
      var postBody = body33216;

      // verify the required parameter 'body33216' is set
      if (body33216 == undefined || body33216 == null) {
        throw "Missing the required parameter 'body33216' when calling commandsRejectProjectPost";
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
        '/commands/reject_project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsStartProjectPost operation.
     * @callback module:api/ProjectsApi~commandsStartProjectPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start working on a project
     * @param {module:model/Body33213} body33213 
     * @param {module:api/ProjectsApi~commandsStartProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsStartProjectPost = function(body33213, callback) {
      var postBody = body33213;

      // verify the required parameter 'body33213' is set
      if (body33213 == undefined || body33213 == null) {
        throw "Missing the required parameter 'body33213' when calling commandsStartProjectPost";
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
        '/commands/start-project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the commandsSubmitProjectPost operation.
     * @callback module:api/ProjectsApi~commandsSubmitProjectPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a project
     * @param {module:model/Body33214} body33214 
     * @param {module:api/ProjectsApi~commandsSubmitProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.commandsSubmitProjectPost = function(body33214, callback) {
      var postBody = body33214;

      // verify the required parameter 'body33214' is set
      if (body33214 == undefined || body33214 == null) {
        throw "Missing the required parameter 'body33214' when calling commandsSubmitProjectPost";
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
        '/commands/submit_project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queriesDetailedProjectsGet operation.
     * @callback module:api/ProjectsApi~queriesDetailedProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns project details
     * @param {String} id 
     * @param {module:api/ProjectsApi~queriesDetailedProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.queriesDetailedProjectsGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling queriesDetailedProjectsGet";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/queries/detailed-projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the queriesProjectsGet operation.
     * @callback module:api/ProjectsApi~queriesProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Response33230} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns projects
     * @param {module:api/ProjectsApi~queriesProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Response33230}
     */
    this.queriesProjectsGet = function(callback) {
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
      var returnType = Response33230;

      return this.apiClient.callApi(
        '/queries/projects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
