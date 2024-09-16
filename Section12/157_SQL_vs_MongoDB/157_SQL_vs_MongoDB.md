### SQL vs. MongoDB

Let's determine which DB choice has the most advantages for our NASA project. First, note the both SQL and MongoDB will meet the requirements of data persistence outside the node process as discussed previously.

#### SQL 

SQL was created in the 1970's and was very popular during the first the days of the internet in the 2000s. It had some decades to prove it worked and allowed us to store our user information reliably. Lately, SQL has undergone a resurgence with DBs admins and architects realizing that many SQL features and ideas are still invaluable in the current era of the internet and Big Data.

Features like reliable transactions have made it to MongoDB and other NoSQL DBs. 

#### Choosing your technology 

The best way to choose your technology is:

1. To pick the right tool for the right job at hand.
2. Knowing the data we need to store
3. Designed for the users who will be using the application, and the application flows these user will be following when using the applications. 

#### NoSQL and MongoDB

In the 2010s and late 2010s, as websites and applications grew in size NoSQL and MongoDB came along. Sites like Google and Netflix with massive amounts of data needed to perform very quickly! 

In our NASA application, all of our responses return JSON and our server is written in JS. In MongoDB our collections and documents are stored in BSON (very similar to JSON). BSON was built so that the MondoDB JSON objects are parsed more quickly and it looks exactly like JSON. 

Since MongoDB stores the data in BSON which is JSON format internally, then we don't need to transform our data to another format such as tables used in SQL DBs. 

The choice of DB depends on a mismatch between between how things are stored and used. Our application returns JSON as a response so a DB that stores data in JSON format is convenient. This is the reason why so many JS projects use MongoDB as a DB. 

#### Object-relational impedance mismatch

MongoDB includes a shell when installed that allows you to make queries against the mongo database. MongoDB uses JS as its internal scripting language. Some SQL DBs allow you to store JS objects as JSON data in the DB such as Postgres JSON, however, by design SQL databases work best with relational data which is split into related tables as we saw before. 

The way we organize the data into tables doesn't often align how we store it in JS or collections of documents in mongoDB. Thus, we need to add an extra layer that transforms our data into a format that works well with SQL. This is known as *Object-relational impedance mismatch*.

This means we need to map the way data is stored in a relational DB to the way objects are consumed and used in our code. This mapping is not always simple. NoSQL DBs allows us to avoid this issue by storing our data that matches the way it is used in our code. 




