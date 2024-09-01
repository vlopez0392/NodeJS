### Maximizing Cluster Performance

Even with the improvements we made with clustering, if we try to open more tabs and try to get more than two timer endpoints concurrently, blocking will occur as shown in the network tab in the developer tools. 

Using clustering is not a silver bullet. We are limited by the amount of processes we can execute in parallel. Currently in our cluster we forked two workers and thus we can handle two requests simultaneously. 

Do we increase the worker processes? It could work but this approach has its limitations. In general, we want to limit our workers to the number of processors or CPUs in the PC or server. 

Logical cores on the other hand use fancy logic to run multiple threads on a single physical core. To maximize server performance, we want to take the number of logical cores and create the same number of worker processes. 

This is shown below: 

```js
if(cluster.isMaster){
	console.log("Master has been started");
	NUM_WORKERS = os.cpus().length;

	for(let i = 0; i < NUM_WORKERS; i++){
		console.log(`Created ${i} worker`)
		cluster.fork();
	}
}else{
	console.log("Worker process started");
	app.listen(3000);
}
```

The above code creates 8 logical cores (in our machine) and thus up to 8 workers/requests can be made concurrently.