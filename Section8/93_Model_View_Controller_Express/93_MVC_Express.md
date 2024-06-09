### Model View Controller in Express

We can use the MVC design pattern to organize our applications in the model, view and controller layers. The user of the application makes requests to the controller, then the controller manipulates the data in the model. Finally, when the data in the model is updated, the view is updated with this data. 

Let's see how we can apply the MVC design pattern to our express project:

* **Controllers:** The route handlers, functions that process the requests coming in and responses going out since they interact with the users' actions. We create one controller module for each collection of data.

* **Model:** We can use a friends model to keep track of our friends array in memory. If we were using a database, we would use transformation functions included in the model as well. 

* **View**: Currently, just the JSON objects we send back in our responses. This is how the users receive the data from the model. For now, we don't need a directory to organize our views. 