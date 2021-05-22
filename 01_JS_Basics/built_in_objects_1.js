//  Try to use built-in object methods to solve some of the problems here 

//  1. Write a functional expression that duplicates each element of a given array.
//  Input: [2, 4, 7, 11, -2, 1] Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

//  2. Write a functional expression that removes all duplicates in a given array.
//  Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13] Output: [1, 4, 8, 9, 12, 13] 

//  3. 
// a. Write a function that checks if a given array has odd number of elements.
//  Input: [1, 2, 9, 2, 1] Output: true
 
// b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
//  Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11] Output: 4

//  4. Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its 
// last position in the array.
//  Input: [1, 4, -2, 11, 8, 1, -2, 3] Output:  { minValue: -2, minLastIndex: 6 }

//  5.
//  a. Write a function that finds all the elements in a given array less
//   than a given element. Input: [2, 3, 8, -2, 11, 4], 6 Output: [2, 3,
//   -2, 4] b. Write a function that finds all the elements in a given
//   array that start with the “pro” substring. The function should be case
//   insensitive. Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
//   Output: [’Programming’, ‘product’]

// c. Write a function that expects an array and a callback function
// that filters out some of the elements. Use functions defined in a) or
// b) to test it. 

//  6. 
//  a. Write a list (array) of products you usually buy in the supermarket.
//  Write a price and name for each product.For example,
//   [
//  {name: ‘apples’, price: 100}, {name: ‘milk’, price: 80}, {name:’bananas’,
//  price: 150}
//  ]
//  b. Write a function that calculates the total price of your shopping list. 
//  c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// d. Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 
//  7. 
// a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

//  8. Write a function that calculates a number of days to your birthday.
//  Input: 25 February Output: 5 days
 
//  9. Write a function that for a given departure and arrival time
//   calculates the time the trip takes. Input: 8:22:13 11:43:22 Output: 3
//   hours 21 minutes 9 seconds
   
//  10.
// a. Write a constructor function that creates points in space. Each
// point in space has its own x, y, and z coordinate. For example, (3,
// 5, 1) can be a point in space.

// b. Write a function that calculates the distance between two points
// in the space. 

//  11.
// a. Write a function that generates a random integer value between 5
// and 20. b. Write a function that generates a random integer value
// between 50 and 100. c. Write a function which expects a number and a
// callback generator function and returns an array of numbers produced
// by the generator function.



//  12.  Write a function that shuffles the elements of a given array. Input:
//  	   [3, 6, 11, 2, 9, 1] Output: [6, 2, 9, 1, 3, 11]  (it can be any
//  	   random permutation of the given array)


(function built_in_objects_1() {

    function log(str) {
        console.log(str);
    }

    "use strict";
//  1. Write a functional expression that duplicates each element of a given array.
//  Input: [2, 4, 7, 11, -2, 1] Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
    (function ex1() {
        /**
         * Duplicates each aelement of a given array.
         * @param {Array} arr 
         */
        function duplicate(arr) {
            var dup = [];
            arr.forEach(function (element) {
                dup.push(element);
                dup.push(element);
            });
            return dup;
        }
        function test() {
            log("Testing 1...............................");
            var a = [2, 4, 7, 11, -2, 1];
            var b = duplicate(a);
            log(b);
        }
        test();
    })();
    

//  2. Write a functional expression that removes all duplicates in a given array.
//  Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13] Output: [1, 4, 8, 9, 12, 13] 
    (function ex2() {
        /**
         * Removes all duplicates in a given array
         * @param {Array} arr 
         */
        function removeDups(arr) {
            arr.sort(compareNums);
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] === arr[i - 1]) {
                    arr.splice(i, 1);
                    i--;
                }
            }
            return arr;
        }
        function compareNums(a, b) {
            return a - b;
        }

        function test() {
            log("Testing 2...............................");
            var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
            var output = removeDups(input);
            log(output);
        }

        test();
    })();

// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
//  Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11] Output: 4
    (function ex3() {
        /**
         * returns true if the length of the given array is an odd number
         * @param {Array} arr 
         */
        function hasOddLength(arr) {
            return arr.length % 2 !== 0;
        }
        /**
         * Returns the number of elements whose value is less than the value of the middle element in the
         * array. If the array has an even number of elements, prints an error message.
         * @param {Array} arr Array with an odd number of elements
         */
        function countLessThanMiddle(arr) {
            if (!hasOddLength(arr)) {
                log("Error: array must have an odd number of elements!");
            } else {
                var middleVal = arr[Math.floor(arr.length / 2)];
                var count = 0;
                arr.forEach(function (element) {
                    if (element < middleVal) count++;
                });
                return count;
            }
        }
        function test() {
            log("Testing 3...............................");
            var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
            log(countLessThanMiddle(input));
        }
        test();

    })();
//  4. Write a function that finds the smallest element of a given array. 
// The function should return an object that contains the smallest value and its 
// last position in the array.
//  Input: [1, 4, -2, 11, 8, 1, -2, 3] Output:  { minValue: -2, minLastIndex: 6 }
    
    (function ex4() {
        /**
         * FReturns an object containing the smallest value in the given
         * array and its last position in the array
         * @param {Array} arr 
         */
        function findSmallest(arr) {
            var smallest;
            var smallestIndex = 0;
            arr.forEach(function (element, index, array) {
                if (element <= array[smallestIndex]) {
                    smallest = element;
                    smallestIndex = index;
               }
            });
            return { minValue: smallest, minLastIndex: smallestIndex };
        }
        function test() {
            log("Testing 4..........................");
            var input = [1, 4, -2, 11, 8, 1, -2, 3];
            log(findSmallest(input));
        }
        test();

    })();

//  5.
//  a. Write a function that finds all the elements in a given array less
//   than a given element. Input: [2, 3, 8, -2, 11, 4], 6 Output: [2, 3,
    //   -2, 4] 
// b.Write a function that finds all the elements in a given
//   array that start with the “pro” substring. The function should be case
//   insensitive. Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
//   Output: [’Programming’, ‘product’]

// c. Write a function that expects an array and a callback function
// that filters out some of the elements. Use functions defined in a) or
// b) to test it. 
    
    (function ex5() {
        /**
         * 
         * @param {Array} arr 
         * @param {number} val
         * @return an array containing all elements less than given value;
         */
        function getAllLess(arr, val) {
            var allSmaller = [];
            arr.forEach(function (element) {
                if (element < val) allSmaller.push(element);
            });
            return allSmaller;
        }

        (function testGetAllLess() {
            log("Testing 5a.............................");
            var input = [2, 3, 8, -2, 11, 4];
            var val = 6;
            log(getAllLess(input, val));

        })();

        /**
         * 
         * @param {Array} arr array of strings
         * @param {String} startSubstr 
         * @returns an array of all elements in the given array that start
         * with the given substring, case insensitive
         */
        function findAllStartingWith(arr, startSubstr) {
            var result = [];
            arr.forEach(function (element) {
                if (element.toLowerCase().indexOf(startSubstr.toLowerCase()) === 0) {
                    result.push(element);
                }
            })
            return result;
        }

        function testFindAllStartingWith() {
            log("Testing 5b.............................");
            var input = ["JavaScript", "Programming", "fun", "product"];
            var substr = "PRO";
            log(findAllStartingWith(input, substr));
        }

        testFindAllStartingWith();

        function filterArray(arr, callBackFn, callBackArg) {
            if (callBackArg === undefined) return callBackFn(arr);
            else return callBackFn(arr, callBackArg);
        }
        
        function testFilterArray() {
            log("Testing 5c..........................");
            var input1 = [2, 3, 8, -2, 11, 4];
            var val = 6;
            log(filterArray(input1, getAllLess, val));
            var input2 = ["JavaScript", "Programming", "fun", "product"];
            var substr = "PRO";
            log(filterArray(input2, findAllStartingWith, substr));
        }
        testFilterArray();
    })();
// c. Write a function that expects an array and a callback function
// that filters out some of the elements. Use functions defined in a) or
// b) to test it. 

    

})();