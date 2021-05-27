// Bookmaker’s

// In your IDE of choice, create a new JavaScript file named booking-house.js
// and make it so that all code written in the file follows JS strict mode.

// Create an anonymous immediately-invoking function that will hold main
// execution of all program calls. Make sure that functions that you write in
// this function are pure functions.

// Create constructor functions with properties representing the following: •
//     Country - name, odds, CONTINENT (EU, AS, AF, SA, NA, AU) • Person - name,
//     surname, date of birth • Player - person, bet amount, country (instance
//     of Country) • Address - country, city, postal code, street and number •
//     BettingPlace - address and list of players (initially empty) •
//     BettingHouse - competition, list of betting places (initially empty) and
//     number of players

// Create CONTINENTs as constants (objects that can not change). So, when
// passing a CONTINENT as a parameter, you should pass CONTINENT.ASIA.

// Add a method to Person that returns a formatted string containing the name,
// surname and date of birth of the person (date of birth in dd.mm.yy format).

// Add a method to Address that returns a formatted string like the following
//  one: Nemanjina 4, 11000 Beograd, SR

// Add a method to Player that returns a formatted string containing a country,
// expected win amount (odds * bet amount) and person data. SR, 1050.00 eur,
// Pera Peric, 29 years

// Add a method to BettingPlace that returns a formatted string containing a
// street (without a number), postal code and city, and sum of all bet amounts
// of that place. Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

// Add a method to BettingPlace that adds a player to the players list of a
// betting place. 

// Inside your immediately-invoking function, add a function that returns a
// created Player.

// Inside your immediately-invoking function, add a function that creates a
// BettingPlace.

// Create an instance of the BettingHouse that receives the name of competition.

// Create four players with random data. Create two betting places. Add created
// players as you wish to Betting places. Add betting places to the betting
// house.

// Display all betting house data in the following manner:

// Football World Cup Winner, 2 betting places, 4 bets Nemanjina, 11000
//  Belgrade, sum of all bets: 2100eur SR, 1050.00 eur, Pera Peric, 29 years SR,
//  1050.00 eur, Pera Peric, 29 years Nemanjina, 11000 Belgrade, sum of all
//  bets: 2100eur GR, 1050.00 eur, Pera Peric, 29 years SR, 1050.00 eur, Pera
//  Peric, 29 years There are 3 bets on Serbia

(function() {
    "use strict";
    
    /**
     * Create CONTINENTs as constants (objects that can not change). So, when 
     * passing a CONTINENT as a parameter, you should pass CONTINENT.ASIA.
     */
    const CONTINENT = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"

    });
