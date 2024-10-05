
### Listing all launches 

The *getAllLaunches* function should list all of the launches we have persisted in our DB. This is the function we call in the launches router when we get the http get all launches controller function. Previously, we got all launches as follows: 

```js 
function getAllLaunches(){
	return Array.from(launches.values()); //From launches map 
}
```

Now, we modify the function above to use the launches mongoose model and find all the documents containing a launch like so: 

```js
async function getAllLaunches(){
	return await launchesDatabase.find({}, {'__v':0, '_id':0});
}
```

Similarly as we did in the planets model, we modify the *httpGetAllLaunches( )* function as follows: 

```js
async function httpGetAllLaunches(req, res){
	res.status(200).json(await getAllLaunches())
}
```