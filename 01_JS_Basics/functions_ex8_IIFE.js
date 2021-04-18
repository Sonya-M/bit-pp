// "use strict";

/**
 * IIFE = Immediately Invoked Function Expressions */

/**
Write IIFE that replaces the first and the last element of the given array
and prints out its elements. 
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
 */

console.log("###############################");
console.log("Exercise 1......................") ;

(function(arr) {
    var tmp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length - 1] = tmp;
    console.log(arr);
})([4, 5, 11, 9]);


console.log("###############################");
console.log("Exercise 2......................") ;
/**
 * Write IIFE that calculates the surface area of the given rectangle with sides
 * a and b. 
    Input: 4 5
    Output: 20 
 */

var result = (function(a, b) {
    return a * b;
})(4, 5);

console.log(result);

console.log("###############################");
console.log("Exercise 3......................") ;

/**
 * Write IIFE that replaces all appearances of the letters m or M with * and 
   returns the number of replacements. 
        Input: prograMming
        Output: progra**ing, 2
 */

var exercise3_result = (function(str) {
    var changedStr = "";
    var result = [];
    var  nReplacements = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "m" || str[i] === "M") {
            changedStr += "*";
            nReplacements++;
        } else {
            changedStr += str[i];
        }
    }
    return [changedStr, nReplacements];
})("prograMming");
console.log(exercise3_result[0], exercise3_result[1]);

console.log("###############################");
console.log("Exercise 4......................") ;

/**
 *  Write a function with parameters name and surname that returns a function
 that suggests an email in the form name.surname@gmail.com. 
    Input: pera peric
	Output: pera.peric@gmail.com
 */

var suggestion = (function(name, surname) {
    return name + "." + surname + "@gmail.com";

})("pera", "peric");

console.log(suggestion);

console.log("###############################");
console.log("Exercise 5......................") ;

/**
 * Write a function that returns a function that calculates a decimal value of 
the given octal number. 
    Input: 034
    Output: 28
 */

/** Works in strict mode too */
var octalToDecimal = (function(octalAsStr) {
    var dec = 0;
    for (var i = 0; i < octalAsStr.length; i++) {
        dec += parseInt(octalAsStr[octalAsStr.length-1-i] * (Math.pow(8, i)));
    }
    return dec;
})("034");

var octalToDecimalSimple = (function (octaN) {
    return parseInt(octaN);
})(034);

console.log(octalToDecimal);
console.log(octalToDecimalSimple);

console.log("###############################");
console.log("Exercise 6......................") ;

/**
 * Write a function that checks if a given string is valid password. 
 * The password is valid if it is at least 6 characters long and contains at 
 * least one digit. The function should receive two callbacks named 
 * successCallback and errorCallback that should be called in case password is
 * correct or invalid. 
 * 
    Input: JSGuru 
    Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! 
 */

(function exercise7() {

    var successClbk = function() {
        console.log("Your password is cool!");
    }

    var errorClbk = function() {
        console.log("Your password is invalid!");
    }

    function isValid(pass, successCallback, errorCallback) {
        if (pass.length < 6) errorCallback();
        for (var i = 0; i < pass.length; i++) {
            if (isFinite(parseInt(pass[i])) ) {
                successCallback();
                return;
            }
        }
        errorCallback();
    }

    isValid("JSGuru", successClbk, errorClbk);
    isValid("JSGuru123", successClbk, errorClbk);

})();

console.log("###############################");
console.log("Exercise 7......................") ;

/**
 * Write a function that filters elements of the given array so that they 
 * satisfy a condition given by the callback function.
 * 
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] 
 */

(function () {

    function isOdd(n) {
        return n % 2 !== 0;
    }

    function filterArray(arr, filterFn) {
        var filtered = [];
        for (var i = 0; i < arr.length; i++) {
            if (filterFn(arr[i])) filtered[filtered.length] = arr[i];
        }
        return filtered;
    }

    inArr = [2, 8, 11, 4, 9, 3];
    outArr = filterArray(inArr, isOdd);
    console.log("Filtered array: " + outArr);

})();