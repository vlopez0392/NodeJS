
### Object IDs

What are objectIDs in mongoDB?  When using Mongo, you'll see object IDs being constantly referenced. For instance, when we make a request in postman such as GET planets, what is returned? 

The following response is returned (We show only one habitable planet but 8 are returned): 

```json
{
	"_id": "66fb9780336a470313c4f4f3",
	"keplerName": "Kepler-1652 b",
	"__v": 0
}
```

The *_ _v* values are created for each document automatically whenever they are created.         The *_ id* property is how Mongo identifies documents uniquely. ObjectIDs are random-like values that are assigned to each document that will always be unique to that document. 

The *_ id* property uses very long random alphanumerical values because, as we recall, mongo is designed to be run in a horizontally scalable way in a cluster with many instances of the mongo process. This ID must be unique across all instances of the DB in that cluster. We don't want a document that is created in one instance of mongo to match with the ID that is created in another instance. Otherwise we would get two different objects with the same ID. 

Mongo is designed such that Object IDs are unique to each document. It is then very unlikely that two different objects will have the same object ID 

#### Embedded timestamps in objectIDs 

Object IDs contain the timestamps in which they where created encoded in their random-like value. In any browser, we can search for *objectid to date* and obtain the timestamp from the objectID. There are many apps available. 