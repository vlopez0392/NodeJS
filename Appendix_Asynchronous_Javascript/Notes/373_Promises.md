## Promises

As of ES6, promises are a new feature. They are really useful and are everywhere. We will explore what Promises are and how they work. 

Let's define a Promise: 

*A Promise is an object that may produce a single value some time in the future. Either a resolved value or a reason that it is not resolved (rejected)*

A Promise may be in one of three possible states:

<ul>
	<li>Fulfilled</li>
	<li>Rejected</li>
	<li>Pending </li>
</ul>

## Callbacks in JS

Callback functions are functions the are called back once an operation has been fulfilled. For instance, consider the following code snippet: 

```js

//Callback pyramid of doom or callback hell
movePlayer(100, 'Left' function(){
	movePlayer(400, 'Left', function(){
		movePlayer(400, 'Right', function(){
		});
	});
});

```

With callbacks, we create this pyramid which is highly unreadable. Promises serve the same purpose as callbacks. Why do we have Promises? They are new and more powerful. 

Using Promises we can refactor the code above as follows: 


```js
//Promise Example
movePlayer(100, 'Left')
	.then(()=>movePlayer(400. 'Left'))
	.then(()=>movePlayer(10, 'Right'))
	.then(()=>movePlayer(330, 'Left'))
```

Promises are similar to event listeners, however, promises can only succeed or fail once. This is extremely useful in asynchronous operations such as API calls because we are more interested in the outcome of the asynchronous operation rather than the time the data becomes available.

