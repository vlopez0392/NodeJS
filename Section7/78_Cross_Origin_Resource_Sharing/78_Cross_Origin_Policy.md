### Cross Origin Resource Sharing (CORS)

CORS allows us to relax the restrictions that the same origin policy enforces. This way, we can make applications that potentially span man y different domains and origins. Because the same origin policy generally limits us to communicate with a single origin. 

What does wikipedia do when requesting resources? Wikipedia gets a lot of its media (diagrams and images) from a partner site *wikimedia.org*. Wikipedia and other websites are able to make requests to *wikimedia.org*  cross origin because it uses the following CORS header:

```http
Access-Control-Allow-Origin: *
```

This is a header that's set on the server that specifies the origins that the resources from the server, like diagrams and images, can be shared with **beyond** the same origin that the file exists on. If this header is not set, the default rules (same origin policy) apply.

The same origin policy is restrictive for a site of the size of wikipedia since it's content may be spread across many different origins or APIs at different sites. The CORS header allows an exception when we know requests from a different domain are safe and expected. 

The server who owns the data controls the CORS header. This header is optional, but we may include specific origins in our header: 

```http
Access-Control-Allow-Origin: https://www.google.com
```

The first example with the asterisk symbol ( \* ) means we allow requests from any origin. Usually, we see this in servers that are under development or host data that is meant to be by anyone on the internet. 

--- 
#### Whitelisting 

CORS follows the practice of explicitly allowing selected parties to a particular privilege or service. This is called **whitelisting**. It is the opposite of blacklisting, which blocks privileges to selected parties only. When it comes to security, whitelisting is preferred. 

This is analogous to what CORS and the Access-Control-Allow-Origin header does. It whitelists the origins allowed in the header while denying all other origins. The wikimedia servers made the choice to allow all origins to get their data. This is likely because they decided that data is access is more important than data security.

Finally, it is worth noting that the browser makes the enforcement of the same origin and CORS policies.