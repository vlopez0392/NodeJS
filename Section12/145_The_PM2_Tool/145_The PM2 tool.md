### The PM2 tool

The cluster module is a great tool to improve the performance of our servers.  However, there are many other features that are commonly asked for when running clustered servers in production. 

We have a tool built on the functionality of the cluster module that includes any functionality you will need. PM2 uses the cluster module internally and provides many added capabilities to manage the cluster such as: 

* We may want to restart our cluster processes if there is a code change with the watch & restart mode. 

* Restart processes that failed automatically with the restart strategies or graceful shutdown. 

* Monitor the status of our processes and manage the where the logs for each process go. 

PM2 is widely used in projects in NodeJS (and others) similarly to Nodemon. 