### Express Routers

When building large express applications, we use routers to organize the routes in our application in smaller modular units. Routers are small applications and contain their own middleware. 

We create a route as follows: 

```js
const myRoute = express.Router();
```

We mount a route to a specific path where requests will be made as follows:

```js
app.use('/routerPath', myRoute)
```

This is done to let express knows to match requests to the routes contained in that router.

Then, when the requests are made to the router,  they are done relative to where the router was mounted. The example below showcases this:

```js
myRouter('/', routeController.post)
```

