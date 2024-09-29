### Schema for planets 

The schema for the planets model is as follows: 

```js
const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
	keplerName: {
		type: String,
		required: True,
	},
});
```

Notice the camel-cased *keplerName* property is used instead of something more generic such as name. This is because we want to integrate smoothly with the frontend and thus we must follow the same naming convention used in the client (frontend).

Any string as the name of our planet is good enough for our schema. This is because it is difficult to add validation based only on a planet name (e.g. hard to predict a planet name). 

