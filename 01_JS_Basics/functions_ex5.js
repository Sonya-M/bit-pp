"use strict"


console.log("#######################################");
console.log("Exercise 1")
/* 
    1. Find the min and max element in the following array and switch their
   places. Print out the modified array in the console. Input:  [ 3, 500, 12,
   149, 53, 414, 1, 19 ] Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
   */


function switchMinMax (arr) {
    // find min and max
    var minIndex = -1;
    var maxIndex = -1;
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        // console.log("now i is ", i);
        var next = arr[i];
        // console.log("next = " , next);
        if (next < min) {
            min = next;
            minIndex = i;
            // console.log("minIndex = ", minIndex);
            // console.log("min = ", min);
        }
        if (next > max) {
            max = next;
            maxIndex = i;
            // console.log("maxIndex", maxIndex);
            // console.log("max = ", max);

        }
    }
    // switch min and max
    arr[minIndex] = max;
    arr[maxIndex] = min;
}

var arr = [ 3, 500, 12, 149, 53, 414, 1, 19 ] ;
switchMinMax(arr);
console.log(arr);

console.log("#######################################");
console.log("Exercise 2")

  /*  2. Use the following array to make a new one by dividing its values by two
       and adding 5. If a given element's value is 0, change it to 20. Input: [
       3, 500, -10, 149, 53, 414, 1, 19 ] Output: [ 6.5, 255, 20, 79.5, 31.5,
       212, 5.5, 14.5 ] */

function exercise2 (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
    	result[result.length] = arr[i] / 2 + 5;
        if (result[result.length-1] === 0) result[result.length-1] = 20;
    }
    return result;
}

var input2 = [3, 500, -10, 149, 53, 414, 1, 19];
console.log("", exercise2(input2));

console.log("#######################################");
console.log("Exercise 3")

/*  3. Initialize two arrays. The first one should contain student names, the
       second one the number of points for each student. Display students' names
       with their corresponding grade. Use the following ranges: 51-60 -> 6,
       61-70 -> 7, 71-80 -> 8, 81-90 -> 9, 91-100 -> 10. Input: [ "Micahel",
       "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63,
       72, 99, 51, 83, 59 ] Output: Bill acquired 59 points and earned 6.
       Micahel acquired 50 points and failed to complete the exam.

*/

function exercise3 (studentNames, points) {
    if (studentNames.length !== points.length) return("Error in input!");
    for (var i = 0; i < studentNames.length; i++) {
        var output = ""
        var grade = pointsToGrade(points[i]);

        // console.log("points" , points[i]);
        // console.log("grade: " + grade);
        
        output += (studentNames[i] + " acquired " + points[i] 
        + " points and ");
        if (grade === 5) {
            output += "failed to complete the exam."
        } else {
            output += "earned a " + grade;
        }
        console.log(output);
    }
    
}

function testExercise3 () {
    var studentNames = [ "Micahel",
    "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
    var grades = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
    exercise3(studentNames, grades);
}

function pointsToGrade(pts) {
    if (pts < 51) return 5;
    if (pts < 61) return 6;
    if (pts < 71) return 7;
    if (pts < 81) return 8;
    if (pts < 91) return 9;
    else return 10;
}

testExercise3();

console.log("#######################################");
console.log("Exercise 4")

/*    4. (skip :))Sort a previously defined array. Place its sorted values into a
       new array whose values are equivalent to the first array's values
       multiplied by 2. Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ] Output: [ 2, 10,
       12, 16, 22, 24, 26, 30 ]

*/

function sort2(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
}

var input4_2 = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
sort2(input4_2);
console.log(input4_2);

function sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}

function multiplyBy2(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[newArr.length] = arr[i] * 2;
    }
    return newArr;
}

var input4 = [ 13, 11, 15, 5, 6, 1, 8, 12 ] ;
sort(input4);
console.log("Sorted array: " + input4);
var multiplied = multiplyBy2(input4);
console.log("Multiplied by 2: " + multiplied);

console.log("#######################################");
console.log("Exercise 5")

/*    5. (skip :))Sort a previously defined array in a descending order and
       display it in the console. Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ] Output:
       [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function sortDesc(arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
            
        }
        var tmp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = tmp;
    }
}

var input5 = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
sortDesc(input5);
console.log("Sorted in descending order: " + input5);


console.log("#######################################");
console.log("Exercise 6")

/*    6. Write a program that uses a loop to add all the even numbers from 1 to
       1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
       The result should then be multiplied by 12.5 and displayed in console.
       Output: 2350000
*/

