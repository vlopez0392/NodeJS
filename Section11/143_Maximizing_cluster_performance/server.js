const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration){
    const startTime = Date.now()
    while(Date.now() - startTime < duration){
        //Do nothing and wait for duration
    }
}

app.get('/',(req,res)=>{
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer',(req,res)=>{
    //Delay response
    delay(9000);
    res.send(`Ding ding ding ${process.pid}`);
});

if(cluster.isMaster){
    console.log("Master has been started");
    NUM_WORKERS = os.cpus().length;
    for(let i = 0; i < NUM_WORKERS; i++){
        console.log(`Created ${i} worker`)
        cluster.fork();
    }
}else{
    console.log("Worker process started");
    app.listen(3000)
}

