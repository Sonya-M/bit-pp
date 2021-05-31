/**
 * Converts milliseconds to hours, minutes and seconds. The remainder
 * milliseconds are discarded
 * @param {number} milliseconds 
 * @returns an array in the format [hours, mins, secs];
 */
 function millisToHrsMinsSecs(milliseconds) {
    var secs = (((milliseconds / 1000) % 60) % 60); // instead of using Math.floor,
     // leave the secs with decimals for greater precision
    var mins = Math.floor((milliseconds / 1000) / 60) % 60;
    var hrs = Math.floor(((milliseconds / 1000) / 60) / 60);
    return [hrs, mins, secs];
}

function promptForInput() {
    var input = prompt("Enter milliseconds:");
    if (input) {
        var result = millisToHrsMinsSecs(input);
        // result[2].toFixed(3) -->> with toFixed(2), converts 9999 millis to 10 secs
        document.getElementById("result").innerHTML = input + " milliseconds = "
            + result[0] + " hrs " + result[1] + " mins and " + result[2].toFixed(3)
            + " seconds";
    }

}