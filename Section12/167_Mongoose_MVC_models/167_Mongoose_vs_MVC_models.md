### Mongoose vs. MVC models 

We also have MVC models in the .model JS files. Why do we have two models? Let's clear up the confusion between the two models. Our Mongoose models are not exactly the same as the MVC models in the MVC design pattern. 

Models and Schemas are objects and classes that mongoose provides to us to talk to collection of documents in MongoDB. 

Models in the MVC are a more general concept that applies to databases or any other external data sources. Models generally capture data our API is working with. In some node projects we will only have one model which most likely just exports the mongoose file directly. Why do we have the additional models in the NASA project? 

Were using these model files to act as a data access layer that controls how data is read and updated while hiding the mongoose and mongoDB specific implementation details in our mongo.js file. 

If we decide to use other databases, we could do so in our models since we are importing the mongoose models because our controllers only work with the functions we export from the MVC models. The model.js files are directly related to the functionality of the API more directly compared to the mongoose model. 