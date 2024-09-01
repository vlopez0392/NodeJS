### Load balancing

Round Robin is one strategy to perform load balancing. Load balancing is such an important topic when building backends. Load balancing is a way of distributing a set of tasks over a set of resources.

For example, dividing which requests will be handle by which processes in the server. When load balancing, we make use of a load balancer to determine how our requests should be divided among the different processes handling them. 

The load balancer takes requests from users and distributes them such that the responsibility of handling those requests is shared by different processes, servers or applications. This applies when running multiple processes in parallel each handling the same type of requests using the same routes. 

#### Horizontal scaling 

Rather than vertical scaling where we add more computing resources (e.g. faster CPUs), horizontal scaling scales our application to handle more requests faster by adding more servers or more worker processes. 

The two most common strategies for load balancing are: 

* Round robin: Used by NodeJS and assigns the first task to the first server, the second task to the second server and so on.

* Randomized static distribution: Each incoming request is assigned randomly to a free server if we have no prior knowledge of the number of tasks in advance. Otherwise is more effective to calculate a random permutation in advance. 