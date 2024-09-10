
### Worker threads in action 

How do we use worker threads? 

```js
const {Worker, isMainThread} = require('worker_threads')
```

The *Worker* constructor allows us to create a new Worker thread object. We can also check if we are currently in the main thread with the *isMainThread* value. The Worker constructor takes a string parameter that points to some file that contains JS code to be executed in that worker. 

We can pass the current JS file filepath as follows:

```js
new Worker(__filename)
```

The *__ filename* available in the node modules points to the current JS file. We only want to create a worker if we are in the main thread like so: 

```js
if(isMainThread){
	new Worker(__filename);
	new Worker(__filename);
}else{
	console.log('Worker')
}
```

Note that worker threads belong to the same process as the main thread, so if we log the process id of each worker, we expect to see the same process id as the main thread: 

```js
if(isMainThread){
	console.log(`Main thread Process id is: ${process.pid}`)
	new Worker(__filename);
	new Worker(__filename);
}else{
	console.log(`Worker thread Process id is: ${process.pid}`)
}
```

We can exemplify the parallelism functionality of each worker thread by sorting different arrays of numbers concurrently. Recall that sorting is a blocking operation when sorting large arrays, thus we can use worker threads to make use of the multiple processors in our machines and sort different arrays each worker concurrently. 

```js
if(isMainThread){
	console.log(`Main thread Process id is: ${process.pid}`)
	new Worker(__filename, 
				{
				workerData: [4,3,6,7]
				});
		new Worker(__filename, 
				{
				workerData: [1,9,0,2]
				});
}else{
	console.log(`Worker thread Process id is: ${process.pid}`);
	console.log(`Worker data ${workerData} sorted is   ${workerData.sort()}`);
}
```

We do so by passing the distinct arrays in the *workerData* property to the constructor of each Worker object.  When we run the program, each of our two worker threads perform the sort operation concurrently in each worker without blocking by taking advantage of the multiple CPUs in our machine. This all happens in a single process as discussed previously.