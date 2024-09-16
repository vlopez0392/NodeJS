
### Setting MongoDB Atlas 

We are going to be setting up our MongoDB. In mongodb.com we might install MongoDB locally with the Community edition (server) or the Enterprise server which offers additional security features for a price. 

Running mongo locally will work great for the development part of small projects, however in real life, most of the time we work with DBs hosted in the cloud where the cloud is a server hosted somewhere on the internet. 

MongoDB Atlas is a service that hosts mongo databases on the cloud for free. It provides an environment similar to what we would see in a large node application. Once we sign up to MongoDB, we can deploy a cluster. 

A cluster of mongo instances share the load for a series of mongo queries. While mongo allows us to horizontally scale our DB, it is still a lot of work to do locally. Thus, we use Atlas to perform the scaling. 

We may choose from a few cloud providers and associated regions: 

1. AWS
2. Google Cloud 
3. Azure 

Next the cluster tier we choose is ***M0*** since it's free and provides 512 MB of storage and a shared CPU that may be running another application. Ir provides 100 max databases and 500 max concurrent connections. 

#### Principle of Least Privilege 

A subject should be given only those privileges needed to complete its tasks. Our DB users generally only need to read and write to our DB. Those are the least privilege roles that we want to assign to our users. 

#### Network Access 

We may choose the IP addresses allowed to connect to our MongoDB. We can select specifically the IP addresses of the servers that are hosting our node project. That is the only IP address that is going to need to access our DB. All access will be going through our API. 

In development, we might need to access the DB from many machines, so we can also allow access from anywhere. 

