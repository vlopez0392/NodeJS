### Introduction and Architecture 

We want to have a general idea on how our code will be structured (Senior dev or architect's job). Our Nasa application will be full stack and will have a server component (API) and a client component and frontend. As Node developers, our primary job is to build APIs and understand how those APIs can be used in conjunction with the frontend. 

With this app, we will have the opportunity to see our backend in action while requesting from the client or frontend. We will be using express along with the MVC pattern to design our server. In the MVC pattern, the user interacts with the controller, which updates the model and returns an updated view to the user. 

#### MVC, client and server details

Unlike the express project in the previous section, we won't use the controllers directory and will keep the code related to the controllers next to the routers. Our controllers define how we respond to an specific route, so the code that defines our API endpoints and controllers shouldn't be separated. 

What about the views? Our app is a client-server application. Our client is going to be a dedicated front-end project. We are going to be sending data from the server to the client, and the client is going to control what to present to the user. 

Finally, it is common to create multiple node packages (package.json) for the different parts of our application (server, client and root). Why the root? To wrap the two packages from server and client. We can run npm commands from our project folder that perform actions like starting the server. 



