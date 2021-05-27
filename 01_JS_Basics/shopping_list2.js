// A simplified version of shopping_list.js

(function () {
    "use strict"

    function MyDate(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    /**
     * @param {number} low 
     * @param {number} hi 
     * @returns a random integer in range [low, hi], both inclusive
     */
    function randomInt(low, hi) {
        return Math.floor(Math.random() * hi) + low;
    }

    function generateProdID() {
        return randomInt(10000, 99999);
    }

    /**
     * 
     * @param {MyDate} date1 
     * @param {MyDate} date2 
     * @returns a positive number if date1 > date2, 0 if date1 == date2,
     * negative number if date1 < date2
     */
    function dateComparator(date1, date2) {
        if (date1.year !== date2.year) return date1.year - date2.year;
        else if (date1.month !== date2.month) return date1.month - date2.month;
        return date1.day - date2.day;
    }

    /**
     * @param {string} name 
     * @param {number} price 
     * @param {MyDate} expirationDate 
     * @param {number} id 
     */
    function Product(name, price, expirationDate, id) {
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.id = id;
        this.getInfo = function () {
            var info = "";
            info += this.name[0].toUpperCase()
                + this.name[this.name.length - 1].toUpperCase() + this.id + ", ";
            info += this.name + ", ";
            info += this.price;
            return info;
        }
    }
    
    function ShoppingBag() {
        this.products = [];
        this.addProduct = function (prod) {
            if (!expired(prod.expirationDate)) {
                this.products.push(prod);
            }
            // this.products[length] = prod;
        }
        this.avgPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.products.length; i++) {
                sum += this.products[i].price;
            }
            return sum / this.products.length;
        }
        this.getMostExpensive = function () {
            var mostExpensive;
            var max = -Infinity;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].price > max) {
                    max = this.products[i].price;
                    mostExpensive = this.products[i];
                }
            }
            return mostExpensive;
        }
        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.products.length; i++) {
                sum += this.products[i].price;
            }
            return sum;
        }
    }

    /**
     * 
     * @param {number} balance 
     * @param {boolean} status 
     * @param {MyDate} exp 
     */
    function PaymentCard(balance, status, exp) {
        this.balance = balance;
        this.status = status;
        this.exp = exp;
        this.checkStatus = function () {
            if (expired(exp)) {
                this.status = false;
            }
        }
    }

    /**
     * 
     * @param {MyDate} expirationDate 
     * @returns true if product has expired, false otherwise
     */
    function expired(expirationDate) {
        var today = new MyDate(2021, 5, 26);
        // var expDate = prod.expirationDate;
        return dateComparator(today, expirationDate) > 0;
    }

    var date1 = new MyDate(2022, 12, 1);
    var date2 = new MyDate(2012, 12, 1);
    var prod1 = new Product("banana", 120,
        new MyDate(2021, 5, 28), generateProdID());
    console.log(prod1);
    var prod2 = new Product("apple", 100, new MyDate(2021, 5, 27), generateProdID());
    console.log(dateComparator(date1, date2));
    console.log(dateComparator(date2, date1));
    console.log(dateComparator(date1, date1));
    var prod3 = new Product("milk", 50, new MyDate(2021, 5, 24), generateProdID());
    var prod4 = new Product("milk", 500, new MyDate(2021, 5, 31), generateProdID());


    // for (var i = 0; i < 10; i++) {
    //     console.log(generateRandom());
    // }
    
    /**
     * 
     * @param {ShoppingBag} bag 
     * @param {PaymentCard} card 
     */
    function checkoutAndBuy(bag, card) {
        var total = bag.calculateTotalPrice();
        var balance = card.balance;
        if (expired(card.exp)) {
            console.log("Purchase failed - card expired!");
        } else if (balance >= total) {
            console.log("Purchase successful!");
        } else {
            var missing = total - balance;
            console.log("Not enough funds! Missing amount: " + missing);
        }
    }

    var bag1 = new ShoppingBag();
    bag1.addProduct(prod1);
    bag1.addProduct(prod2);
    console.log(bag1);
    console.log(prod1.getInfo());

    console.log(expired(prod1.expirationDate));
    console.log(expired(prod3.expirationDate));

    bag1.addProduct(prod3);
    bag1.addProduct(prod4);
    console.log(bag1);
    console.log(bag1.avgPrice());
    console.log(bag1.getMostExpensive());
    console.log(bag1.calculateTotalPrice());

    var card1 = new PaymentCard(1000, true, new MyDate(2022, 5, 20));
    console.log(card1);
    var card2 = new PaymentCard(100, true, new MyDate(2022, 5, 20));
    var card3 = new PaymentCard(1000, true, new MyDate(2021, 5, 22));


    checkoutAndBuy(bag1, card1);
    checkoutAndBuy(bag1, card2);
    checkoutAndBuy(bag1, card3);


    var a = [];
    for (var i = 0; i < 100; i++) {
        a.push(randomInt(1, 100));
    }
    console.log(a.sort(function (a, b) {
        return a - b;
    }));

})();














