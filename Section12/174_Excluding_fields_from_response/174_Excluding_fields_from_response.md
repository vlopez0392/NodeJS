
### Excluding fields from the response 

#### Version keys

The *_ _v* values in the GET response aren't something mongoDB creates but are an added advanced feature from mongoose. This value is known as *version key* and allows us to keep track of the version of the document created.

What is this used for? If we change the schema of our collection but we wish to keep the data that follows the older versions of the schema, we increase the version key to show that we are referencing the new version of the schema. This way, we can take advantage of mongoDB's so called schemaless approach. 

We can potentially store documents that follow different schema version without breaking the DB. It is up to the application code how to manage different version of the schema. This is more flexible that the SQL approach where a migration between schemas would be required possibly bringing down the DB. 

##### Filtering fields 

When it comes to our API, it is a good idea to filter out the internal values when we return the documents in the API. In our planets model, we currently get all the planets as follows: 

```js
async function getAllPlanets(){
	return await planets.find({});
}
```

With the first argument, we can filter documents based on some criteria. With the second argument, the so called projection allows us to select the fields we want to include/exclude in the response. We exclude the version key and the objectID as follows: 

```json 
async function getAllPlanets(){
	return await planets.find({}, {'__v':0, '__id':0});
}
```

