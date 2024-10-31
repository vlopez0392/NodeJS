
### Security Example Overview

We have set a simple HTTP server using express that serves a simple HTML file to a single GET / endpoint. We are going to encrypt all of the data coming in and out of the server by using SSL certificates and HTTPS. 

Next, we add a secret endpoint */secret* to show a secret value (currently 42). Currently, our secret value is being sent over HTTP by default. Thus, the connection to the API is NOT secure. Anyone on our network, can see the traffic and more importantly, that the response to our request includes the secret value of 42.

In the next videos, we are going to make it much harder for anyone or any software listening to our traffic to obtain our secret value. Now that our HTTP server is set up, we can secure the communication between the browser and server such that when the secret is sent it is sent ENCRYPTED.
