"use strict"


console.log("###############################");
console.log("Exercise 1......................") ;
// 1. Write a function to count vowels in a provided string. Vowels are a, e, i,
//    o, and u as well as A, E, I, O, and U. 

(function exercise1(){

    function countVowels(str) {

        function isVowel(char) {
            var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
            for (var i = 0; i < vowels.length; i++) {
                if (char === vowels[i]) return true;
            }
            return false;
        }

        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (isVowel(str[i])) count++;
        }
        return count;
    }

    console.log("output: ", countVowels("randOm string"), 
                 " - expected output: 3");

})();

   
console.log("###############################");
console.log("Exercise 2......................") ;
// 2. Write a function that combines two arrays by alternatingly taking
//    elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]


(function exercise2() {

    function combineArrays(arr1, arr2) {
        if (arr1.length > arr2.length) {
            var tmp = arr1;
            arr1 = arr2;
            arr2 = tmp;
        }
        var combined = [];
        for (var i = 0; i < arr1.length; i++) {
            combined[combined.length] = arr1[i];
            combined[combined.length] = arr2[i];
        }
        while(i < arr2.length) combined[combined.length] = arr2[i++];
        return combined;
    }
    var arr1 = ['a','b', 'b'];
    var arr2 = [1, 2, 3];
    console.log("Combined array: "+  combineArrays(arr1, arr2));
})();

console.log("###############################");
console.log("Exercise 3......................") ;
// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

(function exercise3() {
    function rotateList(list, k) {
        var rotated = [];
        for (var i = k; i < list.length; i++) {
            rotated[rotated.length] = list[i];
        }
        for (var i = 0; i < k; i++) {
            rotated[rotated.length] = list[i];
        }
        return rotated;
    }

    console.log(rotateList([1,2,3,4,5,6], 2));
})();


console.log("###############################");
console.log("Exercise 4......................") ;
// 4. Write a function that takes a number and returns array of its digits.
(function exercise4() {
    
    function nToDigitsUsingMath(n) {
        if (n === 0) return [0];
        var digits = [];
        while(n > 0) {
            // n/m = d + r/m  ->>>> d = n/m - r/m
            digits[digits.length] = n % 10;
            n = (n - (n % 10)) / 10; // integer division
        }
        return reverseArray(digits);

        function reverseArray(array) {
            var reversed = [];
            for (var i = array.length - 1; i >= 0; i--) {
                reversed[reversed.length] = array[i];
            }
            return reversed;
        }
    }

    function nToDigitsUsingJS(n) {
        var digits = [];
        var nAsStr = "" + n;
        for (var i = 0; i < nAsStr.length; i++) {
            digits[digits.length] = parseInt(nAsStr[i]);
        }
        return digits;
    }

    var input = [12345, 0, 54321, 1]
    for (var i = 0; i < input.length; i++) {
        console.log("Input: ", input[i]);
        console.log("Output (using math): ", nToDigitsUsingMath(input[i]));
        console.log("Output using string conversion: ", nToDigitsUsingJS(input[i]));
    }

})();

console.log("###############################");
console.log("Exercise 5.....................") ;
// 5. Write a program that prints a multiplication table for numbers up to 12.

(function exercise5() {

    function multiplicationTable(limit) {
        var spacing = " ";
        var maxNum = (limit * limit);

        var result = "";
        for (var row = 1; row <= limit; row++) {
            for (var col = 1; col <= limit; col++) {
                var prod = row * col;
                result += (spacing + padding(prod, maxNum) + prod + spacing );
            }
            result +=("\n");
        }
        return result;
    }

    // if num has less digits than maxNum, returns a padding string used for
    // vertical alignment of numbers to the right; otherwise, returns an empty str
    function padding(num, maxNum) {
        var paddingStr = "";
        var paddingLen = nDigits(maxNum) - nDigits(num);
        for (var i = 0; i < paddingLen; i++) {
            paddingStr += " ";
        }
        return paddingStr;
    }

    // returns the number of digits in a number
    function nDigits(n) {
        n = Math.abs(n);
        var result = 0;
        if (n === 0) return 1;
        if (n < 0) {
            result++;
            n *= -1;
        }
        while (n > 0) {
            result++;
            n = (n - (n % 10)) / 10; // integer division
        }
        return result;
    }

    // console.log(nDigits(-33));

    console.log(multiplicationTable(12))

})();

