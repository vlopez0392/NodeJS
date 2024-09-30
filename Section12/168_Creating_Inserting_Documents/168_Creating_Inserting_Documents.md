
### Creating and Inserting documents to MongoDB

Let's populate the planets collection in MongoDB with the list of habitable planets found in the Kepler data. The code and logic for finding the planets model won't change. However, the way we store the planets data will do.

We will no longer push data to an array as we have done before since we want this data to persist forever in mongoDB. As we make changes to the model, we will be careful not to break the server code, so we are going to leave the in-memory objects while we migrate to mongo. 

This is a temporary step during development so we can do things incrementally. First, we will use the planets mongoose model to insert the planets into the planets collection. Once a habitable planet is found we can create a new document as follows: 

```js
const planets = require('./planets.mongo')

...
.on('data', async (data) => {
	if (isHabitablePlanet(data)) {
		await planets.create({
			keplerName: data.kepler_name,
		});
	}
});
...

```

After the planet data is read from our *kepler_data.csv* file and we detect a planet is habitable we use the planets mongoose model to create a new document with the planets data we want to save. That is the JSON data we save to our mongoose collection. Because the create operation is asynchronous, it is mongo the  one responsible of saving the data and not JS and the callback function must be asynchronous.

In addition, we must pass the data to the mongoose model in a way that that matches the planets schema defined previously. We will pass an object in a shape that matches our schema. However, because the *loadPlanets* function is called whenever the server is restarted or the server is started from a cluster,  duplication of documents will occur. 

To avoid this, we must perform an "upsert" operation where upsert is a combination of update and insert. An upsert is an insert however, insertion is only performed when the object we are trying to insert doesn't already exists in the database. Before performing the upsert operation, let's learn about finding documents first.

