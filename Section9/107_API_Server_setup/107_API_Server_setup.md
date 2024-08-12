### API server setup 

Now it's time to build a node server and a production ready API. We will be using the express framework to handle our routing. In addition, we will install nodemon to restart the server automatically anytime we modify any of our source files.

Just like the Front-end directory structure, we will keep all of our source code in a **src** directory. This is convenient since it separates our JS files from out configuration files (*package.json*). We will follow the same pattern in our server.
#### Setting the PORT environment variable

Our server needs to run on a port. Our react app runs on port 3000 by default, so we will run our server in a different port (say 8000). We can also make our port configurable so it defaults to port 8000 but also allow the server admin to specify the port to run the backend as an environment variable. We do so as follows: 

```js
const PORT = process.env.PORT || 8000
```

This line of code checks if a PORT environment variable has been defined and assign to port, otherwise use port 8000 by default.

#### HTTP server + Express 

We set our server as follows:

```js
const http = require('http')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000

const server = http.createServer(app);

server.listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}`)
});
```

We pass the express app object to the createServer function and any middleware and route handlers we attach to the app object, will respond to any requests made to the server. Express serves as a powerful listener function for our built-in node http server. 

We can separate the express related code and our server related code and better organize our server and route handing functionality.

```js
const http = require('http')
const PORT = process.env.PORT || 8000

const app = require('./app')
const server = http.createServer(app);

server.listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}`)
});
```

Starting our server this way allows requests to be made with both http and other types of connections, for instance using web sockets for real time communication applications. This structure can be used for any application size. 