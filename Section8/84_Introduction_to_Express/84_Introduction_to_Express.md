
### Introduction to Express 

We create an express server as follows: 

```js
const express = require('express');
const app = express();
const PORT = 3000; 

app.listen(PORT, ()=>{
	console.log(`Listening on ${PORT}`);
});
```

Note that Node is made to write servers and if we name our file *server.js*, we do not need to write an *npm start*  script in the package.json file. 

The power of Express comes from how easy routing is made. Express allows us to use the app object to respond to requests as follows:

```js
app.get('/messages', (req, res)=>{
	res.send('<ul><li>Hello Albert!</li></ul>')
})
```

We first specify a method (get in ur case) and then the first parameter is the path to the route or endpoint. The second parameter is the route handler function as callback to handle the request. Notice that the *req* and *res* objects are different than those in the Node HTTP server. For example, the *res.send()* function available in the *res* object allows to send data in the response.

Express automatically looks for all the registered route handlers and when it finds a match, it runs the callback we passed in. The response's Content-Type header is automatically inferred based on the parameter of the *res.send()* function.
