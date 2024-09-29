
### Mongoose schemas for launches 

We will be replacing our in-memory storage of our launches and planets with our persistent storage in the mongoDB we connected to. 

#### Data modeling 

When data modeling, we will determine the shape of our data and the schema it will follow. We start working with the schema and once we have the schema, we can use it as reference to keep track of the correctness queries made by the node server. 

Recall that the schemas determine the shape of the documents in the collections of data in MongoDB. In our launches model, we have the following hard-coded object to model how our launches data will look: 

```js
const launch = {
	flightNumber: 100,
	mission: 'Exploration',
	rocket: 'Kepler 3',
	launchDate: new Date('December 27, 2030'),
	target: 'Kepler-442 b',
	customers: ['NASA', 'Vick'],
	upcoming: true,
	success: true,
}
```

Our schemas take this launch object as a model that mongoose uses to enforce the structure onto the DB data.  The schema is as follows: 

```js
const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({

	flightNumber: {
		type: Number,
		required: True,
	},
	launchDate: {
		type: Date,
		required: true,
	},
	mission: {
		type: String,
		required: true,
	},
	rocket:{
		type: String,
		required: true,
	},
	target:{
		type: String,
		required: true,
	},
	upcoming:{
		type: Boolean,
		required: true,
	},
	success:{
		type: Boolean,
		required: true,
		default: true,
	},
	customers:[String]
});
```

