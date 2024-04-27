### Development dependencies 

Developers create tools to automate repetitive tasks such as restarting the server every time we make a change.  The nodemon package automate this task very well. Let's install the nodemon package under development dependencies as follows:

```shell 
npm install nodemon --save-dev 
```

This will install nodemon under the the development dependencies. These dependencies are only needed while developing our project and they're not needed to execute our project in production with the *npm start* script.

Packages and tools used to improve the development experience are typically the dependencies that we save as development dependencies. This distinction is also important when uploading your package in npm and sharing your package as open source. 

This minimizes the amount of packages that your users need to install. It helps to put those dependencies that are not necessary for your project to run. Again, we don't want our node modules directory to grow too large, thus keeping development dependencies in the appropriate category will help us achieve this goal.

