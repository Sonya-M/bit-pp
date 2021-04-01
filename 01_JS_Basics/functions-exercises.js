
// Write a program that calculates the maximum of two given numbers.

function max(a, b) {
    if (a > b) return a;
    else return b;
}

console.log(max(3, 3));
console.log("########################################");


// Write a program that checks if a given number is odd.
function isOdd (a) {
    if (a % 2 !== 0) return true;
    else return false;
}

console.log("Result of calling isOdd(3): " + isOdd(3));
console.log("Result of calling isOdd(4): " + isOdd(4));

console.log("########################################");


// Write a program that checks if a given number is a three digit long number.

function has3Digits(a) {
    return a < 1000 && a > 99;
}

console.log("Result of calling has3Digits(300): " + has3Digits(300));
console.log("Result of calling has3Digits(1000): " + has3Digits(1000));
console.log("Result of calling has3Digits(10): " + has3Digits(10));


console.log("########################################");
// Write a program that calculates an arithmetic mean of four numbers.
function mean(a, b, c, d) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum/arguments.length;
}

console.log("Result of calling mean on (2, 2, 2, 2): " + mean(2, 2, 2, 2));
console.log("Result of calling mean on (43, 42, 45, 68) (expected result: 49.5): " + mean(43, 42, 45, 68));


console.log("########################################");

// Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *   *
// *   *
// *   *
// *****

function drawSquare(size) {
    result = "";
    for (var row = 0; row < size; row++) {
        for (var col = 0; col < size; col++) {
            if (row === 0 || row === (size - 1) || col === 0 || col === (size - 1)) result += "*";
            else result += " ";
        }
        result += "\n";
    }
    return result;
}

console.log(drawSquare(5));

console.log("########################################");

// Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:

// * * * * *
// * * *
// * * * * * * *

// TODO
function horizontalChart(a, b, c) {
    var result = "\n";
    for (var i = 0; i < a; i++) {
        result += "* ";
    }
    result += "\n";
    for (var i = 0; i < b; i++) {
        result += "* ";
    }
    result += "\n";
    for (var i = 0; i < c; i++) {
        result += "* ";
    }
    result += "\n";
    return result;
}
console.log("horizontalChart(5, 3, 7): " + horizontalChart(5, 3, 7));

console.log("########################################");

function elegantHorizontalChart () { // flexible parameters
    var result = "\n";
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            result += "* "
        }
        result += "\n";
    }
    return result;
}
console.log("elegantHorizontalChart(5, 4, 3, 2, 1)" + elegantHorizontalChart(5, 4, 3, 2, 1));

console.log("########################################");

// Write a program that calculates a number of digits of a given number.

function nDigits(a) {
    var result = 0;
    if (a < 1 && a >= 0) return 1;
    if (a < 0) a *= -1;
    while (a >= 1) {
        result++;
        a /= 10;
    }
    return result;
}

console.log("Result of calling nDigits(3): " + nDigits(3) );
console.log("Result of calling nDigits(3000): " + nDigits(3000) );
console.log("Result of calling nDigits(0): " + nDigits(0) );
console.log("Result of calling nDigits(-30): " + nDigits(-30) );
console.log("Result of calling nDigits(145.4): " + nDigits(145.4) );
console.log("Result of calling nDigits(0.4): " + nDigits(0.4) );

console.log("########################################");

// 8. Write a program that calculates a number of appearances of a given 
// number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
var a = [2, 4, 7, 8, 7, 7, 1], e = 7;

function nAppearances(arr, e) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === e) result++;
    }
    return result;
}

console.log("Result of calling nAppearances(a, e): " + nAppearances(a, e));

console.log("########################################");

// Write a program that calculates the sum of odd elements of a given array. 

function sumOfOdds(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isOdd(arr[i])) sum += arr[i];
    }
    return sum;
}

var a8 = [2, 4, 6, 5, 13];

console.log("Result of calling sumOfOdds([2, 4, 6, 5, 13]): " + sumOfOdds(a8));

console.log("########################################");

// Write a program that calculates the number of appearances of a letter a in a
// given string. 
// Modify the program so it calculates the number of both letters a and A.

function countLetters(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "A") count++;
    }
    return count;
}
console.log("Result of calling countLetters(\"baab\"): " + countLetters("baab"));
console.log("Result of calling countLetters(\"bAAb\"): " + countLetters("bAAb"));
console.log("Result of calling countLetters(\"bbb\"): " + countLetters("bbb"));

console.log("########################################");

// Write a program that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function concatenateNTimes(str, n) {
    result = "";
    for (var i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

console.log("concatenateNTimes(\"abc\", 4): " + concatenateNTimes("abc", 4));

console.log("########################################");



