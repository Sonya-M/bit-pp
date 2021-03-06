// If the variable age stores the information about user’s age, how we can check
// whether it contains a correct value? Write expressions for checking:
// • Is age negative value
// • Is age greater than 120 

function isValidAge(age) {
    return (age >= 0 && age <= 120)
}

var values = [21, -1, 121, 0, 120];

for (i = 0; i < values.length; i++) {
    age = values[i];
    if (isValidAge(values[i])) {
        console.log(age + " is a valid age value.")
    } else {
        console.log(age + " is not a valid age value.")
    }
}

