# NowthisServerCljs.PitchesApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commandsApprovePitchPost**](PitchesApi.md#commandsApprovePitchPost) | **POST** /commands/approve_pitch | Approve a pitch
[**commandsAssignPitchAsProjectPost**](PitchesApi.md#commandsAssignPitchAsProjectPost) | **POST** /commands/assign_pitch_as_project | Assigns a pitch to a team or user as a project
[**commandsCreatePitchPost**](PitchesApi.md#commandsCreatePitchPost) | **POST** /commands/create_pitch | Adds a pitch to the db
[**commandsDeletePitchPost**](PitchesApi.md#commandsDeletePitchPost) | **POST** /commands/delete_pitch | Removes a pitch from the db
[**commandsModifyPitchContentPost**](PitchesApi.md#commandsModifyPitchContentPost) | **POST** /commands/modify_pitch_content | Modified a pitch&#39;s content
[**commandsRejectPitchPost**](PitchesApi.md#commandsRejectPitchPost) | **POST** /commands/reject_pitch | Reject a pitch
[**commandsSubmitPitchPost**](PitchesApi.md#commandsSubmitPitchPost) | **POST** /commands/submit_pitch | Submit a pitch
[**queriesDetailedPitchesGet**](PitchesApi.md#queriesDetailedPitchesGet) | **GET** /queries/detailed-pitches | Returns pitch details
[**queriesPitchOfProjectGet**](PitchesApi.md#queriesPitchOfProjectGet) | **GET** /queries/pitch-of-project | Returns the pitch that a project was created from
[**queriesPitchesGet**](PitchesApi.md#queriesPitchesGet) | **GET** /queries/pitches | Returns pitches


<a name="commandsApprovePitchPost"></a>
# **commandsApprovePitchPost**
> commandsApprovePitchPost(body33221)

Approve a pitch

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33221 = new NowthisServerCljs.Body33221(); // Body33221 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsApprovePitchPost(body33221, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33221** | [**Body33221**](Body33221.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsAssignPitchAsProjectPost"></a>
# **commandsAssignPitchAsProjectPost**
> Response33249 commandsAssignPitchAsProjectPost(body33225)

Assigns a pitch to a team or user as a project

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33225 = new NowthisServerCljs.Body33225(); // Body33225 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsAssignPitchAsProjectPost(body33225, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33225** | [**Body33225**](Body33225.md)|  | 

### Return type

[**Response33249**](Response33249.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsCreatePitchPost"></a>
# **commandsCreatePitchPost**
> Response33243 commandsCreatePitchPost(body33218)

Adds a pitch to the db

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33218 = new NowthisServerCljs.Body33218(); // Body33218 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsCreatePitchPost(body33218, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33218** | [**Body33218**](Body33218.md)|  | 

### Return type

[**Response33243**](Response33243.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsDeletePitchPost"></a>
# **commandsDeletePitchPost**
> Response33242 commandsDeletePitchPost(body33217)

Removes a pitch from the db

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33217 = new NowthisServerCljs.Body33217(); // Body33217 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsDeletePitchPost(body33217, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33217** | [**Body33217**](Body33217.md)|  | 

### Return type

[**Response33242**](Response33242.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsModifyPitchContentPost"></a>
# **commandsModifyPitchContentPost**
> Response33247 commandsModifyPitchContentPost(body33223)

Modified a pitch&#39;s content

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33223 = new NowthisServerCljs.Body33223(); // Body33223 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commandsModifyPitchContentPost(body33223, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33223** | [**Body33223**](Body33223.md)|  | 

### Return type

[**Response33247**](Response33247.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsRejectPitchPost"></a>
# **commandsRejectPitchPost**
> commandsRejectPitchPost(body33222)

Reject a pitch

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33222 = new NowthisServerCljs.Body33222(); // Body33222 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsRejectPitchPost(body33222, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33222** | [**Body33222**](Body33222.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="commandsSubmitPitchPost"></a>
# **commandsSubmitPitchPost**
> commandsSubmitPitchPost(body33220)

Submit a pitch

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var body33220 = new NowthisServerCljs.Body33220(); // Body33220 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsSubmitPitchPost(body33220, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body33220** | [**Body33220**](Body33220.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="queriesDetailedPitchesGet"></a>
# **queriesDetailedPitchesGet**
> Response33228 queriesDetailedPitchesGet(id)

Returns pitch details

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queriesDetailedPitchesGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Response33228**](Response33228.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="queriesPitchOfProjectGet"></a>
# **queriesPitchOfProjectGet**
> Pitches queriesPitchOfProjectGet(id)

Returns the pitch that a project was created from

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queriesPitchOfProjectGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Pitches**](Pitches.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

<a name="queriesPitchesGet"></a>
# **queriesPitchesGet**
> Pitches queriesPitchesGet(opts)

Returns pitches

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.PitchesApi();

var opts = { 
  'status': "status_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queriesPitchesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**|  | [optional] 

### Return type

[**Pitches**](Pitches.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

