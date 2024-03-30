### What is a web server? 

Node can be used to write many kinds of applications. From file parsers to making games. Node is almost always used to bring our programs to the web by building backends for web sites and mobile applications to manage the application relevant data. 

What is a backend? A web server? An HTTP server and how do these work? Let's start with a simple example. When we type something in the browser, say an URL like *facebook.com*, our browser starts calling a system called the DNS or the Domain Name System. It uses DNS by talking with DNS servers across the internet. 

Once the browser makes a request to the DNS server, it no longer has to make another request to the DNS server since a *DNS cache* stores the addresses returned by the DNS server. 

These DNS servers, given an URL, look for the internet address of the servers where the resources associated with this URL are located (e.g. your facebook profile or pictures). This is similar to asking someone to look for a place in a map. Once they find it, they will answer with the exact address of the place we were looking for. In the case of a web server, an IP will be returned. 

Once we have the IP, our browser is able to communicate with the HTTP server which will return the data we are asking for. It is called an HTTP server because it communicates using the http (or https) protocol. Other protocols are available such as FTP or mailto (email). 

We specify the type of server that will handle our request by appending a port number to the IP address of the resource. For example, 31.13.80.36:80 denotes an HTTP server. The HTTP server will send back the data we need to display. The website might be dynamic and so many types of data may be sent such as JSON, TXT, XML, videos or images.  

