# Closest Robot API Endpoint

This endpoint calculates which robot should transport a pallet from point A to point B based on which robot is the closest and has the most battery left if there are multiple in the proximity of the load's location. You'll use a provided API endpoint to create a simplified robot routing API.

## Running

Run the following command to start the API Endpoint:
```
npm start
```

## Testing

Run the following to test the project:
```
npm test
```

### Example Data

Example POST data

```
{
    loadId: 231, //Arbitrary ID of the load which needs to be moved.
    x: 5, //Current x coordinate of the load which needs to be moved.
    y: 3 //Current y coordinate of the load which needs to be moved.
}
```

Example API Endpoint response

```
{
    robotId: 4, //The robot's unique numerical ID
    distanceToGoal: 5, //Indicates how far the robot is from the load which needs to be moved.
    batteryLevel: 37 //Indicates current battery level of the robot.
}
```

#### Notes

If I were to continue building out this API Endpoint, I would add a feature to list the top _n_ closest robots to the load via an optional parameter to the POST request named _listLength_.