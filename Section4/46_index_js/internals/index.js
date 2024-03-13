//First pattern
// module.exports = {
//     request: require('./request'),
//     response: require('./response'),
// }

//Second and more common pattern
const request = require('./request');
const response = require('./response');

module.exports = {
     send: request.send, 
     REQUEST_TIMEOUT: request.REQUEST_TIMEOUT,
     read: response.read,
}

