Why do we use modules? What are the benefits of using modules? 

A module contains some code which is dedicated to doing one thing well. We label modules according to their functionality, for example, *http.js*. We combine modules to create more complex structures which altogether make up our program. Our program relies on all of these modules working together to allow  

Three main reasons why we should use modules: 
<ol>
	<li><b>Reuse existing code:</b> We want to spend our time working on our application without needing to reinvent things that already have been proven to work. Modules allow us to package existing code neatly into reusable units.</li>
	<br>
	<li><b>Organize our code:</b> Consider the HTTP module <em>http.js</em> which we use to make requests against the server and receive some data back in a response. The HTTP module will have many different functionalities but we will probably require make use of requests and responses contained in, say the <em>request.js</em> and <em>response.js</em> modules. Then, we may organize the code in our HTTP module by requiring these two modules without needing to explicitly code them.</li>
	<br>
	<li><b>Expose only the functionality that will be used by other modules and hide details that are only relevant to that module:</b> For example, in out HTTP module, we don't necessarily need to know the details of how the response reads data from the server or how the request packages our data to be transmitted over the internet. These functionalities are relevant to their modules but not to our HTTP module. This simplifies our HTTP modules since we are only interested in the higher-level operations of the request and response modules.</li>
</ol>






