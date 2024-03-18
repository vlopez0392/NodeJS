### Creating our first NPM package

What's the difference between a module and a package? A module is a file that contains some code which may be exported. A package is a collection of modules that have been packaged together.

Suppose we want to implement the functionality in the http.js module in the previous section. We can use search in the npm website for packages that perform this functionality such as node-fetch, got or axios. 

We choose the axios package. To install it, we go to the directory where our project is located: 

```bash
npm install axios
```

However, if we haven't initialized our node application with the npm tool an error will be thrown. We must first create the *package.json* file. To do so, we use the *npm init* command which will create this file.

```bash
npm init -y
```

The *-y* flag will initialize the *package.json* file with all the default options. Otherwise, we must specify each option in order.

The *package.json* file created looks as follows in our case: 

```json
{
	"name": "49_creating_npm_package",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
		},
	"keywords": [],
	"author": "",
	"license": "ISC"
}
```

This *package.json* file describes the package we have created. The "main" property contains the file that will be executed by node by default or the entry point to our application. We also have the "scripts" object which allows npm to be used to automate common tasks in our package such as running tests or different configurations (dev vs production). The license property tells other developers how they can use our code.

Our *package.json* file now looks as follows: 

```json
{
	"name": "49_creating_npm_package",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
		},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"axios": "^1.6.8"
	}
}
```

The dependencies field was added automatically and contains all the packages that we have installed as well as their versions. 

We can also add our own scripts. Suppose we want to create a *start* command to execute our *https.js* module: 

```json
{
	"name": "49_creating_npm_package",
	"version": "1.0.0",
	"description": "",
	"main": "https.js",
	"scripts": {
		"start": "node https.js",
		"test": "echo \"Error: no test specified\" && exit 1"
		},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"axios": "^1.6.8"
	}
}
```

We then call the start command as follows: 

```bash
npm run start
```

We can also use the short-hand syntax omitting the run keyword:

```bash
npm start 
```

We have successfully installed our first npm package!