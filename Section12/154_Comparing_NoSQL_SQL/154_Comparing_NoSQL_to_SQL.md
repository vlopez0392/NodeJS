
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

 In the relational model (Postgres) data is organized into tables which have rows and columns and the tables are related to each other in some way. Relational models shine when determining the relationship between tables of data. 

In some NoSQL DBs, data is organized into collections of documents. In other NoSQL DBs, data could be organized into collections of objects and key-value pairs. It depends on the DB but the overall idea is that documents contain all the related data for things like planets or collections of friends in a single place. 





