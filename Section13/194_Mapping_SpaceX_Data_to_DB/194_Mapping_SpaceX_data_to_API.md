
### Mapping SpaceX data to the API 

Previously, we used the axios library to query the SpaceX API by making a post request. The returned response object contains all the data we need to map it to our DB. After making the post request, axios puts the body of the response in the data property of the response object as shown below:

```js
const launchDocsData = response.data.docs;
```

Notice that when we make a query to the SpaceX API query endpoint, the data we need is on the array in the docs property. This will return all of the launches with all of the properties. Since we don't need all of the properties, we will go through each launch in the launch data and map it to a launch object that can be saved to our DB. 

We define the *loadLaunchData( )* function in the launches model as follows:

```js
async function loadLaunchData(){
	console.log("Downloading launch data...");
	const response = await axios.post(SPACEX_API_URL, {
		query:{},
		options:{
			populate:[
						{
							path:'rocket',
							select:{
								name:1
							}
						},
						{
							path: 'payloads',
							select: {
								customers: 1
							}
						}
					]
				},
		},
		{
			headers: {'Accept-Encoding': 'text/html: charset=UTF-8'}
		},
);

const launchDocsData = response.data.docs;
	for(let i = 0 ; i < launchDocsData.length; i++){
	//Allows us to convert the list of customers into a single Array
		const payloads = launchDocsData[i]['payloads'];
		const customers = payloads.flatMap((payload)=>{
			return payload['customers'];
		});

	const launch = {
		flightNumber: launchDocsData[i]['flight_number'],
		mission: launchDocsData[i]['name'],
		rocket: launchDocsData[i]['rocket']['name'],
		launchDate: launchDocsData[i]['date_local'],
		upcoming: launchDocsData[i]['upcoming'],
		success: launchDocsData[i]['success'],
		customers,
	}
		console.log(`${launch.flightNumber}, ${launch.mission}`);
}
```

When we load the launches data from the spaceX API we get a paginated response, that is we only  get the data of the 10 first SpaceX launches. In the next video we will see how pagination works!