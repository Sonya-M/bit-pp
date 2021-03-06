console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 1:\nWrite a conditional statement to find the sign of product of three numbers. \nDisplay the result in the console with the specified sign.\n");

var x = 3;
var y = 5;
var z = -14;
var product = x * y * z;
var message = "The product of numbers " + Number(x) + ", " +
                Number(y) + "," + " and " + Number(z) + " is " + 
                product + " and its sign is ";
if (product < 0) {
    message += "-."
} else {
    message += "+."
}
console.log(message);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 2:\nWrite a conditional statement to find the largest of five numbers.\nDisplay the result inconsole.\n")

//using if clauses:
function largestUsingIfCls(a, b, c, d, f){
    let largest;
    if (a > b && a > c && a > d && a > f) largest = a;
    else if (b > c && b > d && b > f) largest = b;
    else if (c > d && c > f) largest = c;
    else if (c > f) largest = d;
    else largest = f;
    return largest;
}

// A more efficient way using only IF statements
function largestEfficient(a, b, c, d, e) {
    a = max;
    if (b > max) max = b;
    if (c > max) max = c;
    if (d > max) max = d;
    if (e > max) max = e;
    return max;
}

let args = [1, 3, 35, 6, 55];
console.log("Input: [" + args + "]");
console.log("Largest (using only IF clauses): " + largestUsingIfCls(1, 3, 35, 6, 55));

//using a for loop:
function largestUsingForLoop(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}
console.log("Largest (using a FOR loop): " + largestUsingForLoop(args));

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 3:\nWrite a conditional statement to sort three numbers.\n")

//Solution without a for loop:
let a = 3, b = 2, c = 1;
let sorted;
if (a < b && a < c) {
    if (c > b) {
        sorted = [a, b, c];
    } else {
        sorted = [a, c, b];
    }
} else if (b < a && b < c) {
    if (c > a) {
        sorted = [b, a, c];
    } else {
        sorted = [b, c, a];
    }
} else {
    if (b > a) {
        sorted = [c, a, b];
    } else {
        sorted = [c, b, a];
    }
}
console.log("a = 3, b = 2, c = 1; SORTED: " + sorted);


//Solution with 2 for loops:
let n = [3, 1, 2, 6, 8, 0];
for (let i = 0; i < n.length; i++) {
    for (let j = i+1; j < n.length; j++) {
        if (n[j] < n[i]) {
            let tmp = n[j];
            n[j] = n[i];
            n[i] = tmp;
        }
    }
}
console.log("[3, 1, 2, 6, 8, 0] SORTED: " + n);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 4:\nWrite a program to check if the variable is a number.\nIf it’s a number, check if it is divisible by 2.\nIf it is, print the result, if not, show “X”\n")

let arr = [5, "some string", true, 4];
console.log("Input: [" + arr + "]");
for (let i = 0; i < arr.length; i++){
    let next = arr[i];
    if (typeof next == "number") {
        if (next % 2 == 0) {
            console.log("The number " + next + " is divisible by 2")
        } else {
            console.log("The number " + next + " is not divisible by 2.")
        }
    } else {
        console.log("X"); // the variable is not a number
    }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 5:\nWrite a program that compares two numbers and displays the larger.\nDisplay the result in the console.\n")

var p = 3, q = 6;
var output = "The larger number is ";
p > q ? output += p : output += q;
console.log("Input: var p = 3, q = 6;")
console.log(output);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 6:\nWrite a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.\nFormula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]\n")

function FtoC(tempInF) {
    return (tempInF - 32) * (5 / 9);
}
function CtoF(tempInC) {
    return (9 * tempInC / 5) + 32;
}

var tempInC = 60;
var tempInF = 32;
console.log(tempInC + "°C is " + CtoF(tempInC) + "°F.") 
console.log(tempInF + "°F is " + FtoC(tempInF) + "°C.")

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 7:\nWrite a JavaScript program to get the difference between a given number and 13,\nif the number is greater than 13 return double difference between that number and 13.\n")

function task7(n) {
    if (n > 13) {
        return (n - 13) * 2;
    } else {
        return (13 - n);
    }
}
let sample = [11, 32, -1, 0, 13];
for (let i = 0; i < sample.length; i++) {
    console.log("Task 7 output for number " + sample[i] + " is " + task7(sample[i]));
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 8:\nWrite a JavaScript program to compute the sum of the two given integers.\nIf the two values are same, then returns triple their sum.\n");

function task8(n, m) {
    if (n === m) {
        return 3 * (n + m);
    } else {
        return n + m;
    }
}

let inp = [[12, 5], [8, 8], [0, 7], [2, 2]];
for (let i = 0; i < inp.length; i++) {
    let num1 = inp[i][0];
    let num2 = inp[i][1];
    console.log("Task 8 output for nubbers " + num1 + " and " + num2 +": " + task8(num1, num2));
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 9:\nWrite a JavaScript program to check two given numbers and print “true”\nif one of the number is 50 or if their sum is 50.\n");

function task9(n1, n2) {
    if (n1 === 50 || n2 === 50 || (n1 + n2) === 50) {
        return "true";
    } else {
        return "-";
    }
}
let sampleIn = [[5, 54], [6, 50], [40, 10], [50, 2]];
for (let i = 0; i < sampleIn.length; i++) {
    let num1 = sampleIn[i][0];
    let num2 = sampleIn[i][1];
    console.log("Task 9 output for numbers " + num1 + " and " + num2 + ": " + task9(num1, num2));
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("TASK 10:\nWrite a JavaScript program to check a given integer is within 20 of 100 or 400,\nand print range in which number belongs.\nSample Input: 13			Sample Input: 34			Sample Input: 256\nOutput : -			        Output : 20 ⇔ 100		   Output : 100 ⇔ 400 \n");

// Ne znam da li sam dobro razumela ovaj zadatak... 
// Po outputu bih rekla da treba da proverimo da li je broj
// u rasponu [20, 100] ili [100, 400]. Ali onda imamo preklapanje
// kod broja 100 - to sam tretirala kao specijalni slučaj :)
function task10(n) {
    if (n >= 20 && n < 100) {
        console.log(n + ":" + 20 + "⇔" + 100);
    } else  if (n == 100) {
        console.log(n + ":" + 20 + "⇔" + 100 + "; " + 100 + "⇔" + 400);
    } else if (n > 100 && n <= 400) {
        console.log(n + ":" + 100 + "⇔" + 400);
    } else {
        console.log("-");
    }
}
let randomNums = [13, 34, 256, 100, 0];
console.log("Input: [13, 34, 256, 100, 0]")
for (let i = 0; i < randomNums.length; i++) {
    task10(randomNums[i]);
}