// console.log(exercise5);

console.log("###############################");
console.log("Exercise 6.....................") ;

// 6. Write a function to input temperature in Centigrade and convert to
//    Fahrenheit.

(function exercise6() {

    function CtoF(C) {
        return C * 9/5 + 32;
    }

    function testCtoF() {
        var temps = [-10, 0, 10, 20, 30, 40];
        for (var i = 0; i < temps.length; i++) {
            console.log(temps[i] + "°C = " + CtoF(temps[i]) + "°F");
        }
    }

    testCtoF();
})();


console.log("###############################");
console.log("Exercise 7.....................") ;
// 7. Write a function to find the maximum element in array of numbers. Filter
//    out all non-number elements.

(function exercise7() {
    function findMaxN(array) {
        var max = -Infinity;
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === "number" && array[i] > max)
                max = array[i];
        }
        return max;
    }
    function testFindMaxN() {
        var input = ["bla", 3, 6, true, NaN, null];
        console.log("expecting 6.... Output: " + findMaxN(input));
    }
    testFindMaxN();
})();


console.log("###############################");
console.log("Exercise 8.....................") ;
// 8. Write a function to find the maximum and minimum elements. Function
//    returns an array.
(function exercise8() {

    function findMinMax(array) {
        var min = Infinity;
        var max = -Infinity;
        for (var i = 0; i < array.length; i++) {
            if (array[i] < min) min = array[i];
            if (array[i] > max) max = array[i];
        }
        return [min, max];
    }

    function testFindMinMax() {
        var input = [3, 5, 6, 1, 0 , 123, 5];
        console.log("testing find minimum and maximum; expecting [0, 123]....");
        console.log(findMinMax(input));
    }

    testFindMinMax();
})();

console.log("###############################");
console.log("Exercise 9.....................") ;
// 9. Write a function to find the median element of array.

(function exercise9() {

    function getMedian(array) {
        if (array.length === 1) return array[0];
        var len = array.length;
        if (len % 2 != 0) { // return middle element
            return array[(len - (len % 2)) / 2]; // or Math.floor(len / 2)
        } else {
            // return the average of 2 middle elements
            return (array[len / 2] + array[len / 2 + 1]) / 2;
        }
    }

    function testGetMedian() {
        console.log("testing median.....")
        var input1 = [3, 3, 5, 9, 11];
        var input2 = [3, 5, 7, 9 ];
        console.log("Output: " + getMedian(input1) + "; expected output: 5");
        console.log("Output: " + getMedian(input2) + "; expected output: 6");

    }

    testGetMedian();
})();


console.log("###############################");
console.log("Exercise 10.....................") ;
// 10. Write a function to find the element that occurs most frequently.

(function exercise10() {
    function mostFreq(arr) {
        var max = 0;
        var elem = null;
        for (var i = 0; i < arr.length; i++) {
            var nextElem = arr[i];
            var nextCount = 1;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] === nextElem) {
                    nextCount++;
                }
            }
            if (nextCount > max) {
                max = nextCount; 
                elem = nextElem;
            }
        }
        return [elem, max];
    }
    
    var input = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    console.log("input: ", input);
    var mostFrequent = mostFreq(input);
    console.log("The most frequent element is " + mostFrequent[0] 
        + ", occuring " + mostFrequent[1] + " times");
})();

console.log("###############################");
console.log("Exercise 11.....................") ;
// 11. Write a function to find and return the first, middle and last element of
//     an array if the array has odd number of elements. If number of elements
//     is even, return just the first and the last. In other cases (empty
//     array), input array should be returned.

(function exercise11() {
    
    function firstLastMiddle(array) {
        var len = array.length;
        if (len < 2) return array;
        if (len % 2 !== 0) return [array[0], array[(len-len%2)/2], array[len-1]];
        return [array[0], array[len-1]];
    }

    // test function
    var input = [ [1, 2, 3, 4, 5], [1, 2, 3, 5], [], [1] ];
    for (var i = 0; i < input.length; i++) {
        console.log("input: " , input[i]);
        console.log("output: ", firstLastMiddle(input[i]));
        console.log("...");
    }

})();


console.log("###############################");
console.log("Exercise 12.....................") ;
// 12. Write a function to find the average of N elements. Make the function
//     flexible to receive dynamic number or parameters.

