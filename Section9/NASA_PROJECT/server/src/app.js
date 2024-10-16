const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const api = require('./routes/api');

app.use(cors({
    origin: 'http://localhost:3000'
}))

//Morgan will log everything below in the middleware chain
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')))

app.use('/v1', api);

app.get('/*', (req,res)=>{ //Matches any endpoint in the react app if not defined by the API
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

module.exports = app