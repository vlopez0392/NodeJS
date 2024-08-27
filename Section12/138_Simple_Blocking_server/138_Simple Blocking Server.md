### A simple blocking server

Before we demonstrate how to improve node server performance, let's first show how we can block the event loop in a node server. 

The following function delays a set duration of time:

```js
function delay(duration){
	const startTime = Date.now()
	while(Date.now() - startTime < duration){
		//Event loop is blocked
	}
}
```

Our event loop will be blocked by the above function since it is written in JS. It is processed in the event loop and won't be sent to the OS like other node functions. While we are in the duration loop, the event loop is completely blocked and our servers can't process other requests, parse any files, or query databases.

Note that performance measurements depend on many factors such a Node version, CPU speed, applications running. It is likely we observe some differences between the course and our experience.

Our express server is severely blocked if we try to make multiple requests to the endpoint where the above delay function is called. This blocking behavior, although contrived, is slowing the entire server! Is there any way or approach to solve this situation or any other more realistic but similarly blocking situation?