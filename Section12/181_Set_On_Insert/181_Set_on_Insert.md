
### Set on insert 

When we make a post request to our launches endpoint, the following is returned if the post request succeeds: 

```json
{
	"flightNumber": 101,
	"customers": [
		"NASA",
		"Vick"
	],
	"launchDate": "2030-03-09T16:00:00.000Z",
	"mission": "ZTM-155",
	"rocket": "ZTM Experimental IS1",
	"success": true,
	"target": "Kepler-62 f",
	"upcoming": true,
	$setOnInsert: {
		"__v": 0,
	}
}
```

What is the set on insert property? What is it doing in our API response? In our launches controller, when we set the response, we set it to the launch data coming from the request body which doesn't include the set on insert property. 

This means that the schedule new launch function in the launches model is mutating the launches model. It is changing the properties on it and adding the data that mongoose gets back from the DB to the passed launch object. Upon logging the launch object after scheduling it, we see that the set on insert property is added to the launch object.

#### Mongoose $setOnInsert

Mongoose includes a feature where when you pass it a document you want to update, mongoose not only saves the updates in mongoDB but also updates the launch object in memory. 

Set on insert is used by mongo to set the properties of our object when we do an upsert operation. It is an internal detail of how mongo works that we are not using directly while using mongoose. 

This property is set by mongo. In general we want to avoid this in our API since we want to give the client the minimal amount of data over the network to complete the request and also to avoid leaking data to hackers who might benefit from knowing the DB we use or how we set our response object which is given away by returning the set on insert property. 

To avoid the above behavior, we modify the saveLaunch function as follows:

```js
const launchesDB = require('./launches.mongo');

async function saveLaunch(launch){
		await launchesDB.findOneAndUpdate({
		flightNumber: launch.flightNumber,
	},launch,{
		upsert: true,
	});
}
```

The find one and update function is very similar to the update one however it will only return the properties we set in our update.