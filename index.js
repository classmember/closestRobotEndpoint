const axios = require('axios');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const helmet = require('helmet');
const {compare, distance, highestBattery, sortRobots} = require('./lib/sortRobots.js');


const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 5000;
const ENDPOINT = '/api/robots/closest/';
const ROBOT_DATA_ENDPOINT = 'https://60c8ed887dafc90017ffbd56.mockapi.io/robots';

app.use(helmet());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `${PROTOCOL}://${HOST}:${PORT}${ENDPOINT}`);
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    next();
});

app.post(ENDPOINT, async (req, res) => {

    const robots = await axios({ method: 'get', url: ROBOT_DATA_ENDPOINT });

    const sortedRobots = sortRobots(robots.data, req.body);
    const closestRobot = sortedRobots[0];
    const returnPayload = JSON.stringify({
        robotId: Number(closestRobot.robotId),
        distanceToGoal: distance(closestRobot, req.body),
        batteryLevel: closestRobot.batteryLevel,
    }, null, 2);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(returnPayload);
});

server.listen(PORT, async (err) => {
    if (err) {
        throw err;
    }
});

module.exports = server;
