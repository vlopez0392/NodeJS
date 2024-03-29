
### Package-lock.json and Versioning 

What is package-lock.json? This package allows us to work with a team of developers and helps us avoid bugs. The package-lock.json is automatically generated when we run any npm commands where the node_modules folder is modified or the package.json file is modified. It's a much more specific description of the dependencies from our package.json

It shows not only the dependencies but also where the dependency originates from (resolved), verifies the package is not corrupt (integrity) with the integrity check and also includes the versions and informations for all the dependencies in the tree (requires).

The following is a snippet of the package-lock.json in 