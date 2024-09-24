### Connecting to MongoDB 

We are going to be using mongoose, the most widely used node package for connecting node applications to MongoDB. Mongoose also has advanced querying features and other features to create models from our data that follow schemas. 

First, let's connect to our mongo cluster. We do so as follows in the *server.js* file:

```js
async function startServer(){
	const MONGO_URL = await getAPIKey();
	await loadPlanetsData();
	await mongoose.connect(MONGO_URL, {
		useNewUrlParser: true,
		useFindAndModify: false, 
		useCreateIndex: true, 
		useUnifiedTopology: true,
	});

	server.listen(PORT, ()=>{
		console.log(`Listening on port ${PORT}`)
	});
}
```

---
#### DEPRECATED 

Note that we pass four parameters to the mongoose connect function. These are:

1. *useNewUrlParser:*  When set to true, mongoose determines how to parse the URL we get from the getAPIKey.
2.  *useFindAndModify:* When set to false, disables the old way of finding and updating mongo data. 
3. *useCreateIndex:* When set to true, overrides the use of the deprecated ensureIndex function. 
4. *useUnifiedTopology:* When set to true, uses the updated way to talking to clusters of mongo databases. 

These options above are options of the mongoDB driver that mongoose uses to connect to the database. The mongoDB driver is the official API that node uses to talk to mongo databases. If we want to use the latest features in mongoose and the mongo driver, we want to make sure that these parameters are set. 
#### DEPRECATED 

--- 

How do check that our connection is working? The mongoose object exposes the event emitter *connection* that emits a successful connection event  when the connection has succeeded or an error when the connection to the db has failed. 

```js
mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready! ')
});

mongoose.connection.on('error', (err) => {
	console.log(err)
});
```

Note that all event emitters have the *once* function that only triggers the callback a single time the first time is executed. We are being explicit that the open event is only expected once. The error event is expected more than once, so we call the on function whenever an error happens.

