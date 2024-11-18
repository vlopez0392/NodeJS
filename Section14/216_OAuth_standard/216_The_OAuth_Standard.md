November 19th, 2024
### The OAuth standard 

One of the most widely used approaches to implement login is OAuth. What is OAuth? It is an authentication standard that has enabled social sign-on to become so widespread (Google, Facebook, Github implement it).

OAuth2 defines the flow or process that goes on behind the scenes when you log on to a site like Google. The steps involved in this process is complex, however we must take into consideration the problem we are trying to solve. With OAuth, we want to let a user access some application without necessarily inputting a password into the site. 

For instance, if want to log in into medium with our Google account. Whenever we click sign in with Google, we are redirected to an OAuth server owned by Google. We never input the password to Google into Medium. Once we login, the OAuth server will provide an access token to the client which is used by the client to access data in the resource (Medium's) server or API. 

Google internally uses OAuth as well. When we sign into Gmail, we are also redirected to the same OAuth server as when we are redirected from the Medium app. This helps Google focus in securing the OAuth server much better since all of the associated accounts are kept in a single place and not spread among multiple servers.