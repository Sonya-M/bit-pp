"use strict"

//     8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times" 'aa bb cc dd aa',
// 'aa' -> "'aa' was found 2 times"

function endOfWord(char) {
    var endChars = " .!?,;:";
    for (var i = 0; i < endChars.length; i++) {
        if (char === endChars[i]) return true;
    }
    return false;
}

function findWord (str, word) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (endOfWord(str[i])) {
            continue;
        }
        var nextWord = "";
        for (var j = i; j < i + word.length; j++) {
            nextWord += str[j];
        }
        if (nextWord === word) {
            count++;
            i += word.length;
        }
    }
    return count;
}

console.log(findWord('The quick brown fox', 'fox'));
console.log(findWord('aa bb cc dd aa','aa'));
console.log(findWord('aa bb cc dd...  dd!!? dd,  aa','dd'));
