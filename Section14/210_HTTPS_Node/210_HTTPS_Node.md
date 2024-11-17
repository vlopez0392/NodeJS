November 14th, 2024
### HTTPS with Node

Many services exist to use HTTPS with Node such as Google Cloud or Amazon's Cloudfront. For instance, Amazon's Cloudfront allow any server to automatically be served over a CDN and allows your pages to be served from any location in the fastest way possible. 

While these features are nice, we primarily care about serving our content using HTTPS when using these services. Now, we will add HTTPS to our node server in our server code just to understand how to test that our servers work correctly when using the secure HTTPS protocol. 

This is relevant because it occurs fairly often when building sites that pass private information like credit card numbers or personal health information. We want our servers respond to HTTPS requests correctly, even when running on localhost. 

Recall that there are two ways to start the HTTP servers:

1. Use the listen function from express's app object. 
2. We can require the HTTP module as shown below: 

```js
const http = require('http')

http.createServer().listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}...`);
});
```

We sometimes create our servers this way because of the additional flexibility it provides. For example, instead of requiring the HTTP module, we can require the built-in HTTPS module and pass an option to our createServer function with the SSL certificate which encrypts the data to and from our server, like so:

```js
const fs = require('fs');
const http = require('https');
const app = require('express');

http.createServer({
	key: fs.readFileSync('key.pm'),
	cert: fs.readFileSync('cert.pm'),
	
}, app).listen(PORT, ()=>{
	console.log(`Listening on port ${PORT}...`);
});
```

The key option contains a secret key to encrypt our data while the cert option contains a string containing a path to the SSL certificate. To create the certificate, we use OpenSSL which is an open-source tool available both on Windows, Linux and Mac systems. 

To create the certificate, we open a new terminal and input the following: 

```bash 
$ openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
```

The above line is broken as follows:

* The req command requests a new SSL certificate 
* The -x509 option allows us to create a self-signed certificate. 
* The newKey option generates the new private key.
* The rsa command is the cipher for the key using the RSA encryption algorithm. 
* The  number after the colon indicates the size of the key in bits (4096)
* The *-nodes* option allows us to access the key without needing a password. Since we have a self-signed certificate, we don't need a password. 
* The -keyout option is the output of the key which will be written into *key.pem*
* Similarly, with the -out option we create the *cert.pem* file with the self-signed certificate. 
* Finally, we use the -days flag to indicate how long the SSL certificate will be valid for

This will output two 4096 bit files containing the key and certificate after we provide some ownership data. The *key.pm* contains a 4096 bit key that ensures we are the only ones allowed to encrypt data for this server. Ownership of the key ensures we are able to encrypt data for the server identified with *cert.pem*

In addition, the *cert.pem* allows you to decrypt data encrypted with the private key. This is a simple overview of how public key cryptography works.

#### Your connection is not private warning

Since we are not a trusted CA recognized by our browser, our self-signed certificate is not trusted by the browser so it gives us a warning telling us our connection to the server is not private.