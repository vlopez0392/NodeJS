November 17th, 2024
### Helmet.js 

When our server is ready to handle https requests, what is the next most important task we need to do as Node developers? We need to secure our server against common issues such as server configuration issues and how it handles incoming requests and with the data we send back. We don't want the response to include data that hackers may use to exploit our site. 

What is helmet.js? It is a widely used npm package that contains a collection of middleware that helps us secure our server plugging the most common holes node servers might have. 

When we add the helmet middleware to our application we are adding a chain of middlewares that protect us against many types of security issues. We can choose to enable or disable these middlewares if we so choose. 

#### Adding helmet to our application 

```js
const helmet = require('helmet');
const express = require('express');

const app = express()

app.use(helmet())
```

Calling the helmet function returns all the middleware grouped together. Where do we add the helmet middleware? Generally, for security related middleware, we want to add it at the top of the middleware chain so that every request passes through the helmet middleware, regardless of where we respond to it.

#### Helmet.js vs. No Helmet.js

If we choose not to use helmet, whenever we make a request to the server, the response headers will contain a field named *X-Powered-By: Express*. This tells anyone who makes a request to our server that it was built with the express framework to give credit to the express developers. 

This gives an edge to potential attackers because the Express framework, while robust, is not infallible and might have issues allowing the attacker to leak server data or run malicious code. With this header, we give information that can be used against us for free. With security, it is preferable to be minimal and send the minimal set of data the user needs. 

Enabling the helmet middleware hides the *X-Powered-By: Express* field in the response headers.  There are other extra headers that help our server to be secure. For instance, the Strict-Transport-Security tells our browser that requests must never be made to the API using HTTP and all HTTP requests must be converted into HTTPS requests first. 

Developers build their servers to accept HTTP and HTTPS requests and point users to the HTTPS version if users visit the HTTP version first. All future requests will be done through HTTPS the first time  the site is visited through HTTP. This is one of the many headers Helmet.js adds. 