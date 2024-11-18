November 18th, 2024
### Authentication vs Authorization 

In many of the sites that we build, we want to add the ability for users to log in. Users will login only and only if we need some parts of our app to be protected such that not all users can view everything in our application. 

For example, if our servers stores data for three different users, these three users want their data or resource to be accessed only by them. 

#### Authentication vs Authorization 

When it comes to login and securing the data in our applications, there's two main concepts that are often confused:

1. **Authentication:** Validates who users are who they claim to be with a user name and password. Two-factor authentication is also used to further verify a user's identity either through text, email or even through hardware authentication devices. 

2. **Authorization:** Checks whether a particular user has access to a particular resource once they have been authenticated. Also called access control since it controls which resources in the server the current user has access to. It checks what the user has permission to do.

#### Auth 

Sometimes both authentication and authorization are sometimes combined in Auth. This is a cause of a lot of confusion between the two terms. 

#### HTTP response codes related to Auth
 
1. 401 Unauthorized: User is not authenticated and thus not allowed to make requests to the server. 

2. 403 Forbidden: User has access to the server, but does not have the rights to the requested content and the server is rejecting the the request.
