
### Referential Integrity 

We now are able to list all the launches that we have saved in mongo, however we are also able to target planets that are not habitable. Currently, we can save launches that target any String, regardless if it's a habitable planet or not.

This wouldn't be a problem in a SQL database. One of the great things about SQL is a concept called *referential integrity*. When we reference a value from one table in another table using a foreign key, SQL will make sure that the value of the table you are referencing currently exists. Otherwise SQL will prevent you from referencing a value that isn't in the DB. 

When we reference a target planet we want to make sure the planet has been marked as officially habitable in the planets model and currently exists in the DB. Otherwise, the API must tell us we are trying to create an invalid launch.

#### MongoDB and referential integrity 

MongoDB isn't as powerful as SQL when enforcing referential integrity. If we want to validate that the launches we are scheduling target habitable planets, we can take several approaches. The simplest approach is to add some validation before we update the launches DB with the *saveLaunch* function in our launches model. 

```js
const launchesDB = require('./launches.mongo');
const planets = require('./planets.mongo');

async function saveLaunch(launch){
	const planet = await planets.findOne({
		keplerName: launch.target,
	});
	
	if(!planet){
		throw new Error('No matching planet found!')
	}

	await launchesDB.updateOne({
		flightNumber: launch.flightNumber,
	},launch,{
		upsert: true,
	});
}
```

We use the *planets* mongoose model to find the corresponding target planet and verify it exists. Notice we use the mongoose model instead of the MVC model, however in the data access layer, we want to talk to files directly in the data storage (one layer below in the DB). This is such that that the web of dependencies between each of our modules and files doesn't get too complex. The *model.js* files will talk to the *mongo.js* files only to get the data. 

Since we are in the data access layer, we don't have access to the request and response objects in the controllers, thus if no habitable planet is found with the *findOne* function, then we either throw an Error or return an invalid object such as the null object. We do the former in the code snippet above. 

From the NodeJS best practices GitHub page, we see that throwing a built-in Error object instead of a custom type since this complicates the error handling logic and the interoperability between modules. When throwing errors we want to call the new keyword to make it clear that we are creating a new instance of the Error object. 