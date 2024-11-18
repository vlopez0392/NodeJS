
November 18th, 2024
### API Keys 

There are three main tools that developers to guarantee that only authorized users can access a server and its API. 

1. API Keys 
2. OAuth Tokens
3. JSON Web Tokens 
#### 1. API Keys 

An API key is a string value we use for two purposes. 

1. The first is as a unique ID for your project such that the server you are making the request to knows which application that request came from. 
2. The second purpose is to grant and restrict access to some API. API keys are usually used when the users of your APIs are developers trying to enable some functionality in their application made exposed in the API. 

APIs may be public. Anyone can view the API key for some application and are used to identify which app is using the public API. Usually, we want to make sure the API keys are private and only available in the server-side and never to be accessed from the client.

#### 1.1 Rate limiting 

Usually the API key is passed as a header in the HTTP request or as part of a query parameter and each API request is always associated with this API key. If too many requests come to quickly from one API key, the server may limit the number of requests allowed per API key per minute and send a *429 Too Many Requests* response which indicates the user has made too many requests in a given time period. 

This is convenient because:

1. It avoids malicious users abusing the public API by overloading it with millions of requests per hour causing server downtime and overload. We want to make sure the public API is equally accessible to everyone. 

2. Allows the develop to offer tiered services rating the limit to the public API users and enhancing it to higher-tier customers. 

