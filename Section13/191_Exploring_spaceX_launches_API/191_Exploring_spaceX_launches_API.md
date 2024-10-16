
### Exploring the spaceX launches API 

We previously explored the SpaceX launches API. This RESTful API that includes data about SpaceX launches, rockets and all other kinds of data. We want to GET a list of all SpaceX launches. 

The sample request we made previously is currently in version 5 and gets the latest launch from the launches collection. Making this request in postman returns an object with the most recent launch. A few fields of interest in the returned JSON object are shown below: 

```json
{
	"window": null,
	"rocket": "5e9d0d95eda69973a809d1ec",
	"success": true,
	"failures": [],
	"details": null,
}
```

For instance, the success field matches with the success field we track in our API. Then we can map the spaceX API success field to our NASA API. However, notice that for certain types of data such as the rocket field, the spaceX API doesn't return an object but instead an identifier (similar to what relational DBs do). 

It is referencing objects in the rockets collection which contains part of the data relevant to the rocket. Thus, we must query the rocket collection if we want to get the rocket data. 

Why does the SpaceX API do this? It does it to reduce the size of the response that it needs to send back which is a good performance optimization. However, we need some rocket data such as its name. How do we get this data? 