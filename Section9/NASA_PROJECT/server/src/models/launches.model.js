const launchesDB = require('./launches.mongo');
const planets = require('./planets.mongo');

const launches = new Map();
const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
    mission: 'In-memory object mission',
    rocket: 'Kepler 3',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-1652 b',
    customers: ['NASA', 'Vick'],
    upcoming: true,
    success: true,
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
function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function abortLaunchbyId(launchId){
    const aborted = launches.get(launchId); //This data might still be useful so we just mark it. 
    aborted.upcoming = false; 
    aborted.success = false; 
    return aborted;
}

module.exports = {
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchbyId,
}


