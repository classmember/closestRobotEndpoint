const compare = (a, b) => (a > b) - (a < b);

const distance = (robot, load) => {
    return Math.sqrt(Math.pow(robot.x - load.x, 2) + Math.pow(robot.y - load.y, 2));
}

const highestBattery = (robots) => robots.sort((left, right) => {
    return right.batteryLevel - left.batteryLevel;
});

const sortRobots = (robots, load) => robots.sort((left, right) => {
    return compare(distance(left, load) > distance(right, load), distance(left, load) < distance(right, load)) || compare(left.batteryLevel < right.batteryLevel, left.batteryLevel > right.batteryLevel);
});
    
module.exports = {compare, distance, highestBattery, sortRobots};
