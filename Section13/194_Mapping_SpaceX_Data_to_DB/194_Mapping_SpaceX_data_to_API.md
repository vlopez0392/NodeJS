
### Mapping SpaceX data to the API 

Previously, we used the axios library to query the SpaceX API by making a post request. The returned response object contains all the data we need to map it to our DB. After making the post request, axios puts the body of the response in the data property of the response object as shown below:

```js
const launchDocsData = response.data.docs;
```

Notice that when we make a query to the SpaceX API query endpoint, the data we need is on the array in the docs property. This will return all of the launches with all of the properties. Since we don't need all of the properties, we will go through each launch in the launch data and map it to a launch object that can be saved to our DB. 



