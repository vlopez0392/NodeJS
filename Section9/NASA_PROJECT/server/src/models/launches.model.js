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

async function populateLaunches(){
    console.log("Downloading launch data...");
    const response = await axios.post(SPACEX_API_URL, {
        query:{},
        options:{
            pagination: false,
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
        },
    },
    {
        headers: {'Accept-Encoding': 'text/html: charset=UTF-8'}
    });

    if(response.status !== 200){
        console.log("Problem downloading launch data");
        throw new Error("Launch data download failed");
    }

    const launchDocsData = response.data.docs;
    for(let i =  0 ; i < launchDocsData.length; i++){

        //Allows us to convert the list of customers into a single Array 
        const payloads = launchDocsData[i]['payloads'];
        const customers = payloads.flatMap((payload)=>{
            return payload['customers'];
        });

        const launch = {
            flightNumber: launchDocsData[i]['flight_number'],
            mission: launchDocsData[i]['name'],
            rocket: launchDocsData[i]['rocket']['name'],
            launchDate: launchDocsData[i]['date_local'],
            upcoming: launchDocsData[i]['upcoming'],    
            success:  launchDocsData[i]['success'], 
            customers
        }
        console.log(`${launch.flightNumber}, ${launch.mission}`);
        await saveLaunch(launch);
    }
}

async function loadLaunchData(){
    const firstLaunch = await findLaunch({
        flightNumber: 1, 
        rocket: 'Falcon 1',
        mission: 'FalconSat'
    })

    if(firstLaunch){
        console.log("Launch data was already loaded!");
    }else{
        await populateLaunches()
    }
}

async function getAllLaunches(skip, limit){
    return await launchesDB.find({}, {'__v':0, '_id':0})
    .sort({flightNumber:1})
    .skip(skip)
    .limit(limit);
}

async function saveLaunch(launch){
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
	
    const planet = await planets.findOne({
		keplerName: launch.target,
	});
	
	if(!planet){
		throw new Error('No matching planet found!')
	}

	const newFlightNumber = await getLatestFlightNumber() + 1;
	
	const newLaunch = Object.assign(launch, {
		success: true,
		upcoming: true,
		customers: ['NASA', 'Vick'],
		flightNumber: newFlightNumber,
	});

	await saveLaunch(newLaunch);
}

async function findLaunch(filter){
	return await launchesDB.findOne(filter)
}

async function existsLaunchWithId(launchId){
    return await findLaunch({
        flightNumber: launchId,
    });
}

//Abort launches
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


