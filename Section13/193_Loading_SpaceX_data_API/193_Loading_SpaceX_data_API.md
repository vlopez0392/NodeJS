
### Loading SpaceX data in our API 

We now have a general idea how to query the SpaceX API to get the information we need. Now, we want to populate the DB with the historical data fetched from the SpaceX API. We will follow a similar pattern to how we load the planets data when we start our server. 

#### Getting SpaceX data with axios 

We use the axios package to get the SpaceX data. Then, we call the axios post function to query the spaceX API as we did previously, like so. 

```js
async function loadLaunchData(){
	console.log("Downloading launch data...");
	await axios.post(SPACEX_API_URL, {
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
					path: 'payload',
					select: {
						customers: 1
					}
				}
			]
		}
	});
}
```

Notice that we added another path to the payload to get the customer data for each launch.