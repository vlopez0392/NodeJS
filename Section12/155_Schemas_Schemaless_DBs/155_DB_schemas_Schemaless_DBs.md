### Database Schemas and Schemaless DBs

One misunderstood aspect of DBs is schemas.

|                    |     **MongoDB**      |    **Postgres**    |
| :----------------: | :------------------: | :----------------: |
|      **Type**      |       Document       |     Relational     |
| **Organized into** |     Collections      |       Tables       |
| **Query Language** |        NoSQL         |        SQL         |
|    **Scaling**     | Primarily Horizontal | Primarily Vertical |
|     **Schema**     |       Flexible       |       Rigid        |

For instance, if we have a list of friends being tracked in the DB. A schema could dictate that every friend object contains a first name, last name, phone number and address. This allows our data to be predictable and structured. 
##### SQL

With SQL, data follows a rigid schema and require you know the schema of the DB ahead of time. In this way, SQL resist evolution and are hard to be restructured. For instance, if our DB is currently being used by some application, we can't change the type of data that our tables hold very easily and need to bring our DB down to migrate our data from one schema format to another. This is not convenient for an application that is expected to be running 24/7. 

##### NoSQL

While MongoDB is often considered a schemaless DB, it is not necessarily true. We can enforce schemas with our API. The API could enforce the schema every time we read or write to the DB. This allows us to take advantage of the speed and flexibility of NoSQL by also adding some safety and structure of schemas. 

With these approaches we must trade-off safety for perfomance and flexibility with predictability. It really depends on what we are doing.