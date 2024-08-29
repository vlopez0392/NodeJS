
### Running Multiple Node Processes

In general, when solving difficult problems the best way to approach them is to divide this difficult problem into smaller problems and solve them first. 

Similarly when a server takes many requests or is overloaded with too much work, we want to divide that load and spread it. How do we do this? We know that the Node JS process runs in a single thread. Node and JS don't follow the multiple threading approach that Java and C++ follow. 

In Node, however, we run multiple Node processes concurrently and share the load amongst themselves. 

#### Concurrent Node Model 

With servers, the work we take in is in the form of requests. Instead of handling each request in a single Node Js server in one node process we can instead spread those requests in multiple Node Js processes and respond in the same way. 

Each process contains a copy that run concurrently and multiple requests can be handled by each process separately. In the case we have more requests than processes, then we still can distribute the request load equally and more effectively amongst the processes instead of relying on a single process. 

With this model, we can make the most of all the CPU cores and resources of our machine even though we are still running a single threaded node application.