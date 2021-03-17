var sum = 0;
console.log("Sum of a sequence [1, 100] should be n * (1 + n) / 2, \n" +
"where n is the number of terms and also the last term in sequence, which equals " 
    + (100 * (1 + 100) / 2));
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
var result = (100/2 * (1 + 99)/2);
var sum2 = 0;
console.log("What if you increment by 2 at each step?\n" +
"E. g. the sum of the sequence 1, 3, 5, 7... 99\n"+
"nTerms/step * (firstTerm + lastTerm) / 2.\n" +
"Basically, multiply the avg of terms ((firstTerm + lastTerm) / 2) " + 
"by the number of terms\n" +
"So in this example, that would be: 100/2 * (1 + 99)/2\n" +
"which is equal to " + result);
for (var i = 1; i <= 100; i += 2) {
    sum2 += i;
}
console.log("The moment of truth....\n"+
"The result is " + sum2);

// for-in loop