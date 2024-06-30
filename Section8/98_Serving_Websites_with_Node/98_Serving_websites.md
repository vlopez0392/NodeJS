### Serving Websites 

One very common scenario when working with Node servers is serving front-end web applications in addition to an API. Static HTML websites, React and Angular files can also be served. 

We can serve static files using the express static files middleware: 

```js
app.use('/site', express.static('public'))
```

We serve any static files in the public directory with out server with the code above. Note that the the path we pass to the static file handling middleware is relative to the directory where we launch the node application. For instance, if we launch the server from any other directory which doesn't contain the public directory, then express won't be able to find the static files we want to serve. 

We solve this problem as we did previously by using the global built-in variable __ *dirname* as follows: 

```js
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
```

Note that we are querying the server for an html file for the browser to render. This practice is not RESTful since we are not querying for collections of data in our endpoint. Since we are serving files, it is acceptable not to be RESTful. 

However, if we expect our node server to handle thousands of users, oftentimes is better to serve our files from a CDN such as Akamai or Amazon Cloudfront. These companies will host all your static files in servers in many different locations to maximize delivery to users near these locations. 

For medium-sized applications, it is acceptable to use Node and Express to serve static files. 