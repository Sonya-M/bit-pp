function test1 () {
    try {
        return 1;
    } catch (e) {
        console.log("Error!");
        return 1;
    } finally {
        console.log("Hello!");
    }
}

console.log(test1());
// output:
// Hello!
// 1  // so it DOES return 1, but before it returns, the statements in the
//`finally` block are executed

function testVariableLocality() {
    try {
        var a = "a"; //OK
        // let a = "a"; // ReferenceError
    } catch (e) {
        // never reached
    } finally {
        console.log("Let's see if I can see the variable a..." + a);
    }
}

testVariableLocality();