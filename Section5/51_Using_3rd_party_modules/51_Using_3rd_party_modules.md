
### Using third party modules 

We will use the axios library to demonstrate how to use third-party modules. The axios package will use the *http* module in Node JS and *XMLHttpRequests* from the browser. Axios also allows handling JSON data easily. Many services rely on JSON such as sending emails, authenticate with google, etc. Then, axios is a good choice to make HTTP requests.

We can use a promise-based syntax to make HTTP requests in axios as follows: 

```js 
const axios = require('axios');

axios.get('https://www.google.com')
		.then((response) => {
			console.log(response);
		});
```

Alternatively, we may use an anonymous function instead of the arrow function: 

```js
axios.get('https://www.google.com')
		.then(function (response) {
			console.log(response);
		});
```

We may chain other promises to handle errors and specify other behaviors:

```js
axios.get('httpss://ww.gole.com')
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	})
	.then(() => {
		console.log('All done!');
	});
```

We can keep chaining promises because the *.catch* and *.then* return promises that, when resolved , allow the next callback in the chain to be called.

Most third-party modules have powerful promise-based APIs and thus we are ready to start developing projects.