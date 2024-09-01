### Managing live clusters with PM2

When we are in development we don't use PM2 so much. Mostly we use it to configuring it and testing it periodically to check that our cluster works after any changes. 

PM2 is quite useful in production when we have a live cluster. PM2 is able to perform actions that would be hard to achieve using only the cluster module. 

We start our server as usual but we use the *-l* flag  to specify the name of a file to send our logs to. Then: 

```bash 
pm2 start server.js -l logs.txt -i max 
```

We can get more detailed info about each process by using the show command and the pid of the process: 

```bash 
pm2 show 0
```

Next, suppose we identify a problem with a process with a certain pid. We can stop that process temporarily and see what effect it has on the rest of the cluster. We do this as follows: 

```bash
pm2 stop 4
```

We can restart processes individually as well: 

```bash
pm2 start 4
```

To finalize our overview of PM2, we can use the *monit*  command to get a dashboard in our terminal to see the status of each process as well their memory consumption and CPU usage as they handle requests. 