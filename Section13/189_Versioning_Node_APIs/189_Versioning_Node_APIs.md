### Versioning APIs 

What does versioning an API mean? All this means is grouping the routers of an API under a specific version path (e.g. /v1, /v2, etc) and keeping old versions around after adding a new version. We may choose to deprecate support for a version and tell users support will stop. V

Versioning allows users of our API to gradually move to the new version of the API while offering support for a while to the old versions of the API. As authors of the API we want to avoid users updating all at once potentially breaking their applications in the process. 

Our versioning focuses on the express routers we have defined on the *app.js* file. We could simply prefix version path for each Router, however this is not a clean solution as it leads to code repetition (e.g. */v1/launches , /v2/launches*) in the same file. So it is preferable that each version of the API is under an individual express router. 

Our individual express router for version 1 is written in the file *api.js* as follows: 

```js
const express = require('express');

const planetsRouter = require('./planets/planets.router')
const launchesRouter = require('./launches/launches.router')

const api = express.Router();

api.use('/planets',planetsRouter)
api.use('/launches',launchesRouter)

module.exports = api;
```

On the *app.js* we mount the planets and launches routers under the /v1 prefix using the api object we exported above, like so: 

```js
const api = require('./routes/api')

app.use('/v1', api);
```

If we wanted to add version 2 of our API, we can do it as we did above. This allows us to support different versions of our API at the same time. Now that our API is versioned, we need to make sure we are using the correct API endpoints  both in the front-end and in postman.