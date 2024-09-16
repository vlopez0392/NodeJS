
### Comparing NoSQL to SQL 

There's two main categories of DB we use when working with servers. We have SQL DB and NoSQL DB. To compare the differences between these categories we will explore Postgres SQL for SQL DB and MongoDB for NoSQL DB. 

Note that whatever we discuss applies to any SQL DB whether is Postgres, SQL server or Oracle. On the other hand, NoSQL databases tend to be more specialized and vary a lot more between each other. 

#### Postgres vs MongoDB 

The following table summarizes the differences between Postgres and MongoDB: 

|                |       Postgres       |      MongoDB       |
| :------------: | :------------------: | :----------------: |
|      Type      |       Document       |     Relational     |
| Organized into |     Collections      |       Tables       |
| Query Language |        NoSQL         |        SQL         |
|    Scaling     | Primarily Horizontal | Primarily Vertical |

##### Type

MongoDB is a document DB that contains documents resembling JSON objects whose keys that are strings and values that can be objects, strings or dates. On the other hand, Postgres falls into the relational model which is followed by all relational DBs. 

##### Organization 

 In the relational model (Postgres) data is organized into tables which have rows and columns and the tables are related to each other in some way. Relational models shine when determining the relationship between tables of data. Data is also split apart as much as possible. We might have a table that contains a list of friends and their addresses by city. The cities would be in a table while there would be a separate table for the friends. 

In some NoSQL DBs like MongoDB, data is organized into collections of documents. In other NoSQL DBs, data could be organized into collections of objects and key-value pairs. It depends on the DB but the overall idea is that documents contain all the related data for things like planets or collections of friends in a single place. NoSQL DBs are designed to be queried more quickly.
\
##### Query Language

SQL is the query language that all SQL DBs share. The query language is similar to a programming language we use to query data from a database. All SQL DBs share similar query languages. 

NoSQL often have their own specialized syntax of talking to the DB and to query for certain types of data. NoSQL DBs are specialized for certain tasks and their languages are customized for specifically for what the DB was designed for. MongoDB for instance was designed work easily with documents and allow horizontal scalability. 

##### Scalability 

Recall that vertical scaling is when we improve our hardware to our servers without changing any code. On the other hand, with horizontal scaling we add more servers (not necessarily all powerful) which will share part of the work required to serve the client. The requests are shared within all the servers. 

DBs work in a similar way. We divide the queries to the DBs all living in different servers to share the workload such that a response is sent more quickly. MongoDB is designed to work with horizontally scaling with multiple servers sharing with the workload. Many instances of the MongoDB process running side by side. 

Most SQL work with a vertical scaling approach. Nowadays SQL is learning from NoSQL to scale SQL DBs horizontally. NoSQL is also learning from SQL by learning to increase query speed and security. 

Both approaches are constantly evolving and are optimal for solving different problems. Which DB should we use for our NASA project? 





