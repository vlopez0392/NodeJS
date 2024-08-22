const express = require('express')

const {
    httpGetAllLaunches,
    httpAddNewLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

//Endpoint is /launches/
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;