### The upsert operation 

Let's populate the planets collection. In our planets model, when we load the planets data, we could call the create function to insert the planets documents into our planets collection, but since we only want to add the planets if they don't already exist in our DB since the loadPlanetsData function can be called multiple times. 

Upserts only insert data into the collection if the documents don't exist, otherwise the document is updated with whatever we pass to the upsert function. The upsert is as follows: 

```js
...
.on('data', async (data) => {
	if (isHabitablePlanet(data)) {
		await planets.updateOne({
		keplerName: data.kepler_name,
		});
	}
})
...
```

The updateOne function, similarly to the find function takes a filter as its first argument to find to match all the Kepler names from the *kepler_data.csv* file and insert them if the don't exist. If the planets don't already exist, then the object we pass in the second argument is what we want to insert otherwise we update the object. 

```js
...
.on('data', async (data) => {
	if (isHabitablePlanet(data)) {
		await planets.updateOne({
			keplerName: data.kepler_name,
		}, {
			keplerName: data.kepler_name,
		}, {
			upsert: true,
		});
	}
})
...
```

By default, the above will only update. The third argument, sets upsert to true and the planets will only be added if they don't already exist. Otherwise, no changes will occur.

