const REQUEST_TIMEOUT = 500;

//Only relevant to the request module
function encrypt(data){
    return 'encrypted'
}

function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to URL ${url}`)
}

//Module is a global built-in relating to the current module
//1. We can set our module.exports in one step 
//This makes it more clear what the interface to your module will be and 
//how it will be accessed. (RECOMMENDED)

module.exports = {
    send,
    REQUEST_TIMEOUT
}