(function exercise12() {
    function avg() {    
        var sum = 0;
        var count = arguments.length;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === "number") sum += arguments[i];
            else count--;
        }
        return sum / count;
    }

    function testAvg() {
        console.log("Testing avg, expecting 5.5.....; Output: " 
            + avg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
        console.log("Testing avg with mixed type array, expecting 5.5....; Output: "
            + avg(1, 2, 3, 4, 5, true, 6, 7, 8, 9, 10, "blabla"));
    }

    testAvg();
})();


console.log("###############################");
console.log("Exercise 13.....................") ;
// 13. Write a function to find all the numbers greater than the average.

(function exercise13() {

    function avg(array) {    
        var sum = 0;
        var count = array.length;
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === "number") sum += array[i];
            else count--;
        }
        return sum / count;
    }

    function allGreaterThanAvg(array) {
        var result = [];
        var average = avg(array);
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] === "number" 
                && array[i] > average) result[result.length] = array[i];
        }
        return result;
    }

    var input = [1, 2, 3, 4, 5, true, 6, 7, 8, 9, 10, "blabla"];
    console.log("input: ", input);
    console.log("output: ", allGreaterThanAvg(input));

})();

console.log("###############################");
console.log("Exercise 14.....................") ;

// 14. The body mass index (BMI) is the ratio of the weight of a person (in
//     kilograms) to the square of the height (in meters). Write a function that
//     takes two parameters, weight and height, computes the BMI, and prints the
//     corresponding BMI category: • Starvation: less than 15 • Anorexic: less
//     than 17.5 • Underweight: less than 18.5 • Ideal: greater than or equal to
//     18.5 but less than 25 • Overweight: greater than or equal to 25 but less
//     than 30 • Obese: greater than or equal to 30 but less than 40 • Morbidly
//     obese: greater than or equal to 40

(function exercise14() {

    function BMI(weightInKg, heightInMeters) {
        var bmi = roundTo2DecPl( weightInKg / (heightInMeters * heightInMeters));
        return ("BMI = " + bmi + "; BMI category: " + getBMIcategory(bmi));
    }

    function getBMIcategory(bmi) {
        var category = "";
        if      (bmi < 15)   category = "Starvation";
        else if (bmi < 17.5) category = "Anorexic";
        else if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25)   category = "Ideal";
        else if (bmi < 30)   category = "Overweight";
        else if (bmi < 40)   category = "Obese";
        else                 category = "Morbidly obese";
        return category;
    }

    function testBMI() {
        var weights = [20, 40, 50, 60, 70, 80, 90, 100, 150, 200];
        var height = 1.6;
        for (var i = 0; i < weights.length; i++) {
            console.log("weight: " + weights[i] + "; height: " + height 
                + "; " + BMI(weights[i], height));
        }

    }
    function roundTo2DecPl(n) {
        n *= 100;
        n = Math.round(n);
        return n/100;
    }


    testBMI();

})();


console.log("###############################");
console.log("Exercise 15.....................") ;

// 15. Write a function that takes a list of strings and prints them, one per
//     line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
//   *********

(function exercise15() {
    function longestStrLen(arrayOfStrings) {
        var longest = 0;
        for (var i = 0; i < arrayOfStrings.length; i++) {
            if (arrayOfStrings[i].length > longest) {
                longest = arrayOfStrings[i].length;
            }
        }
        return longest;
    }
    // console.log(longestStrLen(["Hello", "World", "in", "a", "frame"]));

    function padding(length, longestLength) {
        var len = longestLength - length;
        var result = "";
        for (var i = 0; i < len; i++) {
            result += " ";
        }
        return result;
    }

    function frameStrings(strArray) {
        var result = "";
        var longestLen = longestStrLen(strArray);
        for (var i = 0; i < longestLen + 4; i++) {
            result += "*";
        }
        result += "\n";
        for (var i = 0; i < strArray.length; i++) {
            result += ("* " + strArray[i] 
                + padding(strArray[i].length, longestLen) + " *\n");
        }
        for (var i = 0; i < longestLen + 4; i++) {
            result += "*";
        }
        result += "\n";
        return result; 
    }

    console.log(frameStrings(["Hello", "World", "in", "a", "frame"]));

})();