// Math.PI;
    /**
     * 
     * @param {string} name 
     * @param {number} odds 
     * @param {string} CONTINENT
     */
    function Country(name, odds, CONTINENT) {
        this.name = name;
        this.odds = odds;
        this.CONTINENT = CONTINENT;
    }

    /**
     * Date constructor
     * @param {number} day 
     * @param {number} month 
     * @param {number} year 
     */
    function Date(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.toString = function() {
            return this.day + "." + this.month +"." + this.year;
        }
    }
    /**
     * @param {string} name 
     * @param {string} surname 
     * @param {Date} birth 
     */
    function Person(name, surname, birth) {
        this.name = name;
        this.surname = surname;
        this.birth = birth;
        /**
         * Add a method to Person that returns a formatted string containing the
         * name, surname and date of birth of the person (date of birth in 
         * dd.mm.yy format).
         * @returns A string containing the name, surname and date of birth of
         * this person (date of birth in dd.mm.yy format).
         */
        this.toStringComplete = function() {
            var str = "";
            str += this.name + " " + this.surname + ", ";
            str += this.birth.toString();
            return str;
        }
        this.toString = function() {
            var str = "";
            str += this.name + " " + this.surname;
            return str;
        }
        this.age = function () {
            var currentYear = 2021;
            return currentYear - this.birth.year;
        }
    }
    /**
     * @param {Person} person 
     * @param {number} betAmount 
     * @param {Country} country 
     */
    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        // to avoid calculating win each time toString() is called
        this.win = this.country.odds * this.betAmount; // can you do this safely?
        this.toString = function() {
            var str = "";
            str += this.country.name + ", ";    
            str += this.win + " €, "
            str += this.person.toString() + ", " + this.person.age();
            return str;
        }
        this.toStringWithBetAmount = function() {
            var str = "";
            str += this.country.name + ", ";    
            str += this.betAmount + " €, "
            str += this.person.toString() + ", " + this.person.age();
            return str;
        }
    }

    /**
     * @param {Country} country 
     * @param {string} city 
     * @param {number} postalCode 
     * @param {string} street 
     * @param {number} number 
     */
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.toString = function () {
            var str = "";
            str += this.street + " " + this.number  + ", "
            + this.postalCode + " " + this.city + ", "
            + this.country.name;
            return str;
        }
        this.toStringWithoutStreetNum = function() {
            var str = "";
            str += this.street + ", "
            + this.postalCode + " " + this.city + ", " + this.country.name;
            return str;
        }
    }

    /**
     * BettingPlace constructor
     * @param {Address} address 
     */
    function BettingPlace(address) {
        this.address = address;
        this.playerList = [];
        this.sumOfBets = 0; // running count of all placed bets (see addPlayer())
        /**
         * Adds a Player to this BettingPlace's list of players
         * @param {Player} newPlayer a Player object to be added
         */
        this.addPlayer = function (newPlayer) {
            this.playerList.push(newPlayer);
            // keep running count of all the placed bets, you need it for the
            // toString method:
            this.sumOfBets += newPlayer.betAmount;
        };

        this.toString = function () {
            var str = "";
            str += this.address.toStringWithoutStreetNum() + ", ";
            // str += this.address.street + ", ";
            // str += this.address.postalCode + " " + this.address.city + ", ";
            str += "sum of all bets: " + this.sumOfBets + "€";
            // for (var player in this.playerList) {
            //     str += player.toString();
            //     str += "\n";
            // }
            return str;
        };

        /**
         * 
         * @returns the number of players for this betting place, which is
         * apparently the same as the number of bets (I guess the same Person
         * can be the property of multiple Player objects, betting on
         * different countries... (don't know anything about betting))
         */
        this.nPlayers = function () {
            return this.playerList.length;
        };
    }

    /**
     * BettingHouse constructor:
     * properties: 
     * competition, list of betting places (initially empty) and number of players
     * @param {string} competition 
     * @param {number} nPlayers 
     */
    function BettingHouse(competition) {
        this.competition = competition;
        this.betPlaces = [];
        /**
         * Adds newBettingPlace to the list of this BettingHouse's betting places
         * @param {BettingPlace} newBettingPlace 
         */
        this.addBettingPlace = function(newBettingPlace) {
            this.betPlaces.push(newBettingPlace);
        }
        /**
         * Implementation notes: since the number of bets can change after
         * a betting place is added to betPlaces, this needs to be
         * calculated for each call separately.
         * 
         * Also, the number of bets for each betting place equals the number of
         * players added to its list (see comment for BettingPlace.nPlayers())
         * @returns 
         */
        this.getNBets = function() {
            var totalBets = 0;
            for (var i = 0; i < this.betPlaces.length; i++) {
                totalBets += this.betPlaces[i].nPlayers();
            }
            // for (var betPlc in this.betPlaces) { //this doesn't work...???
            //     totalBets += betPlc.nPlayers();
            // }
            return totalBets;
        }
        /**
         * @returns The copy of betting places associated with this BettingHouse,
         * as an array; copy returned to prevent modification of the object
         */
        // this.getBettingPlaces = function() {
        //     var copy = [];
        //     for (var i = 0; i < this.betPlaces.length; i++) {
        //         copy.push(JSON.parse(JSON.stringify(betPlc)));
        //     }
        //     // for (var betPlc in this.betPlaces) { // doesn't work
        //     //     copy.push(JSON.parse(JSON.stringify(betPlc)));
        //     // }
        //     return copy;
        // };
        this.toString = function() {
            var str = "";
            str += this.competition + ", ";
            str += this.betPlaces.length + " betting places, ";
            str += this.getNBets() + " bets\n";
            // list each betting place
            for (var i = 0; i < this.betPlaces.length; i++) {
                str += "\t" + this.betPlaces[i].toString(); 
                // list each player for current betting place
                var players = this.betPlaces[i].playerList;
                for (var j = 0; j < players.length; j++) {
                    str += "\t\t" + players[j].toStringWithBetAmount() + "\n";
                }
            }
            // for (var betPlc in this.betPlaces) {
            //     str += betPlc.toString();
            // }
            return str;
        };
        /**
         * 
         * @param {Country} country 
         * @returns the number of bets for given country
         */
        this.getAllBetsOnCountry = function(country) {
            var sumOfBets = 0;
            for (var i = 0; i < this.betPlaces.length; i++) {
                var players = this.betPlaces[i].playerList;
                for (var j = 0; j < players.length; j++) {
                    if (players[j].country.name === country.name) sumOfBets++;
                }
            }
            // for (var betPlc in this.betPlaces) {
            //     for (var player in betPlc.playerList) {
            //         if (JSON.stringify(country) === JSON.stringify(player.country)) {
            //             sumOfBets++;
            //         }
            //     }
            // }
            return sumOfBets;
        };
    }

    function log(str) {
        console.log(str);
    }

    function debug() {
        log("Testing Person constructor......................");
        var sonja = new Person("Sonja", "Musicki", new Date(11, 5, 1979));
        log("Sonja's age: " + sonja.age());
        log(sonja.toString());
        log(sonja.toStringComplete());
        log("JSON.stringify(sonja): "+ JSON.stringify(sonja));
        var vlada = new Person("Vlada", "Bognar", new Date(14, 5, 1979));
        log("Vlada's age: " + sonja.age());
        log(vlada.toString());
        log(vlada.toStringComplete());
        log("JSON.stringify(vlada): "+ JSON.stringify(vlada));

        log("########################################################");
        log("Testing Country constructor.......................");
        var serbia = new Country("Serbia", 2, CONTINENT.EUROPE);
        log("stringify output: " + JSON.stringify(serbia));
        var uk = new Country("UK", 1.5, CONTINENT.EUROPE);
        log("stringify output: " + JSON.stringify(uk));

        log("########################################################");
        log("Testing Address constructor.......................");
        var addrNS = new Address(serbia , "Novi Sad", 21000, "Zmaj Jovina", 1);
        log("test toString() method: " + addrNS.toString());
        log("stringify output: " + JSON.stringify(addrNS));
        log("test toStringWithoutStreetNum() " + addrNS.toStringWithoutStreetNum());

        var addrBG = new Address(serbia, "Belgrade", 11000, "Nemanjina", 4);
        log("test toString() method: " + addrBG.toString());
        log("test toStringWithoutStreetNum() " + addrBG.toStringWithoutStreetNum());
        log("stringify output: " + JSON.stringify(addrBG));

        log("########################################################");
        log("Testing Player constructor.......................");
        var plyr1 = new Player(sonja, 100, serbia);
        log("Player 1:")
        log("toString() " + plyr1.toString());
        log("stringify output: " + JSON.stringify(plyr1));

        var plyr2 = new Player(vlada, 200, uk);
        log("Player 2: ");
        log("toString() " + plyr2.toString());
        log("stringify output: " + JSON.stringify(plyr2));

        log("########################################################");
        log("Testing BettingPlace constructor.......................");
        var btplc = new BettingPlace(addrBG);
        log("Test nPlayers()... Expecting 0.....: " + btplc.nPlayers());
        btplc.addPlayer(plyr1);
        btplc.addPlayer(plyr2);
        log("toString(): " + btplc.toString());
        log("stringify output: " + JSON.stringify(btplc));
        log("Adding player #3 to betting place.....................");
        var person3 = new Person("Jane", "Doe", new Date(1, 1, 1950));
        var plyr3 = new Player(person3, 200, serbia);
        btplc.addPlayer(plyr3);
        log("Calling toString() again: " + btplc.toString());
        log("and stringify....: " + JSON.stringify(btplc));
        log("Test nPlayers()... Expecting 3.....: " + btplc.nPlayers());

        var addrSU = new Address(serbia, "Subotica", 24000, "Dunavska", 22);
        var btplc2 = new BettingPlace(addrSU);
        btplc2.addPlayer(new Player(new Person("John", "Smith", new Date(20, 1, 2000)),
                    1000, uk));
        btplc2.addPlayer(new Player(new Person("Jimmy", "Joe", new Date(20, 1, 2010)),
                    2000, serbia));


        log("########################################################");
        log("Testing BettingHouse constructor........................");
        var bths = new BettingHouse("Football World Cup Winner");
        log("toString():\n" + bths.toString());
        log("stringify:\n" + JSON.stringify(bths));
        log("Adding 1 betting place to betting house..................");
        bths.addBettingPlace(btplc);
        log("stringify: " + JSON.stringify(bths));
        log("toString(): " + bths.toString());
        log("Adding second betting place to betting house..................");
        bths.addBettingPlace(btplc2);
        log("stringify:\n" + JSON.stringify(bths));
        log("toString():\n\n " + bths.toString());
        log("There are " + bths.getAllBetsOnCountry(serbia) + " bets on Serbia");
    }

    debug();

    ////////////////////////////////////////////////////////////////////////////

    // Inside your immediately-invoking function, add a function that returns a created Player.
    /**
     * Returns a new Player object from primitive values
     * @param {string} name 
     * @param {string} surname 
     * @param {number} birthDay 
     * @param {number} birthMonth 
     * @param {number} birthYear 
     * @param {number} betAmount 
     * @param {string} country 
     * @param {number} odds 
     * @param {CONTINENT} CONTINENT 
     */
    function createPlayerFromRawData(name, surname, birthDay, birthMonth, 
                birthYear, betAmount, country, odds, CONTINENT) {
        var dateOfBirth = new Date(birthDay, birthMonth, birthYear);
        var person = new Person(name, surname, dateOfBirth)
        var countryObject = new Country(country, odds, CONTINENT);
        // return new Player(person, betAmount, countryObject);
        return createPlayer(person, betAmount, countryObject);
    }

    /**
     * Returns a new Player object from object input
     * @param {Person} person 
     * @param {number} betAmount 
     * @param {Country} country 
     */
    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function testCreatePlayer() {
        var player1 = createPlayerFromRawData("John", "Smith", 1, 2, 1990,
                    100, "UK", 2, CONTINENT.EUROPE);
        console.log(player1);

        var person2 = new Person("Bleki", "Blek", 1, 1, 2000);
        var betAmount2 = 500;
        var country2 = new Country("Germany", 2, CONTINENT.EUROPE);
        var player2 = createPlayer(person2, betAmount2, country2);
        console.log(player2);
    }

    // console.log("Calling testCreatePlayer().......................");
    // testCreatePlayer();

    /**
     * 
     * @param {string} countryName 
     * @param {number} countryOdds 
     * @param {string} CONTINENT
     * @param {string} city 
     * @param {number} postalCode 
     * @param {string} street 
     * @param {number} number 
     * @returns 
     */
    function createBettingPlaceFromRawData(countryName, countryOdds, CONTINENT, 
                            city, postalCode, street, number) {
        var country = new Country(countryName, countryOdds, CONTINENT);
        var address = new Address(country, city, postalCode, street, number);
        // return new BettingPlace(address);
        return createBettingPlace(address);
    }

    /**
     * 
     * @param {Address} address 
     * @returns 
     */
    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    function testCreateBettingPlace() {
        var bettingPlc1 = createBettingPlaceFromRawData("Zambia", 3, 
        CONTINENT.AFRICA, "SomeCityInZambia", 33444, "Zambian Street", 99);
        console.log(bettingPlc1);
        var sonja = new Person("Sonja", "Musicki", new Date(11, 5, 1979));
        var plyr1 = new Player(sonja, 100, new Country("SR", 1.5, CONTINENT.EUROPE));
        var vlada = new Person("Vlada", "Bognar", new Date(14, 5, 1979));
        var plyr2 = new Player(vlada, 200, new Country("SR", 1.5, CONTINENT.EUROPE));
        bettingPlc1.addPlayer(plyr1);
        bettingPlc1.addPlayer(plyr2);
        console.log(bettingPlc1);
        console.log("# players for this betting place: " + bettingPlc1.nPlayers());
    }

    // console.log("Calling testCreateBettingPlace().........................");
    // testCreateBettingPlace();

    
    function finalTest() {
        var country1 = new Country("Serbia", 2, CONTINENT.EUROPE);
        var country2 = new Country("UK", 1.5, CONTINENT.EUROPE);
        var country3 = new Country("USA", 1, CONTINENT.NORTH_AMERICA);

        var person1 = new Person("Sonja", "Tralala", new Date(22, 2, 2002));
        var person2 = new Person("John", "Smith", new Date(1, 2, 1990));
        var person3 = new Person("Benny", "Goodman", new Date(1, 2, 1920));
        var person4 = new Person("Vlada", "Vladić", new Date(14, 4, 1940));

        var player1 = createPlayer(person1, 1000, country1);
        var player2 = createPlayer(person2, 200, country2);
        var player3 = createPlayer(person3, 200, country3);
        var player4 = createPlayer(person4, 600, country1);

        // var player2 = createPlayerFromRawData("John", "Smith", 1, 2, 1990,
        // 100, "UK", 2, CONTINENT.EUROPE);
        // var player3 = createPlayerFromRawData("Benny", "Goodman", 1, 2, 1920,
        // 100, "USA", 2, CONTINENT.NORTH_AMERICA);
        // var player4 = createPlayerFromRawData("Vlada", "Vladić", 14, 4, 1940,
        //     500, "Serbia", 2, CONTINENT.EUROPE);

        // console.log("Listing players...........");
        // console.log(JSON.stringify(player1));
        // console.log(JSON.stringify(player2));
        // console.log(JSON.stringify(player3));
        // console.log(JSON.stringify(player4));
        // console.log("...........................")

        var address1 = new Address("SR" , "Belgrade", 11000, "Nemanjina", 4);
        var address2 = new Address("SR", "Novi Sad", 21000, "Zmaj Jovina", 1);
        
        // var bettingPlc1 = createBettingPlaceFromRawData("Serbia", 2, 
        // CONTINENT.EUROPE, "Belgrade", 11000, "Nemanjina", 11);
        // var bettingPlc2 = createBettingPlaceFromRawData("Serbia", 2, 
        // CONTINENT.EUROPE, "Novi Sad", 21000, "Zmaj Jovina", 5);

        var bettingPlc1 = createBettingPlace(address1);
        var bettingPlc2 = createBettingPlace(address2);
        
        bettingPlc1.addPlayer(player1);
        bettingPlc1.addPlayer(player2);
        bettingPlc2.addPlayer(player3);
        bettingPlc2.addPlayer(player4);

        // console.log("Listing betting places...........");
        // console.log("BETTING PLACE 1: " + JSON.stringify(bettingPlc1));
        // console.log("BETTING PLACE 2: " +JSON.stringify(bettingPlc2));
        // console.log("...........................")

        var competition = "Football World Cup Winner";
        var betHouse = new BettingHouse(competition);
        betHouse.addBettingPlace(bettingPlc1);
        betHouse.addBettingPlace(bettingPlc2);

        console.log(betHouse.toString());
        var nBetsForSerbia = betHouse.getAllBetsOnCountry(country1);
        console.log("There are " + nBetsForSerbia + " bets on Serbia");

        // display betting house data:


    }
    // console.log("The final test......................................");
    // finalTest();



})();

