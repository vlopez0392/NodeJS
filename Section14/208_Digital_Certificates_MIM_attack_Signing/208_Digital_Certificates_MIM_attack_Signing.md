October 31st, 2024
### Digital Certificates, MIM attack and Signing

For our data to be encrypted with SSL or TLS, we require an SSL or TLS certificate. A digital certificate is defined as follows:

*A digital certificate is used to verify the server's ownership prior to sending encrypted data*

Just like on a physical certificate, on a digital certificate if the signature on it is valid and we trust the entity that issued the signature and TLS certificate, then we are willing to use the key sent by the server to exchange encrypted data with the server. This serves to verify that we are talking to the server that we expect. It is not enough that the data is encrypted. 

#### Man-in-the-middle (MIM) attack

If we send encrypted data to a malicious hacker who has the key to decrypt the data. This is known as a MIM attack where a hacker pretends to be the server we're talking to and steals the data for their purposes. With digital certificates we verify the server's ownership to prevent MIM attacks. 

#### Certificate Authority 

Who issues and signs the certificates? This entity is known as a Certificate Authority or CA: 

*A trusted organization that issues digital certificates*.

Our computers and browsers trust CAs to issue valid digital certificates that verify the server's owners. In the early days of the internet, we had to buy these certificates from CAs that would potentially cost hundreds of dollars. Nowadays there are free CAs such as Let's Encrypt (backed by Google and FB) that provide the same security without the added costs. 

However, Let's Encrypt requires your site to have a domain name and can't just be an IP address in some server somewhere.

#### Self-signed certificates 

*Self-signed certificates enable HTTPS but are not to be trusted by others. They are useful for development*

These certificates are signed by ourselves in our own machines. We are not registered as a CA so we don't have the reputation of an actual CA to be trusted by others. Self-signed certs are useful for development we can sign them for IP addresses but are not useful for production because they are still vulnerable to MIM attacks. There's no trusted third-party or CA to verify who you are talking to.

If our browsers detect websites with self-signed certificates, a warning will be issued with an invalid certificate error. We can only explicitly visit these sites by our own choice. 

Thus, websites we must only visit CA-signed certificates and use these certificates for production:

*CA-Signed certs are trusted by most clients on the web. Useful for production.*

Only servers registered with CA will pass the trust check by our browsers. All TLS certificates can be broken down in two categories (self-signed and CA-signed). Just like TLS protocol encrypts our traffic, these certificates help to verify the ownership of the servers we are talking to.
