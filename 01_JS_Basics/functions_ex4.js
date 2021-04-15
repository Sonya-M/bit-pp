"use strict"

console.log("#########################################\n" +
"Exercise 1");
// 1. Write a program that checks if a given element e is in the array a. Input:
//    e = 3, a = [5, -4.2, 3, 7] Output: yes
// Input:  e = 3, a = [5, -4.2, 18, 7] Output: no

var contains = function (e, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (e === arr[i]) return true;
    }
    return false;
}

var result1 = contains(3, [5, -4.2, 3, 7]);
console.log("var result1 = contains(3, [5, -4.2, 3, 7]);");
console.log(result1);
var result1b = contains(22, [5, -4.2, 3, 7]);
console.log("var result1b = contains(22, [5, -4.2, 3, 7]);");
console.log(result1b);

console.log("#########################################\n" +
"Exercise 2");
//     2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8] Output array: [-3, 22, 10, 6.8, -8]

var multiplyBy2 = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) arr[i] *= 2;
    }
}

var arr2 = [-3, 11, 5, 3.4, -8];
multiplyBy2(arr2);
console.log(arr2);


console.log("#########################################\n" +
"Exercise 3");
//     3. Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6] Output: -1, 3

var min = function(arr) {
    var min = Infinity;
    var index = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    return [min, index];
}

var result3 = min([4, 2, 2, -1, 6]);
var minimum = result3[0], minIndex = result3[1];
console.log("Minimum is " + minimum + " at index " + minIndex);

console.log("#########################################\n" +
"Exercise 4");
//     4. Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6] Output: 2

var secondMin = function(arr, minIndex) {
    var secMin = Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (i !== minIndex && arr[i] < secMin) {
            secMin = arr[i];
        }
    }
    return secMin;
}
var arr4 = [4, 2, 2, -1, 6];
var firstMinIndex = min(arr4)[1]; // CHECK OUT THIS SYNTAX!!!
var secMin = secondMin(arr4, firstMinIndex);
// console.log(firstMinIndex);
console.log("Second min is " + secMin);

console.log("#########################################\n" +
"Exercise 5");
//     5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2] Output: 16

var sumPos = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}
var arr5 = [3, 11, -5, -3, 2];
console.log(sumPos(arr5));

console.log("#########################################\n" +
"Exercise 6");
//     6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2] Output: The array is symmetric.

// Input array: [3, 4, 12, 8] Output: The array isn’t symmetric.

var isSym = function(arr) {
    for (var i = 0; i < arr.length/2; i++) {
        if (arr[i] !== arr[arr.length-1-i]) return false;
    }
    return true;
}
var arr6a = [2, 4, -2, 7, -2, 4, 2];
var arr6b = [3, 4, 12, 8];

console.log(arr6a + " symetric? " + isSym(arr6a));
console.log(arr6b + " symetric? " + isSym(arr6b));

console.log("#########################################\n" +
"Exercise 7");
//     7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 3, 5, 8, 6, 11,
// 2, 9]

var intertwined = function(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i];
        result[result.length] = arr2[i];
    }
    return result;
}
console.log(intertwined([4, 5, 6, 2], [3, 8, 11, 9]));

console.log("#########################################\n" +
"Exercise 8");
//     8. Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 5, 6, 2, 3, 8,
// 11, 9]

var concatenated = function(arr1, arr2) {
    var result = [];
    // copy arr1, do not initialize result as arr1 as that would change arr1
    for (var i = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
        result[result.length] = arr2[i];
    }
    return result;
}
console.log(concatenated( [4, 5, 6, 2], [3, 8, 11, 9]));

console.log("#########################################\n" +
"Exercise 9");
//     9. Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]

var without = function (e, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            for (var j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.length--;
            i--;
        }
    }
}

var arr9 = [4, 6, 2, 8, 2, 2];
var e = 2;
console.log("Input: " + arr9);
console.log("Element to delete: " + e );
without(e, arr9);
console.log("Output: " + arr9);

console.log("#########################################\n" +
"Exercise 10");
// 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8] Output: [2, -2, 33, 78, 12,
// 5, 8]

var ins = function(e, p, arr) {
    if (p > arr.length) {
        console.log("Error: position greater than array length!");
        return;
    }
    for (var i = arr.length; i > p; i--) {
        arr[i] = arr[i-1];
    }
    arr[p] = e;
}
var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];
console.log("Input: var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];");
ins(e, p, a);
console.log("New array: " + a);