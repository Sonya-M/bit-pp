"use strict"


function wrongInput(inp, type) {
    if (typeof(inp) !== type) {
        console.log("Wrong input!");
        return true;
    }
    return false;
}

// 1. Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false


console.log("#################################");
console.log("Exercise 1: isString")
function isString(inp) {
    if (typeof (inp) === "string") return true;
    else return false;
}
console.log(isString("blabla"));
console.log(isString(12));
console.log(isString(false));


console.log("#################################");
console.log("Exercise 2: isBlankString");
// 2. Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlankString(inp) {
    if (typeof (inp) !== "string") {
        return false;
    } else {
        for (var i = 0; i < inp.length; i++) {
            if (inp[i] !== " ") {
                return false;
            }
        }
    }
    return true;
}
console.log(isBlankString("  "));
console.log(isBlankString("blabla"));
console.log(isBlankString(12));

console.log("#################################");
console.log("Exercise 3: concatString");
// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"
function concatString(str, n) {
    if (typeof (str) !== "string") {
        console.log("concatString: Wrong input!");
        return;
    }
    var result = str;
    for (var i = 1; i < n; i++) {
        result += str;
    }
    return result;
}
console.log(concatString("Ha", 3));
console.log(concatString("Ha"));
console.log(concatString(true));

console.log("#################################");
console.log("Exercise 4: countLetter");
// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function countLetter(str, letter) {
    if (wrongInput(str, "string") || wrongInput(letter, "string")) return;
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) count++;
    }
    return count;
} 

console.log(countLetter("string", "n"));
console.log(countLetter("string", true));
console.log(countLetter(true, "n"));

console.log("#################################");
console.log("Exercise 5: findFirst");

// Write a function to find the position of the first occurrence of a character in
// a string. The result should be the position of character. If there are no 
// occurrences of the character, the function should return -1.

function findFirst(str, letter) {
    if (wrongInput(str, "string") || wrongInput(letter, "string")) {
        return;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i;
        }
    }
    return -1;
}

console.log(findFirst("mystring", "s"));
console.log(findFirst("mystring", "x"));
console.log(findFirst(true, false));

console.log("#################################");
console.log("Exercise 6 findLast");

// Write a function to find the position of the last occurrence of a character
// in a string. The result should be in human numeration form. If there are no 
// occurrences of the character, function should return -1.

function findLast(str, letter) {
    if (wrongInput(str, "string") || wrongInput(letter, "string")) {
        return;
    }
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] === letter) {
            return i + 1; // human numeration
        }
    }
    return -1;
}

console.log(findLast("bb", "b"));
console.log(findLast("string", "x"));
console.log(findLast(true, 12));

console.log("#################################");
console.log("Exercise 7: strToArray");

// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function strToArray(str) {
    if (wrongInput(str, "string")) return;
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
        result[result.length] = null;
        } else {
            result[result.length] = str[i];
        }
    }
    return result;
}

console.log(strToArray("bla bla"));
console.log(strToArray("blabla"));
console.log(strToArray(true));

console.log("#################################");
console.log("Exercise 8: isPrime");

// 8. Write a function that accepts a number as a parameter and checks if the 
// number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(n) {
    if (wrongInput(n, "number")) return;
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
} 

function testIsPrime(start, end) {
    var primes = [];
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes[primes.length] = i;
        }
    }
    return primes;
}

console.log("Prime numbers: " + testIsPrime(0, 100));

console.log("#################################");
console.log("Exercise 9: replaceSpaces");
// Write a function that replaces spaces in a string with provided separator.
// If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function replaceSpaces(str, separator="-") {
    if (wrongInput(str, "string") || wrongInput(separator, "string")) return;
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result += separator;
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(replaceSpaces("My random string", "_"));
console.log(replaceSpaces("My random string", "+"));
console.log(replaceSpaces("My random string"));

console.log("#################################");
console.log("Exercise 10: firstNCharsPlus3Dots");
// Write a function to get the first n characters and add “...” at the end of newly created string.
// Input: fn(“ivan”, 2) ; output: “iv...”

function firstNCharsPlus3Dots(str, n) {
    if (wrongInput(str, "string") || wrongInput(n, "number")) return;
    if (n > str.length) n = str.length;
    var result = "";
    for (var i = 0; i < n; i++) {
        result += str[i];
    }
    return result + "...";
}

console.log(firstNCharsPlus3Dots("ivan", 2));
console.log(firstNCharsPlus3Dots("ivan", 10));

console.log("#################################");
console.log("Exercise 11: strArrToNumArr");

// Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function strArrToNumArr(strArr) {
    var numArr = [];
    for (var i = 0; i < strArr.length; i++) {
        var next = parseFloat(strArr[i]);
        if (isFinite(next)) numArr[numArr.length] = next;
    }
    return numArr;
}
console.log(strArrToNumArr(["1", "21", undefined, "42", "1e+3", Infinity]));

console.log("#################################");
console.log("Exercise 12: yearsToRetirement");

// Write a function to calculate how many years there are left until retirement 
// based on the year of birth. Retirement for men is at age of 65 and for women at 
// age of 60. If someone is already retired, a proper message should be displayed.

function yearsToRetirement(birthYear, male) {
    var age = 2021 - birthYear;
    var yearsLeft;
    if (male) {
        yearsLeft = 65 - age;
    } else {
        yearsLeft = 60 - age;
    }
    if (yearsLeft < 0) {
        return "You should already be retired";
    }else if (yearsLeft == 0) {
        return "You should retire this year";
    } else {
        return "You have " + yearsLeft + " years left until retirement."
    }
}

console.log(yearsToRetirement(2001, true));
console.log(yearsToRetirement(2001, false));

console.log("#################################");
console.log("Exercise 13: humanizeOrdinalNumber");

// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function humanizeOrdinalNumber(n) {
    if (wrongInput(n, "number")) return;
    switch(n) {
        case 1: return "1st";
        case 2: return "2nd";
        case 3: return "3rd";
        default: return n + "th";
    }
}

console.log("Testing exercise 13...");
for (var i = 1; i <= 10; i++) {
    console.log(humanizeOrdinalNumber(i));
}