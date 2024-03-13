const {send, read} = require('./internals');

// const { send } = require('./internals/request.js');
// const { read } = require('./internals/response.js');

function makeRequest(url, data){
    send(url, data)
    return read()
}

console.log(makeRequest('https://google.com','hello'));





