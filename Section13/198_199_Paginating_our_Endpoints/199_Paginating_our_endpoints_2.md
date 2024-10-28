### Paginating our NASA API endpoints part 2

We want any endpoint to make use of our pagination logic.  We will create a reusable module to make any endpoint paginated. First, we destructure our query object into page and limit the get all HTTP launches as follows:

```js
async function httpGetAllLaunches(){
	const {page, limit} = req.query
	//TODO: Design function to compute user input values of skip and limit
	const skip = 1
	const limit = 0
	res.status(200).json(await getAllLaunches(skip,limit))
}
```

Inside the *query.js* file we define the get pagination function to determine the appropriate parameters for the skip and limit functions in the get all launches function in the launches controller:

```js
const DEFAULT_PAGE_LIMIT = 0

function getPagination(query){
	const limit = Math.abs(query.limit) || 1 //Math.abs casts to a Number
	const page  = Math.abs(query.page)  || DEFAULT_PAGE_LIMIT

	const skip = (page-1)*limit; //Pages are 1-indexed 
	
	return {
		skip,
		limit
	}
}
```

In mongo, if we pass a 0 to the limit function, then all the documents will be returned. This is the default behavior we want if no query params are passed in the GET request. Currently, when we get all the launches in the get HTTP function, the skip and limit constants are hard-coded. 

Now, with the *getPagination* function in our *query.js* file we can get the appropriate skip and limit values. We refactor the HTTP get launches function as follows: 

```js
async function httpGetAllLaunches(){
	const {page, limit} = req.query
	const launches = await getAllLaunches(skip,limit)
	res.status(200).json(launches)
}
```