console.log("###############################################");
console.log("Exercise 1...........................");
// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

var query = 3;
// var arr1 = [5, -4.2, 3, 7]; 
var arr1 = [5, -4.2, 18, 7];
var result = "no";
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === query) {
        result = "yes";
        break;
    }
}
console.log("Input array: " + arr1 + "; query: " + query);
console.log("Result: " + result);



console.log("###############################################");
console.log("Exercise 2...........................");
// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
var arr2 = [-3, 11, 5, 3.4, -8];
console.log("Input array: " + arr2);
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0) {
        arr2[i] *= 2;
    }
}

console.log("Result with positive elements multiplied by 2: " + arr2);



console.log("###############################################");

// Write a program that finds the minimum of a given array and prints out its value
// and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

console.log("Exercise 3...........................");
console.log("Input array: [4, 2, 2, -1, 6]");
var a = [4, 2, 2, -1, 6];
var min = Infinity;
var minIndex = -1;
for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        minIndex = i;
    } 
}
console.log("The minimum value is " + min + " at index " + minIndex)
console.log("###############################################");

console.log("Exercise 4...........................");
// Write a program that finds the first element larger than minimum and prints out
// its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2
console.log("Input array: [4, 2, 2, -1, 6]");
min = Infinity;
minIndex = -1;
for (var i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
        minIndex = i;
    } 
}
var secondSmallest = Infinity;
for (var i = 0; i < a.length; i++) {
    if (i !== minIndex) {
        if (a[i] < secondSmallest) secondSmallest = a[i];
    }
}
console.log("Second smallest element is " + secondSmallest);
console.log("###############################################");

console.log("Exercise 5............")
// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
var arr5 = [3, 11, -5, -3, 2];
var sum = 0;
console.log("Input array: " + arr5);
for (var i = 0; i < arr5.length; i++) {
    if (arr5[i] > 0) sum += arr5[i];
}
console.log("Sum of its positive elements is " + sum);

console.log("###############################################");


console.log("Exercise 6............")

// Write a program that checks if a given array is symmetric. An array is symmetric
// if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

var symArr = [2, 4, -2, 7, -2, 4, 2]; /*[3, 4, 12, 8]; */ 
var half = symArr.length / 2;
result = undefined;
console.log("Input array " + symArr);

for (var i = 0; i < half; i++) {
    // console.log("comparing " + symArr[i] + " and " + symArr[symArr.length-1-i] + "..........");
    if (symArr[i] !== symArr[symArr.length-1-i]) {
        result = false;
        break;
    }
}
if (result !== false) result = true;
if (result) {
    console.log("Array is symetric");
} else {
    console.log("Array is not symetric.");
}

console.log("###############################################");

console.log("Exercise 7..................");
// Write a program that intertwines two arrays. You can assume the arrays are of 
// the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
arr1 = [4, 5, 6, 2];
arr2 = [3, 8, 11, 9];
var intertwined = [];
for (var i = 0; i < arr1.length; i++) {
    intertwined[intertwined.length] = arr1[i];
    intertwined[intertwined.length] = arr2[i];
}
console.log("Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]");
console.log("Expected result: [4, 3, 5, 8, 6, 11, 2, 9]")
console.log("The INTERTWINED ARRAY " + intertwined);

console.log("###############################################");
console.log("Exercise 8............");
// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
var ar8a = [4, 5, 6, 2];
var ar8b = [3, 8, 11, 9];
var concatenated = [];
for (var i = 0; i < ar8a.length; i++) {
    concatenated[concatenated.length] = ar8a[i];
}
for (var i = 0; i < ar8b.length; i++) {
    concatenated[concatenated.length] = ar8b[i];
}
console.log("Input arrays: Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]");
console.log("Expected result: [4, 5, 6, 2, 3, 8, 11, 9]");
console.log("CONCATENATED array: " + concatenated);

console.log("###############################################");



console.log("Exercise 9............");
// 9. Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
var e = 2;
var a9 = [4, 6, 2, 8, 2, 2];
console.log("Input array: " + a9 + ", element to remove: " + e);
for (var i = 0; i < a9.length; i++) {
    if (a9[i] === e) {
        // console.log("Removing ", a9[i] + ".............")
        for (var j = i; j < a9.length - 1; j++) {
            a9[j] = a9[j+1];
        }
        a9.length--;
        i--;
        // console.log("Length and i after removal: ", a9.length, i)
        // console.log("Array after removal: ", a9)
    }
}
console.log("DONE!!!!!!!!!!!!!!!!!!")
console.log("New array: ", a9)
console.log("New array.length = ", a9.length);
console.log("###############################################");

console.log("Exercise 10........................");
// Write a program that inserts a given element e on the given position p in the
// array a. If the value of the position is greater than the array length, print
// the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var elToInsert = 78, pos = 3, inArray = [2, -2, 33, 12, 5, 8];
console.log("Array before insert: ", inArray);

if (pos >= inArray.length) 
    console.log("ERROR: position must be less than array.length")

for (var i = inArray.length; i > pos; i--) { 
    inArray[i] = inArray[i-1];
}
inArray[pos] = elToInsert;

// var printArr = "";
// for (var i = 0; i < inArray.length; i++) {
//     printArr += (inArray[i] + ", ");
// }
// console.log(printArr);

console.log("New array length: ", inArray.length);
console.log("New array with inserted element:\n " +  inArray);
console.log("###############################################");
