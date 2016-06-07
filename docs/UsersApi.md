# NowthisServerCljs.UsersApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queriesUsersGet**](UsersApi.md#queriesUsersGet) | **GET** /queries/users | Returns users


<a name="queriesUsersGet"></a>
# **queriesUsersGet**
> Users queriesUsersGet()

Returns users

### Example
```javascript
var NowthisServerCljs = require('nowthis-server-cljs');

var apiInstance = new NowthisServerCljs.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queriesUsersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Users**](Users.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack
 - **Accept**: application/json, application/x-yaml, application/edn, application/transit+json, application/transit+msgpack

