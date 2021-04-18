"use strict"

// vbfc      Solutions -
// https://www.teaching-materials.org/javascript/exercises/functions 

// 1. Why pay a fortune teller when you can just program your fortune yourself?
//    Write a function named tellFortune that: • takes 4 arguments: number of
//    children, partner's name, geographic location, job title. • outputs your
//    fortune to the screen like so: "You will be a X in Y, and married to Z
//    with N kids." Call that function 3 times with 3 different values for the
//    arguments.

console.log("############################");
console.log("##### Fortune teller #######");

(function fortuneTelling() {

    function tellFortune(nChildren, partnerName, location, jobTitle) {
        var fortune = "You will be " + getIndefiniteArticle(jobTitle) 
            +  " " + jobTitle + " in " + location + " and married to " 
            + partnerName  + " with " + nChildren;
        (nChildren === 1) ? fortune +=" kid." : fortune += " kids.";
        return fortune;
    }

    function getIndefiniteArticle(nextWord) {
        if (isVowel (nextWord[0])) return "an";
        else return "a";
    }
   
    function isVowel(char) {
        var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        for (var i = 0; i < vowels.length; i++) {
            if (char === vowels[i]) return true;
        }
        return false;
    }

    function testFortune() {
        var input = [
            [3, "John", "New York", "doctor"],
            [2, "Elizabeth", "Belgrade", "accountant"],
            [1, "Ben", "Berlin", "office clerk"],
            [0, "Mary", "Dublin", "teacher"]
        ];

        for (var i = 0; i < input.length; i++) {
            console.log(tellFortune(input[i][0], input[i][1], input[i][2], input[i][3]))
        }
    }

    testFortune();
})();


console.log("############################");
console.log("##### Dog Age #######");
// 2. You know how old your dog is in human years, but what about dog years?
//    Calculate it!

// Write a function named calculateDogAge that: • takes 1 argument: your puppy's
// age. • calculates your dog's age based on the conversion rate of 1 human year
// to 7 dog years. • outputs the result to the screen like so: "Your doggie is
// NN years old in dog years!" Call the function three times with different sets
// of values.

// Bonus: Add an additional argument to the function that takes the conversion
// rate of human to dog years.

(function exercise2() {

    function calculateDogAge(dogAgeInHumanYears, conversionRate) {
        var rate = conversionRate || 7;
        var dogAge = dogAgeInHumanYears * rate;
        return ("If one dog year is " + rate  
            + " human years, your doggie (aged " + dogAgeInHumanYears 
            + " in human years) is " + dogAge + " years old in dog years"); 
    }

    console.log(calculateDogAge(4));
    console.log(calculateDogAge(4, 5));

})();

console.log("############################");
console.log("##### Calculate supply #####");
// 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder
//    no more! Write a function named calculateSupply that: • takes 2 arguments:
//    age, amount per day. • calculates the amount consumed for rest of the life
//    (based on a constant max age). • outputs the result to the screen like so:
//    "You will need NN to last you until the ripe old age of X" Call that
//    function three times, passing in different values each time.

// Bonus: Accept floating point values for amount per day, and round the result
// to a round number.

(function exercise3() {

    var MAX_AGE = 80;

    function round(n) {
        return intDivision(n + 0.5, 1);
    }
    
    function intDivision(n, m) {
        // n/m = d + r/m --->>> d = n/m - r/m = (n-r)/m
        return (n - (n % m)) / m;
    }

    function isInteger(a) {
        return a % 1 === 0
    }
    

    function calculateSupply(age, amountPerDay) {
        var yearsLeft = MAX_AGE - age;
        var amount = amountPerDay * 365 * yearsLeft;
        amount = round(amount); // should round the number
        var result = "";
        result += "You will need ";
        (isInteger(amountPerDay) 
            ? result += "exactly " 
            : result += "approximately ");
        result +=  amount + " to last you until the ripe old" 
                   + " age of " + MAX_AGE;
        return result;
    }

    function testCalculateSupply() {
        var age = [79, 80, 20, 42];
        var amount = [1, 1.1, 2.5];
        for (var i = 0; i < age.length; i++) {
            for (var j = 0; j < amount.length; j++) {
                console.log("If you are " + age[i] 
                + " years old and you consume " + amount[j] + " daily...");
                console.log(calculateSupply(age[i], amount[j]));
            }
        }
    }

    testCalculateSupply();

})();

console.log("############################");
console.log("##### C° <-> F° #####");
// 4. It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit: • Store a celsius temperature
// into a variable. • Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius: • Now store a fahrenheit
// temperature into a variable. • Convert it to celsius and output "NN°F is
// NN°C."

(function exercise4() {

    function celsiusToFahrenheit(C) {
        return (C * 9/5) + 32;
    }

    function fahrenheitToCelsius(F) {
        return (F - 32) * 5/9;
    }

    function testTempConversionFns() {
        var temps = [-20, -10, 0, 10, 20, 30, 100]
        for (var i = 0; i < temps.length; i++) {
            var F = celsiusToFahrenheit(temps[i]);
            console.log(temps[i] + "C° -> " + F + "F°");
            console.log(F + "F° -> " + fahrenheitToCelsius(F) + "C°");
        }
    }

    testTempConversionFns();

})();

