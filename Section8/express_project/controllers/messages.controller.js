const path = require('path');

function getMessages(req, res){
    //res.send('<ul><li>Hello Albert!</li></ul>')
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Aqua_Coast.jpg'))
};

function postMessage(req, res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages, postMessage
}


