//////////////////////////////////////////
// BASIC FUNCTIONS - MY IMPLEMENTATIONS //
//////////////////////////////////////////
function isInteger(a) {
    return a % 1 === 0
}

function round(n) {
    return intDivision(n + 0.5, 1);
}

function intDivision(n, m) {
    // n/m = d + r/m --->>> d = n/m - r/m = (n-r)/m
    return (n - (n % m)) / m;
}

// rounds n to 2 decimal places;
// CAVEAT: NOT THAT PRECISE - rounds 2.4999 to 2.5
function roundTo2DecPlaces(n) {
    n *= 100;
    n = round(n);
    return n/100;
}

// rounds n to dec decimal places
// CAVEAT: NOT THAT PRECISE - for arguments (2.4999, 3) returns 2.5
// YOU SHOULD RELLY USE Number.toPrecision(N_DECIMAL_PLACES);
// (1.2222222).toFixed(2) returns '1.22' AS A STRING, 
// so you'd need parseFloat() as well
function roundToNDecPlaces(n, dec) {
    var mul = 1;
    for (var i = 0; i < dec; i++) {
        mul *= 10;
    }
    n *= mul;
    n = round(n);
    return n/mul;
}

/**
 * @param {number} low 
 * @param {number} hi 
 * @returns a random integer in range [low, hi)
 */
 function randomInt(low, hi) {
    return Math.floor(Math.random() * (hi-low) + low);
}


////////////////////
// TEST FUNCTIONS //
////////////////////

function testRandomInt() {
    var lo = 1;
    var hi = 101;
    var nums = [];
    for (var i = 0; i < 100; i++) {
        nums.push(randomInt(lo, hi));
    }
    console.log("" + nums.sort(function (a, b) {
        return a - b;
    }));
}
testRandomInt();

function testRoundTo2DecPlaces() {
    var n = [3.4568734, 2.4999, 2.12345, 2.00, 2.01, 2.99];
    console.log("Testing roundTo2DecPlaces............")
    for (var i = 0; i < n.length; i++) {
        console.log(n[i] + " >>> " + roundTo2DecPlaces(n[i]));
    }
}

/**
     * Uses Knuth's shuffle algorithm to shuffle the array (uses O(n)) 
     * source: Princeton's Algorithms course
     *   In iteration i, pick integer r between 0 and i uniformly at random.
     *   swap a[i] and a[r].
     * @param {Array} array 
     * @returns a new array with randomly shuffled entries
     */
 function shuffle(array) {
    var shuffled = [...array]; // only use for 1-d arrays!
    // console.log(shuffled);
    for (var i = 0; i < array.length; i++) {
        var randIndex = randomInt(0, i + 1);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        [shuffled[i], shuffled[randIndex]] = [shuffled[randIndex], shuffled[i]];
    }
    return shuffled;
}


function testRoundToNDecPlaces() {
    var n = [3.4568734, 2.4999, 2.12345, 2.00, 2.01, 2.99];
    var dec = [0, 1, 2, 3, 4, 5];
    console.log("Testing roundToNDecPlaces.............");
    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < dec.length; j++) {
            console.log(n[i] + " rounded to " + dec[j] 
            + " decimal places >>> " + roundToNDecPlaces(n[i], dec[j]));
        }
    }
}

function testIsInteger() {
    for (i = 0; i < 10; i+= .5) {
        if (isInteger(i)) {
            console.log(i + " is an integer");
        } else {
            console.log(i + " is not an integer")
        }
    }
}

function testIntDivision() {
    var ns = [3, 4, 5, 6, 7];
    var m = 2;
    for (var i = 0; i < ns.length; i++) {
        console.log(ns[i] + " / " + m + " using integer division....");
        console.log(intDivision(ns[i], m));
    }
}

function testRound() {
    var nums = [2.3456, 3.5, 3.55, 3.45, 3, 2.99, 2.01, 2.1, 1, 0];
    for (var i = 0; i < nums.length; i++) {
        console.log("Rounding " + nums[i] + "...");
        console.log(round(nums[i]));
    }
}


// testRoundTo2DecPlaces();
// testRoundToNDecPlaces();
// testIsInteger();
// testIntDivision();
// testRound();