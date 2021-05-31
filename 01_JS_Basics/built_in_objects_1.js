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
    "use strict";

    function log(str) {
        console.log(str);
    }

    function testFn(callBackFn, inputArray) {
        for (var i = 0; i < inputArray.length; i++) {
            log(inputArray[i] + " -> " + callBackFn(inputArray[i]));
        }
    }

//  1. Write a functional expression that duplicates each element of a given array.
//  Input: [2, 4, 7, 11, -2, 1] Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
    (function ex1() {
        /**
         * Duplicates each element of a given array.
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

        // this is probably much worse performancewise, 
        // but let's practice splice as well :)
        function duplicate2(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr.splice(i, 0, arr[i]);
                i++; // splice modifies array, here increasing its length by 1 
                // in each iteration of the for loop
            }
        }
        function test() {
            log("Testing 1...............................");
            var a = [2, 4, 7, 11, -2, 1];
            var a2 = [2, 4, 7, 11, -2, 1];
            var b = duplicate(a);
            duplicate2(a2);
            log(b);
            log(a2)
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
        function findSmallest2(arr) {
            var min = Math.min(...arr);
            var minIndex = arr.lastIndexOf(min);
            return {
                minValue: min,
                minLastIndex: minIndex
            };
        }
        function test() {
            log("Testing 4..........................");
            var input = [1, 4, -2, 11, 8, 1, -2, 3];
            log(findSmallest(input));
            log(findSmallest2(input));
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
        function getAllLess2(arr, val) {
            var copy = [...arr];
            copy.sort(function (a, b) { return a - b; });
            // TODO: CANNOT USE INDEXOF, BECAUSE THE VAL IS NOT NECESSARILY IN THE ARRAY!
            log("copy.indexOf(val): " + copy.indexOf(val));
            return copy.slice(0, copy.indexOf(val)); // NO GO (see above)
        }

        (function testGetAllLess() {
            log("Testing 5a.............................");
            var input = [2, 3, 8, -2, 11, 4];
            var val = 6;
            log(getAllLess(input, val));
            // log(getAllLess2(input, val));

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
    
    (function ex6() {

        // connecting entries in arrays using indices
        var prodNames = ["apples", "milk", "bananas"];
        var prices = [100, 80, 150]; 

        /**
         * Product constructor
         * @param {string} name 
         * @param {number} price 
         */
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }

        // the way we did it before Objects...
        var products = [];
        for (var i = 0; i < prodNames.length; i++) {
            products.push(new Product(prodNames[i], prices[i]));
        }
        // log(products); // test

        /**
         * ShoppingList constructor + instance methods
         */
        function ShoppingList() {
            this.list = [];
            /**
             * Adds given product to this ShoppingList
             * @param {Product} product 
             */
            this.addProduct = function (product) {
                if (product instanceof Product) this.list.push(product);
                else throw Error("ShoppingList.addProduct: argument must be " +
                    "a Product object");
            }
            /**
             * @returns a list of products in this shopping list
             */
            this.getList = function () {
                return this.list;
            }
            /**
             * @returns the total price of products in this shopping list
             */
            this.total = function () {
                var sum = 0;
                this.list.forEach(function (prod) {
                    sum += prod.price;
                });
                return sum;
            }
            /**
             * @returns The average price of products in this ShoppingList
             */
            this.avgPrice = function () {
                return this.total() / this.list.length;
            }
            // this.totalUsingForLoop = function () {
            //     var sum = 0;
            //     for (var i = 0; i < this.list.length; i++) {
            //         sum += this.list[i].price;
            //     }
            //     return sum;
            // }

            /**
             * @returns the most expensive Product in this ShoppingList
             */
            this.getMostExpensive = function () {
                var max = null;
                var maxPrice = -Infinity;
                this.list.forEach(function (prod) {
                    if (prod.price > maxPrice) {
                        maxPrice = prod.price;
                        max = prod;
                    }
                });
                return max;
            }
        }
        
        var shopList = new ShoppingList();
        for (var i = 0; i < prodNames.length; i++) {
            shopList.addProduct(new Product(prodNames[i], prices[i]));
        }
        log("..............");
        log("Shopping list:");
        log("..............");
        log(shopList.getList()); // test
        log("Total price: " + shopList.total());
        // log("Total price: " + shopList.totalUsingForLoop());

        log("Average price: " + shopList.avgPrice());
        log("The most expensive product: ");
        log(shopList.getMostExpensive().name.toUpperCase());

    })();

