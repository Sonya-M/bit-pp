// // 4. Write a program that calculates a number of integer values in the array.

// // 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// // Output: 3

// function numberOfInts(arr) {
//     var count = 0;
//     for (var i = 0; i < arr.length; i++) {
//         var next = parseFloat(arr[i]);
//         if (isFinite(next) && next === parseInt(arr[i]) ) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(numberOfInts([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

// 5. Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function nFloats(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var next = parseFloat(arr[i]);
        if (isFinite(next) && next !== parseInt(arr[i])) count++;
    }
    return count;
}

console.log(nFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));