// 1. Write an array of months in a year. Using console.log display June, October 
// and January from the array.
// 2. Write an arrays of days in a week. Using console.log display Sunday from the
// array.
// 3. Print all negative elements from the array [2, -4, 5, -2, -11].
// 4. Print all elements with indices divisible by 3 from the array 
// [5, 15, -5, 20, 12, 18, 72, 14, 9].
// 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

console.log("Exercise 1...................");
var months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
var shouldBeJunOctJan = months[5] + " " + months[9] + " " + months[0];
console.log(shouldBeJunOctJan);

console.log("Exercise 2...................");
var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var shouldBeSunday = days[days.length-1];
console.log(shouldBeSunday);

console.log("Exercise 3...................");
console.log("Array: [2, -4, 5, -2, -11]");
var a = [2, -4, 5, -2, -11];
for (var i = 0; i < a.length; i++) {
    if (a[i] < 0) console.log("Negative element at index " + i + ": " + a[i]);
}

console.log("Exercise 4...................");
console.log("Given array:  [5, 15, -5, 20, 12, 18, 72, 14, 9]");
var b = [5, 15, -5, 20, 12, 18, 72, 14, 9];
for (var i = 0; i < b.length; i++) {
    if (i % 3 == 0) {
    console.log("index value " + i + ", value of array element at that index: " + b[i]);
    }
}


// 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.
console.log("Exercise 5...................");
console.log("The index of number 24 in the array \n[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]\nis [0][3]");
c = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log("Checking by calling c[0][3]...");
console.log("Result: " + c[0][3]);
console.log("Displaying 3rd element of the array by calling c[2]....");
console.log(c[2]);
console.log("Displaying 2nd element of 3rd element by calling c[2][1]...");
console.log(c[2][1]);
