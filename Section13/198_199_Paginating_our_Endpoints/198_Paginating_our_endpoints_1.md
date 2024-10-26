### Paginating our NASA API endpoints part 1

Previously we saw how the SpaceX API paginated its response when we made a request to the launches endpoint. Now we will paginate the endpoints of the NASA API. Recall that we add pagination when we want to avoid sending large amounts of data in the responses provided by our API. 

In our mission control dashboard, to provide pagination we must pass two important pieces of information:

1. The page we want to display 
2. The limit on the number of items or documents we want to display 

One of the most common ways to do pagination is by passing a query parameter into a GET request. Basic parameters are passed into a GET request for the launches without using a GET request (body). We add query parameters as follows:

```bash 
http://localhost:8000/launches?param=value
```

Postman will automatically detect the parameters (keys) and values (values) and add them to the a table denoted as Query Params. These parameters are used to narrow down the results you get from a specific collection. 

For instance, we may provide pagination in our API passing a limit parameter and assign it to the number of launches we want to return like so:

```bash 
http://localhost:8000/launches?limit=50
```

If we have 150 launches, then 3 pages are required to respond with all of the data. We can navigate from page to page by navigating adding one more parameter with the & symbol as follows:

```bash 
http://localhost:8000/launches?limit=50&page=2
```

In express, to obtain the query parameters, we use the request query object:

```js
//Returns an object with URL parameters as keys with the respective values
const queryParams = req.query
console.log(req.query)
```

Finally, inside the launches model, we modify the get all launches function as follows:

```js
async function getAllLaunches(){
	return await launchesDB.find({}, {'__v':0, '_id':0})
	.skip()
	.limit();
}
```

The skip function allows us to go to the desired page and the limit function will determine the number of documents returned. We will make use of the query parameters page and limit and input them into the skip and limit functions respectively to perform pagination.