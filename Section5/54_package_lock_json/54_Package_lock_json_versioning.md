
### Package-lock.json and Versioning 

What is package-lock.json? This package allows us to work with a team of developers and helps us avoid bugs. The package-lock.json is automatically generated when we run any npm commands where the node_modules folder is modified or the package.json file is modified. It's a much more specific description of the dependencies from our package.json

It shows not only the dependencies but also where the dependency originates from (resolved), verifies the package is not corrupt (integrity) with the integrity check and also includes the versions and informations for all the dependencies in the tree (requires).

The following is a snippet of the package-lock.json that shows the properties above:

```json
{
	"name": "51_using_3rd_party_modules",
	"version": "1.0.0",
	"lockfileVersion": 3,
	"requires": true,
	"packages": {
		"": {
			"name": "51_using_3rd_party_modules",
			"version": "1.0.0",
			"license": "ISC",
			"dependencies": {
				"axios": "^1.6.8"
			}
	},
	"node_modules/asynckit": {
		"version": "0.4.0",
		"resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
		"integrity": ""
	},
	"node_modules/axios": {
		"version": "1.6.8",
		"resolved": "https://registry.npmjs.org/axios/-/axios-1.6.8.tgz",
		"integrity": "",
		"dependencies": {
			"follow-redirects": "^1.15.6",
			"form-data": "^4.0.0",
			"proxy-from-env": "^1.1.0"
		}
	}
}
```

In our package-lock.json file we have listed the exact versions of all our dependencies. On the other hand, on the package.json file, the version of each package is just loosely determined with the semantic versioning system we saw previously. 

This way we can make sure we npm install the same versions of our dependencies in other similar projects. It is then good practice to include the package-lock.json file to avoid any issues with semantic versioning. 