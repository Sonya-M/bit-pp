/** TRICK QUESTIONS */

function Q0() {
    var done = false;
    while (done = false) {
        // code
    }
}

function Q1() {
    var x = -2;
    if (x > 0);
        console.log("positive");
}

// THE FIBONACCI SEQUENCE!!!
function Q2() {
    var f = 0, g = 1;
    for (var i = 0; i <= 15; i++) {
        console.log(f);
        f = f + g;
        g = f - g;
    }
}

// Q2();

// !!!!
function Q3() {
    var result = sum(5);
    console.log(result);

    
    function sum (n1, n2) {
        n1 = n1 || 0; // ta tehnika se koristi kada neki od parametara ostane 
        // undefined zato što smo pozvali funkciju bez tog argumenta
        n2 = n2 || 0;
        return n1 + n2;
    }

    return n1 + n2;

    
}

function fn(param1, param2) {
    var default_val_for_param1 = 1;
    var default_val_for_param2 = 2;
    p1 = param1 || default_val_for_param1;
    p2 = param2 || default_val_for_param2;
    //...
    /** This works thanks to lazy evaluation - the expression to the right of
     * the assignment operator is evaluated first, returning the val of param1
     * if param1 is given, or falling back to default_val_for_param1
     * HOWEVER, if you pass the fn (0, 0), the two params would be assigned
     * the default values (here 1 and 2), since 0 is falsy, and the assignment
     * expression relies on boolean evaluation
     */
}

function sum(num1, num2) {
    num1 = num1 || 0; 
    num2 = num2 || 0;
 
    if (!num1 && !num2) {
        return -1;
    }
 
    return num1 + num2;
 }
 
 var sumNumbers = sum;
 var result = sumNumbers();
 
 console.log(result); // -1
