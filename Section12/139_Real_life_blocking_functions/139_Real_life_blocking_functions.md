
### Real life blocking functions 

What are some real-life examples that behave similarly to the simple blocking server from the previous video?
#### JSON

Two functions that we are very likely to see are:

* JSON stringify's function takes a JS object and returns a string representation of it. 

* JSON parse function which does the opposite of JSON stringify.

The above functions will finish in a few milliseconds for single requests even for large JS objects, however if our server is taking many requests, then blocking behavior will occur. This is common when logging objects. 

If the functions above block the server for 10 ms and the rest of the request takes 10 ms, then we double the time taken to respond to that request. Any other requests will block while the JSON function is executing. 

#### Sort 

When we call *Array.sort( )*, we block the event loop while the array is being sorted. For very large arrays, these functions can start getting very slow. 

#### Crypto.scrypt

By design, these functions related to cryptography are slow such that hackers take longer to try to guess your password or perform an attack. Key derivation functions use hashes that make brute force attacks expensive and unrewarding. Hackers need to dedicate significant resources to try one password, so it discourages trying to make millions or thousands of requests. 

Slow and blocking functions are desired in security! 

#### Response times 

We want to keep our response times in the order of milliseconds, where, according to researchers, 100 milliseconds is the threshold where humans perceive something as happening "instantaneously".

Any response times in the order of 1 second or more decreases user engagement in actions such as submitting forms and loading webpages. Each delayed millisecond can decrease revenue significantly. 

These are strong arguments to have performant servers and low response times. 