//  7. 
// a. Write a function that checks if a given string is written in all capitals.
    (function ex7() {
        
        function allCaps(str) {
            return (str.length > 0 && str === str.toUpperCase());
        }

        // test allCaps()
        log("Testing allCaps()..............................");
        log(allCaps("BASE"));
        log(allCaps("baSe"));
        log(allCaps("b"));
        log(allCaps(""));

// b. Write a function that checks if a given string contains any digits.
        function hasDigits(str) {
            // Construct a REGEX:
            /////////////////////
            // using a regular expression literal, which consists of a pattern
            // enclosed between slashes, or Or calling the constructor function
            // of the RegExp object, as follows: let re = new RegExp('ab+c');
            let regex = /[0-9]/;
            // another way:
            // regex = new RegExp("[0-9]");
            return str.search(regex) >= 0;
        }
        log("Testing hasDigits()...............................");
        var input = ["Benny2", "10", "blablabla"];
        testFn(hasDigits, input);
        // log(hasDigits("Benny2"));
        // log(hasDigits("10"));
        // log(hasDigits("blablabla"));

        // c. Write a function that checks if a given string is a valid hexadecimal color.
        function isHex(str) {
            let regexNonHex = new RegExp("[^0-9a-fA-F#]");
            // let regexSpace = new RegExp("\s");
            return (
                str.charAt(0) === "#" 
                && (str.length === 7 || str.length === 4)
                && str.substring(1).search("#") < 0
                && str.search(regexNonHex) < 0);
        }
        log("Testing isHex()....................................");
        var hexInput = ["#23FFgg", "#123456", "#ffaa21", "# 11223", "22233ff",
                        "##233aa"];
        testFn(isHex, hexInput);

// d. Write a function that checks if a given number belongs to the interval
// from 1900 to 2018. 
        
        /**
         * @param {number} start start value, inclusive
         * @param {number} end end value, inclusive
         * @param {number} n number to test
         * @returns true if n is in given range [start, end]
         */
        function inInterval(n, start=1900, end=2018) {
            return (start <= n && end >= n);
        }

        log(inInterval(10, 11, 0));
        log(inInterval(0, 0, 0));
        log(inInterval(1, 2, 1));
        log(inInterval(1, 1, 1));

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator
// referencing the functions from a) to d).
        
        function Validator() {
            this.stringValidator = function (str) {
                return allCaps(str);
            }
            this.passwordValidator = function (str) {
                return (hasDigits(str));
            }
            this.colorValidator = function (str) {
                return isHex(str);
            }
            this.yearValidator = function (year) {
                return inInterval(year);
            }
        }

        // test Validator
        log("Testing Validator.........................");
        var validator = new Validator();
        log(validator.stringValidator("CAPS"));
        log(validator.passwordValidator("2dfg"));
        log(validator.colorValidator("#fff"));
        log(validator.yearValidator(1991));

})();
//  8. Write a function that calculates a number of days to your birthday.
//  Input: 25 February Output: 5 days
    
    (function ex8() {

// Date constructor syntax:
//////////////////////////
// new Date()
// new Date(value)
// new Date(dateString)
// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// valueOf()
////////////
// The Date.valueOf() method returns the primitive value of a Date object
// as a number data type, the number of milliseconds since midnight
// 01 January, 1970 UTC.

// other usefull methods:
// var d = new Date(1469433907836);
// d.toLocaleString(); // expected output: "7/25/2016, 1:35:07 PM"
// d.toLocaleDateString(); // expected output: "7/25/2016"
// d.toDateString();  // expected output: "Mon Jul 25 2016"
// d.toTimeString(); // expected output: "13:35:07 GMT+0530 (India Standard Time)"
// d.toLocaleTimeString(); // expected output: "1:35:07 PM"
//////////////////////////////////////////////
// notice the way a Date object is constructed:
// >var helperDate = new Date(0, 0)
// undefined
// >helperDate.getFullYear()
// 1900
// >helperDate.getMonth()
// 0
// >helperDate.getDate()
// 1
    
        /**
         * converts milliseconds to days
         * @param {number} millisecs 
         * @returns number of days converted from milliseconds
         */
        function milliSecsToDays(millisecs) {
            return Math.round(millisecs / (1000 * 60 * 60 * 24));
        }

        /** 
         * @param {Date} bday 
         * @returns number of days to bday; if bday has passed, the return
         * value is negative.
         */
        function daysToBday(bday) {
            if (!bday instanceof Date) throw new Error("daysToBday: argument " +
                "must be a Date object");
            var date = new Date();
            // introduce `now` variable to set the hours:mins:secs to 00:00:00
            var now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            var nextBday = new Date(now.getFullYear(), bday.getMonth(),
                bday.getDate());
            // The Date.valueOf() method returns the primitive value of a Date object
            // as a number data type, the number of milliseconds since midnight
            // 01 January, 1970 UTC.
            return milliSecsToDays(nextBday.valueOf() - now.valueOf());
        }
        // test daysToBday:
        log("Testing miliseconds to days...............");
        log(milliSecsToDays(86400000));
        log("Testing days to birthday..................");
        var date1 = new Date(2021, 4, 27);
        log(daysToBday(date1));
        var date2 = new Date(1991, 5, 26);
        log(daysToBday(date2));

    })();
 
