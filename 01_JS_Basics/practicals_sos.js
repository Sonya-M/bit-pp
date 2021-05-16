(function practicalsSOS() {

    function log(str) {
        console.log(str);
    }

// 1. Write a function that checks if a given string contains digit 5. Input:
//    “1b895abd”Output: true

// Input: “1bser9re”Output: false


log("Exercise 2....................................");
//     2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”Output: “Programming in ** is
// super interesting!”

function replaceSubstr(str, substr, replacementStr) {
    var result = "";
    var startIndices = [];
    for (var i = 0; i < str.length - substr.length+1; i++) {
        var iCopy = i;
        for (var j = 0; j < substr.length && str[iCopy] === substr[j]; j++, iCopy++) {
            if (j === substr.length - 1) {
                startIndices[startIndices.length] = i;
            }
        }
    }
    var startIndicesCount = 0;
    if (startIndices.length > 0) {
        for (var i = 0; i < str.length; i++) {
            if (i === startIndices[startIndicesCount]) {
                result += replacementStr;
                i += substr.length - 1; //will be incremented before the next loop
                startIndicesCount++;
            } else {
                result += str[i];
            }
        }
    } else {
        result = str;
    }
    return result;
}
log('Calling `replaceSubstr("JS Programming in JS is super interesting! JS", "JS", "**")`');
log(replaceSubstr("JS Programming in JS is super interesting! JS", "JS", "**"));
log('Calling replaceSubstr("XX this is just an eXXample XX", "XX", "*****")');
log(replaceSubstr("XX this is just an eXXample XX", "XX", "*****"));


log("Exercise 3....................................");

//     3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ Output: “Good morning” 

// start index inclusive, end index exclusive and optional;
// if end is undefined, it is assigned the value str.length;
function substr(str, start, end) {
    if (end === undefined) end = str.length;
    var result = "";
    for (var i = start; i < end; i++) {
        result += str[i];
    }
    return result;
}

log('RESULT AFTER\n var str = "abcdef";\n console.log(substr(str, 1, 3));\n console.log(substr(str, 0, str.length));\n console.log(substr(str, 0, 0));\n console.log(substr(str, 0, 1));\n console.log(substr(str, 0));\n');
var str = "abcdef";
console.log(substr(str, 1, 3));
console.log(substr(str, 0, str.length));
console.log(substr(str, 0, 0));
console.log(substr(str, 0, 1));
console.log(substr(str, 0));

function insert(str, strToInsert, pos) {
    var result = substr(str, 0, pos);
    result += strToInsert;
    result += substr(str, pos + strToInsert.length-1);
    return result;
}

log('Calling insert("Goo morning", "d", 3).....');
log(insert("Goo morning", "d", 3));

log("Exercise 4....................................");
//     4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 Output: “Good morning!” 

//start index inclusive, end index exclusive, if undefined, equals the length of
//given str
function deleteSubstr(str, start, end) {
    if (end === undefined) end = str.length;
    var result = "";
    result += substr(str, 0, start);
    result += substr(str, end);
    return result;
}
log('Calling....\n console.log(deleteSubstr("Goodd morning!", 3, 4));\n console.log(deleteSubstr("Goodd morning!", 4));');
console.log(deleteSubstr("Goodd morning!", 3, 4));
console.log(deleteSubstr("Goodd morning!", 4));

log("Exercise 5....................................");
//     5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67] Output: [3, 1, 90, 23, 67]

function deleteEverySecondEl(array) {
    // version 1
    // for (var i = 0; i < array.length; i++) {
    //     if (i % 2 !== 0) {
    //         delete array[i]; // marking elements as undefined for splice()
    //     }
    // }
    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] === undefined) {
    //         array.splice(i, 1)
    //     }
    // }

    //version 2
    var odd = false;
    for (var i = 0; i < array.length; i++) {
        if (odd) { 
            array.splice(i--, 1); // must decrement i because of splice
        }
        odd = !odd;
    }
}

var inputArray = [3, 5, 1, 8, 90, -4, 23, 1, 67];
deleteEverySecondEl(inputArray);
console.log(inputArray);

log("Exercise 6....................................");
//     6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 Output: [3, 5, 2, 16, 180, -8,
// 46, 1, 67]

function transformArray(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

log("Exercise 7....................................");

//     7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3] Output: true

function contains(array1, array2) {

    var array2copy = [];
    for (var i = 0; i < array2.length; i++) {
        array2copy[i] = array2[i];
    }
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2copy.length; j++) {
            if (array2copy[j] === array1[i]) {
                array2copy[j] = undefined; // taking care of repetitions
                break;
            }
        }
        if (j === array2copy.length) return false; // reached end without a match
    }
    return true;
}

console.log(contains([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));
console.log(contains([3, 4, 1, 3, 22], [8, 9, 3, 1, 11, 4, 3]));

log("Exercise 8....................................");

log('replace vals without a temp variable:');
var array1 = [1, 2, 3];
var array2 = [4, 5, 6]
[array1, array2] = [array2, array1];
//     8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’] Output:
// [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

/* The plan
***********
create int array of same size as input array;
count the letter A in each element, and assign the value of count to corresponding
elemenet in the int array:
create a result array where you copy elements from the input array in order 
determined by the int array, passing the sort method the */

//     9. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 

//     10. Write a function that prints out the date of the previous day. 
// Output:  23. 10. 2018. 

//     11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321] Output: 78 111  
//          4 4321

})();