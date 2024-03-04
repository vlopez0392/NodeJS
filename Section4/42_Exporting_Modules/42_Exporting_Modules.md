## Exporting Modules

There's a few different ways to export modules. We can set our *module.exports* in one step as we did previously.  

We can also set properties on the *module.exports* object directly by assigning them. For example, in the *request.js* module this is done as follows: 

```js
//File request.js
exports.REQUEST_TIMEOUT = 500;

function encrypt(data){
	return 'encrypted data';
}

exports.send = function send(url, data){
	const encryptedData = encrypt(data);
	console.log(`Sending ${encryptedData} to ${url}`);
}
```

We use the short-hand syntax to include the send and REQUEST_TIMEOUT properties in the *module.exports* object without needing to prefix them with the *module* keyword.

If we are only exporting a single function, we can make the *module.exports* object point to the desired function. For example, we can do this in the *response.js* file as follows: 

```js 
//File response.js
function decrypt(data){
	return 'decrypted data'
}

module.exports = function read(){
	return decrypt('data');
}
```

This changes how we access our function in the *https.js* module. Now we import the *read* function directly when we require the *response.js* module:

```js 
//File http.js
const request = require('./request');
const read = require('./response');

function requestData(url, data){
	request.send(url, data); 
	return read();   
}

console.log(makeRequest('https://google.com','hello'));
```

It is recommended to use the *module.exports* syntax we saw previously since it is more clear what the interface to the module will be and how it will be accessed. There is no need to look for many references in the module to the *module.exports* object.

