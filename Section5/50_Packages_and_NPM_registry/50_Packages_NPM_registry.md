### Packages and the NPM registry

--- 
<p align = "justify">Why did we need to initialize our package with <em>package.json</em> file to install the axios dependency? Most Node programs are packages and they need to be packages to make use of the NPM. Our package need not be shared with the public on the NPM registry (database of available packages), however to use dependencies such as axios, the <em>package.json</em> configuration file is required.
</p>
As long as we have the  *package.json* file and our application is managed by npm, we can install dependencies and use scripts and our application is considered a package. However, when we talk about packages, we talk about reusable packages published in the NPM registry.

