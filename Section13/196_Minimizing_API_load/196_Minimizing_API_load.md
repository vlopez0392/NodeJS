
### Minimizing API load 

We turned off pagination and we are getting all the spaceX launches, however the request we are making is very costly since many launches may be sent to the URL we make the request to. The server in the URL will have to do a lot of work transferring a lot of data to us. This adds load to the SpaceX data API and also to our server every time we request that data.

We want to be a good consumer of that API and only make one request (first time we request the data). After that single request, the data must live in our DB. There's a few ways to do this:

1. Before we download the launch data, we check if one our spaceX launches already exists in our DB. We can check if the first flight (FalconSat mission) has already been saved in our DB. If it exists in our DB, we can assume the rest of the launches are also present in the DB.  For now, lets add a check to only download data that we don't already have: 

```js
async function findLaunch(filter){
	return await launchesDB.findOne(filter)
}
```

Next, we use this function to check if the launch with flight number 1 exists in the DB as follows in the loadLaunchData function we defined previously: 

```js

const firstLaunch = await findLaunch({
	flightNumber: 1,
	rocket: 'Falcon 1',
	mission: 'FalconSat'
});

if(firstLaunch){
	console.log("Launch data was already loaded");
	return
}
```

