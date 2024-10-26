### Persisting SpaceX launches 

To save the launches in our DB we can use the saveLaunch function we created earlier in the section. After we log the data, we call the saveLaunch function and save the launch constant as we iterate through the launch documents.

However, since whenever we save a Launch, we check for a target planet (Kepler exoplanet) an error will be thrown since none of the SpaceX launches target a Kepler exoplanet. To avoid this error being thrown, we first remove the required property for a target planet from our launches schema and move the target planet check out of the saveLaunch function like so:

```js
async function saveLaunch(launch){

	await launchesDB.findOneAndUpdate({
		flightNumber: launch.flightNumber,
		},launch,{
			upsert: true,
		});
	}
```

We still need to target Kepler exoplanets whenever we add a launch from the mission control dashboard, so we move the check to the schedule new launch function since the requirement that a launch has a target planet only applies there.

Finally, it is a good idea to validate the response status code made from the axios post request to the SpaceX API (if anything goes wrong): 

```js
if(response.status !== 200){
	console.log("Problem downloading launch data");
	throw new Error("Launch data download failed");
}
```

