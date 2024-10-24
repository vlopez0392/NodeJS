### Running Search Queries 

The developers of the SpaceX API have included a Postman collection for their API. With this, we can use the requests in this collection instead of creating the requests ourselves. They provide samples of how to talk to all the routes in the API.

#### Pagination + Custom Queries 

The developers of the API use mongoDB and mongoose. Other than this, we can see that there are some query routes that accept a query object and some options like so: 

```json
{
	"query": {},
	"options":{},
}
```

The options field accepts many options, where the most important is the *populate* option which contains the *paths which should be populated with other documents*. 

Next, by importing the postman request collection we can make requests to many collections such as rockets, Starlink related data, crew, etc. We are interested in the launches collections primarily. One of the requests that seem a bit off is a POST request named query launches.

The query launches is a POST request to GET data from our launches. This is a pattern that we will sometimes see when we are doing more than a basic GET request. Whenever we need to pass more parameters to GET specific data, we use the body of the POST request to specify the parameters of our query. This way we can specify the kinds of launch data we want to see.

Technically, this pattern is not RESTful since the HTTP verb is used differently from its purpose (POST to GET data). However, it is a reasonable use case for the POST request and an acceptable exception.

How does it work? If we pass nothing, we get all the launches under the *docs* property in the response. However, we can now get specific data from other collections in our response. For instance the rocket name. 

Now, let's go back to the query object: 

```json
{
	"query": {},
	"options":{
		"populate":[
			"rocket"	
		]
	},
}
```

The most powerful option is the populate option which we set to the list of paths inside of each launch object we want to populate. In our case we want to populate the rocket path, thus we include it in the populate field. When we make the query, the rocket field is populated by the rocket data corresponding to the rocket identifier we saw previously.

Now, we can improve our query by filtering out the rocket data we are interested in, like so:

```json
{
	"query":{},
	"options":{
		"populate":[
			{
				"path":"rocket",
				"select":{
					"name":1
				}
			}
		]
	}
}
```

This request will return the id and name of the rocket:

```json
...
{
	"rocket": {
		"name": "Falcon 1",
		"id": "5e9d0d95eda69955f709d1eb"
	},
}
...
```

Now, we can integrate our NASA API with the SpaceX API to schedule real launches!