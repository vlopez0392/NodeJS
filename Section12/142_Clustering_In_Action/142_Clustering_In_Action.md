### Clustering in Action 

How can we apply clustering to our Node servers to improve performance? We will go back to our simple blocking server example and create two forks of our server which each can handle requests concurrently.

We first require the built-in cluster module as follows: 

```js
const cluster = require('cluster')
```

Recall that when we fork from a master process, the created worker processes run exactly the same code as the master code. We are able to differentiate them by using the following flag:

```js
const isMaster = cluster.isMaster;
```

Then, we can create the worker processes as follows: 

```js
if(cluster.isMaster){
	console.log("Master has been started");
	cluster.fork()
	cluster.fork()
}else{
	console.log("Worker process started");
	app.listen(3000)
}
```

The code above will create two workers to handle our HTTP requests. Note that the express server (or HTTP server) only listens when the server is being run from a worker process.

The Node HTTP server knows to divide incoming requests between the different worker processes. To verify this, we can use the process id flag from the built-in process module to verify that indeed we are handling our requests with two different processes: 

```js
console.log(`Process id: ${process.pid}`)
```

Note that the code running in the workers is the same as the code in the master process. 