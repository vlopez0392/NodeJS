//2. We can also set the properties on the module.exports 
//   objects directly by assigning them. (NOT RECOMMENDED) 
exports.REQUEST_TIMEOUT = 500;

//Only relevant to the request module
function encrypt(data){
    return 'encrypted'
}

exports.send = function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to URL ${url}`)
}






