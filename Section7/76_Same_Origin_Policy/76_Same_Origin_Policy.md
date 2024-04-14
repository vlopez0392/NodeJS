
### Same origin policy 

The same origin policy affects us everyday when we browse the web and it's important to know as a Node developer. 

---
#### What is an origin? 

When we go into google maps, we type something like this: 

```http
https://www.google.com/maps/
```

The origin is a combination of three things: 

1. **Protocol:** *https* or *http* which tells us how we are communicating with the server at google. 

2. **Host:** *google.com* - The host tells us which server is going to be handling our request. 

3. **Port:** When included in the request, is the port our browser assumes when using the *https* protocol. For instance: 

```http
https://www.google.com:443/maps/
```

Whenever one of the three changes, we are no longer in the same origin. We can browse to other pages at that origin such as the following to get our email:

```http
https://www.google.com:443/email/
```

However, changing the host to *facebook.com* or the protocol to *http* changes the origin. Why is this important? 

--- 

#### Same origin policy

JavaScript and your browser use the Same origin policy. The same origin policy is a security feature by your browser that restricts what it is able to load when loading pages in the internet. For instance, you might be browsing google and make request to google servers, however your browser might also request to a facebook server. 

Under the same origin policy, all requests from the same origin as the page you have loaded in your browser with the https protocol are allowed. However, the browser restricts requests from different origins than the site you are currently browsing. For example, getting your friends data from facebook while making that request from google.

However, requests that write data such as POST or PUT requests are often allowed, even when crossing servers. Submitting data to a server from a different origin is allowed because the data from one origin, does not leak into another origin. It is up to the server how to deal with the POST or PUT requests.

The same origin policy is enforced when making requests from JavaScript, for instance making a GET request using fetch from another origin will result in a block by the wikipedia servers. The main idea behind the same origin policy is to keep our browsing experience secure while allowing us to make the appropriate requests without risking our data.