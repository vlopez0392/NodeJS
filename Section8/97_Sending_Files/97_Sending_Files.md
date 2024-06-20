
### Sending Files 

It is fine to send raw data back to the user. However, servers sometimes need to send other types of files such as photos back to the client. Express makes this simple using the *sendFile* function in the request object. Consider the following code snippet: 

```js 
function getMessages(req, res){
	res.sendFile('photo.jpg')
}
```

We make use of the built-in *path* module for Express to find the location of our photo. The path modules allows us to work with different OS path styles. For instance, Linux and Mac both use forward slashes " / " while windows uses back-slashes  " \\ " to separate the different sub-directories of a directory. 

The following code snippet shows how to use the path module to find the 'photo.jpg' file

```js 
const path = require('path');

function getMessages(req, res){
	path.join(__dirname, '..' ,'public', 'photo.jpg')
	res.sendFile('photo.jpg')
}
```

Node has a global built-in variable __ *dirname* where the current JS file is located absolutely in the system. Now, if the photo is located in the public folder one level above the JS file we are writing this function from, then include  '..' as a parameter in the the *path.join( )* function with to go to the directory where the photo.jpg is located.

In Postman, the photo is sent in the response and the headers set the 'Content-Type' appropriately!
