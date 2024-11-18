November 20th, 2024

### OAuth 2.0 Authorization Code Flow

The OAuth flow has 4 main roles:

1. **Resource owner**: The User which makes use of a User agent (browser) to talk to the client.

2. **Client**: The web application that will try to access some protected data in an API or DB stored in the resource server.  

3. **Resource Server**: The backend of our application. If the client is *myapp.com* the API in the resource server is probably *api.myapp.com*. This API will want to restrict certain data such that only the Resource owner can access it. With OAuth, the authorization server provides this ability to restrict the data in the API.

4. **Authorization Server**: The most important piece of the OAuth flow. Authenticates the resource owner when they log-in to the client and gives them access tokens such that they can access the resource server API. If we are doing social sign on the OAuth server could possibly be *accounts.google.com* if we use Google.

   The OAuth standard does not define a standard token, but oftentimes authorization servers use JWTs (Bearer tokens). The OAuth2 standard does standardize Bearer tokens and is widely adopted by companies like Google. The access token is used in place of sending your username and password directly to the resource server. 

   The authorization server then acts as an intermediary between the resource server and client by using access tokens such that the user never has to input their password in the resource server. 