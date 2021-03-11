// 1. Write a program that shows text representation of a day in a week for a
// number input from 1 to 7. Print output in console. 
// For input 1, output should be “Monday”.

//     2. Write a program that shows text representation of a day in a week for 
// a number input from 1 to 7. All other cases output a message explaining that
// input must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

function ex1and2(dayAsNum) {
    var result;
    switch (dayAsNum) {
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;
        case 7:
            result = "Sunday";
            break;
        default:
            result = "Invalid input! Enter a number between 1 and 7";
    }
    return result;
}
console.log("Testing exercises 1 and 2....................");
for (let i = 0; i < 9; i++) {
    console.log("Result for " + i + " is " + ex1and2(i));
}

//     3. Write a program that for a 1-7 number input (representing a day in a 
// week) shows if that day is a weekday or weekend.
// All other cases output a  message explaining that input must be a number
// between 1 and 7.
// 	For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

function ex3(dayAsNum) {
    var result;
    switch (dayAsNum) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            result = "It's weekday.";
            break;
        case 6:
        case 7:
            result = "It’s weekend";
            break;
        default:
            result = "Invalid input! Enter a number between 1 and 7";
    }
    return result;
}

console.log("Testing exercise 3......................");
for (let i = 0; i < 13; i++) {
    console.log("Result for " + i + " is " + ex3(i));
}

//4. Write a program that for a 1-12 number input (representing a month in
// a year) shows that month’s name. All other cases output a message explaining
// that input must be a number between 1 and 12. 
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

function ex4(monthAsNum) {
    var result = "";
    switch(monthAsNum) {
        case 1:
            result = "Jan";
            break;
        case 2:
            result = "Feb";
            break;
        case 3:
            result = "Mar";
            break;
        case 4:
            result = "Apr";
            break;
        case 5:
            result = "May";
            break;
        case 6:
            result = "Jun";
            break;
        case 7:
            result = "Jul";
            break;
        case 8:
            result = "Aug";
            break;
        case 9:
            result = "Sep";
            break;
        case 10:
            result = "Oct";
            break;
        case 11:
            result = "Nov";
            break;
        case 12:
            result = "Dec";
            break;
        default:
            result = "Input must be a number between 1 and 12";

    }
    return result;
}

console.log("Testing exercise 4........................");
for (let i = 0; i < 15; i++) {
    console.log("Result for " + i + " is " + ex4(i));
}

// 5. Write a program that for a 1-12 number input (representing a month i
// message explaining that input must be a number between 1 and 12. 

function ex5 (monthAsNum) {
    var result = "";
    switch (monthAsNum) {
        case 1:
        case 2:
        case 3:
            result = "Winter";
            break;
        case 4:
        case 5:
        case 6:
            result = "Spring";
            break;
        case 7:
        case 8:
        case 9:
            result = "Summer";
            break;
        case 10:
        case 11:
        case 12:
            result = "Fall";
            break;
        default:
            result = "Input must be a number between 1 and 12";
    }
    return result;
}
console.log("Testing exercise 5................");
for (var i = 0; i < 15; i++) {
    console.log("Result for " + i + " is " + ex5(i));
}
// 6. Write a program that for a string input of a grade from “A”-“F” outputs a 
// proper info message about that grade in the following manner: A - 
// "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", 
// F - "Failed". Input different from letters A-F outputs a message 
// "Unknown grade".

function ex6 (grade) {
    var result = "";
    if (typeof(grade) == "string") grade = grade.toUpperCase();
    switch (grade) {
        case "A":
            result = "Good job";
            break;
        case "B":
            result = "Pretty good";
            break;
        case "C":
            result = "Passed";
            break;
        case "D":
            result = "Not so good";
            break;
        case "E":
            result = "Failed";
            break;
        default:
            result = "Unknown grade";
    }
    return result;
}



//7. Write a program that takes as input a city name and outputs the country 
// where the city is. You may choose which cities and countries you want to 
// output yourself, however there has to be at least 5 countries and 15 cities.
// Note that each country must have a different number of cities. Input
// different from the listed cities should output a message"Please choose a 
// different city".

function ex7 (city) {
    var result = "";
    switch (city) {
        case "Novi Sad":
        case "Belgrade":
        case "Zaječar":
        case "Subotica":
        case "Sombor":
            result = "Serbia";
            break;
        case "New York":
        case "Washington":
            result = "USA";
            break;
        case "Budapest":
            result = "Hungary";
            break;
        case "Zagreb":
            result = "Croatia";
            break;
        case "London":
        case "Edingburgh":
        case "Manchester":
        case "Glasgow":
        case "Bristol":
            result = "UK";
            break;
        default:
            result = "Please choose a different city";
    }
    return result;
}

console.log("Testing exercise 7.....................");
cities = ["Novi Sad", "Belgrade", "New York", "Manchester", "Šabac", "Negotin"];
for (let i = 0; i < cities.length; i++) {
    city = cities[i];
    console.log("City -> " + city + "; Country -> " + ex7(city));
}

// 8. Write a program that takes as input two numbers and a string denoting 
// the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. 
// Watch out for division by zero!

function ex8 (num1, num2, operatorSymbol) {
    var result;
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "INVALID INPUT";
    }
    switch (operatorSymbol) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) result = "ERROR: DIVISION BY ZERO!"
            else result = num1 / num2;
            break;
        default:
            result = "INVALID INPUT";

    }
    return result;
}

console.log("Testing exercise 8...............");
operators = ["+", "-", "*", "/"];
console.log("Testing invalid input...");
console.log("Result of passing '?' as operator: " + ex8(1, 2, "?"));
console.log("..........................");
console.log("Testing invalid input...");
console.log("Result of passing a string as num1: " + ex8("1", 2, "+"));
console.log("..........................");

for (let i = 2; i < 10; i++) {
    let j = i - 2;
    for (let k = 0; k < operators.length; k++) {
        // console.log("num1 = " + i);
        // console.log("num2 = " + j);
        // console.log("operator = " + operators[k]);
        console.log(i + " " + operators[k] + " " + j);
        console.log("Result: " + ex8(i, j, operators[k]));
        console.log("..........................");
    }
}
