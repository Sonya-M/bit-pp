console.log("#########################################");
console.log("Exercise 1");

// 1. Write a function that converts an array of strings into an array of numbers.
// Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function strsToNums(strArray) {
    numArray = [];
    var numArrayIndex = 0;
    for (var i = 0; i < strArray.length; i++) {
        var nextNum = parseFloat(strArray[i]);
        if (isFinite(nextNum)) numArray[numArrayIndex++] = nextNum;
    }
    return numArray;
}


var inp = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log("Input: " + inp);
console.log("Result without all non-numeric values \n" 
+ "(expected output: [1, 21, 42, 1000]");
console.log(strsToNums(inp));


var strArray = ["1", "2", "3"];
var strArrayWithNaNs = ["1", "2", "3", "blabla"];
var varInput = [strArray, strArrayWithNaNs];
for (var i = 0; i < varInput.length; i++) {
    console.log("Input: " + varInput[i]);
    console.log("Result without all non-numeric vals: " 
        + strsToNums(varInput[i]));
}

console.log("#########################################");
console.log("Exercise 2");

//     2. Write a program to join all elements of the array into a string 
// skipping elements that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

function joinElsToStr (arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        var next = arr[i];
        // NB: you cannot use next != NaN because NaN !== NaN (see material)
        if (next != undefined && next != Infinity && !isNaN(next))
            str += arr[i] ;
    }
    return str;
}

var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log("Input: " + arr);
console.log("All elements of array joined into a string, skipping undefined,\n" +
"null, NaN and Infinity elements:")
console.log(joinElsToStr(arr));

console.log("#########################################");
console.log("Exercise 3");
// 3. Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function removeFalsies (arr) {
    var resultArray = [];
    var resultArrayIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        var next = arr[i];
        if (!isNaN(next) && next !== 0 && next !== -0 && next !== null
            && next != undefined && next !== 0n && next !== -0n 
                && next != false && next != "") {
                resultArray[resultArrayIndex++] = arr[i];
            }
    }
    return resultArray;
}

var input3 = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log("input: " + input3);
console.log("input with all falsies removed:");
console.log(removeFalsies(input3));

// Complete list of JavaScript falsy values
// ########################################
// false	The keyword false.
// 0	The Number zero (so, also 0.0, etc., and 0x0).
// -0	The Number negative zero (so, also -0.0, etc., and -0x0).
// 0n, -0n	The BigInt zero and negative zero (so, also 0x0n/-0x0n).
// "", '', ``	Empty string value.
// null	null — the absence of any value.
// undefined	undefined — the primitive value.
// NaN	NaN — not a number.
// document.all	Objects are falsy if and only if they have the [[IsHTMLDDA]] 
// internal slot.
// That slot only exists in document.all and cannot be set using JavaScript.


console.log("#########################################");
console.log("Exercise 4");
// 4. Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function nInts(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        // if (isFinite(arr[i]) && arr[i] === parseInt(arr[i])) // this works too
        // NB: arr[i] === 0 DOES NOT WORK without parseFloat()*
        var next = arr[i];
        if (isFinite(parseFloat(next)) && next % 1 === 0)
        // if (isFinite(arr[i]) && (parseFloat(arr[i]) % 1 === 0))  //this works
            // console.log("Adding... " + arr[i]);
            result++;;
    }
    return result;
}

// parseFloat() && isNaN() EXAMPLES:
// > parseFloat(false) % 1
// NaN
// > parseFloat(false) % 1 !== 0;
// true
// > isNaN(false)
// false
// > parseFloat(false) % 1 === 0;
// false

var input4 = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log("input: " + input4);
console.log("# integers: " + nInts(input4));


console.log("#########################################");
console.log("Exercise 5");
// 5. Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function nFloats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(parseFloat(arr[i])) && arr[i] % 1 !== 0 ) {
        // The first condition below works too:
        // if (typeof arr[i] === "number" && isFinite(arr[i]) && (parseFloat(arr[i]) % 1 !== 0)) {

        // if (isFinite(arr[i]) && !isNaN(arr[i]) 
            // && (parseFloat(arr[i]) % 1 !== 0)) { // this doesn't work (see parseFloat() and
            // isNan() examples above and below, in final comment)

            // console.log("Adding... " + arr[i]);

            count++;
        }
    }
    return count;
}

var input5 = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
console.log("input: " + input5);
console.log("# floats: " + nFloats(input5));

// > isFinite("0")
// true
// > isFinite(false)
// true
// > isFinite(true)
// true
// > isFinite("")
// true
// > parseFloat(false)
// NaN
// > parseFloat(true)
// NaN
// > parseFloat("")
// NaN
// > // ----> ERGO...
// undefined
// > // USE THIS INSTEAD:
// undefined
// > isFinite(parseFloat(false))
// false
// > isFinite(parseFloat(true))
// false
// > isFinite(parseFloat(""))
// false