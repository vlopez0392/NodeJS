###  Worker threads

Worker threads are a built-in module that enables the use of threads to execute JS in parallel. Worker threads are useful for performing CPU intensive JS operations. Those operations that would otherwise block our code. 

Worker threads do not change how Node works (single threaded event loop at the core) but add functionality such that JS is closer to a multi-threaded language. JS as a language does not have multi-threaded features. 

What is the difference between traditional multi-threading and worker threads in Node? What do worker threads do? 

#### V8 isolates

V8 isolates are isolated instances of the V8 engine similar to sandboxes that run JS code independent from other JS code. Worker threads use these isolates to create new threads that can execute our JS code side by side.

Worker threads just like clusters help us take advantage of the multiple CPUs in our machine. Worker threads are similar to the cluster module but work differently because clusters use processes and worker threads use isolates. 

Our cluster module allows us to start a server that creates a master process and we can call the *fork( )* function to create child processes which can respond to requests in our server. 

On the other hand, with worker threads when we run our JS file, we create the main thread and this main thread can use a Worker constructor to create a new Worker thread or object. The flow to create worker thread and worker processes is very similar, however, with Worker threads we have a single process by taking advantage of the V8 isolates. 

### Differences between Worker threads and Clustering

The worker threads module doesn't have the built-in functionality to share requests coming into a running server. This functionality is specific to the cluster module. Thus, we need to implement this distribution of work ourselves. 

In addition, Worker threads may share memory between each other. 

Worker threads approach is not as robust as clustering, so we should primarily consider clustering before considering worker threads.