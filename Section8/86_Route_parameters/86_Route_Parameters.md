### Route Parameters 

Express allows us to be explicit in out intention of sending JSON in our response. Suppose we have a *friends* array of JS objects and want to send it as JSON in our response. We do so as follows: 

```js
app.get('/friends', (req,res)=>{
	res.json(friends);
});
```

Now the data we pass in will be treated as JSON. Now, what if we want to get a single friend? We can use route parameters as follows: 

```js
app.get('/friends/:friendId', (req,res)=>{
	const friendID = req.params.friendId;
});
```

Express takes the parameter name we passed in the route and it populates a property on the *params* object as part of the request object. Because the *friendId* is user input, let's be responsible and do some validation: 

```js
app.get('/friends/:friendId', (req,res)=>{
	const friendId = Number(req.params.friendId); //Explicit cast
	const friend = friends[friendId];
	
	if(friend){
		res.status(200).json(friend);
	}else{
		res.status(404).json({
			error: "Friend does not exist"
		});
	}
});
```

Because Express will match one of our handlers even if the friend doesn't exist, we need to manually set the status code to 404. This is our first parameterized route with error handling. Our code is cleaner and resilient to error compared to the Node HTTP server we previously designed.