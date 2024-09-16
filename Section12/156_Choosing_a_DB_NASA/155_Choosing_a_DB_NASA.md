
### Choosing a DB for our NASA project 

Objectives: 

1. Data needs to persist between restarts: Whenever we restart our server, we want the data to persist so we don't lose launched schedules when we restart our server or make changes to our code. 

2. API needs to be stateless for cluster mode. When we run many instances of our server, we need our Node code to be stateless. A request coming in needs only to depend on the data in the request. Anything else needs to come from a database or external service. 

#### Models

In our models, our DB needs to support a list of launches where a launch contains a few different key properties such as numbers, strings, dates and arrays. We also have a list of potentially habitable planet names. 

A relationship exists between a launch target and a planet name (launch target = planet name). Aside from this, there are no complex relationships between data. The data is standalone.

Finally, the flight number tells us the latest flight number and needs to increase by 1 each time a new launch is made. The DB must be clever to keep track of this flight number as we create launches. 

#### Data access 

Our launches are currently stored in a map where each launch  is accessed by unique flight number. For each launch, the flight number needs to be unique. For the planets, data is accessed in sequence to list the values of each planet name. As we create new launches, the latestFlightNumber is accessed and incremented and assigned to the new launch object. 

Now that we have an overview of the tracked data and what the requirements are for the DB, let's compare SQL with MongoDB and choose which one suits better our NASA project. 

