### Express vs NextJS vs Koa 

The are a few major players that when it comes to build node backends. Node is constantly evolving so it's a good idea to be aware of the best options before diving in. 

We will be focusing on Express, created in 2010, not long after Node was created. Express uses call back functions heavily when responding to requests and behaves much like an add-on to node built-in capabilities with similar patterns used in the Node HTTP server we built.

Express focuses on doing a few things very well:

* Routing requests coming in to different endpoints 
* High performance and efficiency in handling these requests.
* Reliable and well-tested.

Express was designed to be minimal and to be easily extended with many extra features as needed using middleware. Middleware allows you to manipulate how you process requests coming in and responses going out and add additional functionality to your server's capability.

Lots of documentation is available on various API references which include all express objects and other additional express resources.

---- 
### Other frameworks
#### Loopback 4

Loopback 4 is another framework that build upon express suitable for large scale enterprise applications. Loopback 4 adopts the opposite approach from express and adopts a convention over configuration philosophy. There are less decisions to make but it can make debugging of code (or extending the framework) more challenging.
#### Koa

Koa is another framework that better leverages JavaScript features such as async-await and native promises. Koa's design goal is to be more modular than express making it easier to design middleware that can be shared between projects. 

Koa code looks a lot like express, however, it bundles the *res* and *req* objects into a single context or *ctx* object. Koa focuses in minimizing built-in features and instead relying on a very powerful middleware system that allows it to be extended easily with modern Javascript syntax such as async-await.
#### Next JS

A framework centered in simplifying React integration with the server side. NextJS has benefited greatly from React's growing popularity and because of it, it's being used by some companies like Netflix and Github.

NextJS aims to make server side rendering easy when making React web applications. Why is server side rendering so important to NextJS? Server side rendering is when content on your web page is rendered on the server and not on your browser. 

It's a technique used for performance and search engine optimization, where rendering work normally done on the client side is done on the server side and the server sends back the fully rendered page to the client so the client has to do less work. Then, a search engine crawler like Google doesn't need to render the JS code and thus improve the ranking of your site in the search engine.

Server-side rendering trades off the amount of work needed to be done the browser but places extra load on the server. NextJS also supports TypeScript to add type checking to JS. It integrates analytics and various other optimizations. 

Because of its specialized focus in React and other integrations with other technologies, it is not quite as versatile when building APIs and backends as Express. 





