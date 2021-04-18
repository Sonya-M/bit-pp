
//Scope, scope chain, closures
/* --------------------------- */

"use strict"

var a = 1;
function f() {
    var b = 1;
    return a;
}
console.log(f()); // 1
// console.log(b); // calling b would be a ReferenceError: b is not defined

/** Inside f(), both a and b are visible Outside f(), a is visible, but b is
not;
If you define an inner()function nested inside outer(), it will have access to
variables in its own scope, plus the scope of its parents. */

var global = 1;
function outer() {
    var outer_local = 2;
    function inner() {
        var inner_local = 3;
        return inner_local + outer_local + global;
    }
    return inner();
}

console.log(outer());

/** Breaking the chain with a closure
 * **********************************
 * 
 * First, an example:
 */

var a = "global var";
var F = function() {
    var b = "local var";
    var N = function () {
        var c = "inner local";
    };
};

/**
 * The closure effect happens when somehow N breaks out of F and ends up in
 * the global space: What happens then? N is in the same global space as a. 
 * And, as functions remember the environment in which they were defined, N will
 * still have access to the F space, and hence, can access b.
 * This is interesting, because N is where a is and yet N does have access to b,
 * but a doesn't.
 * 
 * how does N break the chain? By making itself global (omitting var) 
 * or by having F deliver (or return) it to the global space.
 */

/** fn same as before, only F returns N and also N returns b,
 * to which it has access via the scope chain:
 */

var a = "global var";
var F = function() {
    var b = "local var";
    var N = function() {
        
    }
}