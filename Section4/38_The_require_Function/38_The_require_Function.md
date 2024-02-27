### The require function 

Node modules are JS files we can reuse.  We want to focus on the features that make our applications unique.  For instance, we wouldn't be interested in how our computer represents bits and bytes to develop an online store that sells ice cream.

Node allows you to reuse code to do many things such as making HTTP requests by using node modules. The *require( )* function is built-in into Node (not vanilla JS) and takes JS file as an input, executes it and returns the code from that file so we can reuse it elsewhere. 

Example: 

```js
const EventEmitter = require('events'); 
```

We can require any built-in modules by passing the name of the module as a string or modules we build ourselves. We can also use the require function to take advantage of third party modules built and shared by other developers. 
