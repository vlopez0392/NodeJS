
### Auto increment in MongoDB

Currently, we are able to save launches to our DB that target valid habitable planets. We can also get all of the launches in the DB. Now, we are able to schedule or add new launches as we did previously with the launches map. 

Recall that when we schedule a new launch, we want to increase the latest flight number by one and save it to our DB. With our in-memory approach, we have two pieces of state, the *launches map* and the *latest flight number* constant. To make our API truly stateless, we need to remove these two states and transfer them to the DB. 

We are persisting our data to the mongoDB such that the node process doesn't need to track anything in memory.
#### Node model 

If we are running our server in a cluster, we want to handle our requests in any node process and get the exact same behavior with the same states. We accomplish this by getting any states needed by the requests from an external DB (outside the node processes). 

Unfortunately, in mongoDB keeping track of states such as the *latestFlightNumber* is harder to accomplish compared to SQL. While mongoDB allows us to flexibly work with JSON data, scale our data horizontally and giving us flexible schemas, keeping automatic track of states that increment with each request is something we must handle ourselves.

For instance, in SQL (all flavors ) we have the *AUTO_INCREMENT*  feature. In the schema below we create a table of animals with names and id as column names.  
```SQL
CREATE TABLE animals(
	id MEDIUM NOT NULL AUTO_INCREMENT
	name CHAR(30) NOT NULL
	PRIMARY KEY (id)
);
```

With the *AUTO_INCREMENT* feature, whenever we create a new animal, the *id* is automatically incremented. SQL manages this id value and what it's value should be. In Postgres, we use the *SERIAL* keyword to achieve this.  In MongoDB, there are many ways to do this, unfortunately no standardized method or keyword exists and we must handle the increment ourselves. 

#### The mongoDB way to auto-increment 

When running a cluster of mongoDBs, our server may talk to several many mongoDB instances to handle the requests and share the load. Which DB tracks the *latest flight number* constant? Which stores the state? Maybe all the instances keep track but we need to keep them in sync which is added complexity to our API.

The mongoDB approach skips the need for the auto-increment feature and still keeps a performant API. We will solve this problem in the next lecture.