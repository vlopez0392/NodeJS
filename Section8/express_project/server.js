const express = require('express');
const app = express();
const PORT = 3000;
const friendsController = require('./controllers/friends.controller.js')
const messagesController = require('./controllers/messages.controller.js')

//Defining a middleware function 
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} Time: ${delta}ms`);
});

app.use(express.json()); 

//Defining a route
app.get('/', (req, res)=>{
    res.send({
        id: 1, 
        name: 'Sir Isaac Newton'
    });
});

app.post(friendsController.postFriend);
app.get('/friends', friendsController.getFriends)
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages)
app.post('/messages',messagesController.postMessage)

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
});


