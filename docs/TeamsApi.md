# NowthisServerCljs.TeamsApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queriesTeamsGet**](TeamsApi.md#queriesTeamsGet) | **GET** /queries/teams | Returns teams


<a name="queriesTeamsGet"></a>
# **queriesTeamsGet**
> Teams queriesTeamsGet()

Returns teams

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.TeamsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queriesTeamsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Teams**](Teams.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

