### Using paginated APIs

The spaceX API we are using is paginating the list of launches. It is only returning the first page of data. Each page of data includes at most 10 launches. Pagination splits the data we get from the server into different pages, similar to a book. Why is it paginating the response? 

If the query we make returns a huge list of launches, the response we query can get very large. This is costly for the server to send back and forth to the client. Paginating the data saves the server some work and allows the application to load the page data much faster because we are only returning some of the documents. 

Duplicating the query  in postman we observe the following at the bottom of the response we observe the following properties related to how the data is being paginated:

```json
}
	"totalDocs": 205,
	"offset": 0,
	"limit": 10,
	"totalPages": 21,
	"page": 1,
	"pagingCounter": 1,
	"hasPrevPage": false,
	"hasNextPage": true,
	"prevPage": null,
	"nextPage": 2
}
```

Currently we are in page 1 of a total of 21 pages. The *hasPrevPage* and *hasNextPage* properties let us know if we have pages before and after. The *prevPage* and *nextPage* properties point to the previous and next paginated page respectively (if any). 

How do we navigate from page to page? In the options object, we may set the page we want to view for instance:

```json
{
	"query":{},
	"options":{
		"limit": 20,
		"page": 2,
		"populate":[
				{
					"path":"rocket",
					"select":{
						"name":1
					}
				},
			{
					"path": "payloads",
					"select":{
						"customers":1
					}
			}
		]
	}
}
```

Many paginated APIs let us control how many documents per page to include in the response using the limit property as shown above. For our mission control dashboard, we can turn off pagination completely since we need to persist all the launches data. To do so, we must set the pagination option to false as follows:

```json
{
	"query":{},
	"options":{
		"pagination":false,
		"populate":[
				{
					"path":"rocket",
					"select":{
						"name":1
					}
				},
			{
					"path": "payloads",
					"select":{
						"customers":1
					}
			}
		]
	}
}
```