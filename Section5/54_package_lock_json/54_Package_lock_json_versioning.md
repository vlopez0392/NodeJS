### Package-lock.json and Versioning 

What is package-lock.json? This package allows us to work with a team of developers and helps us avoid bugs. The package-lock.json is automatically generated when we run any npm commands where the node_modules folder is modified or the package.json file is modified. It's a much more specific description of the dependencies from our package.json

It shows not only the dependencies but also where the dependency originates from (resolved), verifies the package is not corrupt (integrity) with the integrity check and also includes the versions and informations for all the dependencies in the tree (requires).

The following is a snippet of the package-lock.json in 

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
		"integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q=="
	}
}
```

Note the ^ caret symbol in the axios version. This is a feature of npm that allows npm to install any version of this package as long as its not a major version update. This is a special case where if the MAJOR version is less than 1m then the MINOR version counts as the MAHOR version. This is because if they are pre-1.0.0 versions, they are likely to be changing very often. 

Because versioning can be complex, we use the npm semver calculator to check the versions a specific range will capture (e.g. axios": ^1.6.8). In the package-lock.json file we have the exact version we are using. With this file, other developers will be able to get the same dependencies if they were set up their projects exactly as ours. This guarantees similar project behaviors among different developers and timelines. 





