## What does Asynchronous mean?

It simply means we don't have all the data initially. We have our HTML, CSS and some JS, but as the data is being loaded, we also need make requests to databases or across the web to fetch some third-party API. 

All of the above examples require asynchronous code because it's data we don't have yet. We then tell JS to find the data and come back when it finds it.

JS has no idea what the WWW looks like. The web browser and NodeJS allows us to use asynchronous code to interact with things outside the world of JS. Asynchronous functions are functions that we can execute later. 