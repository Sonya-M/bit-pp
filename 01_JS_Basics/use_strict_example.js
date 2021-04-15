// "use strict"

function test (a, a) {
    return a+1;
}

//without strict mode, the second arg overwrites the value of `a`
// use strict does not allow this
console.log(test(1, 3)); // output without strict mode: 4; 
// strict mode throws an error

// strict mode requires that function parameter names be unique. In normal code the 
// last duplicated argument hides previous identically-named arguments. Those 
// previous arguments remain available through arguments[i], so they're not
// completely inaccessible. Still, this hiding makes little sense and is probably
// undesirable (it might hide a typo, for example), so in strict mode duplicate 
// argument names are a syntax error:

// function sum(a, a, c) { // !!! syntax error
//   'use strict';
//   return a + a + c; // wrong if this code ran
// }