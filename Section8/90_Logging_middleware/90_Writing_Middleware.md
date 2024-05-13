
### Writing logging middleware 

We can determine how long a request took using the following middleware: 

```js
app.use((req,res,next)=>{
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} Time: ${delta}ms`);
});
```

Note that if we don't call the *next( )* function, the request never completes because it never reaches the desired endpoint. When *next( )* is called, express' route handler will determine the type of request made and get to the endpoint. Once the request is done (GET, POST), control is returned to the line after the *next( )* function. 

In the example above, once we GET friends or a friend for example, we can compute the delta constant and determine how long the request took.