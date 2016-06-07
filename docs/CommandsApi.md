# NowthisServerCljs.CommandsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commandsResetDbPost**](CommandsApi.md#commandsResetDbPost) | **POST** /commands/reset-db | Resets and initializes the database


<a name="commandsResetDbPost"></a>
# **commandsResetDbPost**
> commandsResetDbPost()

Resets and initializes the database

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.CommandsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commandsResetDbPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

