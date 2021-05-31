// Try to solve all assignments on a separate branch. Keep in mind that you
// should try to use built-in objects and their methods, solo or combined. You
// should use loops only for the 4 and 9 assignment, all others can be solved
// using built-in object methods. 

"use strict"
function log(str) {
    console.log(str);
}

    //     1. Write a JavaScript function that reverses a number. typeof result of
    //        the function should be “number”.

    // 	12345 -> 54321

function reverseNum(num) {
    var numAsString = String(num);
    var arrOfChars = numAsString.split("");
    var reversed = arrOfChars.reverse();
    return reversed.join("");

}
function testReverse() {
    var result = reverseNum(123);
    log(result);
    log(typeof (result))
}
testReverse();
//     2. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed
// string.

// “Webmaster” -> “abeemrstw”

function sortString(str) {
    var strAsArray = str.split("");
    strAsArray.sort();
    return strAsArray.join("");
}


function testSortString() {
    var input = "cba";
    log(sortString(input));
}
testSortString();
//     3. Write a function to alphabetize words of a given string. Alphabetizing
//        a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"
function alphabetizeWords(str) {
    var wordsArray = str.split(" ");
    wordsArray.forEach(function replaceElementWithSorted(element, index, array) {
        element = sortString(element);
        array[index] = element;
    }
    );
    var result = wordsArray.join(" ");
    return result;
}

function testAlphabetizeWords() {
    log(alphabetizeWords("Republic Of Serbia"));
}
testAlphabetizeWords();

//     4. Write a function to split a string and convert it into an array of
//        words.

// 	"John Snow" -> [ 'John', 'Snow' ]
function splitStrToArrayOfWords(str) {
    return str.split(" ");
}
function testSplitStrToArrayOfWords() {
    log(splitStrToArrayOfWords("John Snow"));
}
testSplitStrToArrayOfWords();

//     5. Write a function to convert a string to its abbreviated form. 
// 	"John Snow" ->  "John S."
function abbreviate(str) {
    var result = str.substring(0, str.indexOf(" ") + 2);
    return result += ".";
}
function testAbbreviate() {
    log(abbreviate("John Snow"));
}
testAbbreviate();
//     6. Write a function that adds string to the left or right of string, by
//        replacing it’s characters.

//  '0000', ‘123’, 'l' -> 0123 '00000000', ‘123’, 'r' -> 12300000

function addPadding(padding, str, side) {
    var paddingLength = padding.length - str.length;
    padding = padding.substring(0, paddingLength);
    if (side === "l") return padding + str;
    else return str + padding;
}
function testAddPadding() {
    log(addPadding('0000', '123', 'l'));
    log(addPadding('00000000', '123', 'r'))
}
testAddPadding();

//     7. Write a function to capitalize the first letter of a string and
//        returns modified string.

// "js string exercises" -> "Js string exercises"
function sentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}
function testSentenceCase() {
    log(sentenceCase("js string exercises"));
}
testSentenceCase();

//     8. Write a function to hide email addresses to protect them from
//        unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"
/**
 * Hides the second half of the name of given email address (before
 * the "@" sign), replacing it with "..." The domain part remains unchanged.
 * @param {string} str 
 * @returns a string with a partially hidden email address
 */
function hideEmailAddress(emailAddress) {
    var name = emailAddress.substring(0, emailAddress.indexOf("@"));
    name = name.substring(0, name.length/2);
    name += "...";
    return name + emailAddress.substring(emailAddress.indexOf("@"));
}

function testHideEmailAddress() {
    log(hideEmailAddress("somerandomaddress@example.com"));
}
testHideEmailAddress();

//     9. Write a program that accepts a string as input and swaps the case of
//        each character. For example, if you input 'The Quick Brown Fox', the
//        output should be 'tHE qUICK bROWN fOX'. var UPPER =
//        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; var LOWER =
//        'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
function isUpperCase(str) {
    return str.toUpperCase() === str;
}

function swapCaseOfEachChar(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (isUpperCase(str[i])) {
            result.push(str[i].toLowerCase());
        } else {
            result.push(str[i].toUpperCase());
        }
    }
    return result.join("");
}
function testSwapCase() {
    log(swapCaseOfEachChar("The Quick Brown Fox"));
}
testSwapCase();