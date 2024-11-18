
October 30th, 2024
### Encrypted connections with SSL and TLS

Before we add any security and authentication, we must make sure that our node servers use HTTPS (secure version of the HTTP protocol) which encrypts our data in transit as it is being send over the internet. 

So far, our server have only handled requests with the HTTP protocol. However, if we recall from our server discussion that it is always best practice to talk to our servers, for instance, by making requests to some dynamic webpage to get some data while using the *HTTPS protocol*.

This will make sure that our data is encrypted while it is being sent over the internet to the server. This keeps our client application secure. Using HTTPS both the request made to and the response received from the server are sent and received in a way that's private to everyone until it is decrypted. 

HTTPS prevents other users to eavesdrop on our data and tamper with it. This is what we want. To do so, we make use of the SSL and TLS protocols.

#### SSL and TLS

When we browse to a site using an unencrypted HTTP connection, the data in our request to the server and the data in the response can be read by anyone with access to our network (Wifi) using a packet analysis tool like Wireshark. If data is not encrypted, Wireshark has the ability to inspect traffic as it is being sent across our network. This is not ideal if the traffic includes sensitive data such as passwords or other data we want to keep private. 

Under the hood, the HTTPS protocol uses the powerful encryption capabilities provided by TLS (Transport Layer Security) and SSL (Secure Sockets Layer). Usually, SSL and TLS are used interchangeably but to be accurate, TLS is the successor to SSL and the latest version of the encryption protocol. 

#### HTTP vs HTTPS

HTTPS doesn't change how HTTP works. We still have an HTTP connection but now we take the HTTP request and responses and wrap them in a strongly encrypted connection provided by TLS. This changes the domain name (DNS) of the site we are browsing is exposed in plain text because it is needed for the connection. The rest of the data in the body of the request/response and any paths we are browsing to are all securely encrypted with TLS.