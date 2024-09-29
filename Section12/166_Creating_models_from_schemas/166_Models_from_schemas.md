
### Creating models from schemas 

To put our schemas to use, we need to connect them to a collection of documents in our MongoDB. A schema is only useful when mapped to a collection of documents in MongoDB. We do so by using mongoose models.

We create a mongoose model for the launches as follows: 

```js 
module.exports = mongoose.model('Launch', launchesSchema);
```

The first argument should be the singular name of the collection that the model represents. Mongoose will make it plural, lowercase it and use it to talk to the collection with this name. Thus. the above model connects the launches schema to the "launches" collection. 

The statement above is called "compiling" the model in mongoose. This object allows us to create and read documents from our launches collection.  Similarly, for the planets, we have the following mongoose Planet model: 

```js
module.exports = mongoose.model('Planet', planetsSchema
```

 