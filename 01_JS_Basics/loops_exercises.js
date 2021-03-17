// Write a for loop that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.

console.log("Exercise 1..........");

function ex2 (low, hi) {
    var result = "";
    for (var i = low; i <= hi; i++) {
        result += i;
        i % 2 == 0
        ? result += " is even"
        : result += " is odd";
        result += "\n";
    }
    return result;
}
console.log(ex2(0, 15));

console.log("##########################################");
// Write a program to sum the multiples of 3 and 5 under 1000.
console.log("Exercise 2: multiples < 1000....")
function sumMul35(limit) {
    var sum = 0;
    for (var i = 0; i < limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    }
    return sum;
}
console.log("The sum is ", sumMul35(1000));

// outside of a function:
console.log("Exercise 2: multiples < 1000....")
var multiplesLimit = 1000;
var sum35 = 0;
for (var i = 0; i < multiplesLimit; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum35 += i;
}
console.log("The sum is ", sum35);


console.log("Exercise 2: sum < 1000....")
function limited_sumMul35(sumLimit) {
    var sum = 0;
    i = 0;
    while (sum + i < sumLimit) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
        i++;
    }
    return sum;
}
console.log("The sum is ", limited_sumMul35(1000));

// outside of a function:
console.log("Exercise 2: sum < 1000....");
var sumLimit = 1000;
var limitedSum35 = 0;
i = 0;
while (limitedSum35 + i < sumLimit) {
    if (i % 3 == 0 || i % 5 == 0) limitedSum35 += i;
    i++;
}
console.log("The sum is ", limitedSum35);

console.log("##########################################");
// Write a program to compute the sum and product of an array of integers.
console.log("Exercise 3..........");
var array1 = [1, 2, 3, 4, 5];
var sum = 0;
var prod = 1;

for (var i = 0; i < array1.length; i++) {
    sum += array1[i];
    prod *= array1[i];
}
console.log(sum, prod);

console.log("##########################################");
//    4. Write a program which prints the elements of the following array as 
// a single string.
// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
console.log("Exercise 4..........");
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var str = "";
for (var i = 0; i < x.length; i++) {
    str += x[i] + " ";
}
console.log(str);

console.log("##########################################");
// Write a program that prints the elements of the following array.
console.log("Exercise 5..........");

var y = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];

console.log("Let's see how js displays a 2D array...");
console.log(y);
console.log("Now let's try to recreate this behavior...");

var mAsString = "[ ";
for (var i = 0; i < y.length; i++) {
    mAsString + "[ "
    for (var j = 0; j < y[i].length; j++) {
        var next = y[i][j];
        j > 0 ? mAsString += (", " + next) : mAsString += "[ " + next;
    }
    mAsString += " ]";
    if (i < y.length - 1) mAsString += ", ";
}
mAsString += " ]";

console.log("The moment of truth....")
console.log(mAsString);


console.log("##########################################");
// Write a program that outputs the sum of squares of the first 20 numbers.
console.log("Exercise 6..........");
var rslt = 0;
for (var i = 1; i <= 20; i++) {
    rslt += (i * i);
}
console.log("Sum of squares of numbers 1-20 is " + rslt);

console.log("##########################################");
// 7. Write a program that computes average marks of the following students.
// Then use this average to determine the corresponding grade. 
// ------------------	
// David   80
// Marko   77
// Dany    88
// John    95
// Thomas  68
// ------------------	
// The grades are computed as follows :
// < 60%   F
// < 70%   D
// < 80%   C
// < 90%   B
// < 100%  A
console.log("Exercise 7..........");
var students = ["David", "Marko", "Dany", "John", "Thomas"];
var grades = [80, 77, 88, 95, 68];

var gradesTotal = 0;
for (var i = 0; i < grades.length; i++) {
    gradesTotal += grades[i];
}
var avg = gradesTotal / grades.length;
console.log("Assuming these 5 students form a class, " 
                + "the class average is ", avg);
// length of students must correspond to length of grades
// CAVEAT: can't see how the class average plays into the grading system here...
var results = "";
for (var i = 0; i < students.length; i++) {
    results += ("Student name: " + students[i] + "; grade: ");
    var grade = grades[i];
    if (grade < 60) {
        results += "F";
    } else if (grade < 70) {
        results += "D";
    } else if (grade < 80) {
        results += "C";
    } else if (grade < 90) {
        results += "B";
    } else {
        results += "A";
    }
    results += "\n";
}
console.log(results);



console.log("##########################################");
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for 
// numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your 
// program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
console.log("First part of exercise 8.....");
var ex8result = "";
for (var i = 1; i <= 100; i++) {
    ex8result += "Debug output: i = " + i + "; Required output = ";
    if ((i % 5 == 0) && (i % 3 != 0)) ex8result += "Buzz";
    else if (i % 3 == 0) ex8result += "Fizz";
    else ex8result += i;
    ex8result += "\n";
}
console.log(ex8result);
console.log("Second part of exercise 8.....");
ex8result = "";
for (var i = 1; i <= 100; i++) {
    ex8result += "Debug output: i = " + i + "; Required output = ";
    if (i % 15 == 0) ex8result += "FizzBuzz";
    else if (i % 3 == 0) ex8result += "Fizz";
    else if (i % 5 == 0) ex8result += "Buzz";
    else ex8result += i;
    ex8result += "\n";
}
console.log(ex8result);
