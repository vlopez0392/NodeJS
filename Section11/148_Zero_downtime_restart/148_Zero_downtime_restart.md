
In the case where we want to make live changes to our code without affecting our users, then we can perform those changes and use the reload command such that at least one process is kept running at all times. 

```bash
pm2 reload server.js
```

This is the best way to update servers that are live and serving time sensitive applications to users.

