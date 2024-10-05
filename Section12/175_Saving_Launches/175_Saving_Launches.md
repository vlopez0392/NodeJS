### Saving Launches 

Now, let us use mongoose to persist our Launches data to the mongoDB cluster. First, we will add the capability to add a launch such as the hard-coded launch example to mongoDB.  

We will connect our launches schema to the corresponding collection in mongoDB through the launches model. After importing the launches mongoose model to the launches model file, we define the following function to save our launches: 

```js
const launchesDB = require('./launches.mongo');

async function saveLaunch(launch){
	await launchesDB.updateOne({
		flightNumber: launch.flightNumber,
	},launch,{
		upsert: true,
	});
}
```

If a launch, with a flight number already exists, we only want to update the values (mission, rocket, etc) of the launch with that ID we pass to the save function.  We do this with the upsert function updateOne as we did previously. 