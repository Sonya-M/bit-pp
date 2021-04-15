"use strict"
console.log("#################################");
console.log("Exercise 1: String within a string")
// 1. Write a program to insert a string within a string at a particular
//    position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string" "My random string", "JS ",
// 10 -> "My random JS string"

/* Inserts str2 into str1 at given position, or at the beginning of str1,
 * if no pos is provided.
 * Positions start at 1, not 0 */
/*
 * 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 * m y   r a n d o m   s  t  r  i  n  g
 * pos = 11; (index == 10)
 * str2 = "JS"
 * 
 */

function insertString(str1, str2, pos=1) {
    var result = "";
    for (var i = 0; i < pos-1; i++) {
        result += str1[i];
    }
    for (var i = 0; i < str2.length; i++) {
        result += str2[i];
    }
    console.assert(result.length === pos-1+str2.length);
    for (var i = pos-1; i < str1.length; i++) {
        result += str1[i];
    }
    return result;
}
console.log("Result of calling insertString(\"My random string\", \"JS \", 1)");
console.log(insertString("My random string", "JS ", 1));
console.log("Result of calling insertString(\"My random string\", \"JS \", 11)");
console.log(insertString("My random string", "JS ", 11));

console.log("#################################");
console.log("Exercise 2: Join array elements into a string, skipping those\n" +
"that are undefined, null, NaN or Infinity");
//     2. Write a program to join all elements of the array into a string
//        skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]
function joinElementsToStr(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        var next = arr[i];
        /* isFinite(): false if the argument is (or will be coerced to) positive
        or negative Infinity or NaN or undefined; otherwise, true.
        Since parseFloat(null) returns NaN, this is all you need: */
        if (isFinite(parseFloat(next))) {
            str += next + " ";
        }
    }
    return str;
}

console.log("Result of calling joinElementsToStr([NaN, 0, 15, false, -22, '', undefined, 47, null])");
console.log(joinElementsToStr([NaN, 0, 15, false, -22, '', undefined, 47, null]));


console.log("#################################");
console.log("Exercise 3: filter out falsies");
//     3. Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filterOutFalsies(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if ((!!arr[i] != false)) result[result.length] = arr[i];
    }
    return result;
}

console.log("Result of calling filterOutFalsies([NaN, 0, 15, false, -22, '', undefined, 47, null])");
console.log(filterOutFalsies([NaN, 0, 15, false, -22, '', undefined, 47, null]));

console.log("#################################");
console.log("Exercise 4: Reverse number");
//     4. Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number
function reverseTheHarderWay(n) {
    var rev = 0;
    while (n > 0) {
        // console.log("n at the beginning of while loop: " + n);
        rev = rev * 10 + (n % 10);
        n = (n - (n % 10)) / 10; // or n = Math.floor(n / 10);
        // console.log("now n is " + n);
    }
    return rev;
}
function reverseTheEasyWay(n) {
    var nAsStr = "" + n;
    var reverse = "";
    for (var i = nAsStr.length - 1; i >= 0; i--) {
        reverse += nAsStr[i];
    }
    return parseInt(reverse);
}

console.log("Result of calling reverseTheHarderWay(12345)");
console.log(reverseTheHarderWay(12345));
console.log("Result of calling reverseTheEasyWay(12345)");
console.log(reverseTheEasyWay(12345));


console.log("#################################");
console.log("Exercise 5: Reverse number");
//     5. Write a function to get the last element of an array. Passing a
//        parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2 [7, 9, 0, -2], 2 -> [0, -2]  
function getLast(arr, n) {
    if (n === undefined || n === 1) return arr[arr.length-1];
    var result = [];
    for (var i = arr.length - n; i < arr.length; i++ ) {
        result[result.length] = arr[i];
    }
    return result;
}

console.log("Result of calling getLast([7, 9, 0, -2]):");
console.log(getLast([7, 9, 0, -2]));
console.log("Result of calling getLast([7, 9, 0, -2], 2):");
console.log(getLast([7, 9, 0, -2], 2));


