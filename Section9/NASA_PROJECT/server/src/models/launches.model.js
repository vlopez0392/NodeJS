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
    return Array.from(launches.values())
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
}