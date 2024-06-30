const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
console.log(__dirname)

//Routers 
const friendsRouter = require('./routers/friends.router.js')
const messagesRouter = require('./routers/messages.router.js')

//Defining a middleware function 
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} Time: ${delta}ms`);
});

app.use(express.json()); 
app.use('/site', express.static(path.join(__dirname, 'public')));

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter)

app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
});



