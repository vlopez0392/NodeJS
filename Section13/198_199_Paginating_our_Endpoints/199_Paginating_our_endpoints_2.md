### Paginating our NASA API endpoints part 2

We want any endpoint to make use of our pagination logic.  We will create a reusable module to make any endpoint paginated. First, we destructure our query object into page and limit the get all HTTP launches as follows:

```js
async function httpGetAllLaunches(){
	const {page, limit} = req.query
	
	res.status(200).json(await getAllLaunches())
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

In mongo, if we pass a 0 to the limit function, then all the documents will be returned. This is the default behavior we want if no query params are passed in the GET request.