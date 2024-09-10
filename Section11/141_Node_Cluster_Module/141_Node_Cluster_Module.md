### Node Cluster Module

Our first approach to improve Node performance is using the *Node cluster module*. The cluster module allows you to create copies of your Node process that each run your server code concurrently. 
#### Clustering 

The main node process is called the *master process*. Inside the of the cluster module we have access to the *fork( )* function.  Any time we run the fork function in the server.js file, node copies the master process into a *worker* process. 

We can call the fork function as many times we like to create many concurrent worker processes attached to the master process. The worker process do the heavy lifting and take HTTP requests, processing them and responding to them. Each worker contains the code required to respond to any request in our server. 

The master process is responsible in creating and managing the worker processes. 

#### Round Robin 

In the round robin approach, the master process sends the each incoming request to the next available worker process and/or the least loaded worker process. The worker take turns responding to requests as they come in. 

Note that not all requests are the same. Some may take longer than others. In the grand scheme of things, this approach is the simplest to implement and is one of the most fair ways of distributing work between the two workers. 

**A caveat:** On Windows, Node makes no guarantees of using the round robin approach. Node leaves the scheduling approach to Windows in order to maximize performance. It may or may not use the Round Robin approach.