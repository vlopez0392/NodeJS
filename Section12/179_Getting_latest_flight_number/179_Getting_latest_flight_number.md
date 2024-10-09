
### Getting the latest flight number 

We need to keep track of our latest flight number and increment it by one every time we schedule a new flight or mission launch. How to do this? One way to do so is to store our launches as usual and obtain the latest flight number from the latest scheduled launch. We define the following function:

```js
async getLatestFlightNumber(
	const latestLaunch = await launchesDB
		.findOne()
		.sort('-flightNumber');

	if(!latestLaunch){
		return DEFAULT_FLIGHT_NUMBER;
	}

	return latestLaunch.flightNumber;
);
```

The *getLatestFlightNumber( )*  function must be async because it is going to be querying mongoDB. We need to find a single launch with the greatest flight number. To find this document, we sort the documents by a property which we pass as a string, in our case *flightNumber* and use the negative symbol "-" to sort in decreasing order. This way we find the document with the latest flight number. Without the negative sign, the sort function, by default, sorts the documents in ascending order.  

If a launch has not been added to the DB, then we return a default flight number stored in the DEFAULT_FLIGHT_NUMBER constant. This is not an issue since 