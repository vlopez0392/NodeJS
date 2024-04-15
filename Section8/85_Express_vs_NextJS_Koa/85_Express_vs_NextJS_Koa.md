### Express vs NextJS vs Koa 

Express focuses on doing a few things very well:

* Routing requests coming in to different endpoints 
* High performance in handling these requests.
* Reliable and well-tested.

---- 
#### Other frameworks 

Loopback 4 is another framework that build upon express for large scale enterprise applications. Loopback 4 adopts the opposite approach from express and adopts a convention over configuration philosophy. There are less decisions to make but it can make debugging of code (or extending the framework) more challenging

Koa is another framework that better leverages JavaScript features such as async-await and native promises. Koa's design goal is to be more modular than express making it easier to design middleware that can be shared between projects. 

Koa code looks a lot like express, however, it bundles the *res* and *req* objects into a single context or *ctx* object. Koa focuses in minimizing built-in features and instead relying on a very powerful middleware system that allows it to be extended easily with modern Javascript syntax such as async-await.