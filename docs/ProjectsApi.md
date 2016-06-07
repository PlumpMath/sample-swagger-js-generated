# NowthisServerCljs.ProjectsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commandsAcceptProjectAssignmentPost**](ProjectsApi.md#commandsAcceptProjectAssignmentPost) | **POST** /commands/accept-project-assignment | Acecept a project assignment
[**commandsApproveProjectPost**](ProjectsApi.md#commandsApproveProjectPost) | **POST** /commands/approve_project | Approve a project
[**commandsCreateProjectPost**](ProjectsApi.md#commandsCreateProjectPost) | **POST** /commands/create_project | Adds a project to the db
[**commandsModifyProjectContentPost**](ProjectsApi.md#commandsModifyProjectContentPost) | **POST** /commands/modify-project-content | Modified a project&#39;s content
[**commandsRejectProjectPost**](ProjectsApi.md#commandsRejectProjectPost) | **POST** /commands/reject_project | Reject a project
[**commandsStartProjectPost**](ProjectsApi.md#commandsStartProjectPost) | **POST** /commands/start-project | Start working on a project
[**commandsSubmitProjectPost**](ProjectsApi.md#commandsSubmitProjectPost) | **POST** /commands/submit_project | Submit a project
[**queriesDetailedProjectsGet**](ProjectsApi.md#queriesDetailedProjectsGet) | **GET** /queries/detailed-projects | Returns project details
[**queriesProjectsGet**](ProjectsApi.md#queriesProjectsGet) | **GET** /queries/projects | Returns projects


<a name="commandsAcceptProjectAssignmentPost"></a>
# **commandsAcceptProjectAssignmentPost**
> commandsAcceptProjectAssignmentPost(body33212)

Acecept a project assignment

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33212 = new NowthisServerCljs.Body33212(); // Body33212 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsAcceptProjectAssignmentPost(body33212, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33212** | [**Body33212**](Body33212.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsApproveProjectPost"></a>
# **commandsApproveProjectPost**
> commandsApproveProjectPost(body33215)

Approve a project

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33215 = new NowthisServerCljs.Body33215(); // Body33215 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsApproveProjectPost(body33215, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33215** | [**Body33215**](Body33215.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsCreateProjectPost"></a>
# **commandsCreateProjectPost**
> Response33234 commandsCreateProjectPost(body33208)

Adds a project to the db

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33208 = new NowthisServerCljs.Body33208(); // Body33208 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsCreateProjectPost(body33208, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33208** | [**Body33208**](Body33208.md)|  | 

### Return type

[**Response33234**](Response33234.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsModifyProjectContentPost"></a>
# **commandsModifyProjectContentPost**
> Response33235 commandsModifyProjectContentPost(body33210)

Modified a project&#39;s content

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33210 = new NowthisServerCljs.Body33210(); // Body33210 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsModifyProjectContentPost(body33210, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33210** | [**Body33210**](Body33210.md)|  | 

### Return type

[**Response33235**](Response33235.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsRejectProjectPost"></a>
# **commandsRejectProjectPost**
> commandsRejectProjectPost(body33216)

Reject a project

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33216 = new NowthisServerCljs.Body33216(); // Body33216 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsRejectProjectPost(body33216, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33216** | [**Body33216**](Body33216.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsStartProjectPost"></a>
# **commandsStartProjectPost**
> commandsStartProjectPost(body33213)

Start working on a project

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33213 = new NowthisServerCljs.Body33213(); // Body33213 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsStartProjectPost(body33213, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33213** | [**Body33213**](Body33213.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsSubmitProjectPost"></a>
# **commandsSubmitProjectPost**
> commandsSubmitProjectPost(body33214)

Submit a project

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var body33214 = new NowthisServerCljs.Body33214(); // Body33214 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsSubmitProjectPost(body33214, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33214** | [**Body33214**](Body33214.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="queriesDetailedProjectsGet"></a>
# **queriesDetailedProjectsGet**
> queriesDetailedProjectsGet(id)

Returns project details

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.queriesDetailedProjectsGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="queriesProjectsGet"></a>
# **queriesProjectsGet**
> Response33230 queriesProjectsGet()

Returns projects

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.ProjectsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queriesProjectsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Response33230**](Response33230.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

