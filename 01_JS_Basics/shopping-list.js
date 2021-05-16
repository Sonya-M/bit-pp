// In your IDE of choice, create a new JavaScript file named shopping.js and
// make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main
// execution of all program calls. Writing a simple command console.log(“Hi”)
// inside this function and running the code should output “Hi“ in the console.

// Create constructor functions with properties representing the following
//     “things”: • Product - product id (random number of 5 digits generated on
//     every product creation), name, price (with 2 decimal places), expiration
//     date • ShoppingBag - a list of products (initially empty; function
//     constructor does not have any input parameters)

// Add getInfo method to Product. It should return a formatted string containing
// product code (the first and last letter of the name together with the product
// id), name and price. "Banana" -> BA32784, Banana, 129.31
 
// Add addProduct method to ShoppingBag. It should receive a Product and add it
// to the product list. You can add a product to the list only if it has a valid
// expiration date.  

// Add a method to ShoppingBag that calculates the average product price of
// products in your product list and prints out this value with the precision of
// three decimals. 

// Add getMostExpensive method that finds the most expensive product and prints
// out its info.

// Add calculateTotalPrice method to ShoppingBag that calculates the total price
// of products in the shopping bag list. 

// Create a constructor function with properties representing the following:

//     • PaymentCard - account balance (number with 2 decimal places), active or
//     inactive status, valid until date  

// Create checkoutAndBuy function which receives shopping bag and payment card
// and prints if the purchase is successful or not. Purchase is successful only
// if the amount on the card is greater or equal to the total price of products
// in the shopping bag. If there is not enough money, print out the amount that
// is missing to complete the purchase.


