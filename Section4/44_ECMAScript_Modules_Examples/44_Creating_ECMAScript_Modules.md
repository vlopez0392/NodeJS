
## Creating ECMAScript modules 

To use import statements, we modify the *http.js* as follows: 

```js 
//File http.js
import {send} from './request';
import {read} from './response';

function requestData(url, data){
	send(url, data); 
	return read();   
}

console.log(makeRequest('https://google.com','hello'));
```

Note that requiring and importing might be used interchangeably so it's good to verify which type of module you are working with.

To export we modify the *request.js* and *response.js* modules as follows: 

```js
//File request.js
function encrypt(data){
	return 'encrypted data';
}

function send(url, data){
	const encryptedData = encrypt(data);
	console.log(`Sending ${encryptedData} to ${url}`);
}

export {send,};
```

```js
//File response.js
function decrypt(data){
	return 'decrypted data'
}

function read(){
	return decrypt('data');
}

export {read,};
```

Note that running the *https.js* module as is with the node command will throw a SyntaxError because NodeJS treats JS files as CommonJS modules by default for backwards compatibility. NodeJS treats JS files as CommonJS modules since it was created. We need to rename our file names with the *.mjs* extension for NodeJS  to treat our code as an ECMAScript module. 

Unlike with the *require* function, we must specify the *.mjs* extension when using the import statement. We might see some codebases that don't require the extension renaming (If it's handled by some other means), however, if we are treating our modules as ECMAScript modules, it is good practice to use the file extension for better compatibility with modern browsers and other JS runtimes such as Deno which always uses the full path or URL to the file you are importing. 

After the modification, our *https.mjs* file is as follows: 

```js 
//File http.mjs
import {send} from './request.mjs';
import {read} from './response.mjs';

function requestData(url, data){
	send(url, data); 
	return read();   
}

console.log(makeRequest('https://google.com','hello'));
```