function exercise6() {
    var result = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            result += i;
        } else if (i <= 500) {
            result -= i;
        }
    }
    return result * 12.5;
}

console.log(exercise6());


console.log("#######################################");
console.log("Exercise 7")
/*    7. Define a 10 element array. Take the first two letters from every string
       (that has at least 2 letters) in the array and create a new string from
       them. Print it out in the console. Input: [ "M", "Anne", 12, "Steve",
       "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/

function exercise7(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" && arr[i].length >= 2) {
            result += (arr[i][0] + arr[i][1]);
        }
    }
    return result;
}

function testExercise7() {
    var input = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
    console.log(exercise7(input));
}
testExercise7();

console.log("#######################################");
console.log("Exercise 8")

/*   8. Write a program that takes a string and prints its characters out in
     reversed order in the console. Input:  Belgrade Institute of Technology
     Output: ygolonhceT fo etutitsnI edargleB
*/

function reverseStr(str) {
    var reverseStr = ""
    for (var i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    console.log(reverseStr);
}
reverseStr("Belgrade Institute of Technology");

/*    9. Write a program that displays all the combinations of two numbers between
       1 and 7. Don't display two of the same numbers at the same time. Display
       the number of possible combinations, as well. (E.g. (1.2),(2,1) is
       allowed, but not (1,1), (2,2)...).
*/

console.log("#######################################");
console.log("Exercise 9")
function exercise9() {
    var combos = [];
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {
            if (i !== j) {
                combos[combos.length] = [i, j];
            }
        }
    }
    console.log("# combinations: " + combos.length);
    console.log("Combinations:")
    var output9 = "";
    for (var i = 0; i < combos.length; i++) {
        output9 += ("(" + combos[i] + ")");
    }
    console.log(output9);
}

exercise9();


console.log("#######################################");
console.log("Exercise 10: Prime numbers")
/*    10. Write a program that checks if the entered number is a prime number
        (i.e. divisible only by 1 and by itself). Input:  17    | 15 Output:
        true  | false
*/
function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function testIsPrime() {
    var primes = [];
    for (var i = 0; i < 500; i++) {
        if (isPrime(i)) primes[primes.length] = i;
    }
    console.log(primes);
}

testIsPrime();
/*    11. Check if a given string is a palindrome (spaces are ignored). Input:
        eye  | Geek  | a nut for a jar of tuna Output: true | false | true
*/
console.log("#######################################");
console.log("Exercise 11: Palindromes")
function isPalindrome(str) {
    var noSpaces = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") noSpaces += str[i];
    }
    for (var i = 0; i < noSpaces.length; i++) {
        if (noSpaces[i] !== noSpaces[noSpaces.length - 1 - i]) return false;

    }
    return true;
}

function testIsPalindrome() {
    var inp = ["eye", "Geek", "a nut for a jar of tuna"];
    for (var i = 0; i < inp.length; i++) {
        console.log(inp[i] + ": Is it a palindrome? " + isPalindrome(inp[i]));
    }
}
testIsPalindrome();

console.log("#######################################");
console.log("Exercise 12: GCD")
/*    12. Write a program that calculates the greatest common divisor of two
        integers. Note: The greatest common divisor of two non-zero integers is
        the greatest positive number that divides both numbers with no
        remainder. Input:  192 42 | 81 9 Output: 6      | 9

 */

function findGCD(n1, n2) {
    // make n1 the smaller number
    if (n1 < n2) {
        var tmp = n1;
        n1 = n2;
        n2 = tmp;
    }
    // find the gcd
    var gcd = 1;
    for (var i = 2; i <= n1; i++) {
        if (n1 % i === 0 && n2 % i === 0) gcd = i;
    }
    return gcd;
}

function testFindGCD() {
    var tuples = [[192, 42], [81, 9], [54, 24]];
    for (var i = 0; i < tuples.length; i++) {
        console.log("GCD of " + tuples[i][0] + " and " + tuples[i][1] 
            + " is " + findGCD(tuples[i][0], tuples[i][1]));
    }
}

testFindGCD();