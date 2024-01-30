## Async await 

Async await is built on top of Promises. An async function is a function the returns a promise. The main advantage of async await is that it makes code easy to read. For instance, consider the following asynchronous code: 

```js
movePlayer(100, 'Left')
	.then(()=>movePlayer(400. 'Left'))
	.then(()=>movePlayer(10, 'Right'))
	.then(()=>movePlayer(330, 'Left'))
```

With async await, we may rewrite the code above as follows:

```js
async function playerStart(){
	const firstMove = await movePlayer(100, 'Left');
	await movePlayer(400, 'Left');
	await movePlayer(10,  'Right');
	await movePlayer(330, 'Left');
}
```

Async await code is translated to Promises under the hood. Thus, it is syntactic sugar for Promises. Using async await, we can model asynchronous code as synchronous code without incurring in blocking our code. 

Consider the more realistic example using the *fetch* function: 

We can transform the following Promise based code into an async-await flavored code:

```js
fetch('https://jsonplaceholder.typicode.com/users')
	.then(resp => resp.json())
	.then(data => console.log(data))
```

```js
async function fetchUsers(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data)
}
```

Both of the above code snippets have the same functionality. The choice of which one to implement is dependent on the personal choice of the developer or team. Let's explore a more realistic example: 

```js
const urls = ['https://jsonplaceholder.typicode.com/users',
			  'https://jsonplaceholder.typicode.com/posts',
			  'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function(){
	try{
		//ES6 desctructuring
		const [users, posts, albums] = await Promise.all(urls.map(url =>
			fetch(url).then(resp => resp.json())
		))
		console.log('users ', users);
		console.log('posts ', posts);
		console.log('albums ', albums);
	
	}catch(err){
		console.log(err, 'An error occurred');
	}
}
```

