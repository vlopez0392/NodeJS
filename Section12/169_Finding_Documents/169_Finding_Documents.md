
### Finding Documents 
\
We are going to re-build our planets controller where we get the list of all habitable planets. This is going to use the mongo find operation. After we have done this, we will save the planets data with the upsert operation and make sure we save the planets data only once. 

Previously, we used to get the planets data in the controller from the habitable planets array: 

```js
function getAllPlanets(){
	return habitablePlanets
}
```

This function is used by the controller to display list of destination planets in the frontend selector. Because we are now using mongo, we are going to be using the planets mongoose model and we are going to use the find operation to find all the habitable planets. The find operation can be used to find all the documents meeting certain requirements or a single document. 

The find operation allows you to pass a filter to determine which planets are going to be returned. This filter takes the form of a JS object. If we pass an empty object, all documents will be returned: 

```js
async function getAllPlanets(){
	return await planets.find({});
}
```

We can also find documents matching certain properties: 

```js
async function getAllPlanets(){
	return await planets.find({
		keplerName: 'Kepler 62-f',
	});
}
```

The find operation takes a second argument, the projection argument which is a list of fields passed as an object, we would like to match and return. 

```js
async function getAllPlanets(){
	return await planets.find({
		keplerName: 'Kepler 62-f',
	}, {'keplerName':1});
}
```

When the value in the keplerName property is set to 1, this shows the keplerName field. If we set it to 0, it would exclude the field from the returned documents. We can also pass a string with the fields we want separated by spaces as follows:

```js
async function getAllPlanets(){
	return await planets.find({
		keplerName: 'Kepler 62-f',
	}, '-keplerName anotherField');
}
```

Note that the *-* symbol excludes the field in the string passed to the projection parameter. 

Because, we want to return all the planets, we simply pass an empty object with no projection to the find function as we did above. 