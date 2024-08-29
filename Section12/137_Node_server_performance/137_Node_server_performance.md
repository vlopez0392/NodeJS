
### Node server performance

We will be focusing on how to improve the performance of our node application. First, let's review the Node fundamentals. 

Node servers normally take in requests and process them in the event loop, sending back the response to the browser. This all happens in one thread. The node server, JS code and the server we are running are all in one thread. 

This implies that one line of code is run at the time processing one request at any point in time. This event loop is generally pretty good at juggling multiple requests and avoiding blocks. 
#### Node Model Internals 

Node makes use of the OS thread pool by passing IO tasks that take a long time to complete. Long running tasks are passed to the thread pool such that no blocking occurs. 

For instance, if we have a node server that handles a request for reading and writing to a file on our machine or another server, then node passes that task to the TP such that our JS code doesn't block even thought that JS code is running in a single thread. 

In the vast majority of node applications, the above model works well. Node is ideal when working with non-blocking operations. For example, requesting to some server hosted somewhere in the internet. However, we have some code that requires a lot of processing power and blocks the event loop (Not File IO or Networking operations commonly handled efficiently by node).

How do we handle operations that are expensive in JS in a single thread? We can optimize the performance of our node web server!