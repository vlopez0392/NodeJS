### Middleware 

Middleware allows you to add features to your server by working with your incoming request and response coming out of your server. Middleware is a very important topic to understand to Express that it's really worth taking the time to understand it and making our own middleware. 

With that we can not only learn how express works and also many of the other frameworks that follow the same patterns as express. 

Middleware are special functions that run between or in the middle of the request coming in and the response coming out of the API. If we break down our express application, we see that it is a series of middleware functions that execute in order. When a request comes in, it flows through our middleware sequentially until the response is set and returned to the client. 

Middleware functions have the following pattern: 

```js
app.use(function(req,res,next){
	//Your middleware here
})
```

Our callback function has access to the request and response objects and can work with them, use the data and take some action before it reaches the usual route handlers. Actions such as validation, logging, authorization are possible when using middleware. 

The *next()* function (passed as the third parameter) allows to call the next middleware. When a request comes to the API, it hits the first registered middleware. Once the first middleware has done executing, it calls the next function and the next middleware starts executing. Then, the next middleware can perform some action, and go to the next downstream middleware or endpoint or route matched to the user's request.

If an endpoint (last piece of middleware) is reached, the response body is set and returns to the previous middleware and so on until our response is ready to be sent back to the client. The *next*function is responsible for the order of execution of our middleware. 

