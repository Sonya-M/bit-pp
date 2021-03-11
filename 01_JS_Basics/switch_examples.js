// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// The default keyword specifies the code to run if there is no case match
// The default case does not have to be the last case in a switch block
// If default is not the last case in the switch block, remember to end the default
// case with a break.

// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after 
// the switch.



var weather = "sunny";

switch (weather) {
    case "rainy":
        console.log("Remember to bring the umbrella!");
        break;
    case "sunny":
        console.log("Dress lightly");
        break;
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Weather unknown");
}



var car = "bmw";
var result = "";
// Example of FALL-THROUGH in switch statement (missing break after case, code
// the flow continues until the first break statement or the end of the
// switch statement)
switch (car) {
    case "vw":
    case "audi":
    case "bmw":
        result = "Great German car!";
        break;
    case "fiat":
        result = "Good Italian car!";
        break;
    default:
        result = "I don't know...";
}