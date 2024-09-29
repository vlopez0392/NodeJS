### More about Mongoose 

We are using the mongoose package to connect to our mongoDB. Let's learn what mongoose provides for us to better understand our DB code as we are writing it. 

#### Object Modeling \
##### Documents and Collections 

More than a way to connect to a MongoDB, mongoose provides a object modeling as a feature. What is object modeling? 

Recall that collections have many documents where data is stored in JSON-like objects called BSON in MongoDB. Also, MongoDB doesn't enforce schemas, for which mongo is a schemaless DB. It is up to whatever is accessing our mongo data to provide some structure on the data that lives in the collections. 

##### Schemas 

Mongoose provides this structure with schema objects which are tied to the collections in mongoDB. Each schema maps to the group of documents living in the collection. The schema lets us give the documents in our collection a structure that must be followed when accessing our data with mongoose. 

For instance, we can enforce the types of our fields (flight number as a number, launch date as a date) and if the fields are required or not (We can't have a launch without a launch date). Mongoose lets us add validation logic to our documents. If we so choose, mongo lets us add validators that can check advanced validators (regex for instance). 

##### Models 

To enforce the schemas, we create object models that use these schemas. The models take these schemas and while following the schema structure allows collections to be queried. The model then uses the schema and applies it (maps it) to mongoDB data. 

In our node server, we can query our models to get the data and documents stored in our mongo collections. Queries can include any CRUD operations and our models give us JS objects we can work directly in node. This is what object modeling is. 
