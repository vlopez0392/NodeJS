
### RESTful APIs 

Our endpoints have been named according to correct RESTful practice. We have used nouns such as friends and messages to name our endpoints. We denote these nouns as collections because they represent collections of data we are keeping track of. 

We query these collections by querying the id of the item in the collections. We have also added to the collections and deleted from them using the appropriate HTTP verbs. 

### What makes an API RESTful? 

The REST acronym denotes REpresentational State Transfer. This name was originated in an academic paper by Roy Fielding which contains a very strict standard on how to talk to servers using the HTTP protocol. 

RESTful APIs follow guidelines and best practices based on this paper. The RE and S parts of a RESTful API both refer on how a server make data available and the T part refers on how this data is sent back to the client. 

RESTful APIs: 

* Make use of existing standards of the web such as HTTP, JSON and URLs. For instance URLs allow us to access endpoints whilst using the HTTP standard. POST requests make use of the JSON format to send data to the users. 

* Endpoints are collections of data. HTTP endpoints represent collections of data that are stored in the server side. 

* We use methods such as GET, PUT, POST, and DELETE to communicate the action performed on the collections of data. 

* Client and server architecture: The client displays the data to the users where they can perform actions. These actions update the state in the server and the server then sends those updates back to the client which observes the change in state.

* Requests are stateless and cacheable. Stateless implies that each request is separate and not connected to any state in the client not included in the request. The server is not keeping track of previous requests made by the client. The client can open a new browser in a new computer and with the same request receive the same data from the server. 

  We can cache requests for future use to increase performance. For instance, if nothing has changed in the our list of friends, we can cache the friends array to GET it faster. 

Previously RPCs or Remote Procedure Calls were made to the servers as if they were the same machine as the client ignoring the fact that client and server are different machines. This is not considered a RESTful practice.