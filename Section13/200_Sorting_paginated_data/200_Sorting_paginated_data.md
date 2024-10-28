### Sorting paginated data 

Our documents currently are coming back out of order. The reason is that mongo doesn't order the documents by any parameter such as the flightNumber by default. This parameter is something that decides the flightNumber launches but this is something mongo doesn't understand. 

When doing pagination, the order of our documents can matter significantly. Users expect sequential documents. To solve this problem, we may sort the results of the find operation before we return it. This is very easy to do in mongo, like so:

```js
async function getAllLaunches(skip, limit){
	return await launchesDB.find({}, {'__v':0, '_id':0})
	.sort({flightNumber:1}) //1 Sorts flights in ascending order by default
	.skip(skip)
	.limit(limit);
}
```

Now, when making the request to postman the first document returned is the Falcon One document that we expect.