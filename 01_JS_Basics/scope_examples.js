"use strict"


/* **************** */
/* HOISTING EXAMPLE */
/* **************** */

console.log("Hoisting example..............");
var a = 123;

function f() {
    console.log(a); // prints out undefined
    var a = 1;
    console.log(a); // prints out 1
}

f();
console.log(a);
console.log("..............................");

/* **************** */
/* HOISTING EXAMPLE */
/* **************** */
console.log("Hoisting example2..............");
var global = 123;
function myFunct() {
    console.log(global); // 
    var global = 1;
    console.log(global);
}

/* You might expect that the first alert() function will display 123 (the value
of the global variable a) and the second will display 1 (the local variable a).
But, this is not the case. The first alert will show undefined. This is because,
inside the function, the local scope is more important than the global scope.
So, a local variable overwrites any global variable with the same name. At the
time of the first alert(), the a variable was not yet defined (hence the
undefined value), but it still existed in the local space due to the special
behavior called hoisting */

/* Variables declared with let are block-scoped. They exist only within the
current block. Variables declared with var are function scoped, as we saw
earlier.  */

var a = 1;
{
    let a = 2;
    console.log("a defined using let: " + a); // 2
}
console.log("a: " + a); // 1

// let example
function swap (a, b) {
    if (a > 0 && b > 0) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    console.log("a, b: ", a, b);
    // console.log(tmp); // ReferenceError: tmp is not defined
    return [a, b];
}
swap (1, 2);

console.log("###########################");
for (var i = 0; i < 3; i++) {
// empty
}
console.log(i);
for (let j = 0; j < 3; j++) {
    // empty
}
// console.log(j); // output: ReferenceError: j is not defined