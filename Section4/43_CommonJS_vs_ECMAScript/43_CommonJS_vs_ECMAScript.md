## Common JS vs ECMAScript

The modules we have seen so far are CommonJS modules. They are standard for modules that was created in 2009 (when NodeJS started). They are also used in other server-side technologies like MongoDB. 

The other major standard competing with CommonJS is ECMAScript standard. It is followed as much as possible by modern browsers and the V8 JS engine Node uses. ECMAScript introduced it's own modules in ES6. 

Rather than using the *require* function,  we use the *import* statement (similar to Python or JS). Similarly, we use the *export* keyword instead of *module.exports*. Starting from version 13.2, NodeJS started supporting ECMAScript modules. This is great when building projects with both a backend and frontend (switching back and forth). This allows for sharing code between the backend and frontend modules.

In NodeJS, we'll mostly see CommonJS, but as time goes by ES6 modules will be adopted. However, for now the vast majority of Node code has been written with CommonJS. 

