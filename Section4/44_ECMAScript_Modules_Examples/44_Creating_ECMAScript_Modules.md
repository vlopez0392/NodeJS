
## Creating ECMAScript modules 

NodeJS treats JS files as CommonJS modules by default for backwards compatibility. NodeJS treats JS files as CommonJS modules since it was created. We need to rename our file names with the *.mjs* extension for NodeJS  to treat our code as an ECMAScript module. 

Unlike with the *require* function, we must specify the *.mjs* extension when using the import statement. We might see some codebases that don't require the extension renaming (If it's handled by some other means), however, if we are treating our modules as ECMAScript modules, it is good practice to use the file extension for better compatibility with modern browsers and other JS runtimes such as Deno which always uses the full path or URL to the file you are importing. 



