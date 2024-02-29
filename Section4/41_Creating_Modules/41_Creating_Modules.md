
We have used the HTTP/HTTPS module created by the authors of NodeJS. Can we write our own modules and organize our own code? Yes we can. 

In NodeJS, each file is treated as a separate module. We first create the top level module *http.js* in which we want to make a request to some server and return a response.

```js 
//File http.js
function request(url, data){
	send(url, data); //Will return a ReferenceError
	return read();   //Will return a ReferenceError 
}
```

We break the request and response functionalities into two modules *request.js* and *response.js*. The *request.js* sends encrypted data (a request) to a url in a server and the *response.js* returns the decrypted data in the response.

```js 
//File request.js
function encrypt(data){
	return 'encrypted data';
}

function send(url, data){
	const encryptedData = encrypt(data);
	console.log(`Sending ${encryptedData} to ${url}`);
}
```

```js 
//File response.js
function decrypt(data){
	return 'decrypted data'
}

function read(){
	return decrypt('data');
}
```

Now, to avoid the ReferenceError in our HTTPS module, we need to export the *send()* and *read()* functions from the *request.js* and *response.js* modules respectively. 

To do so, we use the module keyword. Module is a global built-in that contains data related to the current module. The *module.exports* property is an object that contains all the functions and variables that we want to make available to other modules. 

We do so as follows: 

```js
module.exports = {functionName: functionName};

module.exports = {functionName,}; //Short-hand syntax
```

Now, our *request.js* and *response.js* are as follows: 

```js 
//File request.js
function encrypt(data){
	return 'encrypted data';
}

function send(url, data){
	const encryptedData = encrypt(data);
	console.log(`Sending ${encryptedData} to ${url}`);
}

module.exports = {send,};
```

```js
//File response.js
function decrypt(data){
	return 'decrypted data'
}

function read(){
	return decrypt('data');
}

module.exports = {read,};
```

And we modify the *http.js* module as follows: 

```js 
//File http.js
const request = require('./request');
const response = require('./response');

function requestData(url, data){
	request.send(url, data); 
	return response.read();   
}

console.log(makeRequest('https://google.com','hello'));
```

Note that we can omit the *.js* extension because the *require.extensions* property in the require module contains the extensions to look by the default in the input path parameter (.js, .json and .node in that order). A .node file is a file that contains a node add-on binary written in C++. 

All other extensions must be included in the the input path parameter of the *require* function. 

