//const launches = require('./launches.mongo');

const launches = new Map()

//Hard-coded based on the object below. Can be improved.
let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Exploration',
    rocket: 'Kepler 3',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['NASA', 'Vick'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch,  //Data determined on the server-side
        {
            flightNumber: latestFlightNumber,
            customers: ['NASA', 'Vick'],
            upcoming: true,
            success: true,
        })
    );
}

function getAllLaunches(){
    return Array.from(launches.values());
}

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
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchbyId,
}