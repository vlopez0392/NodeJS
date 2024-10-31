October 30th, 2024
### Security and Authentication Overview 

In this section we are are going to cover security and authentication and topics such as:

* Social sign-on with social media and email
* Securing our node servers 
* Implementing login using Googles OAuth

We are not going to implement our own security (cookies and tokens or using libraries such as bcrypt) because in the real-world we never implement authentication from scratch. 

Security flaws occur when we try to implement our own security, thus we stick to well-proven security approaches such as OAuth. There's many breaches every year due to poor security that result from buggy implementations. In the real-world we use sign-on services such as, Auth0, Okta, Amazon Cognito and social sign-on. 

The previously mentioned approaches all follow the OAuth standard which is the most popular and widely used way of logging in on the internet. 

We have discussed security browser features such as CORS to avoid sending data to the wrong servers. We have also talked about white-listing and the principles of least privileges which restricts access to only those who have the access rights. Finally, we have discussed auditing our npm packages to catch any known security issues with our npm packages. 

Let's explore these fascinating topics in the context of node servers!