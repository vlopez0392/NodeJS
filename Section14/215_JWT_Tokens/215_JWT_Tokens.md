
November 19th, 2024 

### JWT Tokens 

JSON web tokens are an open industry standard for securing claims securely between two parties. JWTs are access tokens which are similar to API keys. They uniquely identify a specific user of an application and act as a set of credentials to that user to grant access to an API. 

When a user logs in with a username and password to the Server API, usually with a POST to the */authenticate* endpoint, the server API checks if the username and password are correct. If they are correct, an access token is issued by the server (the JWT token) and afterwards the access token is passed in every request to the API so the server can verify that the user is authorized to perform the requests they are trying to make.

#### Token-based (Bearer token) authentication 

The above flow is known as token-based authentication or bearer authentication. The person carrying the token is the Bearer. The bearer is in possession of a token that can be used to access specific resources in the server.

The bearer tokens are passed in the header of the request. The most common type or tokens are:

1. **Opaque tokens:** Follows some format not understood by the server. Our API will make another request to another server which issued the token in the first place. 

2. **JWT tokens:** JWT tokens follow the JWT standard which tells API developers how to decode the tokens so they can be validated before trusting it and respond to some request. Also, to verify that the correct permissions have been granted to that token. 

   JWTs are nice because they don't require the additional request and can be extended with additional functionality that your server might need.

#### JWT as credentials 

JWTs are credentials that allows us to access specific resources. JWTs may be customized and extended to include additional data. JWTs when decoded, consist in three parts:

1. Header: A JSON object which sets the algorithm (HMAC) to sign the token and the type of the token (JWT).

```json
//Header example
{
	"alg":"HS256",
	"typ":"JWT"
}
```

2. Payload: If we change the payload, the JWT encoding will also change to reflect the new data. The server may check the data in the payload to determine what resources to give access to.

	```json
//Payload example
{
	"sub": "423434",
	"name":"Vick",
	"iat": 3821372
}
```

3. **Signature:** JWT tokens are a piece of encoded information, they can be encoded and decoded to get the plain text or JSON object by using a base-64 encoding function. The signature is determined by the algorithm specified in the header (HMACSHA256) and is included as the last part of the JWT token. The server can verify that the token was not tampered with. 

   The token can only be encoded with a valid signature which has a secret in the signature. Note that tokens are not encrypted. The signature only prevents manipulation of existing tokens or creation of fake credentials. Only the server with the secret used in the JWT signature can create new valid tokens and change the name in the payload. 

   In summary, the JWT tokens cannot be tampered with but it can be publicly read by anyone who has access to a JWT token. JWT depends on the TLS/SSL and HTTPS secure network communication protocols to avoid the tokens to be accessed in the network. Token-based authentication only works when using HTTPS. 

#### Claims

Some optional fields such as *sub* and *iat* in the JWT payload are part of a claim. A claim is claimed to be true by the JWT token. The sub field is the subject identifier and tells you who this token carries information about (represented by a unique user ID or hash). In addition the iat field stands for issued at and determines how old the token is. 

In general it is advisable to limit the amount of data we put in our JWT tokens to the information that identifies the user and the access to the API. In addition, we add metadata needed to validate the token and check for example that the token has not expired. This additional data can be verified in the server-side and allow for more flexibility to grant specific permissions to the individual users than a general public API key might allow. 

In summary, token-based authentication, possession by a user of a valid token gives them access to the API as long as they have that valid token.