//  9. Write a function that for a given departure and arrival time
//   calculates the time the trip takes. Input: 8:22:13 11:43:22 Output: 3
//   hours 21 minutes 9 seconds
    (function ex9() {

        //////////////////
        // The raw way  //
        //////////////////

        /**
         * 
         * @param {string} startTime string in the format hh:mm:ss
         * @param {string} endTime string in the format hh:mm:ss
         * @returns the difference between startTime and endTime in a string format
         */
        function calculateTimeDifference(startTime, endTime) {

            var hours, mins, secs;
            [hours, mins, secs] = startTime.split(":");
            hours = parseInt(hours); mins = parseInt(mins); secs = parseInt(secs);
            // console.log(hours, mins, secs);
            var startInSecs = timeToSeconds(hours, mins, secs);
            // console.log(startInSecs);

            var hours2, mins2, secs2;
            [hours2, mins2, secs2] = endTime.split(":");
            hours2 = parseInt(hours2); mins2 = parseInt(mins2); secs2 = parseInt(secs2);
            // console.log(hours2, mins2, secs2);
            var endInSecs = timeToSeconds(hours2, mins2, secs2);
            // console.log(endInSecs);
            // log(endInSecs - startInSecs);
            return timeFromSeconds(endInSecs - startInSecs);
        }

        /**
         * 
         * @param {number} hrs 
         * @param {number} mins 
         * @param {number} secs 
         * @returns a number representing given time converted to seconds
         */
        function timeToSeconds(hrs, mins, secs) {
            return secs + mins * 60 + hrs * 3600;
        }

        /**
         * 
         * @param {number} seconds time in seconds
         * @returns a string representation of time in the format HH:MM:SS
         */
        function timeFromSeconds(seconds) {
            // convert to hours, get remainder(for hours)
            // convert remainder for hours to minutes, get remainder for minutes
            // convert remainder for minutes to seconds - remainder should be 0

            var hrs = Math.floor(seconds / 3600);
            // var mins = Math.floor((seconds - (hrs * 3600)) / 60);
            var mins = Math.floor((seconds % 3600) / 60);
            var secs = seconds - (hrs * 3600 + mins * 60);         
            var timeString = [];
            timeString[0] = (formatToNDigits(hrs, 2));
            timeString[1] = (formatToNDigits(mins, 2));
            timeString[2] = (formatToNDigits(secs, 2));
            return timeString.join(":");

        }

        /**
         * @param {number} num whose number of digits is less than or equal to nDigits
         * @param {nDigits} the number of digits the string should contain
         * @returns a string representation of given number with length == nDigits
         */
        function formatToNDigits(num, nDigits) {
            var str = "" + num;
            while (str.length < nDigits) str = "0" + str;
            return str;
        }

        ///////////////////
        // Using Date()  //
        ///////////////////
        /**
         * Assumes departure < arrival by no more than 23 hrs 59 mins 59 secs
         * @param {Date} departure 
         * @param {Date} arrival 
         * @returns a string representing the time difference between 2 given dates
         */
        function getTimeDifference(departure, arrival) {
            var diffInMillisecs = arrival.getTime() - departure.getTime();
            var helperDate = new Date(departure.getFullYear(), departure.getMonth(), departure.getDate());
            // time for helperDate is by default set to midnight;
            // year, month, date will be ignored
            var diffDate = new Date(helperDate.getTime() + diffInMillisecs);
            // now you have the difference in hours, mins and secs
            var output = [];
            output.push(diffDate.getHours() + " hours ");
            output.push(diffDate.getMinutes() + " minutes ");
            output.push(diffDate.getSeconds() + " seconds");
            return output.join(" ");
        }
        /**
         * Converts milliseconds to hours, minutes and seconds. The remainder
         * milliseconds are discarded
         * @param {number} milliseconds 
         * @returns an array in the format [hours, mins, secs];
         */
        function millisToHrsMinsSecs(milliseconds) {
            var secs = Math.floor((milliseconds / 1000) % 60) % 60;
            var mins = Math.floor((milliseconds / 1000) / 60) % 60;
            var hrs = Math.floor(((milliseconds / 1000) / 60) / 60);
            return [hrs, mins, secs];
        }

        // testing.........................
        // console.log(timeFromSeconds(3600))
        // log(formatToNDigits(3, 2));
        console.log("Test time from seconds: " + timeFromSeconds(91432));
        console.log(calculateTimeDifference("8:22:13", "11:43:22"));
        console.log("Testing function using Date() only...............");
        var dep = new Date(2021, 5, 31, 8, 22, 13);
        var arr = new Date(2021, 5, 31, 11, 43, 22);
        
        console.log("Time diff with input from specs: "
        + getTimeDifference(dep, arr));
        console.log("Now testing with different input..................");
        dep.setHours(dep.getHours() - 1);
        dep.setMinutes(dep.getMinutes() + 1);
        console.log(getTimeDifference(dep, arr));
        var dep2 = new Date(2020, 1, 1, 0, 0, 0);
        var arr2 = new Date(2020, 1, 1, 23, 59, 59);
        console.log(getTimeDifference(dep2, arr2));

        console.log("Testing millisToHrsMinsSecs.........................");
        var input = [2000, 20000, 200000, 547894, 5478941];
        for (var i = 0; i < input.length; i++) {
            console.log(input[i] + " millis -> " + millisToHrsMinsSecs(input[i]));
        }

    })();
    
   
