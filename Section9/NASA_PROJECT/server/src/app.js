const express = require('express');
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const path = require('path')
const app = express();
const cors = require('cors')
const morgan = require('morgan')

app.use(cors({
    origin: 'http://localhost:3000'
}))

//Morgan will log everything below in the middleware chain
app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname,'..','public')))

app.use('/planets',planetsRouter)
app.use('/launches',launchesRouter)

app.get('/*', (req,res)=>{ //Matches any endpoint in the react app if not defined by the API
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
});

module.exports = app