## Module Caching

When we load a module (either CommonJS or ECMAScript) Node caches that module. Suppose we modify the *request.js* as follows: 

```js 
//File request.js
function encrypt(data){
	return 'encrypted data';
}

function send(url, data){
	const encryptedData = encrypt(data);
	console.log(`Sending ${encryptedData} to ${url}`);
}

console.log('Hello from request.js!!')
module.exports = {send,};
```

Whenever we require *request.js*, should we expect the console.log statement to be executed to be called? NO, we shouldn't! In larger programs, it is very likely that we have modules that are required from multiple places. In order to be efficient and avoid executing the module each time it is required, Node will maintain a *cache* of required modules. 

NodeJS will check the *cache* of loaded modules previously. If the module has been loaded previously, the module will be in memory and the module won't be executed if required again by some other module. 

This *cache* is global and lives in the *require.cache* object. This object contains data about our modules (Their path, their load status). We won't be working with this object at least directly, but it is important to know NodeJS uses it to implement our CommonJS module functionality. 
