//Let's model the HTTPS module to create our own module
//Each file in nodeJS is a separate module

const request = require('./request.js');
const response = require('./response.js');

//Request/Send data to server
function makeRequest(url, data){
    request.send(url, data)
    return response.read()
}

console.log(makeRequest('https://google.com','hello'));
