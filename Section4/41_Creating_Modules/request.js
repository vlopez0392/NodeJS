//Only relevant to the request module
function encrypt(data){
    return 'encrypted'
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to URL ${url}`)
}

//Module is a global built-in relating to the current module
module.exports = {
    send,
}