console.log("#################################");
console.log("Exercise 6: Create array")
//     6. Write a function to create a specified number of elements with
//        pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0] 2, "none" -> ["none", "none"] 2 -> [null, null]
function createArray(nElements, val=null)  {
    var result = [];
    for (var i = 0; i < nElements; i++) {
        result[result.length] = val;
    }
    return result;
}
console.log("Result of calling createArray(6, 0):");
console.log(createArray(6, 0));
console.log("Result of calling createArray(2, \"none\"):");
console.log(createArray(2, "none"));
console.log("Result of calling createArray(2):");
console.log(createArray(2));


console.log("#################################");
console.log("Exercise 7: Perfect number")
//     7. Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a
// positive integer that is equal to the sum of its proper positive divisors,
// that is, the sum of its positive divisors excluding the number itself (also
// known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper
// positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to
// half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
// perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect
// numbers 496 and 8128.

function isPerfect(n) {
    var sum = 1; // now the loop can start from 2
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) sum += (i + n / i); 
        // to stop at sqrt(n), when you find one factor, add the other one too
        // not sure whether that speeds up performance that much though, since
        // I think Math.sqrt() is a costly operation
    }
    if (sum === n) return true;
    else return false;
}

function testIsPerfect(range) {
    var perfectNums = [];
    for (var i = 1; i <= range; i++ ) {
        if (isPerfect(i)) perfectNums[perfectNums.length] = i;
    }
    return perfectNums;
}

console.log("Perfect numbers from 1 to 100000:\n" + testIsPerfect(10000));
console.log("Result of calling isPerfect(33550336): " + isPerfect(33550336));
console.log("Result of calling isPerfect(8589869056): " + isPerfect(8589869056));

console.log("#################################");
console.log("Exercise 8: Find word")
//     8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times" 'aa bb cc dd aa',
// 'aa' -> "'aa' was found 2 times"

/**
 * Returns the index of the first occurrence of str2 within str1, or -1 if str2
 * is not found.
 * start: starting index for search;
 * end: end index for search
 */
function findStr(str1, str2, start, end) {
    for (var i = start; i < end; i++) {
        for (var j = 0; j < str2.length; j++) {
            // console.log("str1[i + j]: " + str1[i + j]);
            // console.log("str2[j]: " + str2[j]);
            if (str1[i + j] !== str2[j]) break;
            if (j === str2.length - 1) return i;
        }
    }
    return -1;
}
console.log("Result of calling the helper fn findStr(\"zenekaastra\", \"str\", 0, \"zenekaastra\".length)");
console.log(findStr("zenekaastra", "str", 0, "zenekaastra".length));

function findWord(str1, str2) {
    var count = 0;
    var start = 0;
    do {
        var index = findStr(str1, str2, start, str1.length);
        if (index !== -1) count++;
        start = index + str2.length;
    } while (index !== -1);
    return count;
}
console.log("Result of calling findWord('The quick brown fox', 'fox'):");
console.log(findWord('The quick brown fox', 'fox'));
console.log("Result of calling findWord('aa bb cc dd aa', 'aa')");
console.log(findWord('aa bb cc dd aa', 'aa'));
console.log("Result of calling findWord('aa bb cc dd dd dd aa', 'dd')");
console.log(findWord('aa bb cc dd dd dd aa', 'dd'));
console.log("Result of calling findWord('d aa bb cc dd dd dd aa', 'd')");
console.log(findWord('d aa bb cc dd dd dd aa', 'd'));


console.log("#################################");
console.log("Exercise 9: Hide email address");
//     9. Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(addr) {
    var result = "";
    var i = 0;
    for (i = 0; i < 3; i++) {
        result += addr[i];
    }
    result += "...";
    while (addr[i] != "@") i++;
    while (i < addr.length) result += addr[i++];
    return result;
}
console.log("Result of calling hideEmail('myemailaddress@bgit.rs')");
console.log(hideEmail('myemailaddress@bgit.rs'));

console.log("#################################");
console.log("Exercise 10: Most frequent item of an array");
//     10. Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
/**
 * arr: array of items of mixed types
 * returns tuple containing the most frequent number at index 0 and the number
 * of its occurrences. If there is a tie, returns the item that appears first
 * in the array.
 */
function mostFreq(arr) {
    var max = 0;
    var item = null;
    for (var i = 0; i < arr.length; i++) {
        var nextItem = arr[i];
        var nextCount = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] === nextItem) {
                nextCount++;
            }
        }
        if (nextCount > max) {
            max = nextCount; 
            item = nextItem;
        }
    }
    return [item, max];
}

console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));