//  10.
// a. Write a constructor function that creates points in space. Each
// point in space has its own x, y, and z coordinate. For example, (3,
// 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points
// in the space. 
    
    (function ex10() {

        /**
         * a Point constructor
         * @param {number} x x-coordinate of this point
         * @param {number} y y-coordinate of this point
         * @param {number} z z-coordinate of this point
         */
        function Point(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            /**
             * @param {Point} that 
             * @returns the distance between this point and given point
             */
            this.distTo = function (that) {
            // d(p1, p2) = sqrt((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)
                return Math.sqrt(Math.pow(that.x - this.x, 2) + Math.pow(that.y - this.y, 2) + Math.pow(that.z - this.z, 2));
            }
        }

        function testPoint() {
            console.log("Testing Point..............................");
            var p1 = new Point(2, 3, 1);
            var p2 = new Point(8, -5, 0);
            console.log(p1);
            console.log(p2);
            console.log("Distance between points:")
            console.log(p1.distTo(p2).toFixed(2));
        }

        testPoint();

    })();


//  11.
// a. Write a function that generates a random integer value between 5
// and 20. b. Write a function that generates a random integer value
// between 50 and 100. c. Write a function which expects a number and a
// callback generator function and returns an array of numbers produced
// by the generator function.
    /**
     * @param {number} low 
     * @param {number} hi 
     * @returns a random integer in range [low, hi)
     */
    function randomInt(low, hi) {
        return Math.floor(Math.random() * (hi-low) + low);
    }

    function getNValuesFrom(n, callBackGeneratorFn, ...callBackArgs) {
        var result = [];
        for (var i = 0; i < n; i++) {
            result.push(callBackGeneratorFn(callBackArgs))
        }
        return result;
    }

    function randIntWrapper(argsAsArray) {
        return randomInt(argsAsArray[0], argsAsArray[1]);
    }
    function testRandomInt() {
        console.log("Testing random int...................");
        console.log("From 5 to 20;")
        var lo = 5;
        var hi = 21;
        var n = 100;
        console.log("" + getNValuesFrom(n, randIntWrapper, lo, hi));
        console.log("From 50 to 100;")
        lo = 50;
        hi = 101;
        console.log("" + getNValuesFrom(n, randIntWrapper, lo, hi));
    }
    
    testRandomInt();



//  12.  Write a function that shuffles the elements of a given array. Input:
//  	   [3, 6, 11, 2, 9, 1] Output: [6, 2, 9, 1, 3, 11]  (it can be any
//  	   random permutation of the given array)
    
    /**
     * Uses Knuth's shuffle algorithm to shuffle the array (uses O(n)) 
     * source: Princeton's Algorithms course
     *   In iteration i, pick integer r between 0 and i uniformly at random.
     *   swap a[i] and a[r].
     * @param {Array} array 
     * @returns a new array with randomly shuffled entries
     */
    function shuffle(array) {
        // var shuffled = [];
        // create a copy of given array:
        var shuffled = [...array]; // only use for 1-d arrays!
        // console.log(shuffled);
        for (var i = 0; i < array.length; i++) {
            var randIndex = randomInt(0, i + 1);
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            [shuffled[i], shuffled[randIndex]] = [shuffled[randIndex], shuffled[i]];
        }
        return shuffled;
    }

    function testShuffle() {
        var array = [3, 6, 11, 2, 9, 1];
        var repetitions = 10;
        console.log("Testing shuffle in " + repetitions + " repetitions....................");
        for (var i = 0; i < repetitions; i++) {
            console.log("" + shuffle(array));
        }
    }
    testShuffle();

})();