(function() {

    "use strict";

    function log(str) {
        console.log(str);
    }

    /**
     * 
     * @param {String} name 
     * @param {Number} price 
     * @param {MyDate} expDate 
     */
    function Product (name, price, expDate){
        this.name = name;
        this.price = price;
        this.expDate = expDate;
        this.id = generateId ();
        this.getID = function (){
            return this.id;
        }
        this.getInfo = function() {
            var str = "";
            str += this.name[0].toUpperCase() + this.name [name.length -1].toUpperCase();
            str += this.id;
            str += ", " + this.name + ", " + this.price;
            return str;
        }
    }
    function generateId() {
        return Math.floor(Math.random() * 100000); 
    }

    /**
     * ShoppingBag constructor, takes no args
     */
    function ShoppingBag() {
        this.products = [];
        /**
         * @param {Product} product 
         */
        this.addProduct = function(product){
            var d = new Date();
            if(!expired(new MyDate(d.getDate(), d.getMonth(), d.getFullYear()), product.expDate)){
                this.products.push(product);
            }
        }
        /**
         * @returns The average price of Products in this ShoppingBag
         */
        this.avgPrice = function() {
            var sum = 0;
            for(var i = 0; i < this.products.length; i++){
                sum += this.products[i].price;
                
            } 
            return sum / this.products.length;
        }
        /**
         * @returns The most expensive Product in this ShoppingBag,
         * or null if the bag is empty
         */
        this.getMostExpensive = function() {
            var max = -Infinity; // max price found so far
            var mostExpensive = null; // Product with current max price
            for(var i = 0; i < this.products.length; i++){
                if(this.products[i].price > max){
                    max = this.products[i].price;
                    mostExpensive = this.products[i];
                }

            }
            return mostExpensive;
        }
        /**
         * @returns The total price of all Products in this ShoppingBag
         */
        this.calculateTotalPrice = function() {
            var sum = 0;
            for (var i = 0; i < this.products.length; i++) {
                sum += this.products[i].price;
            }
            return sum;
        }
    }
    /**
     * 
     * @param {Number} day 
     * @param {Number} month 
     * @param {Number} year 
     */
    function MyDate(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.toString = function() {
            return this.day + "." + this.month +"." + this.year;
        }
        /**
         * 
         * @param {MyDate} date2 
         * @returns true if this MyDate has the same values as date2
         */
        this.equals = function (date2) {
            return this.year === date2.year && this.month === date2.month
                    && this.day === date2.day;
        }

        /**
         * @param {MyDate} date2 
         * @returns 0 if this date is equal to date2, a negative number if this
         * date is less than date2, a positive number if this date is greater
         * than date2
         */
        this.compareTo = function (date2) {
            return ((this.year - date2.year) * 1000 
                        + (this.month - date2.month) * 100
                            + (this.day - date2.day));
        }
    }
    /**
     * 
     * @param {MyDate} currentDate 
     * @param {MyDate} expirationDate 
     * @returns true if currentDate is less than expirationDate,
     * false otherwise
     */
    function expired(currentDate, expirationDate){
        // if(currentDate.year > expirationDate.year){
        //     return true;
        // } else if(currentDate.month > expirationDate.month && currentDate.year === expirationDate.year){
        //     return true;
        // } else if(currentDate.day > expirationDate.day && currentDate.year === expirationDate.year && currentDate.month === expirationDate.month){
        //     return true;
        // } else return false;
        return currentDate.compareTo(expirationDate) > 0;
    }

    /**
     * 
     * @returns a MyDate object whose value is the current date
     */
    function getToday() {
        var d = new Date();
        // NB: Date.prototype.getMonth(): Returns the month (0–11) in the 
        // specified date according to local time.
        return (new MyDate(d.getDate(), d.getMonth()+1, d.getFullYear()));
    }

    /**
     * 
     * @param {Number} balance 
     * @param {boolean} active 
     * @param {MyDate} validThru 
     */
    function PaymentCard(balance, validThru, active=true) {
        this.validThru = validThru;
        this.balance = balance;
        this.hasExpired = function() {
            return (getToday().compareTo(this.validThru) > 0);
        }
        this.hasExpired() ? this.active = false : this.active = active;

    }

    /**
     * Purchase is successful only if the amount on the card is greater or
     * equal to the total price of products in the shopping bag. If there is 
     * not enough money, print out the amount that is missing to complete the 
     * purchase
     * @param {ShoppingBag} bag 
     * @param {PaymentCard} card 
     * @returns a string containing a payment report. 
     */
    function checkoutAndBuy(bag, card) {
        var paymentReport = "";
        var total = bag.calculateTotalPrice();
        if (!card.active) {
            paymentReport += "Purchase failed - card inactive!";
        } else if (card.balance >= bag.calculateTotalPrice()) {
            paymentReport += "Purchase successful!"
        } else {
            paymentReport += "Purchase failed - not enough funds. Amount missing: " + (total - card.balance);
        }
        return paymentReport;
    }

    function test() {
        //console.log(generateId());
        var prod1 = new Product('banana', 100, new MyDate(15, 5, 2021));
        var prod2 = new Product('milk', 120, new MyDate(2, 6, 2021));
        log(prod1);
        log(prod1.getInfo());
        log(prod2);
        log(prod2.getInfo());

        // test expired()
        log("Testing expired()............................")
        var date1 = new MyDate(13, 5, 2021);
        var date2 = new MyDate(13, 5, 2021); // test on equal date
        var date3 = new MyDate(14, 5, 2021); // test on day after
        var date4 = new MyDate(12, 5, 2021); // test on day before
        var date5 = new MyDate(13, 6, 2021); // test on month after
        var date6 = new MyDate(13, 4, 2021); // test on month before
        var date7 = new MyDate(13, 5, 2020); // test on year before
        var date8 = new MyDate(13, 5, 2022); // test on year after
        log(expired(date1, date2) + " expecting FALSE");
        log(expired(date1, date3) + " expecting FALSE");
        log(expired(date1, date4) + " expecting TRUE");
        log(expired(date1, date5) + " expecting FALSE");
        log(expired(date1, date6) + " expecting TRUE");
        log(expired(date1, date7) + " expecting TRUE");
        log(expired(date1, date8) + " expecting FALSE");
        log("...............................................")
        

        //console.log(expired(date1, date3));
        var shoppingBag = new ShoppingBag();
        shoppingBag.addProduct(prod2);
        shoppingBag.addProduct(prod1);
        log(shoppingBag);
        log("...............................................")
        log("Average price: " + shoppingBag.avgPrice());
        log("...............................................")
        log("Most expensive: " + shoppingBag.getMostExpensive().getInfo());
        log("...............................................")
        log("Total price: " + shoppingBag.calculateTotalPrice());
        log("...............................................")

        // test PaymentCard and checoutAndBuy
        var expDate1 = new MyDate(20, 10, 2022);
        var today = getToday();
        var balance1 = 250;
        var card1 = new PaymentCard(balance1, expDate1);
        log(card1);
        var expDate2 = new MyDate(10, 3, 2021);
        var balance2 = 500;
        var card2 = new PaymentCard(balance2, expDate2, true);
        log("Purchasing with valid card..........");
        log("total in bag: " + shoppingBag.calculateTotalPrice());
        log(checkoutAndBuy(shoppingBag, card1));
        log("Purchasing with invalid card...........");
        log(checkoutAndBuy(shoppingBag, card2));
        log("Purchasing without enough funds........");


       

    };
    
    function testMyDate() {
        var date1 = new MyDate(13, 5, 2021);
            var date2 = new MyDate(13, 5, 2021); // test on equal date
            var date3 = new MyDate(14, 5, 2021); // test on day after
            var date4 = new MyDate(12, 5, 2021); // test on day before
            var date5 = new MyDate(13, 6, 2021); // test on month after
            var date6 = new MyDate(13, 4, 2021); // test on month before
            var date7 = new MyDate(13, 5, 2020); // test on year before
            var date8 = new MyDate(13, 5, 2022); // test on year after
        log("Checking MyDate.equals().......................");
        log(date1.equals(date2));
        log("................................................");
        log("Checking MyDate.compareTo(date2.................");
        log("Comparing " + date1 + " to....");
        log(date2 + ": " + date1.compareTo(date2));
        log(date3 + ": " + date1.compareTo(date3));
        log(date4 + ": " + date1.compareTo(date4));
        log(date5 + ": " + date1.compareTo(date5));
        log(date6 + ": " + date1.compareTo(date6));
        log(date7 + ": " + date1.compareTo(date7));
        log(date8 + ": " + date1.compareTo(date8));
    }
    
    function testGetToday() {
        var today = getToday();
        log(today);
        log(today.toString());
        
    }
    
    function testPayment() {
        log("Testing PaymentCard and checkoutAndBuy.............");
        var expDate1 = new MyDate(20, 10, 2022);
        log("expDate: " + expDate1);
        var today = getToday();
        log("today: " + today);
        var balance1 = 250;
        var card = new PaymentCard(balance1, expDate1);
        log(card);
        log(card.hasExpired());

        log("Creating expired payment card......................");
        var expDate2 = new MyDate(10, 3, 2021);
        log("expDate: " + expDate2);
        var balance2 = 500;
        var card2 = new PaymentCard(balance2, expDate2, true);
        log(card2);
        log(card2.hasExpired());
    }
    
    test();
    // testMyDate();
    // testGetToday();
    //testPayment();



})()

