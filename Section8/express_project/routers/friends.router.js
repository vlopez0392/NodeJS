const express = require('express')
const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router();

//Defining middleware within a router 
friendsRouter.use((req,res,next) => {
    console.log('IP ADDRESS: ', req.ip)
    next();
});

friendsRouter.post('/',friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter