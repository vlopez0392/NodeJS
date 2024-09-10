
### Introduction to Databases 

What is a database? A DB is a collection of data and a tool we use to access and work with that data. Why do we need DB in a Node course? 

In real life applications our servers work with data that they make available to the users in a client like a web browser (e.g. list of potentially habitable planets). In these applications, our data must persist in our server so it can be accessed if we ever update or restart that server. 

When we save data to a JS array or map object in our Node process, it DOES NOT persist. It only exists temporarily while the server process is running. If the process is shut down, we lose that data permanently. 
#### Databases 

Databases are pieces of software that we use to help us *persist* our data. We want to take advantage of these DB softwares to perform CRUD operations in an efficient way and keep track of our data as it changes over time. 

Servers then query the DB to update or access that data. The DB sends the appropriate data back in the response. Let's explore the different types of DB such that we can make an informed decision on which DB to use.  