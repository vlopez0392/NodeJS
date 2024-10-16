
### The spaceX API 

How are we getting the data from the spaceX API? We are using an unofficial spaceX API to query the spaceX launch data we need and track this data in our mongoDB. The first step in using any API is exploring it, figuring out what data it contains and how it organizes that data. We also need to determine how to best use the data that is relevant to us. 

To start, we need to get a list of all the launches ever made by spaceX. Since the spaceX API is RESTful, it is likely this collection exists. Currently, we can make a GET request to the spaceX API as follows: 

```bash
GET https://api.spacexdata.com/v5/launches/latest
```

We can see that our interactions with the API are encrypted with the https protocol. The API is versioned and as of this date, it is currently on version 5. When we see a version string as above, that means that any route we add after it falls under the version shown. Whenever we upgrade our API or change how it works, we can keep older versions v1, v2, etc. so that existing users can still use those versions and migrate whenever they need to. 

When we release an API to the public, it is a good idea to keep older versions around because many applications may use the API and not all of them will be updated at the same time. Currently, our NASA API has only one client but if we release our API to the public to be used across many devices, it is a good idea to start versioning our API as explained above.