### Vulnerabilities in Dependencies 

It's common for security issues to be found in our packages. Any complex piece of software will have some issues within its lifespan. In NPM, it's likely you will run into security issues given the amount of packages available. 

We must then react quickly to keep our applications secure by updating/patch our packages. Hackers will try find security weaknesses and developers must act quickly to avoid and minimize these possible security issues and their consequences. 

Suppose we specified our axios version as *^0.20.0* , an already deprecated version of axios. Although the package is successfully installed, we get the following warning in our terminal: 

```bash 
npm WARN deprecated axios@0.2.2: Critical security vulnerability fixed in v0.21.1. For more information, see https://github.com/axios/axios/pull/3410

added 2 packages, and audited 3 packages in 2s

1 high severity vulnerability

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

A critical security vulnerability fixed in version 0.21.1 was found by npm. We can use the npm audit command to check if there are any security issues in any of the packages we depend on: 

```shell 
npm audit 
```

The following is returned: 

```shell
axios  <=0.21.1
Severity: high
Axios vulnerable to Server-Side Request Forgery - https://github.com/advisories/GHSA-4w2v-q235-vp99
Denial of Service in axios - https://github.com/advisories/GHSA-42xw-2xvc-qx8m
axios Inefficient Regular Expression Complexity vulnerability - https://github.com/advisories/GHSA-cph5-m8f7-6c5x
fix available via `npm audit fix --force`
Will install axios@1.6.8, which is a breaking change
node_modules/axios

1 high severity vulnerability

To address all issues (including breaking changes), run:
  npm audit fix --force
```

Because axios makes requests on the internet, we must make sure it makes all those requests to the servers in a secure way. Otherwise, we are exposing ourselves pretty dangerously. We then call the command fix to address the issues: 

```shell 
npm audit fix
```

When developing node applications, we must make sure we take the warnings from *npm audit* very seriously. Note that *npm audit* only reports issues that have been reported and can only fix them if an update is available. Otherwise it is recommended to switch to a better supported and more secure library/package. 