// Let’s say there are speed limitations on a motorway from 60 to 120 kilometers
// per hour. If we store the current speed value in the variable speed.
// Write an expression which will check if we are driving drive safely or not?
// (true if we are driving safe and false if not)   

var currentSpeed = [20, 50, 60, 120, 130];

function isSafe(speed) {
    return (speed >= 60 && speed <= 120)
}

for (i = 0; i < currentSpeed.length; i++) {
    if (isSafe(currentSpeed[i])) {
        console.log(currentSpeed[i] + " is safe.")
    } else {
        console.log(currentSpeed[i] + " is not safe.")
    }
}