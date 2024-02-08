//Let's model the HTTPS module to create our own module
//Each file in nodeJS is a separate module

// const request = require('./request.js');
// const response = require('./response.js');

//Desctructuring syntax - Allows to call the read and send functions directly
const { send } = require('./request.js');
const { read } = require('./response.js');

//Request/Send data to server
function makeRequest(url, data){
    send(url, data)
    return read()
}

console.log(makeRequest('https://google.com','hello'));





