### Schemas References and ACID transactions 

To decide on our DB, we need to take a closer look to the data we will be storing. 
#### MongoDB

MongoDB is best for unstructured data where large amounts of data are stored and keeping the data structured is less important. For instance, whenever the structure of our data changes often. 

MongoDB is great when the decisions we make and extrapolate from the data are more important than making sure that the data is structured perfectly. 

#### SQL 

On the other hand, SQL works best when the structure of the data is known and we want to enforce that structure. For instance, in banking systems it is important to enforce the rules of the system regarding things such as CC info. The way CC numbers are stored isn't going to change very often. 

##### ACID transactions 

ACID (Atomicity, Consistency, Isolation, Durability) transactions like CRUD operations in SQL DBs are very performant and guarantee data validity despite errors. NoSQL DBs such as mongoDB do not guarantee this data validity after a series of operations (writes and reads). Only part of the operations might succeed. 

SQL on the other hand allows you to group these series of operations into powerful transactions and guarantee that data will be written all at once or not at all.

##### References and Schemas

Regarding schemas, SQL can guarantee that a target launch is an exoplanet marked as habitable in the planets model by using references. A target exoplanet that is not habitable would be rejected by the SQL DB. References or foreign keys validate that we are referencing an object exists in that collection. 

However, our data is likely to change and the schemaless approach of mongoDB might be more flexible when it comes to changing the models of our data in the future. 

#### NASA application 

The data stored in the objects in our code are fairly basic and can be stored in either SQL or NoSQL DBs equally effectively. The main difference is the relationships between the different types of data. Our launch relates to a planet in our list of habitable planets. This can be modeled very well by SQL. 

In SQL we would have the launch target referencing a planet in the planets model. The relationship would be that a launch has a target planet. The planets model is very simple and stores the planets as strings which represent the name of the planet. We are not storing related info around each planet too much and we can store the planets data in any DB very effectively. \

For our launches use case the guarantees transactions from SQL provide are not as important. Therefore, we can consider the guarantees provided by mongoDB as good enough. In addition, we get quicker query and write times to the DB  and a DB that's easier to scale horizontally with multiple mongoDB instances. 