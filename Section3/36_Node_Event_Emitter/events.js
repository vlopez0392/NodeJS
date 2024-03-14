const EventEmitter = require('events');
const celebrity = new EventEmitter();

//Subscribe celebrity for Observer 1
celebrity.on('race win', ()=>{
    console.log('Congratulations! Your are great');
});

//Subscribe celebrity for Observer 2
celebrity.on('race win', ()=>{
    console.log('Boo, I could have done better than that!');
});

//Name of the event is passed to the emit function
celebrity.emit('race win')
celebrity.emit('race lost') //No listeners for this event
celebrity.emit('race win')