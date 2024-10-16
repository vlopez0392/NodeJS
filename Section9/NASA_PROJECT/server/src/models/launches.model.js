const launchesDB = require('./launches.mongo');
const planets = require('./planets.mongo');
const axios = require('axios');

const DEFAULT_FLIGHT_NUMBER = 100;
const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches/query";

const launch = {
    flightNumber: 100, //flight_number
    mission: 'In-memory object mission', //name
    rocket: 'Kepler 3',                  //rocket.name
    launchDate: new Date('December 27, 2030'), //date_local
    target: 'Kepler-1652 b',                    
    customers: ['NASA', 'Vick'], //payload.customers for each payload 
    upcoming: true,              //upcoming
    success: true,               //success
}

async function loadLaunchData(){
    console.log("Downloading launch data...");
    const response = await axios.post(SPACEX_API_URL, {
        query:{},
        options:{
            populate:[
                {
                    path:'rocket',
                    select:{
                        name:1
                    }
                },
                {
                    path: 'payloads',
                    select: {
                        customers: 1
                    }
                }
            ]
        }
    });

    const launchDocsData = response.data.docs;
    for(const launchDoc in launchDocsData){

        //Allows us to convert the list of customers into a single Array 
        const payloads = launchDoc['payloads'];
        const customers = payloads.flatMap((payload)=>{
            return payload['customers'];
        });

        const launch = {
            flightNumber: launchDoc['flight_number'],
            mission: launchDoc['name'],
            rocket: launchDoc['rocket']['name'],
            launchDate: launchDoc['date_local'],
            upcoming: launchDoc['upcoming'],    
            success:  launchDoc['success'], 
            customers, 
        }
    
        console.log(`${launch.flightNumber}, ${launch.mission}`);
    }
}

async function getAllLaunches(){
    return await launchesDB.find({}, {'__v':0, '_id':0});
}

async function saveLaunch(launch){
	const planet = await planets.findOne({
		keplerName: launch.target,
	});
	
	if(!planet){
		throw new Error('No matching planet found!')
	}

	await launchesDB.findOneAndUpdate({
		flightNumber: launch.flightNumber,
	},launch,{
		upsert: true,
	});
}

async function getLatestFlightNumber(){
    const latestLaunch = await launchesDB
    .findOne()
    .sort('-flightNumber');

    if(!latestLaunch){
        return DEFAULT_FLIGHT_NUMBER;
    }

    return latestLaunch.flightNumber;
}

async function scheduleNewLaunch(launch){
	const newFlightNumber = await getLatestFlightNumber() + 1;
	
	const newLaunch = Object.assign(launch, {
		success: true,
		upcoming: true,
		customers: ['NASA', 'Vick'],
		flightNumber: newFlightNumber,
	});

	await saveLaunch(newLaunch);
}

//Abort launches
async function existsLaunchWithId(launchId){
    return await launchesDB.findOne({
        flightNumber: launchId,
    });
}

async function abortLaunchbyId(launchId){
    const aborted = await launchesDB.updateOne({
        flightNumber: launchId,
    }, {
        upcoming: false,
        success: false,
    })

    return aborted.modifiedCount === 1;
}

module.exports = {
    loadLaunchData,
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchbyId,
}


