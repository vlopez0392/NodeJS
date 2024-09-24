const fs = require('fs');
const path = require('path');
const { get } = require('http');
const api_fp = '/Users/victorlopez/Documents/Backend_Engineer_Path/config/api_keys.txt';
let result = []

function loadAPIkey(){
    return new Promise((resolve, reject) => {
        try{
            const readableStream = fs.createReadStream(api_fp, {encoding:'utf-8'})
            readableStream.on('data', (line) => {
                    result.push(line)
                })
            .on("end", () => {
                result = result[0].split('\n');
                result = result.filter(item => item.length >1);
                result = result[0].slice(result[0].indexOf('=')+1)
                resolve(result)
               });
        }catch(err){
            console.log(`Error: ${err}`)
        }
    });
}
async function getAPIkey(){
    return await loadAPIkey();
}

module.exports = {getAPIkey}
