
We modify the add new launch function in the launches model as follows to use the save launch and get latest flight number functionality: 

```js
async function scheduleNewLaunch(launch){
	const newFlightNumber = await getLatestFlightNumber() + 1;
	
	const newLaunch = Object.assign(launch, {
		success: true,
		upcoming: true,
		customers: ['NASA', 'Vick'],
		flightNumber: newFlightNumber,
	});

	await saveLaunch(newLaunch);
}
```

Some properties such as the success, upcoming and customers are back-end exclusive properties so we assign them here directly when scheduling a new launch. Finally, as we have done previously, we modify the corresponding controller function as follows:

```js
async function httpAddNewLaunch(req, res){
	const launch = req.body;

	//Bad-request from client if client input launch data is missing
	if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
		return res.status(400).json({error: "Missing required launch property"
		});
}

	launch.launchDate = new Date(launch.launchDate);
	if(isNaN(launch.launchDate)){
		return res.status(400).json({error:"Invalid launch date"
	});
	}

	await scheduleNewLaunch(launch)
	return res.status(201).json(launch)
}
```

