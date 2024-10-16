const http = require('http')
const mongoose = require('mongoose')
const {getAPIkey} = require('./getKey')
const app = require('./app')
const {loadPlanetsData} = require('./models/planets.model')
const {loadLaunchData} = require('./models/launches.model')

const PORT = process.env.PORT || 8000 
const server = http.createServer(app);

mongoose.connection.once('open', () => {
	console.log('MongoDB connection ready! ')
});

mongoose.connection.on('error', (err) => {
	console.log(err)
});

async function startServer(){
    const MONGO_URL = await getAPIkey();
    await mongoose.connect(MONGO_URL);
    await loadLaunchData();
    await loadPlanetsData();

    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
    })
}

startServer();
