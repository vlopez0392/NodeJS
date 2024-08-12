### React JS Frontend walkthrough 

Our main task is to understand how our API endpoints we will be building will interact with the dashboard client. 

We are using the arwes package for our sci-fi theme and react. We have other two dependencies, *react-router-dom* which allows our FE to have routes of its own such as */upcoming* and */launch* and *react-dom* allows our react code to use the DOM. Because our app is a web-application, the browser must make use of the DOM to display the page we are viewing. 

Finally, in our *package.json* we have some scripts to deal with the frontend build systems.
#### Directories 

* **src:** Contains the */hooks* directory. Hooks allow us to react to events in our application, and keep track the states of the app to avoid excessive re-rendering in the browser and excessive API requests.

* **public:**  Contains some static assets such as background images and sounds for our UI, a favicon and the index.html file which contains our react application.The files in this directory are going to be served to the browser directly without any fancy processing by the react framework.

