### HTTP Requests 

On the web, generally the browser makes requests while the server responds to those requests. The browser usually starts requesting the servers and waiting for the server's response before making another request. 

What kind of requests can we make to a web server? With HTTP our API is made of operations using HTTP request methods such as GET and POST that are used on different collections of data such. Operations such as *GET/friends* allow us to get this data from the server. We could also make a request such as  *GET/friends/5* to specify that we want to get the data from friend number 5. 

We can categorize our requests as operations on collections of data or individual pieces of data within these collections. For example, we can add a new message to a list of messages using a *POST/messages* HTTP request. We could also update a specific message from our list our messages using an HTTP request of the form *PUT/messages/15*. Finally, we can also DELETE resources. 

All of the above are possible HTTP requests and as such, they all consist of four parts:

1. **METHOD :** Defines the operation that the browser wants to perform on the server. 

2. **PATH:** Also called the resource that we access on the backend. 

3. **BODY:** We can send data to the server. Usually as JSON (other formats possible). For example if we intend to POST our body can be as follows: 

```JSON
{text: "hello", photo: "smile.jpg"}
```

4. **HEADERS:** Optional properties you can specify on a request to send additional metadata to the servers. For example, the size of the data we are sending or any authentication data we need to send such that the server knows we are allowed to perform that operation with your user. 

   *Every request* MUST have a *Host* in its header which specifies which server our request is being made to. The host needs to be specified to verify we are sending our messages to the right server.
