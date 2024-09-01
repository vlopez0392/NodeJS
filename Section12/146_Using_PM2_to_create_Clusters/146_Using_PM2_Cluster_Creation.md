### Using PM2 to create clusters 

PM2 stands for Process Manager 2. To install it, we use npm and it is recommended to install it as a global module with the -g flag:

```bash
npm install pm2 -g
```

PM2 is now installed as a global module and we can use it directly to manage our server processes. The pm2 command takes different commands we can use to manage our server processes. For instance, to start our clusters: 

```bash 
pm2 start server.js 
```

PM2 has started our server in the background. We can type other commands in the terminal and the server will continue running. Next, we can list the processes managed by PM2 with the list command.

```bash 
pm2 list
```

We can stop our server with the stop command with pid of the process or the name as follows:

```bash 
pm2 stop server
```

Next, if we wish to terminate a process and remove it from the list of processes managed by PM2, we use the delete command:


```bash 
pm2 delete server
```

#### PM2 built-in clustering 

With PM2, we no longer need to use the cluster module directly. For instance, we don't need to call the fork function. To start a cluster in PM2, we run our pm2 start command with *-i* flag where *i* stands for instance with the number of worker processes 
or with the *max* flag to start the max amount of worker to take full advantage of the number of CPUs in our machines.

```bash 
pm2 start server.js -i 2
```

```bash 
pm2 start server.js -i max
```

To see the logs in our server we can use the *logs* command to get a real-time view of what is being logged in our server now.  The -lines flag with 200 shows the last 200 logs. For instance, we can log when our master process was restarted. PM2 is able to save these logs to a file if required. This way we avoid overwhelming the server with large log files.

```bash 
pm2 logs -lines 200 
```

Finally, we can restart our server as follows: 

```bash 
pm2 restart server.js
```