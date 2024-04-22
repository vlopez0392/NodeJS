const express = require('express');
const app = express();
const PORT = 3000;

//Query and add to list of friends
const friends = [
    {
        id:0,
        name: 'Albert Einstein'
    },
    {
        id:1,
        name: 'Isaac Newton'
    },
];

//Defining a route
app.get('/', (req, res)=>{
    res.send({
        id: 1, 
        name: 'Sir Isaac Newton'
    });
});

app.get('/friends', (req,res) => {
    res.json(friends);
})

//Route parameter
app.get('/friends/:friendId', (req, res)=> {
    const friendId = Number(req.params.friendId);

    //Validation 
    const friend = friends[friendId];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
});

app.get('/messages', (req, res)=>{
    res.send('<ul><li>Hello Albert!</li></ul>')
})

app.post('/messages', (req, res)=>{
    console.log('Updating messages!');
})

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
});


