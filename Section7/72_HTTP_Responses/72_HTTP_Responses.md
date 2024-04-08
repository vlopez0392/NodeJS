
### HTTP Responses 

Responses in HTTP are simpler than requests. We have three main parts: 

1. **HEADERS:** Optional list. Contains headers such as 'Content-Type' or the type of data that is being sent in the body of the response. 

2. **BODY:** Contains the data sent by the server. For example is the 'Content-Type' is set to 'application/json' we expect the body of the response to contain json data. 

3. **STATUS CODE:** A numeric code used to inform the client if the request made was successful or if any error occurred. Some important codes are shown below: 

	* **100 series group:** Used internally by browsers and libraries. For example when we are sending a large request (100 Continue) and want to inform the client everything is OK and the request can continue.

	* **200 OK :** The request has succeeded. 
	
	* **201 Created:** Used when we POST or PUT to the server and the resource has been created successfully. 

	 * **300 series group:** Redirection messages. The most common one is 301 which indicates that the URL on the server has been renamed or moved and the client should go to the new URL. The new URL is provided in the response. 

	* **400 series group:** Client error responses. For instance, the 400 bad request indicates that the server could not understand the request due to invalid syntax. 401 Unauthorized and 403 Forbidden are usually confused. With 401 Unauthorized, you are not authenticated or logged in so the server indicates you to authenticate yourself to get the requested response. 

	  On the other hand, 403 Forbidden indicates that the client does not have access rights to the content. That is, it is unauthorized. Unlike 401, the client's identity is known to the server.  

		* 404 Not Found: The server cannot find the requested resource. In the browser, this means the URL is not recognized. In the API, the endpoint may be valid but the resource does not exist. 
		
		* 408 Request Timeout: The server indicates the request took too long and it's no longer valid.

	* **500 series group:** Server error responses. While the request was valid, something went wrong in the server side. The server is at fault in this case. 500 Internal Server Error The server has encountered a situation it doesn't know how to handle. 501 Not Implemented is usually seen in APIs that are under development where your request might be valid but the server doesn't have the ability to respond (yet).

	  **503 Service Unavailable:** Used when there is an issue on the server side causing it to be unavailable. For example, there are too many requests and the server is unable to handle that load. 

Being familiar with these HTTP status codes is important both to frontend and backend development. It allows us to understand some of the scenarios we can experience when writing server-side code. When we write our own servers, we will be using them. 