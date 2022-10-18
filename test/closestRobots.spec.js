const axios = require('axios');
const assert = require('assert');
const expect = require('chai').expect
const app = require('../')


const query = {loadId: 231, x: 5, y: 3};

describe('Closest Robot Endpoint', () => {
    it('should return closest robot with highest battery life for target in POST request', async () => {
        const res = await axios.post('http://localhost:5000/api/robots/closest/', query);
	assert.equal(res.data.robotId, 4);
	assert.equal(res.data.distanceToGoal, 5);
	assert.equal(res.data.batteryLevel, 37);
	assert.equal(res.status, 200);
    });
});

